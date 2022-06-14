using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_new_app.DTO;
using my_new_app.Models;
using my_new_app.Services;

namespace my_new_app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<TodoSignIn> _usermanager;
        private readonly SignInManager<TodoSignIn> _signInManager;
        private readonly TokenService _tokenService;
        public AccountController(UserManager<TodoSignIn> usermanager, SignInManager<TodoSignIn> signInManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _signInManager = signInManager;
            _usermanager = usermanager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto)
        {
            var user = await _usermanager.FindByEmailAsync(loginDto.Email);

            if (user == null)
            {
                return Unauthorized();
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (result.Succeeded)
            {
                return new UserDTO
                {
                    Displayname = user.DisplayName,
                    Image = null,
                    Token = _tokenService.CreateToken(user),
                    Username = user.UserName
                };
            }
            return Unauthorized();

        }
        

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO){

            if(await _usermanager.Users.AnyAsync(x => x.Email == registerDTO.Email)) {
                return BadRequest("Email Taken");
            }  
             if(await _usermanager.Users.AnyAsync(x => x.UserName == registerDTO.Username)) {
                return BadRequest("UserName Taken");
            }          

            var user = new TodoSignIn{
                DisplayName = registerDTO.Displayname,
                Email = registerDTO.Email,
                UserName = registerDTO.Username
            };

            var result = await _usermanager.CreateAsync(user, registerDTO.Password);

            if(result.Succeeded){
                return new UserDTO{
                    Displayname = user.DisplayName,
                    Image = null,
                    Token = _tokenService.CreateToken(user),
                    Username = user.UserName
                };
            }
            return BadRequest("Could not register");
        }

        [HttpGet]

        public async Task<ActionResult<UserDTO>> GetCurrentUser(){
            var user = await _usermanager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

             return new UserDTO{
                    Displayname = user.DisplayName,
                    Image = null,
                    Token = _tokenService.CreateToken(user),
                    Username = user.UserName
                };
        }

    }
}
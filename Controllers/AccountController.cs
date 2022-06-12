using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using my_new_app.DTO;
using my_new_app.Models;

namespace my_new_app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<TodoSignIn> _usermanager;
        private readonly SignInManager<TodoSignIn> _signInManager;
        public AccountController(UserManager<TodoSignIn> usermanager, SignInManager<TodoSignIn> signInManager)
        {
            _signInManager = signInManager;
            _usermanager = usermanager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto){
            var user = await _usermanager.FindByEmailAsync(loginDto.Email);

            if(user == null){
                return Unauthorized();
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if(result.Succeeded){
                return new UserDTO{
                    Displayname = user.DisplayName,
                    Image = null,
                    Token = "Random token",
                    Username = user.UserName
                };
            }
                    return Unauthorized();

        }
    }
}
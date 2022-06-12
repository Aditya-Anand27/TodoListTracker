using Microsoft.AspNetCore.Identity;

namespace my_new_app.Models
{
    public class TodoSignIn : IdentityUser
    {
     
        public string? DisplayName{get; set;}

        public string? Bio{get; set;}
   
    }
}
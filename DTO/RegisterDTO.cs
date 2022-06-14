using System.ComponentModel.DataAnnotations;

namespace my_new_app.DTO
{
    public class RegisterDTO
    {
        [Required]
        public string? Displayname{get; set;}
        
        [Required]
        [EmailAddress]
        public string? Email{get; set;}
        
        [Required]
        public string? Password{get; set;}

        [Required]
        public string? Username{get; set;}

    }
}
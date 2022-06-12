using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace my_new_app.Models
{
    public class TodoSignInContext : IdentityDbContext<TodoSignIn>
    {
        public TodoSignInContext(DbContextOptions<TodoSignInContext> options)
            : base(options)
        {
        }

        public DbSet<TodoSignIn> TodoSignIn { get; set; } = null!;
    }
}
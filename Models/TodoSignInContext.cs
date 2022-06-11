using Microsoft.EntityFrameworkCore;

namespace my_new_app.Models
{
    public class TodoSignInContext : DbContext
    {
        public TodoSignInContext(DbContextOptions<TodoSignInContext> options)
            : base(options)
        {
        }

        public DbSet<TodoSignIn> TodoSignIn { get; set; } = null!;
    }
}
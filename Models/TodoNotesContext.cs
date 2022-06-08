using Microsoft.EntityFrameworkCore;

namespace my_new_app.Models
{
    public class TodoNotesContext : DbContext
    {
        public TodoNotesContext(DbContextOptions<TodoNotesContext> options)
            : base(options)
        {
        }

        public DbSet<TodoNotes> TodoNotes { get; set; } = null!;
    }
}
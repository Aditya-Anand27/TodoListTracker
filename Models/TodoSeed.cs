namespace my_new_app.Models
{
    public class TodoSeed
    {

        public static async Task SeedData(TodoContext context)
        {
            if (context.TodoItems.Any()) return;
            
            var activities = new List<TodoItem>
            {
                  new TodoItem
                {
        Id= 1,
        Name= "Walk snake",
        Date= new DateTime(2008, 6, 1),
        isComplete= true
    },
                new TodoItem
                {
        Id= 2,
        Name= "Punch Man U fan",
        Date= new DateTime(2008, 6, 1),
        isComplete= true
    }
            };

            await context.TodoItems.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}
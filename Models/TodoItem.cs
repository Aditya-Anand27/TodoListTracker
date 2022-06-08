namespace my_new_app.Models
{
    public class TodoItem
    {
     
        public int Id{get; set;}
        public string? Name {get; set;}

        public DateTime Date{get; set;}

        public bool isComplete {get; set;}
   
    }
}
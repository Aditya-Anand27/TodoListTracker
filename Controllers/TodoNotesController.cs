using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_new_app.Models;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoNotesController : ControllerBase
    {
        private readonly TodoNotesContext _context;

        public TodoNotesController(TodoNotesContext context)
        {
            _context = context;
        }

        // GET: api/TodoNotes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoNotes>>> GetTodoNotes()
        {
          if (_context.TodoNotes == null)
          {
              return NotFound();
          }
            return await _context.TodoNotes.ToListAsync();
        }

        // GET: api/TodoNotes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoNotes>> GetTodoNotes(int id)
        {
          if (_context.TodoNotes == null)
          {
              return NotFound();
          }
            var todoNotes = await _context.TodoNotes.FindAsync(id);

            if (todoNotes == null)
            {
                return NotFound();
            }

            return todoNotes;
        }

        // PUT: api/TodoNotes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoNotes(int id, TodoNotes todoNotes)
        {

            if (id != todoNotes.Id)
            {
                return BadRequest();
            }

            _context.Entry(todoNotes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoNotesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TodoNotes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TodoNotes>> PostTodoNotes(TodoNotes todoNotes)
        {
          if (_context.TodoNotes == null)
          {
              return Problem("Entity set 'TodoNotesContext.TodoNotes'  is null.");
          }
            _context.TodoNotes.Add(todoNotes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTodoNotes", new { id = todoNotes.Id }, todoNotes);
        }

        // DELETE: api/TodoNotes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoNotes(int id)
        {
            if (_context.TodoNotes == null)
            {
                return NotFound();
            }
            var todoNotes = await _context.TodoNotes.FindAsync(id);
            if (todoNotes == null)
            {
                return NotFound();
            }

            _context.TodoNotes.Remove(todoNotes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoNotesExists(int id)
        {
            return (_context.TodoNotes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

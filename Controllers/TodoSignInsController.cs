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
    public class TodoSignInsController : ControllerBase
    {
        private readonly TodoSignInContext _context;

        public TodoSignInsController(TodoSignInContext context)
        {
            _context = context;
        }

        // GET: api/TodoSignIns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoSignIn>>> GetTodoSignIn()
        {
          if (_context.TodoSignIn == null)
          {
              return NotFound();
          }
            return await _context.TodoSignIn.ToListAsync();
        }

        // GET: api/TodoSignIns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoSignIn>> GetTodoSignIn(int id)
        {
          if (_context.TodoSignIn == null)
          {
              return NotFound();
          }
            var todoSignIn = await _context.TodoSignIn.FindAsync(id);

            if (todoSignIn == null)
            {
                return NotFound();
            }

            return todoSignIn;
        }

        // PUT: api/TodoSignIns/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoSignIn(int id, TodoSignIn todoSignIn)
        {
            if (id != todoSignIn.Id)
            {
                return BadRequest();
            }

            _context.Entry(todoSignIn).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoSignInExists(id))
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

        // POST: api/TodoSignIns
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TodoSignIn>> PostTodoSignIn(TodoSignIn todoSignIn)
        {
          if (_context.TodoSignIn == null)
          {
              return Problem("Entity set 'TodoSignInContext.TodoSignIn'  is null.");
          }
            _context.TodoSignIn.Add(todoSignIn);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTodoSignIn", new { id = todoSignIn.Id }, todoSignIn);
        }

        // DELETE: api/TodoSignIns/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoSignIn(int id)
        {
            if (_context.TodoSignIn == null)
            {
                return NotFound();
            }
            var todoSignIn = await _context.TodoSignIn.FindAsync(id);
            if (todoSignIn == null)
            {
                return NotFound();
            }

            _context.TodoSignIn.Remove(todoSignIn);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoSignInExists(int id)
        {
            return (_context.TodoSignIn?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

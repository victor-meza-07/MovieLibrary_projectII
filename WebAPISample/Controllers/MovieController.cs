using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            List<Movie> movies = _context.Movies.Where(s => s.MovieId > 0).ToList();
            // Retrieve all movies from db logic
            return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            // return Ok(movie);

            //sample logic
            var MovieReturned = _context.Movies.Where(a => a.MovieId == id).FirstOrDefault(); //returns a movie object
            var ImageForMovie = _context.MovieImages.Where(i => i.MovieId == MovieReturned.MovieId).FirstOrDefault();//returns an image collection. 
            return Ok();
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            return Ok();
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Movie movie = _context.Movies.Where(s => s.MovieId ==id).FirstOrDefault();
            _context.Remove(movie);
            _context.SaveChanges();
                
            // Delete movie from db logic
            return Ok();
        }
    }
}
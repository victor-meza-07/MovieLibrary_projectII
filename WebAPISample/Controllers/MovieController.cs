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
            
            // Retrieve all movies from db logic
            return Ok(_context.Movies);
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
            return Ok(MovieReturned);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            var movie = value;
            _context.Add(movie);
            _context.SaveChanges();
               
            // Create movie in db logic
            return Ok(movie);
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        { Movie movie1 = _context.Movies.Where(s => s.MovieId == movie.MovieId).FirstOrDefault();
            movie1 = movie;
            _context.Update(movie1);
            _context.SaveChanges();
            // Update movie in db logic
            return Ok(movie1);
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
        [HttpGet, Route("movieId/{id}")]
        public IActionResult GETIMAGE(int id)
        {
            // Retrieve image by id from db logic
            // return Ok(image);

            //sample logic
           
            var ImageForMovie = _context.MovieImages.Where(i => i.MovieId == id).ToList();//returns an image collection. 
            return Ok(ImageForMovie);
        }
        [HttpGet("{title}")]
        public IActionResult GetMovieFromTitle(string title)
        {
            // Retrieve movie by title from db logic
            // return Ok(movie);

            //sample logic

            var Movie = _context.Movies.Where(s => s.Title == title).ToList();//returns an image collection. 
            return Ok(Movie);
        }

    }
}
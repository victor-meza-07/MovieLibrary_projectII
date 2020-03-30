using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPISample.Models
{
    public class MovieImagesModel
    {
        [Key]
        public int PrimaryKey { get; set; }
        
        [ForeignKey("MovieId")]
        public int MovieId { get; set; }
        public string ImageUrl { get; set; }
    }
}

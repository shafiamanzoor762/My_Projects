using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Business_Logic_Layer
{
    public class Gift
    {
        public int Id {  get; set; }
        public string Name { get; set; }        
        public float Price { get; set; }
        public string Category { get; set; }
        public  int In_stock { get; set; }
        public string ImagePath {  get; set; }
}
}

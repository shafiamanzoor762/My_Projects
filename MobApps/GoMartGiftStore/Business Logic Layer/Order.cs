using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Business_Logic_Layer
{
    public class Order
    {
        public int Oid {  get; set; }
        public int Cid { get; set; }
        public DateTime Date { get; set; }
        public float Tprice { get; set; }
        public string Status {  get; set; }
        public string Pack_Theme { get; set; }
        public float ThemePr { get; set; }

    }
}

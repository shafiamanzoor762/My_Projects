using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer
{
    public class DBManager
    {

        string conStr = @"Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=GiftShopp;Data Source=DESKTOP-DSQ3FJO\SQLEXPRESS";
        public int InsertUpdateDelete(string query)
        {
            SqlConnection con = new SqlConnection(conStr);
            con.Open();
            SqlCommand cmd = new SqlCommand(query, con);
            int r = cmd.ExecuteNonQuery();
            con.Close();
            return r;
        }
        public DataTable Fetch(string query)
        {
            SqlConnection con = new SqlConnection(conStr);
            con.Open();
            SqlCommand cmd = new SqlCommand(query, con);
            SqlDataReader sdr = cmd.ExecuteReader();
            DataTable dt = new DataTable();
            dt.Load(sdr);
            sdr.Close();
            con.Close();
            return dt;
        }
    }
}

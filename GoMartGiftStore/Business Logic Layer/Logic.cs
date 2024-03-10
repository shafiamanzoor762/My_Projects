using Data_Access_Layer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Business_Logic_Layer
{
    public class Logic
    {
        DBManager mgr=new DBManager();

        //Save
        public int SaveGift(Gift g)
        {
            return mgr.InsertUpdateDelete($"INSERT INTO Gift(gname ,price ,category ,in_stock ,gftImg) VALUES ('{g.Name}','{g.Price}','{g.Category}','{g.In_stock}','{g.ImagePath}')")  ;
        }
        public int SaveCustomer(Customer c)
        {
            return mgr.InsertUpdateDelete($"INSERT INTO Customer(cname ,email ,password ,profPic) VALUES ('{c.Name}','{c.Email}','{c.Password}','C:\\Users\\ab140\\Downloads\\GoMartGiftShop\\profile.png')");
        }
        public int SaveAdmin(Admin a)
        {
            return mgr.InsertUpdateDelete($"INSERT INTO Admin(admname ,password) VALUES ('{a.Name}','{a.Password}')");
        }
        public int SaveAddons(Addons a)
        {
            return mgr.InsertUpdateDelete($"INSERT INTO Addons(oid ,addname ,addPr) VALUES ('{a.Oid}','{a.Name}','{a.Price}')");
        }
        public int SaveOrder(Order o)
        {
            return mgr.InsertUpdateDelete($"INSERT INTO Orders(cid ,odate ,t_amt ,ostatus ,pack_Theme ,themePr) VALUES ('{o.Cid}','{o.Date}','{o.Tprice}','{o.Status}','{o.Pack_Theme}','{o.ThemePr}')");
        }
        public int SaveOrderGift(OrderGift og)
        {
            return mgr.InsertUpdateDelete($"INSERT INTO OrderGift(oid , gid , quantity , subtotal) VALUES ('{og.Oid}','{og.Gid}','{og.Quant}','{og.Subtotal}')");
        }
        //Update
        public int UpdateGift(Gift g)
        {
            return mgr.InsertUpdateDelete($"UPDATE Gift SET gname ='{g.Name}',price ='{g.Price}',category ='{g.Category}',in_stock ='{g.In_stock}',gftImg ='{g.ImagePath}' WHERE gid ='{g.Id}'");
        }
        public int UpdateGiftStock(int id, int in_stock)
        {
            return mgr.InsertUpdateDelete($"UPDATE Gift SET  in_stock ='{in_stock}'WHERE gid='{id}'");
        }
        public int UpdateCustomerName(int id,string name)
        {
            return mgr.InsertUpdateDelete($"UPDATE Customer SET cname ='{name}' WHERE cid={id}");
        }
        public int UpdateCustomerPass(int id, string password)
        {
            return mgr.InsertUpdateDelete($"UPDATE Customer SET password ='{password}' WHERE cid='{id}'");
        }
        public int UpdateCustomerProfPic(int id, string profpic)
        {
            return mgr.InsertUpdateDelete($"UPDATE Customer SET profPic ='{profpic}' WHERE cid='{id}'");
        }
        public int UpdateAdmin(Admin a)
        {
            return mgr.InsertUpdateDelete($"UPDATE Admin SET admid ='{a.Id}',admname ='{a.Name}',password ='{a.Password}'");
        }
        public int UpdateAddons(Addons a)
        {
            return mgr.InsertUpdateDelete($"UPDATE Addons SET addid ='{a.Id}',oid ='{a.Oid}',addname ='{a.Name}',addPr ='{a.Price}'");
        }
        public int UpdateOrderStatus(int id,string status)
        {
            return mgr.InsertUpdateDelete($"UPDATE Orders SET ostatus ='{status}'WHERE oid='{id}'");
        }
        public int UpdateOrderGift(OrderGift og)
        {
            return mgr.InsertUpdateDelete($"UPDATE Order SET ogftid ='{og.Ogftid}',oid ='{og.Oid}',gid ='{og.Gid}',quantity ='{og.Quant}',subtotal ='{og.Subtotal}'");
        }
        //Delete by Id
        public int DeleteGift(int id)
        {
            return mgr.InsertUpdateDelete($"DELETE FROM Gift WHERE gid = '{id}'");
        }
        public int DeleteCustomer(int id)
        {
            return mgr.InsertUpdateDelete($"DELETE FROM Customer WHERE cid = '{id}'");
        }
        public int DeleteAdmin(int id)
        {
            return mgr.InsertUpdateDelete($"DELETE FROM Admin WHERE admid = '{id}'");
        }
        public int DeleteAddons(int id)
        {
            return mgr.InsertUpdateDelete($"DELETE FROM Addons WHERE addid = '{id}'");
        }
        public int DeleteOrder(int id)
        {
            return mgr.InsertUpdateDelete($"DELETE FROM Order WHERE oid = '{id}'");
        }
        public int DeleteOrderGift(int id)
        {
            return mgr.InsertUpdateDelete($"DELETE FROM Customer WHERE ogftid = '{id}'");
        }
        //Search
        
        public List<Gift> FetchGift()
        {
            DataTable dataTable = mgr.Fetch("SELECT * FROM Gift");
            List<Gift> gifts = new List<Gift>();
            foreach (DataRow dr in dataTable.Rows) {
                gifts.Add(new Gift { 
                    Id = int.Parse(dr[0].ToString()),
                    Name = dr[1].ToString(),
                    Price = float.Parse(dr[2].ToString()),
                    Category = dr[3].ToString(),
                    In_stock = int.Parse(dr[4].ToString()),
                    ImagePath = dr[5].ToString()
                }); 
            }
            return gifts;
        }
        
        public List<Customer> FetchCustomer()
        {
            DataTable dataTable = mgr.Fetch("SELECT * FROM Customer");
            List<Customer> customer = new List<Customer>();
            foreach (DataRow dr in dataTable.Rows) {  
                customer.Add(new Customer {
                    Id = int.Parse(dr[0].ToString()),
                    Name = dr[1].ToString(),
                    Email = dr[2].ToString(),
                    Password = dr[3].ToString(),
                    ProfPic = dr[4].ToString()
                });
            }
            return customer;
        }
        public List<Admin> FetchAdmin()
        {
            DataTable dataTable = mgr.Fetch("SELECT * FROM Admin");
            List<Admin> admin = new List<Admin>();
            foreach (DataRow dr in dataTable.Rows)
            {
                admin.Add(new Admin
                {
                    Id = int.Parse(dr[0].ToString()),
                    Name = dr[1].ToString(),
                    Password = dr[2].ToString(),
                });
            }
            return admin;
        }
        public List<Order> FetchOrder()
        {
            DataTable dataTable = mgr.Fetch("SELECT * FROM Orders");
            List<Order> order= new List<Order>();
            foreach (DataRow dr in dataTable.Rows)
            {
                order.Add(new Order
                {
                    Oid = int.Parse(dr[0].ToString()),
                    //Cid = int.Parse(dr[1].ToString()),
                    //Date = DateTime.Parse(dr[2].ToString()),
                    //Tprice = int.Parse(dr[3].ToString()),
                    //Status = dr[4].ToString(),
                    //Pack_Theme = dr[5].ToString(),
                    //ThemePr = int.Parse(dr[5].ToString())
                });
            }
            return order;
        }
        public DataTable FetchOrderTable()
        {
            return mgr.Fetch("SELECT * FROM Orders");

        }
    }
}

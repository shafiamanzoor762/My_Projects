using Bunifu.Framework.UI;
using Business_Logic_Layer;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography;
using System.Windows.Forms;

namespace GoMartGiftStore
{
    public partial class Home : BunifuForm
    {
        List<Gift> gifts = new List<Gift>();
		List<Gift> gift = new List<Gift>();
		List<Gift> giftsGirls = new List<Gift>();
        List<Gift> giftsBoys = new List<Gift>();
        Logic lg = new Logic();

        public Home()
        {
            InitializeComponent();
        }
        private void Home_Load(object sender, EventArgs e)
        {
            btnBack.Visible = false;
            btnNext.Visible= false;

            //btnAdd1.Visible= true;
            //btnAdd2.Visible= true;
            //btnAdd3.Visible= true;
            //btnAdd4.Visible= true;
            //btnAdd5.Visible= true;
            //btnAdd6.Visible= true;
            //btnAdd7.Visible= true;
            //btnAdd8.Visible= true;

            panlStart.Visible = true;
            panlWrapping.Visible = false;
            panlSettings.Visible = false;
            btnWrappings.Enabled= false;
            gift = lg.FetchGift();
            gifts = gift;
            giftsGirls = gifts.Where(s => s.Category == "Girl").ToList();
            giftsBoys = gifts.Where(s => s.Category == "Boy").ToList();            
        }

        private void btnHome_Click(object sender, EventArgs e)
        {
            panlStart.Visible = false;
            panlWrapping.Visible = false;
            panlSettings.Visible = false;
            gifts = gift;

			LoadData(0);
        }


        int j = 0;
        private void btnGirls_Click(object sender, EventArgs e)
        {            
            panlStart.Visible = false;
            panlWrapping.Visible = false;
            panlSettings.Visible = false;
            gifts = giftsGirls;
            if (gifts.Count > 8) { btnNext.Visible = true; }
            j = 0;
            LoadData(j);
        }

        private void btnBoys_Click(object sender, EventArgs e)
        {
            panlStart.Visible = false;
            panlWrapping.Visible = false;
            panlSettings.Visible = false;
            gifts = giftsBoys;
            if (gifts.Count > 8) { btnNext.Visible = true; }
            j = 0;
            LoadData(j);
        }

        private void btnNext_Click(object sender, EventArgs e)
        {
            btnBack.Visible = true;
            j =j+8;
            LoadData(j);
        }

        private void btnBack_Click(object sender, EventArgs e)
        {
            j=j-8;
            LoadData(j);
        }
        List<Gift> giftOrder = new List<Gift>();
        private void btnAdd1_Click(object sender, EventArgs e)
        {            
            lblQty1.Text=(int.Parse(lblQty1.Text) + 1).ToString();
            giftOrder.RemoveAll(gift => gift.Name == lblNam1.Text);
            giftOrder.Add(new Gift { Name = lblNam1.Text, In_stock =int.Parse(lblQty1.Text)});
        }

        private void btnAdd2_Click(object sender, EventArgs e)
        {          
            lblQty2.Text = (int.Parse(lblQty2.Text) + 1).ToString();
            giftOrder.RemoveAll(gift => gift.Name == lblNam2.Text);
            giftOrder.Add(new Gift { Name = lblNam2.Text, In_stock = int.Parse(lblQty2.Text) });
        }

        private void btnAdd3_Click(object sender, EventArgs e)
        {            
            lblQty3.Text = (int.Parse(lblQty3.Text) + 1).ToString();
            giftOrder.RemoveAll(gift => gift.Name == lblNam3.Text);
            giftOrder.Add(new Gift { Name = lblNam3.Text, In_stock = int.Parse(lblQty3.Text) });
        }

        private void btnAdd4_Click(object sender, EventArgs e)
        {            
            lblQty4.Text = (int.Parse(lblQty4.Text) + 1).ToString();
            giftOrder.RemoveAll(gift => gift.Name == lblNam4.Text);
            giftOrder.Add(new Gift { Name = lblNam4.Text, In_stock = int.Parse(lblQty4.Text) });
        }

        private void btnAdd5_Click(object sender, EventArgs e)
        {            
            lblQty5.Text = (int.Parse(lblQty5.Text) + 1).ToString();
            giftOrder.RemoveAll(gift => gift.Name == lblNam5.Text);
            giftOrder.Add(new Gift { Name = lblNam5.Text, In_stock = int.Parse(lblQty5.Text) });
        }

        private void btnAdd6_Click(object sender, EventArgs e)
        {            
            lblQty6.Text = (int.Parse(lblQty6.Text) + 1).ToString();
            giftOrder.RemoveAll(gift => gift.Name == lblNam6.Text);
            giftOrder.Add(new Gift { Name = lblNam6.Text, In_stock = int.Parse(lblQty6.Text) });
        }

        private void btnAdd7_Click(object sender, EventArgs e)
        {           
            lblQty7.Text = (int.Parse(lblQty7.Text) + 1).ToString();
            giftOrder.RemoveAll(gift => gift.Name == lblNam7.Text);
            giftOrder.Add(new Gift { Name = lblNam7.Text, In_stock = int.Parse(lblQty7.Text) });
        }

        private void btnAdd8_Click(object sender, EventArgs e)
        {            
            lblQty8.Text = (int.Parse(lblQty8.Text) + 1).ToString();
            giftOrder.RemoveAll(gift => gift.Name == lblNam8.Text);
            giftOrder.Add(new Gift { Name = lblNam8.Text, In_stock = int.Parse(lblQty8.Text) });
        }

        private void btnSub1_Click(object sender, EventArgs e)
        {
            if (int.Parse(lblQty1.Text) > 1)
            {
                lblQty1.Text = (int.Parse(lblQty1.Text) - 1).ToString();
                UpdateGiftQuantity(lblNam1.Text, int.Parse(lblQty1.Text));
            }
            else lblQty1.Text = 0.ToString();

        }

        private void btnSub2_Click(object sender, EventArgs e)
        {
            if (int.Parse(lblQty2.Text) > 1)
            {
                lblQty2.Text = (int.Parse(lblQty2.Text) - 1).ToString();
                UpdateGiftQuantity(lblNam2.Text, int.Parse(lblQty2.Text));
            }
            else lblQty2.Text = 0.ToString();
        }

        private void btnSub3_Click(object sender, EventArgs e)
        {
            if (int.Parse(lblQty3.Text) > 1)
            {
                lblQty3.Text = (int.Parse(lblQty3.Text) - 1).ToString();
                UpdateGiftQuantity(lblNam3.Text, int.Parse(lblQty3.Text));
            }
            else lblQty3.Text = 0.ToString();
        }

        private void btnSub4_Click(object sender, EventArgs e)
        {
            if (int.Parse(lblQty4.Text) > 1)
            {
                lblQty4.Text = (int.Parse(lblQty4.Text) - 1).ToString();
                UpdateGiftQuantity(lblNam4.Text, int.Parse(lblQty4.Text));
            }
            else lblQty4.Text = 0.ToString();
        }

        private void btnSub5_Click(object sender, EventArgs e)
        {
            if (int.Parse(lblQty5.Text) > 1)
            {
                lblQty5.Text = (int.Parse(lblQty5.Text) - 1).ToString();
                UpdateGiftQuantity(lblNam5.Text, int.Parse(lblQty5.Text));
            }
            else lblQty5.Text = 0.ToString();
        }

        private void btnSub6_Click(object sender, EventArgs e)
        {
            if (int.Parse(lblQty6.Text) > 1)
            {
                lblQty6.Text = (int.Parse(lblQty6.Text) - 1).ToString();
                UpdateGiftQuantity(lblNam6.Text, int.Parse(lblQty6.Text));
            }
            else lblQty6.Text = 0.ToString();
        }

        private void btnSub7_Click(object sender, EventArgs e)
        {
            if (int.Parse(lblQty7.Text) > 1)
            {
                lblQty7.Text = (int.Parse(lblQty7.Text) - 1).ToString();
                UpdateGiftQuantity(lblNam7.Text, int.Parse(lblQty7.Text));
            }
            else lblQty7.Text = 0.ToString();
        }

        private void btnSub8_Click(object sender, EventArgs e)
        {
            if (int.Parse(lblQty8.Text) > 1)
            {
                lblQty8.Text = (int.Parse(lblQty8.Text) - 1).ToString();
                UpdateGiftQuantity(lblNam8.Text, int.Parse(lblQty8.Text));
            }
            else lblQty8.Text = 0.ToString();
        }

        private void btnWrappings_Click(object sender, EventArgs e)
        {
            btnBill.Enabled = false;
            panlStart.Visible = false;
            panlWrapping.Visible = true;
        }

        private void bunifuThinButton21_Click(object sender, EventArgs e)
        {
            panlStart.Visible = false;
            LoadData(0);
        }
     
        private void btnAddCart_Click(object sender, EventArgs e)
        {
            panlWrapping.Visible = true;
            btnWrappings.Enabled = true;
            btnBill.Enabled = false;
            List<Gift> g = lg.FetchGift();
            foreach (Gift gft in giftOrder) {
                Gift gf =  g.FirstOrDefault(p => p.Name == gft.Name);
                if(gf!=null)
                {
                    fOrders.Add(new FinalOrder { gftName = gf.Name,Qty=gft.In_stock, Price = gf.Price});
                }
            }
        }

        private void btnBill_Click(object sender, EventArgs e)
        {
            panlCheckOut.Visible = true;
            dgvDetails.Visible = false;
            dgvOrder.DataSource = fOrders;


            int themePr=0,addPr = 0;
            string Theme = string.Empty;

            if (combobxEvent.selectedIndex==0)
            {
                Theme = "Birthday";
                themePr += 5;
            }
            else if (combobxEvent.selectedIndex == 1)
            {
                Theme = "Eid";
                themePr += 3;
            }
            else if (combobxEvent.selectedIndex == 2)
            {
                Theme = "Ramdan";
                themePr += 7;
            }
            else if (combobxEvent.selectedIndex == 3)
            {
                Theme = "Marriage";
                themePr += 10;
            }
            List<Gift> g = lg.FetchGift();
            int i = 0;
            foreach (Gift gft in giftOrder)
            {
                Gift gf = g.FirstOrDefault(p => p.Name == gft.Name);
                if (gf != null)
                {
                    lg.SaveOrder(new Order { Cid = Login.CustomerId, Date = DateTime.Now, Tprice = gf.Price, Status = "Processing", Pack_Theme = Theme, ThemePr = themePr });
                    //lg.UpdateGiftStock(gf.Id, gf.In_stock-fOrders[i++].Qty);
                }
            }
            List<Order> o = lg.FetchOrder();
            if (chkbxCard.Checked)
            {
                addPr += 3;
                lg.SaveAddons(new Addons { Oid = o[o.Count-1].Oid, Name = "Greeting Card", Price = 3 });
            }
            if (chkbxChoco.Checked)
            {
                addPr += 5;
                lg.SaveAddons(new Addons { Oid = o[o.Count - 1].Oid, Name = "Chocolate", Price = 5 });
            }
            if (chkbxBag.Checked)
            {
                addPr += 8;
                lg.SaveAddons(new Addons { Oid = o[o.Count - 1].Oid, Name = "Gift Bag", Price = 8 });
            }
            if (chkbxFlower.Checked)
            {
                addPr += 10;
                lg.SaveAddons(new Addons { Oid = o[o.Count - 1].Oid, Name = "Flower", Price = 10 });
            }

            float totalBill =themePr+addPr;
            foreach (var or in fOrders)
            {
                totalBill += or.Price * or.Qty;
            }
            lblTotalBill.Text = "Total Amount: $" + totalBill.ToString();

            int j = 0;
            foreach (Gift gft in giftOrder)
            {
                Gift gf = g.FirstOrDefault(p => p.Name == gft.Name);
                if (gf != null && j< fOrders.Count)
                {
                    lg.SaveOrderGift(new OrderGift { Oid = o[j].Oid, Gid=gf.Id, Quant = fOrders[j].Qty , Subtotal = totalBill });
					lg.UpdateGiftStock(gf.Id, gf.In_stock - fOrders[i++].Qty);
					j++;
                }
            }
        }

        BindingList<FinalOrder> fOrders = new BindingList<FinalOrder>();
        private void btnOrder_Click(object sender, EventArgs e)
        {
            btnBill.Enabled = true;
            dgvDetails.Visible = true; dgvDetails.Rows.Clear();
            dgvDetails.DataSource= fOrders;

            DataGridViewButtonColumn btn = new DataGridViewButtonColumn();
            btn.Width = 40;                

            btn.HeaderText = "Action";
            btn.Text = "✘";
            btn.Name = "Cancel";
            btn.UseColumnTextForButtonValue = true;
            if (dgvDetails.Columns.Count <= 3)
            {
                dgvDetails.Columns.Add(btn);
            }

            DataGridViewCellStyle style = new DataGridViewCellStyle();
            style.Font = new Font("Arial", 20, FontStyle.Bold);
            btn.DefaultCellStyle = style;
            for (int i = 0; i < dgvDetails.Rows.Count - 1; i++)
            {
                dgvDetails.Rows[i].Cells[3].Value = "✘";
            }
            //   // dgvDetails.Columns.RemoveAt();
        }

        private void btnSetting_Click(object sender, EventArgs e)
        {
            panlWrapping.Visible = false;
            panlStart.Visible = false;
            panlSettings.Visible = true;

        }

        private void btnOk_Click(object sender, EventArgs e)
        {
            panlCheckOut.Visible = false;
        }

        public void UpdateGiftQuantity(string giftName, int newQuantity)
        {
            var giftToUpdate = giftOrder.FirstOrDefault(p => p.Name == giftName);

            if (giftToUpdate != null)
            {
                giftToUpdate.In_stock = newQuantity;
            }
        }

        private void LoadData(int i)
        {
            if (gifts.Count >= i + 1)
            {
                btnAdd1.Visible = true;
                lblNam1.Text = gifts[i].Name;
                lblpr1.Text = "$" + gifts[i].Price.ToString();
                picbx1.Image = Image.FromFile(gifts[i].ImagePath);
            }
            i++;
            if (gifts.Count >= i + 1)
            {
                btnAdd2.Visible = true;
                lblNam2.Text = gifts[i].Name;
                lblpr2.Text = "$" + gifts[i].Price.ToString();
                picbx2.Image = Image.FromFile(gifts[i].ImagePath);
            }

            i++;
            if (gifts.Count >= i + 1)
            {
                btnAdd3.Visible = true;
                lblNam3.Text = gifts[i].Name;
                lblpr3.Text = "$" + gifts[i].Price.ToString();
                picbx3.Image = Image.FromFile(gifts[i].ImagePath);
            }

            i++;
            if (gifts.Count >= i + 1)
            {
                btnAdd4.Visible = true;
                lblNam4.Text = gifts[i].Name;
                lblpr4.Text = "$" + gifts[i].Price.ToString();
                picbx4.Image = Image.FromFile(gifts[i].ImagePath);
            }

            i++;
            if (gifts.Count >= i + 1)
            {
                btnAdd5.Visible = true;
                lblNam5.Text = gifts[i].Name;
                lblpr5.Text = "$" + gifts[i].Price.ToString();
                picbx5.Image = Image.FromFile(gifts[i].ImagePath);
            }

            i++;
            if (gifts.Count >= i + 1)
            {
                btnAdd6.Visible = true;
                lblNam6.Text = gifts[i].Name;
                lblpr6.Text = "$" + gifts[i].Price.ToString();
                picbx6.Image = Image.FromFile(gifts[i].ImagePath);
            }

            i++;
            if (gifts.Count >= i + 1)
            {
                btnAdd7.Visible = true;
                lblNam7.Text = gifts[i].Name;
                lblpr7.Text = "$" + gifts[i].Price.ToString();
                picbx7.Image = Image.FromFile(gifts[i].ImagePath);
            }

            i++;
            if (gifts.Count >= i + 1)
            {
                btnAdd8.Visible = true;
                lblNam8.Text = gifts[i].Name;
                lblpr8.Text = "$" + gifts[i].Price.ToString();
                picbx8.Image = Image.FromFile(gifts[i].ImagePath);
            }
        }

        private void dgvDetails_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.ColumnIndex == dgvDetails.Columns["Cancel"].Index && e.RowIndex >= 0)
            {
                // Ask for confirmation before deleting the row
                DialogResult result = MessageBox.Show("Are you sure you want to cancel this Order?", "Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Question);

                if (result == DialogResult.Yes)
                {
                    // Remove the selected row
                    dgvDetails.Rows.RemoveAt(e.RowIndex);
                }
            }
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            Login login= new Login();
            login.Show();
        }

        private void btnProfilePic_Click(object sender, EventArgs e)
        {
            opnfldg.Filter = "ImageFiles(*.png;*.jpg;*.jpeg)|*.jpg;*.jpeg;*.png;|AllFiles(*.*)|*.*";
            DialogResult dr = opnfldg.ShowDialog();
            if (dr == DialogResult.OK)
            {
                picbxImg.Image = Image.FromFile(opnfldg.FileName);
                lg.UpdateCustomerProfPic(Login.CustomerId,opnfldg.FileName);
            }
        }

        private void btnLogout_Click(object sender, EventArgs e)
        {
            this.Hide();
            Login login = new Login();
            login.Show();
        }

        private void btnDelAcc_Click(object sender, EventArgs e)
        {
            lg.DeleteCustomer(Login.CustomerId);
            this.Hide();
            SignUp sign=new SignUp();
            sign.Show();
        }

        private void btnRestoreAcc_Click(object sender, EventArgs e)
        {
            this.Hide();
            Forgot fg=new Forgot();
            fg.Show();
        }

		private void button1_Click(object sender, EventArgs e)
		{
			this.Close();
			//Start st= new Start();
			//st.Show();
		}
	}
}

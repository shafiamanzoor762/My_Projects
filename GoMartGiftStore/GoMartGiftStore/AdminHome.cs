using Bunifu.Framework.UI;
using Business_Logic_Layer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace GoMartGiftStore
{
    public partial class AdminHome : BunifuForm
    {
		Logic lg = new Logic();
		string entity = null;
		int giftId = 0;
        
		public AdminHome()
        {
            InitializeComponent();			
		}
        private void Admin_Load(object sender, EventArgs e)
        {
            lbl1.Visible = false;
            txt1.Visible = false;
            lbl2.Visible = false;
            txt2.Visible = false;
            lbl3.Visible = false;
            txt3.Visible = false;
            lbl4.Visible = false;
            txt4.Visible = false;
            picbxImg.Visible = false;
            btnBrowse.Visible = false;
            btnSave.Visible = false;
            btnDelete.Visible = false;
            pictureBox1.Visible = false;
            txtSearch.Visible = false;
            btnSearch.Visible = false;
            btnUpdate.Visible = false;
            dgvDetails.Visible = false;
            richTextBox4.Visible = false;
            lblAdmin.Visible = true;
        }


        private void btnGifts_Click(object sender, EventArgs e)
        {
            entity = "gift";
			PopulateData();
			InitializeListView();
			lblAdmin.Visible = false;
            lbl1.Visible = true;
            txt1.Visible = true;
            lbl2.Visible = true;
            txt2.Visible = true;
            lbl3.Visible = true;
            txt3.Visible = true;
            lbl4.Visible = true;
            txt4.Visible = true;
            pictureBox1.Visible = true;
            txtSearch.Visible = true;
            btnSearch.Visible = true;
            btnUpdate.Visible = true;
			dgvDetails.Visible = true;
            picbxImg.Visible = true;
            btnBrowse.Visible = true;
            btnSave.Visible = true;
            btnDelete.Visible = true;
            txt1.Text = string.Empty; 
            txt2.Text=string.Empty;
            txt3.Text = string.Empty;
            txt4.Text= string.Empty;
            txtSearch.Text= string.Empty;
            picbxImg.Image= null;

			dgvDetails.Location = new Point(139, 180);
            dgvDetails.Size = new Size(521, 220);

            lblSearch.Text = "Category";
            lbl1.Text = "Name";
            lbl2.Text = "Price";
            lbl3.Text = "Category";
            lbl4.Text = "In Stock";

            dgvDetails.Columns.Clear();
            dgvDetails.DataSource = lg.FetchGift();
            dgvDetails.Columns[0].Width = 50;
            SetImage("Gift Pictures", "ImagePath", 5, 6);
        }

        private void btnUsers_Click(object sender, EventArgs e)
        {
            entity = "user";
			PopulateData();
			InitializeListView();
			pictureBox1.Visible = true;
            txtSearch.Visible = true;
            btnSearch.Visible = true;
            btnUpdate.Visible = true;
            dgvDetails.Visible = true;
            dgvDetails.Location  = new Point(150, 110);
            dgvDetails.Size = new Size(460, 300);
            lblAdmin.Visible = false;
            lbl1.Visible = false;
            txt1.Visible = false;
            lbl2.Visible = false;
            txt2.Visible = false;
            lbl3.Visible = false;
            txt3.Visible = false;
            lbl4.Visible = false;
            txt4.Visible = false;
            picbxImg.Visible = false;
            btnBrowse.Visible = false;
            btnSave.Visible = false;
            btnUpdate.Visible=false;
            btnDelete.Visible = false;
			lblError.Visible = false;

			lblSearch.Text = "Name";

            txt1.Text = string.Empty; 
            txt2.Text = string.Empty;
            txt3.Text = string.Empty;

            dgvDetails.Columns.Clear();
            dgvDetails.DataSource = lg.FetchCustomer();
            SetImage("Profile Picture", "ProfPic", 4, 5);
        }

        private void btnOrders_Click(object sender, EventArgs e)
        {
            entity = "order";
			PopulateData();
			InitializeListView();
			lbl1.Visible = true;
            txt1.Visible = true;
            pictureBox1.Visible = true;
            txtSearch.Visible = true;
            btnSearch.Visible = true;
            btnUpdate.Visible = true;
            dgvDetails.Visible = true;

            dgvDetails.Location = new Point(140, 155);
            dgvDetails.Size = new Size(610, 260);

            lblAdmin.Visible = false;
            lbl2.Visible = false;
            txt2.Visible = false;
            lbl3.Visible = false;
            txt3.Visible = false;
            lbl4.Visible = false;
            txt4.Visible = false;
            picbxImg.Visible = false;
            btnBrowse.Visible = false;
            btnSave.Visible = false;
            btnDelete .Visible = false;
			lblError.Visible = false;

			lblSearch.Text = "Status";
            lbl1.Text = "Status";

            txt1.Text = string.Empty;
            dgvDetails.Columns.Clear();
            dgvDetails.DataSource = lg.FetchOrderTable();
            dgvDetails.Columns[0].Width = 50;
            dgvDetails.Columns[1].Width = 50;
        }

        private void btnGiftImage_Click(object sender, EventArgs e)
        {
            lblError.Text = string.Empty;
            opnfldg.Filter = "ImageFiles(*.png;*.jpg;*.jpeg)|*.jpg;*.jpeg;*.png;|AllFiles(*.*)|*.*";
            DialogResult dr = opnfldg.ShowDialog();
            if (dr == DialogResult.OK)
            {
                picbxImg.Image = Image.FromFile(opnfldg.FileName);
            }
            else { lblError.Text = "Please Select an Image"; }
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            if (entity == "gift") { lg.SaveGift(new Gift { Name = txt1.Text, Price = float.Parse(txt2.Text), Category = txt3.Text, In_stock = int.Parse(txt4.Text), ImagePath = opnfldg.FileName }); }
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            if (entity == "gift") { lg.UpdateGift(new Gift { Id = selgftId, Name = txt1.Text, Price = float.Parse(txt2.Text), Category = txt3.Text, In_stock = int.Parse(txt4.Text), ImagePath = opnfldg.FileName }); }
            else if(entity == "order") { lg.UpdateOrderStatus(selOrderId,txt1.Text); }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            if (entity == "gift") { lg.DeleteGift(selgftId); }
        }

        private void btnSearch_Click(object sender, EventArgs e)
        {
            lblErrorSearch.Visible = true;

			if (entity == "gift") {
                List<Gift> gift = lg.FetchGift();
                dgvDetails.Columns.Clear();
                if (txtSearch.Text != null)
                {
                    if (txtSearch.Text.Equals("Girl") || txtSearch.Text.Equals("girl"))
                    {
                        dgvDetails.DataSource = gift.Where(s => s.Category == "Girl").ToList();
                        SetImage("Gift Pictures", "ImagePath", 5, 6);
                    }
                    else if (txtSearch.Text.Equals("Boy") || txtSearch.Text.Equals("boy"))
                    {
                        dgvDetails.DataSource = gift.Where(s => s.Category == "Boy").ToList();
                        SetImage("Gift Pictures", "ImagePath", 5, 6);
                    }
                }
                else { lblErrorSearch.Text = $"Please Enter {lblSearch.Text}"; }
            }
            if (entity == "user") {
                List<Customer> customer = lg.FetchCustomer();
                dgvDetails.Columns.Clear();
                if (txtSearch.Text!=null )
                {
                    dgvDetails.DataSource = customer.Where(s => s.Name == txtSearch.Text).ToList();
                    SetImage("Profile Picture", "ProfPic", 4, 5);
                }
                else { lblErrorSearch.Text = $"Please Enter {lblSearch.Text}"; }
            }
            if (entity == "order") {
                DataTable order = lg.FetchOrderTable();
                DataTable filterOrder = order.Clone();
                dgvDetails.Columns.Clear();
                if (txtSearch.Text != null)
                {
                    if (txtSearch.Text.Equals("Processing") || txtSearch.Text.Equals("processing"))
                    {
                        var or= from row in order.AsEnumerable() where row.Field<string>("ostatus") == "Processing" select row;
                        foreach(DataRow o in or)
                        {
                            filterOrder.ImportRow(o);
                        }
                        dgvDetails.DataSource=filterOrder;
                    }
                    else if (txtSearch.Text.Equals("Shipped") || txtSearch.Text.Equals("shipped"))
                    {
                        var or = from row in order.AsEnumerable() where row.Field<string>("ostatus") == "Shipped" select row;
                        foreach (DataRow o in or)
                        {
                            filterOrder.ImportRow(o);
                        }
                        dgvDetails.DataSource = filterOrder;
                    }
                    else if (txtSearch.Text.Equals("Delivered") || txtSearch.Text.Equals("delivered"))
                    {
                        var or = from row in order.AsEnumerable() where row.Field<string>("ostatus") == "Delivered" select row;
                        foreach (DataRow o in or)
                        {
                            filterOrder.ImportRow(o);
                        }
                        dgvDetails.DataSource = filterOrder;
                    }
                }
                else { lblErrorSearch.Text = $"Please Enter {lblSearch.Text}"; }
            }
        }

        public void SetImage(string name,string colTitle,int insert,int delete)
        {
            DataGridViewImageColumn img = new DataGridViewImageColumn();
            img.ImageLayout = DataGridViewImageCellLayout.Stretch;
            img.Width = 55;
            img.Name =name;
            dgvDetails.Columns.Insert(insert, img);
            for (int i = 0; i < dgvDetails.Rows.Count; i++)
            {
                string imgPath = dgvDetails.Rows[i].Cells[colTitle].Value.ToString();
                dgvDetails.Rows[i].Cells[name].Value = Image.FromFile(imgPath);
            }
            dgvDetails.Columns.RemoveAt(delete);

        }
        int selgftId = 0;
        //int selCustId = 0;
        int selOrderId = 0;

        private void dgvDetails_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

            if (e.RowIndex >= 0 && e.RowIndex < dgvDetails.Rows.Count)
            {
                DataGridViewRow selectedRow = dgvDetails.Rows[e.RowIndex];
                if (entity == "gift")
                {
                    selgftId= int.Parse(selectedRow.Cells["Id"].Value.ToString());
                    txt1.Text = selectedRow.Cells["Name"].Value.ToString();
                    txt2.Text= selectedRow.Cells["Price"].Value.ToString();
                    txt3.Text = selectedRow.Cells["Category"].Value.ToString();
                    txt4.Text = selectedRow.Cells["In_stock"].Value.ToString();
                    DataGridViewImageCell imageCell = (DataGridViewImageCell)dgvDetails.Rows[e.RowIndex].Cells["Gift Pictures"];
                    picbxImg.Image = (Image)imageCell.Value;

                }
                else if (entity == "order")
                {
                    selOrderId = int.Parse(selectedRow.Cells["oid"].Value.ToString());
                    txt1.Text = selectedRow.Cells["ostatus"].Value.ToString();
                }
            }
            
        }

		private void txtSearch_TextChanged(object sender, EventArgs e)
		{
			string partialInput = txtSearch.Text;
			AddMatchingItemsToListView(partialInput);
		}
		List<string> search;
        List<Customer> names;
		public void PopulateData()
		{
			//dataTable.Columns.Add("Search", typeof(string));

			if (entity == "gift")
			{
				search = new List<string> { "Boy", "Girl" };

			}
			if (entity == "user")
			{
				names=lg.FetchCustomer();
                search=names.Select(n=>n.Name).Distinct().ToList();
			}
			if (entity == "order")
			{
				search = new List<string> { "Processing", "Shipped", "Delivered" };

			}
		}

		private void InitializeListView()
		{
			// Add a column to the ListView (assuming you have only one column)
			lstVewSearch.View = View.Details;
			lstVewSearch.Columns.Add(" ", 120);

			// Populate the ListView with data
			PopulateListView(search);
		}

		private void PopulateListView(List<string> data)
		{
			lstVewSearch.Items.Clear();

			foreach (string item in data)
			{
				ListViewItem listViewItem = new ListViewItem(item);
				lstVewSearch.Items.Add(listViewItem);
			}
		}

		private bool IsPartialMatch(string partialInput, string word)
		{
			return word.IndexOf(partialInput, StringComparison.OrdinalIgnoreCase) >= 0;
		}

		private void AddMatchingItemsToListView(string partialInput)
		{
			var matchingItems = search.Where(name => IsPartialMatch(partialInput, name)).ToList();
			PopulateListView(matchingItems);
		}

		private void button1_Click(object sender, EventArgs e)
		{
            this.Close();
		}

		private void lstVewSearch_SelectedIndexChanged(object sender, EventArgs e)
		{
            if(lstVewSearch.SelectedItems.Count > 0)
            {
                txtSearch.Text = lstVewSearch.SelectedItems[0].Text;
            }
		}
	}
}

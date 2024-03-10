using Bunifu.Framework.UI;
using Business_Logic_Layer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Windows.Forms;

namespace GoMartGiftStore
{
    public partial class LoginAdmin : BunifuForm
    {
        public Logic lg = new Logic();
        private string Name;
        private string Password;
        public static int AdminId;
        public LoginAdmin()
        {
            InitializeComponent();
        }

		private void LoginAdmin_Load(object sender, EventArgs e)
		{
			txtName.Focus();
		}

		private void bunifuThinButton21_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtName.Text))
            {
                txtName.Focus();
                errPr1.SetError(txtName, "Name should not be left blank!");
                return;
            }
            else { Name = txtName.Text; errPr1.SetError(txtName, ""); }

            if (string.IsNullOrWhiteSpace(txtPassword.Text))
            {
                txtPassword.Focus();
                errPr1.SetError(txtPassword, "Password should not be left blank!");
                return;
            }
            else
            {
                Password = txtPassword.Text; errPr1.SetError(txtPassword, "");

                List<Admin> a = lg.FetchAdmin();
                IEnumerable<Admin> admin = a.Where(u => u.Name.Equals(Name) && u.Password.Equals(Password));
                if (admin.Count() == 0)
                {
                    MessageBox.Show("Sounds Like you're not an Admin.\nPlease Enter valid User Name or Password!");
                }
                else
                {
                    foreach (var u in admin)
                    {
                        AdminId = u.Id;
                    }
                    this.Hide();
                    AdminHome ahome = new AdminHome();
                    ahome.Show();
                }
            }
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            SignUpAdmin sad = new SignUpAdmin();
            sad.Show();
        }

		private void txtName_KeyPress(object sender, KeyPressEventArgs e)
		{
			if (e.KeyChar == (Char)Keys.Enter)
			{
				txtPassword.Focus();
			}
		}
	}
}

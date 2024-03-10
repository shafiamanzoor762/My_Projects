using Bunifu.Framework.UI;
using Business_Logic_Layer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Windows.Forms;
using System.Xml.Linq;

namespace GoMartGiftStore
{
    public partial class Login : BunifuForm
    {
        private Logic lg = new Logic();
        private string uName;
        private string uEmail;
        private string uPassword;
        public static int  CustomerId;
        public Login()
        {
            InitializeComponent();
        }

		private void Login_Load(object sender, EventArgs e)
		{
            txtUname.Focus();
		}

		string nameRegex = @"^[A-Za-z]+(?: [A-Za-z]+)?$";
		string emailRegex = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

        private void bunifuThinButton21_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtUname.Text))
            {
                txtUname.Focus();
                errPr1.SetError(txtUname, "Name should not be left blank!");
                return;
            }
            else
            {
                if (Regex.IsMatch(txtUname.Text, nameRegex)) { uName = txtUname.Text; }
                else
                {
                    errPr1.SetError(txtUname, "Please enter valid name!");
                }
            }

            if (string.IsNullOrWhiteSpace(txtUemail.Text))
            {
                txtUemail.Focus();
                errPr1.SetError(txtUemail, "Email should not be left blank!");
                return;
            }

                else
                {
                    if (txtUemail.Text.Contains("@gmail.com"))
                    {
                        if (Regex.IsMatch(txtUemail.Text, emailRegex)) { uEmail = txtUemail.Text; }
                        else { errPr1.SetError(txtUemail, "Please enter valid email!"); }
                    }
                    else
                    {
                        txtUemail.Focus();
                        errPr1.SetError(txtUemail, "Email Should ends with @gmail.com");
                        return;
                    }
                }
            

                if (string.IsNullOrWhiteSpace(txtUpassword.Text))
                {
                    txtUpassword.Focus();
                    errPr1.SetError(txtUpassword, "Password should not be left blank!");
                    return;
                }
                else { uPassword = txtUpassword.Text; errPr1.SetError(txtUname, ""); }
                List<Customer> c = lg.FetchCustomer();
                IEnumerable<Customer> cu = c.Where(u => u.Name.Equals(uName) && u.Email.Equals(uEmail) && u.Password.Equals(uPassword));
                if (cu.Count() == 0)
                {
                    MessageBox.Show("Please Enter valid User Name, Email or Password!");
                }
                else
                {
                    foreach (var u in cu)
                    {
                        CustomerId = u.Id;
                    }
                    this.Hide();
                    Home home = new Home();
                    home.Show();
                }
            
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            SignUp signUp = new SignUp();
            signUp.Show();
        }

        private void loginlbl_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            Forgot forgot = new Forgot();
            forgot.Show();
        }

		private void txtUname_KeyPress(object sender, KeyPressEventArgs e)
		{
            if (e.KeyChar == (Char)Keys.Enter)
            { 
                txtUemail.Focus();
            }
		}

		private void txtUemail_KeyPress(object sender, KeyPressEventArgs e)
		{
			if (e.KeyChar == (Char)Keys.Enter)
			{
				txtUpassword.Focus();
			}
		}

		private void button1_Click(object sender, EventArgs e)
		{
            this.Close();
		}

	}
}

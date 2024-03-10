using Bunifu.Framework.UI;
using Business_Logic_Layer;
using System;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace GoMartGiftStore
{
    public partial class SignUp : BunifuForm
    {
        private Logic lg = new Logic();
        public Storage s = new Storage();
        private string uName;
        private string uEmail;
        private string uPassword;
        public SignUp()
        {
            InitializeComponent();
        }
		private void SignUp_Load(object sender, EventArgs e)
		{
            txtName.Focus();
		}

		string nameRegex = @"^[A-Za-z]+(?: [A-Za-z]+)?$";
		string emailRegex = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

		private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void bunifuThinButton21_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtName.Text))
            {
                txtName.Focus();
                errPr1.SetError(txtName, "Name should not be left blank!");
                return;
            }
            else {
                if (Regex.IsMatch(txtName.Text, nameRegex)) { uName = txtName.Text; }
                else { errPr1.SetError(txtName, "Please enter valid name!"); }
            }

            if (string.IsNullOrWhiteSpace(txtEmail.Text))
            {
                txtEmail.Focus();
                errPr1.SetError(txtEmail, "Email should not be left blank!");
                return;
            }
            else
            {
                if (txtEmail.Text.Contains("@gmail.com"))
                {
                    if (Regex.IsMatch(txtEmail.Text, emailRegex)) { uEmail = txtEmail.Text; }
                    else { errPr1.SetError(txtEmail, "Please enter valid email!"); }
                }
                else
                {
                    txtEmail.Focus();
                    errPr1.SetError(txtEmail, "Email Should ends with @gmail.com");
                    return;
                }
            }

            if (string.IsNullOrWhiteSpace(txtPassword.Text))
            {
                txtPassword.Focus();
                errPr1.SetError(txtPassword, "Password should not be left blank!");
                return;
            }
            else { uPassword = txtPassword.Text; errPr1.SetError(txtPassword, ""); }

            if (string.IsNullOrWhiteSpace(txtConfPassword.Text))
            {
                txtConfPassword.Focus();
                errPr1.SetError(txtConfPassword, "Confirm Password your password!");
                return;
            }
            else
            {
                if (txtConfPassword.Text.Equals(txtPassword.Text))
                {
                  errPr1.SetError(txtConfPassword, "");
                    if (chkbxTerms.Checked)
                    {
                        lg.SaveCustomer(new Customer { Name = uName, Email = uEmail, Password = uPassword });
                        this.Hide();
                        Login login = new Login();
                        login.Show();
                    }
                    else { errPr1.SetError(chkbxTerms, "Accept our Terms and Conditions"); }
                }
                else
                {
                    txtConfPassword.Focus();
                    errPr1.SetError(txtConfPassword, "Password String dosen't match");
                    return;
                }
            }
                   
        }

        private void loginlbl_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            Login login= new Login();
            login.Show();
        }

        private void btnBack_Click(object sender, EventArgs e)
        {
            this.Close();
            Welcome wl= new Welcome();
            wl.Show();
        }

		private void txtName_KeyPress(object sender, KeyPressEventArgs e)
		{
			if (e.KeyChar == (Char)Keys.Enter)
			{
				txtEmail.Focus();
			}
		}

		private void txtEmail_KeyPress(object sender, KeyPressEventArgs e)
		{
			if (e.KeyChar == (Char)Keys.Enter)
			{
				txtPassword.Focus();
			}
		}

		private void txtPassword_KeyPress(object sender, KeyPressEventArgs e)
		{
			if (e.KeyChar == (Char)Keys.Enter)
			{
				txtConfPassword.Focus();
			}
		}

	}
}

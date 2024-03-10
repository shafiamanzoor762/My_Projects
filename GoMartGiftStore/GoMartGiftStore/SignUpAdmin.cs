using Bunifu.Framework.UI;
using Business_Logic_Layer;
using System;
using System.Windows.Forms;
using System.Xml.Linq;

namespace GoMartGiftStore
{
    public partial class SignUpAdmin : BunifuForm
    {
        private Logic lg = new Logic();
        private string uName;
        private string uPassword;
        private string uConfrPassword;

        public SignUpAdmin()
        {
            InitializeComponent();
        }
		private void SignUpAdmin_Load(object sender, EventArgs e)
		{
			txtVerifCode.Focus();
		}

		private void bunifuThinButton21_Click(object sender, EventArgs e)
        {   if (txtVerifCode.Text != "4590") errPr1.SetError(txtVerifCode, "Please enter correct code!");
            else
            {
                if (string.IsNullOrWhiteSpace(txtName.Text))
                {
                    txtName.Focus();
                    errPr1.SetError(txtName, "Name should not be left blank!");
                    return;
                }
                else { uName = txtName.Text; errPr1.SetError(txtName, ""); }

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
                        uConfrPassword = txtConfPassword.Text; errPr1.SetError(txtConfPassword, "");
                    }
                    else
                    {
                        txtConfPassword.Focus();
                        errPr1.SetError(txtConfPassword, "Password String dosen't match");
                        return;
                    }
                }
                lg.SaveAdmin(new Admin { Name = uName, Password = uPassword });

                this.Hide();
                AdminHome aHome = new AdminHome();
                aHome.Show();
            }
        }

        private void loginlbl_LinkClicked(object sender, System.Windows.Forms.LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            LoginAdmin lad = new LoginAdmin();
            lad.Show();
        }

        private void btnBack_Click(object sender, EventArgs e)
        {
            this.Close();
            Welcome wl = new Welcome();
            wl.Show();
        }

		private void txtVerifCode_KeyPress(object sender, KeyPressEventArgs e)
		{
			if (e.KeyChar == (Char)Keys.Enter)
			{
				txtName.Focus();

			}
		}

		private void txtName_KeyPress(object sender, KeyPressEventArgs e)
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

using Bunifu.Framework.UI;
using Business_Logic_Layer;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;

namespace GoMartGiftStore
{
    public partial class Forgot : BunifuForm
    {
        Logic lg=new Logic();
        string uEmail;
        string uPassword;
        public Forgot()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void bunifuThinButton21_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtEmail.Text))
            {
                txtEmail.Focus();
                errPr1.SetError(txtEmail, "Email should not be left blank!");
                return;
            }
            else
            {
                if (txtEmail.Text.Contains("@gmail.com")) { uEmail = txtEmail.Text; errPr1.SetError(txtEmail, ""); }
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
                    lg.UpdateCustomerPass(Login.CustomerId, txtPassword.Text);
                }
                else
                {
                    txtConfPassword.Focus();
                    errPr1.SetError(txtConfPassword, "Password String dosen't match");
                    return;
                }
            }
            this.Hide();
            Login signUp = new Login();
            signUp.Show();
        }
    }
}

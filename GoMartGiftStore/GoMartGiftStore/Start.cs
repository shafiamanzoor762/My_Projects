using Bunifu.Framework.UI;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GoMartGiftStore
{
    public partial class Start : BunifuForm
    {
        public Start()
        {
            InitializeComponent();
        }

		private void Start_Load(object sender, EventArgs e)
		{

		}

		private void adminToolStripMenuItem_Click(object sender, EventArgs e)
		{
			if (Welcome.status == "Admin")
			{
				LoginAdmin loginad = new LoginAdmin();
				loginad.MdiParent = this;
				loginad.Show();
			}
			else if (Welcome.status == "User")
			{ 
				Login login=new Login();
				login.MdiParent = this;
				login.Show();
			}

		}

		private void userToolStripMenuItem_Click(object sender, EventArgs e)
		{
			if (Welcome.status == "Admin")
			{
				SignUpAdmin signupAd = new SignUpAdmin();
				signupAd.MdiParent = this;
				signupAd.Show();
			}
			else if(Welcome.status == "User")
			{
				SignUp signup=new SignUp();
				signup.MdiParent = this;
				signup.Show();
			}
		}

		private void exitToolStripMenuItem_Click(object sender, EventArgs e)
		{
			Application.Exit();
		}


		private void btnBack_Click(object sender, EventArgs e)
		{
			this.Close();
			Welcome wl = new Welcome();
			wl.Show();
		}
	}
}

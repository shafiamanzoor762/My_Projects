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
using System.Xml.Linq;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.TaskbarClock;

namespace GoMartGiftStore
{
    public partial class Welcome : Form
    {
        private const int MaxProgress = 100;
        private const int inc = 4;
        private int start = 0;
        bool time=false;
        public static string status;
        
        public Welcome()
        {
            InitializeComponent();
        }

        private void Welcome_Load(object sender, EventArgs e)
        {
            proglbl.Visible = false;
            progress.Visible = false;
        }

        private void bunifuGradientPanel1_Paint(object sender, PaintEventArgs e)
        {
            
        }

        private void bunifuThinButton21_Click(object sender, EventArgs e)
        {
            proglbl.Visible = true;
            progress.Visible = true;
            timer1.Start();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            start += inc;
            progress.Value= start;
            if(progress.Value==MaxProgress)
            {
                timer1.Stop();
                if (dropdownStart.selectedIndex == -1) { errPr1.SetError(dropdownStart, "Select Admin/User to start!"); }
                else if(dropdownStart.selectedValue == "Admin")
                {
                    status = "Admin";
                    this.Hide();
                    Start st = new Start();
                    st.Show();
                }
                else if (dropdownStart.selectedValue == "User")
                {
                    status = "User";
                    this.Hide();
                    Start start = new Start();
                    start.Show();
                }
                else { errPr1.SetError(dropdownStart, "Select Admin/User to start!"); }
            }
        }
    }
}

namespace GoMartGiftStore
{
    partial class Start
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
			System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Start));
			this.menuStrip1 = new System.Windows.Forms.MenuStrip();
			this.LoginToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.SignUpToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.exitToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.btnBack = new System.Windows.Forms.Button();
			this.menuStrip1.SuspendLayout();
			this.SuspendLayout();
			// 
			// menuStrip1
			// 
			this.menuStrip1.BackColor = System.Drawing.Color.DarkViolet;
			this.menuStrip1.Font = new System.Drawing.Font("Comic Sans MS", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
			this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.LoginToolStripMenuItem,
            this.SignUpToolStripMenuItem,
            this.exitToolStripMenuItem});
			this.menuStrip1.Location = new System.Drawing.Point(0, 0);
			this.menuStrip1.Name = "menuStrip1";
			this.menuStrip1.Size = new System.Drawing.Size(854, 43);
			this.menuStrip1.TabIndex = 3;
			this.menuStrip1.Text = "menuStrip1";
			// 
			// LoginToolStripMenuItem
			// 
			this.LoginToolStripMenuItem.BackColor = System.Drawing.Color.Transparent;
			this.LoginToolStripMenuItem.ForeColor = System.Drawing.Color.Yellow;
			this.LoginToolStripMenuItem.Image = ((System.Drawing.Image)(resources.GetObject("LoginToolStripMenuItem.Image")));
			this.LoginToolStripMenuItem.ImageAlign = System.Drawing.ContentAlignment.TopCenter;
			this.LoginToolStripMenuItem.Name = "LoginToolStripMenuItem";
			this.LoginToolStripMenuItem.Size = new System.Drawing.Size(53, 39);
			this.LoginToolStripMenuItem.Text = "Login";
			this.LoginToolStripMenuItem.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageAboveText;
			this.LoginToolStripMenuItem.Click += new System.EventHandler(this.adminToolStripMenuItem_Click);
			// 
			// SignUpToolStripMenuItem
			// 
			this.SignUpToolStripMenuItem.BackColor = System.Drawing.Color.Transparent;
			this.SignUpToolStripMenuItem.ForeColor = System.Drawing.Color.Yellow;
			this.SignUpToolStripMenuItem.Image = ((System.Drawing.Image)(resources.GetObject("SignUpToolStripMenuItem.Image")));
			this.SignUpToolStripMenuItem.ImageAlign = System.Drawing.ContentAlignment.TopCenter;
			this.SignUpToolStripMenuItem.Name = "SignUpToolStripMenuItem";
			this.SignUpToolStripMenuItem.Size = new System.Drawing.Size(62, 39);
			this.SignUpToolStripMenuItem.Text = "Signup";
			this.SignUpToolStripMenuItem.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageAboveText;
			this.SignUpToolStripMenuItem.Click += new System.EventHandler(this.userToolStripMenuItem_Click);
			// 
			// exitToolStripMenuItem
			// 
			this.exitToolStripMenuItem.BackColor = System.Drawing.Color.Transparent;
			this.exitToolStripMenuItem.ForeColor = System.Drawing.Color.Yellow;
			this.exitToolStripMenuItem.Image = ((System.Drawing.Image)(resources.GetObject("exitToolStripMenuItem.Image")));
			this.exitToolStripMenuItem.ImageAlign = System.Drawing.ContentAlignment.TopCenter;
			this.exitToolStripMenuItem.Name = "exitToolStripMenuItem";
			this.exitToolStripMenuItem.Size = new System.Drawing.Size(47, 39);
			this.exitToolStripMenuItem.Text = "Exit";
			this.exitToolStripMenuItem.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageAboveText;
			this.exitToolStripMenuItem.Click += new System.EventHandler(this.exitToolStripMenuItem_Click);
			// 
			// btnBack
			// 
			this.btnBack.BackColor = System.Drawing.Color.Transparent;
			this.btnBack.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
			this.btnBack.Font = new System.Drawing.Font("Comic Sans MS", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
			this.btnBack.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(235)))), ((int)(((byte)(209)))), ((int)(((byte)(255)))));
			this.btnBack.Image = ((System.Drawing.Image)(resources.GetObject("btnBack.Image")));
			this.btnBack.ImageAlign = System.Drawing.ContentAlignment.TopLeft;
			this.btnBack.Location = new System.Drawing.Point(-2, 43);
			this.btnBack.Name = "btnBack";
			this.btnBack.Size = new System.Drawing.Size(30, 29);
			this.btnBack.TabIndex = 24;
			this.btnBack.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
			this.btnBack.UseVisualStyleBackColor = false;
			this.btnBack.Click += new System.EventHandler(this.btnBack_Click);
			// 
			// Start
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(854, 536);
			this.Controls.Add(this.btnBack);
			this.Controls.Add(this.menuStrip1);
			this.IsMdiContainer = true;
			this.Name = "Start";
			this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
			this.Text = "Template";
			this.Load += new System.EventHandler(this.Start_Load);
			this.menuStrip1.ResumeLayout(false);
			this.menuStrip1.PerformLayout();
			this.ResumeLayout(false);
			this.PerformLayout();

        }

		#endregion

		private System.Windows.Forms.MenuStrip menuStrip1;
		private System.Windows.Forms.ToolStripMenuItem SignUpToolStripMenuItem;
		private System.Windows.Forms.ToolStripMenuItem exitToolStripMenuItem;
		private System.Windows.Forms.ToolStripMenuItem LoginToolStripMenuItem;
		private System.Windows.Forms.Button btnBack;
	}
}
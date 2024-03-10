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
	public partial class Temp : Form
	{
		private List<string> names = new List<string> { "Girl", "Boy", "John", "Gina", "Grace", "Alice", "George" };
		public Temp()
		{
			InitializeComponent();
			InitializeListView();
		}

		private void Temp_Load(object sender, EventArgs e)
		{
			
		}

		private void button1_Click(object sender, EventArgs e)
		{
		}
			private void InitializeListView()
			{
				// Add a column to the ListView (assuming you have only one column)
				listView1.View = View.Details;
				listView1.Columns.Add("Names", 120);

				// Populate the ListView with data
				PopulateListView(names);
			}

			private void PopulateListView(List<string> data)
			{
				listView1.Items.Clear();

				foreach (string item in data)
				{
					ListViewItem listViewItem = new ListViewItem(item);
					listView1.Items.Add(listViewItem);
				}
			}

			private bool IsPartialMatch(string partialInput, string word)
			{
				return word.IndexOf(partialInput, StringComparison.OrdinalIgnoreCase) >= 0;
			}

			private void AddMatchingItemsToListView(string partialInput)
			{
				var matchingItems = names.Where(name => IsPartialMatch(partialInput, name)).ToList();
				PopulateListView(matchingItems);
			}

		private void textBox1_TextChanged(object sender, EventArgs e)
		{
			string partialInput = textBox1.Text;
			AddMatchingItemsToListView(partialInput);
		}
	}
}

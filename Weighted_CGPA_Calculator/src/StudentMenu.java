
import java.io.File;
import java.io.FileWriter;
import java.util.Scanner;
public class StudentMenu {
	private Student[] students;
	Subject[] subjects ;
	private static Scanner input = new Scanner(System.in);
	
	public void launchMenu() {
		int ch = 0;
       
		do {
			Menu();
			System.out.print("Enter Your choice: ");
			ch = input.nextInt();
			if (ch == 1) {
				addnewStd();
			}if(ch==2) {
				System.out.print("Enter Student id: ");
			int id = input.nextInt();
			System.out.print("Enter Semester: ");
			int sem= input.nextInt();
			input.nextLine();
			System.out.print("Enter name: ");
			String name = input.nextLine();
			updateStudent(id,name,sem);}
			if (ch == 3) {
				saveDataStd();
			}
			if (ch == 4) {
				readFile();
			}
			if (ch == 5) {
				showStudent();
			}
			if(ch==6) {
			    removeStudent();
			}if(ch==7) {
				loadDataArray();
		    }if(ch==8) {saveDataSubject();}
			if(ch==9) {
				showAllSubjects();
			}if(ch==10) {
				showGPA();
			}if(ch==11) {
				showCGPA();
			}if(ch==12){saveDataCGPAgpa();}
		    if(ch==13) {System.exit(ch);}
		} while (ch != 13);// this all is menu ok

	}
	
	public void Menu() {
		System.out.println("\n\"Weighted CGPA Calculator\"" 
	            + "\n---------------------------------"
				+ "\n1. Add student record."
	            + "\n2. Update Student Data."
	            + "\n3. Save Student Data." 
	            + "\n4. read Student Data."
				+ "\n5. Show Student." 
				+ "\n6. Delete Student."
				+ "\n7. Retreive Data."
				+ "\n8. Save Data Subject."
				+ "\n9. Show All Subjects." 
				+ "\n10.Show GPA."
				+ "\n11.Show CGPA."
				+ "\n12.Save GPA and CGPA"
				+ "\n13. Exit." 
				+ "\n---------------------------------");
	}
	Subject su = new Subject();
	public void addnewStd() {
		System.out.print("Enter ID: ");
		int id = input.nextInt();
		System.out.print("Enter Semester: ");
		int semester = input.nextInt();
		input.nextLine();
		System.out.print("Enter name: ");
		String name = input.nextLine();
		
		System.out.print("Enter no of subjects you study: ");
		int n = input.nextInt();
		subjects = new Subject[n];
		for (int i = 0; i < subjects.length; i++) {
			input.nextLine();
			System.out.print("Enter Subject Name: ");
			String subName = input.nextLine();
			System.out.print("Enter credits like 2,3,4: ");
			int credits = input.nextInt();
			System.out.print("Enter Obtained Quality points: ");
			double qp = input.nextDouble();
			System.out.print("Enter Total Quality points: ");
			double tqp = input.nextDouble();
			subjects[i]= new Subject(subName, qp, tqp, credits);
			System.out.println("^^^^^Your Grade is: "+su.Subjgrade(qp, credits));
			System.out.println("_______");
			Subject subject=new Subject(subName, qp, tqp, credits);
		}
		Student student = new Student(id, name, semester, subjects);
		insertStudent(student);//add Student
	}
	
	private void insertStudent(Student student) {
		if (students == null) 
			students = new Student[] { student };
		 else {
			Student[] temp = new Student[students.length + 1];
			for (int index = 0; index < students.length; index++) 
				temp[index] = students[index];
			
			temp[students.length] = student;
			students = temp;
		}
	}
	public void removeStudent() {
		System.out.println("DELETE STUDENT");
		System.out.print("Enter ID of student: ");
		int id = input.nextInt();
		deleteStudent(id);
	}
	
	public void deleteStudent(int id) {
		Boolean found = false;
		Student[] temp = new Student[students.length - 1];
		int tmp_index = 0;
		for (int i = 0; i < students.length; i++) {
			if (students[i].getID() == id)
				found = true;
			else if (tmp_index == temp.length) //well..
				continue;
			else 
				temp[tmp_index++] = students[i];
		}
		
		if (!found) 
			System.out.println("Id Not Found try again");
		else 
			students = temp;
	}
	public void saveDataStd() {
		File file = new File("students.txt");
		try {
			FileWriter fileWriter = new FileWriter(file);
			String data = "";
			for (Student student : students) {
				data += student.toString();
			}
			fileWriter.write(data);
			fileWriter.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
   
	public String readFile() {
		File file = new File("students.txt");
		String data = "";
		try {
			Scanner readFile = new Scanner(file);
			data = readFile.nextLine();
			readFile.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return data;
	}
	
	public void showStudent() {
		System.out.println("Enter ID of student: ");
		int id = getStudentById(input.nextInt());
		if (id != -1) 
			students[id].showStudent();
		else 
			System.out.println("Not Found...");
	}
	
	public int getStudentById(int id) {
		int x = -1;
		for (int i = 0; i < students.length; i++) {
			if (students[i].getID() == id) {
				x = i;
				break;
			}
		}
		return x;
	}
	public void updateStudent(int Id,String nam,int sem) {
		for(int i=0;i<students.length;i++) {
			if(students[i].getID()==Id) {
				students[i].setName(nam);
				students[i].setSemester(sem);
			}
		  }
		}
	public void loadDataArray() {
		String data=readFile();
		String[]stdData=data.split("#");
		Subject[] su = new Subject[12];
		for(int i=0;i<stdData.length;i++) {
			String stdnSubj[]=stdData[i].split(":");
			String student[]=stdnSubj[0].split(";");
			int id=Integer.parseInt(student[0]);
			String name=student[1];
			int sem=Integer.parseInt(student[2]);
			String subjects[]=stdnSubj[1].split("\\$");
			for(int j=0;j<subjects.length;j++) {
				String[] subject=subjects[j].split(",");
				for(int k=0;k<subject.length;k++) {
				String nam=subject[0];
				double qp=Double.parseDouble(subject[1]);
				double tqp=Double.parseDouble(subject[2]);
				int credits=Integer.parseInt(subject[3]);
				su[k]=new Subject(nam,qp,tqp,credits);
				}
			}
		insertStudent(new Student(id,name,sem,su)); 
		}
	}
	public void showAllSubjects() {
		for (int i = 0; i < subjects.length; i++) {
			System.out.println("Student Subjects: \nName: " + subjects[i].name + ",\tQuality points" + "obtained: " + subjects[i].qp
					+ ",\tTotal Quality points" + subjects[i].tqp + ",\tCredit" + subjects[i].credits + "$");
		}
    }
	public void saveDataSubject() {
		File file = new File("subjects.txt");
		try {
			FileWriter fileWriter = new FileWriter(file);
			String data = "";
			for(int i=0;i<subjects.length;i++) {
				data+=subjects[i].name + "," + subjects[i].qp + "," + subjects[i].tqp + ","
						+ subjects[i].credits+"$";
			}
			fileWriter.write(data);
			fileWriter.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}CGPA cgpa=new CGPA();
	public void showGPA() {
		cgpa.calculateGPA(subjects);
	    System.out.print("First Semester GPA: "+cgpa.getgpa1());
	    System.out.print("\nSecond Semester GPA: "+cgpa.getgpa2());
	    }
	public void showCGPA() {System.out.println("CGPA: "+cgpa.getcgpa());}
	public void saveDataCGPAgpa() {
		File file = new File("CGPA.txt");
		try {
			FileWriter fileWriter = new FileWriter(file);
			String data = "";
			
				data +=cgpa.getgpa1()+""+cgpa.getgpa1()+""+cgpa.getcgpa();
			
			fileWriter.write(data);
			fileWriter.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}	



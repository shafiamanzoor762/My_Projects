
public class Student {
	private int id;
	private String name;
	private int semester;
	public Subject[] subjects;
		//Constructors
	public Student() {
		this.id = 0;
		this.name = null;
		this.semester = 0;
	}
	public Student(int id, String name, int semester, Subject[] subjects) {
		this.id = id;
		this.name = name;
		this.semester = semester;
		this.subjects = subjects;
	}
	public String toString() {
		String s = "";
		s += id + ";" + name + ";" + semester + ":";
		for (int i = 0; i < subjects.length; i++) 
			s += subjects[i].name + "," + subjects[i].qp + "," + subjects[i].tqp + "," + subjects[i].credits+"$";
		
		return s + "#";
	}
	public void showStudent() {
		String s = "";
		s += "Student Data: \nID: " + id + ";\tName: " + name + ";\tSemester: " + semester + "\nStudent Subjects:";
		for (int i = 0; i < subjects.length; i++) {
			s += "\nName: " + subjects[i].name + ",\tQuality points" + "obtained: " + subjects[i].qp
					+ ",\tTotal Quality points" + subjects[i].tqp + ",\tCredit" + subjects[i].credits + "$";
		}
		System.out.println(s);
	}
	public int getID() {
		return id;
	}
	public void setName(String name) {this.name=name;}
	public void setSemester(int semester) {this.semester=semester;}
	CGPA cgpa;
	
}



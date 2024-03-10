
public class CGPA {
	double gpa1;
	double gpa2;
	double cgpa;
	
	public void setgpa1(double gpa) {this.gpa1=gpa;}
	public double getgpa1() {return gpa1;}
	public void setgpa2(double gpa) {this.gpa2=gpa;}
	public double getgpa2() {return gpa1;}
	public void setcgpa(double cgpa) {this.cgpa=cgpa;}
	public double getcgpa() {return cgpa;}
	Double gp1=0.0;Double gp2=0.0;
public void calculateGPA(Subject[]sub) {
	double tobqp=0.0;
	int credt=0;
	for(int i=0;i<6;i++) {
		tobqp+=sub[i].qp;
	credt+=sub[i].credits;
	  }
	gp1=tobqp/credt;
	setgpa1(gp1);
	for(int i=6;i<sub.length;i++) {
			tobqp+=sub[i].qp;
			credt+=sub[i].credits;
			  }gp2=tobqp/credt;//GPA of one semester
	setgpa2(gp2);
	calculateCGPA(gp2);
}
public void calculateCGPA(double gp) {
	Double cg=0.0;
	cg=(gp1+gp2)/2;
	setcgpa(cg);
}
}

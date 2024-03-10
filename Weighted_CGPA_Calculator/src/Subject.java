
import java.util.Scanner;
public class Subject {
	public String name;
	public double qp;
	public double tqp;
	public int credits;
	CGPA cgpa;
Scanner input=new Scanner(System.in);
    public String getName() {return this.name;}
    public Subject() {
    	this.name=null;
    	this.qp=0.0;
    	this.tqp=0.0;
    	this.credits=0;
    }
	public Subject(String nam, double qp, Double tqp, int credits) {
		this.name = nam;
		this.qp = qp;
		this.tqp = tqp;
		this.credits = credits;
	}
//	Grade calculation scheme
	public String Subjgrade(double qpts, double credts) {
		String grade = null;
		if (credts == 4) {
			if (qpts <= 16.0 && qpts > 12.0) {
				grade = "A";
			} else if (qpts <= 12.0 && qpts > 8.0) {
				grade = "B";
			} else if (qpts <= 8.0 && qpts > 4.0) {
				grade = "C";
			} else if (qpts == 4.0) {
				grade = "D";
			}
		}
		if (credts == 3) {
			if (qpts <= 12.0 && qpts > 9.0) {
				grade = "A";
			} else if (qpts <= 9.0 && qpts > 6.0) {
				grade = "B";
			} else if (qpts <= 6.0 && qpts > 3.0) {
				grade = "C";
			} else if (qpts == 3.0) {
				grade = "D";
			}
		}
		if (credts == 2) {
			if (qpts <= 8.0 && qpts > 6.0) {
				grade = "A";
			} else if (qpts <= 6.0 && qpts > 4.0) {
				grade = "B";
			} else if (qpts <= 4.0 && qpts > 2.0) {
				grade = "C";
			} else if (qpts == 2.0) {
				grade = "D";
			}
		}
		return grade;
	}
	
}

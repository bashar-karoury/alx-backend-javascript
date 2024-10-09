namespace Subjects {
	// 	write a Subject class in the same namespace named Subjects.
	export class Subject {
		teacher: Subjects.Teacher
		set setTeacher(t: Subjects.Teacher) {
			this.teacher = t;
		}
	}
}
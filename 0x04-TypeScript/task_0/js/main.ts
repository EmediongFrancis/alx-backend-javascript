interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Bendito',
    lastName: 'Francis',
    age: 69,
    location: 'Lagos',
}

const student2: Student = {
    firstName: 'Amoroso',
    lastName: 'Akpanyung',
    age: 96,
    location: 'Lagos',
}

const studentsList: Array<Student> = [student1, student2];
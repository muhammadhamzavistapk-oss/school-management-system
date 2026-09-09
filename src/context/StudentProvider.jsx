
import { useState } from "react";
import StudentContext from "./StudentContext";

const initialStudents = [
    {
        id: "STU-001",
        name: "Ali Khan",
        email: "ali@example.com",
        phone: "03001234567",
        className: "10th",
        section: "A",
        gender: "Male",
        age: 16,
    },
    {
        id: "STU-002",
        name: "Sara Ahmed",
        email: "sara@example.com",
        phone: "03111234567",
        className: "9th",
        section: "B",
        gender: "Female",
        age: 15,
    },
    {
        id: "STU-003",
        name: "Usman Malik",
        email: "usman@example.com",
        phone: "03221234567",
        className: "10th",
        section: "A",
        gender: "Male",
        age: 16,
    },
];

function StudentProvider({ children }) {
    const [students, setStudents] = useState(initialStudents);

    const addStudent = (student) => {
        const newStudent = {
            ...student,
            id: `STU-${String(students.length + 1).padStart(3, "0")}`,
        };

        setStudents((previousStudents) => [
            ...previousStudents,
            newStudent,
        ]);
    };

    const updateStudent = (updatedStudent) => {
        setStudents((previousStudents) =>
            previousStudents.map((student) =>
                student.id === updatedStudent.id
                    ? updatedStudent
                    : student
            )
        );
    };

    const deleteStudent = (studentId) => {
        setStudents((previousStudents) =>
            previousStudents.filter(
                (student) => student.id !== studentId
            )
        );
    };

    return (
        <StudentContext.Provider
            value={{
                students,
                addStudent,
                updateStudent,
                deleteStudent,
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}

export default StudentProvider;
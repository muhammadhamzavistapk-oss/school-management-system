
import "./Student.css";

import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import StudentContext from "../../context/StudentContext";
import {
    Plus,
    Search,
    Eye,
    Pencil,
    Trash2,
    Users,
    UserCheck,
    UserX,
    GraduationCap,
} from "lucide-react";

function Student() {
    const { students, deleteStudent } = useContext(StudentContext);

    const [search, setSearch] = useState("");

    const [classFilter, setClassFilter] =
        useState("All");

    const [statusFilter, setStatusFilter] =
        useState("All");

    // -----------------------------------------
    // Delete Student
    // -----------------------------------------

    const handleDelete = (id) => {
        const student = students.find(
            (item) => item.id === id
        );

        if (!student) {
            return;
        }

        const confirmed = window.confirm(
            `Are you sure you want to delete ${student.name}?`
        );

        if (!confirmed) {
            return;
        }

        deleteStudent(id);
    };

    // -----------------------------------------
    // Filter Students
    // -----------------------------------------

    const filteredStudents = useMemo(() => {
        const searchValue =
            search.trim().toLowerCase();

        return students.filter((student) => {
            const matchesSearch =
                !searchValue ||
                student.name
                    .toLowerCase()
                    .includes(searchValue) ||
                student.email
                    .toLowerCase()
                    .includes(searchValue) ||
                student.id
                    .toLowerCase()
                    .includes(searchValue) ||
                student.phone.includes(searchValue);

            const matchesClass =
                classFilter === "All" ||
                student.className === classFilter;

            const matchesStatus =
                statusFilter === "All" ||
                student.status === statusFilter;

            return (
                matchesSearch &&
                matchesClass &&
                matchesStatus
            );
        });
    }, [
        students,
        search,
        classFilter,
        statusFilter,
    ]);

    // -----------------------------------------
    // Statistics
    // -----------------------------------------

    const totalStudents = students.length;

    const activeStudents = students.filter(
        (student) =>
            student.status === "Active"
    ).length;

    const inactiveStudents = students.filter(
        (student) =>
            student.status === "Inactive"
    ).length;

    const uniqueClasses = [
        ...new Set(
            students.map(
                (student) => student.className
            )
        ),
    ];

    const classes = [
        "All",
        ...uniqueClasses,
    ];

    // -----------------------------------------
    // Render
    // -----------------------------------------

    return (
        <div className="student-page">

            {/* =========================
                HEADER
            ========================== */}

            <div className="student-page-header">

                <div>
                    <h1>Students</h1>

                    <p>
                        Manage all students in your
                        school.
                    </p>
                </div>

                <Link
                    to="/students/add"
                    className="add-student-btn"
                >
                    <Plus size={18} />

                    Add Student
                </Link>

            </div>

            {/* =========================
                STATISTICS
            ========================== */}

            <div className="student-stats">

                <div className="student-stat-card">

                    <div className="stat-icon">
                        <Users size={22} />
                    </div>

                    <div>
                        <span>
                            Total Students
                        </span>

                        <strong>
                            {totalStudents}
                        </strong>
                    </div>

                </div>

                <div className="student-stat-card">

                    <div className="stat-icon">
                        <UserCheck size={22} />
                    </div>

                    <div>
                        <span>
                            Active Students
                        </span>

                        <strong>
                            {activeStudents}
                        </strong>
                    </div>

                </div>

                <div className="student-stat-card">

                    <div className="stat-icon">
                        <UserX size={22} />
                    </div>

                    <div>
                        <span>
                            Inactive Students
                        </span>

                        <strong>
                            {inactiveStudents}
                        </strong>
                    </div>

                </div>

                <div className="student-stat-card">

                    <div className="stat-icon">
                        <GraduationCap size={22} />
                    </div>

                    <div>
                        <span>
                            Classes
                        </span>

                        <strong>
                            {uniqueClasses.length}
                        </strong>
                    </div>

                </div>

            </div>

            {/* =========================
                TABLE CARD
            ========================== */}

            <div className="student-table-card">

                {/* Toolbar */}

                <div className="student-toolbar">

                    <div className="student-search">

                        <Search size={18} />

                        <input
                            type="text"
                            placeholder="Search by name, ID, email or phone..."
                            value={search}
                            onChange={(event) =>
                                setSearch(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                    <div className="student-filters">

                        <select
                            value={classFilter}
                            onChange={(event) =>
                                setClassFilter(
                                    event.target.value
                                )
                            }
                        >
                            {classes.map(
                                (className) => (
                                    <option
                                        key={
                                            className
                                        }
                                        value={
                                            className
                                        }
                                    >
                                        {className ===
                                            "All"
                                            ? "All Classes"
                                            : className}
                                    </option>
                                )
                            )}
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(event) =>
                                setStatusFilter(
                                    event.target.value
                                )
                            }
                        >
                            <option value="All">
                                All Status
                            </option>

                            <option value="Active">
                                Active
                            </option>

                            <option value="Inactive">
                                Inactive
                            </option>
                        </select>

                    </div>

                </div>

                {/* Table */}

                <div className="student-table-wrapper">

                    <table className="student-table">

                        <thead>
                            <tr>
                                <th>
                                    Student
                                </th>

                                <th>
                                    Student ID
                                </th>

                                <th>
                                    Contact
                                </th>

                                <th>
                                    Class
                                </th>

                                <th>
                                    Section
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredStudents.length ===
                                0 ? (
                                <tr>

                                    <td
                                        colSpan="7"
                                        className="empty-students"
                                    >
                                        <Users
                                            size={40}
                                        />

                                        <strong>
                                            No students
                                            found
                                        </strong>

                                        <span>
                                            Try changing
                                            your search
                                            or filters.
                                        </span>

                                    </td>

                                </tr>
                            ) : (
                                filteredStudents.map(
                                    (student) => (
                                        <tr
                                            key={
                                                student.id
                                            }
                                        >

                                            {/* Student */}

                                            <td>

                                                <div className="student-name-cell">

                                                    <div className="student-avatar">
                                                        {student.name
                                                            .charAt(
                                                                0
                                                            )
                                                            .toUpperCase()}
                                                    </div>

                                                    <div>

                                                        <strong>
                                                            {
                                                                student.name
                                                            }
                                                        </strong>

                                                        <span>
                                                            {
                                                                student.gender
                                                            }
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>

                                            {/* ID */}

                                            <td>

                                                <span className="student-id">
                                                    {
                                                        student.id
                                                    }
                                                </span>

                                            </td>

                                            {/* Contact */}

                                            <td>

                                                <div className="contact-cell">

                                                    <span>
                                                        {
                                                            student.email
                                                        }
                                                    </span>

                                                    <small>
                                                        {
                                                            student.phone
                                                        }
                                                    </small>

                                                </div>

                                            </td>

                                            {/* Class */}

                                            <td>
                                                {
                                                    student.className
                                                }
                                            </td>

                                            {/* Section */}

                                            <td>
                                                {
                                                    student.section
                                                }
                                            </td>

                                            {/* Status */}

                                            <td>

                                                <span
                                                    className={`status-badge ${student.status ===
                                                        "Active"
                                                        ? "active"
                                                        : "inactive"
                                                        }`}
                                                >
                                                    {
                                                        student.status
                                                    }
                                                </span>

                                            </td>

                                            {/* Actions */}

                                            <td>

                                                <div className="action-buttons">

                                                    <Link
                                                        to={`/students/${student.id}`}
                                                        className="action-btn view"
                                                        title="View Student"
                                                    >
                                                        <Eye
                                                            size={
                                                                17
                                                            }
                                                        />
                                                    </Link>

                                                    <Link
                                                        to={`/students/edit/${student.id}`}
                                                        className="action-btn edit"
                                                        title="Edit Student"
                                                    >
                                                        <Pencil
                                                            size={
                                                                17
                                                            }
                                                        />
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        className="action-btn delete"
                                                        title="Delete Student"
                                                        onClick={() =>
                                                            handleDelete(
                                                                student.id
                                                            )
                                                        }
                                                    >
                                                        <Trash2
                                                            size={
                                                                17
                                                            }
                                                        />
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>
                                    )
                                )
                            )}

                        </tbody>

                    </table>

                </div>

                {/* Footer */}

                <div className="student-table-footer">

                    Showing{" "}

                    <strong>
                        {
                            filteredStudents.length
                        }
                    </strong>{" "}

                    of{" "}

                    <strong>
                        {students.length}
                    </strong>{" "}

                    students

                </div>

            </div>

        </div>
    );
}

export default Student;

// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";

// import {
//     Eye,
//     Pencil,
//     Plus,
//     Search,
//     Trash2,
// } from "lucide-react";

// import studentService from "../../services/studentService";

// import "./Student.css";


// function Students() {

//     const [students, setStudents] = useState([]);

//     const [search, setSearch] = useState("");

//     const [classFilter, setClassFilter] = useState("All");

//     const [statusFilter, setStatusFilter] = useState("All");

//     const [loading, setLoading] = useState(true);

//     const [error, setError] = useState("");


//     /*
//     =========================================
//     LOAD STUDENTS FROM LARAVEL API
//     =========================================
//     */

//     const loadStudents = async () => {

//         try {

//             setLoading(true);
//             setError("");

//             const response =
//                 await studentService.getAll();

//             /*
//             Laravel may return either:

//             [
//                 {...},
//                 {...}
//             ]

//             OR:

//             {
//                 data: [...]
//             }

//             This handles both.
//             */

//             const studentData =
//                 Array.isArray(response.data)
//                     ? response.data
//                     : response.data?.data || [];

//             setStudents(studentData);

//         } catch (err) {

//             console.error(
//                 "Failed to load students:",
//                 err
//             );

//             setError(
//                 "Unable to load students. Please check the Laravel API."
//             );

//         } finally {

//             setLoading(false);

//         }
//     };


//     /*
//     =========================================
//     LOAD WHEN PAGE OPENS
//     =========================================
//     */

//     useEffect(() => {

//         loadStudents();

//     }, []);


//     /*
//     =========================================
//     FILTER STUDENTS
//     =========================================
//     */

//     const filteredStudents = useMemo(() => {

//         return students.filter((student) => {

//             const searchValue =
//                 search.toLowerCase().trim();

//             const matchesSearch =
//                 !searchValue ||
//                 String(student.name || "")
//                     .toLowerCase()
//                     .includes(searchValue) ||
//                 String(student.email || "")
//                     .toLowerCase()
//                     .includes(searchValue) ||
//                 String(student.id || "")
//                     .toLowerCase()
//                     .includes(searchValue) ||
//                 String(student.phone || "")
//                     .toLowerCase()
//                     .includes(searchValue);


//             const matchesClass =
//                 classFilter === "All" ||
//                 student.className === classFilter ||
//                 student.class === classFilter;


//             const matchesStatus =
//                 statusFilter === "All" ||
//                 student.status === statusFilter;


//             return (
//                 matchesSearch &&
//                 matchesClass &&
//                 matchesStatus
//             );

//         });

//     }, [
//         students,
//         search,
//         classFilter,
//         statusFilter,
//     ]);


//     /*
//     =========================================
//     STATISTICS
//     =========================================
//     */

//     const totalStudents =
//         students.length;

//     const activeStudents =
//         students.filter(
//             (student) =>
//                 student.status === "Active"
//         ).length;

//     const inactiveStudents =
//         students.filter(
//             (student) =>
//                 student.status === "Inactive"
//         ).length;


//     /*
//     =========================================
//     DELETE STUDENT
//     =========================================
//     */

//     const handleDelete = async (id) => {

//         const confirmed =
//             window.confirm(
//                 "Are you sure you want to delete this student?"
//             );

//         if (!confirmed) {
//             return;
//         }


//         try {

//             await studentService.delete(id);

//             setStudents((previousStudents) =>
//                 previousStudents.filter(
//                     (student) =>
//                         student.id !== id
//                 )
//             );

//         } catch (err) {

//             console.error(
//                 "Failed to delete student:",
//                 err
//             );

//             alert(
//                 "Unable to delete student."
//             );

//         }

//     };


//     /*
//     =========================================
//     LOADING
//     =========================================
//     */

//     if (loading) {

//         return (
//             <div className="student-page">

//                 <div className="empty-students">

//                     <h2>
//                         Loading Students...
//                     </h2>

//                     <p>
//                         Please wait while we load
//                         student records.
//                     </p>

//                 </div>

//             </div>
//         );

//     }


//     /*
//     =========================================
//     ERROR
//     =========================================
//     */

//     if (error) {

//         return (
//             <div className="student-page">

//                 <div className="empty-students">

//                     <h2>
//                         Unable to Load Students
//                     </h2>

//                     <p>
//                         {error}
//                     </p>

//                     <button
//                         type="button"
//                         className="add-student-btn"
//                         onClick={loadStudents}
//                     >
//                         Try Again
//                     </button>

//                 </div>

//             </div>
//         );

//     }


//     return (

//         <div className="student-page">


//             {/* =================================
//                 HEADER
//             ================================= */}

//             <div className="student-page-header">

//                 <div>

//                     <h1>
//                         Students
//                     </h1>

//                     <p>
//                         Manage all students in
//                         your school.
//                     </p>

//                 </div>


//                 <Link
//                     to="/students/add"
//                     className="add-student-btn"
//                 >
//                     <Plus size={18} />

//                     Add Student
//                 </Link>

//             </div>


//             {/* =================================
//                 STATISTICS
//             ================================= */}

//             <div className="student-stats">

//                 <div className="student-stat-card">

//                     <div className="stat-icon">
//                         <Plus size={20} />
//                     </div>

//                     <div>

//                         <span>
//                             Total Students
//                         </span>

//                         <strong>
//                             {totalStudents}
//                         </strong>

//                     </div>

//                 </div>


//                 <div className="student-stat-card">

//                     <div className="stat-icon">
//                         ✓
//                     </div>

//                     <div>

//                         <span>
//                             Active Students
//                         </span>

//                         <strong>
//                             {activeStudents}
//                         </strong>

//                     </div>

//                 </div>


//                 <div className="student-stat-card">

//                     <div className="stat-icon">
//                         !
//                     </div>

//                     <div>

//                         <span>
//                             Inactive Students
//                         </span>

//                         <strong>
//                             {inactiveStudents}
//                         </strong>

//                     </div>

//                 </div>

//             </div>


//             {/* =================================
//                 TABLE CARD
//             ================================= */}

//             <div className="student-table-card">


//                 {/* TOOLBAR */}

//                 <div className="student-toolbar">


//                     <div className="student-search">

//                         <Search size={18} />

//                         <input
//                             type="text"
//                             placeholder="Search students..."
//                             value={search}
//                             onChange={(event) =>
//                                 setSearch(
//                                     event.target.value
//                                 )
//                             }
//                         />

//                     </div>


//                     <div className="student-filters">

//                         <select
//                             value={classFilter}
//                             onChange={(event) =>
//                                 setClassFilter(
//                                     event.target.value
//                                 )
//                             }
//                         >

//                             <option value="All">
//                                 All Classes
//                             </option>

//                             <option value="8th">
//                                 8th
//                             </option>

//                             <option value="9th">
//                                 9th
//                             </option>

//                             <option value="10th">
//                                 10th
//                             </option>

//                         </select>


//                         <select
//                             value={statusFilter}
//                             onChange={(event) =>
//                                 setStatusFilter(
//                                     event.target.value
//                                 )
//                             }
//                         >

//                             <option value="All">
//                                 All Status
//                             </option>

//                             <option value="Active">
//                                 Active
//                             </option>

//                             <option value="Inactive">
//                                 Inactive
//                             </option>

//                         </select>

//                     </div>

//                 </div>


//                 {/* TABLE */}

//                 <div className="student-table-wrapper">

//                     <table className="student-table">

//                         <thead>

//                             <tr>

//                                 <th>
//                                     Student
//                                 </th>

//                                 <th>
//                                     Student ID
//                                 </th>

//                                 <th>
//                                     Class
//                                 </th>

//                                 <th>
//                                     Contact
//                                 </th>

//                                 <th>
//                                     Status
//                                 </th>

//                                 <th>
//                                     Actions
//                                 </th>

//                             </tr>

//                         </thead>


//                         <tbody>

//                             {filteredStudents.length === 0 ? (

//                                 <tr>

//                                     <td
//                                         colSpan="6"
//                                         className="empty-students"
//                                     >
//                                         No students found.
//                                     </td>

//                                 </tr>

//                             ) : (

//                                 filteredStudents.map(
//                                     (student) => (

//                                         <tr
//                                             key={student.id}
//                                         >

//                                             {/* STUDENT */}

//                                             <td>

//                                                 <div className="student-name-cell">

//                                                     <div className="student-avatar">

//                                                         {String(
//                                                             student.name ||
//                                                             "?"
//                                                         )
//                                                             .charAt(0)
//                                                             .toUpperCase()}

//                                                     </div>

//                                                     <div>

//                                                         <strong>
//                                                             {student.name}
//                                                         </strong>

//                                                         <span>
//                                                             {student.email}
//                                                         </span>

//                                                     </div>

//                                                 </div>

//                                             </td>


//                                             {/* ID */}

//                                             <td>

//                                                 <span className="student-id">
//                                                     {student.id}
//                                                 </span>

//                                             </td>


//                                             {/* CLASS */}

//                                             <td>

//                                                 <strong>
//                                                     {
//                                                         student.className ||
//                                                         student.class ||
//                                                         "-"
//                                                     }
//                                                 </strong>

//                                                 <span>
//                                                     Section{" "}
//                                                     {student.section ||
//                                                         "-"}
//                                                 </span>

//                                             </td>


//                                             {/* CONTACT */}

//                                             <td>

//                                                 <div className="contact-cell">

//                                                     <span>
//                                                         {student.phone ||
//                                                             "-"}
//                                                     </span>

//                                                     <span>
//                                                         {student.email ||
//                                                             "-"}
//                                                     </span>

//                                                 </div>

//                                             </td>


//                                             {/* STATUS */}

//                                             <td>

//                                                 <span
//                                                     className={`status-badge ${student.status ===
//                                                             "Active"
//                                                             ? "active"
//                                                             : "inactive"
//                                                         }`}
//                                                 >
//                                                     {
//                                                         student.status ||
//                                                         "Unknown"
//                                                     }
//                                                 </span>

//                                             </td>


//                                             {/* ACTIONS */}

//                                             <td>

//                                                 <div className="action-buttons">


//                                                     {/* VIEW */}

//                                                     <Link
//                                                         to={`/students/${student.id}`}
//                                                         className="action-btn view"
//                                                         title="View Student"
//                                                     >
//                                                         <Eye
//                                                             size={16}
//                                                         />
//                                                     </Link>


//                                                     {/* EDIT */}

//                                                     <Link
//                                                         to={`/students/edit/${student.id}`}
//                                                         className="action-btn edit"
//                                                         title="Edit Student"
//                                                     >
//                                                         <Pencil
//                                                             size={16}
//                                                         />
//                                                     </Link>


//                                                     {/* DELETE */}

//                                                     <button
//                                                         type="button"
//                                                         className="action-btn delete"
//                                                         title="Delete Student"
//                                                         onClick={() =>
//                                                             handleDelete(
//                                                                 student.id
//                                                             )
//                                                         }
//                                                     >
//                                                         <Trash2
//                                                             size={16}
//                                                         />
//                                                     </button>

//                                                 </div>

//                                             </td>

//                                         </tr>

//                                     )
//                                 )

//                             )}

//                         </tbody>

//                     </table>

//                 </div>


//                 {/* FOOTER */}

//                 <div className="student-table-footer">

//                     Showing{" "}

//                     <strong>
//                         {filteredStudents.length}
//                     </strong>

//                     {" "}of{" "}

//                     <strong>
//                         {students.length}
//                     </strong>

//                     {" "}students

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default Students;


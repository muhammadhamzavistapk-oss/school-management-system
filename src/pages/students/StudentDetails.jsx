// // import { useContext } from "react";
// // import {
// //     useNavigate,
// //     useParams,
// // } from "react-router-dom";

// // import StudentContext from "../../context/StudentContext";
// // import StudentForm from "./StudentForm";

// // function StudentDetails() {

// //     const { id } = useParams();

// //     const navigate = useNavigate();

// //     const {
// //         students,
// //         updateStudent,
// //     } = useContext(StudentContext);


// //     const student = students.find(
// //         (item) => item.id === id
// //     );


// //     /*
// //      * Detect whether this is EDIT mode.
// //      *
// //      * Example:
// //      * /students/STU-001
// //      *          ↓
// //      * View mode
// //      *
// //      * /students/STU-001/edit
// //      *          ↓
// //      * Edit mode
// //      */
// //     const isEditMode =
// //         window.location.pathname.endsWith("/edit");


// //     /*
// //      * Student does not exist
// //      */
// //     if (!student) {

// //         return (

// //             <div className="student-not-found">

// //                 <h1>
// //                     Student Not Found
// //                 </h1>

// //                 <p>
// //                     The student you are looking for
// //                     does not exist.
// //                 </p>

// //                 <button
// //                     type="button"
// //                     onClick={() =>
// //                         navigate("/students")
// //                     }
// //                 >
// //                     Back to Students
// //                 </button>

// //             </div>

// //         );

// //     }


// //     /*
// //      * UPDATE STUDENT
// //      */
// //     const handleUpdate = (formData) => {

// //         updateStudent({
// //             ...formData,
// //             id: student.id,
// //         });

// //         navigate(`/students/${student.id}`);

// //     };


// //     /*
// //      * EDIT PAGE
// //      */
// //     if (isEditMode) {

// //         return (

// //             <div className="student-form-page">

// //                 <div className="student-form-header">

// //                     <div>

// //                         <h1>
// //                             Edit Student
// //                         </h1>

// //                         <p>
// //                             Update student information.
// //                         </p>

// //                     </div>

// //                 </div>


// //                 <div className="student-form-card">

// //                     <StudentForm
// //                         key={student.id}
// //                         student={student}
// //                         onSubmit={handleUpdate}
// //                         onCancel={() =>
// //                             navigate(
// //                                 `/students/${student.id}`
// //                             )
// //                         }
// //                     />

// //                 </div>

// //             </div>

// //         );

// //     }


// //     /*
// //      * VIEW STUDENT
// //      */
// //     return (

// //         <div className="student-view-page">

// //             {/* HEADER */}

// //             <div className="student-view-header">

// //                 <div>

// //                     <h1>
// //                         Student Details
// //                     </h1>

// //                     <p>
// //                         View student information.
// //                     </p>

// //                 </div>


// //                 <div className="student-view-header-actions">

// //                     <button
// //                         type="button"
// //                         onClick={() =>
// //                             navigate("/students")
// //                         }
// //                     >
// //                         Back to Students
// //                     </button>


// //                     <button
// //                         type="button"
// //                         className="edit-button"
// //                         onClick={() =>
// //                             navigate(
// //                                 `/students/${student.id}/edit`
// //                             )
// //                         }
// //                     >
// //                         Edit Student
// //                     </button>

// //                 </div>

// //             </div>


// //             {/* DETAILS CARD */}

// //             <div className="student-details-card">

// //                 <div className="student-detail">

// //                     <span>
// //                         Student ID
// //                     </span>

// //                     <strong>
// //                         {student.id}
// //                     </strong>

// //                 </div>


// //                 <div className="student-detail">

// //                     <span>
// //                         Full Name
// //                     </span>

// //                     <strong>
// //                         {student.name}
// //                     </strong>

// //                 </div>


// //                 <div className="student-detail">

// //                     <span>
// //                         Email
// //                     </span>

// //                     <strong>
// //                         {student.email}
// //                     </strong>

// //                 </div>


// //                 <div className="student-detail">

// //                     <span>
// //                         Phone
// //                     </span>

// //                     <strong>
// //                         {student.phone}
// //                     </strong>

// //                 </div>


// //                 <div className="student-detail">

// //                     <span>
// //                         Class
// //                     </span>

// //                     <strong>
// //                         {student.className}
// //                     </strong>

// //                 </div>


// //                 <div className="student-detail">

// //                     <span>
// //                         Section
// //                     </span>

// //                     <strong>
// //                         {student.section}
// //                     </strong>

// //                 </div>


// //                 <div className="student-detail">

// //                     <span>
// //                         Gender
// //                     </span>

// //                     <strong>
// //                         {student.gender}
// //                     </strong>

// //                 </div>


// //                 <div className="student-detail">

// //                     <span>
// //                         Status
// //                     </span>

// //                     <strong>
// //                         {student.status || "Active"}
// //                     </strong>

// //                 </div>

// //             </div>

// //         </div>

// //     );

// // }

// // export default StudentDetails;


// import {
//     ArrowLeft,
//     Pencil,
//     User,
//     Mail,
//     Phone,
//     MapPin,
//     Calendar,
//     GraduationCap,
//     Users,
// } from "lucide-react";

// import {
//     Link,
//     useParams,
// } from "react-router-dom";

// const STORAGE_KEY = "school_students";

// // -----------------------------------------
// // Get Student
// // -----------------------------------------

// function getStudentById(id) {
//     try {
//         const savedStudents =
//             localStorage.getItem(STORAGE_KEY);

//         if (!savedStudents) {
//             return null;
//         }

//         const students = JSON.parse(savedStudents);

//         return (
//             students.find(
//                 (student) => student.id === id
//             ) || null
//         );
//     } catch (error) {
//         console.error(
//             "Failed to load student:",
//             error
//         );

//         return null;
//     }
// }

// // -----------------------------------------
// // Component
// // -----------------------------------------

// function StudentDetails() {
//     const { id } = useParams();

//     /*
//      * Read the student directly.
//      *
//      * No useEffect.
//      * No setState.
//      */
//     const student = getStudentById(id);

//     // -----------------------------------------
//     // Student Not Found
//     // -----------------------------------------

//     if (!student) {
//         return (
//             <div className="student-not-found">

//                 <div className="not-found-icon">
//                     <Users size={40} />
//                 </div>

//                 <h2>
//                     Student Not Found
//                 </h2>

//                 <p>
//                     The student you are looking
//                     for does not exist or has
//                     already been deleted.
//                 </p>

//                 <Link
//                     to="/students"
//                     className="back-to-students"
//                 >
//                     <ArrowLeft size={17} />

//                     Back to Students
//                 </Link>

//             </div>
//         );
//     }

//     // -----------------------------------------
//     // Main UI
//     // -----------------------------------------

//     return (
//         <div className="student-details-page">

//             {/* =========================
//                 HEADER
//             ========================== */}

//             <div className="details-header">

//                 <div>

//                     <Link
//                         to="/students"
//                         className="back-link"
//                     >
//                         <ArrowLeft
//                             size={17}
//                         />

//                         Back to Students
//                     </Link>

//                     <h1>
//                         Student Details
//                     </h1>

//                     <p>
//                         View complete information
//                         about this student.
//                     </p>

//                 </div>

//                 <Link
//                     to={`/students/edit/${student.id}`}
//                     className="edit-student-btn"
//                 >
//                     <Pencil size={18} />

//                     Edit Student
//                 </Link>

//             </div>

//             {/* =========================
//                 PROFILE
//             ========================== */}

//             <div className="student-profile-card">

//                 <div className="large-student-avatar">
//                     {student.name
//                         ?.charAt(0)
//                         .toUpperCase()}
//                 </div>

//                 <div className="profile-main">

//                     <h2>
//                         {student.name}
//                     </h2>

//                     <span>
//                         {student.id}
//                     </span>

//                     <div className="profile-status">

//                         <span
//                             className={`status-badge ${student.status ===
//                                 "Active"
//                                 ? "active"
//                                 : "inactive"
//                                 }`}
//                         >
//                             {student.status}
//                         </span>

//                     </div>

//                 </div>

//                 <div className="profile-academic">

//                     <div>
//                         <span>
//                             Class
//                         </span>

//                         <strong>
//                             {student.className}
//                         </strong>
//                     </div>

//                     <div>
//                         <span>
//                             Section
//                         </span>

//                         <strong>
//                             {student.section}
//                         </strong>
//                     </div>

//                 </div>

//             </div>

//             {/* =========================
//                 DETAILS
//             ========================== */}

//             <div className="details-grid">

//                 {/* PERSONAL INFORMATION */}

//                 <div className="details-card">

//                     <div className="details-card-header">

//                         <div className="details-icon">
//                             <User size={20} />
//                         </div>

//                         <div>
//                             <h3>
//                                 Personal Information
//                             </h3>

//                             <p>
//                                 Basic student details
//                             </p>
//                         </div>

//                     </div>

//                     <DetailRow
//                         icon={<User size={18} />}
//                         label="Full Name"
//                         value={student.name}
//                     />

//                     <DetailRow
//                         icon={<Mail size={18} />}
//                         label="Email"
//                         value={student.email}
//                     />

//                     <DetailRow
//                         icon={<Phone size={18} />}
//                         label="Phone"
//                         value={student.phone}
//                     />

//                     <DetailRow
//                         icon={
//                             <Calendar size={18} />
//                         }
//                         label="Date of Birth"
//                         value={formatDate(
//                             student.dateOfBirth
//                         )}
//                     />

//                     <DetailRow
//                         icon={<User size={18} />}
//                         label="Gender"
//                         value={student.gender}
//                     />

//                     <DetailRow
//                         icon={
//                             <MapPin size={18} />
//                         }
//                         label="Address"
//                         value={
//                             student.address ||
//                             "Not provided"
//                         }
//                     />

//                 </div>

//                 {/* ACADEMIC INFORMATION */}

//                 <div className="details-card">

//                     <div className="details-card-header">

//                         <div className="details-icon">
//                             <GraduationCap
//                                 size={20}
//                             />
//                         </div>

//                         <div>
//                             <h3>
//                                 Academic Information
//                             </h3>

//                             <p>
//                                 Student academic
//                                 details
//                             </p>
//                         </div>

//                     </div>

//                     <DetailRow
//                         icon={
//                             <GraduationCap
//                                 size={18}
//                             />
//                         }
//                         label="Student ID"
//                         value={student.id}
//                     />

//                     <DetailRow
//                         icon={
//                             <GraduationCap
//                                 size={18}
//                             />
//                         }
//                         label="Class"
//                         value={
//                             student.className
//                         }
//                     />

//                     <DetailRow
//                         icon={
//                             <GraduationCap
//                                 size={18}
//                             />
//                         }
//                         label="Section"
//                         value={
//                             student.section
//                         }
//                     />

//                     <DetailRow
//                         icon={
//                             <Users size={18} />
//                         }
//                         label="Status"
//                         value={student.status}
//                     />

//                 </div>

//                 {/* GUARDIAN INFORMATION */}

//                 <div className="details-card guardian-card">

//                     <div className="details-card-header">

//                         <div className="details-icon">
//                             <Users size={20} />
//                         </div>

//                         <div>
//                             <h3>
//                                 Guardian Information
//                             </h3>

//                             <p>
//                                 Parent or guardian
//                                 details
//                             </p>
//                         </div>

//                     </div>

//                     <DetailRow
//                         icon={
//                             <User size={18} />
//                         }
//                         label="Guardian Name"
//                         value={
//                             student.guardianName
//                         }
//                     />

//                     <DetailRow
//                         icon={
//                             <Phone size={18} />
//                         }
//                         label="Guardian Phone"
//                         value={
//                             student.guardianPhone
//                         }
//                     />

//                 </div>

//             </div>

//         </div>
//     );
// }

// // -----------------------------------------
// // Detail Row
// // -----------------------------------------

// function DetailRow({
//     icon,
//     label,
//     value,
// }) {
//     return (
//         <div className="detail-row">

//             <div className="detail-row-icon">
//                 {icon}
//             </div>

//             <div className="detail-row-content">

//                 <span>
//                     {label}
//                 </span>

//                 <strong>
//                     {value || "Not provided"}
//                 </strong>

//             </div>

//         </div>
//     );
// }

// // -----------------------------------------
// // Format Date
// // -----------------------------------------

// function formatDate(date) {
//     if (!date) {
//         return "Not provided";
//     }

//     const parsedDate = new Date(date);

//     if (Number.isNaN(parsedDate.getTime())) {
//         return "Not provided";
//     }

//     return parsedDate.toLocaleDateString(
//         "en-US",
//         {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//         }
//     );
// }

// export default StudentDetails;


// import "./Student.css";

// import {
//     ArrowLeft,
//     Pencil,
//     Mail,
//     Phone,
//     MapPin,
//     User,
//     GraduationCap,
//     Users,
//     CalendarDays,
// } from "lucide-react";

// import {
//     Link,
//     useParams,
// } from "react-router-dom";

// const STORAGE_KEY = "school_students";

// function StudentDetails() {
//     const { id } = useParams();

//     const students = JSON.parse(
//         localStorage.getItem(STORAGE_KEY) || "[]"
//     );

//     const student = students.find(
//         (item) => item.id === id
//     );

//     if (!student) {
//         return (
//             <div className="student-details-page">
//                 <div className="student-not-found">
//                     <Users size={45} />

//                     <h2>
//                         Student Not Found
//                     </h2>

//                     <p>
//                         Student {id} does not exist.
//                     </p>

//                     <Link
//                         to="/students"
//                         className="details-back-btn"
//                     >
//                         <ArrowLeft size={18} />
//                         Back to Students
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="student-details-page">

//             {/* HEADER */}

//             <div className="details-page-header">

//                 <div>
//                     <div className="details-breadcrumb">
//                         <Link to="/students">
//                             Students
//                         </Link>

//                         <span>/</span>

//                         <span>
//                             {student.id}
//                         </span>
//                     </div>

//                     <h1>
//                         Student Details
//                     </h1>

//                     <p>
//                         Complete information about the student.
//                     </p>
//                 </div>

//                 <Link
//                     to={`/students/edit/${student.id}`}
//                     className="details-edit-btn"
//                 >
//                     <Pencil size={17} />
//                     Edit Student
//                 </Link>

//             </div>


//             {/* PROFILE */}

//             <div className="student-profile">

//                 <div className="profile-main">

//                     <div className="profile-avatar">
//                         {student.name
//                             .charAt(0)
//                             .toUpperCase()}
//                     </div>

//                     <div className="profile-info">

//                         <h2>
//                             {student.name}
//                         </h2>

//                         <span className="profile-id">
//                             {student.id}
//                         </span>

//                         <span
//                             className={`profile-status ${student.status === "Active"
//                                     ? "active"
//                                     : "inactive"
//                                 }`}
//                         >
//                             ● {student.status}
//                         </span>

//                     </div>

//                 </div>


//                 <div className="profile-academic">

//                     <div>
//                         <span>
//                             Class
//                         </span>

//                         <strong>
//                             {student.className}
//                         </strong>
//                     </div>

//                     <div>
//                         <span>
//                             Section
//                         </span>

//                         <strong>
//                             {student.section}
//                         </strong>
//                     </div>

//                 </div>

//             </div>


//             {/* INFORMATION CARDS */}

//             <div className="details-cards">


//                 {/* PERSONAL */}

//                 <div className="details-card">

//                     <div className="card-title">

//                         <div className="card-icon">
//                             <User size={19} />
//                         </div>

//                         <div>
//                             <h3>
//                                 Personal Information
//                             </h3>

//                             <p>
//                                 Student basic information
//                             </p>
//                         </div>

//                     </div>


//                     <div className="information-list">

//                         <div>
//                             <span>
//                                 Full Name
//                             </span>

//                             <strong>
//                                 {student.name}
//                             </strong>
//                         </div>

//                         <div>
//                             <span>
//                                 Student ID
//                             </span>

//                             <strong>
//                                 {student.id}
//                             </strong>
//                         </div>

//                         <div>
//                             <span>
//                                 Gender
//                             </span>

//                             <strong>
//                                 {student.gender}
//                             </strong>
//                         </div>

//                         <div>
//                             <span>
//                                 <CalendarDays size={15} />
//                                 Date of Birth
//                             </span>

//                             <strong>
//                                 {student.dateOfBirth}
//                             </strong>
//                         </div>

//                     </div>

//                 </div>


//                 {/* ACADEMIC */}

//                 <div className="details-card">

//                     <div className="card-title">

//                         <div className="card-icon">
//                             <GraduationCap size={19} />
//                         </div>

//                         <div>
//                             <h3>
//                                 Academic Information
//                             </h3>

//                             <p>
//                                 Current academic details
//                             </p>
//                         </div>

//                     </div>


//                     <div className="information-list">

//                         <div>
//                             <span>
//                                 Class
//                             </span>

//                             <strong>
//                                 {student.className}
//                             </strong>
//                         </div>

//                         <div>
//                             <span>
//                                 Section
//                             </span>

//                             <strong>
//                                 {student.section}
//                             </strong>
//                         </div>

//                         <div>
//                             <span>
//                                 Status
//                             </span>

//                             <strong
//                                 className={
//                                     student.status === "Active"
//                                         ? "text-active"
//                                         : "text-inactive"
//                                 }
//                             >
//                                 {student.status}
//                             </strong>
//                         </div>

//                     </div>

//                 </div>


//                 {/* CONTACT */}

//                 <div className="details-card">

//                     <div className="card-title">

//                         <div className="card-icon">
//                             <Phone size={19} />
//                         </div>

//                         <div>
//                             <h3>
//                                 Contact Information
//                             </h3>

//                             <p>
//                                 Student contact details
//                             </p>
//                         </div>

//                     </div>


//                     <div className="information-list">

//                         <div>
//                             <span>
//                                 <Mail size={15} />
//                                 Email
//                             </span>

//                             <strong>
//                                 {student.email}
//                             </strong>
//                         </div>

//                         <div>
//                             <span>
//                                 <Phone size={15} />
//                                 Phone
//                             </span>

//                             <strong>
//                                 {student.phone}
//                             </strong>
//                         </div>

//                         <div>
//                             <span>
//                                 <MapPin size={15} />
//                                 Address
//                             </span>

//                             <strong>
//                                 {student.address}
//                             </strong>
//                         </div>

//                     </div>

//                 </div>


//                 {/* GUARDIAN */}

//                 <div className="details-card">

//                     <div className="card-title">

//                         <div className="card-icon">
//                             <Users size={19} />
//                         </div>

//                         <div>
//                             <h3>
//                                 Guardian Information
//                             </h3>

//                             <p>
//                                 Parent or guardian details
//                             </p>
//                         </div>

//                     </div>


//                     <div className="information-list">

//                         <div>
//                             <span>
//                                 Guardian Name
//                             </span>

//                             <strong>
//                                 {student.guardianName}
//                             </strong>
//                         </div>

//                         <div>
//                             <span>
//                                 Guardian Phone
//                             </span>

//                             <strong>
//                                 {student.guardianPhone}
//                             </strong>
//                         </div>

//                     </div>

//                 </div>

//             </div>


//             {/* FOOTER ACTIONS */}

//             <div className="details-footer">

//                 <Link
//                     to="/students"
//                     className="details-back-btn"
//                 >
//                     <ArrowLeft size={17} />
//                     Back to Students
//                 </Link>

//                 <Link
//                     to={`/students/edit/${student.id}`}
//                     className="details-edit-btn"
//                 >
//                     <Pencil size={17} />
//                     Edit Student
//                 </Link>

//             </div>

//         </div>
//     );
// }

// export default StudentDetails;



import "./Student.css";

import { useContext } from "react";

import {
    ArrowLeft,
    Pencil,
    User,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router-dom";
import StudentContext from "../../context/StudentContext";

function StudentDetails() {
    const { id } = useParams();
    const { students } = useContext(StudentContext);
    const student = students.find(
        (item) => String(item.id) === String(id)
    );

    if (!student) {
        return (
            <div className="student-page">

                <div className="student-details-not-found">

                    <User size={40} />

                    <h2>
                        Student Not Found
                    </h2>

                    <p>
                        No student was found
                        with ID: {id}
                    </p>

                    <Link
                        to="/students"
                        className="details-back-btn"
                    >
                        <ArrowLeft size={17} />
                        Back to Students
                    </Link>

                </div>

            </div>
        );
    }

    return (
        <div className="student-page">

            {/* PAGE HEADER */}

            <div className="student-page-header">

                <div>
                    <h1>
                        Student Details
                    </h1>

                    <p>
                        View student information
                        and academic details.
                    </p>
                </div>

                <Link
                    to={`/students/edit/${student.id}`}
                    className="details-edit-btn"
                >
                    <Pencil size={17} />
                    Edit Student
                </Link>

            </div>


            {/* STUDENT SUMMARY */}

            <div className="student-simple-profile">

                <div className="simple-profile-avatar">
                    {student.name
                        .charAt(0)
                        .toUpperCase()}
                </div>

                <div>
                    <h2>
                        {student.name}
                    </h2>

                    <p>
                        Student ID:{" "}
                        <strong>
                            {student.id}
                        </strong>
                    </p>
                </div>

                <span
                    className={`simple-status ${student.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                >
                    {student.status}
                </span>

            </div>


            {/* DETAILS TABLE */}

            <div className="student-details-table-card">

                <div className="details-table-header">

                    <div>
                        <h2>
                            Student Information
                        </h2>

                        <p>
                            Complete information
                            about this student.
                        </p>
                    </div>

                </div>


                <div className="student-details-table-wrapper">

                    <table className="student-details-table">

                        <tbody>

                            <tr>
                                <th>
                                    Student ID
                                </th>

                                <td>
                                    {student.id}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Full Name
                                </th>

                                <td>
                                    {student.name}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Email
                                </th>

                                <td>
                                    {student.email}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Phone
                                </th>

                                <td>
                                    {student.phone}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Gender
                                </th>

                                <td>
                                    {student.gender}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Date of Birth
                                </th>

                                <td>
                                    {student.dateOfBirth}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Class
                                </th>

                                <td>
                                    {student.className}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Section
                                </th>

                                <td>
                                    {student.section}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Status
                                </th>

                                <td>

                                    <span
                                        className={`simple-status ${student.status ===
                                                "Active"
                                                ? "active"
                                                : "inactive"
                                            }`}
                                    >
                                        {student.status}
                                    </span>

                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Address
                                </th>

                                <td>
                                    {student.address ||
                                        "Not provided"}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Guardian Name
                                </th>

                                <td>
                                    {student.guardianName ||
                                        "Not provided"}
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    Guardian Phone
                                </th>

                                <td>
                                    {student.guardianPhone ||
                                        "Not provided"}
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>


            {/* ACTION BUTTONS */}

            <div className="student-details-footer">

                <Link
                    to="/students"
                    className="details-back-btn"
                >
                    <ArrowLeft size={17} />
                    Back to Students
                </Link>

                <Link
                    to={`/students/edit/${student.id}`}
                    className="details-edit-btn"
                >
                    <Pencil size={17} />
                    Edit Student
                </Link>

            </div>

        </div>
    );
}

export default StudentDetails;


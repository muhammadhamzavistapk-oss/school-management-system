
// import { ArrowLeft, Pencil, User } from "lucide-react";
// import { Link, useParams } from "react-router-dom";

// import "./Teacher.css";


// const teachers = [
//     {
//         id: "TCH-001",
//         name: "Ahmed Khan",
//         email: "ahmed.khan@example.com",
//         phone: "03001234567",
//         department: "Computer Science",
//         designation: "Senior Teacher",
//         qualification: "M.Sc Computer Science",
//         gender: "Male",
//         joiningDate: "2021-08-15",
//         address: "Lahore",
//         status: "Active",
//     },

//     {
//         id: "TCH-002",
//         name: "Sara Ahmed",
//         email: "sara.ahmed@example.com",
//         phone: "03111234567",
//         department: "English",
//         designation: "Teacher",
//         qualification: "M.A English",
//         gender: "Female",
//         joiningDate: "2022-03-10",
//         address: "Lahore",
//         status: "Active",
//     },

//     {
//         id: "TCH-003",
//         name: "Usman Raza",
//         email: "usman.raza@example.com",
//         phone: "03221234567",
//         department: "Mathematics",
//         designation: "Senior Teacher",
//         qualification: "M.Sc Mathematics",
//         gender: "Male",
//         joiningDate: "2020-01-20",
//         address: "Raiwind",
//         status: "Active",
//     },

//     {
//         id: "TCH-004",
//         name: "Ayesha Malik",
//         email: "ayesha.malik@example.com",
//         phone: "03331234567",
//         department: "Science",
//         designation: "Teacher",
//         qualification: "M.Sc Physics",
//         gender: "Female",
//         joiningDate: "2023-09-01",
//         address: "Lahore",
//         status: "Inactive",
//     },

//     {
//         id: "TCH-005",
//         name: "Bilal Hussain",
//         email: "bilal.hussain@example.com",
//         phone: "03441234567",
//         department: "Computer Science",
//         designation: "Teacher",
//         qualification: "MCS",
//         gender: "Male",
//         joiningDate: "2024-01-15",
//         address: "Lahore",
//         status: "Active",
//     },
// ];


// function TeacherDetails() {

//     const { id } = useParams();


//     const teacher = teachers.find(
//         (item) => item.id === id
//     );


//     /*
//     =========================================
//     TEACHER NOT FOUND
//     =========================================
//     */

//     if (!teacher) {

//         return (

//             <div className="teacher-page">

//                 <div className="teacher-details-not-found">

//                     <User size={40} />

//                     <h2>
//                         Teacher Not Found
//                     </h2>

//                     <p>
//                         No teacher was found with ID:
//                         {" "}
//                         {id}
//                     </p>

//                     <Link
//                         to="/teachers"
//                         className="teacher-back-btn"
//                     >

//                         <ArrowLeft size={17} />

//                         Back to Teachers

//                     </Link>

//                 </div>

//             </div>

//         );

//     }


//     return (

//         <div className="teacher-page">


//             {/* =================================
//                 PAGE HEADER
//             ================================= */}

//             <div className="teacher-page-header">

//                 <div>

//                     <h1>
//                         Teacher Details
//                     </h1>

//                     <p>
//                         View teacher information
//                         and professional details.
//                     </p>

//                 </div>


//                 <Link
//                     to={`/teachers/edit/${teacher.id}`}
//                     className="teacher-edit-btn"
//                 >

//                     <Pencil size={17} />

//                     Edit Teacher

//                 </Link>

//             </div>


//             {/* =================================
//                 TEACHER SUMMARY
//             ================================= */}

//             <div className="teacher-simple-profile">

//                 <div className="teacher-profile-avatar">

//                     {teacher.name
//                         .charAt(0)
//                         .toUpperCase()}

//                 </div>


//                 <div>

//                     <h2>
//                         {teacher.name}
//                     </h2>

//                     <p>
//                         Teacher ID:
//                         {" "}
//                         <strong>
//                             {teacher.id}
//                         </strong>
//                     </p>

//                 </div>


//                 <span
//                     className={`teacher-simple-status ${teacher.status === "Active"
//                         ? "active"
//                         : "inactive"
//                         }`}
//                 >

//                     {teacher.status}

//                 </span>

//             </div>


//             {/* =================================
//                 DETAILS TABLE
//             ================================= */}

//             <div className="teacher-details-table-card">


//                 <div className="teacher-details-table-header">

//                     <div>

//                         <h2>
//                             Teacher Information
//                         </h2>

//                         <p>
//                             Complete information
//                             about this teacher.
//                         </p>

//                     </div>

//                 </div>


//                 <div className="teacher-details-table-wrapper">

//                     <table className="teacher-details-table">

//                         <tbody>

//                             <tr>

//                                 <th>
//                                     Teacher ID
//                                 </th>

//                                 <td>
//                                     {teacher.id}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Full Name
//                                 </th>

//                                 <td>
//                                     {teacher.name}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Email
//                                 </th>

//                                 <td>
//                                     {teacher.email}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Phone
//                                 </th>

//                                 <td>
//                                     {teacher.phone}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Gender
//                                 </th>

//                                 <td>
//                                     {teacher.gender}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Department
//                                 </th>

//                                 <td>
//                                     {teacher.department}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Designation
//                                 </th>

//                                 <td>
//                                     {teacher.designation}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Qualification
//                                 </th>

//                                 <td>
//                                     {teacher.qualification}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Joining Date
//                                 </th>

//                                 <td>
//                                     {teacher.joiningDate}
//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Status
//                                 </th>

//                                 <td>

//                                     <span
//                                         className={`teacher-simple-status ${teacher.status ===
//                                             "Active"
//                                             ? "active"
//                                             : "inactive"
//                                             }`}
//                                     >

//                                         {teacher.status}

//                                     </span>

//                                 </td>

//                             </tr>


//                             <tr>

//                                 <th>
//                                     Address
//                                 </th>

//                                 <td>
//                                     {teacher.address ||
//                                         "Not provided"}
//                                 </td>

//                             </tr>

//                         </tbody>

//                     </table>

//                 </div>

//             </div>


//             {/* =================================
//                 FOOTER ACTIONS
//             ================================= */}

//             <div className="teacher-details-footer">

//                 <Link
//                     to="/teachers"
//                     className="teacher-back-btn"
//                 >

//                     <ArrowLeft size={17} />

//                     Back to Teachers

//                 </Link>


//                 <Link
//                     to={`/teachers/edit/${teacher.id}`}
//                     className="teacher-edit-btn"
//                 >

//                     <Pencil size={17} />

//                     Edit Teacher

//                 </Link>

//             </div>

//         </div>

//     );
// }


// export default TeacherDetails;


import { ArrowLeft, Pencil, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import "./Teacher.css";

const STORAGE_KEY = "school_teachers";

function getTeachers() {
    try {
        const storedTeachers = localStorage.getItem(
            STORAGE_KEY
        );

        if (!storedTeachers) {
            return [];
        }

        const parsedTeachers = JSON.parse(
            storedTeachers
        );

        return Array.isArray(parsedTeachers)
            ? parsedTeachers
            : [];
    } catch (error) {
        console.error(
            "Error reading teachers:",
            error
        );

        return [];
    }
}

function getInitials(name) {
    if (!name) {
        return "T";
    }

    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) =>
            word.charAt(0).toUpperCase()
        )
        .join("");
}

function TeacherDetails() {
    const { id } = useParams();

    /*
     * Read the CURRENT teachers directly
     * from localStorage.
     */
    const teachers = getTeachers();

    /*
     * Find teacher using the exact ID
     */
    const teacher = teachers.find(
        (item) =>
            String(item.id).trim() ===
            String(id).trim()
    );

    /*
     * Teacher not found
     */
    if (!teacher) {
        return (
            <div className="teacher-page">

                <div className="teacher-page-header">

                    <div>
                        <h1>Teacher Not Found</h1>

                        <p>
                            No teacher was found with
                            ID: <strong>{id}</strong>
                        </p>
                    </div>

                    <Link
                        to="/teachers"
                        className="teacher-back-btn"
                    >
                        <ArrowLeft size={18} />
                        Back to Teachers
                    </Link>

                </div>

                <div className="teacher-details-card">

                    <div className="teacher-not-found">

                        <User size={48} />

                        <h2>
                            Teacher does not exist
                        </h2>

                        <p>
                            The teacher record could not
                            be found in local storage.
                        </p>

                        <Link
                            to="/teachers"
                            className="teacher-back-btn"
                        >
                            <ArrowLeft size={18} />
                            Return to Teachers
                        </Link>

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="teacher-page">

            {/* ================= HEADER ================= */}

            <div className="teacher-page-header">

                <div>
                    <h1>Teacher Details</h1>

                    <p>
                        Complete information about this
                        teacher.
                    </p>
                </div>

                <div className="teacher-header-actions">

                    <Link
                        to="/teachers"
                        className="teacher-back-btn"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </Link>

                    <Link
                        to={`/teachers/edit/${teacher.id}`}
                        className="teacher-edit-btn"
                    >
                        <Pencil size={18} />
                        Edit Teacher
                    </Link>

                </div>

            </div>

            {/* ================= PROFILE ================= */}

            <div className="teacher-profile-card">

                <div className="teacher-profile-avatar">
                    {getInitials(teacher.name)}
                </div>

                <div className="teacher-profile-info">

                    <h2>
                        {teacher.name}
                    </h2>

                    <p>
                        {teacher.designation ||
                            "Teacher"}
                    </p>

                    <span>
                        {teacher.department ||
                            "No Department"}
                    </span>

                </div>

                <div className="teacher-profile-status">

                    <span
                        className={`teacher-status-badge ${teacher.status ===
                                "Active"
                                ? "active"
                                : "inactive"
                            }`}
                    >
                        {teacher.status ||
                            "Active"}
                    </span>

                </div>

            </div>

            {/* ================= PERSONAL INFORMATION ================= */}

            <div className="teacher-details-card">

                <div className="teacher-details-card-header">

                    <div>
                        <h2>
                            Personal Information
                        </h2>

                        <p>
                            Basic information about the
                            teacher.
                        </p>
                    </div>

                </div>

                <div className="teacher-details-grid">

                    <div className="teacher-detail-item">
                        <span>Teacher ID</span>
                        <strong>
                            {teacher.id}
                        </strong>
                    </div>

                    <div className="teacher-detail-item">
                        <span>Full Name</span>
                        <strong>
                            {teacher.name}
                        </strong>
                    </div>

                    <div className="teacher-detail-item">
                        <span>Gender</span>
                        <strong>
                            {teacher.gender ||
                                "Not provided"}
                        </strong>
                    </div>

                    <div className="teacher-detail-item">
                        <span>Phone</span>

                        {teacher.phone ? (
                            <a
                                href={`tel:${teacher.phone}`}
                            >
                                {teacher.phone}
                            </a>
                        ) : (
                            <strong>
                                Not provided
                            </strong>
                        )}
                    </div>

                    <div className="teacher-detail-item">
                        <span>Email</span>

                        {teacher.email ? (
                            <a
                                href={`mailto:${teacher.email}`}
                            >
                                {teacher.email}
                            </a>
                        ) : (
                            <strong>
                                Not provided
                            </strong>
                        )}
                    </div>

                    <div className="teacher-detail-item">
                        <span>Address</span>

                        <strong>
                            {teacher.address ||
                                "Not provided"}
                        </strong>
                    </div>

                </div>

            </div>

            {/* ================= PROFESSIONAL INFORMATION ================= */}

            <div className="teacher-details-card">

                <div className="teacher-details-card-header">

                    <div>
                        <h2>
                            Professional Information
                        </h2>

                        <p>
                            Employment and qualification
                            details.
                        </p>
                    </div>

                </div>

                <div className="teacher-details-grid">

                    <div className="teacher-detail-item">
                        <span>Department</span>

                        <strong>
                            {teacher.department ||
                                "Not provided"}
                        </strong>
                    </div>

                    <div className="teacher-detail-item">
                        <span>Designation</span>

                        <strong>
                            {teacher.designation ||
                                "Not provided"}
                        </strong>
                    </div>

                    <div className="teacher-detail-item">
                        <span>Qualification</span>

                        <strong>
                            {teacher.qualification ||
                                "Not provided"}
                        </strong>
                    </div>

                    <div className="teacher-detail-item">
                        <span>Joining Date</span>

                        <strong>
                            {teacher.joiningDate ||
                                "Not provided"}
                        </strong>
                    </div>

                    <div className="teacher-detail-item">
                        <span>Employment Status</span>

                        <span
                            className={`teacher-status-badge ${teacher.status ===
                                    "Active"
                                    ? "active"
                                    : "inactive"
                                }`}
                        >
                            {teacher.status ||
                                "Active"}
                        </span>
                    </div>

                </div>

            </div>

            {/* ================= ACTIONS ================= */}

            <div className="teacher-details-actions">

                <Link
                    to="/teachers"
                    className="teacher-back-btn"
                >
                    <ArrowLeft size={18} />
                    Back to Teachers
                </Link>

                <Link
                    to={`/teachers/edit/${teacher.id}`}
                    className="teacher-edit-btn"
                >
                    <Pencil size={18} />
                    Edit Teacher
                </Link>

            </div>

        </div>
    );
}

export default TeacherDetails;


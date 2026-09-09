

// import { useNavigate, useParams } from "react-router-dom";

// import {
//     ArrowLeft,
//     Pencil,
//     Trash2,
//     BookOpen,
//     User,
//     DoorOpen,
//     CalendarDays,
//     Layers3,
//     CircleCheck,
// } from "lucide-react";

// /*
//  * Temporary frontend data.
//  * Later this will come from your Laravel API.
//  */
// const classes = [
//     {
//         id: "CLS-001",
//         className: "10th",
//         section: "A",
//         teacher: "Muhammad Ali",
//         room: "Room 101",
//         academicYear: "2026-2027",
//         status: "Active",
//         students: 32,
//     },
//     {
//         id: "CLS-002",
//         className: "9th",
//         section: "B",
//         teacher: "Ahmed Khan",
//         room: "Room 102",
//         academicYear: "2026-2027",
//         status: "Active",
//         students: 28,
//     },
//     {
//         id: "CLS-003",
//         className: "8th",
//         section: "A",
//         teacher: "Usman Tariq",
//         room: "Room 103",
//         academicYear: "2026-2027",
//         status: "Inactive",
//         students: 25,
//     },
// ];

// function ClassDetails() {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     /*
//      * Find the selected class using the URL ID.
//      *
//      * Example:
//      * /classes/CLS-001
//      *
//      * id = CLS-001
//      */
//     const selectedClass = classes.find(
//         (item) => String(item.id) === String(id)
//     );

//     /*
//      * Delete class
//      *
//      * Currently this only simulates deletion.
//      * Later replace this with your Laravel DELETE API.
//      */
//     const handleDelete = () => {
//         if (!selectedClass) {
//             return;
//         }

//         const confirmed = window.confirm(
//             `Are you sure you want to delete ${selectedClass.className} - Section ${selectedClass.section}?`
//         );

//         if (!confirmed) {
//             return;
//         }

//         // Later:
//         // DELETE /api/classes/{id}

//         console.log("Deleting class:", selectedClass.id);

//         navigate("/classes");
//     };

//     /*
//      * If the class ID does not exist
//      */
//     if (!selectedClass) {
//         return (
//             <div className="class-page">
//                 <div className="class-form-card">
//                     <div className="empty-state">
//                         <BookOpen size={48} />

//                         <h2>Class Not Found</h2>

//                         <p>
//                             The class you are trying to view does not exist.
//                         </p>

//                         <button
//                             type="button"
//                             className="save-button"
//                             onClick={() => navigate("/classes")}
//                         >
//                             <ArrowLeft size={18} />
//                             Back to Classes
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="class-page">

//             {/* =====================================================
//                 PAGE HEADER
//             ====================================================== */}

//             <div className="class-page-header">

//                 {/* LEFT SIDE */}
//                 <div>

//                     {/* Back Button */}
//                     <button
//                         type="button"
//                         className="back-button"
//                         onClick={() => navigate("/classes")}
//                     >
//                         <ArrowLeft size={18} />
//                         Back to Classes
//                     </button>

//                     {/* Page Title */}
//                     <div className="page-title-wrapper">

//                         <div className="page-title-icon">
//                             <BookOpen size={24} />
//                         </div>

//                         <div>
//                             <h1>Class Details</h1>

//                             <p>
//                                 View complete information about this class.
//                             </p>
//                         </div>

//                     </div>
//                 </div>

//                 {/* RIGHT SIDE ACTION BUTTONS */}
//                 <div className="details-header-actions">

//                     {/* =================================================
//                         EDIT BUTTON

//                         IMPORTANT:
//                         This navigates to:

//                         /classes/edit/CLS-001

//                         NOT:

//                         /classes/CLS-001/edit
//                     ================================================== */}

//                     <button
//                         type="button"
//                         className="details-edit-button"
//                         onClick={() =>
//                             navigate(`/classes/edit/${selectedClass.id}`)
//                         }
//                     >
//                         <Pencil size={17} />
//                         Edit Class
//                     </button>

//                     {/* DELETE BUTTON */}
//                     <button
//                         type="button"
//                         className="details-delete-button"
//                         onClick={handleDelete}
//                     >
//                         <Trash2 size={17} />
//                         Delete
//                     </button>

//                 </div>
//             </div>


//             {/* =====================================================
//                 CLASS DETAILS CARD
//             ====================================================== */}

//             <div className="class-details-card">

//                 {/* =================================================
//                     CLASS SUMMARY
//                 ================================================== */}

//                 <div className="class-details-summary">

//                     {/* Class Icon */}
//                     <div className="class-details-icon">
//                         <BookOpen size={32} />
//                     </div>

//                     {/* Class Name */}
//                     <div className="class-details-title">

//                         <h2>
//                             {selectedClass.className}
//                         </h2>

//                         <p>
//                             Section {selectedClass.section}
//                         </p>

//                     </div>

//                     {/* Status */}
//                     <span
//                         className={
//                             selectedClass.status === "Active"
//                                 ? "status-active"
//                                 : "status-inactive"
//                         }
//                     >
//                         <CircleCheck size={15} />

//                         {selectedClass.status}
//                     </span>

//                 </div>


//                 {/* =================================================
//                     INFORMATION GRID
//                 ================================================== */}

//                 <div className="details-information">

//                     {/* CLASS NAME */}
//                     <div className="detail-item">

//                         <div className="detail-item-icon">
//                             <BookOpen size={19} />
//                         </div>

//                         <div>
//                             <span>Class Name</span>

//                             <strong>
//                                 {selectedClass.className}
//                             </strong>
//                         </div>

//                     </div>


//                     {/* SECTION */}
//                     <div className="detail-item">

//                         <div className="detail-item-icon">
//                             <Layers3 size={19} />
//                         </div>

//                         <div>
//                             <span>Section</span>

//                             <strong>
//                                 {selectedClass.section}
//                             </strong>
//                         </div>

//                     </div>


//                     {/* CLASS TEACHER */}
//                     <div className="detail-item">

//                         <div className="detail-item-icon">
//                             <User size={19} />
//                         </div>

//                         <div>
//                             <span>Class Teacher</span>

//                             <strong>
//                                 {selectedClass.teacher}
//                             </strong>
//                         </div>

//                     </div>


//                     {/* CLASSROOM */}
//                     <div className="detail-item">

//                         <div className="detail-item-icon">
//                             <DoorOpen size={19} />
//                         </div>

//                         <div>
//                             <span>Classroom</span>

//                             <strong>
//                                 {selectedClass.room}
//                             </strong>
//                         </div>

//                     </div>


//                     {/* ACADEMIC YEAR */}
//                     <div className="detail-item">

//                         <div className="detail-item-icon">
//                             <CalendarDays size={19} />
//                         </div>

//                         <div>
//                             <span>Academic Year</span>

//                             <strong>
//                                 {selectedClass.academicYear}
//                             </strong>
//                         </div>

//                     </div>


//                     {/* TOTAL STUDENTS */}
//                     <div className="detail-item">

//                         <div className="detail-item-icon">
//                             <User size={19} />
//                         </div>

//                         <div>
//                             <span>Total Students</span>

//                             <strong>
//                                 {selectedClass.students}
//                             </strong>
//                         </div>

//                     </div>

//                 </div>


//                 {/* =================================================
//                     CLASS ID
//                 ================================================== */}

//                 <div className="class-id-row">

//                     <span>
//                         Class ID
//                     </span>

//                     <strong>
//                         {selectedClass.id}
//                     </strong>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default ClassDetails;
// // import "./Class.css";
// // import { Link, useParams } from "react-router-dom";
// // import {
// //     ArrowLeft,
// //     Pencil,
// //     BookOpen,
// //     Users,
// //     UserRound,
// //     DoorOpen,
// //     GraduationCap,
// //     CheckCircle2,
// //     XCircle,
// // } from "lucide-react";

// // const STORAGE_KEY = "school_classes";

// // function getClasses() {
// //     try {
// //         const saved = localStorage.getItem(STORAGE_KEY);
// //         if (!saved) return [];
// //         const parsed = JSON.parse(saved);
// //         return Array.isArray(parsed) ? parsed : [];
// //     } catch (error) {
// //         console.error("Error loading classes:", error);
// //         return [];
// //     }
// // }

// // export default function ClassDetails() {
// //     const { id } = useParams();
// //     const classes = getClasses();

// //     const classData = classes.find(
// //         (item) =>
// //             String(item.id).trim().toLowerCase() === String(id).trim().toLowerCase()
// //     );

// //     if (!classData) {
// //         return (
// //             <div className="class-details-page">
// //                 <div className="class-not-found">
// //                     <GraduationCap size={50} />
// //                     <h2>Class Not Found</h2>
// //                     <p>The class you are looking for does not exist or has been removed.</p>
// //                     <Link to="/classes" className="class-primary-btn">
// //                         <ArrowLeft size={17} />
// //                         Back to Classes
// //                     </Link>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     const capacity = Number(classData.capacity) || 0;
// //     const students =
// //         Number(classData.students ?? classData.currentStudents ?? 0) || 0;
// //     const availableSeats = Math.max(capacity - students, 0);
// //     const occupancy =
// //         capacity > 0 ? Math.round((students / capacity) * 100) : 0;
// //     const isActive = String(classData.status).toLowerCase() === "active";
// //     const classInitial = classData.className?.charAt(0)?.toUpperCase() || "C";

// //     return (
// //         <div className="class-details-page">
// //             {/* Header */}
// //             <div className="class-details-header">
// //                 <div>
// //                     <Link to="/classes" className="class-back-link">
// //                         <ArrowLeft size={17} />
// //                         Back to Classes
// //                     </Link>
// //                     <h1>Class Details</h1>
// //                     <p>Complete information about this class.</p>
// //                 </div>

// //                 <Link
// //                     to={`/classes/edit/${classData.id}`}
// //                     className="class-primary-btn"
// //                 >
// //                     <Pencil size={17} />
// //                     Edit Class
// //                 </Link>
// //             </div>

// //             {/* Class Profile Card */}
// //             <div className="class-profile-card">
// //                 <div className="class-profile-main">
// //                     <div className="class-avatar">{classInitial}</div>

// //                     <div className="class-profile-content">
// //                         <div className="class-name-row">
// //                             <div>
// //                                 <h2>
// //                                     {classData.className} - Section {classData.section}
// //                                 </h2>
// //                                 <span className="class-teacher-name">
// //                                     {classData.classTeacher || "No teacher assigned"}
// //                                 </span>
// //                             </div>

// //                             <span
// //                                 className={`class-status ${isActive ? "active" : "inactive"
// //                                     }`}
// //                             >
// //                                 {isActive ? (
// //                                     <CheckCircle2 size={15} />
// //                                 ) : (
// //                                     <XCircle size={15} />
// //                                 )}
// //                                 {classData.status}
// //                             </span>
// //                         </div>

// //                         <div className="class-profile-subject">
// //                             <BookOpen size={17} />
// //                             <span>{classData.subject || "No subject assigned"}</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Class Information Section */}
// //             <section className="class-details-section">
// //                 <div className="class-section-heading">
// //                     <h3>Class Information</h3>
// //                     <p>Basic information about the class.</p>
// //                 </div>

// //                 <div className="class-information-grid">
// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <GraduationCap size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Class ID</span>
// //                             <strong>{classData.id}</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <BookOpen size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Class Name</span>
// //                             <strong>{classData.className}</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <Users size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Section</span>
// //                             <strong>{classData.section || "N/A"}</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <BookOpen size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Subject</span>
// //                             <strong>{classData.subject || "N/A"}</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <UserRound size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Class Teacher</span>
// //                             <strong>{classData.classTeacher || "Not Assigned"}</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <DoorOpen size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Room Number</span>
// //                             <strong>
// //                                 {classData.roomNumber
// //                                     ? `Room ${classData.roomNumber}`
// //                                     : "N/A"}
// //                             </strong>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Enrollment Section */}
// //             <section className="class-details-section">
// //                 <div className="class-section-heading">
// //                     <h3>Enrollment Information</h3>
// //                     <p>Student capacity and enrollment details.</p>
// //                 </div>

// //                 <div className="class-information-grid">
// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <Users size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Current Students</span>
// //                             <strong>{students}</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <GraduationCap size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Total Capacity</span>
// //                             <strong>{capacity}</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <Users size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Available Seats</span>
// //                             <strong>{availableSeats}</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             <GraduationCap size={19} />
// //                         </div>
// //                         <div>
// //                             <span>Occupancy</span>
// //                             <strong>{occupancy}%</strong>
// //                         </div>
// //                     </div>

// //                     <div className="class-information-item">
// //                         <div className="class-information-icon">
// //                             {isActive ? <CheckCircle2 size={19} /> : <XCircle size={19} />}
// //                         </div>
// //                         <div>
// //                             <span>Class Status</span>
// //                             <strong>{classData.status}</strong>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="class-occupancy">
// //                     <div className="class-occupancy-header">
// //                         <span>Student Occupancy</span>
// //                         <strong>
// //                             {students} / {capacity}
// //                         </strong>
// //                     </div>
// //                     <div className="class-progress">
// //                         <div
// //                             className="class-progress-fill"
// //                             style={{ width: `${Math.min(occupancy, 100)}%` }}
// //                         />
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Footer Actions */}
// //             <div className="class-details-actions">
// //                 <Link to="/classes" className="class-secondary-btn">
// //                     <ArrowLeft size={17} />
// //                     Back to Classes
// //                 </Link>
// //                 <Link
// //                     to={`/classes/edit/${classData.id}`}
// //                     className="class-primary-btn"
// //                 >
// //                     <Pencil size={17} />
// //                     Edit Class
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // }
import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Pencil,
    Trash2,
    BookOpen,
    User,
    DoorOpen,
    CalendarDays,
    Layers3,
    CircleCheck,
} from "lucide-react";

const STORAGE_KEY = "school_classes";

/* Fallback default classes if LocalStorage is empty */
const DEFAULT_CLASSES = [
    {
        id: "CLS-001",
        className: "10th",
        section: "A",
        teacher: "Muhammad Ali",
        room: "Room 101",
        academicYear: "2026-2027",
        status: "Active",
        students: 32,
    },
    {
        id: "CLS-002",
        className: "9th",
        section: "B",
        teacher: "Ahmed Khan",
        room: "Room 102",
        academicYear: "2026-2027",
        status: "Active",
        students: 28,
    },
    {
        id: "CLS-003",
        className: "8th",
        section: "A",
        teacher: "Usman Tariq",
        room: "Room 103",
        academicYear: "2026-2027",
        status: "Inactive",
        students: 25,
    },
];

/* Helper to load from LocalStorage with fallback */
function getClasses() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return DEFAULT_CLASSES;
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_CLASSES;
    } catch (error) {
        console.error("Error loading classes:", error);
        return DEFAULT_CLASSES;
    }
}

function ClassDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const allClasses = getClasses();

    /* Case-insensitive and whitespace-safe search */
    const selectedClass = allClasses.find(
        (item) =>
            item?.id &&
            String(item.id).trim().toLowerCase() === String(id).trim().toLowerCase()
    );

    /* Delete handler updating LocalStorage */
    const handleDelete = () => {
        if (!selectedClass) return;

        const confirmed = window.confirm(
            `Are you sure you want to delete ${selectedClass.className || "this class"} - Section ${selectedClass.section || ""}?`
        );

        if (!confirmed) return;

        try {
            const updatedClasses = allClasses.filter(
                (item) =>
                    String(item.id).trim().toLowerCase() !== String(id).trim().toLowerCase()
            );
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedClasses));
        } catch (error) {
            console.error("Error deleting class:", error);
        }

        navigate("/classes");
    };

    /* Empty state if ID does not exist */
    if (!selectedClass) {
        return (
            <div className="class-page">
                <div className="class-form-card">
                    <div className="empty-state">
                        <BookOpen size={48} />
                        <h2>Class Not Found</h2>
                        <p>
                            The class with ID "<strong>{id}</strong>" does not exist or has been removed.
                        </p>
                        <button
                            type="button"
                            className="save-button"
                            onClick={() => navigate("/classes")}
                        >
                            <ArrowLeft size={18} />
                            Back to Classes
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    /* Property normalizations with fallbacks for alternative key names */
    const className = selectedClass.className || selectedClass.name || "N/A";
    const section = selectedClass.section || "N/A";
    const teacher =
        selectedClass.teacher || selectedClass.classTeacher || "Not Assigned";
    const room =
        selectedClass.room ||
        (selectedClass.roomNumber ? `Room ${selectedClass.roomNumber}` : "N/A");
    const academicYear = selectedClass.academicYear || "2026-2027";
    const status = selectedClass.status || "Active";
    const studentCount =
        selectedClass.students ?? selectedClass.currentStudents ?? 0;

    return (
        <div className="class-page">
            {/* PAGE HEADER */}
            <div className="class-page-header">
                <div>
                    <button
                        type="button"
                        className="back-button"
                        onClick={() => navigate("/classes")}
                    >
                        <ArrowLeft size={18} />
                        Back to Classes
                    </button>

                    <div className="page-title-wrapper">
                        <div className="page-title-icon">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <h1>Class Details</h1>
                            <p>View complete information about this class.</p>
                        </div>
                    </div>
                </div>

                {/* HEADER ACTIONS */}
                <div className="details-header-actions">
                    <button
                        type="button"
                        className="details-edit-button"
                        onClick={() => navigate(`/classes/edit/${selectedClass.id}`)}
                    >
                        <Pencil size={17} />
                        Edit Class
                    </button>

                    <button
                        type="button"
                        className="details-delete-button"
                        onClick={handleDelete}
                    >
                        <Trash2 size={17} />
                        Delete
                    </button>
                </div>
            </div>

            {/* CLASS DETAILS CARD */}
            <div className="class-details-card">
                {/* SUMMARY */}
                <div className="class-details-summary">
                    <div className="class-details-icon">
                        <BookOpen size={32} />
                    </div>

                    <div className="class-details-title">
                        <h2>{className}</h2>
                        <p>Section {section}</p>
                    </div>

                    <span
                        className={
                            String(status).toLowerCase() === "active"
                                ? "status-active"
                                : "status-inactive"
                        }
                    >
                        <CircleCheck size={15} />
                        {status}
                    </span>
                </div>

                {/* INFORMATION GRID */}
                <div className="details-information">
                    <div className="detail-item">
                        <div className="detail-item-icon">
                            <BookOpen size={19} />
                        </div>
                        <div>
                            <span>Class Name</span>
                            <strong>{className}</strong>
                        </div>
                    </div>

                    <div className="detail-item">
                        <div className="detail-item-icon">
                            <Layers3 size={19} />
                        </div>
                        <div>
                            <span>Section</span>
                            <strong>{section}</strong>
                        </div>
                    </div>

                    <div className="detail-item">
                        <div className="detail-item-icon">
                            <User size={19} />
                        </div>
                        <div>
                            <span>Class Teacher</span>
                            <strong>{teacher}</strong>
                        </div>
                    </div>

                    <div className="detail-item">
                        <div className="detail-item-icon">
                            <DoorOpen size={19} />
                        </div>
                        <div>
                            <span>Classroom</span>
                            <strong>{room}</strong>
                        </div>
                    </div>

                    <div className="detail-item">
                        <div className="detail-item-icon">
                            <CalendarDays size={19} />
                        </div>
                        <div>
                            <span>Academic Year</span>
                            <strong>{academicYear}</strong>
                        </div>
                    </div>

                    <div className="detail-item">
                        <div className="detail-item-icon">
                            <User size={19} />
                        </div>
                        <div>
                            <span>Total Students</span>
                            <strong>{studentCount}</strong>
                        </div>
                    </div>
                </div>

                {/* CLASS ID */}
                <div className="class-id-row">
                    <span>Class ID</span>
                    <strong>{selectedClass.id}</strong>
                </div>
            </div>
        </div>
    );
}

export default ClassDetails;
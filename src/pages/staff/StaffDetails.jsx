
// // import { useNavigate, useParams } from "react-router-dom";
// // import { useState } from "react";
// // import {
// //     ArrowLeft,
// //     Pencil,
// //     Trash2,
// //     User,
// //     Mail,
// //     Phone,
// //     MapPin,
// //     BriefcaseBusiness,
// //     CalendarDays,
// //     Building2,
// //     BadgeCheck,
// //     X,
// // } from "lucide-react";

// // import "./Staff.css";

// // const staffData = [
// //     {
// //         id: "STF-001",
// //         name: "Ahmed Khan",
// //         email: "ahmed@example.com",
// //         phone: "03001234567",
// //         gender: "Male",
// //         dateOfBirth: "1990-05-12",
// //         address: "Lahore, Pakistan",
// //         designation: "Mathematics Teacher",
// //         department: "Teaching",
// //         joiningDate: "2024-01-15",
// //         salary: "75000",
// //         status: "Active",
// //     },
// //     {
// //         id: "STF-002",
// //         name: "Sara Ali",
// //         email: "sara@example.com",
// //         phone: "03011234567",
// //         gender: "Female",
// //         dateOfBirth: "1992-08-20",
// //         address: "Lahore, Pakistan",
// //         designation: "English Teacher",
// //         department: "Teaching",
// //         joiningDate: "2023-08-20",
// //         salary: "70000",
// //         status: "Active",
// //     },
// //     {
// //         id: "STF-003",
// //         name: "Usman Malik",
// //         email: "usman@example.com",
// //         phone: "03121234567",
// //         gender: "Male",
// //         dateOfBirth: "1988-02-10",
// //         address: "Lahore, Pakistan",
// //         designation: "Accountant",
// //         department: "Administration",
// //         joiningDate: "2022-06-10",
// //         salary: "65000",
// //         status: "Active",
// //     },
// //     {
// //         id: "STF-004",
// //         name: "Ayesha Noor",
// //         email: "ayesha@example.com",
// //         phone: "03211234567",
// //         gender: "Female",
// //         dateOfBirth: "1987-11-03",
// //         address: "Lahore, Pakistan",
// //         designation: "HR Manager",
// //         department: "Human Resources",
// //         joiningDate: "2021-03-05",
// //         salary: "90000",
// //         status: "Inactive",
// //     },
// // ];

// // function StaffDetails() {
// //     const navigate = useNavigate();
// //     const { id } = useParams();

// //     const [showDeleteModal, setShowDeleteModal] = useState(false);

// //     const staff = staffData.find(
// //         (member) => member.id === id
// //     );

// //     const getInitials = (name) => {
// //         return name
// //             .split(" ")
// //             .map((word) => word[0])
// //             .join("")
// //             .slice(0, 2)
// //             .toUpperCase();
// //     };

// //     const formatDate = (date) => {
// //         if (!date) {
// //             return "-";
// //         }

// //         return new Date(date).toLocaleDateString("en-GB", {
// //             day: "2-digit",
// //             month: "short",
// //             year: "numeric",
// //         });
// //     };

// //     const formatSalary = (salary) => {
// //         if (!salary) {
// //             return "-";
// //         }

// //         return `Rs. ${Number(salary).toLocaleString("en-PK")}`;
// //     };

// //     const handleDelete = () => {
// //         setShowDeleteModal(false);

// //         /*
// //          * Temporary frontend behavior.
// //          * Laravel DELETE API will be connected later.
// //          */
// //         navigate("/staff");
// //     };

// //     if (!staff) {
// //         return (
// //             <div className="staff-details-page">

// //                 <div className="staff-not-found">

// //                     <div className="staff-not-found-icon">
// //                         <User size={30} />
// //                     </div>

// //                     <h1>Staff Member Not Found</h1>

// //                     <p>
// //                         The staff member you are looking for
// //                         does not exist or has been removed.
// //                     </p>

// //                     <button
// //                         type="button"
// //                         className="staff-back-button"
// //                         onClick={() => navigate("/staff")}
// //                     >
// //                         <ArrowLeft size={17} />
// //                         Back to Staff
// //                     </button>

// //                 </div>

// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="staff-details-page">

// //             {/* =================================
// //                 PAGE HEADER
// //             ================================= */}

// //             <div className="staff-details-header">

// //                 <button
// //                     type="button"
// //                     className="staff-details-back-button"
// //                     onClick={() => navigate("/staff")}
// //                 >
// //                     <ArrowLeft size={17} />
// //                     Back to Staff
// //                 </button>

// //                 <div className="staff-details-header-actions">

// //                     <button
// //                         type="button"
// //                         className="staff-details-edit-button"
// //                         onClick={() =>
// //                             navigate(`/staff/edit/${staff.id}`)
// //                         }
// //                     >
// //                         <Pencil size={17} />
// //                         Edit Staff
// //                     </button>

// //                     <button
// //                         type="button"
// //                         className="staff-details-delete-button"
// //                         onClick={() => setShowDeleteModal(true)}
// //                     >
// //                         <Trash2 size={17} />
// //                         Delete
// //                     </button>

// //                 </div>

// //             </div>

// //             {/* =================================
// //                 PROFILE HEADER
// //             ================================= */}

// //             <div className="staff-profile-card">

// //                 <div className="staff-profile-avatar">
// //                     {getInitials(staff.name)}
// //                 </div>

// //                 <div className="staff-profile-info">

// //                     <div className="staff-profile-name-row">

// //                         <h1>{staff.name}</h1>

// //                         <span
// //                             className={`staff-status ${staff.status === "Active"
// //                                 ? "staff-status-active"
// //                                 : "staff-status-inactive"
// //                                 }`}
// //                         >
// //                             {staff.status}
// //                         </span>

// //                     </div>

// //                     <p className="staff-profile-designation">
// //                         {staff.designation}
// //                     </p>

// //                     <div className="staff-profile-meta">

// //                         <span>
// //                             <BadgeCheck size={15} />
// //                             {staff.id}
// //                         </span>

// //                         <span>
// //                             <Building2 size={15} />
// //                             {staff.department}
// //                         </span>

// //                     </div>

// //                 </div>

// //             </div>

// //             {/* =================================
// //                 PERSONAL INFORMATION
// //             ================================= */}

// //             <div className="staff-details-card">

// //                 <div className="staff-details-card-header">

// //                     <div className="staff-details-section-icon">
// //                         <User size={19} />
// //                     </div>

// //                     <div>
// //                         <h2>Personal Information</h2>
// //                         <p>
// //                             Personal details of the staff member.
// //                         </p>
// //                     </div>

// //                 </div>

// //                 <div className="staff-details-grid">

// //                     <div className="staff-detail-item">
// //                         <span className="staff-detail-label">
// //                             Full Name
// //                         </span>

// //                         <strong>
// //                             {staff.name}
// //                         </strong>
// //                     </div>

// //                     <div className="staff-detail-item">
// //                         <span className="staff-detail-label">
// //                             Gender
// //                         </span>

// //                         <strong>
// //                             {staff.gender || "-"}
// //                         </strong>
// //                     </div>

// //                     <div className="staff-detail-item">
// //                         <span className="staff-detail-label">
// //                             Date of Birth
// //                         </span>

// //                         <div className="staff-detail-with-icon">
// //                             <CalendarDays size={16} />
// //                             <strong>
// //                                 {formatDate(staff.dateOfBirth)}
// //                             </strong>
// //                         </div>
// //                     </div>

// //                     <div className="staff-detail-item">
// //                         <span className="staff-detail-label">
// //                             Staff ID
// //                         </span>

// //                         <strong>
// //                             {staff.id}
// //                         </strong>
// //                     </div>

// //                     <div className="staff-detail-item staff-detail-full">
// //                         <span className="staff-detail-label">
// //                             Address
// //                         </span>

// //                         <div className="staff-detail-with-icon">
// //                             <MapPin size={16} />
// //                             <strong>
// //                                 {staff.address || "-"}
// //                             </strong>
// //                         </div>
// //                     </div>

// //                 </div>

// //             </div>

// //             {/* =================================
// //                 CONTACT INFORMATION
// //             ================================= */}

// //             <div className="staff-details-card">

// //                 <div className="staff-details-card-header">

// //                     <div className="staff-details-section-icon">
// //                         <Phone size={19} />
// //                     </div>

// //                     <div>
// //                         <h2>Contact Information</h2>
// //                         <p>
// //                             Contact details of the staff member.
// //                         </p>
// //                     </div>

// //                 </div>

// //                 <div className="staff-details-grid">

// //                     <div className="staff-detail-item">

// //                         <span className="staff-detail-label">
// //                             Email Address
// //                         </span>

// //                         <div className="staff-detail-with-icon">
// //                             <Mail size={16} />
// //                             <strong>
// //                                 {staff.email}
// //                             </strong>
// //                         </div>

// //                     </div>

// //                     <div className="staff-detail-item">

// //                         <span className="staff-detail-label">
// //                             Phone Number
// //                         </span>

// //                         <div className="staff-detail-with-icon">
// //                             <Phone size={16} />
// //                             <strong>
// //                                 {staff.phone}
// //                             </strong>
// //                         </div>

// //                     </div>

// //                 </div>

// //             </div>

// //             {/* =================================
// //                 EMPLOYMENT INFORMATION
// //             ================================= */}

// //             <div className="staff-details-card">

// //                 <div className="staff-details-card-header">

// //                     <div className="staff-details-section-icon">
// //                         <BriefcaseBusiness size={19} />
// //                     </div>

// //                     <div>
// //                         <h2>Employment Information</h2>
// //                         <p>
// //                             Employment details of the staff member.
// //                         </p>
// //                     </div>

// //                 </div>

// //                 <div className="staff-details-grid">

// //                     <div className="staff-detail-item">

// //                         <span className="staff-detail-label">
// //                             Designation
// //                         </span>

// //                         <strong>
// //                             {staff.designation}
// //                         </strong>

// //                     </div>

// //                     <div className="staff-detail-item">

// //                         <span className="staff-detail-label">
// //                             Department
// //                         </span>

// //                         <div className="staff-detail-with-icon">
// //                             <Building2 size={16} />
// //                             <strong>
// //                                 {staff.department}
// //                             </strong>
// //                         </div>

// //                     </div>

// //                     <div className="staff-detail-item">

// //                         <span className="staff-detail-label">
// //                             Joining Date
// //                         </span>

// //                         <div className="staff-detail-with-icon">
// //                             <CalendarDays size={16} />
// //                             <strong>
// //                                 {formatDate(staff.joiningDate)}
// //                             </strong>
// //                         </div>

// //                     </div>

// //                     <div className="staff-detail-item">

// //                         <span className="staff-detail-label">
// //                             Salary
// //                         </span>

// //                         <strong>
// //                             {formatSalary(staff.salary)}
// //                         </strong>

// //                     </div>

// //                     <div className="staff-detail-item">

// //                         <span className="staff-detail-label">
// //                             Employment Status
// //                         </span>

// //                         <span
// //                             className={`staff-status ${staff.status === "Active"
// //                                 ? "staff-status-active"
// //                                 : "staff-status-inactive"
// //                                 }`}
// //                         >
// //                             {staff.status}
// //                         </span>

// //                     </div>

// //                 </div>

// //             </div>

// //             {/* =================================
// //                 BOTTOM ACTIONS
// //             ================================= */}

// //             <div className="staff-details-bottom-actions">

// //                 <button
// //                     type="button"
// //                     className="staff-details-edit-button"
// //                     onClick={() =>
// //                         navigate(`/staff/edit/${staff.id}`)
// //                     }
// //                 >
// //                     <Pencil size={17} />
// //                     Edit Staff
// //                 </button>

// //                 <button
// //                     type="button"
// //                     className="staff-details-delete-button"
// //                     onClick={() => setShowDeleteModal(true)}
// //                 >
// //                     <Trash2 size={17} />
// //                     Delete Staff
// //                 </button>

// //             </div>

// //             {/* =================================
// //                 DELETE MODAL
// //             ================================= */}

// //             {showDeleteModal && (
// //                 <div
// //                     className="staff-modal-overlay"
// //                     onClick={() => setShowDeleteModal(false)}
// //                 >
// //                     <div
// //                         className="staff-delete-modal"
// //                         onClick={(event) =>
// //                             event.stopPropagation()
// //                         }
// //                     >

// //                         <div className="staff-delete-modal-icon">
// //                             <Trash2 size={24} />
// //                         </div>

// //                         <button
// //                             type="button"
// //                             className="staff-delete-modal-close"
// //                             onClick={() =>
// //                                 setShowDeleteModal(false)
// //                             }
// //                             aria-label="Close"
// //                         >
// //                             <X size={18} />
// //                         </button>

// //                         <h2>
// //                             Delete Staff Member?
// //                         </h2>

// //                         <p>
// //                             Are you sure you want to delete{" "}
// //                             <strong>{staff.name}</strong>?
// //                             This action cannot be undone.
// //                         </p>

// //                         <div className="staff-modal-actions">

// //                             <button
// //                                 type="button"
// //                                 className="staff-modal-cancel-button"
// //                                 onClick={() =>
// //                                     setShowDeleteModal(false)
// //                                 }
// //                             >
// //                                 Cancel
// //                             </button>

// //                             <button
// //                                 type="button"
// //                                 className="staff-modal-delete-button"
// //                                 onClick={handleDelete}
// //                             >
// //                                 Delete
// //                             </button>

// //                         </div>

// //                     </div>
// //                 </div>
// //             )}

// //         </div>
// //     );
// // }

// // export default StaffDetails;

// import { getStaffById } from "../../data/staffData";
// import { Link, useParams } from "react-router-dom";
// import {
//     ArrowLeft,
//     Pencil,
//     User,
//     BriefcaseBusiness,
//     Mail,
//     Phone,
//     MapPin,
//     CalendarDays,
//     Banknote,
//     Building2,
//     CheckCircle2,
//     XCircle,
// } from "lucide-react";

// import "./Staff.css";

// /* =========================================================
//    DEMO STAFF DATA
//    ========================================================= */

// const staffMembers = [
//     {
//         id: "STF-001",
//         name: "Ahmed Khan",
//         email: "ahmed@example.com",
//         phone: "03001234567",
//         gender: "Male",
//         dateOfBirth: "1990-05-15",
//         address: "Lahore, Pakistan",
//         designation: "Mathematics Teacher",
//         department: "Teaching",
//         joiningDate: "2023-01-10",
//         salary: "65000",
//         status: "Active",
//     },
//     {
//         id: "STF-002",
//         name: "Sara Ali",
//         email: "sara@example.com",
//         phone: "03111234567",
//         gender: "Female",
//         dateOfBirth: "1992-08-20",
//         address: "Lahore, Pakistan",
//         designation: "English Teacher",
//         department: "Teaching",
//         joiningDate: "2023-02-15",
//         salary: "60000",
//         status: "Active",
//     },
//     {
//         id: "STF-003",
//         name: "Usman Malik",
//         email: "usman@example.com",
//         phone: "03221234567",
//         gender: "Male",
//         dateOfBirth: "1988-03-12",
//         address: "Lahore, Pakistan",
//         designation: "Accountant",
//         department: "Administration",
//         joiningDate: "2022-08-01",
//         salary: "70000",
//         status: "Active",
//     },
//     {
//         id: "STF-004",
//         name: "Ayesha Noor",
//         email: "ayesha@example.com",
//         phone: "03331234567",
//         gender: "Female",
//         dateOfBirth: "1987-11-25",
//         address: "Lahore, Pakistan",
//         designation: "HR Manager",
//         department: "Human Resources",
//         joiningDate: "2021-06-10",
//         salary: "85000",
//         status: "Inactive",
//     },
// ];

// /* =========================================================
//    COMPONENT
//    ========================================================= */

// function StaffDetails() {
//     const { id } = useParams();

//     /* =====================================================
//        FIND STAFF
//        ===================================================== */

//     const staff = staffMembers.find(
//         (member) => member.id === id
//     );

//     /* =====================================================
//        HELPERS
//        ===================================================== */

//     const getInitials = (name) => {
//         if (!name) {
//             return "ST";
//         }

//         return name
//             .split(" ")
//             .filter(Boolean)
//             .slice(0, 2)
//             .map((word) => word.charAt(0))
//             .join("")
//             .toUpperCase();
//     };

//     const formatDate = (date) => {
//         if (!date) {
//             return "—";
//         }

//         const formattedDate = new Date(date);

//         if (Number.isNaN(formattedDate.getTime())) {
//             return date;
//         }

//         return formattedDate.toLocaleDateString("en-GB", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//         });
//     };

//     const formatSalary = (salary) => {
//         if (!salary) {
//             return "—";
//         }

//         return `PKR ${Number(salary).toLocaleString()}`;
//     };

//     /* =====================================================
//        STAFF NOT FOUND
//        ===================================================== */

//     if (!staff) {
//         return (
//             <div className="staff-details-page">

//                 <div className="staff-not-found">

//                     <div className="staff-not-found-icon">
//                         <User size={28} />
//                     </div>

//                     <h2>Staff Member Not Found</h2>

//                     <p>
//                         The staff member with ID{" "}
//                         <strong>{id}</strong> could not be
//                         found.
//                     </p>

//                     <Link
//                         to="/staff"
//                         className="staff-back-link"
//                     >
//                         <ArrowLeft size={18} />
//                         Back to Staff
//                     </Link>

//                 </div>

//             </div>
//         );
//     }

//     /* =====================================================
//        PAGE
//        ===================================================== */

//     return (
//         <div className="staff-details-page">

//             {/* =================================================
//                HEADER
//                ================================================= */}

//             <div className="staff-details-header">

//                 <div>

//                     <Link
//                         to="/staff"
//                         className="staff-back-link"
//                     >
//                         <ArrowLeft size={18} />
//                         Back to Staff
//                     </Link>

//                     <h1>Staff Details</h1>

//                     <p>
//                         View complete information about this
//                         staff member.
//                     </p>

//                 </div>

//                 <Link
//                     to={`/staff/edit/${staff.id}`}
//                     className="staff-details-edit-button"
//                 >
//                     <Pencil size={18} />
//                     Edit Staff
//                 </Link>

//             </div>

//             {/* =================================================
//                PROFILE CARD
//                ================================================= */}

//             <div className="staff-profile-card">

//                 <div className="staff-profile-main">

//                     <div className="staff-profile-avatar">
//                         {getInitials(staff.name)}
//                     </div>

//                     <div className="staff-profile-info">

//                         <h2>{staff.name}</h2>

//                         <p>{staff.designation}</p>

//                         <div className="staff-profile-meta">

//                             <span>
//                                 <Building2 size={16} />
//                                 {staff.department}
//                             </span>

//                             <span>
//                                 <User size={16} />
//                                 {staff.id}
//                             </span>

//                         </div>

//                     </div>

//                 </div>

//                 <div className="staff-profile-status">

//                     {staff.status === "Active" ? (
//                         <span className="staff-status staff-status-active">
//                             <CheckCircle2 size={15} />
//                             Active
//                         </span>
//                     ) : (
//                         <span className="staff-status staff-status-inactive">
//                             <XCircle size={15} />
//                             Inactive
//                         </span>
//                     )}

//                 </div>

//             </div>

//             {/* =================================================
//                PERSONAL INFORMATION
//                ================================================= */}

//             <div className="staff-details-card">

//                 <div className="staff-details-card-header">

//                     <div className="staff-details-section-icon">
//                         <User size={20} />
//                     </div>

//                     <div>
//                         <h2>Personal Information</h2>

//                         <p>
//                             Basic personal information of the
//                             staff member.
//                         </p>
//                     </div>

//                 </div>

//                 <div className="staff-details-grid">

//                     {/* Full Name */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Full Name
//                         </span>

//                         <strong>
//                             {staff.name}
//                         </strong>

//                     </div>

//                     {/* Gender */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Gender
//                         </span>

//                         <strong>
//                             {staff.gender || "—"}
//                         </strong>

//                     </div>

//                     {/* Date of Birth */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Date of Birth
//                         </span>

//                         <strong>
//                             <CalendarDays size={16} />
//                             {formatDate(
//                                 staff.dateOfBirth
//                             )}
//                         </strong>

//                     </div>

//                     {/* Email */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Email Address
//                         </span>

//                         <strong>
//                             <Mail size={16} />
//                             {staff.email}
//                         </strong>

//                     </div>

//                     {/* Phone */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Phone Number
//                         </span>

//                         <strong>
//                             <Phone size={16} />
//                             {staff.phone || "—"}
//                         </strong>

//                     </div>

//                     {/* Address */}
//                     <div className="staff-detail-item staff-detail-full">

//                         <span className="staff-detail-label">
//                             Address
//                         </span>

//                         <strong>
//                             <MapPin size={16} />
//                             {staff.address || "—"}
//                         </strong>

//                     </div>

//                 </div>

//             </div>

//             {/* =================================================
//                EMPLOYMENT INFORMATION
//                ================================================= */}

//             <div className="staff-details-card">

//                 <div className="staff-details-card-header">

//                     <div className="staff-details-section-icon">
//                         <BriefcaseBusiness size={20} />
//                     </div>

//                     <div>
//                         <h2>Employment Information</h2>

//                         <p>
//                             Job and employment details of the
//                             staff member.
//                         </p>
//                     </div>

//                 </div>

//                 <div className="staff-details-grid">

//                     {/* Staff ID */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Staff ID
//                         </span>

//                         <strong>
//                             {staff.id}
//                         </strong>

//                     </div>

//                     {/* Designation */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Designation
//                         </span>

//                         <strong>
//                             {staff.designation}
//                         </strong>

//                     </div>

//                     {/* Department */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Department
//                         </span>

//                         <strong>
//                             <Building2 size={16} />
//                             {staff.department}
//                         </strong>

//                     </div>

//                     {/* Joining Date */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Joining Date
//                         </span>

//                         <strong>
//                             <CalendarDays size={16} />
//                             {formatDate(
//                                 staff.joiningDate
//                             )}
//                         </strong>

//                     </div>

//                     {/* Salary */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Salary
//                         </span>

//                         <strong>
//                             <Banknote size={16} />
//                             {formatSalary(staff.salary)}
//                         </strong>

//                     </div>

//                     {/* Status */}
//                     <div className="staff-detail-item">

//                         <span className="staff-detail-label">
//                             Employment Status
//                         </span>

//                         <strong>
//                             {staff.status === "Active" ? (
//                                 <span className="staff-detail-status-active">
//                                     <CheckCircle2 size={16} />
//                                     Active
//                                 </span>
//                             ) : (
//                                 <span className="staff-detail-status-inactive">
//                                     <XCircle size={16} />
//                                     Inactive
//                                 </span>
//                             )}
//                         </strong>

//                     </div>

//                 </div>

//             </div>

//             {/* =================================================
//                BOTTOM ACTIONS
//                ================================================= */}

//             <div className="staff-details-actions">

//                 <Link
//                     to="/staff"
//                     className="staff-form-cancel-button"
//                 >
//                     <ArrowLeft size={18} />
//                     Back to Staff
//                 </Link>

//                 <Link
//                     to={`/staff/edit/${staff.id}`}
//                     className="staff-form-submit-button"
//                 >
//                     <Pencil size={18} />
//                     Edit Staff
//                 </Link>

//             </div>

//         </div>
//     );
// }

// export default StaffDetails;


import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Pencil,
    User,
    BriefcaseBusiness,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    Banknote,
    Building2,
    CheckCircle2,
    XCircle,
} from "lucide-react";

import "./Staff.css";

import { getStaffById } from "../../data/staffData";


/* =========================================================
   STAFF DETAILS COMPONENT
   ========================================================= */

function StaffDetails() {
    const { id } = useParams();

    /* =====================================================
       GET STAFF FROM SHARED STORAGE
       ===================================================== */

    const staff = getStaffById(id);


    /* =====================================================
       HELPERS
       ===================================================== */

    const getInitials = (name) => {
        if (!name) {
            return "ST";
        }

        return name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase();
    };


    const formatDate = (date) => {
        if (!date) {
            return "—";
        }

        const formattedDate = new Date(date);

        if (Number.isNaN(formattedDate.getTime())) {
            return date;
        }

        return formattedDate.toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };


    const formatSalary = (salary) => {
        if (
            salary === undefined ||
            salary === null ||
            salary === ""
        ) {
            return "—";
        }

        const numericSalary = Number(salary);

        if (Number.isNaN(numericSalary)) {
            return salary;
        }

        return `PKR ${numericSalary.toLocaleString()}`;
    };


    /* =====================================================
       STAFF NOT FOUND
       ===================================================== */

    if (!staff) {
        return (
            <div className="staff-details-page">

                <div className="staff-not-found">

                    <div className="staff-not-found-icon">
                        <User size={28} />
                    </div>

                    <h2>
                        Staff Member Not Found
                    </h2>

                    <p>
                        The staff member with ID{" "}
                        <strong>{id}</strong> could not
                        be found.
                    </p>

                    <Link
                        to="/staff"
                        className="staff-back-link"
                    >
                        <ArrowLeft size={18} />
                        Back to Staff
                    </Link>

                </div>

            </div>
        );
    }


    /* =====================================================
       PAGE
       ===================================================== */

    return (
        <div className="staff-details-page">

            {/* =================================================
               PAGE HEADER
               ================================================= */}

            <div className="staff-details-header">

                <div>

                    <Link
                        to="/staff"
                        className="staff-back-link"
                    >
                        <ArrowLeft size={18} />
                        Back to Staff
                    </Link>

                    <h1>
                        Staff Details
                    </h1>

                    <p>
                        View complete information about
                        this staff member.
                    </p>

                </div>


                {/* EDIT BUTTON */}

                <Link
                    to={`/staff/edit/${staff.id}`}
                    className="staff-details-edit-button"
                >
                    <Pencil size={18} />
                    Edit Staff
                </Link>

            </div>


            {/* =================================================
               PROFILE CARD
               ================================================= */}

            <div className="staff-profile-card">

                <div className="staff-profile-main">

                    {/* AVATAR */}

                    <div className="staff-profile-avatar">
                        {getInitials(staff.name)}
                    </div>


                    {/* PROFILE INFORMATION */}

                    <div className="staff-profile-info">

                        <h2>
                            {staff.name}
                        </h2>

                        <p>
                            {staff.designation || "—"}
                        </p>


                        <div className="staff-profile-meta">

                            <span>
                                <Building2 size={16} />

                                {staff.department ||
                                    "—"}
                            </span>


                            <span>
                                <User size={16} />

                                {staff.id}
                            </span>

                        </div>

                    </div>

                </div>


                {/* STATUS */}

                <div className="staff-profile-status">

                    {staff.status === "Active" ? (
                        <span className="staff-status staff-status-active">

                            <CheckCircle2 size={15} />

                            Active

                        </span>
                    ) : (
                        <span className="staff-status staff-status-inactive">

                            <XCircle size={15} />

                            Inactive

                        </span>
                    )}

                </div>

            </div>


            {/* =================================================
               PERSONAL INFORMATION
               ================================================= */}

            <div className="staff-details-card">

                <div className="staff-details-card-header">

                    <div className="staff-details-section-icon">
                        <User size={20} />
                    </div>


                    <div>

                        <h2>
                            Personal Information
                        </h2>

                        <p>
                            Basic personal information of
                            the staff member.
                        </p>

                    </div>

                </div>


                <div className="staff-details-grid">

                    {/* FULL NAME */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Full Name
                        </span>

                        <strong>
                            {staff.name || "—"}
                        </strong>

                    </div>


                    {/* GENDER */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Gender
                        </span>

                        <strong>
                            {staff.gender || "—"}
                        </strong>

                    </div>


                    {/* DATE OF BIRTH */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Date of Birth
                        </span>

                        <strong>

                            <CalendarDays size={16} />

                            {formatDate(
                                staff.dateOfBirth
                            )}

                        </strong>

                    </div>


                    {/* EMAIL */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Email Address
                        </span>

                        <strong>

                            <Mail size={16} />

                            {staff.email || "—"}

                        </strong>

                    </div>


                    {/* PHONE */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Phone Number
                        </span>

                        <strong>

                            <Phone size={16} />

                            {staff.phone || "—"}

                        </strong>

                    </div>


                    {/* ADDRESS */}

                    <div className="staff-detail-item staff-detail-full">

                        <span className="staff-detail-label">
                            Address
                        </span>

                        <strong>

                            <MapPin size={16} />

                            {staff.address || "—"}

                        </strong>

                    </div>

                </div>

            </div>


            {/* =================================================
               EMPLOYMENT INFORMATION
               ================================================= */}

            <div className="staff-details-card">

                <div className="staff-details-card-header">

                    <div className="staff-details-section-icon">
                        <BriefcaseBusiness size={20} />
                    </div>


                    <div>

                        <h2>
                            Employment Information
                        </h2>

                        <p>
                            Job and employment details of
                            the staff member.
                        </p>

                    </div>

                </div>


                <div className="staff-details-grid">

                    {/* STAFF ID */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Staff ID
                        </span>

                        <strong>
                            {staff.id}
                        </strong>

                    </div>


                    {/* DESIGNATION */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Designation
                        </span>

                        <strong>
                            {staff.designation ||
                                "—"}
                        </strong>

                    </div>


                    {/* DEPARTMENT */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Department
                        </span>

                        <strong>

                            <Building2 size={16} />

                            {staff.department ||
                                "—"}

                        </strong>

                    </div>


                    {/* JOINING DATE */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Joining Date
                        </span>

                        <strong>

                            <CalendarDays size={16} />

                            {formatDate(
                                staff.joiningDate
                            )}

                        </strong>

                    </div>


                    {/* SALARY */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Salary
                        </span>

                        <strong>

                            <Banknote size={16} />

                            {formatSalary(
                                staff.salary
                            )}

                        </strong>

                    </div>


                    {/* EMPLOYMENT STATUS */}

                    <div className="staff-detail-item">

                        <span className="staff-detail-label">
                            Employment Status
                        </span>


                        <strong>

                            {staff.status ===
                                "Active" ? (

                                <span className="staff-detail-status-active">

                                    <CheckCircle2
                                        size={16}
                                    />

                                    Active

                                </span>

                            ) : (

                                <span className="staff-detail-status-inactive">

                                    <XCircle
                                        size={16}
                                    />

                                    Inactive

                                </span>

                            )}

                        </strong>

                    </div>

                </div>

            </div>


            {/* =================================================
               BOTTOM ACTIONS
               ================================================= */}

            <div className="staff-details-actions">

                <Link
                    to="/staff"
                    className="staff-form-cancel-button"
                >
                    <ArrowLeft size={18} />
                    Back to Staff
                </Link>


                <Link
                    to={`/staff/edit/${staff.id}`}
                    className="staff-form-submit-button"
                >
                    <Pencil size={18} />
                    Edit Staff
                </Link>

            </div>

        </div>
    );
}

export default StaffDetails;


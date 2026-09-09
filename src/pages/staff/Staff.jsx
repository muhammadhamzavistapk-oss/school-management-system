// import { Link, useNavigate } from "react-router-dom";
// import {
//     Plus,
//     Search,
//     Eye,
//     Pencil,
//     Trash2,
//     Users,
//     UserCheck,
//     GraduationCap,
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
//         designation: "Mathematics Teacher",
//         department: "Teaching",
//         joiningDate: "2023-01-10",
//         status: "Active",
//     },
//     {
//         id: "STF-002",
//         name: "Sara Ali",
//         email: "sara@example.com",
//         phone: "03111234567",
//         designation: "English Teacher",
//         department: "Teaching",
//         joiningDate: "2023-02-15",
//         status: "Active",
//     },
//     {
//         id: "STF-003",
//         name: "Usman Malik",
//         email: "usman@example.com",
//         phone: "03221234567",
//         designation: "Accountant",
//         department: "Administration",
//         joiningDate: "2022-08-01",
//         status: "Active",
//     },
//     {
//         id: "STF-004",
//         name: "Ayesha Noor",
//         email: "ayesha@example.com",
//         phone: "03331234567",
//         designation: "HR Manager",
//         department: "Human Resources",
//         joiningDate: "2021-06-10",
//         status: "Inactive",
//     },
// ];

// /* =========================================================
//    STAFF COMPONENT
//    ========================================================= */

// function Staff() {
//     const navigate = useNavigate();

//     /* =====================================================
//        STATISTICS
//        ===================================================== */

//     const totalStaff = staffMembers.length;

//     const activeStaff = staffMembers.filter(
//         (member) => member.status === "Active"
//     ).length;

//     const teachingStaff = staffMembers.filter(
//         (member) => member.department === "Teaching"
//     ).length;

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

//     /* =====================================================
//        BUTTON HANDLERS
//        ===================================================== */

//     const handleView = (id) => {
//         navigate(`/staff/${id}`);
//     };

//     const handleEdit = (id) => {
//         navigate(`/staff/edit/${id}`);
//     };

//     const handleDelete = (id) => {
//         const staff = staffMembers.find(
//             (member) => member.id === id
//         );

//         if (!staff) {
//             return;
//         }

//         const confirmed = window.confirm(
//             `Are you sure you want to delete ${staff.name}?`
//         );

//         if (confirmed) {
//             console.log("Delete staff:", id);

//             /*
//              * Temporary behavior.
//              * Real delete functionality will be added
//              * when we connect the shared Staff data.
//              */
//         }
//     };

//     /* =====================================================
//        RENDER
//        ===================================================== */

//     return (
//         <div className="staff-page">

//             {/* =================================================
//                 PAGE HEADER
//             ================================================= */}

//             <div className="staff-page-header">

//                 <div>
//                     <h1>Staff</h1>

//                     <p>
//                         Manage school staff members and
//                         employment records.
//                     </p>
//                 </div>

//                 <Link
//                     to="/staff/add"
//                     className="staff-add-button"
//                 >
//                     <Plus size={18} />
//                     Add Staff
//                 </Link>

//             </div>

//             {/* =================================================
//                 STATISTICS
//             ================================================= */}

//             <div className="staff-stats">

//                 {/* Total Staff */}
//                 <div className="staff-stat-card">

//                     <div className="staff-stat-icon">
//                         <Users size={21} />
//                     </div>

//                     <div className="staff-stat-content">
//                         <span>Total Staff</span>
//                         <strong>{totalStaff}</strong>
//                     </div>

//                 </div>

//                 {/* Active Staff */}
//                 <div className="staff-stat-card">

//                     <div className="staff-stat-icon">
//                         <UserCheck size={21} />
//                     </div>

//                     <div className="staff-stat-content">
//                         <span>Active Staff</span>
//                         <strong>{activeStaff}</strong>
//                     </div>

//                 </div>

//                 {/* Teaching Staff */}
//                 <div className="staff-stat-card">

//                     <div className="staff-stat-icon">
//                         <GraduationCap size={21} />
//                     </div>

//                     <div className="staff-stat-content">
//                         <span>Teaching Staff</span>
//                         <strong>{teachingStaff}</strong>
//                     </div>

//                 </div>

//             </div>

//             {/* =================================================
//                 STAFF TABLE CARD
//             ================================================= */}

//             <div className="staff-table-card">

//                 {/* Table Header */}
//                 <div className="staff-table-header">

//                     <div>
//                         <h2>All Staff</h2>

//                         <p>
//                             {staffMembers.length} staff members
//                         </p>
//                     </div>

//                     {/* Search */}
//                     <div className="staff-search-box">

//                         <Search size={18} />

//                         <input
//                             type="text"
//                             placeholder="Search staff..."
//                             aria-label="Search staff"
//                         />

//                     </div>

//                 </div>

//                 {/* =================================================
//                     TABLE
//                 ================================================= */}

//                 <div className="staff-table-wrapper">

//                     <table className="staff-table">

//                         <thead>
//                             <tr>
//                                 <th>Staff</th>
//                                 <th>Staff ID</th>
//                                 <th>Designation</th>
//                                 <th>Department</th>
//                                 <th>Phone</th>
//                                 <th>Joining Date</th>
//                                 <th>Status</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>

//                         <tbody>

//                             {staffMembers.map((member) => (
//                                 <tr key={member.id}>

//                                     {/* Staff */}
//                                     <td>
//                                         <div className="staff-person">

//                                             <div className="staff-avatar">
//                                                 {getInitials(
//                                                     member.name
//                                                 )}
//                                             </div>

//                                             <div className="staff-person-info">

//                                                 <strong>
//                                                     {member.name}
//                                                 </strong>

//                                                 <span>
//                                                     {member.email}
//                                                 </span>

//                                             </div>

//                                         </div>
//                                     </td>

//                                     {/* Staff ID */}
//                                     <td>
//                                         <span className="staff-id">
//                                             {member.id}
//                                         </span>
//                                     </td>

//                                     {/* Designation */}
//                                     <td>
//                                         <span>
//                                             {member.designation}
//                                         </span>
//                                     </td>

//                                     {/* Department */}
//                                     <td>
//                                         <span>
//                                             {member.department}
//                                         </span>
//                                     </td>

//                                     {/* Phone */}
//                                     <td>
//                                         <span>
//                                             {member.phone || "—"}
//                                         </span>
//                                     </td>

//                                     {/* Joining Date */}
//                                     <td>
//                                         <span>
//                                             {formatDate(
//                                                 member.joiningDate
//                                             )}
//                                         </span>
//                                     </td>

//                                     {/* Status */}
//                                     <td>

//                                         <span
//                                             className={`staff-status ${member.status ===
//                                                 "Active"
//                                                 ? "staff-status-active"
//                                                 : "staff-status-inactive"
//                                                 }`}
//                                         >
//                                             {member.status}
//                                         </span>

//                                     </td>

//                                     {/* Actions */}
//                                     <td>

//                                         <div className="staff-actions">

//                                             {/* View */}
//                                             <button
//                                                 type="button"
//                                                 className="staff-action-button staff-view-button"
//                                                 title="View Staff"
//                                                 aria-label={`View ${member.name}`}
//                                                 onClick={() =>
//                                                     handleView(
//                                                         member.id
//                                                     )
//                                                 }
//                                             >
//                                                 <Eye size={17} />
//                                             </button>

//                                             {/* Edit */}
//                                             <button
//                                                 type="button"
//                                                 className="staff-action-button staff-edit-button"
//                                                 title="Edit Staff"
//                                                 aria-label={`Edit ${member.name}`}
//                                                 onClick={() =>
//                                                     handleEdit(
//                                                         member.id
//                                                     )
//                                                 }
//                                             >
//                                                 <Pencil size={17} />
//                                             </button>

//                                             {/* Delete */}
//                                             <button
//                                                 type="button"
//                                                 className="staff-action-button staff-delete-button"
//                                                 title="Delete Staff"
//                                                 aria-label={`Delete ${member.name}`}
//                                                 onClick={() =>
//                                                     handleDelete(
//                                                         member.id
//                                                     )
//                                                 }
//                                             >
//                                                 <Trash2 size={17} />
//                                             </button>

//                                         </div>

//                                     </td>

//                                 </tr>
//                             ))}

//                         </tbody>

//                     </table>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default Staff;
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Plus,
    Search,
    Eye,
    Pencil,
    Trash2,
    Users,
    UserCheck,
    GraduationCap,
} from "lucide-react";

import "./Staff.css";

import {
    getStaff,
    deleteStaff,
} from "../../data/staffData";


/* =========================================================
   STAFF COMPONENT
   ========================================================= */

function Staff() {
    const navigate = useNavigate();

    const [staffMembers, setStaffMembers] = useState(
        () => getStaff()
    );

    const [searchTerm, setSearchTerm] = useState("");


    /* =====================================================
       SEARCH
       ===================================================== */

    const filteredStaff = useMemo(() => {
        const search = searchTerm
            .trim()
            .toLowerCase();

        if (!search) {
            return staffMembers;
        }

        return staffMembers.filter((member) =>
            [
                member.id,
                member.name,
                member.email,
                member.phone,
                member.designation,
                member.department,
                member.status,
            ]
                .filter(Boolean)
                .some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(search)
                )
        );
    }, [staffMembers, searchTerm]);


    /* =====================================================
       STATISTICS
       ===================================================== */

    const totalStaff = staffMembers.length;

    const activeStaff = staffMembers.filter(
        (member) => member.status === "Active"
    ).length;

    const teachingStaff = staffMembers.filter(
        (member) => member.department === "Teaching"
    ).length;


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


    /* =====================================================
       VIEW
       ===================================================== */

    const handleView = (id) => {
        navigate(`/staff/${id}`);
    };


    /* =====================================================
       EDIT
       ===================================================== */

    const handleEdit = (id) => {
        navigate(`/staff/edit/${id}`);
    };


    /* =====================================================
       DELETE
       ===================================================== */

    const handleDelete = (id) => {
        const staff = staffMembers.find(
            (member) => member.id === id
        );

        if (!staff) {
            return;
        }

        const confirmed = window.confirm(
            `Are you sure you want to delete ${staff.name}?`
        );

        if (!confirmed) {
            return;
        }

        const updatedStaff = deleteStaff(id);

        setStaffMembers(updatedStaff);
    };


    /* =====================================================
       RENDER
       ===================================================== */

    return (
        <div className="staff-page">

            {/* =================================================
               PAGE HEADER
               ================================================= */}

            <div className="staff-page-header">

                <div>
                    <h1>Staff</h1>

                    <p>
                        Manage school staff members and
                        employment records.
                    </p>
                </div>

                <Link
                    to="/staff/add"
                    className="staff-add-button"
                >
                    <Plus size={18} />
                    Add Staff
                </Link>

            </div>


            {/* =================================================
               STATISTICS
               ================================================= */}

            <div className="staff-stats">

                <div className="staff-stat-card">

                    <div className="staff-stat-icon">
                        <Users size={21} />
                    </div>

                    <div className="staff-stat-content">
                        <span>Total Staff</span>
                        <strong>
                            {totalStaff}
                        </strong>
                    </div>

                </div>


                <div className="staff-stat-card">

                    <div className="staff-stat-icon">
                        <UserCheck size={21} />
                    </div>

                    <div className="staff-stat-content">
                        <span>Active Staff</span>
                        <strong>
                            {activeStaff}
                        </strong>
                    </div>

                </div>


                <div className="staff-stat-card">

                    <div className="staff-stat-icon">
                        <GraduationCap size={21} />
                    </div>

                    <div className="staff-stat-content">
                        <span>Teaching Staff</span>
                        <strong>
                            {teachingStaff}
                        </strong>
                    </div>

                </div>

            </div>


            {/* =================================================
               TABLE CARD
               ================================================= */}

            <div className="staff-table-card">

                <div className="staff-table-header">

                    <div>
                        <h2>All Staff</h2>

                        <p>
                            {staffMembers.length} staff members
                        </p>
                    </div>


                    {/* SEARCH */}

                    <div className="staff-search-box">

                        <Search size={18} />

                        <input
                            type="text"
                            placeholder="Search staff..."
                            aria-label="Search staff"
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(
                                    event.target.value
                                )
                            }
                        />

                    </div>

                </div>


                {/* =================================================
                   TABLE
                   ================================================= */}

                <div className="staff-table-wrapper">

                    <table className="staff-table">

                        <thead>
                            <tr>
                                <th>Staff</th>
                                <th>Staff ID</th>
                                <th>Designation</th>
                                <th>Department</th>
                                <th>Phone</th>
                                <th>Joining Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>


                        <tbody>

                            {filteredStaff.length > 0 ? (
                                filteredStaff.map(
                                    (member) => (
                                        <tr
                                            key={member.id}
                                        >

                                            <td>
                                                <div className="staff-person">

                                                    <div className="staff-avatar">
                                                        {getInitials(
                                                            member.name
                                                        )}
                                                    </div>

                                                    <div className="staff-person-info">

                                                        <strong>
                                                            {member.name}
                                                        </strong>

                                                        <span>
                                                            {member.email}
                                                        </span>

                                                    </div>

                                                </div>
                                            </td>


                                            <td>
                                                <span className="staff-id">
                                                    {member.id}
                                                </span>
                                            </td>


                                            <td>
                                                {member.designation}
                                            </td>


                                            <td>
                                                {member.department}
                                            </td>


                                            <td>
                                                {member.phone ||
                                                    "—"}
                                            </td>


                                            <td>
                                                {formatDate(
                                                    member.joiningDate
                                                )}
                                            </td>


                                            <td>

                                                <span
                                                    className={`staff-status ${member.status ===
                                                        "Active"
                                                        ? "staff-status-active"
                                                        : "staff-status-inactive"
                                                        }`}
                                                >
                                                    {member.status}
                                                </span>

                                            </td>


                                            <td>

                                                <div className="staff-actions">

                                                    <button
                                                        type="button"
                                                        className="staff-action-button staff-view-button"
                                                        title="View Staff"
                                                        aria-label={`View ${member.name}`}
                                                        onClick={() =>
                                                            handleView(
                                                                member.id
                                                            )
                                                        }
                                                    >
                                                        <Eye
                                                            size={
                                                                17
                                                            }
                                                        />
                                                    </button>


                                                    <button
                                                        type="button"
                                                        className="staff-action-button staff-edit-button"
                                                        title="Edit Staff"
                                                        aria-label={`Edit ${member.name}`}
                                                        onClick={() =>
                                                            handleEdit(
                                                                member.id
                                                            )
                                                        }
                                                    >
                                                        <Pencil
                                                            size={
                                                                17
                                                            }
                                                        />
                                                    </button>


                                                    <button
                                                        type="button"
                                                        className="staff-action-button staff-delete-button"
                                                        title="Delete Staff"
                                                        aria-label={`Delete ${member.name}`}
                                                        onClick={() =>
                                                            handleDelete(
                                                                member.id
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
                            ) : (
                                <tr>
                                    <td
                                        colSpan="8"
                                        style={{
                                            textAlign:
                                                "center",
                                            padding:
                                                "40px 20px",
                                        }}
                                    >
                                        No staff members found.
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default Staff;


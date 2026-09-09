
// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";

// import {
//     Eye,
//     Pencil,
//     Plus,
//     Search,
//     Trash2,
//     Users,
// } from "lucide-react";

// import "./Teacher.css";


// const initialTeachers = [
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


// function Teachers() {

//     const [teachers, setTeachers] =
//         useState(initialTeachers);

//     const [search, setSearch] =
//         useState("");

//     const [departmentFilter, setDepartmentFilter] =
//         useState("All");

//     const [statusFilter, setStatusFilter] =
//         useState("All");


//     /*
//     =========================================
//     FILTER TEACHERS
//     =========================================
//     */

//     const filteredTeachers = useMemo(() => {

//         return teachers.filter((teacher) => {

//             const searchValue =
//                 search.toLowerCase().trim();


//             const matchesSearch =
//                 !searchValue ||
//                 teacher.name
//                     .toLowerCase()
//                     .includes(searchValue) ||
//                 teacher.email
//                     .toLowerCase()
//                     .includes(searchValue) ||
//                 teacher.id
//                     .toLowerCase()
//                     .includes(searchValue) ||
//                 teacher.phone
//                     .toLowerCase()
//                     .includes(searchValue);


//             const matchesDepartment =
//                 departmentFilter === "All" ||
//                 teacher.department === departmentFilter;


//             const matchesStatus =
//                 statusFilter === "All" ||
//                 teacher.status === statusFilter;


//             return (
//                 matchesSearch &&
//                 matchesDepartment &&
//                 matchesStatus
//             );

//         });

//     }, [
//         teachers,
//         search,
//         departmentFilter,
//         statusFilter,
//     ]);


//     /*
//     =========================================
//     STATISTICS
//     =========================================
//     */

//     const totalTeachers =
//         teachers.length;

//     const activeTeachers =
//         teachers.filter(
//             (teacher) =>
//                 teacher.status === "Active"
//         ).length;

//     const inactiveTeachers =
//         teachers.filter(
//             (teacher) =>
//                 teacher.status === "Inactive"
//         ).length;


//     /*
//     =========================================
//     DELETE TEACHER
//     =========================================
//     */

//     const handleDelete = (id) => {

//         const confirmed =
//             window.confirm(
//                 "Are you sure you want to delete this teacher?"
//             );


//         if (!confirmed) {
//             return;
//         }


//         setTeachers((previousTeachers) =>
//             previousTeachers.filter(
//                 (teacher) =>
//                     teacher.id !== id
//             )
//         );

//     };


//     return (

//         <div className="teacher-page">


//             {/* =================================
//                 PAGE HEADER
//             ================================= */}

//             <div className="teacher-page-header">

//                 <div>

//                     <h1>
//                         Teachers
//                     </h1>

//                     <p>
//                         Manage all teachers and
//                         teaching staff.
//                     </p>

//                 </div>


//                 <Link
//                     to="/teachers/add"
//                     className="add-teacher-btn"
//                 >

//                     <Plus size={18} />

//                     Add Teacher

//                 </Link>

//             </div>


//             {/* =================================
//                 STATISTICS
//             ================================= */}

//             <div className="teacher-stats">


//                 {/* TOTAL */}

//                 <div className="teacher-stat-card">

//                     <div className="teacher-stat-icon">

//                         <Users size={20} />

//                     </div>

//                     <div>

//                         <span>
//                             Total Teachers
//                         </span>

//                         <strong>
//                             {totalTeachers}
//                         </strong>

//                     </div>

//                 </div>


//                 {/* ACTIVE */}

//                 <div className="teacher-stat-card">

//                     <div className="teacher-stat-icon">
//                         ✓
//                     </div>

//                     <div>

//                         <span>
//                             Active Teachers
//                         </span>

//                         <strong>
//                             {activeTeachers}
//                         </strong>

//                     </div>

//                 </div>


//                 {/* INACTIVE */}

//                 <div className="teacher-stat-card">

//                     <div className="teacher-stat-icon">
//                         !
//                     </div>

//                     <div>

//                         <span>
//                             Inactive Teachers
//                         </span>

//                         <strong>
//                             {inactiveTeachers}
//                         </strong>

//                     </div>

//                 </div>

//             </div>


//             {/* =================================
//                 TABLE CARD
//             ================================= */}

//             <div className="teacher-table-card">


//                 {/* =================================
//                     TOOLBAR
//                 ================================= */}

//                 <div className="teacher-toolbar">


//                     {/* SEARCH */}

//                     <div className="teacher-search">

//                         <Search size={18} />

//                         <input
//                             type="text"
//                             placeholder="Search teachers..."
//                             value={search}
//                             onChange={(event) =>
//                                 setSearch(
//                                     event.target.value
//                                 )
//                             }
//                         />

//                     </div>


//                     {/* FILTERS */}

//                     <div className="teacher-filters">


//                         <select
//                             value={departmentFilter}
//                             onChange={(event) =>
//                                 setDepartmentFilter(
//                                     event.target.value
//                                 )
//                             }
//                         >

//                             <option value="All">
//                                 All Departments
//                             </option>

//                             <option value="Computer Science">
//                                 Computer Science
//                             </option>

//                             <option value="English">
//                                 English
//                             </option>

//                             <option value="Mathematics">
//                                 Mathematics
//                             </option>

//                             <option value="Science">
//                                 Science
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


//                 {/* =================================
//                     TABLE
//                 ================================= */}

//                 <div className="teacher-table-wrapper">

//                     <table className="teacher-table">

//                         <thead>

//                             <tr>

//                                 <th>
//                                     Teacher
//                                 </th>

//                                 <th>
//                                     Teacher ID
//                                 </th>

//                                 <th>
//                                     Department
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

//                             {filteredTeachers.length === 0 ? (

//                                 <tr>

//                                     <td
//                                         colSpan="6"
//                                         className="empty-teachers"
//                                     >

//                                         No teachers found.

//                                     </td>

//                                 </tr>

//                             ) : (

//                                 filteredTeachers.map(
//                                     (teacher) => (

//                                         <tr
//                                             key={teacher.id}
//                                         >


//                                             {/* TEACHER */}

//                                             <td>

//                                                 <div className="teacher-name-cell">

//                                                     <div className="teacher-avatar">

//                                                         {teacher.name
//                                                             .charAt(0)
//                                                             .toUpperCase()}

//                                                     </div>

//                                                     <div>

//                                                         <strong>
//                                                             {teacher.name}
//                                                         </strong>

//                                                         <span>
//                                                             {teacher.designation}
//                                                         </span>

//                                                     </div>

//                                                 </div>

//                                             </td>


//                                             {/* ID */}

//                                             <td>

//                                                 <span className="teacher-id">

//                                                     {teacher.id}

//                                                 </span>

//                                             </td>


//                                             {/* DEPARTMENT */}

//                                             <td>

//                                                 <strong>
//                                                     {teacher.department}
//                                                 </strong>

//                                                 <span>
//                                                     {teacher.qualification}
//                                                 </span>

//                                             </td>


//                                             {/* CONTACT */}

//                                             <td>

//                                                 <div className="teacher-contact-cell">

//                                                     <span>
//                                                         {teacher.phone}
//                                                     </span>

//                                                     <span>
//                                                         {teacher.email}
//                                                     </span>

//                                                 </div>

//                                             </td>


//                                             {/* STATUS */}

//                                             <td>

//                                                 <span
//                                                     className={`teacher-status-badge ${teacher.status ===
//                                                         "Active"
//                                                         ? "active"
//                                                         : "inactive"
//                                                         }`}
//                                                 >

//                                                     {teacher.status}

//                                                 </span>

//                                             </td>


//                                             {/* ACTIONS */}

//                                             <td>

//                                                 <div className="teacher-action-buttons">


//                                                     {/* VIEW */}

//                                                     <Link
//                                                         to={`/teachers/${teacher.id}`}
//                                                         className="teacher-action-btn view"
//                                                         title="View Teacher"
//                                                     >

//                                                         <Eye size={16} />

//                                                     </Link>


//                                                     {/* EDIT */}

//                                                     <Link
//                                                         to={`/teachers/edit/${teacher.id}`}
//                                                         className="teacher-action-btn edit"
//                                                         title="Edit Teacher"
//                                                     >

//                                                         <Pencil size={16} />

//                                                     </Link>


//                                                     {/* DELETE */}

//                                                     <button
//                                                         type="button"
//                                                         className="teacher-action-btn delete"
//                                                         title="Delete Teacher"
//                                                         onClick={() =>
//                                                             handleDelete(
//                                                                 teacher.id
//                                                             )
//                                                         }
//                                                     >

//                                                         <Trash2 size={16} />

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


//                 {/* =================================
//                     FOOTER
//                 ================================= */}

//                 <div className="teacher-table-footer">

//                     Showing{" "}

//                     <strong>
//                         {filteredTeachers.length}
//                     </strong>

//                     {" "}of{" "}

//                     <strong>
//                         {teachers.length}
//                     </strong>

//                     {" "}teachers

//                 </div>

//             </div>

//         </div>
//     );
// }


// export default Teachers;

import { useEffect, useMemo, useState } from "react";
import {
    Eye,
    Pencil,
    Plus,
    Trash2,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Teacher.css";

const STORAGE_KEY = "school_teachers";

const defaultTeachers = [
    {
        id: "TCH-001",
        name: "Ahmed Khan",
        email: "ahmed.khan@example.com",
        phone: "03001234567",
        department: "Computer Science",
        designation: "Senior Teacher",
        qualification: "M.Sc Computer Science",
        gender: "Male",
        joiningDate: "2021-08-15",
        address: "Lahore",
        status: "Active",
    },
    {
        id: "TCH-002",
        name: "Sara Ahmed",
        email: "sara.ahmed@example.com",
        phone: "03111234567",
        department: "English",
        designation: "Teacher",
        qualification: "M.A English",
        gender: "Female",
        joiningDate: "2022-03-10",
        address: "Lahore",
        status: "Active",
    },
    {
        id: "TCH-003",
        name: "Usman Raza",
        email: "usman.raza@example.com",
        phone: "03221234567",
        department: "Mathematics",
        designation: "Senior Teacher",
        qualification: "M.Sc Mathematics",
        gender: "Male",
        joiningDate: "2020-01-20",
        address: "Raiwind",
        status: "Active",
    },
    {
        id: "TCH-004",
        name: "Ayesha Malik",
        email: "ayesha.malik@example.com",
        phone: "03331234567",
        department: "Science",
        designation: "Teacher",
        qualification: "M.Sc Physics",
        gender: "Female",
        joiningDate: "2023-09-01",
        address: "Lahore",
        status: "Inactive",
    },
    {
        id: "TCH-005",
        name: "Bilal Hussain",
        email: "bilal.hussain@example.com",
        phone: "03441234567",
        department: "Computer Science",
        designation: "Teacher",
        qualification: "MCS",
        gender: "Male",
        joiningDate: "2024-01-15",
        address: "Lahore",
        status: "Active",
    },
];

const getTeachers = () => {
    try {
        const savedTeachers = localStorage.getItem(STORAGE_KEY);

        if (!savedTeachers) {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(defaultTeachers)
            );

            return defaultTeachers;
        }

        const parsedTeachers = JSON.parse(savedTeachers);

        if (Array.isArray(parsedTeachers)) {
            return parsedTeachers;
        }

        return defaultTeachers;
    } catch (error) {
        console.error("Failed to load teachers:", error);
        return defaultTeachers;
    }
};

function Teachers() {
    const [teachers, setTeachers] = useState(() => getTeachers());

    const [search, setSearch] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    /*
     * Keep the list synchronized if localStorage
     * changes from another browser tab.
     */
    useEffect(() => {
        const handleStorageChange = () => {
            setTeachers(getTeachers());
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener(
                "storage",
                handleStorageChange
            );
        };
    }, []);

    /*
     * Create unique department list
     */
    const departments = useMemo(() => {
        return [
            "All",
            ...new Set(
                teachers
                    .map((teacher) => teacher.department)
                    .filter(Boolean)
            ),
        ];
    }, [teachers]);

    /*
     * Filter teachers
     */
    const filteredTeachers = useMemo(() => {
        const searchValue = search.trim().toLowerCase();

        return teachers.filter((teacher) => {
            const matchesSearch =
                !searchValue ||
                teacher.name?.toLowerCase().includes(searchValue) ||
                teacher.email?.toLowerCase().includes(searchValue) ||
                teacher.id?.toLowerCase().includes(searchValue) ||
                teacher.phone?.toLowerCase().includes(searchValue);

            const matchesDepartment =
                departmentFilter === "All" ||
                teacher.department === departmentFilter;

            const matchesStatus =
                statusFilter === "All" ||
                teacher.status === statusFilter;

            return (
                matchesSearch &&
                matchesDepartment &&
                matchesStatus
            );
        });
    }, [
        teachers,
        search,
        departmentFilter,
        statusFilter,
    ]);

    /*
     * Statistics
     */
    const totalTeachers = teachers.length;

    const activeTeachers = teachers.filter(
        (teacher) => teacher.status === "Active"
    ).length;

    const inactiveTeachers = teachers.filter(
        (teacher) => teacher.status === "Inactive"
    ).length;

    /*
     * Delete teacher
     */
    const handleDelete = (teacherId) => {
        const teacher = teachers.find(
            (item) => item.id === teacherId
        );

        if (!teacher) {
            return;
        }

        const confirmed = window.confirm(
            `Are you sure you want to delete ${teacher.name}?`
        );

        if (!confirmed) {
            return;
        }

        const updatedTeachers = teachers.filter(
            (item) => item.id !== teacherId
        );

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updatedTeachers)
        );

        setTeachers(updatedTeachers);
    };

    /*
     * Generate teacher initials
     */
    const getInitials = (name) => {
        if (!name) {
            return "T";
        }

        return name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0].toUpperCase())
            .join("");
    };

    return (
        <div className="teacher-page">

            {/* ================= HEADER ================= */}
            <div className="teacher-page-header">

                <div>
                    <h1>Teachers</h1>

                    <p>
                        Manage all teachers and their
                        professional information.
                    </p>
                </div>

                <Link
                    to="/teachers/add"
                    className="add-teacher-btn"
                >
                    <Plus size={18} />
                    Add Teacher
                </Link>

            </div>

            {/* ================= STATISTICS ================= */}
            <div className="teacher-stats">

                <div className="teacher-stat-card">

                    <div className="teacher-stat-icon">
                        <Users size={22} />
                    </div>

                    <div>
                        <span>Total Teachers</span>
                        <strong>{totalTeachers}</strong>
                    </div>

                </div>

                <div className="teacher-stat-card">

                    <div className="teacher-stat-icon">
                        <Users size={22} />
                    </div>

                    <div>
                        <span>Active Teachers</span>
                        <strong>{activeTeachers}</strong>
                    </div>

                </div>

                <div className="teacher-stat-card">

                    <div className="teacher-stat-icon">
                        <Users size={22} />
                    </div>

                    <div>
                        <span>Inactive Teachers</span>
                        <strong>{inactiveTeachers}</strong>
                    </div>

                </div>

            </div>

            {/* ================= TABLE CARD ================= */}
            <div className="teacher-table-card">

                {/* ================= TOOLBAR ================= */}
                <div className="teacher-toolbar">

                    {/* Search */}
                    <div className="teacher-search">

                        <input
                            type="text"
                            placeholder="Search by name, email, ID or phone..."
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                        />

                    </div>

                    {/* Filters */}
                    <div className="teacher-filters">

                        <select
                            value={departmentFilter}
                            onChange={(event) =>
                                setDepartmentFilter(
                                    event.target.value
                                )
                            }
                        >
                            {departments.map((department) => (
                                <option
                                    key={department}
                                    value={department}
                                >
                                    {department === "All"
                                        ? "All Departments"
                                        : department}
                                </option>
                            ))}
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

                {/* ================= TABLE ================= */}
                <div className="teacher-table-wrapper">

                    <table className="teacher-table">

                        <thead>
                            <tr>
                                <th>Teacher</th>
                                <th>Contact</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Joining Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredTeachers.length > 0 ? (
                                filteredTeachers.map((teacher) => (
                                    <tr key={teacher.id}>

                                        {/* Teacher */}
                                        <td>
                                            <div className="teacher-name-cell">

                                                <div className="teacher-avatar">
                                                    {getInitials(
                                                        teacher.name
                                                    )}
                                                </div>

                                                <div>
                                                    <strong>
                                                        {teacher.name}
                                                    </strong>

                                                    <span className="teacher-id">
                                                        {teacher.id}
                                                    </span>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Contact */}
                                        <td>
                                            <div className="teacher-contact-cell">

                                                <span>
                                                    {teacher.email}
                                                </span>

                                                <span>
                                                    {teacher.phone}
                                                </span>

                                            </div>
                                        </td>

                                        {/* Department */}
                                        <td>
                                            {teacher.department}
                                        </td>

                                        {/* Designation */}
                                        <td>
                                            {teacher.designation}
                                        </td>

                                        {/* Joining Date */}
                                        <td>
                                            {teacher.joiningDate}
                                        </td>

                                        {/* Status */}
                                        <td>
                                            <span
                                                className={`teacher-status-badge ${teacher.status ===
                                                        "Active"
                                                        ? "active"
                                                        : "inactive"
                                                    }`}
                                            >
                                                {teacher.status}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td>

                                            <div className="teacher-action-buttons">

                                                {/* View */}
                                                <Link
                                                    to={`/teachers/${teacher.id}`}
                                                    className="teacher-action-btn view"
                                                    title="View Teacher"
                                                >
                                                    <Eye size={17} />
                                                </Link>

                                                {/* Edit */}
                                                <Link
                                                    to={`/teachers/edit/${teacher.id}`}
                                                    className="teacher-action-btn edit"
                                                    title="Edit Teacher"
                                                >
                                                    <Pencil size={17} />
                                                </Link>

                                                {/* Delete */}
                                                <button
                                                    type="button"
                                                    className="teacher-action-btn delete"
                                                    title="Delete Teacher"
                                                    onClick={() =>
                                                        handleDelete(
                                                            teacher.id
                                                        )
                                                    }
                                                >
                                                    <Trash2 size={17} />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="empty-teachers"
                                    >
                                        No teachers found.
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

                {/* ================= FOOTER ================= */}
                <div className="teacher-table-footer">

                    Showing{" "}
                    <strong>
                        {filteredTeachers.length}
                    </strong>{" "}
                    of{" "}
                    <strong>
                        {teachers.length}
                    </strong>{" "}
                    teachers

                </div>

            </div>

        </div>
    );
}

export default Teachers;

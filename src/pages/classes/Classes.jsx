import { useEffect, useMemo, useState } from "react";
import {
    Eye,
    Pencil,
    Plus,
    Trash2,
    GraduationCap,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Class.css";

const STORAGE_KEY = "school_classes";

const defaultClasses = [
    {
        id: "CLS-001",
        className: "10th",
        section: "A",
        subject: "Mathematics & Science",
        classTeacher: "Ahmed Khan",
        roomNumber: "101",
        capacity: 40,
        students: 35,
        status: "Active",
    },
    {
        id: "CLS-002",
        className: "10th",
        section: "B",
        subject: "Mathematics & Science",
        classTeacher: "Usman Raza",
        roomNumber: "102",
        capacity: 40,
        students: 38,
        status: "Active",
    },
    {
        id: "CLS-003",
        className: "9th",
        section: "A",
        subject: "General Science",
        classTeacher: "Sara Ahmed",
        roomNumber: "201",
        capacity: 35,
        students: 30,
        status: "Active",
    },
    {
        id: "CLS-004",
        className: "8th",
        section: "A",
        subject: "Computer Science",
        classTeacher: "Bilal Hussain",
        roomNumber: "202",
        capacity: 35,
        students: 27,
        status: "Active",
    },
    {
        id: "CLS-005",
        className: "7th",
        section: "B",
        subject: "General Studies",
        classTeacher: "Ayesha Malik",
        roomNumber: "203",
        capacity: 35,
        students: 25,
        status: "Inactive",
    },
];

const getClasses = () => {
    try {
        const storedClasses = localStorage.getItem(STORAGE_KEY);

        if (!storedClasses) {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(defaultClasses)
            );

            return defaultClasses;
        }

        const parsedClasses = JSON.parse(storedClasses);

        return Array.isArray(parsedClasses)
            ? parsedClasses
            : defaultClasses;
    } catch (error) {
        console.error("Unable to load classes:", error);
        return defaultClasses;
    }
};

const getInitials = (name) => {
    if (!name) return "CL";

    return name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();
};

function Classes() {
    const [classes, setClasses] = useState(() => getClasses());

    const [searchTerm, setSearchTerm] = useState("");
    const [gradeFilter, setGradeFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    /*
     * Keep the page synchronized if another tab/window
     * changes the class data.
     */
    useEffect(() => {
        const handleStorageChange = () => {
            setClasses(getClasses());
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
     * Filter classes
     */
    const filteredClasses = useMemo(() => {
        const search = searchTerm.trim().toLowerCase();

        return classes.filter((classItem) => {
            const matchesSearch =
                !search ||
                classItem.id?.toLowerCase().includes(search) ||
                classItem.className?.toLowerCase().includes(search) ||
                classItem.section?.toLowerCase().includes(search) ||
                classItem.subject?.toLowerCase().includes(search) ||
                classItem.classTeacher?.toLowerCase().includes(search) ||
                classItem.roomNumber?.toLowerCase().includes(search);

            const matchesGrade =
                gradeFilter === "All" ||
                classItem.className === gradeFilter;

            const matchesStatus =
                statusFilter === "All" ||
                classItem.status === statusFilter;

            return (
                matchesSearch &&
                matchesGrade &&
                matchesStatus
            );
        });
    }, [
        classes,
        searchTerm,
        gradeFilter,
        statusFilter,
    ]);

    /*
     * Statistics
     */
    const totalClasses = classes.length;

    const activeClasses = classes.filter(
        (classItem) => classItem.status === "Active"
    ).length;

    const inactiveClasses = classes.filter(
        (classItem) => classItem.status === "Inactive"
    ).length;

    const totalStudents = classes.reduce(
        (total, classItem) =>
            total + Number(classItem.students || 0),
        0
    );

    /*
     * Delete class
     */
    const handleDelete = (id) => {
        const classToDelete = classes.find(
            (classItem) => classItem.id === id
        );

        if (!classToDelete) return;

        const confirmed = window.confirm(
            `Are you sure you want to delete ${classToDelete.className} - Section ${classToDelete.section}?`
        );

        if (!confirmed) return;

        const updatedClasses = classes.filter(
            (classItem) => classItem.id !== id
        );

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updatedClasses)
        );

        setClasses(updatedClasses);
    };

    return (
        <div className="class-page">

            {/* Page Header */}
            <div className="class-page-header">
                <div>
                    <h1>Classes</h1>

                    <p>
                        Manage school classes, sections,
                        teachers and student capacity.
                    </p>
                </div>

                <div className="class-header-actions">
                    <Link
                        to="/classes/add"
                        className="add-class-btn"
                    >
                        <Plus size={18} />
                        Add Class
                    </Link>
                </div>
            </div>

            {/* Statistics */}
            <div className="class-stats">

                <div className="class-stat-card">
                    <div className="class-stat-icon">
                        <GraduationCap size={22} />
                    </div>

                    <div>
                        <span>Total Classes</span>
                        <strong>{totalClasses}</strong>
                    </div>
                </div>

                <div className="class-stat-card">
                    <div className="class-stat-icon">
                        <GraduationCap size={22} />
                    </div>

                    <div>
                        <span>Active Classes</span>
                        <strong>{activeClasses}</strong>
                    </div>
                </div>

                <div className="class-stat-card">
                    <div className="class-stat-icon">
                        <GraduationCap size={22} />
                    </div>

                    <div>
                        <span>Inactive Classes</span>
                        <strong>{inactiveClasses}</strong>
                    </div>
                </div>

                <div className="class-stat-card">
                    <div className="class-stat-icon">
                        <Users size={22} />
                    </div>

                    <div>
                        <span>Total Students</span>
                        <strong>{totalStudents}</strong>
                    </div>
                </div>

            </div>

            {/* Table Card */}
            <div className="class-table-card">

                {/* Toolbar */}
                <div className="class-toolbar">

                    <div className="class-search">
                        <input
                            type="text"
                            placeholder="Search classes..."
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                        />
                    </div>

                    <div className="class-filters">

                        <select
                            value={gradeFilter}
                            onChange={(event) =>
                                setGradeFilter(event.target.value)
                            }
                        >
                            <option value="All">
                                All Grades
                            </option>

                            <option value="10th">
                                10th
                            </option>

                            <option value="9th">
                                9th
                            </option>

                            <option value="8th">
                                8th
                            </option>

                            <option value="7th">
                                7th
                            </option>

                            <option value="6th">
                                6th
                            </option>

                            <option value="5th">
                                5th
                            </option>
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(event) =>
                                setStatusFilter(event.target.value)
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
                <div className="class-table-wrapper">

                    <table className="class-table">

                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Class Teacher</th>
                                <th>Room</th>
                                <th>Students</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredClasses.length > 0 ? (
                                filteredClasses.map((classItem) => (
                                    <tr key={classItem.id}>

                                        {/* Class */}
                                        <td>
                                            <div className="class-name-cell">

                                                <div className="class-avatar">
                                                    {getInitials(
                                                        `${classItem.className} ${classItem.section}`
                                                    )}
                                                </div>

                                                <div>
                                                    <strong>
                                                        {classItem.className}
                                                        {" - "}
                                                        Section{" "}
                                                        {classItem.section}
                                                    </strong>

                                                    <span className="class-id">
                                                        {classItem.id}
                                                    </span>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Subject */}
                                        <td>
                                            {classItem.subject}
                                        </td>

                                        {/* Teacher */}
                                        <td>
                                            {classItem.classTeacher}
                                        </td>

                                        {/* Room */}
                                        <td>
                                            {classItem.roomNumber}
                                        </td>

                                        {/* Students */}
                                        <td>
                                            <strong>
                                                {classItem.students}
                                            </strong>
                                            {" / "}
                                            {classItem.capacity}
                                        </td>

                                        {/* Status */}
                                        <td>
                                            <span
                                                className={`class-status-badge ${classItem.status
                                                        ?.toLowerCase()
                                                        .replace(
                                                            /\s+/g,
                                                            "-"
                                                        )
                                                    }`}
                                            >
                                                {classItem.status}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td>

                                            <div className="class-action-buttons">

                                                <Link
                                                    to={`/classes/${classItem.id}`}
                                                    className="class-action-btn view"
                                                    title="View Class"
                                                >
                                                    <Eye size={17} />
                                                </Link>

                                                <Link
                                                    to={`/classes/edit/${classItem.id}`}
                                                    className="class-action-btn edit"
                                                    title="Edit Class"
                                                >
                                                    <Pencil size={17} />
                                                </Link>

                                                <button
                                                    type="button"
                                                    className="class-action-btn delete"
                                                    title="Delete Class"
                                                    onClick={() =>
                                                        handleDelete(
                                                            classItem.id
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
                                        className="empty-classes"
                                    >
                                        <GraduationCap size={42} />

                                        <h3>
                                            No Classes Found
                                        </h3>

                                        <p>
                                            Try changing your search
                                            or filter options.
                                        </p>
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

                {/* Footer */}
                <div className="class-table-footer">
                    Showing{" "}
                    <strong>
                        {filteredClasses.length}
                    </strong>{" "}
                    of{" "}
                    <strong>
                        {classes.length}
                    </strong>{" "}
                    classes
                </div>

            </div>

        </div>
    );
}

export default Classes;


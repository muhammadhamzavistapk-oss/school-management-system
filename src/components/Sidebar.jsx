import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
    LayoutDashboard,
    BookOpen,
    ClipboardCheck,
    ClipboardList,
    CreditCard,
    FileBarChart,
    Megaphone,
    Settings,
    Users,
    GraduationCap,
    ChevronDown,
    ChevronRight,
} from "lucide-react";

function Sidebar() {
    const [openGroups, setOpenGroups] = useState({});

    const navigation = [
        { label: "Academic", icon: BookOpen, items: [["Academic Years", "/academic-years"], ["Classes", "/classes"], ["Sections", "/sections"], ["Subjects", "/subjects"]] },
        { label: "People", icon: Users, items: [["Students", "/students"], ["Teachers", "/teachers"], ["Staff", "/staff"]] },
        { label: "Academic Management", icon: ClipboardList, items: [["Enrollments", "/enrollments"], ["Teacher Assignments", "/teacher-assignments"], ["Timetable", "/timetable"]] },
        { label: "Attendance", icon: ClipboardCheck, items: [["Student Attendance", "/student-attendance"], ["Teacher Attendance", "/teacher-attendance"]] },
        { label: "Exams", icon: GraduationCap, items: [["Exams", "/exams"], ["Results", "/results"]] },
        { label: "Finance", icon: CreditCard, items: [["Fees", "/fees"], ["Payments", "/payments"], ["Fee Reports", "/fee-reports"]] },
        { label: "Communication", icon: Megaphone, items: [["Notices", "/notices"], ["Events", "/events"]] },
        { label: "Reports", icon: FileBarChart, items: [["Student Report", "/student-report"], ["Attendance Report", "/attendance-report"], ["Fee Report", "/fee-report"], ["Result Report", "/result-report"]] },
        { label: "Settings", icon: Settings, items: [["School Settings", "/settings"]] },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <h2>School MS</h2>
                <span>Management System</span>
            </div>

            <nav className="sidebar-nav">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `sidebar-link ${isActive ? "active" : ""}`
                    }
                >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </NavLink>

                {navigation.map((group) => {
                    const GroupIcon = group.icon;
                    const isOpen = Boolean(openGroups[group.label]);

                    const toggleGroup = () => {
                        setOpenGroups((currentGroups) => ({
                            ...currentGroups,
                            [group.label]: !currentGroups[group.label],
                        }));
                    };

                    return (
                        <div className="sidebar-group" key={group.label}>
                            <button
                                className="sidebar-group-title"
                                onClick={toggleGroup}
                                aria-expanded={isOpen}
                                type="button"
                            >
                                <GroupIcon size={15} />
                                <span>{group.label}</span>
                                <ChevronDown className={`sidebar-chevron ${isOpen ? "open" : ""}`} size={15} />
                            </button>
                            {isOpen && group.items.map(([label, path]) => (
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `sidebar-link sidebar-sub-link ${isActive ? "active" : ""}`
                                    }
                                    key={path}
                                >
                                    <ChevronRight size={14} />
                                    <span>{label}</span>
                                </NavLink>
                            ))}
                        </div>
                    );
                })}

            </nav>
        </aside>
    );
}

export default Sidebar;

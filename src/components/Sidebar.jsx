import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    Building2,
    BriefcaseBusiness,
} from "lucide-react";

function Sidebar() {
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

                <NavLink
                    to="/students"
                    className={({ isActive }) =>
                        `sidebar-link ${isActive ? "active" : ""}`
                    }
                >
                    <Users size={20} />
                    <span>Students</span>
                </NavLink>

                <NavLink
                    to="/teachers"
                    className={({ isActive }) =>
                        `sidebar-link ${isActive ? "active" : ""}`
                    }
                >
                    <GraduationCap size={20} />
                    <span>Teachers</span>
                </NavLink>

                <NavLink
                    to="/classes"
                    className={({ isActive }) =>
                        `sidebar-link ${isActive ? "active" : ""}`
                    }
                >
                    <Building2 size={20} />
                    <span>Classes</span>
                </NavLink>

                <NavLink
                    to="/staff"
                    className={({ isActive }) =>
                        `sidebar-link ${isActive ? "active" : ""}`
                    }
                >
                    <BriefcaseBusiness size={20} />
                    <span>Staff</span>
                </NavLink>

            </nav>
        </aside>
    );
}

export default Sidebar;

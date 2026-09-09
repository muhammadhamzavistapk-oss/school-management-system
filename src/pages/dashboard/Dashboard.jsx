// function Dashboard() {
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <p>Dashboard is working.</p>
//         </div>
//     );
// }

// export default Dashboard;
import {
    Users,
    GraduationCap,
    Building2,
    UserCheck,
    TrendingUp,
    CalendarCheck,
    ArrowUpRight,
} from "lucide-react";

function Dashboard() {
    const stats = [
        {
            title: "Total Students",
            value: "1,248",
            change: "+12.5%",
            icon: Users,
        },
        {
            title: "Total Teachers",
            value: "86",
            change: "+4.8%",
            icon: GraduationCap,
        },
        {
            title: "Total Classes",
            value: "42",
            change: "+3.2%",
            icon: Building2,
        },
        {
            title: "Today's Attendance",
            value: "94.6%",
            change: "+2.1%",
            icon: UserCheck,
        },
    ];

    const recentStudents = [
        {
            id: "STU-001",
            name: "Ali Khan",
            className: "10th",
            section: "A",
            status: "Active",
        },
        {
            id: "STU-002",
            name: "Ahmed Raza",
            className: "9th",
            section: "B",
            status: "Active",
        },
        {
            id: "STU-003",
            name: "Sara Ahmed",
            className: "8th",
            section: "A",
            status: "Active",
        },
        {
            id: "STU-004",
            name: "Usman Ali",
            className: "10th",
            section: "B",
            status: "Inactive",
        },
        {
            id: "STU-005",
            name: "Ayesha Khan",
            className: "7th",
            section: "A",
            status: "Active",
        },
    ];

    const attendance = [
        { day: "Mon", value: 92 },
        { day: "Tue", value: 95 },
        { day: "Wed", value: 91 },
        { day: "Thu", value: 97 },
        { day: "Fri", value: 94 },
        { day: "Sat", value: 89 },
    ];

    return (
        <div className="dashboard-page">

            {/* Header */}

            <div className="dashboard-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>
                        Welcome back, Admin. Here's what's happening
                        in your school today.
                    </p>
                </div>

                <button className="primary-button">
                    <CalendarCheck size={18} />
                    View Attendance
                </button>
            </div>

            {/* Statistics */}

            <div className="stats-grid">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div className="stat-card" key={stat.title}>

                            <div className="stat-top">
                                <div className="stat-icon">
                                    <Icon size={22} />
                                </div>

                                <span className="stat-change">
                                    <TrendingUp size={14} />
                                    {stat.change}
                                </span>
                            </div>

                            <div className="stat-value">
                                {stat.value}
                            </div>

                            <div className="stat-title">
                                {stat.title}
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* Main Grid */}

            <div className="dashboard-grid">

                {/* Attendance Chart */}

                <section className="dashboard-card attendance-card">

                    <div className="card-header">
                        <div>
                            <h2>Weekly Attendance</h2>
                            <p>Average attendance for this week</p>
                        </div>

                        <span className="attendance-percentage">
                            93.0%
                        </span>
                    </div>

                    <div className="chart">

                        {attendance.map((item) => (
                            <div
                                className="chart-column"
                                key={item.day}
                            >
                                <div className="chart-value">
                                    {item.value}%
                                </div>

                                <div className="chart-bar-wrapper">
                                    <div
                                        className="chart-bar"
                                        style={{
                                            height: `${item.value}%`,
                                        }}
                                    ></div>
                                </div>

                                <span>{item.day}</span>
                            </div>
                        ))}

                    </div>

                </section>

                {/* Quick Actions */}

                <section className="dashboard-card">

                    <div className="card-header">
                        <div>
                            <h2>Quick Actions</h2>
                            <p>Frequently used actions</p>
                        </div>
                    </div>

                    <div className="quick-actions">

                        <button className="quick-action">
                            <Users size={20} />
                            <span>Add Student</span>
                            <ArrowUpRight size={16} />
                        </button>

                        <button className="quick-action">
                            <GraduationCap size={20} />
                            <span>Add Teacher</span>
                            <ArrowUpRight size={16} />
                        </button>

                        <button className="quick-action">
                            <Building2 size={20} />
                            <span>Create Class</span>
                            <ArrowUpRight size={16} />
                        </button>

                        <button className="quick-action">
                            <CalendarCheck size={20} />
                            <span>Mark Attendance</span>
                            <ArrowUpRight size={16} />
                        </button>

                    </div>

                </section>

            </div>

            {/* Recent Students */}

            <section className="dashboard-card recent-students">

                <div className="card-header">

                    <div>
                        <h2>Recent Students</h2>
                        <p>Recently added students</p>
                    </div>

                    <button className="view-all-button">
                        View All
                        <ArrowUpRight size={16} />
                    </button>

                </div>

                <div className="table-wrapper">

                    <table>

                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Student</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            {recentStudents.map((student) => (
                                <tr key={student.id}>

                                    <td>
                                        <strong>{student.id}</strong>
                                    </td>

                                    <td>
                                        <div className="student-cell">
                                            <div className="student-avatar">
                                                {student.name.charAt(0)}
                                            </div>

                                            <span>
                                                {student.name}
                                            </span>
                                        </div>
                                    </td>

                                    <td>{student.className}</td>

                                    <td>{student.section}</td>

                                    <td>
                                        <span
                                            className={
                                                student.status === "Active"
                                                    ? "status active"
                                                    : "status inactive"
                                            }
                                        >
                                            {student.status}
                                        </span>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </section>

        </div>
    );
}

export default Dashboard;

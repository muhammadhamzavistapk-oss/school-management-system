

// import { Routes, Route, Navigate } from "react-router-dom";

// import DashboardLayout from "./layouts/DashboardLayout";
// import Dashboard from "./pages/dashboard/Dashboard";

// // Student Pages
// import Students from "./pages/students/Students";
// import StudentForm from "./pages/students/StudentForm";
// import StudentDetails from "./pages/students/StudentDetails";

// // Teacher Pages
// import Teachers from "./pages/teachers/Teachers";
// import TeacherForm from "./pages/teachers/TeacherForm";
// import TeacherDetails from "./pages/teachers/TeacherDetails";

// // Class Pages
// import Classes from "./pages/classes/Classes";
// import ClassForm from "./pages/classes/ClassForm";
// import ClassDetails from "./pages/classes/ClassDetails";

// // Staff Pages
// import Staff from "./pages/staff/Staff";
// import StaffForm from "./pages/staff/StaffForm";
// import StaffDetails from "./pages/staff/StaffDetails";

// function App() {
//   return (
//     <Routes>
//       {/* =====================================
//           DASHBOARD LAYOUT
//       ===================================== */}
//       <Route element={<DashboardLayout />}>
//         {/* Dashboard */}
//         <Route path="/dashboard" element={<Dashboard />} />

//         {/* =================================
//             STUDENT ROUTES
//         ================================= */}
//         <Route path="/students" element={<Students />} />
//         <Route path="/students/add" element={<StudentForm />} />
//         <Route path="/students/edit/:id" element={<StudentForm />} />
//         <Route path="/students/:id" element={<StudentDetails />} />

//         {/* =================================
//             TEACHER ROUTES
//         ================================= */}
//         <Route path="/teachers" element={<Teachers />} />
//         <Route path="/teachers/add" element={<TeacherForm />} />
//         <Route path="/teachers/edit/:id" element={<TeacherForm />} />
//         <Route path="/teachers/:id" element={<TeacherDetails />} />

//         {/* =================================
//             CLASS ROUTES
//         ================================= */}
//         <Route path="/classes" element={<Classes />} />
//         <Route path="/classes/add" element={<ClassForm />} />
//         <Route path="/classes/edit/:id" element={<ClassForm />} />
//         <Route path="/classes/:id" element={<ClassDetails />} />

//         {/* =================================
//             STAFF ROUTES
//         ================================= */}
//         <Route path="/staff" element={<Staff />} />
//         <Route path="/staff/add" element={<StaffForm />} />
//         <Route path="/staff/edit/:id" element={<StaffForm />} />
//         <Route path="/staff/:id" element={<StaffDetails />} />
//       </Route>

//       {/* =====================================
//           DEFAULT & CATCH-ALL ROUTES
//       ===================================== */}
//       <Route path="/" element={<Navigate to="/dashboard" replace />} />
//       <Route path="*" element={<Navigate to="/dashboard" replace />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";

// Student Pages
import Students from "./pages/students/Students";
import StudentForm from "./pages/students/StudentForm";
import StudentDetails from "./pages/students/StudentDetails";

// Teacher Pages
import Teachers from "./pages/teachers/Teachers";
import TeacherForm from "./pages/teachers/TeacherForm";
import TeacherDetails from "./pages/teachers/TeacherDetails";

// Class Pages
import Classes from "./pages/classes/Classes";
import ClassForm from "./pages/classes/ClassForm";
import ClassDetails from "./pages/classes/ClassDetails";

// Staff Pages
import Staff from "./pages/staff/Staff";
import StaffForm from "./pages/staff/StaffForm";
import StaffDetails from "./pages/staff/StaffDetails";
import ModulePage from "./pages/shared/ModulePage";

const modulePages = [
  ["/academic-years", "Academic Years", "Define the active academic sessions and school calendar.", "Create Academic Year"],
  ["/sections", "Sections", "Organize classes into sections and manage their capacity.", "Add Section"],
  ["/subjects", "Subjects", "Manage the subjects offered across your academic programs.", "Add Subject"],
  ["/enrollments", "Enrollments", "Place students in the right classes and academic sessions.", "New Enrollment"],
  ["/teacher-assignments", "Teacher Assignments", "Connect teachers with subjects, classes, and sections.", "Assign Teacher"],
  ["/timetable", "Timetable", "Plan lessons and keep the school day running smoothly.", "Create Timetable"],
  ["/student-attendance", "Student Attendance", "Record and review daily student attendance.", "Mark Attendance"],
  ["/teacher-attendance", "Teacher Attendance", "Track staff attendance and availability.", "Mark Attendance"],
  ["/exams", "Exams", "Schedule examinations and manage their assessment structure.", "Create Exam"],
  ["/results", "Results", "Review academic performance and publish examination results.", "Add Result"],
  ["/fees", "Fees", "Set up fee structures and monitor student fee obligations.", "Create Fee"],
  ["/payments", "Payments", "Record payments and keep financial transactions organized.", "Record Payment"],
  ["/fee-reports", "Fee Reports", "Review collections, outstanding balances, and fee trends.", "Export Report"],
  ["/notices", "Notices", "Share important updates with students, staff, and families.", "Create Notice"],
  ["/events", "Events", "Plan school events and keep the community informed.", "Add Event"],
  ["/student-report", "Student Report", "Generate detailed reports for individual students.", "Generate Report"],
  ["/attendance-report", "Attendance Report", "Analyze attendance patterns across the school.", "Generate Report"],
  ["/fee-report", "Fee Report", "Analyze fee collection and outstanding payments.", "Generate Report"],
  ["/result-report", "Result Report", "Compare results and understand academic performance.", "Generate Report"],
  ["/settings", "School Settings", "Configure school identity, preferences, and administration.", "Save Changes"],
];

const moduleItems = (title) => [
  { name: `${title} workspace`, detail: "Ready for your school data" },
  { name: "Quick actions", detail: "Use the button above to get started" },
];

function App() {
  return (
    <Routes>

      <Route element={<DashboardLayout />}>

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Students */}
        <Route path="/students" element={<Students />} />
        <Route path="/students/add" element={<StudentForm />} />
        <Route path="/students/edit/:id" element={<StudentForm />} />
        <Route path="/students/:id" element={<StudentDetails />} />

        {/* Teachers */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/add" element={<TeacherForm />} />
        <Route path="/teachers/edit/:id" element={<TeacherForm />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />

        {/* Classes */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/add" element={<ClassForm />} />
        <Route path="/classes/edit/:id" element={<ClassForm />} />
        <Route path="/classes/:id" element={<ClassDetails />} />

        {/* Staff */}
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff/add" element={<StaffForm />} />
        <Route path="/staff/edit/:id" element={<StaffForm />} />
        <Route path="/staff/:id" element={<StaffDetails />} />

        {modulePages.map(([path, title, description, actionLabel]) => (
          <Route
            key={path}
            path={path}
            element={(
              <ModulePage
                title={title}
                description={description}
                actionLabel={actionLabel}
                items={moduleItems(title)}
              />
            )}
          />
        ))}

      </Route>

      {/* Default */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  );
}

export default App;
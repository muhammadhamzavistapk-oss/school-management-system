

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
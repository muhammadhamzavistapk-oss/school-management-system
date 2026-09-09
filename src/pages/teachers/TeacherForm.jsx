// // import { useState } from "react";
// // import { ArrowLeft, Save } from "lucide-react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import "./Teacher.css";

// // const teachers = [
// //     {
// //         id: "TCH-001",
// //         name: "Ahmed Khan",
// //         email: "[ahmed.khan@example.com](mailto:ahmed.khan@example.com)",
// //         phone: "03001234567",
// //         department: "Computer Science",
// //         designation: "Senior Teacher",
// //         qualification: "M.Sc Computer Science",
// //         gender: "Male",
// //         joiningDate: "2021-08-15",
// //         address: "Lahore",
// //         status: "Active",
// //     },
// //     {
// //         id: "TCH-002",
// //         name: "Sara Ahmed",
// //         email: "[sara.ahmed@example.com](mailto:sara.ahmed@example.com)",
// //         phone: "03111234567",
// //         department: "English",
// //         designation: "Teacher",
// //         qualification: "M.A English",
// //         gender: "Female",
// //         joiningDate: "2022-03-10",
// //         address: "Lahore",
// //         status: "Active",
// //     },
// //     {
// //         id: "TCH-003",
// //         name: "Usman Raza",
// //         email: "[usman.raza@example.com](mailto:usman.raza@example.com)",
// //         phone: "03221234567",
// //         department: "Mathematics",
// //         designation: "Senior Teacher",
// //         qualification: "M.Sc Mathematics",
// //         gender: "Male",
// //         joiningDate: "2020-01-20",
// //         address: "Raiwind",
// //         status: "Active",
// //     },
// //     {
// //         id: "TCH-004",
// //         name: "Ayesha Malik",
// //         email: "[ayesha.malik@example.com](mailto:ayesha.malik@example.com)",
// //         phone: "03331234567",
// //         department: "Science",
// //         designation: "Teacher",
// //         qualification: "M.Sc Physics",
// //         gender: "Female",
// //         joiningDate: "2023-09-01",
// //         address: "Lahore",
// //         status: "Inactive",
// //     },
// //     {
// //         id: "TCH-005",
// //         name: "Bilal Hussain",
// //         email: "[bilal.hussain@example.com](mailto:bilal.hussain@example.com)",
// //         phone: "03441234567",
// //         department: "Computer Science",
// //         designation: "Teacher",
// //         qualification: "MCS",
// //         gender: "Male",
// //         joiningDate: "2024-01-15",
// //         address: "Lahore",
// //         status: "Active",
// //     },
// // ];

// // const emptyForm = {
// //     name: "",
// //     email: "",
// //     phone: "",
// //     department: "",
// //     designation: "",
// //     qualification: "",
// //     gender: "",
// //     joiningDate: "",
// //     address: "",
// //     status: "Active",
// // };

// // function TeacherForm() {
// //     const { id } = useParams();
// //     const navigate = useNavigate();


// //     const isEditMode = Boolean(id);

// //     const existingTeacher = isEditMode
// //         ? teachers.find((teacher) => teacher.id === id)
// //         : null;

// //     const [formData, setFormData] = useState(
// //         existingTeacher || emptyForm
// //     );

// //     const [errors, setErrors] = useState({});

// //     const handleChange = (event) => {
// //         const { name, value } = event.target;

// //         setFormData((previousData) => ({
// //             ...previousData,
// //             [name]: value,
// //         }));

// //         if (errors[name]) {
// //             setErrors((previousErrors) => ({
// //                 ...previousErrors,
// //                 [name]: "",
// //             }));
// //         }
// //     };

// //     const validateForm = () => {
// //         const newErrors = {};

// //         if (!formData.name.trim()) {
// //             newErrors.name = "Full name is required.";
// //         }

// //         if (!formData.email.trim()) {
// //             newErrors.email = "Email is required.";
// //         }

// //         if (!formData.phone.trim()) {
// //             newErrors.phone = "Phone number is required.";
// //         }

// //         if (!formData.department) {
// //             newErrors.department = "Department is required.";
// //         }

// //         if (!formData.designation) {
// //             newErrors.designation = "Designation is required.";
// //         }

// //         if (!formData.qualification.trim()) {
// //             newErrors.qualification = "Qualification is required.";
// //         }

// //         if (!formData.gender) {
// //             newErrors.gender = "Gender is required.";
// //         }

// //         if (!formData.joiningDate) {
// //             newErrors.joiningDate = "Joining date is required.";
// //         }

// //         setErrors(newErrors);

// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();

// //         if (!validateForm()) {
// //             return;
// //         }

// //         if (isEditMode) {
// //             console.log("Updating teacher:", {
// //                 id,
// //                 ...formData,
// //             });

// //             alert("Teacher updated successfully.");
// //         } else {
// //             console.log("Creating teacher:", formData);

// //             alert("Teacher added successfully.");
// //         }

// //         navigate("/teachers");
// //     };

// //     if (isEditMode && !existingTeacher) {
// //         return (
// //             <div className="teacher-page">
// //                 <div className="teacher-details-not-found">
// //                     <h2>Teacher Not Found</h2>

// //                     <p>
// //                         The teacher with ID "{id}" could not be found.
// //                     </p>

// //                     <Link
// //                         to="/teachers"
// //                         className="teacher-cancel-btn"
// //                     >
// //                         <ArrowLeft size={17} />
// //                         Back to Teachers
// //                     </Link>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="teacher-page">

// //             {/* Page Header */}
// //             <div className="teacher-page-header">
// //                 <div>
// //                     <Link
// //                         to="/teachers"
// //                         className="teacher-back-btn"
// //                     >
// //                         <ArrowLeft size={17} />
// //                         Back to Teachers
// //                     </Link>

// //                     <h1>
// //                         {isEditMode
// //                             ? "Edit Teacher"
// //                             : "Add Teacher"}
// //                     </h1>

// //                     <p>
// //                         {isEditMode
// //                             ? "Update teacher information."
// //                             : "Add a new teacher to the school system."}
// //                     </p>
// //                 </div>
// //             </div>

// //             {/* Form */}
// //             <form onSubmit={handleSubmit}>

// //                 {/* Error Message */}
// //                 {Object.keys(errors).length > 0 && (
// //                     <div className="teacher-form-error">
// //                         Please fill in all required fields.
// //                     </div>
// //                 )}

// //                 {/* Personal Information */}
// //                 <div className="teacher-form-section">

// //                     <div className="teacher-form-section-header">
// //                         <h2>Personal Information</h2>

// //                         <p>
// //                             Enter the teacher's basic personal details.
// //                         </p>
// //                     </div>

// //                     <div className="teacher-form-grid">

// //                         {/* Full Name */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="name">
// //                                 Full Name *
// //                             </label>

// //                             <input
// //                                 id="name"
// //                                 name="name"
// //                                 type="text"
// //                                 placeholder="Enter full name"
// //                                 value={formData.name}
// //                                 onChange={handleChange}
// //                             />

// //                             {errors.name && (
// //                                 <span className="teacher-field-error">
// //                                     {errors.name}
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Email */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="email">
// //                                 Email *
// //                             </label>

// //                             <input
// //                                 id="email"
// //                                 name="email"
// //                                 type="email"
// //                                 placeholder="teacher@example.com"
// //                                 value={formData.email}
// //                                 onChange={handleChange}
// //                             />

// //                             {errors.email && (
// //                                 <span className="teacher-field-error">
// //                                     {errors.email}
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Phone */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="phone">
// //                                 Phone *
// //                             </label>

// //                             <input
// //                                 id="phone"
// //                                 name="phone"
// //                                 type="tel"
// //                                 placeholder="03001234567"
// //                                 value={formData.phone}
// //                                 onChange={handleChange}
// //                             />

// //                             {errors.phone && (
// //                                 <span className="teacher-field-error">
// //                                     {errors.phone}
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Gender */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="gender">
// //                                 Gender *
// //                             </label>

// //                             <select
// //                                 id="gender"
// //                                 name="gender"
// //                                 value={formData.gender}
// //                                 onChange={handleChange}
// //                             >
// //                                 <option value="">
// //                                     Select Gender
// //                                 </option>

// //                                 <option value="Male">
// //                                     Male
// //                                 </option>

// //                                 <option value="Female">
// //                                     Female
// //                                 </option>
// //                             </select>

// //                             {errors.gender && (
// //                                 <span className="teacher-field-error">
// //                                     {errors.gender}
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Address */}
// //                         <div className="teacher-form-group full-width">
// //                             <label htmlFor="address">
// //                                 Address
// //                             </label>

// //                             <textarea
// //                                 id="address"
// //                                 name="address"
// //                                 placeholder="Enter address"
// //                                 value={formData.address}
// //                                 onChange={handleChange}
// //                             />
// //                         </div>

// //                     </div>
// //                 </div>

// //                 {/* Professional Information */}
// //                 <div className="teacher-form-section">

// //                     <div className="teacher-form-section-header">
// //                         <h2>Professional Information</h2>

// //                         <p>
// //                             Enter the teacher's professional details.
// //                         </p>
// //                     </div>

// //                     <div className="teacher-form-grid">

// //                         {/* Department */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="department">
// //                                 Department *
// //                             </label>

// //                             <select
// //                                 id="department"
// //                                 name="department"
// //                                 value={formData.department}
// //                                 onChange={handleChange}
// //                             >
// //                                 <option value="">
// //                                     Select Department
// //                                 </option>

// //                                 <option value="Computer Science">
// //                                     Computer Science
// //                                 </option>

// //                                 <option value="English">
// //                                     English
// //                                 </option>

// //                                 <option value="Mathematics">
// //                                     Mathematics
// //                                 </option>

// //                                 <option value="Science">
// //                                     Science
// //                                 </option>
// //                             </select>

// //                             {errors.department && (
// //                                 <span className="teacher-field-error">
// //                                     {errors.department}
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Designation */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="designation">
// //                                 Designation *
// //                             </label>

// //                             <select
// //                                 id="designation"
// //                                 name="designation"
// //                                 value={formData.designation}
// //                                 onChange={handleChange}
// //                             >
// //                                 <option value="">
// //                                     Select Designation
// //                                 </option>

// //                                 <option value="Teacher">
// //                                     Teacher
// //                                 </option>

// //                                 <option value="Senior Teacher">
// //                                     Senior Teacher
// //                                 </option>

// //                                 <option value="Head Teacher">
// //                                     Head Teacher
// //                                 </option>

// //                                 <option value="Coordinator">
// //                                     Coordinator
// //                                 </option>
// //                             </select>

// //                             {errors.designation && (
// //                                 <span className="teacher-field-error">
// //                                     {errors.designation}
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Qualification */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="qualification">
// //                                 Qualification *
// //                             </label>

// //                             <input
// //                                 id="qualification"
// //                                 name="qualification"
// //                                 type="text"
// //                                 placeholder="e.g. M.Sc Computer Science"
// //                                 value={formData.qualification}
// //                                 onChange={handleChange}
// //                             />

// //                             {errors.qualification && (
// //                                 <span className="teacher-field-error">
// //                                     {errors.qualification}
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Joining Date */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="joiningDate">
// //                                 Joining Date *
// //                             </label>

// //                             <input
// //                                 id="joiningDate"
// //                                 name="joiningDate"
// //                                 type="date"
// //                                 value={formData.joiningDate}
// //                                 onChange={handleChange}
// //                             />

// //                             {errors.joiningDate && (
// //                                 <span className="teacher-field-error">
// //                                     {errors.joiningDate}
// //                                 </span>
// //                             )}
// //                         </div>

// //                         {/* Status */}
// //                         <div className="teacher-form-group">
// //                             <label htmlFor="status">
// //                                 Status
// //                             </label>

// //                             <select
// //                                 id="status"
// //                                 name="status"
// //                                 value={formData.status}
// //                                 onChange={handleChange}
// //                             >
// //                                 <option value="Active">
// //                                     Active
// //                                 </option>

// //                                 <option value="Inactive">
// //                                     Inactive
// //                                 </option>
// //                             </select>
// //                         </div>

// //                     </div>
// //                 </div>

// //                 {/* Form Actions */}
// //                 <div className="teacher-form-actions">

// //                     <Link
// //                         to="/teachers"
// //                         className="teacher-cancel-btn"
// //                     >
// //                         Cancel
// //                     </Link>

// //                     <button
// //                         type="submit"
// //                         className="save-teacher-btn"
// //                     >
// //                         <Save size={17} />

// //                         {isEditMode
// //                             ? "Update Teacher"
// //                             : "Save Teacher"}
// //                     </button>

// //                 </div>

// //             </form>
// //         </div>
// //     );


// // }

// // export default TeacherForm;

// import { useState } from "react";
// import { ArrowLeft, Save } from "lucide-react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import "./Teacher.css";

// const STORAGE_KEY = "school_teachers";

// const defaultTeachers = [
//     {
//         id: "TCH-001",
//         name: "Ahmed Khan",
//         email: "[ahmed.khan@example.com](mailto:ahmed.khan@example.com)",
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
//         email: "[sara.ahmed@example.com](mailto:sara.ahmed@example.com)",
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
//         email: "[usman.raza@example.com](mailto:usman.raza@example.com)",
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
//         email: "[ayesha.malik@example.com](mailto:ayesha.malik@example.com)",
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
//         email: "[bilal.hussain@example.com](mailto:bilal.hussain@example.com)",
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

// const emptyForm = {
//     name: "",
//     email: "",
//     phone: "",
//     department: "",
//     designation: "",
//     qualification: "",
//     gender: "",
//     joiningDate: "",
//     address: "",
//     status: "Active",
// };

// function getTeachers() {
//     const savedTeachers = localStorage.getItem(STORAGE_KEY);

//     if (!savedTeachers) {
//         localStorage.setItem(
//             STORAGE_KEY,
//             JSON.stringify(defaultTeachers)
//         );

//         return defaultTeachers;
//     }

//     try {
//         return JSON.parse(savedTeachers);
//     } catch {
//         localStorage.setItem(
//             STORAGE_KEY,
//             JSON.stringify(defaultTeachers)
//         );

//         return defaultTeachers;
//     }


// }

// function TeacherForm() {
//     const { id } = useParams();
//     const navigate = useNavigate();


//     const isEditMode = Boolean(id);

//     const teachers = getTeachers();

//     const existingTeacher = isEditMode
//         ? teachers.find((teacher) => teacher.id === id)
//         : null;

//     const [formData, setFormData] = useState(
//         existingTeacher || emptyForm
//     );

//     const [errors, setErrors] = useState({});

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormData((previousData) => ({
//             ...previousData,
//             [name]: value,
//         }));

//         setErrors((previousErrors) => ({
//             ...previousErrors,
//             [name]: "",
//         }));
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         const name = formData.name.trim();
//         const email = formData.email.trim();
//         const phone = formData.phone.trim();
//         const qualification = formData.qualification.trim();

//         if (!name) {
//             newErrors.name = "Full name is required.";
//         }

//         if (!email) {
//             newErrors.email = "Email is required.";
//         } else if (
//             !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//         ) {
//             newErrors.email = "Please enter a valid email address.";
//         }

//         if (!phone) {
//             newErrors.phone = "Phone number is required.";
//         }

//         if (!formData.department) {
//             newErrors.department = "Department is required.";
//         }

//         if (!formData.designation) {
//             newErrors.designation = "Designation is required.";
//         }

//         if (!qualification) {
//             newErrors.qualification =
//                 "Qualification is required.";
//         }

//         if (!formData.gender) {
//             newErrors.gender = "Gender is required.";
//         }

//         if (!formData.joiningDate) {
//             newErrors.joiningDate =
//                 "Joining date is required.";
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };

//     const generateTeacherId = (teachersList) => {
//         const numbers = teachersList
//             .map((teacher) => {
//                 const match = teacher.id.match(/^TCH-(\d+)$/);

//                 return match ? Number(match[1]) : 0;
//             })
//             .filter((number) => number > 0);

//         const nextNumber =
//             numbers.length > 0
//                 ? Math.max(...numbers) + 1
//                 : 1;

//         return `TCH-${String(nextNumber).padStart(3, "0")}`;
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (!validateForm()) {
//             return;
//         }

//         const currentTeachers = getTeachers();

//         const cleanedData = {
//             ...formData,
//             name: formData.name.trim(),
//             email: formData.email.trim(),
//             phone: formData.phone.trim(),
//             qualification: formData.qualification.trim(),
//             address: formData.address.trim(),
//         };

//         if (isEditMode) {
//             const teacherExists = currentTeachers.some(
//                 (teacher) => teacher.id === id
//             );

//             if (!teacherExists) {
//                 alert("Teacher not found.");
//                 navigate("/teachers");
//                 return;
//             }

//             const updatedTeachers = currentTeachers.map(
//                 (teacher) =>
//                     teacher.id === id
//                         ? {
//                             ...cleanedData,
//                             id: teacher.id,
//                         }
//                         : teacher
//             );

//             localStorage.setItem(
//                 STORAGE_KEY,
//                 JSON.stringify(updatedTeachers)
//             );

//             alert("Teacher updated successfully.");
//         } else {
//             const newTeacher = {
//                 ...cleanedData,
//                 id: generateTeacherId(currentTeachers),
//             };

//             const updatedTeachers = [
//                 ...currentTeachers,
//                 newTeacher,
//             ];

//             localStorage.setItem(
//                 STORAGE_KEY,
//                 JSON.stringify(updatedTeachers)
//             );

//             alert("Teacher added successfully.");
//         }

//         navigate("/teachers");
//     };

//     if (isEditMode && !existingTeacher) {
//         return (
//             <div className="teacher-page">
//                 <div className="teacher-details-not-found">
//                     <h2>Teacher Not Found</h2>

//                     <p>
//                         The teacher with ID "{id}" could not be found.
//                     </p>

//                     <Link
//                         to="/teachers"
//                         className="teacher-cancel-btn"
//                     >
//                         <ArrowLeft size={17} />
//                         Back to Teachers
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="teacher-page">

//             {/* Page Header */}
//             <div className="teacher-page-header">
//                 <div>
//                     <Link
//                         to="/teachers"
//                         className="teacher-back-btn"
//                     >
//                         <ArrowLeft size={17} />
//                         Back to Teachers
//                     </Link>

//                     <h1>
//                         {isEditMode
//                             ? "Edit Teacher"
//                             : "Add Teacher"}
//                     </h1>

//                     <p>
//                         {isEditMode
//                             ? "Update teacher information."
//                             : "Add a new teacher to the school system."}
//                     </p>
//                 </div>
//             </div>

//             <form onSubmit={handleSubmit}>

//                 {Object.keys(errors).length > 0 && (
//                     <div className="teacher-form-error">
//                         Please correct the highlighted fields.
//                     </div>
//                 )}

//                 {/* Personal Information */}
//                 <div className="teacher-form-section">

//                     <div className="teacher-form-section-header">
//                         <h2>Personal Information</h2>

//                         <p>
//                             Enter the teacher's basic personal details.
//                         </p>
//                     </div>

//                     <div className="teacher-form-grid">

//                         {/* Full Name */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="name">
//                                 Full Name *
//                             </label>

//                             <input
//                                 id="name"
//                                 name="name"
//                                 type="text"
//                                 placeholder="Enter full name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                             />

//                             {errors.name && (
//                                 <span className="teacher-field-error">
//                                     {errors.name}
//                                 </span>
//                             )}
//                         </div>

//                         {/* Email */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="email">
//                                 Email *
//                             </label>

//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 placeholder="teacher@example.com"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />

//                             {errors.email && (
//                                 <span className="teacher-field-error">
//                                     {errors.email}
//                                 </span>
//                             )}
//                         </div>

//                         {/* Phone */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="phone">
//                                 Phone *
//                             </label>

//                             <input
//                                 id="phone"
//                                 name="phone"
//                                 type="tel"
//                                 placeholder="03001234567"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                             />

//                             {errors.phone && (
//                                 <span className="teacher-field-error">
//                                     {errors.phone}
//                                 </span>
//                             )}
//                         </div>

//                         {/* Gender */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="gender">
//                                 Gender *
//                             </label>

//                             <select
//                                 id="gender"
//                                 name="gender"
//                                 value={formData.gender}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">
//                                     Select Gender
//                                 </option>

//                                 <option value="Male">
//                                     Male
//                                 </option>

//                                 <option value="Female">
//                                     Female
//                                 </option>
//                             </select>

//                             {errors.gender && (
//                                 <span className="teacher-field-error">
//                                     {errors.gender}
//                                 </span>
//                             )}
//                         </div>

//                         {/* Address */}
//                         <div className="teacher-form-group full-width">
//                             <label htmlFor="address">
//                                 Address
//                             </label>

//                             <textarea
//                                 id="address"
//                                 name="address"
//                                 placeholder="Enter address"
//                                 value={formData.address}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                     </div>
//                 </div>

//                 {/* Professional Information */}
//                 <div className="teacher-form-section">

//                     <div className="teacher-form-section-header">
//                         <h2>Professional Information</h2>

//                         <p>
//                             Enter the teacher's professional details.
//                         </p>
//                     </div>

//                     <div className="teacher-form-grid">

//                         {/* Department */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="department">
//                                 Department *
//                             </label>

//                             <select
//                                 id="department"
//                                 name="department"
//                                 value={formData.department}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">
//                                     Select Department
//                                 </option>

//                                 <option value="Computer Science">
//                                     Computer Science
//                                 </option>

//                                 <option value="English">
//                                     English
//                                 </option>

//                                 <option value="Mathematics">
//                                     Mathematics
//                                 </option>

//                                 <option value="Science">
//                                     Science
//                                 </option>
//                             </select>

//                             {errors.department && (
//                                 <span className="teacher-field-error">
//                                     {errors.department}
//                                 </span>
//                             )}
//                         </div>

//                         {/* Designation */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="designation">
//                                 Designation *
//                             </label>

//                             <select
//                                 id="designation"
//                                 name="designation"
//                                 value={formData.designation}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">
//                                     Select Designation
//                                 </option>

//                                 <option value="Teacher">
//                                     Teacher
//                                 </option>

//                                 <option value="Senior Teacher">
//                                     Senior Teacher
//                                 </option>

//                                 <option value="Head Teacher">
//                                     Head Teacher
//                                 </option>

//                                 <option value="Coordinator">
//                                     Coordinator
//                                 </option>
//                             </select>

//                             {errors.designation && (
//                                 <span className="teacher-field-error">
//                                     {errors.designation}
//                                 </span>
//                             )}
//                         </div>

//                         {/* Qualification */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="qualification">
//                                 Qualification *
//                             </label>

//                             <input
//                                 id="qualification"
//                                 name="qualification"
//                                 type="text"
//                                 placeholder="e.g. M.Sc Computer Science"
//                                 value={formData.qualification}
//                                 onChange={handleChange}
//                             />

//                             {errors.qualification && (
//                                 <span className="teacher-field-error">
//                                     {errors.qualification}
//                                 </span>
//                             )}
//                         </div>

//                         {/* Joining Date */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="joiningDate">
//                                 Joining Date *
//                             </label>

//                             <input
//                                 id="joiningDate"
//                                 name="joiningDate"
//                                 type="date"
//                                 value={formData.joiningDate}
//                                 onChange={handleChange}
//                             />

//                             {errors.joiningDate && (
//                                 <span className="teacher-field-error">
//                                     {errors.joiningDate}
//                                 </span>
//                             )}
//                         </div>

//                         {/* Status */}
//                         <div className="teacher-form-group">
//                             <label htmlFor="status">
//                                 Status
//                             </label>

//                             <select
//                                 id="status"
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleChange}
//                             >
//                                 <option value="Active">
//                                     Active
//                                 </option>

//                                 <option value="Inactive">
//                                     Inactive
//                                 </option>
//                             </select>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Form Actions */}
//                 <div className="teacher-form-actions">

//                     <Link
//                         to="/teachers"
//                         className="teacher-cancel-btn"
//                     >
//                         Cancel
//                     </Link>

//                     <button
//                         type="submit"
//                         className="save-teacher-btn"
//                     >
//                         <Save size={17} />

//                         {isEditMode
//                             ? "Update Teacher"
//                             : "Save Teacher"}
//                     </button>

//                 </div>

//             </form>
//         </div>
//     );


// }

// export default TeacherForm;

import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import {
    Link,
    useNavigate,
    useParams,
} from "react-router-dom";
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

const emptyForm = {
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    qualification: "",
    gender: "",
    joiningDate: "",
    address: "",
    status: "Active",
};

const getTeachers = () => {
    try {
        const savedTeachers =
            localStorage.getItem(STORAGE_KEY);

        if (!savedTeachers) {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(defaultTeachers)
            );

            return defaultTeachers;
        }

        const parsedTeachers =
            JSON.parse(savedTeachers);

        if (Array.isArray(parsedTeachers)) {
            return parsedTeachers;
        }

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(defaultTeachers)
        );

        return defaultTeachers;
    } catch (error) {
        console.error(
            "Error loading teachers:",
            error
        );

        return defaultTeachers;
    }
};

const generateTeacherId = (teachers) => {
    const numbers = teachers
        .map((teacher) => {
            const match =
                teacher.id?.match(/^TCH-(\d+)$/);

            return match
                ? Number(match[1])
                : 0;
        })
        .filter((number) => number > 0);

    const nextNumber =
        numbers.length > 0
            ? Math.max(...numbers) + 1
            : 1;

    return `TCH-${String(nextNumber).padStart(3, "0")}`;
};

function TeacherForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isEditMode = Boolean(id);

    const teachers = getTeachers();

    const existingTeacher = isEditMode
        ? teachers.find(
            (teacher) => teacher.id === id
        )
        : null;

    const [formData, setFormData] = useState(
        existingTeacher || emptyForm
    );

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name =
                "Teacher name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email =
                "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        ) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone =
                "Phone number is required.";
        }

        if (!formData.department.trim()) {
            newErrors.department =
                "Department is required.";
        }

        if (!formData.designation.trim()) {
            newErrors.designation =
                "Designation is required.";
        }

        if (!formData.qualification.trim()) {
            newErrors.qualification =
                "Qualification is required.";
        }

        if (!formData.gender) {
            newErrors.gender =
                "Please select gender.";
        }

        if (!formData.joiningDate) {
            newErrors.joiningDate =
                "Joining date is required.";
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors =
            validateForm();

        if (
            Object.keys(validationErrors).length > 0
        ) {
            setErrors(validationErrors);
            return;
        }

        const cleanTeacher = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            department:
                formData.department.trim(),
            designation:
                formData.designation.trim(),
            qualification:
                formData.qualification.trim(),
            gender: formData.gender,
            joiningDate:
                formData.joiningDate,
            address:
                formData.address.trim(),
            status:
                formData.status || "Active",
        };

        let updatedTeachers;

        if (isEditMode) {
            updatedTeachers = teachers.map(
                (teacher) =>
                    teacher.id === id
                        ? {
                            ...teacher,
                            ...cleanTeacher,
                        }
                        : teacher
            );

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedTeachers)
            );

            alert(
                "Teacher updated successfully!"
            );
        } else {
            const newTeacher = {
                id: generateTeacherId(
                    teachers
                ),
                ...cleanTeacher,
            };

            updatedTeachers = [
                ...teachers,
                newTeacher,
            ];

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedTeachers)
            );

            console.log(
                "New teacher saved:",
                newTeacher
            );

            alert(
                `Teacher ${newTeacher.id} added successfully!`
            );
        }

        navigate("/teachers");
    };

    if (isEditMode && !existingTeacher) {
        return (
            <div className="teacher-page">

                <div className="teacher-page-header">

                    <div>
                        <h1>
                            Teacher Not Found
                        </h1>

                        <p>
                            The teacher you are trying
                            to edit does not exist.
                        </p>
                    </div>

                    <Link
                        to="/teachers"
                        className="teacher-back-btn"
                    >
                        <ArrowLeft size={18} />
                        Back to Teachers
                    </Link>

                </div>

            </div>
        );
    }

    return (
        <div className="teacher-page">

            {/* HEADER */}

            <div className="teacher-page-header">

                <div>
                    <h1>
                        {isEditMode
                            ? "Edit Teacher"
                            : "Add Teacher"}
                    </h1>

                    <p>
                        {isEditMode
                            ? "Update teacher information."
                            : "Create a new teacher record."}
                    </p>
                </div>

                <Link
                    to="/teachers"
                    className="teacher-back-btn"
                >
                    <ArrowLeft size={18} />
                    Back to Teachers
                </Link>

            </div>

            {/* FORM */}

            <form
                className="teacher-form"
                onSubmit={handleSubmit}
            >

                {/* PERSONAL INFORMATION */}

                <div className="teacher-form-card">

                    <div className="teacher-form-card-header">
                        <h2>
                            Personal Information
                        </h2>

                        <p>
                            Enter the teacher's basic
                            information.
                        </p>
                    </div>

                    <div className="teacher-form-grid">

                        {/* Name */}

                        <div className="teacher-form-group">

                            <label htmlFor="name">
                                Full Name
                                <span>*</span>
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={
                                    formData.name
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="Enter teacher name"
                            />

                            {errors.name && (
                                <small className="teacher-form-error">
                                    {errors.name}
                                </small>
                            )}

                        </div>

                        {/* Email */}

                        <div className="teacher-form-group">

                            <label htmlFor="email">
                                Email
                                <span>*</span>
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={
                                    formData.email
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="example@email.com"
                            />

                            {errors.email && (
                                <small className="teacher-form-error">
                                    {errors.email}
                                </small>
                            )}

                        </div>

                        {/* Phone */}

                        <div className="teacher-form-group">

                            <label htmlFor="phone">
                                Phone
                                <span>*</span>
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                value={
                                    formData.phone
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="03001234567"
                            />

                            {errors.phone && (
                                <small className="teacher-form-error">
                                    {errors.phone}
                                </small>
                            )}

                        </div>

                        {/* Gender */}

                        <div className="teacher-form-group">

                            <label htmlFor="gender">
                                Gender
                                <span>*</span>
                            </label>

                            <select
                                id="gender"
                                name="gender"
                                value={
                                    formData.gender
                                }
                                onChange={
                                    handleChange
                                }
                            >
                                <option value="">
                                    Select Gender
                                </option>

                                <option value="Male">
                                    Male
                                </option>

                                <option value="Female">
                                    Female
                                </option>

                                <option value="Other">
                                    Other
                                </option>
                            </select>

                            {errors.gender && (
                                <small className="teacher-form-error">
                                    {errors.gender}
                                </small>
                            )}

                        </div>

                        {/* Address */}

                        <div className="teacher-form-group teacher-form-full">

                            <label htmlFor="address">
                                Address
                            </label>

                            <textarea
                                id="address"
                                name="address"
                                rows="3"
                                value={
                                    formData.address
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="Enter teacher address"
                            />

                        </div>

                    </div>

                </div>

                {/* PROFESSIONAL INFORMATION */}

                <div className="teacher-form-card">

                    <div className="teacher-form-card-header">

                        <h2>
                            Professional Information
                        </h2>

                        <p>
                            Enter employment and
                            qualification details.
                        </p>

                    </div>

                    <div className="teacher-form-grid">

                        {/* Department */}

                        <div className="teacher-form-group">

                            <label htmlFor="department">
                                Department
                                <span>*</span>
                            </label>

                            <input
                                id="department"
                                name="department"
                                type="text"
                                value={
                                    formData.department
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="e.g. Computer Science"
                            />

                            {errors.department && (
                                <small className="teacher-form-error">
                                    {
                                        errors.department
                                    }
                                </small>
                            )}

                        </div>

                        {/* Designation */}

                        <div className="teacher-form-group">

                            <label htmlFor="designation">
                                Designation
                                <span>*</span>
                            </label>

                            <input
                                id="designation"
                                name="designation"
                                type="text"
                                value={
                                    formData.designation
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="e.g. Senior Teacher"
                            />

                            {errors.designation && (
                                <small className="teacher-form-error">
                                    {
                                        errors.designation
                                    }
                                </small>
                            )}

                        </div>

                        {/* Qualification */}

                        <div className="teacher-form-group">

                            <label htmlFor="qualification">
                                Qualification
                                <span>*</span>
                            </label>

                            <input
                                id="qualification"
                                name="qualification"
                                type="text"
                                value={
                                    formData.qualification
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="e.g. M.Sc Computer Science"
                            />

                            {errors.qualification && (
                                <small className="teacher-form-error">
                                    {
                                        errors.qualification
                                    }
                                </small>
                            )}

                        </div>

                        {/* Joining Date */}

                        <div className="teacher-form-group">

                            <label htmlFor="joiningDate">
                                Joining Date
                                <span>*</span>
                            </label>

                            <input
                                id="joiningDate"
                                name="joiningDate"
                                type="date"
                                value={
                                    formData.joiningDate
                                }
                                onChange={
                                    handleChange
                                }
                            />

                            {errors.joiningDate && (
                                <small className="teacher-form-error">
                                    {
                                        errors.joiningDate
                                    }
                                </small>
                            )}

                        </div>

                        {/* Status */}

                        <div className="teacher-form-group">

                            <label htmlFor="status">
                                Status
                            </label>

                            <select
                                id="status"
                                name="status"
                                value={
                                    formData.status
                                }
                                onChange={
                                    handleChange
                                }
                            >
                                <option value="Active">
                                    Active
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>
                            </select>

                        </div>

                    </div>

                </div>

                {/* ACTIONS */}

                <div className="teacher-form-actions">

                    <Link
                        to="/teachers"
                        className="teacher-cancel-btn"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="save-teacher-btn"
                    >
                        <Save size={18} />

                        {isEditMode
                            ? "Update Teacher"
                            : "Save Teacher"}
                    </button>

                </div>

            </form>

        </div>
    );
}

export default TeacherForm;


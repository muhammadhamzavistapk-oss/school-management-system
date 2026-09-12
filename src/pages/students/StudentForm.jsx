
// // import { useState } from "react";
// // import {
// //     ArrowLeft,
// //     Save,
// //     UserPlus,
// // } from "lucide-react";
// // import {
// //     Link,
// //     useNavigate,
// //     useParams,
// // } from "react-router-dom";

// // const STORAGE_KEY = "school_students";

// // const EMPTY_STUDENT = {
// //     name: "",
// //     email: "",
// //     phone: "",
// //     className: "",
// //     section: "",
// //     gender: "",
// //     dateOfBirth: "",
// //     address: "",
// //     guardianName: "",
// //     guardianPhone: "",
// //     status: "Active",
// // };

// // function getStudentById(id) {
// //     if (!id) {
// //         return EMPTY_STUDENT;
// //     }

// //     try {
// //         const savedStudents =
// //             localStorage.getItem(STORAGE_KEY);

// //         if (!savedStudents) {
// //             return EMPTY_STUDENT;
// //         }

// //         const students = JSON.parse(savedStudents);

// //         const student = students.find(
// //             (item) => item.id === id
// //         );

// //         if (!student) {
// //             return EMPTY_STUDENT;
// //         }

// //         return {
// //             name: student.name || "",
// //             email: student.email || "",
// //             phone: student.phone || "",
// //             className: student.className || "",
// //             section: student.section || "",
// //             gender: student.gender || "",
// //             dateOfBirth:
// //                 student.dateOfBirth || "",
// //             address: student.address || "",
// //             guardianName:
// //                 student.guardianName || "",
// //             guardianPhone:
// //                 student.guardianPhone || "",
// //             status: student.status || "Active",
// //         };
// //     } catch (error) {
// //         console.error(
// //             "Failed to load student:",
// //             error
// //         );

// //         return EMPTY_STUDENT;
// //     }
// // }

// // function generateStudentId(students) {
// //     const numbers = students
// //         .map((student) =>
// //             Number(
// //                 student.id.replace("STU-", "")
// //             )
// //         )
// //         .filter(
// //             (number) =>
// //                 !Number.isNaN(number)
// //         );

// //     const nextNumber =
// //         numbers.length > 0
// //             ? Math.max(...numbers) + 1
// //             : 1;

// //     return `STU-${String(nextNumber).padStart(
// //         3,
// //         "0"
// //     )}`;
// // }

// // function StudentForm() {
// //     const { id } = useParams();
// //     const navigate = useNavigate();

// //     const isEditMode = Boolean(id);

// //     /*
// //      * IMPORTANT:
// //      * State is initialized directly.
// //      * No useEffect + setState.
// //      */
// //     const [formData, setFormData] =
// //         useState(() => getStudentById(id));

// //     const [errors, setErrors] = useState({});

// //     // -----------------------------------------
// //     // Handle Input
// //     // -----------------------------------------

// //     const handleChange = (event) => {
// //         const { name, value } = event.target;

// //         setFormData((previous) => ({
// //             ...previous,
// //             [name]: value,
// //         }));

// //         setErrors((previous) => ({
// //             ...previous,
// //             [name]: "",
// //         }));
// //     };

// //     // -----------------------------------------
// //     // Validation
// //     // -----------------------------------------

// //     const validate = () => {
// //         const newErrors = {};

// //         if (!formData.name.trim()) {
// //             newErrors.name =
// //                 "Student name is required.";
// //         }

// //         if (!formData.email.trim()) {
// //             newErrors.email =
// //                 "Email is required.";
// //         } else if (
// //             !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
// //                 formData.email
// //             )
// //         ) {
// //             newErrors.email =
// //                 "Enter a valid email address.";
// //         }

// //         if (!formData.phone.trim()) {
// //             newErrors.phone =
// //                 "Phone number is required.";
// //         }

// //         if (!formData.className) {
// //             newErrors.className =
// //                 "Please select a class.";
// //         }

// //         if (!formData.section) {
// //             newErrors.section =
// //                 "Please select a section.";
// //         }

// //         if (!formData.gender) {
// //             newErrors.gender =
// //                 "Please select gender.";
// //         }

// //         if (!formData.dateOfBirth) {
// //             newErrors.dateOfBirth =
// //                 "Date of birth is required.";
// //         }

// //         if (!formData.guardianName.trim()) {
// //             newErrors.guardianName =
// //                 "Guardian name is required.";
// //         }

// //         if (!formData.guardianPhone.trim()) {
// //             newErrors.guardianPhone =
// //                 "Guardian phone is required.";
// //         }

// //         setErrors(newErrors);

// //         return (
// //             Object.keys(newErrors).length === 0
// //         );
// //     };

// //     // -----------------------------------------
// //     // Submit
// //     // -----------------------------------------

// //     const handleSubmit = (event) => {
// //         event.preventDefault();

// //         const isValid = validate();

// //         if (!isValid) {
// //             return;
// //         }

// //         try {
// //             const savedStudents =
// //                 localStorage.getItem(
// //                     STORAGE_KEY
// //                 );

// //             const students = savedStudents
// //                 ? JSON.parse(savedStudents)
// //                 : [];

// //             // ==============================
// //             // EDIT STUDENT
// //             // ==============================

// //             if (isEditMode) {
// //                 const studentExists =
// //                     students.some(
// //                         (student) =>
// //                             student.id === id
// //                     );

// //                 if (!studentExists) {
// //                     alert(
// //                         "Student not found."
// //                     );

// //                     navigate("/students");

// //                     return;
// //                 }

// //                 const updatedStudents =
// //                     students.map(
// //                         (student) => {
// //                             if (
// //                                 student.id === id
// //                             ) {
// //                                 return {
// //                                     ...student,
// //                                     ...formData,
// //                                 };
// //                             }

// //                             return student;
// //                         }
// //                     );

// //                 localStorage.setItem(
// //                     STORAGE_KEY,
// //                     JSON.stringify(
// //                         updatedStudents
// //                     )
// //                 );

// //                 alert(
// //                     "Student updated successfully."
// //                 );

// //                 navigate("/students");

// //                 return;
// //             }

// //             // ==============================
// //             // ADD STUDENT
// //             // ==============================

// //             const newStudent = {
// //                 id: generateStudentId(
// //                     students
// //                 ),
// //                 ...formData,
// //             };

// //             const updatedStudents = [
// //                 ...students,
// //                 newStudent,
// //             ];

// //             localStorage.setItem(
// //                 STORAGE_KEY,
// //                 JSON.stringify(
// //                     updatedStudents
// //                 )
// //             );

// //             alert(
// //                 "Student added successfully."
// //             );

// //             navigate("/students");
// //         } catch (error) {
// //             console.error(
// //                 "Failed to save student:",
// //                 error
// //             );

// //             alert(
// //                 "Something went wrong while saving the student."
// //             );
// //         }
// //     };

// //     // -----------------------------------------
// //     // Render
// //     // -----------------------------------------

// //     return (
// //         <div className="student-form-page">

// //             {/* =========================
// //                 HEADER
// //             ========================== */}

// //             <div className="student-form-header">

// //                 <div>

// //                     <Link
// //                         to="/students"
// //                         className="back-link"
// //                     >
// //                         <ArrowLeft
// //                             size={17}
// //                         />

// //                         Back to Students
// //                     </Link>

// //                     <h1>
// //                         {isEditMode
// //                             ? "Edit Student"
// //                             : "Add Student"}
// //                     </h1>

// //                     <p>
// //                         {isEditMode
// //                             ? "Update the student's information below."
// //                             : "Enter the information below to create a new student."}
// //                     </p>

// //                 </div>

// //                 <div className="form-header-icon">
// //                     <UserPlus size={25} />
// //                 </div>

// //             </div>

// //             {/* =========================
// //                 FORM
// //             ========================== */}

// //             <form
// //                 className="student-form"
// //                 onSubmit={handleSubmit}
// //             >

// //                 {/* PERSONAL INFORMATION */}

// //                 <section className="form-section">

// //                     <div className="form-section-header">

// //                         <div>
// //                             <h2>
// //                                 Personal Information
// //                             </h2>

// //                             <p>
// //                                 Enter the student's
// //                                 basic information.
// //                             </p>
// //                         </div>

// //                     </div>

// //                     <div className="form-grid">

// //                         <FormInput
// //                             label="Student Name"
// //                             name="name"
// //                             value={formData.name}
// //                             onChange={handleChange}
// //                             error={errors.name}
// //                             placeholder="Enter student name"
// //                             required
// //                         />

// //                         <FormInput
// //                             label="Email Address"
// //                             name="email"
// //                             type="email"
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             error={errors.email}
// //                             placeholder="student@example.com"
// //                             required
// //                         />

// //                         <FormInput
// //                             label="Phone Number"
// //                             name="phone"
// //                             value={formData.phone}
// //                             onChange={handleChange}
// //                             error={errors.phone}
// //                             placeholder="03001234567"
// //                             required
// //                         />

// //                         <FormInput
// //                             label="Date of Birth"
// //                             name="dateOfBirth"
// //                             type="date"
// //                             value={
// //                                 formData.dateOfBirth
// //                             }
// //                             onChange={handleChange}
// //                             error={
// //                                 errors.dateOfBirth
// //                             }
// //                             required
// //                         />

// //                         <FormSelect
// //                             label="Gender"
// //                             name="gender"
// //                             value={formData.gender}
// //                             onChange={handleChange}
// //                             error={errors.gender}
// //                             required
// //                             options={[
// //                                 "Male",
// //                                 "Female",
// //                                 "Other",
// //                             ]}
// //                         />

// //                     </div>

// //                     <div className="form-full-width">

// //                         <label>
// //                             Address
// //                         </label>

// //                         <textarea
// //                             name="address"
// //                             value={
// //                                 formData.address
// //                             }
// //                             onChange={
// //                                 handleChange
// //                             }
// //                             placeholder="Enter student's address"
// //                             rows="3"
// //                         />

// //                     </div>

// //                 </section>

// //                 {/* ACADEMIC INFORMATION */}

// //                 <section className="form-section">

// //                     <div className="form-section-header">

// //                         <div>
// //                             <h2>
// //                                 Academic Information
// //                             </h2>

// //                             <p>
// //                                 Select the student's
// //                                 class and section.
// //                             </p>
// //                         </div>

// //                     </div>

// //                     <div className="form-grid">

// //                         <FormSelect
// //                             label="Class"
// //                             name="className"
// //                             value={
// //                                 formData.className
// //                             }
// //                             onChange={
// //                                 handleChange
// //                             }
// //                             error={
// //                                 errors.className
// //                             }
// //                             required
// //                             options={[
// //                                 "6th",
// //                                 "7th",
// //                                 "8th",
// //                                 "9th",
// //                                 "10th",
// //                                 "11th",
// //                                 "12th",
// //                             ]}
// //                         />

// //                         <FormSelect
// //                             label="Section"
// //                             name="section"
// //                             value={
// //                                 formData.section
// //                             }
// //                             onChange={
// //                                 handleChange
// //                             }
// //                             error={
// //                                 errors.section
// //                             }
// //                             required
// //                             options={[
// //                                 "A",
// //                                 "B",
// //                                 "C",
// //                                 "D",
// //                             ]}
// //                         />

// //                         <FormSelect
// //                             label="Status"
// //                             name="status"
// //                             value={
// //                                 formData.status
// //                             }
// //                             onChange={
// //                                 handleChange
// //                             }
// //                             options={[
// //                                 "Active",
// //                                 "Inactive",
// //                             ]}
// //                         />

// //                     </div>

// //                 </section>

// //                 {/* GUARDIAN INFORMATION */}

// //                 <section className="form-section">

// //                     <div className="form-section-header">

// //                         <div>
// //                             <h2>
// //                                 Guardian Information
// //                             </h2>

// //                             <p>
// //                                 Enter parent or
// //                                 guardian contact
// //                                 information.
// //                             </p>
// //                         </div>

// //                     </div>

// //                     <div className="form-grid">

// //                         <FormInput
// //                             label="Guardian Name"
// //                             name="guardianName"
// //                             value={
// //                                 formData.guardianName
// //                             }
// //                             onChange={
// //                                 handleChange
// //                             }
// //                             error={
// //                                 errors.guardianName
// //                             }
// //                             placeholder="Enter guardian name"
// //                             required
// //                         />

// //                         <FormInput
// //                             label="Guardian Phone"
// //                             name="guardianPhone"
// //                             value={
// //                                 formData.guardianPhone
// //                             }
// //                             onChange={
// //                                 handleChange
// //                             }
// //                             error={
// //                                 errors.guardianPhone
// //                             }
// //                             placeholder="03001234567"
// //                             required
// //                         />

// //                     </div>

// //                 </section>

// //                 {/* ACTIONS */}

// //                 <div className="form-actions">

// //                     <Link
// //                         to="/students"
// //                         className="cancel-btn"
// //                     >
// //                         Cancel
// //                     </Link>

// //                     <button
// //                         type="submit"
// //                         className="save-student-btn"
// //                     >
// //                         <Save size={18} />

// //                         {isEditMode
// //                             ? "Update Student"
// //                             : "Save Student"}
// //                     </button>

// //                 </div>

// //             </form>

// //         </div>
// //     );
// // }

// // // =========================================
// // // INPUT COMPONENT
// // // =========================================

// // function FormInput({
// //     label,
// //     name,
// //     type = "text",
// //     value,
// //     onChange,
// //     error,
// //     placeholder,
// //     required,
// // }) {
// //     return (
// //         <div className="form-field">

// //             <label htmlFor={name}>
// //                 {label}

// //                 {required && (
// //                     <span className="required">
// //                         *
// //                     </span>
// //                 )}
// //             </label>

// //             <input
// //                 id={name}
// //                 name={name}
// //                 type={type}
// //                 value={value}
// //                 onChange={onChange}
// //                 placeholder={placeholder}
// //                 className={
// //                     error
// //                         ? "input-error"
// //                         : ""
// //                 }
// //             />

// //             {error && (
// //                 <small className="error-message">
// //                     {error}
// //                 </small>
// //             )}

// //         </div>
// //     );
// // }

// // // =========================================
// // // SELECT COMPONENT
// // // =========================================

// // function FormSelect({
// //     label,
// //     name,
// //     value,
// //     onChange,
// //     error,
// //     options,
// //     required,
// // }) {
// //     return (
// //         <div className="form-field">

// //             <label htmlFor={name}>
// //                 {label}

// //                 {required && (
// //                     <span className="required">
// //                         *
// //                     </span>
// //                 )}
// //             </label>

// //             <select
// //                 id={name}
// //                 name={name}
// //                 value={value}
// //                 onChange={onChange}
// //                 className={
// //                     error
// //                         ? "input-error"
// //                         : ""
// //                 }
// //             >
// //                 <option value="">
// //                     Select {label}
// //                 </option>

// //                 {options.map(
// //                     (option) => (
// //                         <option
// //                             key={option}
// //                             value={option}
// //                         >
// //                             {option}
// //                         </option>
// //                     )
// //                 )}

// //             </select>

// //             {error && (
// //                 <small className="error-message">
// //                     {error}
// //                 </small>
// //             )}

// //         </div>
// //     );
// // }

// // export default StudentForm;


// import { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { ArrowLeft, Save } from "lucide-react";

// const STORAGE_KEY = "school_students";

// function getStudents() {
//     try {
//         const savedStudents = localStorage.getItem(STORAGE_KEY);
//         return savedStudents ? JSON.parse(savedStudents) : [];
//     } catch (error) {
//         console.error("Failed to load students:", error);
//         return [];
//     }
// }

// function getStudentById(id) {
//     const students = getStudents();
//     return students.find((student) => student.id === id) || null;
// }

// function createStudentId(students) {
//     if (students.length === 0) {
//         return "STU-001";
//     }

//     const numbers = students
//         .map((student) => {
//             const match = student.id?.match(/STU-(\d+)/);
//             return match ? Number(match[1]) : 0;
//         })
//         .filter(Boolean);

//     const nextNumber = Math.max(...numbers, 0) + 1;

//     return `STU-${String(nextNumber).padStart(3, "0")}`;
// }

// function StudentForm() {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const isEditMode = Boolean(id);
//     const existingStudent = isEditMode ? getStudentById(id) : null;

//     const [formData, setFormData] = useState(() => ({
//         name: existingStudent?.name || "",
//         email: existingStudent?.email || "",
//         phone: existingStudent?.phone || "",
//         className: existingStudent?.className || "",
//         section: existingStudent?.section || "",
//         gender: existingStudent?.gender || "",
//         dateOfBirth: existingStudent?.dateOfBirth || "",
//         address: existingStudent?.address || "",
//         guardianName: existingStudent?.guardianName || "",
//         guardianPhone: existingStudent?.guardianPhone || "",
//         status: existingStudent?.status || "Active",
//     }));

//     const [errors, setErrors] = useState({});
//     const [isSaving, setIsSaving] = useState(false);

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormData((previous) => ({
//             ...previous,
//             [name]: value,
//         }));

//         setErrors((previous) => ({
//             ...previous,
//             [name]: "",
//         }));
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.name.trim()) {
//             newErrors.name = "Student name is required.";
//         }

//         if (!formData.email.trim()) {
//             newErrors.email = "Email is required.";
//         } else if (
//             !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//         ) {
//             newErrors.email = "Enter a valid email address.";
//         }

//         if (!formData.phone.trim()) {
//             newErrors.phone = "Phone number is required.";
//         }

//         if (!formData.className) {
//             newErrors.className = "Please select a class.";
//         }

//         if (!formData.section) {
//             newErrors.section = "Please select a section.";
//         }

//         if (!formData.gender) {
//             newErrors.gender = "Please select gender.";
//         }

//         if (!formData.dateOfBirth) {
//             newErrors.dateOfBirth = "Date of birth is required.";
//         }

//         if (!formData.guardianName.trim()) {
//             newErrors.guardianName = "Guardian name is required.";
//         }

//         if (!formData.guardianPhone.trim()) {
//             newErrors.guardianPhone = "Guardian phone is required.";
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (!validateForm()) {
//             return;
//         }

//         setIsSaving(true);

//         try {
//             const students = getStudents();

//             if (isEditMode) {
//                 // UPDATE EXISTING STUDENT
//                 const updatedStudents = students.map((student) =>
//                     student.id === id
//                         ? {
//                             ...student,
//                             ...formData,
//                         }
//                         : student
//                 );

//                 localStorage.setItem(
//                     STORAGE_KEY,
//                     JSON.stringify(updatedStudents)
//                 );
//             } else {
//                 // ADD NEW STUDENT
//                 const newStudent = {
//                     id: createStudentId(students),
//                     ...formData,
//                 };

//                 const updatedStudents = [...students, newStudent];

//                 localStorage.setItem(
//                     STORAGE_KEY,
//                     JSON.stringify(updatedStudents)
//                 );
//             }

//             navigate("/students");
//         } catch (error) {
//             console.error("Failed to save student:", error);
//             alert("Something went wrong while saving the student.");
//         } finally {
//             setIsSaving(false);
//         }
//     };

//     if (isEditMode && !existingStudent) {
//         return (
//             <div className="student-page">
//                 <div className="student-table-card">
//                     <h2>Student Not Found</h2>
//                     <p>
//                         The student you are trying to edit does not exist.
//                     </p>

//                     <Link
//                         to="/students"
//                         className="add-student-btn"
//                     >
//                         <ArrowLeft size={18} />
//                         Back to Students
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="student-page">
//             <div className="student-page-header">
//                 <div>
//                     <h1>
//                         {isEditMode ? "Edit Student" : "Add Student"}
//                     </h1>

//                     <p>
//                         {isEditMode
//                             ? "Update student information."
//                             : "Create a new student record."}
//                     </p>
//                 </div>

//                 <Link
//                     to="/students"
//                     className="add-student-btn"
//                 >
//                     <ArrowLeft size={18} />
//                     Back to Students
//                 </Link>
//             </div>

//             <form
//                 className="student-table-card"
//                 onSubmit={handleSubmit}
//             >
//                 <div className="student-form-section">
//                     <h2>Personal Information</h2>
//                     <p>Enter the student's basic information.</p>
//                 </div>

//                 <div className="student-form-grid">
//                     <div className="student-form-group">
//                         <label>
//                             Full Name <span>*</span>
//                         </label>

//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Enter student name"
//                         />

//                         {errors.name && (
//                             <small className="form-error">
//                                 {errors.name}
//                             </small>
//                         )}
//                     </div>

//                     <div className="student-form-group">
//                         <label>
//                             Email <span>*</span>
//                         </label>

//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="student@example.com"
//                         />

//                         {errors.email && (
//                             <small className="form-error">
//                                 {errors.email}
//                             </small>
//                         )}
//                     </div>

//                     <div className="student-form-group">
//                         <label>
//                             Phone <span>*</span>
//                         </label>

//                         <input
//                             type="text"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             placeholder="03001234567"
//                         />

//                         {errors.phone && (
//                             <small className="form-error">
//                                 {errors.phone}
//                             </small>
//                         )}
//                     </div>

//                     <div className="student-form-group">
//                         <label>
//                             Gender <span>*</span>
//                         </label>

//                         <select
//                             name="gender"
//                             value={formData.gender}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select Gender</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>

//                         {errors.gender && (
//                             <small className="form-error">
//                                 {errors.gender}
//                             </small>
//                         )}
//                     </div>

//                     <div className="student-form-group">
//                         <label>
//                             Date of Birth <span>*</span>
//                         </label>

//                         <input
//                             type="date"
//                             name="dateOfBirth"
//                             value={formData.dateOfBirth}
//                             onChange={handleChange}
//                         />

//                         {errors.dateOfBirth && (
//                             <small className="form-error">
//                                 {errors.dateOfBirth}
//                             </small>
//                         )}
//                     </div>

//                     <div className="student-form-group">
//                         <label>Status</label>

//                         <select
//                             name="status"
//                             value={formData.status}
//                             onChange={handleChange}
//                         >
//                             <option value="Active">Active</option>
//                             <option value="Inactive">Inactive</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="student-form-section">
//                     <h2>Academic Information</h2>
//                     <p>Enter the student's class and section.</p>
//                 </div>

//                 <div className="student-form-grid">
//                     <div className="student-form-group">
//                         <label>
//                             Class <span>*</span>
//                         </label>

//                         <select
//                             name="className"
//                             value={formData.className}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select Class</option>
//                             <option value="1st">1st</option>
//                             <option value="2nd">2nd</option>
//                             <option value="3rd">3rd</option>
//                             <option value="4th">4th</option>
//                             <option value="5th">5th</option>
//                             <option value="6th">6th</option>
//                             <option value="7th">7th</option>
//                             <option value="8th">8th</option>
//                             <option value="9th">9th</option>
//                             <option value="10th">10th</option>
//                             <option value="11th">11th</option>
//                             <option value="12th">12th</option>
//                         </select>

//                         {errors.className && (
//                             <small className="form-error">
//                                 {errors.className}
//                             </small>
//                         )}
//                     </div>

//                     <div className="student-form-group">
//                         <label>
//                             Section <span>*</span>
//                         </label>

//                         <select
//                             name="section"
//                             value={formData.section}
//                             onChange={handleChange}
//                         >
//                             <option value="">Select Section</option>
//                             <option value="A">A</option>
//                             <option value="B">B</option>
//                             <option value="C">C</option>
//                             <option value="D">D</option>
//                         </select>

//                         {errors.section && (
//                             <small className="form-error">
//                                 {errors.section}
//                             </small>
//                         )}
//                     </div>
//                 </div>

//                 <div className="student-form-section">
//                     <h2>Guardian Information</h2>
//                     <p>Enter the student's parent or guardian details.</p>
//                 </div>

//                 <div className="student-form-grid">
//                     <div className="student-form-group">
//                         <label>
//                             Guardian Name <span>*</span>
//                         </label>

//                         <input
//                             type="text"
//                             name="guardianName"
//                             value={formData.guardianName}
//                             onChange={handleChange}
//                             placeholder="Enter guardian name"
//                         />

//                         {errors.guardianName && (
//                             <small className="form-error">
//                                 {errors.guardianName}
//                             </small>
//                         )}
//                     </div>

//                     <div className="student-form-group">
//                         <label>
//                             Guardian Phone <span>*</span>
//                         </label>

//                         <input
//                             type="text"
//                             name="guardianPhone"
//                             value={formData.guardianPhone}
//                             onChange={handleChange}
//                             placeholder="03001234567"
//                         />

//                         {errors.guardianPhone && (
//                             <small className="form-error">
//                                 {errors.guardianPhone}
//                             </small>
//                         )}
//                     </div>

//                     <div className="student-form-group full-width">
//                         <label>Address</label>

//                         <textarea
//                             name="address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             placeholder="Enter student address"
//                             rows="4"
//                         />
//                     </div>
//                 </div>

//                 <div className="student-form-actions">
//                     <Link
//                         to="/students"
//                         className="cancel-btn"
//                     >
//                         Cancel
//                     </Link>

//                     <button
//                         type="submit"
//                         className="save-student-btn"
//                         disabled={isSaving}
//                     >
//                         <Save size={18} />

//                         {isSaving
//                             ? "Saving..."
//                             : isEditMode
//                                 ? "Update Student"
//                                 : "Save Student"}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default StudentForm;


import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import StudentContext from "../../context/StudentContext";

function StudentForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { students, addStudent, updateStudent } =
        useContext(StudentContext);

    const isEditMode = Boolean(id);

    const existingStudent = isEditMode
        ? students.find((student) => String(student.id) === String(id))
        : null;

    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", className: "", section: "",
        gender: "", dateOfBirth: "", address: "", guardianName: "",
        guardianPhone: "", status: "Active",
    });

    const [errors, setErrors] =
        useState({});

    const [isSaving, setIsSaving] =
        useState(false);

    const handleChange = (event) => {
        const { name, value } =
            event.target;

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
                "Student name is required.";
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
                "Enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone =
                "Phone number is required.";
        }

        if (!formData.className) {
            newErrors.className =
                "Please select a class.";
        }

        if (!formData.section) {
            newErrors.section =
                "Please select a section.";
        }

        if (!formData.gender) {
            newErrors.gender =
                "Please select gender.";
        }

        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth =
                "Date of birth is required.";
        }

        if (!formData.guardianName.trim()) {
            newErrors.guardianName =
                "Guardian name is required.";
        }

        if (!formData.guardianPhone.trim()) {
            newErrors.guardianPhone =
                "Guardian phone is required.";
        }

        setErrors(newErrors);

        return (
            Object.keys(newErrors).length ===
            0
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSaving(true);

        try {
            if (isEditMode) {
                updateStudent({ id, ...formData });
            } else {
                addStudent(formData);
            }

            navigate("/students");
        } finally {
            setIsSaving(false);
        }
    };

    if (isEditMode && !existingStudent) {
        return (
            <div className="student-page">
                <div className="student-table-card">
                    <h2>
                        Student Not Found
                    </h2>

                    <p>
                        The student you are
                        trying to edit does
                        not exist.
                    </p>

                    <Link
                        to="/students"
                        className="add-student-btn"
                    >
                        <ArrowLeft size={18} />
                        Back to Students
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="student-page">

            <div className="student-page-header">
                <div>
                    <h1>
                        {isEditMode
                            ? "Edit Student"
                            : "Add Student"}
                    </h1>

                    <p>
                        {isEditMode
                            ? "Update student information."
                            : "Create a new student record."}
                    </p>
                </div>

                <Link
                    to="/students"
                    className="add-student-btn"
                >
                    <ArrowLeft size={18} />
                    Back to Students
                </Link>
            </div>

            <form
                className="student-table-card"
                onSubmit={handleSubmit}
            >

                {/* PERSONAL INFORMATION */}

                <div className="student-form-section">
                    <h2>
                        Personal Information
                    </h2>

                    <p>
                        Enter the student's
                        basic information.
                    </p>
                </div>

                <div className="student-form-grid">

                    <div className="student-form-group">
                        <label>
                            Full Name{" "}
                            <span>*</span>
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={
                                handleChange
                            }
                            placeholder="Enter student name"
                        />

                        {errors.name && (
                            <small className="form-error">
                                {errors.name}
                            </small>
                        )}
                    </div>

                    <div className="student-form-group">
                        <label>
                            Email{" "}
                            <span>*</span>
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={
                                handleChange
                            }
                            placeholder="student@example.com"
                        />

                        {errors.email && (
                            <small className="form-error">
                                {errors.email}
                            </small>
                        )}
                    </div>

                    <div className="student-form-group">
                        <label>
                            Phone{" "}
                            <span>*</span>
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={
                                handleChange
                            }
                            placeholder="03001234567"
                        />

                        {errors.phone && (
                            <small className="form-error">
                                {errors.phone}
                            </small>
                        )}
                    </div>

                    <div className="student-form-group">
                        <label>
                            Gender{" "}
                            <span>*</span>
                        </label>

                        <select
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
                        </select>

                        {errors.gender && (
                            <small className="form-error">
                                {errors.gender}
                            </small>
                        )}
                    </div>

                    <div className="student-form-group">
                        <label>
                            Date of Birth{" "}
                            <span>*</span>
                        </label>

                        <input
                            type="date"
                            name="dateOfBirth"
                            value={
                                formData.dateOfBirth
                            }
                            onChange={
                                handleChange
                            }
                        />

                        {errors.dateOfBirth && (
                            <small className="form-error">
                                {
                                    errors.dateOfBirth
                                }
                            </small>
                        )}
                    </div>

                    <div className="student-form-group">
                        <label>
                            Status
                        </label>

                        <select
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

                {/* ACADEMIC INFORMATION */}

                <div className="student-form-section">
                    <h2>
                        Academic Information
                    </h2>

                    <p>
                        Enter the student's
                        class and section.
                    </p>
                </div>

                <div className="student-form-grid">

                    <div className="student-form-group">
                        <label>
                            Class{" "}
                            <span>*</span>
                        </label>

                        <select
                            name="className"
                            value={
                                formData.className
                            }
                            onChange={
                                handleChange
                            }
                        >
                            <option value="">
                                Select Class
                            </option>

                            <option value="1st">
                                1st
                            </option>

                            <option value="2nd">
                                2nd
                            </option>

                            <option value="3rd">
                                3rd
                            </option>

                            <option value="4th">
                                4th
                            </option>

                            <option value="5th">
                                5th
                            </option>

                            <option value="6th">
                                6th
                            </option>

                            <option value="7th">
                                7th
                            </option>

                            <option value="8th">
                                8th
                            </option>

                            <option value="9th">
                                9th
                            </option>

                            <option value="10th">
                                10th
                            </option>

                            <option value="11th">
                                11th
                            </option>

                            <option value="12th">
                                12th
                            </option>
                        </select>

                        {errors.className && (
                            <small className="form-error">
                                {
                                    errors.className
                                }
                            </small>
                        )}
                    </div>

                    <div className="student-form-group">
                        <label>
                            Section{" "}
                            <span>*</span>
                        </label>

                        <select
                            name="section"
                            value={
                                formData.section
                            }
                            onChange={
                                handleChange
                            }
                        >
                            <option value="">
                                Select Section
                            </option>

                            <option value="A">
                                A
                            </option>

                            <option value="B">
                                B
                            </option>

                            <option value="C">
                                C
                            </option>

                            <option value="D">
                                D
                            </option>
                        </select>

                        {errors.section && (
                            <small className="form-error">
                                {
                                    errors.section
                                }
                            </small>
                        )}
                    </div>

                </div>

                {/* GUARDIAN INFORMATION */}

                <div className="student-form-section">
                    <h2>
                        Guardian Information
                    </h2>

                    <p>
                        Enter the student's
                        parent or guardian
                        details.
                    </p>
                </div>

                <div className="student-form-grid">

                    <div className="student-form-group">
                        <label>
                            Guardian Name{" "}
                            <span>*</span>
                        </label>

                        <input
                            type="text"
                            name="guardianName"
                            value={
                                formData.guardianName
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Enter guardian name"
                        />

                        {errors.guardianName && (
                            <small className="form-error">
                                {
                                    errors.guardianName
                                }
                            </small>
                        )}
                    </div>

                    <div className="student-form-group">
                        <label>
                            Guardian Phone{" "}
                            <span>*</span>
                        </label>

                        <input
                            type="text"
                            name="guardianPhone"
                            value={
                                formData.guardianPhone
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="03001234567"
                        />

                        {errors.guardianPhone && (
                            <small className="form-error">
                                {
                                    errors.guardianPhone
                                }
                            </small>
                        )}
                    </div>

                    <div className="student-form-group full-width">
                        <label>
                            Address
                        </label>

                        <textarea
                            name="address"
                            value={
                                formData.address
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Enter student address"
                            rows="4"
                        />
                    </div>

                </div>

                {/* ACTIONS */}

                <div className="student-form-actions">

                    <Link
                        to="/students"
                        className="cancel-btn"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="save-student-btn"
                        disabled={isSaving}
                    >
                        <Save size={18} />

                        {isSaving
                            ? "Saving..."
                            : isEditMode
                                ? "Update Student"
                                : "Save Student"}
                    </button>

                </div>

            </form>
        </div>
    );
}

export default StudentForm;


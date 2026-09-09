
// // // import { useState } from "react";
// // // import { Link, useNavigate, useParams } from "react-router-dom";
// // // import {
// // //     ArrowLeft,
// // //     User,
// // //     BriefcaseBusiness,
// // //     Save,
// // // } from "lucide-react";

// // // import "./Staff.css";

// // // const initialFormData = {
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     gender: "",
// // //     dateOfBirth: "",
// // //     address: "",
// // //     designation: "",
// // //     department: "",
// // //     joiningDate: "",
// // //     salary: "",
// // //     status: "Active",
// // // };

// // // const demoStaff = [
// // //     {
// // //         id: "STF-001",
// // //         name: "Ahmed Khan",
// // //         email: "ahmed@example.com",
// // //         phone: "03001234567",
// // //         gender: "Male",
// // //         dateOfBirth: "1990-05-12",
// // //         address: "Lahore, Pakistan",
// // //         designation: "Mathematics Teacher",
// // //         department: "Teaching",
// // //         joiningDate: "2024-01-15",
// // //         salary: "75000",
// // //         status: "Active",
// // //     },
// // //     {
// // //         id: "STF-002",
// // //         name: "Sara Ali",
// // //         email: "sara@example.com",
// // //         phone: "03011234567",
// // //         gender: "Female",
// // //         dateOfBirth: "1992-08-20",
// // //         address: "Lahore, Pakistan",
// // //         designation: "English Teacher",
// // //         department: "Teaching",
// // //         joiningDate: "2023-08-20",
// // //         salary: "70000",
// // //         status: "Active",
// // //     },
// // //     {
// // //         id: "STF-003",
// // //         name: "Usman Malik",
// // //         email: "usman@example.com",
// // //         phone: "03121234567",
// // //         gender: "Male",
// // //         dateOfBirth: "1988-02-10",
// // //         address: "Lahore, Pakistan",
// // //         designation: "Accountant",
// // //         department: "Administration",
// // //         joiningDate: "2022-06-10",
// // //         salary: "65000",
// // //         status: "Active",
// // //     },
// // //     {
// // //         id: "STF-004",
// // //         name: "Ayesha Noor",
// // //         email: "ayesha@example.com",
// // //         phone: "03211234567",
// // //         gender: "Female",
// // //         dateOfBirth: "1987-11-03",
// // //         address: "Lahore, Pakistan",
// // //         designation: "HR Manager",
// // //         department: "Human Resources",
// // //         joiningDate: "2021-03-05",
// // //         salary: "90000",
// // //         status: "Inactive",
// // //     },
// // // ];

// // // function StaffForm() {
// // //     const navigate = useNavigate();
// // //     const { id } = useParams();

// // //     const isEditMode = Boolean(id);

// // //     const existingStaff = isEditMode
// // //         ? demoStaff.find((member) => member.id === id)
// // //         : null;

// // //     const [formData, setFormData] = useState(() => {
// // //         if (!existingStaff) {
// // //             return initialFormData;
// // //         }

// // //         return {
// // //             name: existingStaff.name || "",
// // //             email: existingStaff.email || "",
// // //             phone: existingStaff.phone || "",
// // //             gender: existingStaff.gender || "",
// // //             dateOfBirth: existingStaff.dateOfBirth || "",
// // //             address: existingStaff.address || "",
// // //             designation: existingStaff.designation || "",
// // //             department: existingStaff.department || "",
// // //             joiningDate: existingStaff.joiningDate || "",
// // //             salary: existingStaff.salary || "",
// // //             status: existingStaff.status || "Active",
// // //         };
// // //     });

// // //     const [errors, setErrors] = useState({});
// // //     const [isSaving, setIsSaving] = useState(false);

// // //     const handleChange = (event) => {
// // //         const { name, value } = event.target;

// // //         setFormData((previousData) => ({
// // //             ...previousData,
// // //             [name]: value,
// // //         }));

// // //         if (errors[name]) {
// // //             setErrors((previousErrors) => ({
// // //                 ...previousErrors,
// // //                 [name]: "",
// // //             }));
// // //         }
// // //     };

// // //     const validateForm = () => {
// // //         const newErrors = {};

// // //         if (!formData.name.trim()) {
// // //             newErrors.name = "Full name is required.";
// // //         }

// // //         if (!formData.email.trim()) {
// // //             newErrors.email = "Email address is required.";
// // //         } else if (
// // //             !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
// // //         ) {
// // //             newErrors.email = "Please enter a valid email address.";
// // //         }

// // //         if (!formData.phone.trim()) {
// // //             newErrors.phone = "Phone number is required.";
// // //         }

// // //         if (!formData.gender) {
// // //             newErrors.gender = "Please select gender.";
// // //         }

// // //         if (!formData.designation.trim()) {
// // //             newErrors.designation = "Designation is required.";
// // //         }

// // //         if (!formData.department) {
// // //             newErrors.department = "Please select a department.";
// // //         }

// // //         if (!formData.joiningDate) {
// // //             newErrors.joiningDate = "Joining date is required.";
// // //         }

// // //         if (!formData.status) {
// // //             newErrors.status = "Please select staff status.";
// // //         }

// // //         setErrors(newErrors);

// // //         return Object.keys(newErrors).length === 0;
// // //     };

// // //     const handleSubmit = (event) => {
// // //         event.preventDefault();

// // //         if (!validateForm()) {
// // //             return;
// // //         }

// // //         setIsSaving(true);

// // //         /*
// // //          * Temporary frontend save.
// // //          * Laravel API integration will replace this later.
// // //          */
// // //         setTimeout(() => {
// // //             setIsSaving(false);
// // //             navigate("/staff");
// // //         }, 500);
// // //     };

// // //     const handleCancel = () => {
// // //         navigate("/staff");
// // //     };

// // //     return (
// // //         <div className="staff-form-page">

// // //             {/* =================================
// // //                 PAGE HEADER
// // //             ================================= */}

// // //             <div className="staff-form-header">

// // //                 <div>
// // //                     <Link
// // //                         to="/staff"
// // //                         className="staff-back-link"
// // //                     >
// // //                         <ArrowLeft size={17} />
// // //                         Back to Staff
// // //                     </Link>

// // //                     <h1>
// // //                         {isEditMode
// // //                             ? "Edit Staff Member"
// // //                             : "Add Staff Member"}
// // //                     </h1>

// // //                     <p>
// // //                         {isEditMode
// // //                             ? "Update staff member information."
// // //                             : "Add a new staff member to the school."}
// // //                     </p>
// // //                 </div>

// // //             </div>

// // //             {/* =================================
// // //                 FORM
// // //             ================================= */}

// // //             <form
// // //                 className="staff-form"
// // //                 onSubmit={handleSubmit}
// // //                 noValidate
// // //             >

// // //                 {/* =================================
// // //                     PERSONAL INFORMATION
// // //                 ================================= */}

// // //                 <div className="staff-form-card">

// // //                     <div className="staff-form-card-header">

// // //                         <div className="staff-form-section-icon">
// // //                             <User size={19} />
// // //                         </div>

// // //                         <div>
// // //                             <h2>Personal Information</h2>
// // //                             <p>
// // //                                 Enter the staff member's personal details.
// // //                             </p>
// // //                         </div>

// // //                     </div>

// // //                     <div className="staff-form-grid">

// // //                         {/* Full Name */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="name">
// // //                                 Full Name
// // //                                 <span>*</span>
// // //                             </label>

// // //                             <input
// // //                                 id="name"
// // //                                 name="name"
// // //                                 type="text"
// // //                                 placeholder="Enter full name"
// // //                                 value={formData.name}
// // //                                 onChange={handleChange}
// // //                                 className={
// // //                                     errors.name
// // //                                         ? "staff-input-error"
// // //                                         : ""
// // //                                 }
// // //                             />

// // //                             {errors.name && (
// // //                                 <small className="staff-form-error">
// // //                                     {errors.name}
// // //                                 </small>
// // //                             )}

// // //                         </div>

// // //                         {/* Email */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="email">
// // //                                 Email Address
// // //                                 <span>*</span>
// // //                             </label>

// // //                             <input
// // //                                 id="email"
// // //                                 name="email"
// // //                                 type="email"
// // //                                 placeholder="example@email.com"
// // //                                 value={formData.email}
// // //                                 onChange={handleChange}
// // //                                 className={
// // //                                     errors.email
// // //                                         ? "staff-input-error"
// // //                                         : ""
// // //                                 }
// // //                             />

// // //                             {errors.email && (
// // //                                 <small className="staff-form-error">
// // //                                     {errors.email}
// // //                                 </small>
// // //                             )}

// // //                         </div>

// // //                         {/* Phone */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="phone">
// // //                                 Phone Number
// // //                                 <span>*</span>
// // //                             </label>

// // //                             <input
// // //                                 id="phone"
// // //                                 name="phone"
// // //                                 type="tel"
// // //                                 placeholder="03001234567"
// // //                                 value={formData.phone}
// // //                                 onChange={handleChange}
// // //                                 className={
// // //                                     errors.phone
// // //                                         ? "staff-input-error"
// // //                                         : ""
// // //                                 }
// // //                             />

// // //                             {errors.phone && (
// // //                                 <small className="staff-form-error">
// // //                                     {errors.phone}
// // //                                 </small>
// // //                             )}

// // //                         </div>

// // //                         {/* Gender */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="gender">
// // //                                 Gender
// // //                                 <span>*</span>
// // //                             </label>

// // //                             <select
// // //                                 id="gender"
// // //                                 name="gender"
// // //                                 value={formData.gender}
// // //                                 onChange={handleChange}
// // //                                 className={
// // //                                     errors.gender
// // //                                         ? "staff-input-error"
// // //                                         : ""
// // //                                 }
// // //                             >
// // //                                 <option value="">
// // //                                     Select gender
// // //                                 </option>
// // //                                 <option value="Male">
// // //                                     Male
// // //                                 </option>
// // //                                 <option value="Female">
// // //                                     Female
// // //                                 </option>
// // //                                 <option value="Other">
// // //                                     Other
// // //                                 </option>
// // //                             </select>

// // //                             {errors.gender && (
// // //                                 <small className="staff-form-error">
// // //                                     {errors.gender}
// // //                                 </small>
// // //                             )}

// // //                         </div>

// // //                         {/* Date of Birth */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="dateOfBirth">
// // //                                 Date of Birth
// // //                             </label>

// // //                             <input
// // //                                 id="dateOfBirth"
// // //                                 name="dateOfBirth"
// // //                                 type="date"
// // //                                 value={formData.dateOfBirth}
// // //                                 onChange={handleChange}
// // //                             />

// // //                         </div>

// // //                         {/* Address */}
// // //                         <div className="staff-form-field staff-form-full">

// // //                             <label htmlFor="address">
// // //                                 Address
// // //                             </label>

// // //                             <textarea
// // //                                 id="address"
// // //                                 name="address"
// // //                                 rows="3"
// // //                                 placeholder="Enter complete address"
// // //                                 value={formData.address}
// // //                                 onChange={handleChange}
// // //                             />

// // //                         </div>

// // //                     </div>

// // //                 </div>

// // //                 {/* =================================
// // //                     EMPLOYMENT INFORMATION
// // //                 ================================= */}

// // //                 <div className="staff-form-card">

// // //                     <div className="staff-form-card-header">

// // //                         <div className="staff-form-section-icon">
// // //                             <BriefcaseBusiness size={19} />
// // //                         </div>

// // //                         <div>
// // //                             <h2>Employment Information</h2>
// // //                             <p>
// // //                                 Enter the staff member's employment details.
// // //                             </p>
// // //                         </div>

// // //                     </div>

// // //                     <div className="staff-form-grid">

// // //                         {/* Designation */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="designation">
// // //                                 Designation
// // //                                 <span>*</span>
// // //                             </label>

// // //                             <input
// // //                                 id="designation"
// // //                                 name="designation"
// // //                                 type="text"
// // //                                 placeholder="e.g. Mathematics Teacher"
// // //                                 value={formData.designation}
// // //                                 onChange={handleChange}
// // //                                 className={
// // //                                     errors.designation
// // //                                         ? "staff-input-error"
// // //                                         : ""
// // //                                 }
// // //                             />

// // //                             {errors.designation && (
// // //                                 <small className="staff-form-error">
// // //                                     {errors.designation}
// // //                                 </small>
// // //                             )}

// // //                         </div>

// // //                         {/* Department */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="department">
// // //                                 Department
// // //                                 <span>*</span>
// // //                             </label>

// // //                             <select
// // //                                 id="department"
// // //                                 name="department"
// // //                                 value={formData.department}
// // //                                 onChange={handleChange}
// // //                                 className={
// // //                                     errors.department
// // //                                         ? "staff-input-error"
// // //                                         : ""
// // //                                 }
// // //                             >
// // //                                 <option value="">
// // //                                     Select department
// // //                                 </option>
// // //                                 <option value="Teaching">
// // //                                     Teaching
// // //                                 </option>
// // //                                 <option value="Administration">
// // //                                     Administration
// // //                                 </option>
// // //                                 <option value="Human Resources">
// // //                                     Human Resources
// // //                                 </option>
// // //                                 <option value="Finance">
// // //                                     Finance
// // //                                 </option>
// // //                                 <option value="IT">
// // //                                     IT
// // //                                 </option>
// // //                                 <option value="Library">
// // //                                     Library
// // //                                 </option>
// // //                                 <option value="Security">
// // //                                     Security
// // //                                 </option>
// // //                                 <option value="Maintenance">
// // //                                     Maintenance
// // //                                 </option>
// // //                                 <option value="Other">
// // //                                     Other
// // //                                 </option>
// // //                             </select>

// // //                             {errors.department && (
// // //                                 <small className="staff-form-error">
// // //                                     {errors.department}
// // //                                 </small>
// // //                             )}

// // //                         </div>

// // //                         {/* Joining Date */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="joiningDate">
// // //                                 Joining Date
// // //                                 <span>*</span>
// // //                             </label>

// // //                             <input
// // //                                 id="joiningDate"
// // //                                 name="joiningDate"
// // //                                 type="date"
// // //                                 value={formData.joiningDate}
// // //                                 onChange={handleChange}
// // //                                 className={
// // //                                     errors.joiningDate
// // //                                         ? "staff-input-error"
// // //                                         : ""
// // //                                 }
// // //                             />

// // //                             {errors.joiningDate && (
// // //                                 <small className="staff-form-error">
// // //                                     {errors.joiningDate}
// // //                                 </small>
// // //                             )}

// // //                         </div>

// // //                         {/* Salary */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="salary">
// // //                                 Salary
// // //                             </label>

// // //                             <input
// // //                                 id="salary"
// // //                                 name="salary"
// // //                                 type="number"
// // //                                 min="0"
// // //                                 placeholder="Enter salary"
// // //                                 value={formData.salary}
// // //                                 onChange={handleChange}
// // //                             />

// // //                         </div>

// // //                         {/* Status */}
// // //                         <div className="staff-form-field">

// // //                             <label htmlFor="status">
// // //                                 Status
// // //                                 <span>*</span>
// // //                             </label>

// // //                             <select
// // //                                 id="status"
// // //                                 name="status"
// // //                                 value={formData.status}
// // //                                 onChange={handleChange}
// // //                                 className={
// // //                                     errors.status
// // //                                         ? "staff-input-error"
// // //                                         : ""
// // //                                 }
// // //                             >
// // //                                 <option value="Active">
// // //                                     Active
// // //                                 </option>
// // //                                 <option value="Inactive">
// // //                                     Inactive
// // //                                 </option>
// // //                             </select>

// // //                             {errors.status && (
// // //                                 <small className="staff-form-error">
// // //                                     {errors.status}
// // //                                 </small>
// // //                             )}

// // //                         </div>

// // //                     </div>

// // //                 </div>

// // //                 {/* =================================
// // //                     FORM ACTIONS
// // //                 ================================= */}

// // //                 <div className="staff-form-actions">

// // //                     <button
// // //                         type="button"
// // //                         className="staff-form-cancel-button"
// // //                         onClick={handleCancel}
// // //                         disabled={isSaving}
// // //                     >
// // //                         Cancel
// // //                     </button>

// // //                     <button
// // //                         type="submit"
// // //                         className="staff-form-submit-button"
// // //                         disabled={isSaving}
// // //                     >
// // //                         <Save size={17} />

// // //                         {isSaving
// // //                             ? "Saving..."
// // //                             : isEditMode
// // //                                 ? "Update Staff"
// // //                                 : "Save Staff"}
// // //                     </button>

// // //                 </div>

// // //             </form>

// // //         </div>
// // //     );
// // // }

// // // export default StaffForm;

// // import { useState, useEffect } from "react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import { ArrowLeft, User, BriefcaseBusiness, Save } from "lucide-react";
// // import "./Staff.css";

// // const initialFormData = {
// //     name: "",
// //     email: "",
// //     phone: "",
// //     gender: "",
// //     dateOfBirth: "",
// //     address: "",
// //     designation: "",
// //     department: "",
// //     joiningDate: "",
// //     salary: "",
// //     status: "Active",
// // };

// // const demoStaff = [
// //     {
// //         id: "STF-001",
// //         name: "Ahmed Khan",
// //         email: "ahmed@example.com",
// //         phone: "03001234567",
// //         gender: "Male",
// //         dateOfBirth: "1990-05-12",
// //         address: "Lahore, Pakistan",
// //         designation: "Mathematics Teacher",
// //         department: "Teaching",
// //         joiningDate: "2024-01-15",
// //         salary: "75000",
// //         status: "Active",
// //     },
// //     {
// //         id: "STF-002",
// //         name: "Sara Ali",
// //         email: "sara@example.com",
// //         phone: "03011234567",
// //         gender: "Female",
// //         dateOfBirth: "1992-08-20",
// //         address: "Lahore, Pakistan",
// //         designation: "English Teacher",
// //         department: "Teaching",
// //         joiningDate: "2023-08-20",
// //         salary: "70000",
// //         status: "Active",
// //     },
// //     {
// //         id: "STF-003",
// //         name: "Usman Malik",
// //         email: "usman@example.com",
// //         phone: "03121234567",
// //         gender: "Male",
// //         dateOfBirth: "1988-02-10",
// //         address: "Lahore, Pakistan",
// //         designation: "Accountant",
// //         department: "Administration",
// //         joiningDate: "2022-06-10",
// //         salary: "65000",
// //         status: "Active",
// //     },
// //     {
// //         id: "STF-004",
// //         name: "Ayesha Noor",
// //         email: "ayesha@example.com",
// //         phone: "03211234567",
// //         gender: "Female",
// //         dateOfBirth: "1987-11-03",
// //         address: "Lahore, Pakistan",
// //         designation: "HR Manager",
// //         department: "Human Resources",
// //         joiningDate: "2021-03-05",
// //         salary: "90000",
// //         status: "Inactive",
// //     },
// // ];

// // const GENDER_OPTIONS = [
// //     { value: "", label: "Select gender" },
// //     { value: "Male", label: "Male" },
// //     { value: "Female", label: "Female" },
// //     { value: "Other", label: "Other" },
// // ];

// // const DEPARTMENT_OPTIONS = [
// //     { value: "", label: "Select department" },
// //     { value: "Teaching", label: "Teaching" },
// //     { value: "Administration", label: "Administration" },
// //     { value: "Human Resources", label: "Human Resources" },
// //     { value: "Finance", label: "Finance" },
// //     { value: "IT", label: "IT" },
// //     { value: "Library", label: "Library" },
// //     { value: "Security", label: "Security" },
// //     { value: "Maintenance", label: "Maintenance" },
// //     { value: "Other", label: "Other" },
// // ];

// // const STATUS_OPTIONS = [
// //     { value: "Active", label: "Active" },
// //     { value: "Inactive", label: "Inactive" },
// // ];

// // // Helper UI components for standardized form fields
// // function FormField({ label, id, name, type = "text", required, value, onChange, error, placeholder, className = "", ...props }) {
// //     const isTextArea = type === "textarea";
// //     const Component = isTextArea ? "textarea" : "input";

// //     return (
// //         <div className={`staff-form-field ${className}`}>
// //             <label htmlFor={id}>
// //                 {label} {required && <span>*</span>}
// //             </label>
// //             <Component
// //                 id={id}
// //                 name={name}
// //                 type={!isTextArea ? type : undefined}
// //                 value={value}
// //                 onChange={onChange}
// //                 placeholder={placeholder}
// //                 className={error ? "staff-input-error" : ""}
// //                 aria-invalid={Boolean(error)}
// //                 {...props}
// //             />
// //             {error && <small className="staff-form-error">{error}</small>}
// //         </div>
// //     );
// // }

// // function FormSelect({ label, id, name, required, value, onChange, error, options }) {
// //     return (
// //         <div className="staff-form-field">
// //             <label htmlFor={id}>
// //                 {label} {required && <span>*</span>}
// //             </label>
// //             <select
// //                 id={id}
// //                 name={name}
// //                 value={value}
// //                 onChange={onChange}
// //                 className={error ? "staff-input-error" : ""}
// //                 aria-invalid={Boolean(error)}
// //             >
// //                 {options.map((opt) => (
// //                     <option key={opt.value} value={opt.value}>
// //                         {opt.label}
// //                     </option>
// //                 ))}
// //             </select>
// //             {error && <small className="staff-form-error">{error}</small>}
// //         </div>
// //     );
// // }

// // function StaffForm() {
// //     const navigate = useNavigate();
// //     const { id } = useParams();
// //     const isEditMode = Boolean(id);

// //     const existingStaff = isEditMode
// //         ? demoStaff.find((member) => member.id === id)
// //         : null;

// //     const [formData, setFormData] = useState(() => existingStaff || initialFormData);
// //     const [errors, setErrors] = useState({});
// //     const [isSaving, setIsSaving] = useState(false);

// //     // Redirect safely if an invalid edit ID is supplied in the URL
// //     useEffect(() => {
// //         if (isEditMode && !existingStaff) {
// //             navigate("/staff", { replace: true });
// //         }
// //     }, [isEditMode, existingStaff, navigate]);

// //     const handleChange = (event) => {
// //         const { name, value } = event.target;

// //         setFormData((prev) => ({ ...prev, [name]: value }));

// //         if (errors[name]) {
// //             setErrors((prev) => ({ ...prev, [name]: "" }));
// //         }
// //     };

// //     const validateForm = () => {
// //         const newErrors = {};

// //         if (!formData.name.trim()) newErrors.name = "Full name is required.";
// //         if (!formData.email.trim()) {
// //             newErrors.email = "Email address is required.";
// //         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //             newErrors.email = "Please enter a valid email address.";
// //         }

// //         if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
// //         if (!formData.gender) newErrors.gender = "Please select gender.";
// //         if (!formData.designation.trim()) newErrors.designation = "Designation is required.";
// //         if (!formData.department) newErrors.department = "Please select a department.";
// //         if (!formData.joiningDate) newErrors.joiningDate = "Joining date is required.";
// //         if (!formData.status) newErrors.status = "Please select staff status.";

// //         setErrors(newErrors);
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const handleSubmit = async (event) => {
// //         event.preventDefault();

// //         if (!validateForm()) return;

// //         setIsSaving(true);

// //         try {
// //             // API call replacement example:
// //             // if (isEditMode) await axios.put(`/api/staff/${id}`, formData);
// //             // else await axios.post('/api/staff', formData);

// //             await new Promise((resolve) => setTimeout(resolve, 500));
// //             navigate("/staff");
// //         } catch (error) {
// //             console.error("Error saving staff record:", error);
// //         } finally {
// //             setIsSaving(false);
// //         }
// //     };

// //     return (
// //         <div className="staff-form-page">
// //             {/* PAGE HEADER */}
// //             <div className="staff-form-header">
// //                 <div>
// //                     <Link to="/staff" className="staff-back-link">
// //                         <ArrowLeft size={17} />
// //                         Back to Staff
// //                     </Link>

// //                     <h1>{isEditMode ? "Edit Staff Member" : "Add Staff Member"}</h1>
// //                     <p>
// //                         {isEditMode
// //                             ? "Update staff member information."
// //                             : "Add a new staff member to the school."}
// //                     </p>
// //                 </div>
// //             </div>

// //             {/* FORM */}
// //             <form className="staff-form" onSubmit={handleSubmit} noValidate>
// //                 {/* PERSONAL INFORMATION */}
// //                 <div className="staff-form-card">
// //                     <div className="staff-form-card-header">
// //                         <div className="staff-form-section-icon">
// //                             <User size={19} />
// //                         </div>
// //                         <div>
// //                             <h2>Personal Information</h2>
// //                             <p>Enter the staff member's personal details.</p>
// //                         </div>
// //                     </div>

// //                     <div className="staff-form-grid">
// //                         <FormField
// //                             label="Full Name"
// //                             id="name"
// //                             name="name"
// //                             required
// //                             placeholder="Enter full name"
// //                             value={formData.name}
// //                             onChange={handleChange}
// //                             error={errors.name}
// //                         />

// //                         <FormField
// //                             label="Email Address"
// //                             id="email"
// //                             name="email"
// //                             type="email"
// //                             required
// //                             placeholder="example@email.com"
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             error={errors.email}
// //                         />

// //                         <FormField
// //                             label="Phone Number"
// //                             id="phone"
// //                             name="phone"
// //                             type="tel"
// //                             required
// //                             placeholder="03001234567"
// //                             value={formData.phone}
// //                             onChange={handleChange}
// //                             error={errors.phone}
// //                         />

// //                         <FormSelect
// //                             label="Gender"
// //                             id="gender"
// //                             name="gender"
// //                             required
// //                             value={formData.gender}
// //                             onChange={handleChange}
// //                             error={errors.gender}
// //                             options={GENDER_OPTIONS}
// //                         />

// //                         <FormField
// //                             label="Date of Birth"
// //                             id="dateOfBirth"
// //                             name="dateOfBirth"
// //                             type="date"
// //                             value={formData.dateOfBirth}
// //                             onChange={handleChange}
// //                         />

// //                         <FormField
// //                             label="Address"
// //                             id="address"
// //                             name="address"
// //                             type="textarea"
// //                             rows={3}
// //                             placeholder="Enter complete address"
// //                             value={formData.address}
// //                             onChange={handleChange}
// //                             className="staff-form-full"
// //                         />
// //                     </div>
// //                 </div>

// //                 {/* EMPLOYMENT INFORMATION */}
// //                 <div className="staff-form-card">
// //                     <div className="staff-form-card-header">
// //                         <div className="staff-form-section-icon">
// //                             <BriefcaseBusiness size={19} />
// //                         </div>
// //                         <div>
// //                             <h2>Employment Information</h2>
// //                             <p>Enter the staff member's employment details.</p>
// //                         </div>
// //                     </div>

// //                     <div className="staff-form-grid">
// //                         <FormField
// //                             label="Designation"
// //                             id="designation"
// //                             name="designation"
// //                             required
// //                             placeholder="e.g. Mathematics Teacher"
// //                             value={formData.designation}
// //                             onChange={handleChange}
// //                             error={errors.designation}
// //                         />

// //                         <FormSelect
// //                             label="Department"
// //                             id="department"
// //                             name="department"
// //                             required
// //                             value={formData.department}
// //                             onChange={handleChange}
// //                             error={errors.department}
// //                             options={DEPARTMENT_OPTIONS}
// //                         />

// //                         <FormField
// //                             label="Joining Date"
// //                             id="joiningDate"
// //                             name="joiningDate"
// //                             type="date"
// //                             required
// //                             value={formData.joiningDate}
// //                             onChange={handleChange}
// //                             error={errors.joiningDate}
// //                         />

// //                         <FormField
// //                             label="Salary"
// //                             id="salary"
// //                             name="salary"
// //                             type="number"
// //                             min="0"
// //                             placeholder="Enter salary"
// //                             value={formData.salary}
// //                             onChange={handleChange}
// //                         />

// //                         <FormSelect
// //                             label="Status"
// //                             id="status"
// //                             name="status"
// //                             required
// //                             value={formData.status}
// //                             onChange={handleChange}
// //                             error={errors.status}
// //                             options={STATUS_OPTIONS}
// //                         />
// //                     </div>
// //                 </div>

// //                 {/* FORM ACTIONS */}
// //                 <div className="staff-form-actions">
// //                     <button
// //                         type="button"
// //                         className="staff-form-cancel-button"
// //                         onClick={() => navigate("/staff")}
// //                         disabled={isSaving}
// //                     >
// //                         Cancel
// //                     </button>

// //                     <button
// //                         type="submit"
// //                         className="staff-form-submit-button"
// //                         disabled={isSaving}
// //                     >
// //                         <Save size={17} />
// //                         {isSaving
// //                             ? "Saving..."
// //                             : isEditMode
// //                                 ? "Update Staff"
// //                                 : "Save Staff"}
// //                     </button>
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // }

// // export default StaffForm;
// import { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
//     ArrowLeft,
//     User,
//     BriefcaseBusiness,
//     Save,
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
//         gender: "Male",
//         dateOfBirth: "1990-05-15",
//         address: "Lahore, Pakistan",
//         designation: "Mathematics Teacher",
//         department: "Teaching",
//         joiningDate: "2023-01-10",
//         salary: "65000",
//         status: "Active",
//     },
//     {
//         id: "STF-002",
//         name: "Sara Ali",
//         email: "sara@example.com",
//         phone: "03111234567",
//         gender: "Female",
//         dateOfBirth: "1992-08-20",
//         address: "Lahore, Pakistan",
//         designation: "English Teacher",
//         department: "Teaching",
//         joiningDate: "2023-02-15",
//         salary: "60000",
//         status: "Active",
//     },
//     {
//         id: "STF-003",
//         name: "Usman Malik",
//         email: "usman@example.com",
//         phone: "03221234567",
//         gender: "Male",
//         dateOfBirth: "1988-03-12",
//         address: "Lahore, Pakistan",
//         designation: "Accountant",
//         department: "Administration",
//         joiningDate: "2022-08-01",
//         salary: "70000",
//         status: "Active",
//     },
//     {
//         id: "STF-004",
//         name: "Ayesha Noor",
//         email: "ayesha@example.com",
//         phone: "03331234567",
//         gender: "Female",
//         dateOfBirth: "1987-11-25",
//         address: "Lahore, Pakistan",
//         designation: "HR Manager",
//         department: "Human Resources",
//         joiningDate: "2021-06-10",
//         salary: "85000",
//         status: "Inactive",
//     },
// ];

// /* =========================================================
//    INITIAL FORM
//    ========================================================= */

// const emptyForm = {
//     name: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dateOfBirth: "",
//     address: "",
//     designation: "",
//     department: "",
//     joiningDate: "",
//     salary: "",
//     status: "Active",
// };

// /* =========================================================
//    COMPONENT
//    ========================================================= */

// function StaffForm() {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const isEditMode = Boolean(id);

//     const existingStaff = isEditMode
//         ? staffMembers.find((member) => member.id === id)
//         : null;

//     const [formData, setFormData] = useState(() => {
//         if (existingStaff) {
//             return {
//                 name: existingStaff.name,
//                 email: existingStaff.email,
//                 phone: existingStaff.phone,
//                 gender: existingStaff.gender,
//                 dateOfBirth: existingStaff.dateOfBirth,
//                 address: existingStaff.address,
//                 designation: existingStaff.designation,
//                 department: existingStaff.department,
//                 joiningDate: existingStaff.joiningDate,
//                 salary: existingStaff.salary,
//                 status: existingStaff.status,
//             };
//         }

//         return emptyForm;
//     });

//     const [errors, setErrors] = useState({});
//     const [isSaving, setIsSaving] = useState(false);

//     /* =====================================================
//        HANDLE INPUT
//        ===================================================== */

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

//     /* =====================================================
//        VALIDATION
//        ===================================================== */

//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.name.trim()) {
//             newErrors.name = "Full name is required.";
//         }

//         if (!formData.email.trim()) {
//             newErrors.email = "Email address is required.";
//         } else if (
//             !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
//                 formData.email
//             )
//         ) {
//             newErrors.email =
//                 "Please enter a valid email address.";
//         }

//         if (!formData.phone.trim()) {
//             newErrors.phone =
//                 "Phone number is required.";
//         }

//         if (!formData.gender) {
//             newErrors.gender =
//                 "Please select gender.";
//         }

//         if (!formData.designation.trim()) {
//             newErrors.designation =
//                 "Designation is required.";
//         }

//         if (!formData.department) {
//             newErrors.department =
//                 "Please select department.";
//         }

//         if (!formData.joiningDate) {
//             newErrors.joiningDate =
//                 "Joining date is required.";
//         }

//         if (!formData.status) {
//             newErrors.status =
//                 "Please select status.";
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };

//     /* =====================================================
//        SUBMIT
//        ===================================================== */

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const isValid = validateForm();

//         if (!isValid) {
//             return;
//         }

//         setIsSaving(true);

//         /*
//          * Temporary frontend functionality.
//          *
//          * Laravel/MySQL API will replace this later.
//          */
//         console.log(
//             isEditMode
//                 ? "Updating staff:"
//                 : "Creating staff:",
//             formData
//         );

//         setTimeout(() => {
//             setIsSaving(false);
//             navigate("/staff");
//         }, 500);
//     };

//     /* =====================================================
//        STAFF NOT FOUND
//        ===================================================== */

//     if (isEditMode && !existingStaff) {
//         return (
//             <div className="staff-form-page">

//                 <div className="staff-not-found">

//                     <h2>Staff Member Not Found</h2>

//                     <p>
//                         The staff member with ID{" "}
//                         <strong>{id}</strong> could not
//                         be found.
//                     </p>

//                     <Link
//                         to="/staff"
//                         className="staff-back-link"
//                     >
//                         <ArrowLeft size={18} />
//                         Back to Staff
//                     </Link>

//                 </div>

//             </div>
//         );
//     }

//     /* =====================================================
//        PAGE
//        ===================================================== */

//     return (
//         <div className="staff-form-page">

//             {/* =================================================
//                 HEADER
//             ================================================= */}

//             <div className="staff-form-header">

//                 <div>

//                     <Link
//                         to="/staff"
//                         className="staff-back-link"
//                     >
//                         <ArrowLeft size={18} />
//                         Back to Staff
//                     </Link>

//                     <h1>
//                         {isEditMode
//                             ? "Edit Staff Member"
//                             : "Add Staff Member"}
//                     </h1>

//                     <p>
//                         {isEditMode
//                             ? "Update the staff member's information."
//                             : "Add a new staff member to the school."}
//                     </p>

//                 </div>

//             </div>

//             {/* =================================================
//                 FORM
//             ================================================= */}

//             <form
//                 className="staff-form"
//                 onSubmit={handleSubmit}
//                 noValidate
//             >

//                 {/* =================================================
//                     PERSONAL INFORMATION
//                 ================================================= */}

//                 <div className="staff-form-card">

//                     <div className="staff-form-card-header">

//                         <div className="staff-form-section-icon">
//                             <User size={20} />
//                         </div>

//                         <div>
//                             <h2>Personal Information</h2>

//                             <p>
//                                 Basic information about the
//                                 staff member.
//                             </p>
//                         </div>

//                     </div>

//                     <div className="staff-form-grid">

//                         {/* Full Name */}
//                         <div className="staff-form-field">

//                             <label htmlFor="name">
//                                 Full Name *
//                             </label>

//                             <input
//                                 id="name"
//                                 name="name"
//                                 type="text"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Enter full name"
//                                 className={
//                                     errors.name
//                                         ? "staff-input-error"
//                                         : ""
//                                 }
//                             />

//                             {errors.name && (
//                                 <span className="staff-form-error">
//                                     {errors.name}
//                                 </span>
//                             )}

//                         </div>

//                         {/* Email */}
//                         <div className="staff-form-field">

//                             <label htmlFor="email">
//                                 Email Address *
//                             </label>

//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="example@email.com"
//                                 className={
//                                     errors.email
//                                         ? "staff-input-error"
//                                         : ""
//                                 }
//                             />

//                             {errors.email && (
//                                 <span className="staff-form-error">
//                                     {errors.email}
//                                 </span>
//                             )}

//                         </div>

//                         {/* Phone */}
//                         <div className="staff-form-field">

//                             <label htmlFor="phone">
//                                 Phone Number *
//                             </label>

//                             <input
//                                 id="phone"
//                                 name="phone"
//                                 type="tel"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 placeholder="03001234567"
//                                 className={
//                                     errors.phone
//                                         ? "staff-input-error"
//                                         : ""
//                                 }
//                             />

//                             {errors.phone && (
//                                 <span className="staff-form-error">
//                                     {errors.phone}
//                                 </span>
//                             )}

//                         </div>

//                         {/* Gender */}
//                         <div className="staff-form-field">

//                             <label htmlFor="gender">
//                                 Gender *
//                             </label>

//                             <select
//                                 id="gender"
//                                 name="gender"
//                                 value={formData.gender}
//                                 onChange={handleChange}
//                                 className={
//                                     errors.gender
//                                         ? "staff-input-error"
//                                         : ""
//                                 }
//                             >
//                                 <option value="">
//                                     Select gender
//                                 </option>

//                                 <option value="Male">
//                                     Male
//                                 </option>

//                                 <option value="Female">
//                                     Female
//                                 </option>

//                                 <option value="Other">
//                                     Other
//                                 </option>
//                             </select>

//                             {errors.gender && (
//                                 <span className="staff-form-error">
//                                     {errors.gender}
//                                 </span>
//                             )}

//                         </div>

//                         {/* Date of Birth */}
//                         <div className="staff-form-field">

//                             <label htmlFor="dateOfBirth">
//                                 Date of Birth
//                             </label>

//                             <input
//                                 id="dateOfBirth"
//                                 name="dateOfBirth"
//                                 type="date"
//                                 value={formData.dateOfBirth}
//                                 onChange={handleChange}
//                             />

//                         </div>

//                         {/* Address */}
//                         <div className="staff-form-field staff-form-full">

//                             <label htmlFor="address">
//                                 Address
//                             </label>

//                             <textarea
//                                 id="address"
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleChange}
//                                 placeholder="Enter complete address"
//                                 rows="4"
//                             />

//                         </div>

//                     </div>

//                 </div>

//                 {/* =================================================
//                     EMPLOYMENT INFORMATION
//                 ================================================= */}

//                 <div className="staff-form-card">

//                     <div className="staff-form-card-header">

//                         <div className="staff-form-section-icon">
//                             <BriefcaseBusiness size={20} />
//                         </div>

//                         <div>
//                             <h2>Employment Information</h2>

//                             <p>
//                                 Job and employment details.
//                             </p>
//                         </div>

//                     </div>

//                     <div className="staff-form-grid">

//                         {/* Designation */}
//                         <div className="staff-form-field">

//                             <label htmlFor="designation">
//                                 Designation *
//                             </label>

//                             <input
//                                 id="designation"
//                                 name="designation"
//                                 type="text"
//                                 value={formData.designation}
//                                 onChange={handleChange}
//                                 placeholder="e.g. HR Manager"
//                                 className={
//                                     errors.designation
//                                         ? "staff-input-error"
//                                         : ""
//                                 }
//                             />

//                             {errors.designation && (
//                                 <span className="staff-form-error">
//                                     {errors.designation}
//                                 </span>
//                             )}

//                         </div>

//                         {/* Department */}
//                         <div className="staff-form-field">

//                             <label htmlFor="department">
//                                 Department *
//                             </label>

//                             <select
//                                 id="department"
//                                 name="department"
//                                 value={formData.department}
//                                 onChange={handleChange}
//                                 className={
//                                     errors.department
//                                         ? "staff-input-error"
//                                         : ""
//                                 }
//                             >
//                                 <option value="">
//                                     Select department
//                                 </option>

//                                 <option value="Teaching">
//                                     Teaching
//                                 </option>

//                                 <option value="Administration">
//                                     Administration
//                                 </option>

//                                 <option value="Human Resources">
//                                     Human Resources
//                                 </option>

//                                 <option value="Accounts">
//                                     Accounts
//                                 </option>

//                                 <option value="IT">
//                                     IT
//                                 </option>

//                                 <option value="Support">
//                                     Support
//                                 </option>
//                             </select>

//                             {errors.department && (
//                                 <span className="staff-form-error">
//                                     {errors.department}
//                                 </span>
//                             )}

//                         </div>

//                         {/* Joining Date */}
//                         <div className="staff-form-field">

//                             <label htmlFor="joiningDate">
//                                 Joining Date *
//                             </label>

//                             <input
//                                 id="joiningDate"
//                                 name="joiningDate"
//                                 type="date"
//                                 value={formData.joiningDate}
//                                 onChange={handleChange}
//                                 className={
//                                     errors.joiningDate
//                                         ? "staff-input-error"
//                                         : ""
//                                 }
//                             />

//                             {errors.joiningDate && (
//                                 <span className="staff-form-error">
//                                     {errors.joiningDate}
//                                 </span>
//                             )}

//                         </div>

//                         {/* Salary */}
//                         <div className="staff-form-field">

//                             <label htmlFor="salary">
//                                 Salary
//                             </label>

//                             <input
//                                 id="salary"
//                                 name="salary"
//                                 type="number"
//                                 min="0"
//                                 value={formData.salary}
//                                 onChange={handleChange}
//                                 placeholder="Enter salary"
//                             />

//                         </div>

//                         {/* Status */}
//                         <div className="staff-form-field">

//                             <label htmlFor="status">
//                                 Status *
//                             </label>

//                             <select
//                                 id="status"
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleChange}
//                                 className={
//                                     errors.status
//                                         ? "staff-input-error"
//                                         : ""
//                                 }
//                             >
//                                 <option value="Active">
//                                     Active
//                                 </option>

//                                 <option value="Inactive">
//                                     Inactive
//                                 </option>
//                             </select>

//                             {errors.status && (
//                                 <span className="staff-form-error">
//                                     {errors.status}
//                                 </span>
//                             )}

//                         </div>

//                     </div>

//                     {/* =================================================
//                         FORM ACTIONS
//                     ================================================= */}

//                     <div className="staff-form-actions">

//                         <Link
//                             to="/staff"
//                             className="staff-form-cancel-button"
//                         >
//                             Cancel
//                         </Link>

//                         <button
//                             type="submit"
//                             className="staff-form-submit-button"
//                             disabled={isSaving}
//                         >
//                             <Save size={18} />

//                             {isSaving
//                                 ? "Saving..."
//                                 : isEditMode
//                                     ? "Save Changes"
//                                     : "Create Staff"}
//                         </button>

//                     </div>

//                 </div>

//             </form>

//         </div>
//     );
// }

// export default StaffForm;

import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    User,
    BriefcaseBusiness,
    Save,
} from "lucide-react";

import "./Staff.css";

import {
    getStaffById,
    createStaff,
    updateStaff,
} from "../../data/staffData";


/* =========================================================
   EMPTY FORM
   ========================================================= */

const emptyForm = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    designation: "",
    department: "",
    joiningDate: "",
    salary: "",
    status: "Active",
};


/* =========================================================
   COMPONENT
   ========================================================= */

function StaffForm() {
    const navigate = useNavigate();
    const { id } = useParams();

    const isEditMode = Boolean(id);

    const existingStaff = isEditMode
        ? getStaffById(id)
        : null;


    /* =====================================================
       FORM STATE
       ===================================================== */

    const [formData, setFormData] = useState(() => {
        if (existingStaff) {
            return {
                name: existingStaff.name || "",
                email: existingStaff.email || "",
                phone: existingStaff.phone || "",
                gender: existingStaff.gender || "",
                dateOfBirth:
                    existingStaff.dateOfBirth || "",
                address: existingStaff.address || "",
                designation:
                    existingStaff.designation || "",
                department:
                    existingStaff.department || "",
                joiningDate:
                    existingStaff.joiningDate || "",
                salary: existingStaff.salary || "",
                status:
                    existingStaff.status || "Active",
            };
        }

        return emptyForm;
    });


    const [errors, setErrors] = useState({});

    const [isSaving, setIsSaving] =
        useState(false);


    /* =====================================================
       HANDLE CHANGE
       ===================================================== */

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


    /* =====================================================
       VALIDATION
       ===================================================== */

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name =
                "Full name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email =
                "Email address is required.";
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

        if (!formData.gender) {
            newErrors.gender =
                "Please select gender.";
        }

        if (!formData.designation.trim()) {
            newErrors.designation =
                "Designation is required.";
        }

        if (!formData.department) {
            newErrors.department =
                "Please select department.";
        }

        if (!formData.joiningDate) {
            newErrors.joiningDate =
                "Joining date is required.";
        }

        if (!formData.status) {
            newErrors.status =
                "Please select status.";
        }

        setErrors(newErrors);

        return (
            Object.keys(newErrors).length === 0
        );
    };


    /* =====================================================
       SUBMIT
       ===================================================== */

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSaving(true);

        try {
            if (isEditMode) {
                /* =========================================
                   UPDATE EXISTING STAFF
                   ========================================= */

                updateStaff(id, formData);
            } else {
                /* =========================================
                   CREATE NEW STAFF
                   ========================================= */

                createStaff(formData);
            }

            /*
             * Give the browser a moment to show the
             * saving state before navigation.
             */

            setTimeout(() => {
                setIsSaving(false);

                navigate("/staff", {
                    replace: true,
                });
            }, 300);

        } catch (error) {
            console.error(
                "Unable to save staff:",
                error
            );

            setIsSaving(false);
        }
    };


    /* =====================================================
       STAFF NOT FOUND
       ===================================================== */

    if (isEditMode && !existingStaff) {
        return (
            <div className="staff-form-page">

                <div className="staff-not-found">

                    <h2>
                        Staff Member Not Found
                    </h2>

                    <p>
                        The staff member with ID{" "}
                        <strong>{id}</strong> could not
                        be found.
                    </p>

                    <Link
                        to="/staff"
                        className="staff-back-link"
                    >
                        <ArrowLeft size={18} />
                        Back to Staff
                    </Link>

                </div>

            </div>
        );
    }


    /* =====================================================
       RENDER
       ===================================================== */

    return (
        <div className="staff-form-page">

            {/* =================================================
               HEADER
               ================================================= */}

            <div className="staff-form-header">

                <div>

                    <Link
                        to="/staff"
                        className="staff-back-link"
                    >
                        <ArrowLeft size={18} />
                        Back to Staff
                    </Link>

                    <h1>
                        {isEditMode
                            ? "Edit Staff Member"
                            : "Add Staff Member"}
                    </h1>

                    <p>
                        {isEditMode
                            ? "Update the staff member's information."
                            : "Add a new staff member to the school."}
                    </p>

                </div>

            </div>


            {/* =================================================
               FORM
               ================================================= */}

            <form
                className="staff-form"
                onSubmit={handleSubmit}
                noValidate
            >

                {/* =================================================
                   PERSONAL INFORMATION
                   ================================================= */}

                <div className="staff-form-card">

                    <div className="staff-form-card-header">

                        <div className="staff-form-section-icon">
                            <User size={20} />
                        </div>

                        <div>
                            <h2>
                                Personal Information
                            </h2>

                            <p>
                                Basic information about the
                                staff member.
                            </p>
                        </div>

                    </div>


                    <div className="staff-form-grid">

                        {/* NAME */}

                        <div className="staff-form-field">

                            <label htmlFor="name">
                                Full Name *
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter full name"
                                className={
                                    errors.name
                                        ? "staff-input-error"
                                        : ""
                                }
                            />

                            {errors.name && (
                                <span className="staff-form-error">
                                    {errors.name}
                                </span>
                            )}

                        </div>


                        {/* EMAIL */}

                        <div className="staff-form-field">

                            <label htmlFor="email">
                                Email Address *
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className={
                                    errors.email
                                        ? "staff-input-error"
                                        : ""
                                }
                            />

                            {errors.email && (
                                <span className="staff-form-error">
                                    {errors.email}
                                </span>
                            )}

                        </div>


                        {/* PHONE */}

                        <div className="staff-form-field">

                            <label htmlFor="phone">
                                Phone Number *
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="03001234567"
                                className={
                                    errors.phone
                                        ? "staff-input-error"
                                        : ""
                                }
                            />

                            {errors.phone && (
                                <span className="staff-form-error">
                                    {errors.phone}
                                </span>
                            )}

                        </div>


                        {/* GENDER */}

                        <div className="staff-form-field">

                            <label htmlFor="gender">
                                Gender *
                            </label>

                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className={
                                    errors.gender
                                        ? "staff-input-error"
                                        : ""
                                }
                            >

                                <option value="">
                                    Select gender
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
                                <span className="staff-form-error">
                                    {errors.gender}
                                </span>
                            )}

                        </div>


                        {/* DATE OF BIRTH */}

                        <div className="staff-form-field">

                            <label htmlFor="dateOfBirth">
                                Date of Birth
                            </label>

                            <input
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                value={
                                    formData.dateOfBirth
                                }
                                onChange={handleChange}
                            />

                        </div>


                        {/* ADDRESS */}

                        <div className="staff-form-field staff-form-full">

                            <label htmlFor="address">
                                Address
                            </label>

                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter complete address"
                                rows="4"
                            />

                        </div>

                    </div>

                </div>


                {/* =================================================
                   EMPLOYMENT INFORMATION
                   ================================================= */}

                <div className="staff-form-card">

                    <div className="staff-form-card-header">

                        <div className="staff-form-section-icon">
                            <BriefcaseBusiness size={20} />
                        </div>

                        <div>

                            <h2>
                                Employment Information
                            </h2>

                            <p>
                                Job and employment details.
                            </p>

                        </div>

                    </div>


                    <div className="staff-form-grid">

                        {/* DESIGNATION */}

                        <div className="staff-form-field">

                            <label htmlFor="designation">
                                Designation *
                            </label>

                            <input
                                id="designation"
                                name="designation"
                                type="text"
                                value={
                                    formData.designation
                                }
                                onChange={handleChange}
                                placeholder="e.g. HR Manager"
                                className={
                                    errors.designation
                                        ? "staff-input-error"
                                        : ""
                                }
                            />

                            {errors.designation && (
                                <span className="staff-form-error">
                                    {errors.designation}
                                </span>
                            )}

                        </div>


                        {/* DEPARTMENT */}

                        <div className="staff-form-field">

                            <label htmlFor="department">
                                Department *
                            </label>

                            <select
                                id="department"
                                name="department"
                                value={
                                    formData.department
                                }
                                onChange={handleChange}
                                className={
                                    errors.department
                                        ? "staff-input-error"
                                        : ""
                                }
                            >

                                <option value="">
                                    Select department
                                </option>

                                <option value="Teaching">
                                    Teaching
                                </option>

                                <option value="Administration">
                                    Administration
                                </option>

                                <option value="Human Resources">
                                    Human Resources
                                </option>

                                <option value="Accounts">
                                    Accounts
                                </option>

                                <option value="IT">
                                    IT
                                </option>

                                <option value="Support">
                                    Support
                                </option>

                            </select>

                            {errors.department && (
                                <span className="staff-form-error">
                                    {errors.department}
                                </span>
                            )}

                        </div>


                        {/* JOINING DATE */}

                        <div className="staff-form-field">

                            <label htmlFor="joiningDate">
                                Joining Date *
                            </label>

                            <input
                                id="joiningDate"
                                name="joiningDate"
                                type="date"
                                value={
                                    formData.joiningDate
                                }
                                onChange={handleChange}
                                className={
                                    errors.joiningDate
                                        ? "staff-input-error"
                                        : ""
                                }
                            />

                            {errors.joiningDate && (
                                <span className="staff-form-error">
                                    {errors.joiningDate}
                                </span>
                            )}

                        </div>


                        {/* SALARY */}

                        <div className="staff-form-field">

                            <label htmlFor="salary">
                                Salary
                            </label>

                            <input
                                id="salary"
                                name="salary"
                                type="number"
                                min="0"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="Enter salary"
                            />

                        </div>


                        {/* STATUS */}

                        <div className="staff-form-field">

                            <label htmlFor="status">
                                Status *
                            </label>

                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className={
                                    errors.status
                                        ? "staff-input-error"
                                        : ""
                                }
                            >

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>

                            </select>

                            {errors.status && (
                                <span className="staff-form-error">
                                    {errors.status}
                                </span>
                            )}

                        </div>

                    </div>


                    {/* =================================================
                       ACTIONS
                       ================================================= */}

                    <div className="staff-form-actions">

                        <Link
                            to="/staff"
                            className="staff-form-cancel-button"
                        >
                            Cancel
                        </Link>


                        <button
                            type="submit"
                            className="staff-form-submit-button"
                            disabled={isSaving}
                        >

                            <Save size={18} />

                            {isSaving
                                ? "Saving..."
                                : isEditMode
                                    ? "Save Changes"
                                    : "Create Staff"}

                        </button>

                    </div>

                </div>

            </form>

        </div>
    );
}

export default StaffForm;


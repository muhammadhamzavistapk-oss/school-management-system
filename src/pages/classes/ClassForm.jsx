
import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const emptyForm = {
    className: "",
    section: "",
    subject: "",
    classTeacher: "",
    roomNumber: "",
    capacity: "",
    students: "0",
    status: "Active",
};

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

const generateClassId = (classes) => {
    const highestNumber = classes.reduce((highest, classItem) => {
        const match = String(classItem.id).match(/^CLS-(\d+)$/);

        if (!match) {
            return highest;
        }

        return Math.max(highest, Number(match[1]));
    }, 0);

    return `CLS-${String(highestNumber + 1).padStart(3, "0")}`;
};

function ClassForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isEditMode = Boolean(id);

    const classes = getClasses();

    const existingClass = isEditMode
        ? classes.find(
            (classItem) =>
                String(classItem.id).trim() ===
                String(id).trim()
        )
        : null;

    const [formData, setFormData] = useState(
        existingClass
            ? {
                className: existingClass.className || "",
                section: existingClass.section || "",
                subject: existingClass.subject || "",
                classTeacher:
                    existingClass.classTeacher || "",
                roomNumber:
                    existingClass.roomNumber || "",
                capacity:
                    existingClass.capacity ?? "",
                students:
                    existingClass.students ?? "0",
                status:
                    existingClass.status || "Active",
            }
            : emptyForm
    );

    const [errors, setErrors] = useState({});

    /*
     * Handle input changes
     */
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

    /*
     * Validate form
     */
    const validateForm = () => {
        const newErrors = {};

        if (!formData.className.trim()) {
            newErrors.className = "Class/Grade is required.";
        }

        if (!formData.section.trim()) {
            newErrors.section = "Section is required.";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required.";
        }

        if (!formData.classTeacher.trim()) {
            newErrors.classTeacher =
                "Class teacher is required.";
        }

        if (!formData.roomNumber.trim()) {
            newErrors.roomNumber =
                "Room number is required.";
        }

        if (
            formData.capacity === "" ||
            Number(formData.capacity) <= 0
        ) {
            newErrors.capacity =
                "Capacity must be greater than 0.";
        }

        if (
            formData.students === "" ||
            Number(formData.students) < 0
        ) {
            newErrors.students =
                "Students cannot be negative.";
        }

        if (
            Number(formData.students) >
            Number(formData.capacity)
        ) {
            newErrors.students =
                "Students cannot exceed class capacity.";
        }

        if (!formData.status) {
            newErrors.status = "Status is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    /*
     * Save class
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const cleanedClass = {
            className: formData.className.trim(),
            section: formData.section.trim(),
            subject: formData.subject.trim(),
            classTeacher: formData.classTeacher.trim(),
            roomNumber: formData.roomNumber.trim(),
            capacity: Number(formData.capacity),
            students: Number(formData.students),
            status: formData.status,
        };

        if (isEditMode) {
            const updatedClasses = classes.map(
                (classItem) =>
                    classItem.id === id
                        ? {
                            ...classItem,
                            ...cleanedClass,
                        }
                        : classItem
            );

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedClasses)
            );

            window.alert(
                "Class updated successfully."
            );
        } else {
            const newClass = {
                id: generateClassId(classes),
                ...cleanedClass,
            };

            const updatedClasses = [
                ...classes,
                newClass,
            ];

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedClasses)
            );

            window.alert(
                "Class added successfully."
            );
        }

        navigate("/classes");
    };

    /*
     * Edit mode but class doesn't exist
     */
    if (isEditMode && !existingClass) {
        return (
            <div className="class-page">

                <div className="class-not-found">

                    <GraduationCapIcon />

                    <h2>Class Not Found</h2>

                    <p>
                        The class you are trying to edit
                        does not exist.
                    </p>

                    <Link
                        to="/classes"
                        className="class-back-btn"
                    >
                        <ArrowLeft size={17} />
                        Back to Classes
                    </Link>

                </div>

            </div>
        );
    }

    return (
        <div className="class-page">

            {/* Header */}
            <div className="class-page-header">

                <div>
                    <h1>
                        {isEditMode
                            ? "Edit Class"
                            : "Add Class"}
                    </h1>

                    <p>
                        {isEditMode
                            ? "Update class information."
                            : "Create a new school class."}
                    </p>
                </div>

                <div className="class-header-actions">

                    <Link
                        to="/classes"
                        className="class-back-btn"
                    >
                        <ArrowLeft size={17} />
                        Back to Classes
                    </Link>

                </div>

            </div>

            {/* Form */}
            <form
                className="class-form"
                onSubmit={handleSubmit}
            >

                {/* Basic Information */}
                <div className="class-form-card">

                    <div className="class-form-card-header">

                        <div>
                            <h2>
                                Class Information
                            </h2>

                            <p>
                                Enter the basic information
                                for this class.
                            </p>
                        </div>

                    </div>

                    <div className="class-form-grid">

                        {/* Class */}
                        <div className="class-form-group">

                            <label htmlFor="className">
                                Class / Grade
                                <span>*</span>
                            </label>

                            <select
                                id="className"
                                name="className"
                                value={formData.className}
                                onChange={handleChange}
                                className={
                                    errors.className
                                        ? "input-error"
                                        : ""
                                }
                            >
                                <option value="">
                                    Select Class
                                </option>

                                <option value="Play Group">
                                    Play Group
                                </option>

                                <option value="Nursery">
                                    Nursery
                                </option>

                                <option value="Prep">
                                    Prep
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
                                <small className="class-form-error">
                                    {errors.className}
                                </small>
                            )}

                        </div>

                        {/* Section */}
                        <div className="class-form-group">

                            <label htmlFor="section">
                                Section
                                <span>*</span>
                            </label>

                            <select
                                id="section"
                                name="section"
                                value={formData.section}
                                onChange={handleChange}
                                className={
                                    errors.section
                                        ? "input-error"
                                        : ""
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
                                <small className="class-form-error">
                                    {errors.section}
                                </small>
                            )}

                        </div>

                        {/* Subject */}
                        <div className="class-form-group class-form-full">

                            <label htmlFor="subject">
                                Subject / Program
                                <span>*</span>
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="e.g. Computer Science"
                                value={formData.subject}
                                onChange={handleChange}
                                className={
                                    errors.subject
                                        ? "input-error"
                                        : ""
                                }
                            />

                            {errors.subject && (
                                <small className="class-form-error">
                                    {errors.subject}
                                </small>
                            )}

                        </div>

                    </div>

                </div>

                {/* Classroom Information */}
                <div className="class-form-card">

                    <div className="class-form-card-header">

                        <div>
                            <h2>
                                Classroom Information
                            </h2>

                            <p>
                                Configure teacher,
                                classroom and capacity.
                            </p>
                        </div>

                    </div>

                    <div className="class-form-grid">

                        {/* Teacher */}
                        <div className="class-form-group">

                            <label htmlFor="classTeacher">
                                Class Teacher
                                <span>*</span>
                            </label>

                            <input
                                id="classTeacher"
                                name="classTeacher"
                                type="text"
                                placeholder="e.g. Ahmed Khan"
                                value={
                                    formData.classTeacher
                                }
                                onChange={handleChange}
                                className={
                                    errors.classTeacher
                                        ? "input-error"
                                        : ""
                                }
                            />

                            {errors.classTeacher && (
                                <small className="class-form-error">
                                    {errors.classTeacher}
                                </small>
                            )}

                        </div>

                        {/* Room */}
                        <div className="class-form-group">

                            <label htmlFor="roomNumber">
                                Room Number
                                <span>*</span>
                            </label>

                            <input
                                id="roomNumber"
                                name="roomNumber"
                                type="text"
                                placeholder="e.g. 101"
                                value={
                                    formData.roomNumber
                                }
                                onChange={handleChange}
                                className={
                                    errors.roomNumber
                                        ? "input-error"
                                        : ""
                                }
                            />

                            {errors.roomNumber && (
                                <small className="class-form-error">
                                    {errors.roomNumber}
                                </small>
                            )}

                        </div>

                        {/* Capacity */}
                        <div className="class-form-group">

                            <label htmlFor="capacity">
                                Student Capacity
                                <span>*</span>
                            </label>

                            <input
                                id="capacity"
                                name="capacity"
                                type="number"
                                min="1"
                                placeholder="e.g. 40"
                                value={formData.capacity}
                                onChange={handleChange}
                                className={
                                    errors.capacity
                                        ? "input-error"
                                        : ""
                                }
                            />

                            {errors.capacity && (
                                <small className="class-form-error">
                                    {errors.capacity}
                                </small>
                            )}

                        </div>

                        {/* Students */}
                        <div className="class-form-group">

                            <label htmlFor="students">
                                Current Students
                            </label>

                            <input
                                id="students"
                                name="students"
                                type="number"
                                min="0"
                                placeholder="e.g. 30"
                                value={formData.students}
                                onChange={handleChange}
                                className={
                                    errors.students
                                        ? "input-error"
                                        : ""
                                }
                            />

                            {errors.students && (
                                <small className="class-form-error">
                                    {errors.students}
                                </small>
                            )}

                        </div>

                        {/* Status */}
                        <div className="class-form-group">

                            <label htmlFor="status">
                                Status
                                <span>*</span>
                            </label>

                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Active">
                                    Active
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>
                            </select>

                            {errors.status && (
                                <small className="class-form-error">
                                    {errors.status}
                                </small>
                            )}

                        </div>

                    </div>

                </div>

                {/* Form Actions */}
                <div className="class-form-actions">

                    <Link
                        to="/classes"
                        className="class-cancel-btn"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="save-class-btn"
                    >
                        <Save size={17} />

                        {isEditMode
                            ? "Update Class"
                            : "Save Class"}
                    </button>

                </div>

            </form>

        </div>
    );
}

/*
 * Small fallback icon for the "Class Not Found" page.
 */
function GraduationCapIcon() {
    return (
        <div className="class-not-found-icon">
            <span>!</span>
        </div>
    );
}

export default ClassForm;


// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//     ArrowLeft,
//     Save,
//     BookOpen,
//     User,
//     DoorOpen,
//     CalendarDays,
//     Layers3,
//     CircleCheck,
// } from "lucide-react";

// /*
//  * Temporary frontend data.
//  * Later this will come from your Laravel API.
//  */
// const classes = [
//     {
//         id: "CLS-001",
//         className: "10th",
//         section: "A",
//         teacher: "Muhammad Ali",
//         room: "Room 101",
//         academicYear: "2026-2027",
//         status: "Active",
//     },
//     {
//         id: "CLS-002",
//         className: "9th",
//         section: "B",
//         teacher: "Ahmed Khan",
//         room: "Room 102",
//         academicYear: "2026-2027",
//         status: "Active",
//     },
//     {
//         id: "CLS-003",
//         className: "8th",
//         section: "A",
//         teacher: "Usman Tariq",
//         room: "Room 103",
//         academicYear: "2026-2027",
//         status: "Inactive",
//     },
// ];

// const emptyForm = {
//     className: "",
//     section: "",
//     teacher: "",
//     room: "",
//     academicYear: "",
//     status: "Active",
// };

// function ClassForm() {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const isEditMode = Boolean(id);

//     /*
//      * Find the class before initializing state.
//      * This avoids setState inside useEffect.
//      */
//     const existingClass = isEditMode
//         ? classes.find((item) => String(item.id) === String(id))
//         : null;

//     const initialFormData = existingClass
//         ? {
//             className: existingClass.className || "",
//             section: existingClass.section || "",
//             teacher: existingClass.teacher || "",
//             room: existingClass.room || "",
//             academicYear: existingClass.academicYear || "",
//             status: existingClass.status || "Active",
//         }
//         : emptyForm;

//     const [formData, setFormData] = useState(initialFormData);
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormData((previous) => ({
//             ...previous,
//             [name]: value,
//         }));

//         if (errors[name]) {
//             setErrors((previous) => ({
//                 ...previous,
//                 [name]: "",
//             }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.className.trim()) {
//             newErrors.className = "Class name is required.";
//         }

//         if (!formData.section.trim()) {
//             newErrors.section = "Section is required.";
//         }

//         if (!formData.teacher.trim()) {
//             newErrors.teacher = "Teacher name is required.";
//         }

//         if (!formData.room.trim()) {
//             newErrors.room = "Room is required.";
//         }

//         if (!formData.academicYear.trim()) {
//             newErrors.academicYear = "Academic year is required.";
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!validateForm()) {
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             /*
//              * Temporary frontend testing.
//              *
//              * Later:
//              *
//              * CREATE:
//              * POST /api/classes
//              *
//              * UPDATE:
//              * PUT /api/classes/{id}
//              */

//             if (isEditMode) {
//                 console.log("Updating class:", id, formData);
//             } else {
//                 console.log("Creating class:", formData);
//             }

//             await new Promise((resolve) =>
//                 setTimeout(resolve, 700)
//             );

//             navigate("/classes");
//         } catch (error) {
//             console.error("Class submission failed:", error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     /*
//      * If an invalid ID is entered.
//      */
//     if (isEditMode && !existingClass) {
//         return (
//             <div className="class-page">

//                 <div className="class-form-card">

//                     <div className="empty-state">
//                         <BookOpen size={42} />

//                         <h2>Class Not Found</h2>

//                         <p>
//                             The class you are trying to edit does not exist.
//                         </p>

//                         <button
//                             type="button"
//                             className="save-button"
//                             onClick={() => navigate("/classes")}
//                         >
//                             <ArrowLeft size={18} />
//                             Back to Classes
//                         </button>
//                     </div>

//                 </div>

//             </div>
//         );
//     }

//     return (
//         <div className="class-page">

//             {/* =========================================
//                 PAGE HEADER
//             ========================================= */}

//             <div className="class-page-header">

//                 <div>

//                     <button
//                         type="button"
//                         className="back-button"
//                         onClick={() => navigate("/classes")}
//                     >
//                         <ArrowLeft size={18} />
//                         Back to Classes
//                     </button>

//                     <div className="page-title-wrapper">

//                         <div className="page-title-icon">
//                             <BookOpen size={24} />
//                         </div>

//                         <div>

//                             <h1>
//                                 {isEditMode
//                                     ? "Edit Class"
//                                     : "Add New Class"}
//                             </h1>

//                             <p>
//                                 {isEditMode
//                                     ? "Update class information and settings."
//                                     : "Create a new class for your school."}
//                             </p>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//             {/* =========================================
//                 FORM CARD
//             ========================================= */}

//             <div className="class-form-card">

//                 <form onSubmit={handleSubmit}>

//                     {/* =====================================
//                         CLASS INFORMATION
//                     ===================================== */}

//                     <div className="form-section">

//                         <div className="form-section-header">

//                             <div className="form-section-icon">
//                                 <Layers3 size={19} />
//                             </div>

//                             <div>
//                                 <h2>Class Information</h2>

//                                 <p>
//                                     Enter the basic information about this class.
//                                 </p>
//                             </div>

//                         </div>

//                         <div className="form-grid">

//                             {/* CLASS NAME */}

//                             <div className="form-group">

//                                 <label htmlFor="className">
//                                     Class Name <span>*</span>
//                                 </label>

//                                 <div className="input-wrapper">

//                                     <BookOpen size={18} />

//                                     <input
//                                         id="className"
//                                         name="className"
//                                         type="text"
//                                         placeholder="e.g. 10th"
//                                         value={formData.className}
//                                         onChange={handleChange}
//                                     />

//                                 </div>

//                                 {errors.className && (
//                                     <small className="form-error">
//                                         {errors.className}
//                                     </small>
//                                 )}

//                             </div>

//                             {/* SECTION */}

//                             <div className="form-group">

//                                 <label htmlFor="section">
//                                     Section <span>*</span>
//                                 </label>

//                                 <div className="input-wrapper">

//                                     <Layers3 size={18} />

//                                     <input
//                                         id="section"
//                                         name="section"
//                                         type="text"
//                                         placeholder="e.g. A"
//                                         value={formData.section}
//                                         onChange={handleChange}
//                                     />

//                                 </div>

//                                 {errors.section && (
//                                     <small className="form-error">
//                                         {errors.section}
//                                     </small>
//                                 )}

//                             </div>

//                             {/* TEACHER */}

//                             <div className="form-group">

//                                 <label htmlFor="teacher">
//                                     Class Teacher <span>*</span>
//                                 </label>

//                                 <div className="input-wrapper">

//                                     <User size={18} />

//                                     <input
//                                         id="teacher"
//                                         name="teacher"
//                                         type="text"
//                                         placeholder="e.g. Muhammad Ali"
//                                         value={formData.teacher}
//                                         onChange={handleChange}
//                                     />

//                                 </div>

//                                 {errors.teacher && (
//                                     <small className="form-error">
//                                         {errors.teacher}
//                                     </small>
//                                 )}

//                             </div>

//                             {/* ROOM */}

//                             <div className="form-group">

//                                 <label htmlFor="room">
//                                     Classroom <span>*</span>
//                                 </label>

//                                 <div className="input-wrapper">

//                                     <DoorOpen size={18} />

//                                     <input
//                                         id="room"
//                                         name="room"
//                                         type="text"
//                                         placeholder="e.g. Room 101"
//                                         value={formData.room}
//                                         onChange={handleChange}
//                                     />

//                                 </div>

//                                 {errors.room && (
//                                     <small className="form-error">
//                                         {errors.room}
//                                     </small>
//                                 )}

//                             </div>

//                             {/* ACADEMIC YEAR */}

//                             <div className="form-group">

//                                 <label htmlFor="academicYear">
//                                     Academic Year <span>*</span>
//                                 </label>

//                                 <div className="input-wrapper">

//                                     <CalendarDays size={18} />

//                                     <input
//                                         id="academicYear"
//                                         name="academicYear"
//                                         type="text"
//                                         placeholder="e.g. 2026-2027"
//                                         value={formData.academicYear}
//                                         onChange={handleChange}
//                                     />

//                                 </div>

//                                 {errors.academicYear && (
//                                     <small className="form-error">
//                                         {errors.academicYear}
//                                     </small>
//                                 )}

//                             </div>

//                             {/* STATUS */}

//                             <div className="form-group">

//                                 <label htmlFor="status">
//                                     Status
//                                 </label>

//                                 <div className="input-wrapper">

//                                     <CircleCheck size={18} />

//                                     <select
//                                         id="status"
//                                         name="status"
//                                         value={formData.status}
//                                         onChange={handleChange}
//                                     >
//                                         <option value="Active">
//                                             Active
//                                         </option>

//                                         <option value="Inactive">
//                                             Inactive
//                                         </option>
//                                     </select>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                     {/* =====================================
//                         ACTIONS
//                     ===================================== */}

//                     <div className="form-actions">

//                         <button
//                             type="button"
//                             className="cancel-button"
//                             onClick={() => navigate("/classes")}
//                             disabled={isSubmitting}
//                         >
//                             Cancel
//                         </button>

//                         <button
//                             type="submit"
//                             className="save-button"
//                             disabled={isSubmitting}
//                         >
//                             <Save size={18} />

//                             {isSubmitting
//                                 ? "Saving..."
//                                 : isEditMode
//                                     ? "Update Class"
//                                     : "Create Class"}
//                         </button>

//                     </div>

//                 </form>

//             </div>

//         </div>
//     );
// }

// export default ClassForm;


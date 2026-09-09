
/* =========================================================
   STAFF DATA STORAGE
   ========================================================= */

const STORAGE_KEY = "school_management_staff";


/* =========================================================
   INITIAL STAFF DATA
   ========================================================= */

const initialStaffMembers = [
    {
        id: "STF-001",
        name: "Ahmed Khan",
        email: "ahmed@example.com",
        phone: "03001234567",
        gender: "Male",
        dateOfBirth: "1990-05-15",
        address: "Lahore, Pakistan",
        designation: "Mathematics Teacher",
        department: "Teaching",
        joiningDate: "2023-01-10",
        salary: "65000",
        status: "Active",
    },
    {
        id: "STF-002",
        name: "Sara Ali",
        email: "sara@example.com",
        phone: "03111234567",
        gender: "Female",
        dateOfBirth: "1992-08-20",
        address: "Lahore, Pakistan",
        designation: "English Teacher",
        department: "Teaching",
        joiningDate: "2023-02-15",
        salary: "60000",
        status: "Active",
    },
    {
        id: "STF-003",
        name: "Usman Malik",
        email: "usman@example.com",
        phone: "03221234567",
        gender: "Male",
        dateOfBirth: "1988-03-12",
        address: "Lahore, Pakistan",
        designation: "Accountant",
        department: "Administration",
        joiningDate: "2022-08-01",
        salary: "70000",
        status: "Active",
    },
    {
        id: "STF-004",
        name: "Ayesha Noor",
        email: "ayesha@example.com",
        phone: "03331234567",
        gender: "Female",
        dateOfBirth: "1987-11-25",
        address: "Lahore, Pakistan",
        designation: "HR Manager",
        department: "Human Resources",
        joiningDate: "2021-06-10",
        salary: "85000",
        status: "Inactive",
    },
];


/* =========================================================
   GET STAFF
   ========================================================= */

export const getStaff = () => {
    try {
        const storedStaff = localStorage.getItem(STORAGE_KEY);

        if (!storedStaff) {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(initialStaffMembers)
            );

            return initialStaffMembers;
        }

        const parsedStaff = JSON.parse(storedStaff);

        if (!Array.isArray(parsedStaff)) {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(initialStaffMembers)
            );

            return initialStaffMembers;
        }

        return parsedStaff;
    } catch (error) {
        console.error("Unable to load staff:", error);

        return initialStaffMembers;
    }
};


/* =========================================================
   SAVE STAFF
   ========================================================= */

const saveStaff = (staffMembers) => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(staffMembers)
    );
};


/* =========================================================
   GET STAFF BY ID
   ========================================================= */

export const getStaffById = (id) => {
    const staffMembers = getStaff();

    return staffMembers.find(
        (member) => member.id === id
    );
};


/* =========================================================
   CREATE STAFF
   ========================================================= */

export const createStaff = (staffData) => {
    const staffMembers = getStaff();

    const newStaff = {
        ...staffData,
        id: generateStaffId(staffMembers),
    };

    const updatedStaff = [
        ...staffMembers,
        newStaff,
    ];

    saveStaff(updatedStaff);

    return newStaff;
};


/* =========================================================
   UPDATE STAFF
   ========================================================= */

export const updateStaff = (id, staffData) => {
    const staffMembers = getStaff();

    const updatedStaff = staffMembers.map((member) =>
        member.id === id
            ? {
                ...member,
                ...staffData,
                id,
            }
            : member
    );

    saveStaff(updatedStaff);

    return updatedStaff.find(
        (member) => member.id === id
    );
};


/* =========================================================
   DELETE STAFF
   ========================================================= */

export const deleteStaff = (id) => {
    const staffMembers = getStaff();

    const updatedStaff = staffMembers.filter(
        (member) => member.id !== id
    );

    saveStaff(updatedStaff);

    return updatedStaff;
};


/* =========================================================
   GENERATE STAFF ID
   ========================================================= */

const generateStaffId = (staffMembers) => {
    let highestNumber = 0;

    staffMembers.forEach((member) => {
        const match = member.id?.match(/^STF-(\d+)$/);

        if (match) {
            const number = Number(match[1]);

            if (number > highestNumber) {
                highestNumber = number;
            }
        }
    });

    return `STF-${String(
        highestNumber + 1
    ).padStart(3, "0")}`;
};


/* =========================================================
   RESET STAFF DATA
   Optional helper for development/testing
   ========================================================= */

export const resetStaffData = () => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(initialStaffMembers)
    );

    return initialStaffMembers;
};


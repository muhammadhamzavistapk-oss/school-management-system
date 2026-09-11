// import api from "./api";

// const studentService = {
//     getAll: (params = {}) =>
//         api.get("/students", { params }),

//     getById: (id) =>
//         api.get(`/students/${id}`),

//     create: (data) =>
//         api.post("/students", data),

//     update: (id, data) =>
//         api.put(`/students/${id}`, data),

//     delete: (id) =>
//         api.delete(`/students/${id}`),
// };

// export default studentService;

import api from "./api";

function normalizeStudent(student) {
    if (!student) {
        return student;
    }

    return {
        ...student,
        className: student.className ?? student.class_name ?? "",
        dateOfBirth:
            student.dateOfBirth ?? student.date_of_birth ?? "",
        guardianName:
            student.guardianName ?? student.guardian_name ?? "",
        guardianPhone:
            student.guardianPhone ?? student.guardian_phone ?? "",
    };
}

function toApiStudent(student) {
    const {
        className,
        dateOfBirth,
        guardianName,
        guardianPhone,
        ...rest
    } = student;

    return {
        ...rest,
        class_name: className,
        date_of_birth: dateOfBirth,
        guardian_name: guardianName,
        guardian_phone: guardianPhone,
    };
}

function getResponseStudent(response) {
    return {
        ...response,
        data: normalizeStudent(response.data?.data || response.data),
    };
}

const studentService = {
    getAll: async (params = {}) => {
        const response = await api.get("/students", { params });
        const students = Array.isArray(response.data)
            ? response.data
            : response.data?.data || [];

        return {
            ...response,
            data: students.map(normalizeStudent),
        };
    },

    getById: async (id) =>
        getResponseStudent(await api.get(`/students/${id}`)),

    create: (data) =>
        api.post("/students", toApiStudent(data)),

    update: (id, data) =>
        api.put(`/students/${id}`, toApiStudent(data)),

    delete: (id) =>
        api.delete(`/students/${id}`),
};

export default studentService;


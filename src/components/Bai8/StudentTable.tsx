import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "./StudentApi";
import StudentRow from "./StudentRow";

type Student = {
  id: number;
  student_name: string;
  email: string;
  phone: string;
};

const StudentTable: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [studentIdToDelete, setStudentIdToDelete] = useState<number | null>(
    null
  );

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (id: number) => {
    setStudentIdToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (studentIdToDelete !== null) {
      try {
        await deleteStudent(studentIdToDelete);
        await fetchStudents();
      } catch (error) {
        console.error("Error deleting student:", error);
      }
      setShowModal(false);
      setStudentIdToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setStudentIdToDelete(null);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Quản lý sinh viên</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "5px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Xác nhận xóa</h3>
            <p>Bạn có chắc muốn xóa sinh viên này?</p>
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <button
                onClick={cancelDelete}
                style={{
                  marginRight: "10px",
                  padding: "8px 16px",
                  background: "#ccc",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Hủy
              </button>
              <button
                onClick={confirmDelete}
                style={{
                  padding: "8px 16px",
                  background: "#ff4444",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;

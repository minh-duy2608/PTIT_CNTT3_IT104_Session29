import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from './StudentApi';
import StudentRow from './StudentRow';

type Student = {
  id: number;
  student_name: string;
  email: string;
  phone: string;
};

const StudentTable: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    fetchStudents();
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
            <StudentRow key={student.id} student={student} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
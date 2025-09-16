import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then((res) => setStudents(res.data))
      .catch((err) => console.error('Lỗi khi gọi API:', err));
  }, []);

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Điện thoại</th>
            <th>Trạng thái</th>
            <th>Thời gian thêm</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.student_name}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>{student.status ? 'Hoạt động' : 'Không hoạt động'}</td>
              <td>{new Date(student.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
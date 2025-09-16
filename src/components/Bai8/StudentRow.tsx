import React from 'react';

type Props = {
  student: {
    id: number;
    student_name: string;
    email: string;
    phone: string;
  };
  onDelete: (id: number) => Promise<void>;
};

const StudentRow: React.FC<Props> = ({ student, onDelete }) => {
  return (
    <tr>
      <td>{student.student_name}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>
        <button onClick={() => alert('Chức năng sửa chưa có')}>✏️</button>
        <button onClick={() => onDelete(student.id)}>🗑️</button>
      </td>
    </tr>
  );
};

export default StudentRow;
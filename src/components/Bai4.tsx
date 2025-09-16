import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
type studentType = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
export default function Bai4() {
  const [students, setStudents] = useState<studentType[]>([]);
  const getAllStudent = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/students`);
      setStudents(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    getAllStudent();
  }, []);
  return (
    <>
      {students.map((student) => (
        <Card>
          <h2>{student.id}</h2>
          <h2>{student.student_name}</h2>
          <h2>{student.email}</h2>
          <h2>{student.address}</h2>
          <h2>{student.phone}</h2>
          <h2>{student.status}</h2>
          <h2>{student.created_at}</h2>
        </Card>
      ))}
    </>
  );
}
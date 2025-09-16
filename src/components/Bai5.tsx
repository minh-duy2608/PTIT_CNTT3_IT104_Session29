import { Card } from "antd";
import axios from "axios";
import React, { useState } from "react";
type studentType = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
export default function Bai5() {
  const [input, setInput] = useState("");
  const [students, setStudents] = useState<studentType | null>(null);
  const getStudentsById = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/students/${input}`);
      setStudents(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      getStudentsById();
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nhập id sinh viên" value={input} onChange={(e) => setInput(e.target.value)} />
          <button>Search</button>
        </form>
        <div>
          {students && (
            <Card key={students.id}>
              <h2>{students.id}</h2>
              <h2>{students.student_name}</h2>
              <h2>{students.email}</h2>
              <h2>{students.address}</h2>
              <h2>{students.phone}</h2>
              <h2>{students.status}</h2>
              <h2>{students.created_at}</h2>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
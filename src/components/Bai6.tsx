import axios from "axios";

type StudentType = {
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function Bai6() {
  const createStudent = async () => {
    const newStudent: StudentType = {
      student_name: "Nguyễn Thị Hồng",
      email: "hongnt@example.com",
      address: "Hải Phòng",
      phone: "0911222333",
      status: true,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await axios.post("http://localhost:3000/students", newStudent);
      console.log("Kết quả trả về từ server:", response.data);
    } catch (error) {
      console.error("Lỗi khi thêm sinh viên:", error);
    }
  };

  return (
    <div>
      <button onClick={createStudent}>Thêm sinh viên mới</button>
    </div>
  );
}
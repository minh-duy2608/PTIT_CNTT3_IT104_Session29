import axios from 'axios';
const API_URL = 'http://localhost:3001/students';
export const getStudents = () => axios.get(API_URL);
export const deleteStudent = (id: number) => axios.delete(`${API_URL}/${id}`);
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
    const [grades, setGrades] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                const response = await axios.get('http://localhost:5000');
                setGrades(response.data);
            } catch (error) {
                console.error('Error fetching grades:', error);
            }
        };

        fetchGrades();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure ?")) {
            try {
                await axios.delete(`http://localhost:5000/delete-grade/${id}`);
                setGrades(grades.filter(grade => grade.id !== id));
            } catch (error) {
                console.error('Error deleting subject:', error);
            }
        }
    };

    return (
        <div className="dashboard-container">
            <h1 className="text-center">Education Track</h1>
            <button className="btn btn-primary" onClick={() => navigate('/create-grade')}>Create</button>
            <table>
                <thead>
                    <tr>
                        <th>Subject Code</th>
                        <th>Subject Name</th>
                        <th>Credits</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.length > 0 ? (
                        grades.map((grade) => (
                            <tr key={grade.id}>
                                <td>{grade.subject_code}</td>
                                <td>{grade.subject_name}</td>
                                <td>{grade.credits}</td>
                                <td>{grade.grade}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(grade.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;

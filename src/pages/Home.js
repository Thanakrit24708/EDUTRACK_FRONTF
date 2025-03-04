import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home() {
    const [studentId, setStudentId] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (studentId.length !== 9 || isNaN(studentId)) {
            alert('กรุณากรอกเลขประจำตัว 9 หลัก');
            return;
        }

        try {
            const response = await axios.get('http://localhost:5000'); //แก้

            if (response.data) {
                navigate('/dashboard');
            } else {
                alert('รหัสประจำตัวไม่ถูกต้อง');
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        // ตรวจสอบว่าเป็นตัวเลขและมีความยาวไม่เกิน 9 ตัว
        if (!isNaN(value) && value.length <= 9) {
            setStudentId(value);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="login-form">
                <h2 className="text-center">Education Track</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Student ID</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={studentId} 
                            onChange={handleChange} 
                            required 
                            maxLength={9}  // กำหนดให้ช่องกรอกไม่เกิน 9 ตัว
                        />
                    </div>
                    <button type="submit"  className="btn btn-primary mt-3">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Home;

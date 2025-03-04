import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateUser() {
    const [subject_code, setSubject_code] = useState("");
    const [subject_name, setSubject_name] = useState("");
    const [credits, setCredits] = useState("");
    const [grade, setGrade] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/create-grade", { subject_code, subject_name, credits, grade });
            navigate('/'); //redirect to home page
        } catch (error) {
            setMessage("Error creating subject, please try again");
        }
    }

    return (
        <div className='container'>
            <h1>Create Subject</h1>
            {message && <p className='text-danger'>{message}</p>}

            <form onSubmit={handleSubmit}>
                <div className="w-25 p-3">
                    <label className='form-label'>Subject Code:</label>
                    <input type="text" 
                    className="form-control"
                    value={subject_code}
                    onChange={(e) => setSubject_code(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Subject Name:</label>
                    <input type="text"
                    className="form-control" 
                    value={subject_name}
                    onChange={(e) => setSubject_name(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Credits:</label>
                    <input type="number" 
                    className="form-control" 
                    value={credits}
                    onChange={(e) => setCredits(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Grade:</label>
                    <select className="form-control" value={grade} onChange={(e) => setGrade(e.target.value)} required>
                        <option value="">Select Grade</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                </div>

                <div className="w-25 p-3">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser;

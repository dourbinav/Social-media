import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addpost } from './features/Slice';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Add() {
    const [caption, setCaption] = useState("");
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const userid = useSelector((state) => state.session.UserId);

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    }

    function handleSubmit() {
        if (file) {
            const formData = new FormData();
            formData.append("file", file); 
            formData.append("caption", caption);
            formData.append("userid", userid);
            dispatch(Addpost(formData));
        } else {
            alert('Please select a file to upload.');
        }
    }

    return (
        <div>
            <Navbar />
            <div className='bg-black p-2 h-screen text-white'>
                <div className='h-64 border-8 border-slate-200 flex justify-center items-center'>
                    <div className='text-xs'>
                        <input type="file" onChange={handleFileChange} alt='preview' />
                        {file  && <img src={URL.createObjectURL(file)} alt="preview" />}
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p>Caption:</p>
                    <textarea 
                        name='caption' 
                        value={caption} 
                        onChange={(e) => setCaption(e.target.value)} 
                        type='text' 
                        rows="2" 
                        className='bg-slate-200 outline-none' 
                    />
                    <button onClick={handleSubmit} className='bg-blue-500 p-2'>Post</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import socket from './socket';  // Assuming your socket.js file is in the same directory

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Event listener for receiving messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up socket event listener on unmount (optional)
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return; // Prevent sending empty messages

    // Emit message to the server
    socket.emit('sendMessage', message);

    // Update state to display sent message on the right
    setMessages((prevMessages) => [...prevMessages, { text: message, type: 'sent' }]);
    
    // Clear input field after sending message
    setMessage('');
  };

  return (
    <div className='bg-black h-screen relative'>
      <div className='flex space-x-2 py-2 px-4 items-center'>
        <div className='w-12 aspect-square rounded-full bg-black'>
          <img
            alt='/'
            className='object-cover h-12 rounded-full'
            src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          />
        </div>
        <p className='text-white'>Username</p>
      </div>
      <div className='space-y-1'>
        {messages.map((msg, index) => (
          <span
            key={index}
            className={`float-${msg.type === 'sent' ? 'right' : 'left'} clear-both text-white bg-purple-600 px-4 py-2 rounded-md`}
          >
            {msg.text}
          </span>
        ))}
      </div>
      <form className='flex absolute w-screen bottom-1' onSubmit={sendMessage}>
        <input
          className='grow outline-none '
          type='text'
          placeholder='Enter Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='bg-blue-400 text-white px-4 py-2' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}

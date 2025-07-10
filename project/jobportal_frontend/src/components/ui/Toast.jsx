import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

function Toaster({ show, onClose, message = "User created successfully!" }) {
  const [time, setTime] = useState("");
//   console.log(show)
let s  = show
// console.log(s)

  useEffect(() => {
    if (show) {
      // Set the current time when toast is shown
      const now = new Date();
      const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(formatted);

      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

//   console.log(show)

  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast show={show} onClose={onClose} delay={5000} autohide>
        <Toast.Header closeButton>
          <strong className="me-auto">Bootstrap</strong>
          <small>{time}</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toaster;

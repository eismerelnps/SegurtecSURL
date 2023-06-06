import React, { useState } from "react";
import ReactModal from "react-modal";

import './modal2.css'

export const Modal2 = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar el formulario
    // Puedes acceder a los valores de email, subject y message
    // y realizar las acciones necesarias, como enviar una solicitud a un servidor, etc.
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    // Luego, puedes cerrar el modal
    closeModal();
  };

  return (
    <ReactModal className='' isOpen={isOpen} onRequestClose={closeModal}>
      <div className="modal-container w-100 h-100">
        <div className="w-100 h-100">
          <div className="modal-content w-100 h-100">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
              <h2 className="modal-title">Contáctenos</h2>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    value={subject}
                    onChange={handleSubjectChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    className="form-control"
                    value={message}
                    onChange={handleMessageChange}
                    required
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
            <button type="submit" className="btn btn-primary">Enviar</button>

            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

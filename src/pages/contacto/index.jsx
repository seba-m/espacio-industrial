import React, { useState, useEffect } from 'react';
import styles from "@/styles/contact/contact.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CampoTexto = ({ id, placeholder, onChange, limpiar }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    setValue('');
  }, [limpiar]);

  // Decide si utilizar un input o un textarea según el id
  const inputElement = id === 'mensaje' ? (
    <textarea
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={styles.inputTextarea}
    />
  ) : (
    <input
      type="text"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={styles.input}
    />
  );

  return (
    <div className={styles.textfield}>
      {inputElement}
      {limpiar && id === 'mensaje' ? (
        <button className={styles.clearButton2} onClick={() => setValue('')}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      ) : (
        <button className={styles.clearButton} onClick={() => setValue('')}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
    </div>
  );
};


export default function Contact() {
  const imageUrl = 'https://www.espacioindustria.cl/img/banner-proveedores-contacto.d65424ea.jpg';
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [limpiar, setLimpiar] = useState(true);


  const enviarMensaje = () => {
    console.log('Mensaje enviado:', { nombre, apellido, empresa, correo, mensaje });
  };

  return (
    <div>
      <img className={styles.imagen} src={imageUrl} alt="Banner" />
      <div className={styles.container}>
        <h2 className={styles.title}>Envíanos un mensaje</h2>
        <div className={styles.camposContainer}>
          <div className={styles.nameContainer}>
            <CampoTexto id="nombre" placeholder="Nombre" onChange={setNombre} limpiar={limpiar} />
            <CampoTexto id="apellido" placeholder="Apellido" onChange={setApellido} limpiar={limpiar} />
          </div>
          <CampoTexto id="empresa" placeholder="Empresa" onChange={setEmpresa} limpiar={limpiar} />
          <CampoTexto id="correo" placeholder="Correo Electrónico" onChange={setCorreo} limpiar={limpiar} />
          <div className={styles.messageContainer}>
            <CampoTexto id="mensaje" placeholder="Mensaje..." onChange={setMensaje} limpiar={limpiar} />
          </div>
        </div>
        {/* Botones */}
        <div className={styles.button}>
          <button className={styles.sendButton} onClick={enviarMensaje}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
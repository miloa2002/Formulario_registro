import { useState } from "react";
import React from "react";

const Formulario = (mensajeError) => {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [direccion, setDireccion] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, pais, direccion, contrasena, confirmar].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(error);
      }, 2000);
      return;
    } else if (
      nombre !== "" &&
      pais !== "" &&
      direccion !== "" &&
      contrasena !== confirmar
    ) {
      setError(true);
      setTimeout(() => {
        setError(error);
      }, 2000);
      return;
    }
    setError(false);
  };

  return (
    <div className="md:w-1/2 text-left">
      <h2 className="font-bold text-2xl">¡Bienvenidos!</h2>
      <p className="font-semibold mb-8">
        Por favor, complete el siguiente formulario.
      </p>

      <form onSubmit={handleSubmit}>
        {error && (
          <p className=" bg-red-800 text-white font-bold p-2 mb-4 rounded-lg">
            {mensajeError.mensajeError}
          </p>
        )}

        <div className="campo-input mb-4">
          <label className="font-semibold" htmlFor="name">
            Nombre completo
          </label>
          <input
            id="name"
            className="block w-full px-2 py-1 border-2 mt-4 rounded-lg outline-none"
            type="text"
            placeholder="Tu nombre completo"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo-input mb-4">
          <label className="font-semibold" htmlFor="pais">
            País
          </label>
          <input
            id="pais"
            className="block w-full px-2 py-1 border-2 mt-4 rounded-lg outline-none"
            type="text"
            placeholder="Tu país"
            onChange={(e) => setPais(e.target.value)}
          />
        </div>

        <div className="campo-input mb-4">
          <label className="font-semibold" htmlFor="direccion">
            Dirección
          </label>
          <input
            id="direccion"
            className="block w-full px-2 py-1 border-2 mt-4 rounded-lg outline-none"
            type="text"
            placeholder="Tu Dirección"
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>

        <div className="campo-input mb-4">
          <label className="font-semibold" htmlFor="contrasena">
            Contraseña
          </label>
          <input
            id="contrasena"
            className="block w-full px-2 py-1 border-2 mt-4 rounded-lg outline-none"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <div className="campo-input mb-4">
          <label className="font-semibold" htmlFor="confirmar">
            Confirmar contraseña
          </label>
          <input
            id="confirmar"
            className="block w-full px-2 py-1 border-2 mt-4 rounded-lg outline-none"
            type="password"
            placeholder="Confirmar contraseña"
            onChange={(e) => setConfirmar(e.target.value)}
          />
        </div>

        <input
          className="btn-registro bg-orange-500 p-2 text-white mt-3 font-bold rounded-md hover:bg-orange-600 cursor-pointer"
          type="submit"
          value="Registrarme"
        />
      </form>
    </div>
  );
};

export default Formulario;

import Formulario from "./components/Formulario";
import Imagen from "./components/Imagen";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="md:flex m-12 items-center">
        <Formulario mensajeError="Faltan campos por llenar o las contraseñas no coinciden" />
        <Imagen />
      </div>
      <Footer />
    </>
  );
}

export default App;

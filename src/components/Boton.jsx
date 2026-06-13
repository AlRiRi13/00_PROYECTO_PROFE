// Boton es un componente visual muy sencillo.
// Recibe por props el texto a mostrar (text) y la funcion a ejecutar al pulsar (onClick).
function Boton({ text, onClick }) {
  return (
    <button className="boton" type="button" onClick={onClick}>
      {text}
    </button>
  )
}

// Exportamos Boton para poder usarlo dentro de la pagina Inicio.
export default Boton




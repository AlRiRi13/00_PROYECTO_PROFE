// Contacto es una pagina de la aplicacion.
// Vive en pages/ porque representa una pantalla completa.
// La ruta "/dondeestamos" mostrara este componente gracias a AppRoutes.jsx.
function Dondeestamos() {
  return (
    // Esta seccion es el contenido completo de la pagina Contacto.
    <section className="bloque-dondeestamos">
      <p className="etiqueta">Pagina interna</p>

      <h1>¿Dónde estamos?</h1>

      <p className="entradilla">
        Esta pagina existe porque la hemos asociado a la URL /¿Dónde estamos?.
      </p>

      <p>
        {/* Este texto resume la idea central de la clase 2. */}
        React Router decide que componente debe mostrarse segun la ruta actual.
        Asi podemos anadir nuevas paginas sin mezclar todo dentro de App.jsx.
      </p>
    </section>
  )
}

// Exportamos Dondeestamos para poder asociarlo a una URL desde AppRoutes.jsx.
export default Dondeestamos

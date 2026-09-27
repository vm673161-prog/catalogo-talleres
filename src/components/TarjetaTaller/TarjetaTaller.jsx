import { useState } from "react";
import estilos from "./TarjetaTaller.module.css";
import Boton from "../Boton/Boton";

export default function TarjetaTaller({ taller, vista }) {
  const { titulo, categoria, cupo, inscriptos, nuevo } = taller;

  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  let claseEstado = estilos.disponible;

  if (libres === 0) {
    claseEstado = estilos.completo;
  } else if (libres <= 3) {
    claseEstado = estilos.pocos;
  }

  const clasesTarjeta = [
  estilos.tarjeta,
  claseEstado,
  mostrarDetalles && estilos.expandida,
  vista === "lista" && estilos.lista
].filter(Boolean).join(" ");

  return (
    <article className={clasesTarjeta}>
      <div>
  <h2>{titulo}</h2>

  {nuevo && <span className={estilos.nuevo}>Nuevo</span>}

  <p>{categoria}</p>

  <p>
    Cupos libres: {libres} de {cupo}
  </p>

  {libres === 0 && (
    <p className={estilos.textoCompleto}>Completo</p>
  )}
</div>

<div>
  <div className={estilos.barra}>
    <div
      className={estilos.relleno}
      style={{ width: porcentaje + "%" }}
    ></div>
  </div>

  <p className={estilos.porcentaje}>
    {porcentaje}% ocupado
  </p>

  {mostrarDetalles && (
    <p className={estilos.descripcion}>
      {taller.descripcion}
    </p>
  )}

  <Boton
    variante="secundario"
    activo={mostrarDetalles}
    onClick={() => setMostrarDetalles(!mostrarDetalles)}
  >
    {mostrarDetalles ? "Ocultar detalles" : "Ver detalles"}
  </Boton>
</div>
    </article>
  );
}
import Boton from "./components/Boton/Boton";
import { useState } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";

export default function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);
  //Estados de visualización del Punto 3
  const [vista, setVista] = useState("grilla");
  const [compacto, setCompacto] = useState(false);

  return (
    <div data-tema={temaOscuro ? "oscuro" : "claro"}>
      <main className={`container ${compacto ? "py-2" : "py-5"}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
  <h1>Catálogo de Talleres</h1>

  <div className="d-flex gap-2">
    <Boton
      variante="secundario"
      activo={vista === "grilla"}
      onClick={() => setVista("grilla")}
    >
      Grilla
    </Boton>

    <Boton
      variante="secundario"
      activo={vista === "lista"}
      onClick={() => setVista("lista")}
    >
      Lista
    </Boton>
    <Boton
    variante="secundario"
   activo={compacto}
   onClick={() => setCompacto(!compacto)}
>
  {compacto ? "Modo normal" : "Modo compacto"}
</Boton>

    <Boton
      variante="primario"
      onClick={() => setTemaOscuro(!temaOscuro)}
    >
      {temaOscuro ? "Tema claro" : "Tema oscuro"}
    </Boton>
  </div>
</div>

        <div className={`row ${compacto ? "g-2" : "g-4"}`}>
  {talleres.map((taller) => (
    <div
      key={taller.id}
      className={
        vista === "grilla"
          ? "col-12 col-md-6 col-lg-4"
          : "col-12"
      }
    >
      <TarjetaTaller taller={taller} vista={vista} />
    </div>
  ))}
</div>
      </main>
    </div>
  );
}

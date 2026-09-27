import estilos from "./Boton.module.css";

export default function Boton({
  children,
  variante = "primario",
  activo = false,
  ...props
}) {
  const clases = [
    estilos.boton,
    estilos[variante],
    activo && estilos.activo
  ].filter(Boolean).join(" ");

  return (
    <button className={clases} {...props}>
      {children}
    </button>
  );
}
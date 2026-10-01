export default function Experiencia() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h2>Mi experiencia</h2>
      <iframe
        src="https://www.youtube.com/embed/ecx3wq6Y8Is"
        title="Mi experiencia realizando la tarea"
        style={{ width: "100%", maxWidth: "720px", aspectRatio: "16 / 9", border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
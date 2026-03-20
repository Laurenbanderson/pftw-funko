export function FunkoRow({ funko, from, number, released, onDisplay, image }) {
  return (
    <div className={["funko-card", onDisplay && "displayed"].filter(Boolean).join(" ")}>
      <img src={image} alt={funko} className="funko-img" />
      <div className="funko-info">
        <h2>{funko}</h2>
        <p><strong>Show or Movie:</strong> {from}</p>
        <p><strong>Number:</strong> {number}</p>
        <p><strong>Release Year:</strong> {released}</p>
        <p><strong>On Display:</strong> {onDisplay ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
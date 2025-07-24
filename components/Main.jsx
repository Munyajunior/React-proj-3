export default function Main(props) {
  return (
    <article className="journal-entry">
      <div className="journal-image-container">
        <img
          className="journal-image"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src="../src/assets/marker.png"
          alt="marker"
          srcset=""
        />
        <span className="country">{props.country}</span>
        <a
          href={props.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-date">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}

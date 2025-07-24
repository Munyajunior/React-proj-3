import Header from "../components/Header";
import Main from "../components/Main";
import travelData from "../src/assets/data.js";
import "./index.css";
export default function App() {
  const travelJournal = travelData.map((item) => {
    return (
      <Main
        img={{ src: item.img.src, alt: item.img.alt }}
        title={item.title}
        country={item.country}
        googleMapsLink={item.googleMapsLink}
        dates={item.dates}
        text={item.text}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="container">{travelJournal}</div>
    </>
  );
}

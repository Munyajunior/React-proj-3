import Header from "../components/Header";
import Main from "../components/Main";
import travelData from "../src/assets/data.js";
import "./index.css";
export default function App() {
  const travelJournal = travelData.map((item) => {
    return <Main key={item.id} {...item} />;
  });

  return (
    <>
      <Header />
      <div className="container">{travelJournal}</div>
    </>
  );
}

import StarRating from "./components/StarRating.tsx";
import "./App.css";
const starStyling = {
  backgroundColor: "#314dee",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "80px",
  padding: ".5em 1em",
  textAlign: "center",
};

function App() {
  return (
    <main className="app-container">
      <StarRating style={starStyling} />
    </main>
  );
}

export default App;

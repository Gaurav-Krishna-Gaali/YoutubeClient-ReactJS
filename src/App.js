import "./App.css";
import Video from "./Video";
import SearchArea from "./SearchArea";

function App() {
  return (
    <div className="App">
      <SearchArea />
      <h2>WE-Tube</h2>
      <Video title="Video Title" date="1234" channel="XYZ" />
    </div>
  );
}

export default App;

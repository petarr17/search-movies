import { useState } from "react";
import Header from "./Components/Header";
import DisplayMovies from "./Components/DisplayMovies";

function App() {
  const [word, updateWord] = useState("");

  return (
    <div className="App">
      <Header update={updateWord} />
      <DisplayMovies word={word} />
    </div>
  );
}

export default App;

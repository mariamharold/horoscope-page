import "./App.scss";
import Header from "./components/Header/Hedaer";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;

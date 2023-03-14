import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./constants/data.json"

function App() {
  return (
    <div className="App">
      <Header />
      <Main data={data}/>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <Main />
        <Footer/>
      </div>
    </>
  );
}

export default App;
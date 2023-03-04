import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hader from "../src/components/Hader";
import Loader from "./components/Loader";
function App() {
  return (
    <>
      <Loader />
      <Hader />
    </>
  );
}

export default App;

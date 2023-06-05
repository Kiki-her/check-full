import "./App.css";
import Table from "./components/Table";
// import Checkout from "./components/Checkout";
import ShopIcon from "./components/ShopIcon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShopIcon />
        <h1>Hi all!</h1>
        <Table />
      </header>
    </div>
  );
}

export default App;

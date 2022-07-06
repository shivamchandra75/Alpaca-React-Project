// import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Components/avatar";

function App() {
  return (
    <section className="App px-24 py-10 bg-[lightgray] h-screen flex flex-col items-center">
      <h1 className="text-[4rem] font-bold text-left ">ALPACA GENERATOR</h1>
      <Avatar />
    </section>
  );
}

export default App;

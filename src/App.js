// import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Components/avatar";

function App() {
  return (
    <section className="App px-[5%] py-[2%]  md:px-[10%] md:py-[6%] lg:px-24 lg:py-10 bg-[lightgray] h-screen flex flex-col items-center">
      <h1 className=" text-base font-bold lg:text-5xl lg:text-[4rem] lg:text-left ">
        ALPACA GENERATOR
      </h1>
      <Avatar />
    </section>
  );
}

export default App;

import "./index.css";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <header>
        <div className="left">
          <div className="circle"></div>
        </div>
        <div className="links">
          <h4>works</h4>
          <h4>location</h4>
          <h4>about</h4>
        </div>
      </header>
      <div className="gridContainer">
        <h3>block</h3>

        {/* first column */}
        <Block gridRow="1/2" gridColumn="1/2" />
        <Block gridRow="1/2" gridColumn="6/8" />
        <Block gridRow="1/2" gridColumn="12/13" />

        {/* 2nd column */}
        <Block gridRow="6/8" gridColumn="1/2" />
        <Block gridRow="6/8" gridColumn="6/8" />
        <Block gridRow="6/8" gridColumn="12/13" />

        {/* 3rd column */}
        <Block gridRow="12/13" gridColumn="1/2" />
        <Block gridRow="12/13" gridColumn="6/8" />
        <Block gridRow="12/13" gridColumn="12/13" />
      </div>
    </div>
  );
}

export default App;

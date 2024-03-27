import "./App.scss";
import { BootstrapComponent } from "./components/bootstrap/BootstrapComponent";
import { ReactBootstrapComponent } from "./components/react-bootstrap/ReactBootstrapComponent";
import { TailwindComponent } from "./components/tailwind/TailwindComponent";

function App() {
  return (
    <div className="App">
      <div className="styling">
        <h3>Styling</h3>
        <div className="lib">
          <h3>Bootstrap</h3>
          <BootstrapComponent />
        </div>
        <div className="lib">
          <h3>React-Bootstrap</h3>
          <ReactBootstrapComponent />
        </div>
        <div className="lib">
          <h3>TailwindCSS</h3>
          <TailwindComponent />
        </div>
        <div className="lib">
        <h3>Material UI</h3>
        

        </div>
        <div className="lib"></div>
        <div className="lib"></div>
        <div className="lib"></div>
        <div className="lib"></div>
        <div className="lib"></div>
        <div className="lib"></div>
      </div>
    </div>
  );
}

export default App;

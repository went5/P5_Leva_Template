import "./styles.css";
import p5Types from "p5";
import Sketch from "react-p5";
import { useControls } from "leva";

export default function App() {
  const data = useControls(() => ({
    Color: "#030405"
  }));
  const setup = (p: p5Types, canvasParentRef: Element) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef);
  };
  const draw = (p: p5Types) => {
    p.background(data[0].Color);
  };
  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

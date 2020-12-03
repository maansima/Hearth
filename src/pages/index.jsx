import React from "react";
import p5 from "p5";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {

    let xPos = window.innerWidth/2;
    let yPos = window.innerWidth/8;
    let beads = [];

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
    };

    p.draw = () => {
        p.fill(229,83,0);
        var middle = window.innerWidth/8;
        var circles = 16;
        var angle = Math.PI*2 / circles;
        var radius = 200;
        
    
        for(var i = 0; i < circles; i++){
    
            var xCircle = xPos + p.cos(angle*i) * radius;
            var yCircle = yPos - p.sin(angle*i) * radius;
    
            p.ellipse(xCircle, yCircle, 60);
        }
        p.noStroke();
    };

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };

  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default MainPage;

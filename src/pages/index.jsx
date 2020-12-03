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
        p.fill(232, 230, 223);
        var circles = 16;
        var angle = Math.PI*2 / circles;
        var radius = 230;
        for(var i = 0; i < circles; i++){
            var xCircle = xPos + p.cos(angle*i) * radius;
            var yCircle = yPos - p.sin(angle*i) * radius;
            p.noStroke();
            beads.push(new Bead(xCircle, yCircle, 80)); 
        }
    };

    p.draw = () => {
        let s = p.second();
        if((s%16 >= 0 && s%16 < 4) || (s%16 >= 8 && s%16 < 12)){
            beads[s%16].fill(245, 158, 66);
        } else {
            beads[s%16].fill(255, 202, 10);
        }
       
        if(s%16 === 0) {
            for(var i = 0; i < beads.length; i++){
                beads[i].fill(232, 230, 223);
            }
        }
    };

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };

    class Bead {

        constructor(x, y, diameter) {
            this.x = x;
            this.y = y; 
            this.diameter = diameter; 
            this.display();
          }
        
          display() {
            p.ellipse(this.x, this.y, this.diameter);
            p.noStroke();
          }

          fill(r, g, b) {
              this.display();
              p.fill(r, g, b);
          }
    }

  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default MainPage;

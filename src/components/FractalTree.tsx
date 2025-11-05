import { useEffect, useRef } from 'react';
import p5 from 'p5';

const FractalTree = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let angle = 0;

      p.setup = () => {
        p.createCanvas(600, 600);
      };

      p.draw = () => {
        p.clear();
        angle = p.map(p.sin(p.frameCount * 0.01), -1, 1, p.PI / 8, p.PI / 4);
        
        p.stroke(249, 249, 249);
        p.strokeWeight(3);
        p.translate(p.width / 2, p.height);
        
        branch(150);
      };

      const branch = (len: number) => {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);
        
        if (len > 3) {
          p.push();
          p.rotate(angle);
          branch(len * 0.67);
          p.pop();
          
          p.push();
          p.rotate(-angle);
          branch(len * 0.67);
          p.pop();
        }
      };
    };

    const myp5 = new p5(sketch, containerRef.current);

    return () => {
      myp5.remove();
    };
  }, []);

  return <div id="fractal-tree" ref={containerRef}></div>;
};

export default FractalTree;

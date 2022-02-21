import React, {useState, useEffect} from 'react'
import '../App.css'

const HexBackground = () => {
    const getextra = () => (window.innerWidth * window.innerHeight) *.00001;
    const [Dimensions, setDimensions] = useState(60)
  
    useEffect(() => {
      window.addEventListener("resize",  handleResize)
      window.addEventListener("mousemove",  function(e){
        document.querySelector('.mouse__highlight').style.left= `${e.clientX}px`
        document.querySelector('.mouse__highlight').style.top= `${e.clientY}px`
        document.querySelector('.random__light').style.left= `${e.clientX}px`
        document.querySelector('.random__light').style.top= `${e.clientY}px`
      });
      setDimensions(60 + getextra())
    }, []);
  
    const handleResize=()=> {
      setDimensions(60 + getextra())
      // console.log("changed")
    }
  
    const Box = ({rowKey, colKey, HW, extra}) => {
      const colOffset = colKey % 2 === 0 ? 1.04*HW/2 : 0;
      return (
        <div className={`box row${rowKey} col${colKey}`} style={ {
          height: `${HW}px`,
          width: `${Math.ceil(Dimensions)}px`,
          inset: "initial",
          top: `${rowKey * 1.04* HW + colOffset - HW/2}px`,
          right: `calc(50vw - ${HW *.90  * colKey}px)`,
          padding: `${HW}`
          
        }}>
          <div className="hexagon__container" >
            <div className="hexagon__inner"></div>
              <div className={extra ? `hexagon random__tone${Math.floor(Math.random() * 4)}`: "hexagon"}></div>
          </div>
        </div>
      )
    }
    
    const dimensions = Math.ceil(Dimensions)
    const columns = Math.floor(window.innerHeight / dimensions)
    const rows = Math.floor(window.innerWidth / dimensions *.60)
    // console.log(rows)
    const allHexes = []
    const extraHexes = []
    for (let i = rows * -1; i <= rows +1; i++) {
        const boxes = [];
        for (let j = -1 ; j <= columns +1; j++) {
        boxes.push(<Box rowKey= {j} colKey={i} key={`box right ${i} ${j}`} HW={dimensions}/>)
        if(j <= 3 || j >= columns - 2) extraHexes.push(<Box rowKey= {j} colKey={i} key={`DecHexCols ${i} ${j}`} HW={dimensions} extra ={true}/>)
        if(i >= rows || i < rows * -1 + 2 ) extraHexes.push(<Box rowKey= {j} colKey={i} key={`DecHexRows ${i} ${j}`} HW={dimensions} extra ={true}/>)      }
        allHexes.push(...boxes)
    }
  
    return (
        <div className="background__container">
            <div className="backdrop__overlay"></div>
            <div className="backdrop__overlay"></div>
            <div className="mouse__highlight"></div>
            <div className="random__light"></div>
            {allHexes}
            {extraHexes}
        </div>
    )
}

export default HexBackground
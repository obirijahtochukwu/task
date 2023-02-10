import React, {useState, useEffect} from 'react'

export default function Table() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    const update = (e)=>{
      setX(e.x)
      setY(e.y)
    }
    window.addEventListener('mousemove', update)
    window.addEventListener('touchmove', update)
  }, [y, x])
  
  return (
    <div className="container bg-s" style={{backgroundImage: `url(/bg.png)`, x: '90px', y: '0px'}}>
      <h1>Ns</h1>
      <div className="bg bg-s" style={{backgroundImage: `url(/bg2.png)`, webkitMaskImage: `radial-gradient(200px at ${x}px ${y}px, transparent 50%, black 100%)`}}></div>
    </div>
  )
}

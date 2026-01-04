import React, {useState, useEffect, useRef} from 'react'


const Saturn = ({handPos, isPinching,selectedPlanet,setSelectedPlanet,planetId,dragOffset,setDragOffset}) => {
  const [position,setPosition] = useState({x: window.innerWidth/2*0.7, y:window.innerHeight/2*0.3})
  const planetRef = useRef(null)
  const wasPinching = useRef(false)

  useEffect(()=> {
    if(!planetRef.current) return;

    const rect = planetRef.current.getBoundingClientRect();
    const planetCenter = {
      x: rect.left + rect.width/2,
      y: rect.top + rect.height/2
    }

    const distance = Math.sqrt(
      Math.pow(handPos.x - planetCenter.x,2) + Math.pow(handPos.y - planetCenter.y,2) 
    )

    if(isPinching && !wasPinching.current && distance<100){
      setSelectedPlanet(planetId)
      setDragOffset({
        x:handPos.x - position.x,
        y:handPos.y - position.y
      })
    }

    if(isPinching && selectedPlanet === planetId){
      setPosition({
        x: handPos.x - dragOffset.x,
        y:handPos.y - dragOffset.y
      })
    }

    if(!isPinching && wasPinching.current && selectedPlanet === planetId){
      setSelectedPlanet(null)
    }

    wasPinching.current = isPinching
  }, [handPos,isPinching,selectedPlanet,planetId,dragOffset,position,setSelectedPlanet,setDragOffset])

  return (
    <div>
      <div ref = {planetRef}
      className={`mercury rotate ${selectedPlanet === planetId ? 'selected': ' '}  `}
      style = {{
        position: 'absolute',
        left:position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        transition: selectedPlanet === planetId ? 'none' : 'all 0.3s ease'
      }} 
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGLcXPpVHplbr-IvqL0JMvr07Fo2FD10CoA&s" alt="" className="saturnimg" />
      </div>
    </div>
  )
}







export default Saturn

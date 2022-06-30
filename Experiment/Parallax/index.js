import React, { useEffect, useRef, useState } from 'react'

export default function Card({offSetY}){

    //there state checks to see when element hits target offset to render element position dynamically until target is exceeded
    const [there, setThere] = useState(false)
    //pos gives a default position for the elements before and after the scroll hits its target
    const [pos, setPos] = useState(-100)
    //so as to keep its value stable
    const lastValue = useRef(-100)

    useEffect(
        () => {
            if ((offSetY >= 0) &&  (offSetY <900)){
                setThere(true)
                
            }
            else{
                lastValue.current =offSetY
                setPos(lastValue)
                setThere(false)
            }
        },
    [offSetY])
    

    return(
        
            <div className='boxes'>
                {/* style={{transform: `translate(${offSetY * 0.5}px, ${offSetY * 0.5}px)`}} */}

                {/* Todo- find a suitable before and after position for elements  */}
                <h1>Headshot</h1>
                <p style={{color:'white'}}></p>
                <div className='item-1 box' style={
                    // here there conditionally renders
                    // The initial negative value is the same as the pos this is to ensure the effect starts from the same postion 
                    there? { top:`${-100 +offSetY*0.1}px`, right:`${-100 +offSetY*0.1}px`} 
                    : 
                    { top:`${pos}px`, right:`${pos}px`}}>COLOURES</div>
                <div className='item-2 box' style={{transform: `translateX(${offSetY * .1}px)`}}>DiamoureS {offSetY}</div>
            </div>
        
    )
}

// transform: `translateX(-${offSetY * 0.1}px)`


//offset window event listener

// import React, { useEffect, useState } from 'react'
// import Card from './Components/Card'
// import './styles.css';

// export default function App() {
//     const [offSetY, setOffSetY] = useState(0)
//     const handleScroll = () => {
//         setOffSetY(window.pageYOffset)
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//         return (
//             <section className='bg' style={{transform: `translateY(${offSetY * 0.5}px)`}}>
//                 <Card offSetY={offSetY} />
//                 <Card offSetY={offSetY} />
//             </section>
//         )
// }
import React, { useState, useEffect } from 'react';
import './App.css';
import Item from './Item'
import Counter from './Counter';
import woof from './dog.mp3'
import Speed from './Speed';

function App() {

  const [count, setCount] = useState(0)
  const [randomIndex, setRandomIndex] = useState(3)
  const [speed, setSpeed] = useState(1000)
  const [items,] = useState([{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }])

  // const intervalRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIndex(getRandomImageIndex())
    }, speed)
    console.log(speed);

    // intervalRef.current = interval

    return () => {
      clearInterval(interval)
    }
  }, [count])

  let getDog = () => {
    let audio = new Audio(woof)
    audio.play()
    setCount(count + 1)
    setSpeed(speed - 40)
    setRandomIndex(getRandomImageIndex())
  }


  let getRandomImageIndex = () => {
    return Math.floor(Math.random() * 9)
  }

  let dogs = items.map(d => {
    return <Item id={d.id} key={d.id} getDog={getDog} randomIndex={randomIndex} />
  })

  return (
    <div className="wrapper">
      {dogs}
      <Counter count={count} />
      <Speed speed={speed} />
    </div>
  );
}

export default App;

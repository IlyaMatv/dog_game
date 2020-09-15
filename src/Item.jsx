import React from 'react'
import './App.css'
import img from './dog.jpg'


const Dog = (props) => {

    let dogClass = props.id === props.randomIndex ? 'photo show' : 'photo'
    let onClickhandler = props.id === props.randomIndex ? props.getDog : () => {}
    return (
        <div className="item">
            <img src={img} alt="dog" className={dogClass} onClick={onClickhandler}/>
        </div>
    )
}

export default Dog
import React, { useState } from 'react'
import "./cardLan.css"

const CardLan = ({ img, name, options }) => {

    const [isFront, setİsFront] = useState(true)
    const handleClick = () => {
        setİsFront(!isFront)
    }
    return (
        <div className="card" onClick={handleClick}>
            {isFront
                ?
                <div className="image">
                    <img src={img} alt={name} />
                    <p>{name}</p>
                </div>
                :
                <div className="list">
                    <ul>
                        <li>{options[0]}</li>
                        <li>{options[1]}</li>
                        <li>{options[2]}</li>
                    </ul>
                </div>
            }

        </div>
    )
}

export default CardLan
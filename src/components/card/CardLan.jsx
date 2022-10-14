import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import "./cardLan.css"

const CardLan = ({ img, name, options }) => {

    const [isFront, setİsFront] = useState(true)
    const handleClick = () => {
        setİsFront(!isFront)
    }
    return (
        <div>
            <div className="card" onClick={handleClick}>
                {isFront
                    ?
                    <Card>
                        <Card.Img variant="top" src={img} />
                    </Card>
                    :
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{name}</ListGroup.Item>
                            <ListGroup.Item>{options[0]}</ListGroup.Item>
                            <ListGroup.Item>{options[1]}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                }

            </div>
        </div>
    )
}

export default CardLan
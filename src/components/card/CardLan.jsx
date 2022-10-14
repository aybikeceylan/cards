import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const CardLan = ({ img, name, options }) => {

    const [isFront, setİsFront] = useState(true)
    return (
        <div>
            <div className="main">
                <h1 className="title">Languages</h1>
                <div className="card" onClick={() => { setİsFront = !setİsFront }}>
                    {isFront
                        ?
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                        </Card>
                        :
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{name}</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    }

                </div>
            </div>
        </div>
    )
}

export default CardLan
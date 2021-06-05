import React from 'react'

const Card = ({ card }) => {
    return (
        <div>
            <div className="card-tarea">
                {card.titulo}
            </div>
        </div>
    )
}

export default Card

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


const Card = ({ card, index }) => {
    return (
        <Draggable draggableId={card.id} index={index}>
            {
                (provided) => (
                    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                        <div className="card-tarea">
                            {card.titulo}
                        </div>
                    </div>
                )
            }
        </Draggable>

    )
}

export default Card

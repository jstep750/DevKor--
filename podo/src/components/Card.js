import React from 'react'

function Card(props){
    const dragStart = e =>{
        e.dataTransfer.setData('card_position',props.board.position);
        e.dataTransfer.setData('card_id',props.board.id);
        e.dataTransfer.setData('card_video',props.board.videoId);
        e.dataTransfer.setData('card_text',props.board.text);
    }
    const dragOver = e =>{
        e.preventDefault();
    }

    return (
        <div 
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}>
            {props.board.id}
            
        </div>
    )
}

export default Card;
import React from 'react'

function Card(props){
    const dragStart = e =>{
        const target = e.target;
        e.dataTransfer.setData('card_position',props.board.position);
        e.dataTransfer.setData('card_id',props.board.id);
        e.dataTransfer.setData('card_video',props.board.videoId);
        e.dataTransfer.setData('card_text',props.board.text);
        console.log('position start:');
        console.log(props.board);
        // e.dataTransfer.setData('card_id',target.text);

        // setTimeout(()=>{
        //     target.style.display = "none";
        // },0)
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
            {props.children}
        </div>
    )
}

export default Card;
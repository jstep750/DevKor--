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
        <div className="row pb-2 mb-2" draggable={props.draggable} onDragStart={dragStart} onDragOver={dragOver} style={{minHeight: 82, borderBottom: '1px solid #c4c4c4'}}>
            <div className="col-4">
                <div className="youtube-video" ></div>
            </div>
            <div className="col-8 row mt-3">
                <div className="col-10">{props.board.text}</div>
                <div className="col-2"><i className="fas fa-edit"></i></div>
            </div>
        </div>
    )
}

export default Card;
import React from 'react'

function SmallCard(props){
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
        <div className="row pb-2 mb-2" draggable={props.draggable} onDragStart={dragStart} onDragOver={dragOver} style={{minHeight: 55, borderBottom: '1px solid #c4c4c4'}}>
            <div className="col-6" style={{padding: '0px'}}>
                <div className="youtube-video" ></div>
            </div>
            <div className="col-6 d-flex flex-column justify-content-between">
                <div>{props.board.text}</div>
                <div className="youtube-subdes">유튜버 이름 여기</div>
                
            </div>
        </div>
    )
}

export default SmallCard;
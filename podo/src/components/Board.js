import React from 'react';

function Board(props){
   
    const drop=e=>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card_video = e.dataTransfer.getData('card_video')
        const card_text = e.dataTransfer.getData('card_text')
        const card_position = e.dataTransfer.getData('card_position')
        if(card_position === 'top'){
            props.setnum(parseInt(card_id));
        }
        else if (card_position !== 'right'){
            let copy = [...props.boardTwo];
            copy = copy.filter((item)=>{
                return item.id !== card_id
            })
            const card = {id :card_id,text:card_text,videoId: card_video,position:'right'}        
            copy.push(card);
            props.setBoardTwo([...copy]);
        }
    }

    const dragOver = e =>{
        e.preventDefault();
    }

    return (
        <div 
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
        style={{minHeight:30, maxHeight:421, overflowY:'scroll'}}
        className={props.className}>
            {props.children}
        </div>
    )
}

export default Board;
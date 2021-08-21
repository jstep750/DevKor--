function Trash(props){
    const drop=e=>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card_position = e.dataTransfer.getData('card_position');
        
        if(card_position==='right'){
            let copy = [...props.boardTwo];
            copy = copy.filter((item)=>{
                return item.id !== card_id
            })
            props.setBoardTwo([...copy]);
        }
    }

    const dragOver = e =>{
        e.preventDefault();
    }

    return(
        <div
        onDrop={drop}
        onDragOver={dragOver}
        >Trash here</div>
    )
}

export default Trash;
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
        style={{height: 100,backgroundColor:'#999999'}}
        className="d-flex align-items-center justify-content-center"
        ><i class="far fa-trash-alt me-3"></i>Trash here!</div>
    )
}

export default Trash;
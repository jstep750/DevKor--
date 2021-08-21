import {useState,React} from 'react';


function SetPlayList(){
    let [playList, setPlayList] = useState(['댄스']);
    let [buf, setBuffer] = useState(['']);
    let recChange = (e) => {
        setBuffer(e.target.value)}
    let addChange = (e) => {
        let copy = [...playList];
        copy.push(buf);
        setPlayList(copy);
        setBuffer('');
    }
    return(
        <div>{playList.map((a)=>{
            return (<p>{a}</p>)})}
        <input onChange={recChange} value = {buf}/>
        <button onClick={addChange}>Add</button>
        </div>
    );

}

export default SetPlayList;
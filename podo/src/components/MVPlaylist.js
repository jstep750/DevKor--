
import '../App.css';
import Board from './Board';
import Card from './Card';
import Trash from './Trash';
import {useState,React} from 'react';




function MVPlaylist() {
  let [num, setnum] = useState(0)
  let [activeList,setActiveList] = useState(3);
  let [board1One, setBoard1One] = useState([
    {id: '1', text: 'card one', videoId:'123', position: 'left'},
    {id: '2', text: 'card two' ,videoId:'123', position: 'left'},
    {id: '3', text: 'card three',videoId:'123', position: 'left'},
  ])
  let [board1Two, setBoard1Two] = useState([
    {id: '4', text: 'card four' ,videoId:'123', position: 'right'},
    {id: '5', text: 'card five', videoId:'123', position: 'right'},
    {id: '6', text: 'card six', videoId:'123', position: 'right'},
  ])
  let [board2One, setBoard2One] = useState([
    {id: '1', text: 'card one', videoId:'123', position: 'left'},
    {id: '2', text: 'card two' ,videoId:'123', position: 'left'},
    {id: '3', text: 'card three',videoId:'123', position: 'left'},
  ])
  let [board2Two, setBoard2Two] = useState([
    {id: '4', text: 'card four' ,videoId:'123', position: 'right'},
    {id: '5', text: 'card five', videoId:'123', position: 'right'},
    {id: '6', text: 'card six', videoId:'123', position: 'right'},
  ])
  let [board3One, setBoard3One] = useState([])
  let [board3Two, setBoard3Two] = useState([])
  let [board4One, setBoard4One] = useState([])
  let [board4Two, setBoard4Two] = useState([])
  let [board5One, setBoard5One] = useState([])
  let [board5Two, setBoard5Two] = useState([])
  let [board6One, setBoard6One] = useState([])
  let [board6Two, setBoard6Two] = useState([])
  let [board7One, setBoard7One] = useState([])
  let [board7Two, setBoard7Two] = useState([])
  let [board8One, setBoard8One] = useState([])
  let [board8Two, setBoard8Two] = useState([])
  let [board9One, setBoard9One] = useState([])
  let [board9Two, setBoard9Two] = useState([])
  let [board10One, setBoard10One] = useState([])
  let [board10Two, setBoard10Two] = useState([])

  const boardOne = num===0?board1One:num===1?board2One:num===2?board3One:num===3?board4One:num===4?board5One:num===5?board6One:num===6?board7One:num===7?board8One:num===8?board9One:board10One;
  const boardTwo = num===0?board1Two:num===1?board2Two:num===2?board3Two:num===3?board4Two:num===4?board5Two:num===5?board6Two:num===6?board7Two:num===7?board8Two:num===8?board9Two:board10Two;

  return (
    <div className="App">
      <main className="flexbox">
        <div className="board">
        {
          boardOne.map((a,i)=>{
              return (
                <Card id={a.id} className="card" draggable='true' board={a}>
                  <p>{a.text}</p>
                </Card>
              )
            })
          }
        </div>
        <Board id='board-2'className="board" setBoardTwo={num===0?setBoard1Two:num===1?setBoard2Two:setBoard3Two} boardTwo={num===0?board1Two:num===1?board2Two:board3Two} num = {num}>
        {  
            boardTwo.map((a,i)=>{
              return (
                <Card id={a.id} className="card" draggable='true' board={a}>
                  <p>{a.text}</p>
                </Card>
              )
            })
          }
        </Board>
        <Trash boardOne={num===0?board1One:num===1?board2One:board3One} setBoardOne={num===0?setBoard1One:num===1?setBoard2One:setBoard3One} boardTwo={num===0?board1Two:num===1?board2Two:board3Two} setBoardTwo={num===0?setBoard1Two:num===1?setBoard2Two:setBoard3Two}>
        </Trash>
        
        <div>
        <button onClick={()=>{activeList>1?setActiveList(activeList-1):setActiveList(1)}}>-</button>
        {[...Array(activeList)].map((x, i) =>
          <button onClick={()=>setnum(i)}>{i+1}</button>
        )}
        <button onClick={()=>{activeList<10?setActiveList(activeList+1):setActiveList(10)}}>+</button>
        </div>
      </main>
      
    </div>
  );
}

function FetchList(){
  
}

export default MVPlaylist;

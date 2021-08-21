import '../App.css';
import Board from './Board';
import Card from './Card';
import SmallCard from './SmallCard';
import Trash from './Trash';
import {useState,React} from 'react';

function Play(){
    let [num, setnum] = useState(0)
    let [activeList,setActiveList] = useState(2);
    let [boardOne, setBoardOne] = useState([
        {id: '1', text: 'card one', videoId:'123', position: 'left'},
        {id: '2', text: 'card two' ,videoId:'123', position: 'left'},
        {id: '3', text: 'card three',videoId:'123', position: 'left'},
        {id: '4', text: 'card four' ,videoId:'123', position: 'left'},
        {id: '5', text: 'card five', videoId:'123', position: 'left'},
        {id: '6', text: 'card six', videoId:'123', position: 'left'},
    ])
    let [board1Two, setBoard1Two] = useState([
        {id: '4', text: 'card four' ,videoId:'123', position: 'right'},
        {id: '5', text: 'card five', videoId:'123', position: 'right'},
        {id: '6', text: 'card six', videoId:'123', position: 'right'},
        {id: '4', text: 'card four' ,videoId:'123', position: 'right'},
    ])
    let [board2Two, setBoard2Two] = useState([])
    let [board3Two, setBoard3Two] = useState([])
    let [board4Two, setBoard4Two] = useState([])
    let [board5Two, setBoard5Two] = useState([])
    let [board6Two, setBoard6Two] = useState([])
    let [board7Two, setBoard7Two] = useState([])
    let [board8Two, setBoard8Two] = useState([])
    let [board9Two, setBoard9Two] = useState([])
    let [board10Two, setBoard10Two] = useState([])

    let boardTwo = num===0?board1Two:num===1?board2Two:num===2?board3Two:num===3?board4Two:num===4?board5Two:num===5?board6Two:num===6?board7Two:num===7?board8Two:num===8?board9Two:board10Two;
    let setBoardTwo = num===0?setBoard1Two:num===1?setBoard2Two:num===2?setBoard3Two:num===3?setBoard4Two:num===4?setBoard5Two:num===5?setBoard6Two:num===6?setBoard7Two:num===7?setBoard8Two:num===8?setBoard9Two:setBoard10Two;

    let [재생목록, 재생목록변경]=useState([
        {id: 0, name: '재생목록1',videoid:[123,456,789]},
        {id: 1, name: '재생목록2',videoid:[1231,4564,7897]},
    ])

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-7">
                    <div className="youtube-video"></div>
                    <div className="form-floating mt-3">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 400}}></textarea>
                  <label for="floatingTextarea2">Comments</label>
                </div>
                </div>
                <div className="col-lg-5" style={{textAlign:'left'}}>
                    <p className="pb-2">My 재생목록</p>
                    <div className="playlist-draggable">{
                            재생목록.map((a,i)=>{
                                console.log(a.id);
                                return (
                                    <Card id={a.id} draggable='true' board={{text:a.name,id:a.id,videoId:a.videoId,position:'top'}}></Card>
                                )
                            })
                        }
                        <div onClick={activeList<10?()=>{
                            setActiveList(activeList+1)
                            let 이름 = prompt('새로 생성할 재생목록 이름을 생성해주세요');
                            if(이름 !== null){
                                let 아이디 = 재생목록.length + 1;
                            console.log(아이디);
                            let copy = [...재생목록];
                            copy.push({id: 아이디, name: 이름, videoid:[]});
                            재생목록변경([...copy])
                            }
                        }:setActiveList(10)}><i class="fas fa-plus me-3 pt-1 pb-1"></i>새 재생목록 만들기</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <p className="mb-3">현재 동영상의 재생목록</p>
                            <div className="playlist-draggable">
                            <div className="board">
                            {
                            boardOne.map((a,i)=>{
                                return (
                                    <SmallCard id={a.id} draggable='true' board={a}>
                                    <p>{a.text}</p>
                                    </SmallCard>
                                )
                                })
                            }
                            </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className="mb-3">MY 재생목록 자세히 보기</p>
                            <div className="playlist-draggable">
                            <Board id='board-2'className="board" setBoardTwo={setBoardTwo} 
                            boardTwo={boardTwo} num = {num} setnum = {setnum}>{  
                                boardTwo.map((a,i)=>{
                                return (
                                    <SmallCard id={a.id} className="card" draggable='true' board={a}>
                                    <p>{a.text}</p>
                                    </SmallCard>
                                    )})
                                    }
                                    </Board>
                                    <Trash boardOne={boardOne} setBoardOne={setBoardOne} boardTwo={boardTwo} setBoardTwo={setBoardTwo}></Trash>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default Play;
import {useState,React} from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';

function SearchResult() {
  let history = useHistory();
  let [data, setData] = useState([
    {pic: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', 
    name: 'card one', subsc:'123', movie: '123',ins:'blablablablablablablablablablablablablablablabla'},
  ])
  let [임시id, set임시id]=useState([
    {id:123456}
  ])
  let 아이디 = 임시id[0].id
  return (
    <div className="App">
      <div>
        <div className="row pt-3">
            <div className="col-4" style={{textAlign: 'center'}}>
                <img className="youtuber-search" src={data[0].pic}></img>
                <div>유튜버 이름</div>
                <div>구독자 수, 동영상 개수</div>
                <div>유튜버 설명</div>
            </div>
            <div className="col-8">
                <div className="d-flex">
                    <div>키워드가 포함되어 있는 이 유튜버의 영상</div>
                    <div>화살표 1/12 화살표</div>
                </div>
                <div className="d-flex">
                    <div style={{height: 200, width : 300, backgroundColor: 'gray'}}>여기 네모</div>
                    <div>
                        <div onClick={()=>{history.push('/video/'+아이디)}}>제목</div>
                        <div>조회수, 게시날짜</div>
                        <div>유튜버 아이콘, 유튜버 이름</div>
                        <div>영상 설명</div>
                        <div>만약 이 영상이 플레이리스트에 있으면 여기 뜸</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default SearchResult;
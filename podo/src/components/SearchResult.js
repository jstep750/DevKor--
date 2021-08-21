import {useState,React} from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';

function SearchResult() {
  let history = useHistory();
  let [data, setData] = useState([
    {pic: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', 
    name: 'card one', subsc:'123', movie: '123',ins:'blablablablablablablablablablablablablablablabla'},
  ])
  let [searchResult, setSearchResult]=useState([
    {video:[
      {title:'1',youtuber:'name1', id: 0},
      {title:'2',youtuber:'name2', id: 1},
      {title:'3',youtuber:'name3', id: 2},
      {title:'4',youtuber:'name4', id: 3}],
    playlist:[
      '123','456'],
    userplaylist:[
      '123','1234']}
  ])
  let [임시id, set임시id]=useState([
    {id:123456}
  ])
  let 아이디 = 임시id[0].id
  let  videoList = [...searchResult[0].video];
  console.log(videoList);
  return (
    <div className="App">
      <div>
        {
          videoList.map((a,i)=>{
            return(
              <Card data={data} video={a} i={i}></Card>
            )
          })
        }
        </div>
    </div>
  );
}

function Card(props){
  let history = useHistory();
  return (
    <div className="row pt-3">
            <div className="col-4" style={{textAlign: 'center'}}>
                <img className="youtuber-search" src={props.data[0].pic}></img>
                <div>{props.video.youtuber}</div>
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
                        <div onClick={()=>{history.push('/video/'+props.video.id)}}>{props.video.title}</div>
                        <div>조회수, 게시날짜</div>
                        <div>유튜버 아이콘, 유튜버 이름</div>
                        <div>영상 설명</div>
                        <div>만약 이 영상이 플레이리스트에 있으면 여기 뜸</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SearchResult;

// row
// display flex

// flex row

// flex-row-reverse

// justify contnet center
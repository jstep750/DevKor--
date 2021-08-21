import {useState,React} from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';

function SearchResult() {
  let history = useHistory();
  // let [keyWordHighLight,setKeyWord] = useState(this.props.location.state.keyWordHighLight);
  console.log(this.props.location.state.category);
  // let [category,setCategory]=useState([this.props.location.state.category]);

  let [data, setData] = useState([
    {pic: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', 
    name: 'card one', subsc:'123', movie: '123',ins:'blablablablablablablablablablablablablablablabla'},
  ])
    
   
   
  let [searchResult, setSearchResult]=useState([
    {
      video: [{
          channel: "유튜버이름1",
          count: 3,
          items: [{title: "제목1", num_views:"조회수", release_date:"n개월 전"},
                  {title: "제목2", num_views:"조회수", release_date:"n개월 전"},
                  {title: "제목3", num_views:"조회수", release_date:"n개월 전"}]
      },
      {
          channel: "유튜버이름2",
          count: 3,
          items: [{title: "제목1", num_views:"조회수", release_date:"n개월 전"},
                  {title: "제목2", num_views:"조회수", release_date:"n개월 전"},
                  {title: "제목3", num_views:"조회수", release_date:"n개월 전"}]
      },
      {
          channel: "유튜버이름3",
          count: 3,
          items: [{title: "제목1", num_views:"조회수", release_date:"n개월 전"},
                  {title: "제목2", num_views:"조회수", release_date:"n개월 전"},
                  {title: "제목3", num_views:"조회수", release_date:"n개월 전"}]
      }]
   }
  ])
 
  let  videoList = [...searchResult[0].video];
  console.log(videoList);
  return (
    <div className="App">
      <div>
        {/* {{
          category.map((a,i)=>{
            return (
              <button className="btn-keyword" style={{backgroundColor:keyWordHighLight===i+1?'#EEEEEE':'#FFFFFF'
              }} onClick={()=>{history.push("/video?search="+a.text);setButton(2);setKeyWord(i+1)}}>{a.text}</button>
            )
          })
        } } */}
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
  let 비디오 = props.video;
  console.log(비디오);
  return (
    <div className="row pt-3">
      <hr />
            <div className="col-4" style={{textAlign: 'center',marginTop:42 ,marginBottom:42}}>
                <img className="youtuber-search" src={props.data[0].pic}></img>
                <div className="mb-3 mt-3" style={{color: '#030303',fontSize:18}}>{비디오.channel}</div>
                <div className="mb-2" style={{color: '#606060',fontSize:12}}>구독자 수, 동영상 개수</div>
                <div style={{color: '#606060', fontSize:12}}>유튜버 설명</div>
            </div>
            <div className="col-8" style={{marginTop:42}}>
                <div className="d-flex"style={{marginBottom:24}}>
                    <div>키워드가 포함되어 있는 이 유튜버의 영상</div>
                    <div className="ms-5"><i class="fas fa-caret-left me-3"></i> 1 / {비디오.count} <i class="fas fa-caret-right ms-3"></i></div>
                </div>
                <div className="d-flex">
                    <div style={{height: 200, width : 300, backgroundColor: 'gray', marginRight: 16}}>여기 네모</div>
                    <div style={{textAlign: 'left'}}>
                        <div className="mb-2" style={{fontSize:18,color: '#030303'}} onClick={()=>{history.push('/video/'+비디오.items[props.i].title)}}>{비디오.items[props.i].title}</div>
                        <div className="youtube-subdes mb-3" style={{fontWeight:700}}>{비디오.items[props.i].num_views}, {비디오.items[props.i].release_date}</div>
                        <div className="youtube-subdes mb-3 d-flex justify-content-start align-items-center"><div className="circle-1 me-3"></div> {비디오.channel}</div>
                        <div className="youtube-subdes mb-2">영상 설명</div>
                        <div className="youtube-subdes">만약 이 영상이 플레이리스트에 있으면 여기 뜸</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SearchResult;
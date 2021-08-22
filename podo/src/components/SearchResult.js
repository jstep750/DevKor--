import {useState,React} from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';

function getHello(){
  var obj = {
      "time": "Sat, 21 Aug 2021 23:40:28 GMT",
      "user_playlist": [
          "KF6t61yuPCY",
          "wcsVjmHrUQg",
          "hLhHFiwhRfA",
          "4_WLS9Lj6n4",
          "6v8oVnR6npM",
          "nT4OWJJjtJg",
          "-cAPq25P-68",
          "kWiCuklohdY",
          "PJGsPohDuoA",
          "ED2rOHM1od0",
          "6FnkGKYK6iQ"
      ],
      "videos": [
          {
              "link": "/watch?v=KF6t61yuPCY",
              "title": "자바스크립트 기초 강좌 : 100분 완성",
              "channel": "코딩앙마",
              "channel_link": "/channel/UCxft4RZ8lrK_BdPNz8NOP7Q",
              "num_views": "조회수 3.7만회",
              "release_date": "5개월 전"
          },
          {
              "link": "/watch?v=wcsVjmHrUQg",
              "title": "자바스크립트 배우기전 꼭 봐야할 영상 | 자바스크립트의 역사와 현재 그리고 미래 (JavaScript, ECMAScript, JQuery, Babel, Node.js)",
              "channel": "드림코딩 by 엘리",
              "channel_link": "/channel/UC_4u-bXaba7yrRz_6x6kb_w",
              "num_views": "조회수 25만회",
              "release_date": "1년 전"
          },
          {
              "link": "/watch?v=hLhHFiwhRfA",
              "title": "한시간만에 끝내는 자바스크립트 입문",
              "channel": "개발자의품격",
              "channel_link": "/channel/UCeyUnRL6sG_GQJRus89sZ8Q",
              "num_views": "조회수 3.7만회",
              "release_date": "10개월 전"
          },
          {
              "link": "/watch?v=4_WLS9Lj6n4",
              "title": "자바스크립트 중급 강좌 : 140분 완성",
              "channel": "코딩앙마",
              "channel_link": "/channel/UCxft4RZ8lrK_BdPNz8NOP7Q",
              "num_views": "조회수 9.3천회",
              "release_date": "2개월 전"
          },
          {
              "link": "/watch?v=6v8oVnR6npM",
              "title": "자바스크립트 기초 Part 1: 시작하기, 변수, 기본 데이터 형식, 배열, 연산자, 조건문, 반복문 | 자바스크립트 강좌",
              "channel": "1분코딩",
              "channel_link": "/channel/UC_s1FC7s5YVwDImzv-WG93Q",
              "num_views": "조회수 7.1만회",
              "release_date": "스트리밍 시간: 2년 전"
          },
          {
              "link": "/watch?v=nT4OWJJjtJg",
              "title": "네? 리액트(React)가 자바스크립트 아닌가요...?",
              "channel": "데이터 유치원",
              "channel_link": "/channel/UC2jBZ3K1iqnGrw4_eBa7iSA",
              "num_views": "조회수 6.9천회",
              "release_date": "4개월 전"
          },
          {
              "link": "/watch?v=-cAPq25P-68",
              "title": "자바스크립트 기초 2. 함수 | 함수 정의, 호출, 그리고 콜백함수",
              "channel": "드림코딩 by 엘리",
              "channel_link": "/channel/UC_4u-bXaba7yrRz_6x6kb_w",
              "num_views": "조회수 2만회",
              "release_date": "11개월 전"
          },
          {
              "link": "/watch?v=kWiCuklohdY",
              "title": "파이썬 코딩 무료 강의 (기본편) - 6시간 뒤면 여러분도 개발자가 될 수 있어요 [나도코딩]",
              "channel": "나도코딩",
              "channel_link": "/channel/UC7iAOLiALt2rtMVAWWl4pnw",
              "num_views": "조회수 219만회",
              "release_date": "1년 전"
          },
          {
              "link": "/watch?v=PJGsPohDuoA",
              "title": "서류탈락하는 개발자 포트폴리오의 특징",
              "channel": "코딩몬스터TV",
              "channel_link": "/channel/UCaov5NV_OlqUIDuAY2D952Q",
              "num_views": "조회수 3.4만회",
              "release_date": "4개월 전"
          },
          {
              "link": "/watch?v=ED2rOHM1od0",
              "title": "웹개발 개념정리 / 초보개발자 / 프론트앤드 / 백엔드 / 프레임워크",
              "channel": "개발하는 정대리",
              "channel_link": "/channel/UCutO2H_AVmWHbzvE92rpxjA",
              "num_views": "조회수 3.5만회",
              "release_date": "1년 전"
          },
          {
              "link": "/watch?v=6FnkGKYK6iQ",
              "title": "jQuery를 배워야할까? 5분 개념 정리해드림.",
              "channel": "노마드 코더 Nomad Coders",
              "channel_link": "/channel/UCUpJs89fSBXNolQGOYKn0YQ",
              "num_views": "조회수 8.8만회",
              "release_date": "1년 전"
          }
      ],
      "playlists": [
          "PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU",
          "PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2",
          "PLuHgQVnccGMBB348PWRN0fREzYcYgFybf",
          "PLBXuLgInP-5kxpAKy2DNXoebCse2grHjl",
          "PLcqDmjxt30Rtbxbh4eJREOVekql_kWVmu"
      ]
  };
  return JSON.stringify(obj, null, 4);
}

/*function changeHello(){
  const data = JSON.parse(getHello());
  console.log(data);
  let cardObj = {};
  data.forEach(video => {
    if(video.channel in cardObj){
      cardObj[video.channel]['element'].push(video.id);
      cardObj[video.channel]['count'] = cardObj[video.channel]['count'] + 1;
    }
    else{
      cardObj[video.channel] = {'element':[video.id], 'count':0, 'title':video.title};
    }
  });
  console.log(cardObj);
}*/

async function getTweets(username){
  const query = username ? `?username=${username}` : '';
  const response = await fetch(`${this.baseURL}/tweets${query}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });
  const data = await response.json();
  if(response.status != 200){
    throw new Error(data.message);
  }
  return data;
}

function SearchResult(props) {
  let history = useHistory();
  let [data, setData] = useState([
    {pic: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', 
    name: 'card one', subsc:'123', movie: '123',ins:'blablablablablablablablablablablablablablablabla'},
  ])
    
  let cardObj = {};
  console.log('getHello');
  const data1 = JSON.parse(getHello())
  console.log(data1);
  console.log(data1['videos']);
  data1['videos'].forEach(video => {
    if(video.channel in cardObj){
      cardObj[video.channel]['items'].push(video);
      cardObj[video.channel]['count'] = cardObj[video.channel]['count'] + 1;
    }
    else{
      cardObj[video.channel] = {'items':[video], 'count':1, 'channel':video.channel};
    }
  });
  console.log(cardObj);
  let videoList1 = [];
  for(const [key, value] of Object.entries(cardObj)){
    videoList1.push({'channel':key, 'items':value.items, 'title':value.title ,'count':value.count});
  }
  console.log(videoList1);

  let [searchResult, setSearchResult]=useState([
    {video: videoList1}
    /*{
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
   }*/
  ])
  console.log(searchResult)
  let  videoList = [...searchResult[0].video];
  console.log(videoList);
  console.log(videoList.length)
  return (
    <div className="App">
      <div>
        {
          videoList.map((a,i)=>{
            return(
              <Card setTargetId={props.setTargetId} data={data} video={a} i={i} length={videoList.length}></Card>
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
  let length = 비디오.items.length;
  let [pos,setpos]=useState(0);
  console.log(비디오.items)
  console.log(length);
  console.log(비디오[0]);
  return (
    <div className="row pt-3">
      <hr />
            <div className="col-4" style={{textAlign: 'center',marginTop:42 ,marginBottom:42}}>
                <img className="youtuber-search" src={props.data[0].pic}></img>
                <div className="mb-3 mt-3" style={{color: '#030303',fontSize:18}}>{비디오.items[pos].channel}</div>
                <div className="mb-2" style={{color: '#606060',fontSize:12}}>구독자 수, 동영상 개수</div>
                <div style={{color: '#606060', fontSize:12}}>유튜버 설명</div>
            </div>
            <div className="col-8" style={{marginTop:42}}>
                <div className="d-flex"style={{marginBottom:24}}>
                    <div>키워드가 포함되어있는 유튜버의 영상</div>
                    <div className="ms-5"><div></div><i onClick={()=>{if(pos>=1){setpos(pos-1)}}} class="fas fa-caret-left me-3"></i> {pos+1} / {length} <i onClick={()=>{if(pos < length){setpos(pos+1)}}} class="fas fa-caret-right ms-3"></i></div>
                </div>
                <div className="d-flex">
                    <div style={{height: 200, width : 300, backgroundColor: 'gray', marginRight: 16}}>{비디오.items[pos].title}</div>
                    <div style={{textAlign: 'left'}}>
                        <div className="mb-2" style={{fontSize:18,color: '#030303'}} onClick={()=>{history.push('/video/'+비디오.items[pos].link);props.setTargetId(비디오.items[pos].link)}}>{비디오.items[pos].title}</div>
                        
                        
                        <div className="youtube-subdes mb-2">영상 설명</div>
                        <div className="youtube-subdes">만약 이 영상이 플레이리스트에 있으면 여기 뜸</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SearchResult;
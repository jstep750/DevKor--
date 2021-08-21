import {useState,React} from 'react';
import { Row } from 'react-bootstrap';

function SearchResult() {
  let [data, setData] = useState([
    {pic: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', 
    name: 'card one', subsc:'123', movie: '123',ins:'blablablablablablablablablablablablablablablabla'},
  ])
  return (
    <div className="App">
          
      <div>
        <div className="row mt-3">
            <div className="col-4" style={{textAlign: 'center'}}>
                <img className="youtuber-search" src={data[0].pic}></img>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="col-8">
                <div className="d-flex">
                    <div>키워드가 포함되어 있는 이 유튜버의 영상</div>
                    <div>화살표 1/12 화살표</div>
                </div>
                <div className="d-flex">
                    <div style={{height: 200, width : 300}}>여기 네모</div>
                    <div>
                        여기에 나열
                    </div>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  );
}

export default SearchResult;
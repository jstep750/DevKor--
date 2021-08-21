import {useState} from 'react';


function Play(){
    let [재생목록, 재생목록변경]=useState([
        {id: 1, name: '재생목록1',videoid:[123,456,789]},
        {id: 2, name: '재생목록2',videoid:[1231,4564,7897]},
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
                    <div className="playlist-draggable">
                        {
                            재생목록.map((a,i)=>{
                                return (
                                    <div className="row pb-2 mb-2" style={{minHeight: 82, borderBottom: '1px solid #c4c4c4'}}>
                                        <div className="col-4">
                                            <div className="youtube-video" ></div>
                                        </div>
                                        <div className="col-8 row mt-3">
                                            <div className="col-10">{재생목록[i].name}</div>
                                            <div className="col-2"><i className="fas fa-edit"></i></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div onClick={()=>{
                            let 이름 = prompt('새로 생성할 재생목록 이름을 생성해주세요');
                            if(이름 !== null){
                                let 아이디 = 재생목록.length + 1;
                            console.log(아이디);
                            let copy = [...재생목록];
                            copy.push({id: 아이디, name: 이름, videoid:[]});
                            재생목록변경([...copy])
                            }
                            
                        }}><i class="fas fa-plus me-3 pt-1 pb-1"></i>새 재생목록 만들기</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <p className="mb-3">현재 동영상의 재생목록</p>
                            <div className="playlist-draggable">
                                sdf
                            </div>
                        </div>
                        <div className="col-6">
                            <p className="mb-3">MY 재생목록 자세히 보기</p>
                            <div className="playlist-draggable">
                                sdfsdf
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Play;
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
                </div>
                <div className="col-lg-5" style={{textAlign:'left'}}>
                    <p>My 재생목록</p>
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
                        
                    </div>
                </div>
                <div className="col-lg-7 mt-3">
                <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 400}}></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Play;
import { useState } from 'react';
import Categoty from '../image/노트북추가이미지.png'
import firebase from 'firebase'

/*function checkIdExist(search){
    var db = firebase.firestore();
    var docRef = db.collection('tag').doc(search);
  
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            return true;
        } else {
            db.collection('tag').doc(search).set({
                get: getTweets()
            }).then(function(){
            }).catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
        return false;
    });  
}*/

/*async function getTweets(search){
    const query = search ? `?username=${search}` : '';
    const response = await fetch(`${this.baseURL}/video_yt${query}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    if(response.status != 200){
      throw new Error(data.message);
    }
    return data;
}*/


function SetPlayList(props){
    let 카테고리 = props.category;
    let 카테고리변경 = props.setCategory;
    let [count,setCount]=useState(0);
    let i = 0;
    let plus카테고리 = () => {
        setCount(count+1);
        let copy = [...카테고리];
        copy.push({id: count, text:'test'});
        카테고리변경(copy);
    }
    let 카테고리반영=()=>{
        console.log(count);
        let copy = [...카테고리];
        for(let p = 0; p < count; p++){
            let text = document.getElementById('input-'+p);
            copy[p].text = text.value;
            카테고리변경([...copy]); 
        }
        props.ifSetPlayList변경(1);
        alert('카테고리 설정이 끝났습니다, PODO를 잘 이용해주세요!')
    }
    return(
        <div style={{minHeight: 'calc(100vh - 56px)'}}>
            <div className="container" style={{position: 'relative'}}>
            <img src={Categoty} alt="" style={{zIndex:'0' ,position:'fixed',right:0,bottom:0,maxWidth:'100%'}} />
            <div className="row" style={{padding: '120px 0px'}}>
            <div className="col-lg-9" style={{zIndex:1}}>
                <h1 className="roboto" style={{fontSize:36,fontWeight:700,lineHeight:'54px'}}>자주 공부하는 카테고리의 키워드를 입력해주세요.<br/>
                (최대 30개)</h1>
                <p className="mt-5 mb-5" style={{color: '#606060',fontSize:24,lineHeight:'36px'}}>
                    서비스를 이용하기 전 공부하시는 카테고리의 키워드를 입력해주세요.<br/>
                    관련된 영상만을 띄워드립니다.<br/>
                    추가 카테고리는 추후 검색창 밑의 박스에서<br/>
                    추가할 수 있습니다.
                    </p>
                    
            </div>
            <div className="col-lg-3">
                <button className="btn btn-save-keyword" onClick={카테고리반영}>키워드 저장하기</button>
            </div>
        </div>
        <div className="d-flex" style={{width: '100%'}}>
                        <button className="btn-plus-category"style={{minWidth: '50px'}} onClick={plus카테고리}><i class="fas fa-plus"></i></button>
                        <div className="row gap-3" style={{marginLeft:10, minWidth: '95%'}}>
                            {
                                카테고리.map((a,i)=>{
                                    return(
                                        <div className="col-lg-3 col-md-5 col-sm-6 btn-plus-input d-flex" style={{zIndex:1}}>
                                            <input id={'input-'+i} className="justify-content-center btn-innerinput" type="text" onkeypress={()=>{this.style.width = ((this.value.length + 1) * 8) + 'px'}} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
            </div>
        </div>
        
    )
}

export default SetPlayList;

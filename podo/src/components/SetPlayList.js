import Categoty from '../image/카테고리입력이미지.png'


function SetPlayList(){
    return(
        <div style={{minHeight: 'calc(100vh - 56px)'}}>
            <div className="container" style={{position: 'relative'}}>
            <img src={Categoty} alt="" style={{zIndex:'0' ,position:'fixed',right:0,bottom:0,maxWidth:'100%'}} />
            <div className="row" style={{padding: '120px 0px'}}>
            <div className="col-lg-9" style={{zIndex:1}}>
                <h1 className="roboto" style={{fontSize:36,fontWeight:700}}>자주 공부하는 카테고리의 키워드를 입력해주세요.<br/>
                (최대 30개)</h1>
                <p className="mt-5 mb-5" style={{color: '#606060',fontSize:24,lineHeight:'36px'}}>
                    서비스를 이용하기 전 공부하시는 카테고리의 키워드를 입력해주세요.<br/>
                    관련된 영상만을 띄워드립니다.<br/>
                    추가 카테고리는 추후 검색창 밑의 박스에서<br/>
                    추가할 수 있습니다.
                    </p>
                    <button type="button" className="btn d-flex google-button"><img className="icon-logo me-2"  alt="" /><div>Sign in with Google</div></button>
            </div>
            <div className="col-lg-3">
                
            </div>
        </div>
            </div>
        </div>
        
    )
}

export default SetPlayList;
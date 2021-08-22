
import LoginImage from '../image/로그인이미지.png'
import Podo from '../image/Podologo.png'
import block from '../image/Block.png';
import Logo from '../image/Group 770.png';

function Main(props){
    let list = props.video;
    let 카테고리 = props.category;
    let 카테고리변경 = props.setCategory;
    console.log(카테고리);
    return (
        <>
        
        <div className="row container" style={{padding: '120px 0px',transform:'translateX(25%)'}}>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
                <div className="">
                <h1 className="roboto" style={{fontSize:72,lineHeight:'90px', fontWeight:700, textAlign:'left'}}>PODO와 함께<br/> 공부를 시작하세요.</h1>
                <p className="mt-5 mb-5" style={{textAlign:'left',lineHeight:'30px'}}>
                    PODO는 유튜브에서 공부에 방해되는 요소는 제거하고,<br/>
                    공부에 도움을 줄 수 있는 기능을 추가한<br/>
                    학습 목적의 영상 모음 웹사이트입니다.
                    </p>
                </div>
                
                
                    
            </div>
            <div className="col-lg-6" style={{position: 'relative'}}>
                <img src={Logo} alt="" />
            </div>
        </div>
        </>
    )
}

//9:5
//{video: '1',title:'my video',view: 123345, youtuber: '배연준',created:'3 months ago'},
function Card(props){
    let list = props.list;
    
    return(
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="img-fit-nine-to-five">
                <div className="img-fit-to-ratio bg-dark" style={{color: 'white'}}>
                {list[props.i].title}
                </div>
            </div>
            <div className="d-flex mt-1">
                <div className="circle-youtube"></div>
                <div style={{textAlign:'left'}}>
                    <div className="youtube-title">{list[props.i].title}</div>
                    <div className="youtube-subtitle" >{list[props.i].youtuber}<br/> {list[props.i].view} {list[props.i].created}</div>
                </div>
            </div>
        </div>
    )
}
export default Main;
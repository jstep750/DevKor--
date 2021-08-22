
import LoginImage from '../image/로그인이미지.png'

function Main(props){
    let list = props.video;
    let 카테고리 = props.category;
    let 카테고리변경 = props.setCategory;
    console.log(카테고리);
    return (
        <div className="row" style={{padding: '120px 0px'}}>
            <div className="col-lg-6">
                <h1 className="roboto" style={{fontSize:36,fontWeight:700}}>PODO와 함께 공부하세요.</h1>
                <p className="mt-5 mb-5">
                    공부에 유익한 다양한 유튜브컨텐츠를
                    방해없이 즐겨보세요.
                    </p>
                    
            </div>
            <div className="col-lg-6">
                <img src={LoginImage} style={{maxWidth:'100%'}}  alt="" />
            </div>
        </div>
        
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
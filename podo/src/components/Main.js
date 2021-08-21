

function Main(props){
    let list = props.video;
    let 카테고리 = props.category;
    let 카테고리변경 = props.setCategory;
    console.log(카테고리);
    return (
        <div className="container">
            
            <div className="row" style={{paddingTop:24}}>
                {
                list.map((a,i)=>{
                    return (
                        <Card list={props.video} i={i}/>
                        )
                    })
                }
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
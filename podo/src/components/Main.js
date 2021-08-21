

function Main(props){
    let list = props.video;

    return (
        <div className="row">
            {
                list.map((a,i)=>{
                    return (
                        <Card list={props.video} i={i}/>
                    )
                })
            }
        </div>
    )
}

//9:5
//{video: '1',title:'my video',view: 123345, youtuber: '배연준',created:'3 months ago'},
function Card(props){
    let list = props.list;
    console.log(list)
    
    return(
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="img-fit-nine-to-five">
                <div className="img-fit-to-ratio bg-dark" style={{color: 'white'}}>
                {list[props.i].title}
                </div>
            </div>
            <div className="d-flex">
                <div className="circle-youtube"></div>
                <div>
                    <div className="youtube-title">{list[props.i].title}</div>
                    <div className="youtube-subtitle">{list[props.i].youtuber}<br/> {list[props.i].view} {list[props.i].created}</div>
                </div>
            </div>
        </div>
    )
}
export default Main;
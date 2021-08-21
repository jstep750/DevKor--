import logo from './logo.svg';
import './App.css';
import './font.scss';
import './main.scss';
import Logo from './image/Podologo.png';
import Playlist from './image/playlist.png';
import Home from './image/Home.png';
import LoginImg from './image/로그인이미지.png'
import Categoty from './image/카테고리입력이미지.png'
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import {Nav,Container,NavDropdown,Navbar, Form, FormControl,Button} from 'react-bootstrap';
import {useState} from 'react';
import Login from './components/Login';
import Main from './components/Main';
import SetPlayList from './components/SetPlayList';

function App() {
  let [ifSetPlaylist,ifSetPlayList변경]=useState(0);
  let history = useHistory();
  let [category,setCategory]=useState([]);
  let [search,setSearch]=useState('');
  let [video,setVideo]=useState([
    {video: '1',title:'my video',view: 123345, youtuber: '배연준',created:'3 months ago'},
    {video: '2',title:'my video2',view: 1233453, youtuber: '배연준',created:'4 months ago'},
  ])


  return (
    <div classNameNameName="App">
      <Navbar expand="">
  <div className="container-fluid ms-2 me-2 d-flex justify-content-between">
    <div className="d-flex">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-4" />
      <div className="d-flex" style={{cursor:'pointer'}} onClick={()=>{history.push("/main")}}>
      <img src={Logo}className="me-2 mt-1"  alt=""  style={{height:32}}/>
      <div className="noto" style={{fontSize: 25, marginTop:6, color: '#030303'}}>PODO</div>

      </div>
    </div>
    <Form className="d-flex" style={{width: 800, maxWidth: '66%'}}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=>setSearch(e.target.value)}
      />
      <Button variant="outline-success" onClick={()=>{history.push("/search/"+search)}}>Search</Button>
    </Form>
          <div className="circle-1"></div>
    <Navbar.Collapse id="basic-navbar-nav" style={{zIndex:3}}>
      <Nav className="me-auto mt-2">
        <Nav className="nav-left-link row">
          <Link to="/main" className="nav-left-link row">
          <div className="col-3" style={{height: '100%' , display:'flex',alignItems:'center'}}><img className="nav-left-logo" src={Home} alt="" /></div>
          <div className="col-9" style={{height: '100%', display:'flex',alignItems:'center'}}><span style={{fontWeight:700, fontSize:16}}>Home</span></div>
          </Link>
          
          </Nav>
          <Nav className="nav-left-link row mt-2">
            <Link to="/playlist" className="nav-left-link row">
              <div className="col-3" style={{height: '100%' , display:'flex',alignItems:'center'}}><img className="nav-left-logo" src={Playlist} alt="" /></div>
              <div className="col-9" style={{height: '100%', display:'flex',alignItems:'center'}}><span style={{fontWeight:700, fontSize:16}}>Playlist</span></div>
            </Link>
          
          </Nav>
        
      </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
    <div className="container-fluid main-content" style={{minHeight: 'calc(100vh - 54px)'}}>
      
          <Switch>
            <Route exact path="/">
              <div className="container">
                <Login></Login>
              </div>
            </Route>
            <Route exact path ="/main">
              {
                ifSetPlaylist===0
                ? <SetPlayList category={category} setCategory={setCategory}/>
                :<div className="container">
                    <Main video={video} setVideo={setVideo}></Main>
                  </div>
                
                
              }
            </Route>
            <Route exact path ="/playlist">

            </Route>
            <Route exact path = "/mypage">

            </Route>
          </Switch>
      
    </div>
    
    </div>
  );
}

export default App;

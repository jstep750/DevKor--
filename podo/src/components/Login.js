import LoginImage from '../image/로그인이미지.png'
import GoogleLogo from '../image/googlelogo.png'
import firebase from 'firebase';

function googleLogin(){
    alert("google 로그인 클릭");
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      //console.log(user)      // 인증 후 어떤 데이터를 받아오는지 확인해보기 위함.  
      window.location.href = "../";
    } 
    else {
      console.log("google 로그인 시작");
      // No user is signed in.
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  }

function Login(){
    return (
        <div className="row" style={{padding: '120px 0px'}}>
            <div className="col-lg-6">
                <h1 className="roboto" style={{fontSize:36,fontWeight:700}}>PODO와 함께 공부하세요.</h1>
                <p className="mt-5 mb-5">
                    공부에 유익한 다양한 유튜브컨텐츠를
                    방해없이 즐겨보세요.
                    </p>
                    <button type="button" className="btn d-flex google-button" onClick={googleLogin}>
                        <img className="icon-logo me-2" src={GoogleLogo} alt="" />
                        <div>Sign in with Google</div>
                    </button>
            </div>
            <div className="col-lg-6">
                <img src={LoginImage} style={{maxWidth:'100%'}}  alt="" />
            </div>
        </div>
    )
}

export default Login;
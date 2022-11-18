import { useContext } from "react";
import { testContext } from "./App"


const fakeUser = { username: 'nice789', fullname: 'เต้า หมิงซื่อ' };

function LoginBox() {
    const {auth,setAuth} = useContext(testContext);

    function checklogin(event){
        event.preventDefault()
        setAuth(fakeUser)
    }

    function logOut(){
        setAuth(null)
    }

    if (!!auth) {
        return (
            <div>
                <h3>เข้าสู่ระบบแล้วจ้า</h3>
                <p>Auth username = {auth.username}</p>
                <p>Auth fullname = {auth.fullname}</p>
                <p><button onClick={logOut}>Log out</button></p>
            </div>
        );
    }

    return (
        <form onSubmit={checklogin}>
            <h3>โปรดเข้าสู่ระบบ</h3>
            <p><input type="text" placeholder="Username" /></p>
            <p><input type="password" placeholder="Password" /></p>
            <p><button type="submit">Log in</button></p>
        </form>
    );
}

export default LoginBox;
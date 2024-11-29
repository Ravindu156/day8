import {usestate} from "react";
import {useNavigate} from "react-router-dom";

export default function Login(){
 const navigate =useNavigate();

return(
    <div>
        <h1>Login Here</h1>
        <table>
            <tr>
                <td>Username:</td>
                <td><input type="text" name="username" onChange={getTextInput}/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" name="pwd" onChange={getTextInput}/></td>
            </tr>
            <tr>
                <td style={{color:'red'}} colSpan={2}>{user.error}</td>
            </tr>


        </table>
        <button onClick={authenticate}>Login</button>




    </div>

);















}

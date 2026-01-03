import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleLogin=()=>{
        if(email==="admin@gmail.com" && password==="admin1234"){
            localStorage.setItem("role","admin")
            navigate("/admin/dashboard")
        }else if(email==="customer@gmail.com" && password==="customer1234"){
            localStorage.setItem("role","customer")
            navigate("/customer/dashboard")
        }else{
            alert("Invalid credentials")
        }
    }
    return(
        <div style={{width:"300px" , margin:"100px auto",padding:"20px",background:"#fff",borderRadius:"6px",boxShadow:"0 2px 8px ",textAlign:"center"}}>
            <h2>LoginPage</h2>
            <input  type="Email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
            <input  type="Password" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}/>
            <button style={{padding:"8px",border:"none",cursor:"pointer",borderRadius:"4px",margin:"5px"}} onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login
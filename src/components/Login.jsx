import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




export const Login = () => {
  const auth = useSelector((store)=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login,setLogin]=useState({
    username:"",
    password:""
  })

  const [login1,setLogin1]=useState({
    username1:"",
    password1:""
  })

  const handleChange=(e)=>{
    let{name,value,type,checked} = e.target;

    setLogin1((prev) => ({
       ...prev,[name] : value
    }))

  }
  useEffect(()=>{
    user()
     },[])
  
  const user =(()=>{
    axios.get("http://localhost:8080/users").then((res)=>{
        console.log(res.data);
        setLogin([...res.data]);
    })
})
  // console.log("login",login)
const onLoginData=(e)=>{
  let{name,value,type,checked} = e.target;

  e.preventDefault();
         // console.log(studentdata)
         axios.post("http://localhost:8080/user",setLogin1)
         setLogin1("")
         user()
         navigate("/neworder");
}

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
        value={login.name}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        value={login.password}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={onLoginData}
      
      >Login</button>
    </div>
  );
};

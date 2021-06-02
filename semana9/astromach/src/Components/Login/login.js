import { useEffect, useState } from "react";
import { enterStudent } from '../api'

const Login = (props)=> { 

  const [student,setStudent] = useState('')

  const getName = () =>{
  }
  

  useEffect(() => {
    if(student === ''){
      getName()
    }
  }, [student]) 

  return (
    <div>
      <input placeholder = "teste"/>
      <button onClick={() => enterStudent(student), () => props.pagination("Card") }>Test</button>
    </div>
  );
}

export default Login;
import styles from "../styles/authComponents/Auth.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import {Title} from "../components/Titles/Titles";

import {useState, useEffect} from  "react";

import { useLoginUser, useRegisterUser} from "../queries/user"

const Auth = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPw, setRegPw] = useState("");

    let body = {
      email: email,
      password: pw,
    };

    let regBody = {
      email: regEmail,
      password: regPw,
    };
    
    const { 
      mutate:loginHandler, 
      isError:loginError, 
      error:loginErr,
    } = useLoginUser();

    const { 
      mutateAsync:registerHandler, 
      isSuccess:registerSucc, 
      isError:registerError,
      error:registerErr,
    } = useRegisterUser();

  return <MainContainer>
    <form action="submit" onSubmit={(e) => e.preventDefault()}>
      <div className={styles.container}>
        <Title>Login</Title>
        <span>Email :</span>
        <input 
        type='email'
        autoComplete="username"
        onChange={(e) => setEmail(e.target.value)}
        value={email} 
        />
        <span>password :</span>
        <input 
        type='password'
        autoComplete="password"
        onChange={(e) => setPw(e.target.value)}
        value={pw} 
        />
       <button>Login Now</button>
        </div>
    </form>
    <form action="submit"
    onSubmit={(e) => e.preventDefault()}
    className={styles.registerForm}
    >
        <div className={styles.container}>
            <Title>Register</Title>
            <span>Email :</span>
            <input
              type='email'
              onChange={(e)=>setRegEmail(e.target.value)}
              autoComplete="email"
              value={regEmail} 
              />
             <span>Password :</span>
            <input
              type='password'
              onChange={(e)=>setRegPw(e.target.value)}
              autoComplete="new-password"
              value={regPw} 
              />
            <button onClick={() => registerHandler(regBody)}>Register Now</button>
        </div>
    </form>
  </MainContainer>;
};

export default Auth;
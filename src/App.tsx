import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTodoRequest } from "./stores/test-store/actions";
import { AppState } from "./stores/root-reducer";
import { loginWithEmailPassWord, loginWithFaceBookGoogle, signUpUser } from "./services/auth-services";
import { loginRequest, signUpRequest } from "./stores/auth-store/actions";
import { ELoginType } from "./variables/auth-variables";

const App = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div style={{ padding: "15px" }}>
      <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => dispatch(loginRequest({email,password}))}
        >
          Login
        </button>

        <button
          className="login__btn"
          onClick={() => dispatch(signUpRequest({email,password}))}
        >
          signup
        </button>
        <button
          className="login__btn"
          onClick={() => loginWithFaceBookGoogle(ELoginType.FACEBOOK)}
        >
          login FB
        </button>
        <button
          className="login__btn"
          onClick={() => loginWithFaceBookGoogle(ELoginType.GOOGLE)}
        >
          login GG
        </button>
    </div>
  );
};

export default App;
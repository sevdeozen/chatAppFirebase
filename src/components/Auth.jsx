import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/FirebaseConfig";

const Auth = ({ setToken }) => {
  const [isChecked, setIsChecked] = useState(false);
  const singIn = () => {
    //Kullanıcı girişi popup açma
    signInWithPopup(auth, provider)
      .then((res) => {
        isChecked
          ? localStorage.setItem("token", res.user.refreshToken)
          : sessionStorage.setItem("token", res.user.refreshToken);
        setToken(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth">
      <h1>Chat Room</h1>
      <h3>Welcome Back,</h3>
      <p>Please sing in to continue</p>
      <div className="hatirlaBox">
        <input type="checkbox" id="hatirla" />
        <label
          htmlFor="hatirla"
          onChange={(e) => setIsChecked(e.target.checked)}
        >
          Beni Hatırla
        </label>
      </div>
      <button onClick={singIn}>
        {" "}
        <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" /> Sing in with
        Google
      </button>
    </div>
  );
};

export default Auth;

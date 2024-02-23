import React, { useContext, useState } from "react";
import classes from "./Signup.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/Dataprovider/";
import { Type } from "../../Utility/action.type";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  // console.log(user);
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData)

  const authHundler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name)
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          // console.log(err);
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  // console.log(password, email)

  return (
    <section className="h-[100vh] flex flex-col items-center">
      {/* logo */}
      <Link to={"/"}>
        <img
          className="w-[100px] mx-auto my-[30px] object-contain"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className="w-[350px] flex flex-col rounded-md border-[1px] border-solid border-gray-400 p-5">
        <h1 className="text-[25px] font-bold my-5 mx-0">Sign In</h1>
        {navStateData.state?.msg && (
          <small className=" text-red-600 p-[5px] text-center font-bold">
            {navStateData.state?.msg}
          </small>
        )}

        <form className="flex flex-col gap-2.5" action="">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email">E-mail</label>
            <input
              className="mb-[10px]8p py-2 px-2.5 bg-white w-[100%] border-[1px] border-solid border-gray-500 rounded outline-[skyblue] "
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password">Password</label>
            <input
              className="mb-[10px]8p py-2 px-2.5 bg-white w-[100%] border-[1px]  border-gray-500 rounded outline-[skyblue]  "
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={authHundler}
            name="signin"
            className="border-none bg-[#f0c14b] rounded-md w-[100%] h-[30px] mt-2.5 cursor-pointer font-bold hover:bg-button_shade"
          >
            {loading.signIn ? <ClipLoader color="#000" size={20} /> : "Sign In"}
          </button>
        </form>
        {/* agreement */}
        <p className="py-2.5 text-[14px]">
          By signing-in you agree to the AMAZONE FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button
          type="submit"
          onClick={authHundler}
          name="signup"
          className="border-none bg-slate-200  rounded-md w-[100%] h-[30px] mt-2.5 cursor-pointer font-bold hover:bg-gray-300"
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={20} />
          ) : (
            "Create your Amazone Account"
          )}
        </button>
        {error && <small className="pt-2 text-red-600">{error}</small>}
      </div>
    </section>
  );
};

export default Auth;

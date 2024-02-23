import React, { useContext, useEffect } from "react";
import Routing from "./Router.jsx";
import { DataContext } from "./Components/DataProvider/Dataprovider.jsx";
import {Type} from './Utility/action.type.jsx'
import {auth} from './Utility/firebase.jsx'
const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // console.log(authUser)
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:Type.SET_USER,
          user:null
        })
      }
    })
  }, []);

  return (
    <div className="bg-gray-100">
      <Routing />
    </div>
  );
};

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/HomeComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderFirstPhase from "./components/OrderFirstPhaseComponent";
import OrderSecondPhase from "./components/OrderSecondPhaseComponent";
import OrderThirdPhase from "./components/OrderThirdPhaseComponent";
import OrderChooseTime from "./components/OrderChooseTimeComponent";
import OrderConfirm from "./components/OrderConfirmComponent";
import OrderSummary from "./components/OrderSummaryComponent";
import {useEffect, useState} from "react";
import TopUp from "./components/TopUpComponent";
import TopUpMethod from "./components/TopUpMethodComponent";
import TopUpForum from "./components/TopUpFormComponent";
import LastTransaction from "./components/LastTransactionComponent";
import UserProfile from './components/UserProfile';
import Menu from "./components/MenuComponent";
import Welcome from "./components/WelcomeComponent";
import Login from "./components/AuthComponent";
import { onAuthStateChanged } from 'firebase/auth';
import GlobalSpinner from './components/SpinnerComponent';

import { getUser } from './Firebase';

function App() {

  const [user, setUser] = useState(null);
  const [loadAuthProcess, setLoadAuthProcess] = useState(true);

  useEffect(() => {

    const userId = localStorage.getItem('user');

    if (userId === null)
      setLoadAuthProcess(false);
    else {
      getUser(userId).then( (result) => {
        if (result !== undefined)
          setUser(result)
        setLoadAuthProcess(false);
      }).catch( (error) => {
        console.log(error);
      });
    }
    console.log(user);
    // onAuthStateChanged(auth, (userAuth) => {
    //   if (userAuth) {
    //
    //     const uid = userAuth.uid;
    //     if (user === null) setUser(uid);
    //   } else {
    //
    //     setUser(null);
    //     console.log("user is logged out")
    //   }
    //   setLoadAuthProcess(false);
    // });
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <Home user={user}/> : <Welcome/> )}/>
          {/*<Route path="/login"*/}
          {/*       element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <Home/> : <Login setUser={setUser} /> )}/>*/}

                 <Route path="/login"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <Home user={user}/> : <Login setUser={setUser} /> ) }/>
          <Route path="/order/first"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <OrderFirstPhase/> : <Welcome/> )}/>
          <Route path="/order/second"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <OrderSecondPhase/> : <Welcome/> )}/>
          <Route path="/order/third"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <OrderThirdPhase /> : <Welcome/> )}/>
          <Route path="/order/choose-time"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <OrderChooseTime /> : <Welcome/> )}/>
          <Route path="/order/confirm"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <OrderConfirm /> : <Welcome/> )}/>
          <Route path="/order/summary"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <OrderSummary /> : <Welcome/> )}/>
          <Route path="/top-up"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <TopUp /> : <Welcome/> )}/>
          <Route path="/top-up/methods"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <TopUpMethod /> : <Welcome/> )}/>
          <Route path="/top-up/forum"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <TopUpForum/> : <Welcome/> )}/>
          <Route path="/top-up/last-transactions"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <LastTransaction /> : <Welcome/> )}/>
          <Route path="/profile"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <UserProfile /> : <Welcome/> )}/>
          <Route path="/menu"
                 element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <Menu /> : <Welcome/> )}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

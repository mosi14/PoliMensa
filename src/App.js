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
import GlobalSpinner from './components/SpinnerComponent';
import { getUser } from './Firebase';
import EditForm from './components/EditForm';
import QueueNumber from "./components/QueueNumber";

function App() {

  const [user, setUser] = useState(null);
  const [loadUserProcess, setLoadUserProcess] = useState(true);

  useEffect(() => {

    // const userId = localStorage.getItem('user');
    const userId = 'OqiNtPMpcMjZrd7Oels9';

    if ( user === null ) {
      getUser(userId).then( (result) => {
        if (result !== undefined) {
          result.id = userId;
          setUser(result)
        }

        setLoadUserProcess(false);
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
  }, [user]);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <Home user={user}/> : <Welcome/> )}/>
          {/*<Route path="/login"*/}
          {/*       element={ loadAuthProcess ? <GlobalSpinner/> : ( user ? <Home/> : <Login setUser={setUser} /> )}/>*/}
          <Route path="/"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( <Welcome/> )}/>
          <Route path="/order/first"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <OrderFirstPhase user={user}/> : <Welcome/> )}/>
          <Route path="/order/second"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <OrderSecondPhase/> : <Welcome/> )}/>
          <Route path="/order/third"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <OrderThirdPhase /> : <Welcome/> )}/>
          <Route path="/order/choose-time"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <OrderChooseTime user={user} setUser={ setUser }/> : <Welcome/> )}/>
          <Route path="/order/confirm"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <OrderConfirm /> : <Welcome/> )}/>
          <Route path="/order/summary"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <OrderSummary /> : <Welcome/> )}/>
          <Route path="/order/choose-time/queue-number" element={  loadUserProcess ? <GlobalSpinner/> : ( user ? <QueueNumber user={user} /> : <Welcome/> )}/>
          <Route path="/top-up"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <TopUp /> : <Welcome/> )}/>
          <Route path="/top-up/methods"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <TopUpMethod /> : <Welcome/> )}/>
          <Route path="/top-up/forum"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <TopUpForum/> : <Welcome/> )}/>
          <Route path="/top-up/last-transactions"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <LastTransaction /> : <Welcome/> )}/>
          <Route path="/profile"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <UserProfile /> : <Welcome/> )}/>
          <Route path="/profile/edit" element={<EditForm />}/>
          <Route path="/menu"
                 element={ loadUserProcess ? <GlobalSpinner/> : ( user ? <Menu /> : <Welcome/> )}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

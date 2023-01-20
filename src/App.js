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
import {useEffect} from "react";
import TopUp from "./components/TopUpComponent";
import TopUpMethod from "./components/TopUpMethodComponent";
import TopUpForum from "./components/TopUpFormComponent";
import LastTransaction from "./components/LastTransactionComponent";
import UserProfile from './components/UserProfile';
import Menu from "./components/MenuComponent";
import Welcome from "./components/WelcomeComponent";
import Login from "./components/AuthComponent";
import Result from './components/QueueNumber';
import EditForm from './components/EditForm';

function App() {



  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/order/first" element={<OrderFirstPhase />}/>
          <Route path="/order/second" element={<OrderSecondPhase />}/>
          <Route path="/order/third" element={<OrderThirdPhase />}/>
          <Route path="/order/choose-time" element={<OrderChooseTime />}/>
          <Route path="/order/confirm" element={<OrderConfirm />}/>
          <Route path="/order/summary" element={<OrderSummary />}/>
          <Route path="/order/choose-time/queue-number" element={<Result />}/>
          <Route path="/top-up" element={<TopUp />}/>
          <Route path="/top-up/methods" element={<TopUpMethod />}/>
          <Route path="/top-up/forum" element={<TopUpForum/>}/>
          <Route path="/top-up/last-transactions" element={<LastTransaction />}/>
          <Route path="/profile" element={<UserProfile />}/>
          <Route path="/profile/edit" element={<EditForm />}/>
          <Route path="/menu" element={<Menu />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

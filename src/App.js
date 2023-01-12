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
import UserProfile from './components/UserProfile';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/order/first" element={<OrderFirstPhase />}/>
          <Route path="/order/second" element={<OrderSecondPhase />}/>
          <Route path="/order/third" element={<OrderThirdPhase />}/>
          <Route path="/order/choose-time" element={<OrderChooseTime />}/>
          <Route path="/order/confirm" element={<OrderConfirm />}/>
          <Route path="/order/summary" element={<OrderSummary />}/>
          <Route path="/profile" element={<UserProfile />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

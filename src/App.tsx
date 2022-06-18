import React from 'react'; 
import './App.css';  
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import LoginScreen from './Screens/LoginScreen';
import DashboardScreen from './Screens/DashboardScreen';
import DashboardTab from './Tabs/DashboardTab';
import OurPeopleTab from './Tabs/OurPeopleTab';
import OurPeople from './components/OurPeopleComponent/OurPeople';
import EditPersonnel from './components/OurPeopleComponent/EditPersonnel';
import Bargin from './components/barginComponent/Bargin';
import BarginTab from './Tabs/BarginTab';
import BargainInfo from './components/barginComponent/BargainInfo';
import CreateBargain from './components/barginComponent/CreateBargain';
import DealTab from './Tabs/DealTab';
import Deal from './components/DealComponent/Deal';
import DealInfo from './components/DealComponent/DealInfo';
import CreateDeal from './components/DealComponent/CreateDeal';
import ClienteleTab from './Tabs/ClienteleTab';
import Clientele from './components/clienteleComponent/Clientele';
import ClienteleInfo from './components/clienteleComponent/ClienteleInfo';
import ClienteleProfile from './components/clienteleComponent/ClienteleProfile';
import DealHistory from './components/clienteleComponent/DealInfo';
import CustomerService from './components/Messaging/CustomerService';
import Operations from './components/Messaging/Operations';
import General from './components/Messaging/General';
import MyNotes from './components/Messaging/MyNotes';
import NewProfile from './components/OurPeopleComponent/NewProfile';
import AccountTab from './Tabs/AccountTab';
import EditClienteleProfile from './components/clienteleComponent/EditClienteleProfile';
import PrintedSlip from './components/accountComponent/components/PrintedSlip';
import CreateDealFromBargain from './components/barginComponent/CreateDealFromBargain';
import ReportTab from './Tabs/ReportTab';
import Summary from './components/reportComponent/Summary';
import AccountMessage from './components/Messaging/AccountMessage';

function App() {
  return (  
      <Router>  
        <Routes>     
          <Route path='/' element={<LoginScreen />}/>  
          <Route path='/print' element={<PrintedSlip />}/> 
          <Route path='/dashboard' element={<DashboardScreen />} >
            <Route path='/dashboard' element={<DashboardTab />}/>
            <Route path='/dashboard/accounts' element={<AccountTab />} />
            <Route path='/dashboard/bargains' element={<BarginTab />} >
                <Route path='/dashboard/bargains' element={<Bargin />}/>
                <Route path='/dashboard/bargains/info' element={<BargainInfo />}/>
                <Route path='/dashboard/bargains/createdeals' element={<CreateDealFromBargain />}/>
                <Route path='/dashboard/bargains/createbargin' element={<CreateBargain />}/>
            </Route>
            <Route path='/dashboard/clientele' element={<ClienteleTab />} >
              <Route path='/dashboard/clientele' element={<Clientele />}/>
              <Route path='/dashboard/clientele/info' element={<ClienteleInfo />}/>
              <Route path='/dashboard/clientele/clientprofile' element={<ClienteleProfile />}/> 
              <Route path='/dashboard/clientele/editclientprofile' element={<EditClienteleProfile />}/> 
              <Route path='/dashboard/clientele/dealhistoryinfo' element={<DealHistory />}/> 
            </Route>
            <Route path='/dashboard/deals' element={<DealTab />} >
              <Route path='/dashboard/deals' element={<Deal />}/>
              <Route path='/dashboard/deals/info' element={<DealInfo />}/>
              <Route path='/dashboard/deals/createdeal' element={<CreateDeal />}/> 
            </Route>
            <Route path='/dashboard/ourpeople' element={<OurPeopleTab />} >
              <Route path='/dashboard/ourpeople' element={<OurPeople />}/>
              <Route path='/dashboard/ourpeople/newprofile' element={<NewProfile />}/>
              <Route path='/dashboard/ourpeople/profile' element={<EditPersonnel />}/>
            </Route>  
            <Route path='/dashboard/report' element={<ReportTab />} />
            <Route path='/dashboard/customerservicemessages' element={<CustomerService />}/>
            <Route path='/dashboard/operationsmessages' element={<Operations />}/>
            <Route path='/dashboard/generalmessages' element={<General />}/>
            <Route path='/dashboard/accountsmessages' element={<AccountMessage />}/>
            <Route path='/dashboard/mynotes' element={<MyNotes />}/>
          </Route> 
        </Routes>
      </Router>  
  );
}

export default App; 
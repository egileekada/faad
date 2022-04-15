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

function App() {
  return (  
      <Router>  
        <Routes>     
          <Route path='/' element={<LoginScreen />}/>  
          <Route path='/dashboard' element={<DashboardScreen />} >
            <Route path='/dashboard' element={<DashboardTab />}/>
            <Route path='/dashboard/bargains' element={<BarginTab />} >
                <Route path='/dashboard/bargains' element={<Bargin />}/>
                <Route path='/dashboard/bargains/info' element={<BargainInfo />}/>
                <Route path='/dashboard/bargains/createbargin' element={<CreateBargain />}/>
            </Route>
              <Route path='/dashboard/deals' element={<DealTab />} >
                <Route path='/dashboard/deals' element={<Deal />}/>
                <Route path='/dashboard/deals/info' element={<DealInfo />}/>
                <Route path='/dashboard/deals/createdeal' element={<CreateDeal />}/>
                {/* <Route path='/dashboard/ourpeople/editprofile' element={<EditPersonnel />}/> */}
              </Route>
              <Route path='/dashboard/ourpeople' element={<OurPeopleTab />} >
                <Route path='/dashboard/ourpeople' element={<OurPeople />}/>
                <Route path='/dashboard/ourpeople/editprofile' element={<EditPersonnel />}/>
              </Route>
          </Route> 
        </Routes>
      </Router>  
  );
}

export default App; 
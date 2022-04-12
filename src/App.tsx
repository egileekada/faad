import React from 'react'; 
import './App.css';  
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import LoginScreen from './Screens/LoginScreen';
import DashboardScreen from './Screens/DashboardScreen';
import DashboardTab from './Tabs/DashboardTab';
import OurPeopleTab from './Tabs/OurPeopleTab';
import OurPeople from './components/OurPeopleComponent/OurPeople';
import EditPersonnel from './components/OurPeopleComponent/EditPersonnel';

function App() {
  return ( 
    
      <Router>  
        <Routes>     
          <Route path='/' element={<LoginScreen />}/>  
          <Route path='/dashboard' element={<DashboardScreen />} >
            <Route path='/dashboard' element={<DashboardTab />}/>
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
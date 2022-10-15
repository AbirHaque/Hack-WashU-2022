import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, {useEffect, useState} from "react"
import LoginPage from './components/IndexPages/LoginPage'
import Heading from './components/IndexPages/Heading';
import IndexPage from './components/IndexPages/IndexPage';
import Protected from './components/IndexPages/Protected';
import StudentViewPage from './components/Student/StudentViewPage';
import ContributorViewPage from './components/Contributor/ContributorViewPage';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpPage from './components/IndexPages/SignUpPage';

function App() {
    
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({username: 'shad123', type: 'student'}) // type is 'student' or 'contributor' 

  return (
    <Router>
      <Heading isLoggedIn={isLoggedIn} user={user}/>
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/login' element={<LoginPage loggedInAttributes={[isLoggedIn, setIsLoggedIn]} userAttributes={[user, setUser]}/>}/>  
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='student' element={<Protected isLoggedIn={isLoggedIn} matchType={user.type==='student'}/>}> 
          <Route path='view' element={<StudentViewPage />} />
        </Route>
        <Route path='contributor' element={<Protected isLoggedIn={isLoggedIn} matchType={user.type==='contributor'}/>}> 
          <Route path='view' element={<ContributorViewPage user={user}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

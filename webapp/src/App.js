import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, {useEffect, useState} from "react"
import LoginPage from './components/IndexPages/LoginPage'
import Heading from './components/IndexPages/Heading';
import IndexPage from './components/IndexPages/IndexPage';
import Protected from './components/IndexPages/Protected';
import StudentViewPage from './components/Student/StudentViewPage';
import ContributorViewPage from './components/Contributor/ContributorViewPage';
import ProjectDisplayPage from './components/Project/ProjectDisplayPage';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpPage from './components/IndexPages/SignUpPage';

//import the css file
import './css/App.css';
import UploadProject from './components/Student/UploadProject';
import Navbar from './components/IndexPages/NavBar';

function App() {
    
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({email: null, type: null}) // type is 'student' or 'contributor' 

  return (
    
    <Router>
      
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/login' element={<LoginPage loggedInAttributes={[isLoggedIn, setIsLoggedIn]} userAttributes={[user, setUser]}/>}/>  
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='student' element={<Protected isLoggedIn={isLoggedIn} matchType={user.type==='student'}/>}> 
          <Route path='view' element={<StudentViewPage user={user}/>} />
          <Route path='upload-project' element={<UploadProject user={user}/>} />
          <Route path='edit-project' element={<UploadProject user={user} editMode={true} />} />
        </Route>
        <Route path='contributor' element={<Protected isLoggedIn={isLoggedIn} matchType={user.type==='contributor'}/>}> 
          <Route path='view' element={<ContributorViewPage user={user} filterLiked={false}/>} />
          <Route path='likedprojects' element={<ContributorViewPage user={user} filterLiked={true}/>} />
          <Route path='view-project' element={<ProjectDisplayPage user={user}/>} />
        </Route>
        <Route path='project' element={<Protected isLoggedIn={isLoggedIn} />}>
          <Route path='view' element={<ProjectDisplayPage user={user}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



import './App.css';
import MainPage from './MainPage/MainPage'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import ResetPass from './Pages/ResetPass';
import NewPass from './Pages/NewPass';

import { HashRouter, Routes, Route} from "react-router-dom";

import React from 'react';
import LinkSend from './Pages/LinkSend';
import PetsFilter from './PagesFilter/PetsFilter';

import AuthRoute from './Routers/AuthRoute';
import { connect } from 'react-redux';
import SuccessSign from './Pages/SuccsesSign';
import AnimalInfo from './PageAnimal/PageAnimal';


export const SERVER_URL = process.env.REACT_APP_SERVER_URL

function App({checked,authenticated}) {
  return (
    <div className="App"> 
    <HashRouter>
        <Routes>
        { checked &&
          (
        <>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LogIn/>}/>  

        {/* <AuthRoute path="/login" element={<LogIn/>}/>  */}
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login/resetpassword" element={<ResetPass/>} />
        <Route path="/login/resetpassword/linksend" element={<LinkSend/>} />
        <Route path="/successign" element={<SuccessSign/>} />
        <Route path="/login/newpassword" element={<NewPass/>} />
        <Route path="/petsfilter" element={<AuthRoute><PetsFilter/></AuthRoute>} />
        <Route path="/animalinfo/:name" element={<AnimalInfo />} />
        </>
        )}
        </Routes>
    </HashRouter>
    </div>
  );
}

const mapStateToProps = ({session}) => ({
  checked: session.checked,
  authenticated: session.authenticated,
})


export default connect(mapStateToProps) (App);

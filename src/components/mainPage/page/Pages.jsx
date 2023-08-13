import React from "react";
import {Routes,Route} from 'react-router-dom';
import TailwindDashboard from "../dashboard/TailwindDashboard";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import ForgotPassword from "../auth/forgotPassword/ForgotPassword";
import ResetPassword from "../auth/resetPassword/ResetPassword";
import TailwindDashboardSecond from "../dashboard/TailwindDashboard";
import Error404 from "../error/Error404";
import Error500 from "../error/Error500";
import Error403 from "../error/Error403";
import Profile from "../profile/Profile";
import BlankPage from "../blankPage/BlankPage";
import Client from "../clientPage/Client";
import MessageNotificationLists from "../messageNotification/MessageNotificationLists";
import FormLayout from "../forms/FormLayout";
import Chat from "../chatPage/Chat";
import Tables from "../table/Tables";
import Invoice from "../invoice/Invoice";
import Tasks from "../task/Task";
import UIButton from "../uiElement/UIButton";
import Cards from "../cards/Cards";
import Grids from "../grid/Grid";
import Accordion from "../accordion/Accordion";


function Pages(){
    return(
        <Routes>
    <Route path="/" element={<TailwindDashboard/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
    <Route path="/error404" element={<Error404/>}/>
    <Route path="/error500" element={<Error500/>}/>
    <Route path="/error403" element={<Error403/>}/>
    <Route path="/profile-page" element={<Profile/>}/>
    <Route path="/blank-page" element={<BlankPage/>}/>
    <Route path="/client-page" element={<Client/>}/>
    <Route path="/message-Notifications-page" element={<MessageNotificationLists/>}/>
    <Route path="/form-layouts" element={<FormLayout/>}/>
    <Route path="/chat-page" element={<Chat/>}/>
    <Route path="/table-variants" element={<Tables/>}/>
    <Route path="/invoice" element={<Invoice/>}/>
    <Route path="/tasks" element={<Tasks/>}/>
    <Route path="/ui-buttons" element={<UIButton/>}/>
    <Route path="/ui-cards" element={<Cards/>}/>
    <Route path="/ui-grids" element={<Grids/>}/>
    <Route path="/ui-accordions" element={<Accordion/>}/>

</Routes>
    )
}
export default Pages;
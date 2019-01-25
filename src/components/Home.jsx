import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
import Enverment from './Enverment';
import Review from './Review';
import Involved from './Involved';
import Aim from './Aim';
import Team from './Team';
import TeacherR from './TeacherR';
import Service from './Service';
import Tabs from './Tabs';
import Course from './Course';
import Event from './Event';
import Process from './Process';
import Our from './OUR';
import Achivment from './Achivment';
import Footer from './Footer';
import NavDetailes from './nav-Detailes';

const Home =(props)=>{



        return (
            <div>
                <NavDetailes/>
                <Nav/>
                <Main all={props.main}/>
                <Process all={props.pro}/>
                <Enverment/>
                <Review all={props.review}/>
                <Involved main={props.involved}/>
                <Aim all={props.aim}/>
                <Course all={props.course}/>
                <TeacherR all={props.teacher}/>
                <Tabs all={props.tabs}/>
                 <Event all={props.event}/>
                 <Team all={props.team}/> 
                 <Our all={props.ourcontent}/>
                <Achivment all={props.achiv}/> 
                <Footer all={props.foter}/>

            </div>
        );
    
}

export default Home;
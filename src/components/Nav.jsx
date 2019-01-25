import React from 'react';
import {Link} from "react-router-dom";
import $ from "jquery";

const Nav = () => {

$(document).ready(()=>{

    $(".navbar-toggle").click(function(){
        $('.gogo').slideToggle() 
    })
})


    return (
            <nav className="navbar navbar-default navi">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" 
                            data-target="navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" rel="home" to="/" title="Buy Sell Rent Everyting">
                        <img style={{maxWidth:'100px', marginTop: '0px'}}
                            src="../images/logo.png"/>
                    </Link>
                </div>
                <ul class="nav navbar-nav gogo">
                <li class="dropdown">
                    <Link class="dropdown-toggle" data-toggle="dropdown" to="/">CODE BOOTCAMPS
                    <span class="caret"></span></Link>
                    <ul class="dropdown-menu">
                        <li> <Link to="/"> IMMERSIVE</Link></li>
                        <li> <Link to="/"> FLEX (PART-TIME)</Link></li>
                    </ul>
                </li>


                <li class="dropdown">
                    <Link class="dropdown-toggle" data-toggle="dropdown" to="/">SCHEDULE
                    <span class="caret"></span></Link>
                    <ul class="dropdown-menu">
                        <li> <Link to="/"> ATLANTA,</Link></li>
                        <li> <Link to="/">GAHOUSTON, TX</Link></li>
                    </ul>
                </li>
                
                <li class="dropdown">
                    <Link class="dropdown-toggle" data-toggle="dropdown" to="/">CODE BOOTCAMPS
                    <span class="caret"></span></Link>
                    <ul class="dropdown-menu">
                        <li> <Link to="/"> TUITION</Link></li>
                        <li> <Link to="/"> PREPAREBLOG</Link></li>
                        <li> <Link to="/"> BOOTCAMP</Link></li>
                        <li> <Link to="/"> FAQ</Link></li>
                        <li> <Link to="/"> TEAM</Link></li>
                        <li> <Link to="/"> CONTACT</Link></li>
                    </ul>
                </li>
                
                <li class="dropdown">
                    <Link class="dropdown-toggle" data-toggle="dropdown" to="/">CORPORATE SERVICES
                    <span class="caret"></span></Link>
                    <ul class="dropdown-menu">
                        <li> <Link to="/"> Hire Developer</Link></li>
                        <li> <Link to="/">Train your team</Link></li>
                    </ul>
                </li>
                    <button className="btn bg-primary">Registration</button>
                </ul>
            </nav>
    );
};

export default Nav;
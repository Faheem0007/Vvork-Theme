import React, { Component } from 'react';
class Main extends Component {


    render() {

        var resdo = this.props.all.Eventdate.map((v,i)=>{
            return(
                
            <div className="col-md-4 main-main-data">
                <h5>{this.props.all.Eventdate[i]}</h5>
                <h4>{this.props.all.EventDetails[i]}</h4>
                <button className="btn btn-primary" >Attend Seminar</button>
            </div>
            )
        })
        
        return (
            <div className="container-fluid bg-main">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="content">
                                <h2>Vvork Cloud Technologies</h2>
                                <h6>Job oriented Training, Professional Approach & Hands on training
                                    We Help You Learn To Earn Certification 
                                    MCSA (Microsoft Certified Solution Associate) 
                                    Full Stack Development in a year
                                </h6>
                                <button>Registration</button>
                                <button>Seminar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 nopadding">
                        {resdo}
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;
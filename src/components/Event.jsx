import React from 'react';
import $ from "jquery";

const Event = (props) => {

    
    $(document).ready(()=>{
        $('.jado').first().addClass('active')
        $('.month-data,.year-data').hide()


        $('.week').click(()=>{
            $('.week').addClass('active');
            $('.month,.years').removeClass('active')
            $('.month-data,.year-data').css('display','none')
            $('.week-data').css('display','block')
        })
        $('.month').click(()=>{
            $('.month').addClass('active');
            $('.week,.years').removeClass('active')
            $('.week-data,.year-data').css('display','none')
            $('.month-data').css('display','block')
        })
        $('.years').click(()=>{
            $('.years').addClass('active');
            $('.month,.week').removeClass('active')
            $('.month-data,.week-data').css('display','none')
            $('.year-data').css('display','block')
        })

    })

    var week=[];
    for(var i= 0;i<props.all.Event.length;i++){
        week[i]=(
            <div className="item jado" key={i}>
                <div className="week-data">
                    <div className="col-md-6">
                        <div className="col-md-12" style={{borderBottom:'1px solid #eee'}}>
                            <div className="col-md-12" style={{border:'1px solid #eee'}}>
                                <div className="col-md-6">
                                    <img src={props.all.ImgWeek[i]} style={{width:'100%',height:'170px'}} alt=""/>            
                                </div>
                                <div className="col-md-6">
                                    <h4>{props.all.EventName[i]}</h4>
                                    <h4><i className="fas fa-calendar-alt"></i>{props.all.EventDate[i]}</h4>
                                    <h6><i className="fas fa-clock"></i> 10am to 2pm</h6>
                                    <h6><i className="fas fa-clock"></i> 4am to 6pm</h6>
                                    <h6><i className="fas fa-clock"></i> 6am to 8pm</h6>
                                    <button className="bttn pull-right">Attend Event</button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="week-data">
                    <div className="col-md-6">
                        <div className="col-md-12" style={{borderBottom:'1px solid #eee'}}>
                            <div className="col-md-12" style={{border:'1px solid #eee'}}>
                                <div className="col-md-6">
                                    <img src={props.all.ImgWeek[i+1]} style={{width:'100%',height:'170px'}} alt=""/>            
                                </div>
                                <div className="col-md-6">
                                    <h4>{props.all.EventName[i+1]}</h4>
                                    <h4><i className="fas fa-calendar-alt"></i>{props.all.EventDate[i+1]}</h4>
                                    <h6><i className="fas fa-clock"></i> 10am to 2pm</h6>
                                    <h6><i className="fas fa-clock"></i> 4am to 6pm</h6>
                                    <h6><i className="fas fa-clock"></i> 6am to 8pm</h6>
                                    <button className="bttn pull-right">Attend Event</button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }

    console.log(week)


    return (
        <div>
            <div className="container-fluid Event"  style={{backgroundColor:'#eee'}}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Upcoming Events</h1>
                    </div>
                </div>
                <div className="col-md-12">
                    <div id="carousel" className="carousel slide">
                        <div className="carousel-inner">
                            {week}
                        </div>
                        <a href="#carousel" className="left carousel-control" data-slide="prev" style={{color:'#55acee'}}>
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a href="#carousel" className="right carousel-control" data-slide="next" style={{color:'#55acee'}}>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Event;
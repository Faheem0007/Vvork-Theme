import React from 'react';
import $ from 'jquery';
const TeacherR = (props) => {


    $(document).ready(function(){

        var main = 1;
        $('.nxt').click(function(){ 
            if(main == 0){
                $('.content').css({'left':'-100%','right':'0','opacity':'0','z-1ndex':'-1'})
                $('.content1').css({'left':'0%','opacity':'1','z-1ndex':'99'})
                main=1
            }else if(main == 1){
                $('.content').css({'left':'0%','opacity':'1','z-1ndex':'99'})
                $('.content1').css({'left':'-100%','right':'0','opacity':'0','z-1ndex':'-1'})

                main=0
            }

        })
        $('.prev').click(function(){ 
            if(main == 0){
                $('.content1').css({'left':'-100%','right':'0','opacity':'0','z-1ndex':'-1'})
                $('.content').css({'left':'0%','opacity':'1','z-1ndex':'99'})
                main=1
            }else if(main == 1){
                $('.content1').css({'left':'0%','opacity':'1','z-1ndex':'99'})
                $('.content').css({'left':'-100%','right':'0','opacity':'0','z-1ndex':'-1'})

                main=0
            }

        })
    })



    return (
        <div>
            <div className="container-fluid hidden-xs Slider1">
                <div className="row">
                    <div className="col-md-12">
                        <div id="Slider1" className="carousel slide" data-ride="false">
                            <ol className="carousel-indicators">
                                <li data-target="#Slider1" data-slide-to="0 active" ></li>
                                <li data-target="#Slider1" data-slide-to="1" ></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                        <div className="col-md-12">
                                            <div className="slider1-content">
                                            <img className="pull-right" src="../images/faisal.jpg" alt=""/>
                                            <h3>The whole process till today is worth it… I feel I’m part of something that you can actually see, and that’s rewarding. With the help of Vvork Cloud, I’m able to do what I do today.</h3>
                                            <h4>Muhammad Fasial</h4>
                                            <h5>Chairman</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="slider1-content">
                                        <img className="pull-right" src="../images/faisal.jpg" alt=""/>
                                        <h3>The whole process till today is worth it… I feel I’m part of something that you can actually see, and that’s rewarding. With the help of Vvork Cloud, I’m able to do what I do today.</h3>
                                        <h4>Muhammad Fasial</h4>
                                        <h5>Chairman</h5>
                                    </div>
                                </div>
                            </div>
                            <a href="#Slider1" className="right carousel-control" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                            <a href="#Slider1" className="left carousel-control" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherR;
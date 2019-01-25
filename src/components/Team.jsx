import React from 'react';

const Team = (props) => {

    var fristslide =props.all.Name.map((v,i)=>{
        return(
                <div className="col-md-3 col-sm-12 img-team" key={i}>
                    <img src={props.all.Img[i]} alt=""/>
                    <h3>{props.all.Name[i]}</h3>
                    <h4>{props.all.Post[i]}</h4>
                    <div className="icon">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-github"></i>
                    </div>
                </div>
        )
    }) 

    
    var slide2 =props.all.Name1.map((v,ind)=>{
        return(
                <div className="col-md-3 img-team" key={ind}>
                    <img src={props.all.Img1[ind]} alt=""/>
                    <h3>{props.all.Name1[ind]}</h3>
                    <h4>{props.all.Post1[ind]}</h4>
                    <div className="icon">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-github"></i>
                    </div>
                </div>
        )
    }) 

    return (
        <div>
            <div className="container Team">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-team">
                            <h1>{props.all.content[0]}</h1>
                        </div>
                        <div id="team" className="carousel slide" data-interval="false">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="col-md-12 main-team">
                                        {fristslide}
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="col-md-12 main-team">
                                        {slide2}
                                    </div>
                                </div>
                            </div>
                            <a href="#team" className="left carousel-control" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a href="#team" className="right carousel-control" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
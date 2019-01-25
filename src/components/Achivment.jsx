import React from 'react';

const Achivment = (props) => {

    var ach = props.all.dataach.map((v,i)=>{
        return (
            
            <div className="col-md-3 immg">
                <img src={props.all.dataach[i]} alt=""/>
            </div>
        )
    })


    return (
        <div>
            <div className="container-fluid achive">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Our Achievements</h1>
                        <p>Although over 80% of students have no prior experience in web development. On a national scale, 94% of our alumni land a job in 360 days after this one year course, with an average salary of 100000/- per month.</p>
                    </div>

                    <div id="sponser" className="carousel slide">
                        <ol className="carousel-indicators">
                            <li data-target="#sponser" data-slide-to="0 active"></li>
                            <li data-target="#sponser" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="col-md-12">
                                    {ach}
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-12">
                                    {ach}
                                </div>
                            </div>
                        </div>
                        
                        <a href="#sponser" className="right carousel-control" data-slide="next" style={{marginTop:"100px"}}>
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                            <a href="#sponser" className="left carousel-control" data-slide="prev" style={{marginTop:"100px"}}>
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivment;
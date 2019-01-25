import React from 'react';
import $ from "jquery";

const Review = (props) => {
    var qs=props.all.questions.map((q,i)=>{
        return(
            <li className="q" key={i}>
                <h3>{q}</h3>
                <p className="ans">{props.all.steps[i]}</p>
            </li>
        )
    })

    $(document).ready(function(){
        $('.ans').first().slideDown();
        
        $('.q').click(function(){
            $(this).children('.ans').slideToggle();
            $(this).parent().toggleClass('active');
            $(this).siblings().children('.ans').slideUp();
            $(this).parent().siblings().removeClass('active');
        });
    });

    
    return (
        <div className="container-fluid Review noPadding">
            <div className="row">
                <div className="col-md-12 noPadding">
                    <div className="col-md-6 noPadding">
                        <div className="side-video">
                            <div className="review">
                                <h1>Video Review</h1>
                            </div>
                            <div className="video">
                                <iframe src="https://www.youtube.com/embed/vm0oS0GjLHU" frameBorder="2" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 noPadding">
                        <div className="rev-content">
                            <div className="side-img">
                                <div className="overlay"></div>
                                <h1>{props.all.ImgHeading}</h1>
                                <ul className="question">
                                    {qs}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default Review;
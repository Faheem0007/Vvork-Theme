import React from 'react';
import $ from 'jquery';

const Course = (props) => {
    var frontEnd=[];
    frontEnd[0] = props.all.Detailshtml.map((v,i)=>{return (<li key={i}>{props.all.Detailshtml[i]}</li>)})
    frontEnd[1] = props.all.Detailscss.map((v,i)=>{return (<li key={i}>{props.all.Detailscss[i]}</li>)})    
    frontEnd[2] = props.all.Detailsjs.map((v,i)=>{return (<li key={i}>{props.all.Detailsjs[i]}</li>)})
    frontEnd[3] =props.all.Detailsangular.map((v,i)=>{return (<li key={i}>{props.all.Detailsangular[i]}</li>)})
    frontEnd[4] = props.all.Detailshtml.map((v,i)=>{return (<li key={i}>{props.all.Detailshtml[i]}</li>)})
    frontEnd[5] =props.all. Detailsionic.map((v,i)=>{return (<li key={i}>{props.all. Detailsionic[i]}</li>)})

    var backEnd=[];    

    backEnd[0] = props.all.Detailshtml.map((v,i)=>{return (<li key={i}>{props.all.Detailshtml[i]}</li>)})
    backEnd[1] = props.all.Detailshtml.map((v,i)=>{return (<li key={i}>{props.all.Detailshtml[i]}</li>)})
    backEnd[2] = props.all.Detailshtml.map((v,i)=>{return (<li key={i}>{props.all.Detailshtml[i]}</li>)})

    var back = props.all.BackEnd.map((v,i)=>{
        return (    
        <div className="col-md-4 col-sm-6"  key={i}>
            <div className="div">
                <img src={props.all.BackImg[i]} alt=""/>
                <h2>{props.all.BackEnd[i]}</h2>
                <p>{props.all.backP[i]}</p>
                <ul>
                    {backEnd[i]}
                </ul>
                <button>See Prospective</button>
            </div>
        </div>
        );

    });

    var front = props.all.MainHeading.map((v,i)=>{
        return (
            
            <div className="col-md-4 col-sm-6"  key={i}>
            <div className="div">
                <img src={props.all.MainImg[i]} alt=""/>
                <h2>{props.all.MainHeading[i]}</h2>
                <p>{props.all.Mainparagraph[i]}</p>
                <ul>
                    {frontEnd[i]}
                </ul>
                <button>See Prospective</button>
            </div>
        </div>
        )
    })


    $(document).ready(function(){
        $('.back-btn').addClass('active').removeClass('btn-primary');
        $('.back').css({'display':'block'})
        $('.front').css({'display':'none'})

        $('.back-btn').click(()=>{
            $('.back').css({'display':'block'})
            $('.back-btn').addClass('active').removeClass('btn-primary');
            $('.front-btn').addClass('btn-primary').removeClass('active');
            $('.front').css({'display':'none'})
        })
    })
    

    $(document).ready(function(){
        $('.front-btn').click(()=>{
            $('.back').css({'display':'none'})
            $('.front-btn').addClass('active').removeClass('btn-primary');
            $('.back-btn').addClass('btn-primary').removeClass('active');
            $('.front').css({'display':'block'})
        })
    })
    
    
    return (
        <div>
            <div className="container-fluid course">
                <div className="row">
                    <div className="col-md-12">
                        <div className="course-content">
                            <h1>Course Details</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aspernatur accusamus distinctio qui eligendi possimus voluptate atque tenetur minima aperiam praesentium vero dolorum veniam, ab consequatur sequi corporis nihil nostrum.</p>
                        </div>
                    </div>
                    <div className="btn btn-md btn-primary front-btn" style={{marginLeft:'5%',textAlign:'center'}}>Front- End Module</div>
                    <div className="btn btn-md btn-primary back-btn">Back- End Module</div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 front">
                                {front}
                            </div>

                            <div className="back">
                               {back}                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
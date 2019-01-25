import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Aim = (props) => {

    var Resdone = props.all.StudentImg.map((v,i)=>{
        return ( <div className="col-md-12 col-sm-12 nopadding" key={i}>
                    <div className="col-md-6 nopadding" style={{borderRight:'1px solid #AAB8C2'}}>
                        <div className="col-md-12 nopadding">
                            <div className="col-md-4 col-sm-4 col-xs-4 nopadding">
                                <div className="content">
                                    <img src={props.all.StudentImg[i]} className="pull-left" alt="" />
                                    <h3 className="pull-left" style={{display:'block',width:'100%'}}>{props.all.StudentName[i]}</h3>
                                    <br />
                                    <p><strong className="pull-left" style={{marginLeft:'10px'}}>Skills: </strong>
                                        <span className="tags">{props.all.Skills[0]}</span>
                                        <span className="tags">{props.all.Skills[1]}</span>
                                        <span className="tags">{props.all.Skills[2]}</span>
                                        <span className="tags">{props.all.Skills[3]}</span> <br />
                                        <span className="tags">{props.all.Skills[4]}</span>
                                        <span className="tags">{props.all.Skills[5]}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <div className="data">
                                    <h3>Project Detials</h3>
                                    <h3>{props.all.hding[i]}</h3>
                                    <p>{props.all.Details[i]}</p>
                                    <div className="col-xs-12 pull-right  col-sm-4 emphasis">
                                        <button className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Hire
                                            me </button>
                                    </div>
                                    <div className="pull-right emphasis">
                                        <button className="btn btn-info btn-block"><span className="fa fa-user"></span> View Profile
                                        </button>
                                    </div>
                                    <div className="pull-right emphasis">
                                        <button className="btn btn-info btn-block"><span className="fa fa-profile"></span> More Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 nopadding">
                        <img src={props.all.Img[i]} className="img-fluid" style={{width:'100%',height:'85vh'}} alt="" />
                    </div>
                </div>

        )
    }) 
    


    return (
        <div className="container-fluid Aim">
            <div className="row">
                <div className="content-aim"  style={{textAlign:'center'}}>
                    <h1>Students Projects</h1>
                    <p style={{marginLeft:'20%',marginRight:'20%',marginBottom:'5%',}}>Lorem ipsum dolor soluta voluptate ad asperiores tempore velit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellat velit quas consequatur, animi labore?</p>
                </div>
                
            <Carousel showThumbs={false} interval={5000} cancelable={false} showStatus={false} infiniteLoop={true}  useKeyboardArrows={true} autoPlay={true} stopOnHover={true}>
                        
                {Resdone}
            </Carousel>
            </div>
        </div>
    );
};

export default Aim;
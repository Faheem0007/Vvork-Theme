import React from 'react';


const Service = (props) => {

    var resu = props.all.heading.map((obj,i)=>{
        return (
            <div className="col-md-4" key={i}>
                <div className="div">
                    <i className={props.all.icon[i]}></i>
                    <h2>{props.all.heading[i]}</h2>
                    <p>{props.all.Para[i]}</p>
                    <button>{props.all.btn}</button>
                </div>
            </div>
        )
    })
    
    return (
        <div>
            <div className="container MAIN">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <div className="content">
                                <h2>We Are <span style={{color:'#4ac4f3',fontWeight:'bold'}}>Specialized</span> in the Following Services</h2>
                                <h6>We can cover all the aspects of your Web Development needs</h6>
                            </div>
                        </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {resu}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Service;
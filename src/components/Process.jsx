import React from 'react';

const Process = (props) => {

    var pro = props.all.proc.map((v,i)=>{
        return(
             <div className="col-md-4 dtls" key={i}>
                <i className={v.icon}></i>
                <h3>{v.title}</h3>
                <p>{v.Dtls}</p>
            </div>
        )
    })
    return (
        <div>
            <div className="container-fluid main-proc">
                <div className="row">
                    <div className="col-md-12 nopadding">
                        {pro}
                    </div>
                    <div className="col-md-12 nopadding">  
                        <div className="proc-bg">
                            <div className="overlaay">
                                <h2>Next Coding Bootcamp in VvorkCloud Starts</h2>
                                <h4>Feb 11th, 2019</h4>
                            </div>
                        </div>
                            <div className="col-md-12 nopadding">
                                <button className="col-md-4 hidden-sm hidden-xs">CURRICULUM</button>
                                <button className="col-md-4 hidden-sm hidden-xs">SCHEDULE A CALL</button>
                                <button className="col-md-4 hidden-sm hidden-xs">APPLY TODAY</button>

                                
                                <button className="col-md-4 btn-block hidden-lg hidden-md">CURRICULUM</button>
                                <button className="col-md-4 btn-block hidden-lg hidden-md">SCHEDULE A CALL</button>
                                <button className="col-md-4 btn-block hidden-lg hidden-md">APPLY TODAY</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
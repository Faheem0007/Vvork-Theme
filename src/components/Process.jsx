import React from 'react';

const Process = (props) => {

    var pro = props.all.pros.map((v,i)=>{
        return(
             <div className="col-md-2" style={{marginTop:'50px',marginLeft:'20px'}}>
                <h4>{props.all.pros[i]}</h4>
            </div>
        )
    })

    return (
        <div>
            <div className="container-fluid main-proc">
                <div className="row">
                    <div className="container-fluid proc">
                        <div className="col-md-12">
                            <div className="proc-content">
                                <h2>Admission Process</h2>
                                <p>The goal of admissions is to make sure you're ready for the challenges of the program, and that Vvork Cloud is the right fit for you. We look for motivation, how well you work with others, and perseverance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 pd col-md-offset-2">
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
                                <button className="col-md-4">CURRICULUM</button>
                                <button className="col-md-4">SCHEDULE A CALL</button>
                                <button className="col-md-4">APPLY TODAY</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
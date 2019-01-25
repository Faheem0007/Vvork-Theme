import React from 'react';

const OUR = (props) => {
    var propdata = props.all.our.map((v,i)=>{
        return (
            <div className="col-md-2" key={i}>
                <h5>{props.all.our[i]}</h5>
            </div>
        )
    })
    return (
        <div>
            <div className="container-fluid OUR">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Our Process</h1>
                    </div>
                    <div className="col-md-10  col-md-offset-2 md-main">
                        {propdata}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OUR;
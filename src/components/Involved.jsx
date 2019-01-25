import React from 'react';

const Involved = (props) => {

    var result = props.main.steps.map((res,i) => {
        return (
            <li key={i}>
                <h5>{props.main.Labels[i]}<span style={{fontWeight:'100'}}>{res}</span> </h5>    
            </li>
        )
    })

    return (
        <div>
            <div className="container-fluid involved">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inv-content">
                            <h1>{props.main.InvHeading}</h1>
                            <p>{props.main. InvP}</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <div className="div">
                                <i className={props.main.img}></i>
                                <h3>Earning an MCSA</h3>
                                <ul>
                                    {result}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="div">
                                <i className={props.main.Career[0]}></i>
                                <h2>{props.main.Career[1]}</h2>
                                <p>{props.main.Career[2]}</p>
                            </div>         
                        </div>
                        <div className="col-md-4">
                            <div className="div">
                                <i className={props.main.FullStack[0]}></i>
                                <h2>{props.main.FullStack[1]}</h2>
                                <p>{props.main.FullStack[2]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Involved;
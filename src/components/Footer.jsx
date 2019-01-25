import React from 'react';

const Footer = (props) => {

    var f1 = props.all.footerdata.map((v,i)=>{
        return (
            <h4 key={i}>{props.all.f1[i]}</h4>
            
        )
    })
    
    var footerdata = props.all.footerdata.map((v,iN)=>{
        return (
            <h4 key={iN}>{props.all.footerdata[iN]}</h4>
            
        )
    })

    var f2 = props.all.footerdata.map((v,iNd)=>{
        return (
            <h4  key={iNd}>{props.all.f2[iNd]}</h4>
            
        )
    })

    return (
        <div>
            <div className="container-fluid nopadding you">
                <div className="col-md-12 nopadding">
                    <button className="col-md-3 hidden-sm hidden-xs"><div className="main"><i className="fab fa-linkedin-in"></i> <h4>Follow on Linkedin</h4></div></button>
                    <button className="col-md-3 hidden-sm hidden-xs"><div className="main"><i className="fab fa-facebook-f"></i> <h4>Follow on Facebook</h4></div></button>
                    <button className="col-md-3 hidden-sm hidden-xs"><div className="main"><i className="fab fa-instagram"></i> <h4>Follow on Instagram</h4></div></button>
                    <button className="col-md-3 hidden-sm hidden-xs"><div className="main"><i className="fab fa-twitter"></i> <h4>Follow on Twitter</h4></div></button>
                </div>
                <div className="col-md-12 nopadding">                
                <button className="col-md-3 hidden-md hidden-lg btn-block"><div className="main"><i className="fab fa-linkedin-in"></i> <h4>Follow on Linkedin</h4></div></button>
                    <button className="col-md-3 hidden-md hidden-lg btn-block"><div className="main"><i className="fab fa-facebook-f"></i> <h4>Follow on Facebook</h4></div></button>
                    <button className="col-md-3 hidden-md hidden-lg btn-block"><div className="main"><i className="fab fa-instagram"></i> <h4>Follow on Instagram</h4></div></button>
                    <button className="col-md-3 hidden-md hidden-lg btn-block"><div className="main"><i className="fab fa-twitter"></i> <h4>Follow on Twitter</h4></div></button>
               </div>
                <div className="container-fluid footer nopadding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-3">
                                {f1}
                            </div>
                            
                            <div className="col-md-3">
                                {footerdata}
                            </div>
                            
                            <div className="col-md-3">
                                {f2}
                            </div>

                            
                            <div className="col-md-3 nopadding bg-primary">
                                <h3>We build the Web.</h3>
                                <h4 className="icon-footer"><i className="fas fa-envelope"></i>Reach out <i className="fas fa-arrow-right"></i></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
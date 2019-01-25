import React, { Component } from 'react';
import { EnvData, envPragraph, envPragraph2, envPragraph1  } from './Props';



class Enverment extends Component {
    
    
    render(props) {
        return (
            <div className="container-fluid enverment">
                <div className="row">
                    <div className="col-md-12">
                        <div className="env-content">
                            <h2>Why you choose Vvork?</h2>
                            <p> Vvork Cloud Technologies Showcase a nation’s future. We Represent the hope of parents capitalize upon the aspirations of very young generation and respond the needs and challenges facing the society. 
                                At VCT, we aim at becoming very reliable partner of the parents and society to make each student a truly great person with extreme motivation, creative idea and supreme talents so that they can achieve extraordinary goals and objectives.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-md-12">
                            <EnvData title="One-on-One Mentorship"  P={envPragraph}  icon="fas fa-handshake"/>
                            <EnvData title="Scholarship" P={envPragraph2}  icon="fas fa-graduation-cap"/>
                            <EnvData title="Qualified Teachers" P={envPragraph1}  icon="fas fa-university"/>
                        </div>
                    </div>        
                </div>
            </div>
            
        );
    }
}

export default Enverment;
import React from 'react';

export const envPragraph = `Schedule one-on-one sessions with a career advisor to work on career-related projects or questions of all levels. We’ll provide the candid feedback and support to level-up your job prospects.`;
export const envPragraph1 = `Your ability to pick up new technologies and frameworks doesn't stop after class. The platform provides 24/7 access to our curriculum and the stacks you're learning.`;
export const envPragraph2 =`Vvork Cloud Technologies offer scholarships on the base of good performance. Scholarships can be applied for during your admissions process after submitting an application for your program.`;


export const EnvData = (props) => {
    return (
            <div className="col-md-4">
                <div className="env-data">
                    <div className="icon">
                        <i className={props.icon}></i>
                    </div>
                    <h3>{props.title}</h3>
                    <p>{props.P}</p>
                </div>
            </div>
    );
};
import React from 'react';
import $ from 'jquery';

const Tabs = (props) => {


    $(document).ready(function(){
        $('.tabs').fadeOut(5)
        $('.tabs').first().fadeIn()
        $('.circle-1').addClass('active')
        $('.circle-1').click(function(){
            $('.tabs-content1').fadeIn(5);
            $('.circle-2,.circle-3,.circle-4,.circle-5,.circle-6,.circle-7,.circle-8').removeClass('active')
            $('.tabs-content2,.tabs-content3,.tabs-content4,.tabs-content5,.tabs-content6,.tabs-content7,.tabs-content8').fadeOut(5);
            $('.circle-1').addClass('active')

        })
        $('.circle-2').click(function(){
            $('.tabs-content2').fadeIn(5);
            $('.circle-1,.circle-3,.circle-4,.circle-5,.circle-6,.circle-7,.circle-8').removeClass('active')
            $('.tabs-content1,.tabs-content3,.tabs-content4,.tabs-content5,.tabs-content6,.tabs-content7,.tabs-content8').fadeOut(5);
            $('.circle-2').addClass('active')

        })
        $('.circle-3').click(function(){
            $('.tabs-content3').fadeIn(5);
            $('.circle-1,.circle-2,.circle-4,.circle-5,.circle-6,.circle-7,.circle-8').removeClass('active')
            $('.tabs-content2,.tabs-content1,.tabs-content4,.tabs-content5,.tabs-content6,.tabs-content7,.tabs-content8').fadeOut(5);
            $('.circle-3').addClass('active')

        })
        $('.circle-4').click(function(){
            $('.tabs-content4').fadeIn(5);
            $('.tabs-content2,.tabs-content3,.tabs-content1,.tabs-content5,.tabs-content6,.tabs-content7,.tabs-content8').fadeOut(5);
            $('.circle-1,.circle-3,.circle-2,.circle-5,.circle-6,.circle-7,.circle-8').removeClass('active')
            $('.circle-4').addClass('active')

        })
        $('.circle-5').click(function(){
            $('.tabs-content5').fadeIn(5);
            $('.circle-2,.circle-3,.circle-4,.circle-1,.circle-6,.circle-7,.circle-8').removeClass('active')
            $('.tabs-content2,.tabs-content3,.tabs-content4,.tabs-content1,.tabs-content6,.tabs-content7,.tabs-content8').fadeOut(5);
            $('.circle-5').addClass('active')

        })
        $('.circle-6').click(function(){
            $('.tabs-content6').fadeIn(5);
            $('.circle-1,.circle-3,.circle-4,.circle-5,.circle-2,.circle-7,.circle-8').removeClass('active')
            $('.tabs-content2,.tabs-content3,.tabs-content4,.tabs-content5,.tabs-content1,.tabs-content7,.tabs-content8').fadeOut(5);
            $('.circle-6').addClass('active')

        })
        $('.circle-7').click(function(){
            $('.tabs-content7').fadeIn(5);
            $('.circle-1,.circle-2,.circle-4,.circle-5,.circle-6,.circle-3,.circle-8').removeClass('active')
            $('.tabs-content2,.tabs-content3,.tabs-content4,.tabs-content5,.tabs-content6,.tabs-content1,.tabs-content8').fadeOut(5);
            $('.circle-7').addClass('active')

        })
        $('.circle-8').click(function(){
            $('.tabs-content8').fadeIn(5);
            $('.circle-1,.circle-3,.circle-2,.circle-5,.circle-6,.circle-7,.circle-4').removeClass('active')
            $('.tabs-content2,.tabs-content3,.tabs-content4,.tabs-content5,.tabs-content6,.tabs-content7,.tabs-content1').fadeOut(5);
            $('.circle-8').addClass('active')

        })

        $('.sub').slideUp();

        $('.hding1').click(()=>{

            $('.subKuch1').slideToggle(100);
        })

        
        $('.hding2').click(()=>{

            $('.subKuch2').slideToggle(100);
        })

        $('.hding3').click(()=>{

            $('.subKuch3').slideToggle(100);
        })

        
        $('.hding4').click(()=>{

            $('.subKuch4').slideToggle(100);
        })

        
        $('.hding5').click(()=>{

            $('.subKuch5').slideToggle(100);
        })

        
        $('.hding6').click(()=>{

            $('.subKuch6').slideToggle(100);
        })

        $('.hding7').click(()=>{

            $('.subKuch7').slideToggle(100);
        })

        
        $('.hding8').click(()=>{

            $('.subKuch8').slideToggle(100);
        })
    })


    var tabs = props.all.tabsHading.map((v,i)=>{
        return(
            <div key={i}>      
                <div className={props.all.classes[i]}>
                    <img src={props.all.Img[i]} alt=""/>
                    <h2>{props.all.tabsHading[i]}</h2>
                    <p>{props.all.tabsData[i]}</p>
                </div>
            </div>
        )
    })


    var slideDo=props.all.tabsHading.map((v,i)=>{
        return (
            <div key={i}>
                <h4 className={props.all.hding[i]}>{props.all.tabsHading[i]}</h4>   
                <div className={props.all.Subkuch[i]}>
                    <div className="Div"> 
                            <img src={props.all.Img[i]} alt=""/>
                            <h2>{props.all.tabsHading[i]}</h2>
                            <p>{props.all.tabsData[i]}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="Tabs">
                <div className="line">
                    <div className="circle-1"> <h4 className="crline">{props.all.tabsHading[0]}</h4></div>
                    <div className="circle-2"> <h4 className="crline">{props.all.tabsHading[1]}</h4></div>
                    <div className="circle-3"> <h4 className="crline">{props.all.tabsHading[2]}</h4></div>
                </div>
                <div className="line">
                    <div className="circle-4"> <h4 className="crline">{props.all.tabsHading[3]}</h4></div>
                    <div className="circle-5"> <h4 className="crline">{props.all.tabsHading[4]}</h4></div>
                    <div className="circle-6"> <h4 className="crline">{props.all.tabsHading[5]}</h4></div>
                </div>
                <div className="line" style={{heigth:'100px'}}>
                    <div className="circle-7"> <h4 className="crline">{props.all.tabsHading[6]}</h4></div>
                    <div className="circle-8"> <h4 className="crline">{props.all.tabsHading[7]}</h4></div>
                </div>

                <div className="querydiv">
                        {slideDo}
                </div>




                <div className="tabs-div">
                    {tabs}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
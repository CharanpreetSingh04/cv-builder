import React, { memo  } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import img from '../default.jpeg';
function RightMain (props){
    const state = {
        name: props.sentState.name,
        phoneNumber: props.sentState.phoneNumber,
        address: props.sentState.address,
        email: props.sentState.email,
        image: props.sentState.image,
        education: props.sentState.education,
        experience: props.sentState.experience,
        hobbies: props.sentState.hobbies,
        awardParticipation: props.sentState.awardParticipation,
        result: props.sentState.result
    }
    if(state.image === ''){
        state.image = img;
    }

      
    // const range = (start, end) => {
    //       return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
    // };
    function convertToPdf(){
        const input = document.querySelector('.right');
        html2canvas(input, {
            ignoreElements: (node) => {
                return node.nodeName === 'IFRAME';
            }
        }).then((canvas) => {
            document.body.appendChild(canvas);  // if you want see your screenshot in body.
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0, 0, 0);
            pdf.save("download.pdf");
        });

    }
    return(
        <div className='right'>
            
            <div className='pic-and-name'>
                
                <div className='everything-else-right'>
                        <div className="name-right">
                            <label>{state.name}</label>
                        </div>
                        <div className="address-right">
                        <label>{state.address}</label>
                        </div>
                        <div className='phone-right'>
                        <label>{state.phoneNumber}</label>
                        </div>
                        <div className='email-right'>
                        <label>{state.email}</label>
                        </div>
                </div>
                
                <div className='image'>
                    {state.image === img && <img src={img}></img>}
                    {state.image !==img && <img src = {state.image}/>}
                </div>
            </div>
            <div className='content'>
                <div className='work'><h1>Experience</h1><label>{state.experience}</label></div>
                <div className='education'><h1>Education</h1><label>{state.education}</label></div>
                <div className='hobbies'><h1>Hobbies</h1><label>{state.hobbies}</label></div>
                <div className='awards'><h1>Awards and Participations</h1><label>{state.awardParticipation}</label></div>
            </div>
            <div className='pdf'>
                <button onClick={convertToPdf}>Convert to pdf</button>
            </div>
        </div>
    )
}
export default memo(RightMain);
import React,{memo, useState} from "react";
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import LeftMain from './LeftMain';
import RightMain from './RightMain';
// import backGround from '../background.jpeg';
function App(){
    const [state,setState] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        email: '',
        image: '',
        education: '',
        experience: '',
        hobbies: '',
        awardParticipation: '',
        result: false
    });
    const handleCallback = (state) =>{
        setState(state);
        console.log(state);
        //redux integration 
        //keep all data in global
    }
    return(
        <div>
                <Header title="Resume Maker"/>
                <div className='main'>
                    <LeftMain parentCallback = {handleCallback}/>
                    <RightMain sentState={state}/>
                </div>
                <Footer/>
        </div> 
    )
}
export default memo(App);
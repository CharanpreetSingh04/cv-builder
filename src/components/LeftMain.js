import React, { memo, useState } from "react";

function LeftMain(props){
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
    })

    const [errors,setErrors] = useState('');
    function handleChange(field ,e){
        if(field === "image"){
            const value = URL.createObjectURL(e.target.files[0]);
            setState({...state, image: value});
            console.log(value);
        }
        else if(field === "name"){
            setState({...state,name: e.target.value});
        }
        else if(field === "phoneNumber"){
            setState({...state,phoneNumber: e.target.value});
        }
        else if(field === "email"){
            setState({...state,email: e.target.value});
        }
        else if(field === "education"){
            setState({...state,education: e.target.value});
        }
        else if(field === "experience"){
            setState({...state,experience: e.target.value});
        }
        else if(field === "hobbies"){
            setState({...state,hobbies: e.target.value});
        }
        else if(field === "awardParticipation"){
            setState({...state,awardParticipation: e.target.value});
        }
        else if(field === "address"){
            setState({...state,address: e.target.value});
        }       
    }


    function validateEmail(email) { 
        if(!email || email === '')
            return true;
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) { 
        if(!phone || phone === ''){
            return true;
        }
        var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
        return phoneRegex.test(phone);
    }

    const validate =()=>{
        console.log(this);
        const resultA = validateEmail(state.email);
        const resultB = validatePhone(state.phoneNumber);
        setState({...state,result: resultA&resultB});
        if(state.name === ''&&state.phoneNumber === ''&&state.address === ''&& state.image === ''&&state.email === ''&&state.education === ''&&state.experience === ''&& state.hobbies === ''&&state.awardParticipation === ''){
            setErrors('*Please fill details');
            return;
        }
        else if(resultA === false || resultB === false)
        {
            setErrors('*Wrong email or phone');
            return;
        }    
        setErrors('');
        props.parentCallback(state);
    }
    return(
        <div className='left'>
            <div><label>Name</label></div>
            <div><input type="text" onChange={handleChange.bind( this, "name")} required/></div>
            <div><label>Address</label></div>
            <div><input type="text" onChange={handleChange.bind(this, "address")} required/></div>
            <div><label>Phone Number</label></div>
            <div><input type="tel" onChange={handleChange.bind(this,  "phoneNumber")} required/></div>
            <div><label>Email</label></div>
            <div><input type="email" onChange={handleChange.bind( this, "email")} required/></div>
            <div><label>Add Your Image</label></div>
            <div><input type="file" onChange={handleChange.bind( this,"image")}/></div>
            <div><label>Add Education</label></div>
            <div><textarea className='education-right' onChange={handleChange.bind(this, "education")}/></div>
            <div><label>Add Experience</label></div>
            <div><textarea type="text" className='experience-right' onChange={handleChange.bind(this, "experience")}/></div>
            <div><label>Add Hobbbies</label></div>
            <div><textarea type="text" className='hobbies-right' onChange={handleChange.bind(this, "hobbies")}/></div>
            <div><label>Add Awards and participation</label></div>
            <div><textarea type="text" className='participation-right' onChange={handleChange.bind(this, "awardParticipation")}/></div>
            <div><button type='button' onClick={validate.bind(this)}>Submit</button></div>
            {errors!=='' && <div className='alerts'>{errors}</div>}
        </div>
    )
}
export default memo(LeftMain);
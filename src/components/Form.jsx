import React, {useState, useEffect} from 'react';

const Form = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const [occupations, setOccupations] = useState('')
    const [states, setStates] = useState('');

    const url = 'https://frontend-take-home.fetchrewards.com/form'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // setOccupations(data.occupations);
            // setStates(data.states);
        })
        // .catch(error => console.log(error))


    return (
        <div> 
            <h1 className="form-wrapper">Form:</h1>
                <br/>
            <div className="values-form-wrapper">
                    <input 
                    className="first-name"
                    placeholder="First Name"
                    name="firstName" />
                <br /><br />
                    <input 
                    className="last-name"
                    placeholder="Last Name"
                    name="lastName" />
                <br /><br />
                    <input 
                    className="email"
                    placeholder="Email"
                    name="email" />
            </div>

            <div className="other-values">
                {/* {occupations}
                {states} */}
            </div>  

            <br/>

            <button>Submit</button>
        </div>
    )
}

export default Form; 


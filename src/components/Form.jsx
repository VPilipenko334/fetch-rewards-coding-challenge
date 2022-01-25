import React, {useState, useEffect} from 'react';

const Form = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const [occupations, setOccupations] = useState('');
    const [states, setStates] = useState('');
    const [success, setSuccess] = useState(false);
    const [faliure, setFaliure] = useState(true);

    const url = 'https://frontend-take-home.fetchrewards.com/form'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // setOccupations(data.occupations);
            // setStates(data.states);
        })
        // .catch(error => console.log(error))


        //handlers for every keystroke 
       const handleFirstNameChange = (e) => {
            setValues({...values, firstName: e.target.value})
        }
       const handleLastNameChange = (e) => {
            setValues({...values, lastName: e.target.value})
        }
       const handleEmailChange = (e) => {
            setValues({...values, email: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setSuccess(true);
        }
       
       

    return (
        <div> 
            <h1 className="form-wrapper">Form:</h1>
                <br/>

            {success ? <p>Success! Thank you for registering!!!</p> : faliure }

            <div className="values-form-wrapper">
                    <input 
                    value={values.firstName}
                    onChange={handleFirstNameChange}
                    className="first-name"
                    placeholder="First Name"
                    name="firstName" />
                <br /><br />
                    <input 
                    value={values.lastName}
                    onChange={handleLastNameChange}
                    className="last-name"
                    placeholder="Last Name"
                    name="lastName" />
                <br /><br />
                    <input 
                    value={values.email}
                    onChange={handleEmailChange}
                    className="email"
                    placeholder="Email"
                    name="email" />
            </div>

            <div className="other-values">
                {/* {occupations}
                {states} */}
            </div>  

            <br/>

            <button onClick={handleSubmit}>Submit</button>

            {/* {faliure ? <p>You cannot submit the form unless all the fields are filled out!</p> : success} */}

        </div>
    )
}

export default Form; 


import React, {useState, useEffect} from 'react';

const Form = () => {

    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const [occupations, setOccupations] = useState([]);
    const [states, setStates] = useState([]);
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);
    const [faliure, setFaliure] = useState(true);

    const url = 'https://frontend-take-home.fetchrewards.com/form'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setStates(data.states);
                setOccupations(data.occupations);
            })
            .catch(error => setFaliure('Please fill out all the fields before proceeding'))
    }, [])

        //handlers for every keystroke 
       const handlefullNameChange = (e) => {
            setValues({...values, fullName: e.target.value})
        }
 
       const handleEmailChange = (e) => {
            setValues({...values, email: e.target.value})
        }

        const handlePassword = (e) => {
        setValues({ ...values, password: e.target.value })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            if (values.firstName && values.email && values.password) {
                setValid(true);
            }
            setSuccess(true);
            setFaliure(false);
        }
       
    return (
        <div className="form-outer-wrapper"> 
            <h1 className="form-inner-wrapper">Form:</h1>

            {success  && valid ? <div className=''>Success! Thank you for registering!!!</div> : faliure}

            <div className="values-form-wrapper">

                    <input 
                    value={values.fullName}
                    onChange={handlefullNameChange}
                    className="full-name"
                    placeholder="Full Name"
                    name="fullName" />
                    <br/>
                    
                    {success && !values.fullName ? <span className="error-name">Please enter a valid full name</span> : faliure }

                    <br /><br />

                    <input 
                    value={values.email}
                    onChange={handleEmailChange}
                    className="email"
                    placeholder="Email"
                    name="email" />
                    <br />
                    
                    {success && !values.email ? <span className="error-email">Please enter a valid email address</span> : faliure }

                    <br /><br />
                    <input 
                    value={values.password}
                    onChange={handlePassword}
                    className="password"
                    placeholder="password"
                    name="password"
                    type="password" />
                    <br />

                    {success && !values.password ? <span className="error-password">Please enter a valid password</span> : null}
            </div>
                <br/>

            <div className="dropdown-values">
                    <label className="occupations">Choose an Occupation:</label>
                    <select name="occupations" id="occupations">
                            {occupations.map(occupation => 
                                <option value="occupations">{occupation}</option>)}
                    </select>

                    <br/><br/>

                    <label className="states">Choose a State:</label>
                    <select name="states" id="states">
                        {states.map(state => 
                                <option value="states">{state.name}</option>)}
                            )
                    </select>
            </div>  

            <br/>

            <button onClick={handleSubmit}>Submit</button>

            <div className="faliure-wrapper">
               { success ? <h2>Please fill out all the fields before submitting!</h2> : faliure }
            </div>
        </div>
    )
}

export default Form; 


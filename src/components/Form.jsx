import React, {useState, useEffect} from 'react';

const Form = () => {

    const [values, setValues] = useState({
        firstName: "",
        email: "",
        password: ""
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
            console.log(data)
            console.log(data.states)
            console.log(data.occupations)

            // setStates(data.states);
            // setOccupations(data.occupations);
        })
        // .catch(error => console.log(error))


        //handlers for every keystroke 
       const handleFirstNameChange = (e) => {
            setValues({...values, firstName: e.target.value})
        }
 
       const handleEmailChange = (e) => {
            setValues({...values, email: e.target.value})
        }

        const handlePassword = (e) => {
        setValues({ ...values, password: e.target.value })
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
                    value={values.email}
                    onChange={handleEmailChange}
                    className="email"
                    placeholder="Email"
                    name="email" />
                <br /><br />
                    <input 
                    value={values.password}
                    onChange={handlePassword}
                    className="password"
                    placeholder="password"
                    name="password"
                    type="password" />
            </div>
                <br/>

            <div className="dropdown-values">
                    <label className="occupations">Choose an Occupation:</label>
                    <select name="occupations" id="occupations">
                        <option value="rigatoni">hello</option>
                        
                    </select>
                <br/><br/>
                    <label className="states">Choose a State:</label>
                    <select name="states" id="states">
                        {/* <option value="states">{states.map(state => <p>state</p>)}</option> */}
                
                    </select>

                {/* {occupations}
                {states} */}
            </div>  

            <div>
                {/* {states.map(state => <p>state</p>)} */}
                
                {/* {states} */}

            </div>

            <br/>

            <button onClick={handleSubmit}>Submit</button>

            {/* {faliure ? <p>You cannot submit the form unless all the fields are filled out!</p> : success} */}

        </div>
    )
}

export default Form; 


import React, {useState, useEffect} from 'react';

const Form = () => {

    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const [occupations, setOccupations] = useState([]);
    const [states, setStates] = useState([]);
    const [success, setSuccess] = useState(false);
    const [faliure, setFaliure] = useState(true);

    const url = 'https://frontend-take-home.fetchrewards.com/form'


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // setOccupations(data.occupations);
                // console.log(data)
                // console.log(data.states)
                console.log(data.states)
                // console.log(data.occupations)

                setStates(data.states);
                setOccupations(data.occupations);
            })
    }, [])
        // empty array -> runs once when the component mounts
    
        // .catch(error => console.log(error))


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
            setSuccess(true);
        }
       
    return (
        <div className="form-outer-wrapper"> 
            <h1 className="form-inner-wrapper">Form:</h1>

            <h2>Please fill out all the fields before submitting!</h2>

            {success ? <p>Success! Thank you for registering!!!</p> : faliure }

            <div className="values-form-wrapper">
                    <input 
                    value={values.fullName}
                    onChange={handlefullNameChange}
                    className="full-name"
                    placeholder="Full Name"
                    name="fullName" />
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
                            {occupations.map(occupation => 
                                <option value="occupations">{occupation}</option>)}
                    </select>

                    <br/><br/>

                    <label className="states">Choose a State:</label>
                    {/* <select name="states" id="states">
                        {states.map(state =>
                            <option value="states">{state}</option>)}
                    </select> */}
            </div>  

            <div>

            </div>

            <br/>

            <button onClick={handleSubmit}>Submit</button>

            {/* {faliure ? <p>You cannot submit the form unless all the fields are filled out!</p> : success} */}

        </div>
    )
}

export default Form; 


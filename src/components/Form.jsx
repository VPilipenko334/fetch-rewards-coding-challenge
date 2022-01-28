import React, { useState, useEffect } from "react";

const Form = () => {
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [chosenOccupation, setChosenOccupation] = useState("");
    const [chosenState, setChosenState] = useState("");
    const [occupations, setOccupations] = useState([]);
    const [states, setStates] = useState([]);
    const [valid, setValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const url = "https://frontend-take-home.fetchrewards.com/form";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setStates(data.states);
                setOccupations(data.occupations);
            })
    }, []);

    //handlers for every keystroke
    const handlefullNameChange = (e) => {
        setValues({ ...values, fullName: e.target.value });
    };

    const handleEmailChange = (e) => {
        setValues({ ...values, email: e.target.value });
    };

    const handlePassword = (e) => {
        setValues({ ...values, password: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
        if (!values.fullName || !values.email || !values.password) {
            setValid(false);
            return;
        }

        const body = JSON.stringify({
            name: values.fullName,
            email: values.email,
            password: values.password,
            occupation: chosenOccupation,
            state: chosenState,
        });

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body
        }).then((response) => {
            if (response.status === 200) {
                setMessage('Success! Thank you for registering!!!')
            } else {
                setMessage('Sorry,there was an error with your request')
            }
        });
        setSuccess(true);
    };

    const handleChosenOccupationChange = (e) => {
        setChosenOccupation(e.target.value);
    };

    const handleChosenState = (e) => {
        setChosenState(e.target.value);
    }

    return (
        <div className="form-outer-wrapper">
            <form className="form-inner-wrapper" onSubmit={handleSubmit}>
                <h1>Form:</h1>
                <h2>Please fill out all the details of the form below:</h2>

                <span>{message}</span>

                <div className="values-form-wrapper">
                    <input
                        value={values.fullName}
                        onChange={handlefullNameChange}
                        className="full-name"
                        placeholder="Full Name"
                        name="fullName"
                    />
                    <br />

                    {submitted && !values.fullName ? (
                        <span className="error-name">Please enter a valid full name</span>
                    ) : null}

                    <br />

                    <input
                        value={values.email}
                        onChange={handleEmailChange}
                        className="email"
                        placeholder="Email"
                        name="email"
                        type="email"

                    />
                    <br />

                    {submitted && !values.email ? (
                        <span className="error-email">Please enter a valid email address</span>
                    ) : null}

                    <br />
                    <input
                        value={values.password}
                        onChange={handlePassword}
                        className="password"
                        placeholder="password"
                        name="password"
                        type="password"
                        minLength="4"
                        maxLength="8"
                    />
                    <br />

                    {submitted && !values.password ? (
                        <span className="error-password">Please enter a valid password</span>
                    ) : null}
                </div>
                <br />

                <div className="dropdown-values">
                    <label className="occupations">Choose an Occupation:</label>
                    <select
                        name="occupations"
                        id="occupations"
                        value={chosenOccupation}
                        onChange={handleChosenOccupationChange}
                    >
                        {occupations.map((occupation, idx) => (
                            <option key={idx}>{occupation}</option>
                        ))}
                    </select>

                    <br />
                    <br />

                    <label className="states">Choose a State:</label>
                    <select name="states" id="states" value={chosenState} onChange={handleChosenState}>
                        {states.map((state, idx) => (
                            <option key={idx}>{state.name}</option>
                        ))}
                        )
                    </select>
                </div>

                <br />

                <button className="submit-button" type="submit">
                    Submit
                </button>

                <br />
                <h2>Created by: Veronika Pilipenko</h2>
                <p>
                    Click here for my <a href="https://github.com/VPilipenko334">Github Profile</a>
                </p>
            </form>
        </div>
    );
};

export default Form;

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { FormControl, InputGroup, Button, Alert } from 'react-bootstrap';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };


        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })


        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an Admin</h2>

            <form onSubmit={handleMakeAdmin}>

                <InputGroup className="mb-3 mt-4 w-50 mx-auto">

                    <FormControl
                        placeholder="abc@example.com"
                        aria-label="Your Email"
                        aria-describedby="basic-addon2"
                        onBlur={handleOnBlur}
                        type="email"

                    />
                    <InputGroup.Text id="basic-addon2"
                        className="bg-primary bg-opacity-75 ">
                        <FontAwesomeIcon className="fs-5 text-white mx-3" icon={faUser} />
                    </InputGroup.Text>

                </InputGroup>

                <Button variant="primary"
                    className="w-50 mx-auto mb-3 " type="submit">
                    Make Admin
                </Button><br />

            </form>
            {
                success && <Alert variant='success'>
                    Made Admin Successfully
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;
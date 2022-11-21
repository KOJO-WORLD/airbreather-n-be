import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../button.css';
import '../input.css';
// import exMark from '../Errors/exMark.png'
import '../Errors/Errors.css';

function LoginForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data) setErrors(Object.values(data));
                else return (<Redirect to="/" />);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            {errors[0] ? (<ul className='errors'>
                <li>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors[0]}
                </li>
            </ul>) : ''}
            <div className='container'>
                <div>
                    <label>
                        <input
                            className="input top"
                            placeholder="Username or Email"
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            className="input bottom"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='signupLogInButtonDiv'>
                    <button className='submitForm' type="submit">
                        Continue
                    </button>
                </div>
            </div>
        </form >
    );
}

export default LoginForm;

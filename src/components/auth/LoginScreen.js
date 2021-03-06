import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector( state => state.ui )

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch( startLoginEmailPassword( email, password ) )
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() )
    }

    return (
      <>
        <h3 className="auth__title">Sign in</h3>
        <div className="auth__title_container">
          <p className="auth__subtitle ">
            Create your personal <strong>SunNote</strong>
          </p>
          <div className="sun-circle color-hippie"></div>
        </div>

        <form
          onSubmit={handleLogin}
          className="formBox animate__animated animate__fadeIn animate__faster"
        >
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            value={password}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            Login
          </button>

          <div className="auth__social-networks">
            <p className="auth__google_subtitle">or</p>

            <div className="google-btn" onClick={handleGoogleLogin}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with Google</b>
              </p>
            </div>
          </div>
          <Link to="/auth/register" className="link">
            New? <b>Join now</b>
          </Link>
        </form>
      </>
    )
}

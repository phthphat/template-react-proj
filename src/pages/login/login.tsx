import React from 'react'
import FullWidthLayout from '../../components/layout/fullwidth-layout/fullwidth-layout'
import style from './login.module.scss'

const Login = React.memo(() => {
  console.log("login rendered")

  return <FullWidthLayout title="Log in or sign up">
    <div id={style.login}>
      <form id={style.logInForm}>
        <h3>Log In</h3>
        <div className={style.inputField}>
          <label>Email</label>
          <input placeholder="Email" type="email" required />
        </div>
        <div className={style.inputField}>
          <label>Password</label>
          <input placeholder="Password" type="password" required />
        </div>
        <input value="Submit" type="submit" style={{ alignSelf: 'center' }} />
      </form>
    </div>
  </FullWidthLayout>
})

export default Login
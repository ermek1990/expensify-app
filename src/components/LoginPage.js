import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLogin}>Login</button>
    </div>
  </div>
);

const email = 'fork@fork.com';
const password = '12345678';

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

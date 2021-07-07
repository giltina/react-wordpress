import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Redirect } from '@reach/router'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             userNiceName: '',
             userEmail: '',
             loggedIn: false,
             loading: false,
             error: ''
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const url = 'https://reactwordpress.eccentrictechnologies.com';
        const loginData = {
            username: this.state.username,
            password: this.state.password,
        };
        this.setState({loading:true}, () =>{
            axios.post(`${url}/wp-json/jwt-auth/v1/token`,loginData)
            .then(res =>{
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userName', res.data.user_nicename);
             this.setState({
                 loading: false,
                 token: res.data.token,
                 userNiceName: res.data.user_nicename,
                 userEmail: res.data.user_email,
                 loggedIn: true
             })
            })
            .catch(error => {
                console.log(error);
            })
          });
    };

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    
    render() {
        const {username, password, loggedIn, userNiceName} = this.state;
        const user = userNiceName ? userNiceName : localStorage.getItem('userName');
        if (loggedIn || localStorage.getItem('token')){
            return <Redirect to={`/dashboard/${user}`} noThrow/>
        } else {
        return (
            <div>
                <Navbar/>
                <form onSubmit={this.onFormSubmit}>
                    <label className="form-group">
                        Username:
                        <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.handleOnChange}
                        />

                    </label>
                    <br/>
                    <label className="form-group">
                        Password:
                        <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleOnChange}
                        />
                        <br/>
                        <button className="btn btn-primary" type="submit"> Submit</button>

                    </label>
                </form>
            </div>
        )
        }
    }
}

export default Login

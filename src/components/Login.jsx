import React, {Component} from 'react';
import Header from "./Header";
import axios from "axios";

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault()
        let data = {
            login : this.login,
            password : this.password
        }

        axios.post("http://localhost:8080/users/signIn", data).then(
            response => {
                console.log(response)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }

    render() {
        return (
            <>
                <main className="form-signin">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="h3 mb-3 fw-normal text-dark">Войдите</h2>
                        <input type="email" className="form-control" placeholder="Логин" required
                               onChange={e => this.login = e.target.value}
                        />

                        <input type="password" className="form-control" placeholder="Пароль" required
                               onChange={e => this.password = e.target.value}
                        />

                        <button className="w-100 btn btn-lg btn-primary">Войти</button>
                    </form>
                </main>
            </>
        )
    }
}

export default Login;
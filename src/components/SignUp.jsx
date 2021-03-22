import React, {Component} from 'react';
import Header from "./Header";
import axios from "axios";

class SignUp extends Component {
    state = {
        login: "",
        password: ""
    }

    handleSubmit = e => {
        e.preventDefault()
        let data = {
            firstName : this.firstName,
            lastName : this.lastName,
            login : this.login,
            password : this.password
        }

        axios.post("http://localhost:8080/users/signUp", data).then(
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
                    <h2 className="h3 mb-3 fw-normal text-dark">Зарегистрируйтесь</h2>
                    <input type="text" className="form-control" placeholder="Имя" required
                           onChange={e => this.firstName = e.target.value}
                    />

                    <input type="text" className="form-control" placeholder="Фамилия" required
                           onChange={e => this.lastName = e.target.value}
                    />

                    <input type="email" className="form-control" placeholder="Логин" required
                           onChange={e => this.login = e.target.value}
                    />

                    <input type="password" className="form-control" placeholder="Пароль" required
                           onChange={e => this.password = e.target.value}
                    />

                    <button className="w-100 btn btn-lg btn-primary">Зарегистрироваться</button>
                </form>
            </main>
                </>
        )
    }
}

export default SignUp;
import React from "react";

export default class Form extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    }

    handleChange = (e) => {
        const {name, value, type, checked} = e.target
        this.setState(prevForm => {
            return {
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    // localStorage part
    componentDidMount() {
        this.setState(JSON.parse(localStorage.getItem("formData")))
    }

    componentDidUpdate() {
        localStorage.setItem("formData", JSON.stringify(this.state))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>React Form Example</h1>
            <input 
                type="text"
                placeholder="First Name"
                onChange={this.handleChange}
                name="firstName"
                value={this.state.firstName}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={this.handleChange}
                name="lastName"
                value={this.state.lastName}
            />
            <input 
                type="email"
                placeholder="E-mail"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
            />
            <textarea 
                placeholder="Comments"
                onChange={this.handleChange}
                name="comment"
                value={this.state.comment}
            />

            <div>
            <input 
                type="checkbox"
                id="isFriendly"
                checked={this.state.isFriendly}
                onChange={this.handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            </div>

            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={this.handleChange}
                    checked={this.state.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={this.handleChange}
                    checked={this.state.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={this.handleChange}
                    checked={this.state.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <select
                id="favColor"
                value={this.state.favColor}
                onChange={this.handleChange}
                name="favColor"
            >
                <option value="">--- Choose ---</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <button>Submit</button>
        </form>
        )
    }
}
import React, { Component } from 'react'
import axios from 'axios'

export class CreatePost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             content: '',
             postCreated: false,
             loading: false,
             message: '',

        }
    }
    componentDidMount() {
    
    }
    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    
    onFormSubmit = (event) => {
        event.preventDefault();
        const url = 'https://reactwordpress.eccentrictechnologies.com';
        const formData = {
            title: this.state.title,
            content: this.state.content,
            status: 'publish',
        };
        this.setState({loading:true}, () =>{
            axios.post(`${url}/wp-json/wp/v2/posts`,formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(res =>{
             console.log(res.data);
                
        
            })
            .catch(error => {
                console.log(error);
            })
          });
    };

    render() {

        const {loading, message, postCreated} = this.state;
        return (
            <div>
                {message}
                <form onSubmit={this.onFormSubmit}>
                    <label className="form-group">
                        Title:
                        <input
                        type="text"
                        className="form-control"
                        name="title"
                        onChange={this.handleOnChange}
                        />

                    </label>
                    <br/>
                    <label className="form-group">
                        Content:
                        <textarea
                        name="content"
                        rows="10"
                        className="form-control"
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

export default CreatePost

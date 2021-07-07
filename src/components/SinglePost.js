import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import renderHTML from 'react-render-html';

export class SinglePost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading: false,
             post: {},
             error: ''
        }
    }

    componentDidMount() {
        const url = 'https://reactwordpress.eccentrictechnologies.com';
        this.setState({loading:true}, () =>{
          axios.get(`${url}/wp-json/wp/v2/posts/${this.props.id}`)
          .then(res =>{
           this.setState({post: res.data});
          })
          .catch(error => this.setState({loading: false, error: error.response.data}))
        });
    }
    render() {
        const { post } = this.state;
        return (
            <div>
                <Navbar/>
                {Object.keys(post).length ? (
                    <div>
                
                    <div key={post.id}>
                    
            
                          {post.title.rendered}
                
                      <div>
                          {renderHTML(post.content.rendered)}
                      </div>
                    </div>
                    
                  </div>
                ) : 'Loading.....'}
            </div>

        )
    }
}

export default SinglePost

import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import {Link} from '@reach/router'
import renderHTML from 'react-render-html';

export class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading: false,
             posts: [],
             error: ''
        }
    }

    componentDidMount() {
        const url = 'https://reactwordpress.eccentrictechnologies.com';
        this.setState({loading:true}, () =>{
          axios.get(`${url}/wp-json/wp/v2/posts`)
          .then(res =>{
           this.setState({posts: res.data});
          })
          .catch(error => this.setState({loading: false, error: error.response.data}))
        });
    }
    
    render() {
        const { posts } = this.state;
        return (
            <div>
                <Navbar/>
                {posts.length ? (
                    <div>
                    { posts.map( post => (
                    <div key={post.id}>
                    
                      <Link to={`/post/${post.id}`}>
                          {post.title.rendered}
                      </Link>
                      <div>
                          {renderHTML(post.excerpt.rendered)}
                      </div>
                    </div>
                    )) }
                  </div>
                ) : 'Loading.....'}
            </div>

        )
    }
}

export default Home

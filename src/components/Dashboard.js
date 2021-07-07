import React, { Component } from 'react'

export class Dashboard extends Component {
    
    render() {
        const userName = localStorage.getItem('userName');
        return (
            <div>
                Dashboard
                <h2>Welcome {userName}</h2>
            </div>
        )
    }
}

export default Dashboard

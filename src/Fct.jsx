import React, { Component } from 'react';


export class Fct extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             datas : []
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        fetch('https://randomuser.me/api/?results=50&nat=bd')
        .then( res => res.json() )
        .then( data => data.results.map(
            user => (
                {
                    name: ` ${user.name.first}  ${user.name.last}`,
                    username: ` ${user.login.username} `,
                    email: ` ${user.email} `,
                    picture: ` ${user.picture.medium} `
                }
            )))
        .then(datas => this.setState({
            datas
        }))
        .catch(error => alert("The API is break"))
    }


    render() {

        const {datas} = this.state;

        return (
            <div className="container">
                {
                    datas.length > 0 ? datas.map( data => {
                        return  <div key={data.username} > 
                                    <hr/>
                                    <hr/>
                                    <img src={data.picture} alt="user_img"></img>
                                    <p> Name : {data.name} {data.last} </p> 
                                    <p> User Name: {data.username}</p>
                                    <p> Email: {data.email}</p>
                                    <hr/>
                                    <hr/>
                                    <br/>
                                    <br/>
                                </div>
                    })  : null        
                }
            </div>
        )
    }
}

export default Fct


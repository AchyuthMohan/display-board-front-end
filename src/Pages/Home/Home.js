import React, { Component } from 'react'
import Card from '../../Components/Card/Card'
import axios from 'axios'

const api=axios.create({
  baseURL:`http://127.0.0.1:8000/products/`
})
export class Home extends Component {
  constructor(){
    super();
    api.get('/').then(res=>{
      console.log(res.data.id)
    })
  }
  render() {
    return (
      <div>Home</div>
    )
  }
}

export default Home
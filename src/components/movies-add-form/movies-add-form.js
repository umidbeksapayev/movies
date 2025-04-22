import React from 'react'
import './movies-add-form.css'
import { Component } from 'react'



class MoviesAddForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      views:''
    }
  }
  changeHandlerInput = e=>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  render(){
    const {name, views} = this.state
    const {addForm} = this.props
    return (
      <div className='movies-add-form'>
          <h3>Yangi film qo'shish</h3>
          <form action="" className='add-form d-flex' onSubmit={(e)=> addForm(e, {name, viewers:views})}>
              <input onChange={this.changeHandlerInput} name="name"  type="text" className='form-control new-post-label' placeholder='qanday kino?' value={name}/>
              <input onChange={this.changeHandlerInput} name="views" type="number" className='form-control new-post-label' placeholder='Nechi marta korilgan?' value={views}/>
              <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
          </form>
      </div>
    )
  }
}


// const MoviesAddForm = () => {
//   return (
//     <div className='movies-add-form'>
//         <h3>Yangi film qo'shish</h3>
//         <form action="" className='add-form d-flex'>
//             <input type="text" className='form-control new-post-label' placeholder='qanday kino?'/>
//             <input type="text" className='form-control new-post-label' placeholder='Nechi marta korilgan?'/>
//             <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
//         </form>
//     </div>
//   )
// }

export default MoviesAddForm
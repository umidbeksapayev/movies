import './app.css'
import { AppFilter } from "../app-filter/app-filter";
import { AppInfo } from "../app-info/app-info";
import  SearchPanel  from "../search-panel/search-panel";
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { Component } from 'react';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data : [
        {name: "Merlin", viewers:989, favourite:false, id:1, like:true},
        {name: "Salom", viewers:555, favourite:true ,id:2},
        {name: "Alik", viewers:989, favourite:false, id:3},
      ],
      term : '',
      filter:'all'
    }
  }
    onDelete = id=>{
      this.setState(({data})=>({
        data:data.filter(c=> c.id !== id),
      }))
    }
    addForm = (e, item) =>{
      const newItem = {...item, id:uuidv4()}
      e.preventDefault()
      this.setState(({data})=>({
        data:[...data, newItem]
      }))
      
    }
    searchHandler = (arr, term)=>{
      if (term.length === 0){
        return arr
      }

      return arr.filter(item => item.name.toLowerCase().indexOf(term)>-1)
    }

    filterHandler = (arr, filter)=>{
      switch(filter){
        case 'popular':
          return arr.filter(c=>c.like)
        case 'mostViewers':
          return arr.filter(c=>c.viewers > 800)
        default:
          return arr
      }
    }

    updateTermHandler = (term) =>{
      this.setState({term})
    }


    updateFilterHandler = filter =>this.setState({filter})
  render(){
    const {data, term, filter} = this.state
    const allMoviesCount = data.length
    const favouriteMoviesCount = data.filter(c=>c.favourite).length
    const visibleData = this.filterHandler(this.searchHandler(data, term), filter ) 
    return (
      <div className="app">
          <div className="content">
              <AppInfo allMoviesCount = {allMoviesCount} favouriteMoviesCount = {favouriteMoviesCount}/>
              <div className='search-panel'>
                  <SearchPanel updateTermHandler = {this.updateTermHandler}/>
                  <AppFilter filter = {filter} updateFilterHandler={this.updateFilterHandler}/>
              </div>
              <MovieList data = {visibleData} onDelete = {this.onDelete}/>
              <MoviesAddForm addForm = {this.addForm}/>
          </div>
      </div>
    )
  }
}
export default App






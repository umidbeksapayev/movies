import './app.css'
import { AppFilter } from "../app-filter/app-filter";
import { AppInfo } from "../app-info/app-info";
import  SearchPanel  from "../search-panel/search-panel";
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { Component, useEffect, useState } from 'react';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const App = () =>{
  const[data, setData]= useState([])
  const [ term, setTerm] = useState('')
  const [filter, setfilter] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  const onDelete = id =>{
    const newArr = data.filter(c=> c.id !== id)
    setData(newArr)
  }
  const addForm = item =>{
    const newItem = {...item, id:uuidv4()}
    const newArr = [...data, newItem]
    setData(newArr)
  }
  const searchHandler = (arr,term)=>{
    if (term.length === 0){
        return arr
      }
      return arr.filter(item => item.name.toLowerCase().indexOf(term)>-1)
  }
  const filterHandler = (arr, filter)=>{
      switch(filter){
        case 'popular':
          return arr.filter(c=>c.like)
        case 'mostViewers':
          return arr.filter(c=>c.viewers > 800)
        default:
          return arr
      }
    }
  const updateTermHandler = term => setTerm(term)
  const updateFilterHandler = filter =>setfilter(filter)

  useEffect(()=>{
     setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
    .then(response =>response.json())
    .then(json=> {
      const newArr = json.map(item=>({
        name:item.title, 
        id:item.id,
        viewers:989, 
        favourite:false, 
        like:false
      }));
      
      setData(newArr)
    })
    .catch(err => console.log(err))
    .finally(()=>setIsLoading(false))
  },[])
   return (
      <div className="app">
          <div className="content">
              <AppInfo allMoviesCount = {data.length} favouriteMoviesCount = {data.filter(c=>c.favourite).length}/>
              <div className='search-panel'>
                  <SearchPanel updateTermHandler = {updateTermHandler}/>
                  <AppFilter filter = {filter} updateFilterHandler={updateFilterHandler}/>
              </div>
              {isLoading && 'Loading..'}
              <MovieList data = {filterHandler(searchHandler(data,term), filter)} onDelete = {onDelete}/>
              <MoviesAddForm addForm = {addForm}/>
          </div>
      </div>
    )
}

export default App






import React, { useEffect, useState } from 'react'
import './App.css'
import Job from './component/Job';

// Welcome to FEM's React Test!
// The frontend is built for you and it's your job as a developer to get this code up and running.
// Please follow the TODO LIST and helpful comments along the way

/*  PART 1   */
//TODO: Create a fetch call that should be able to console.log the response data in JSON (You should see an object)
//TODO: How can you access the "jobs" from that object? (You should be able to access the array of job objects)
//TODO: Put that fetch call in a useEffect() *That will ONLY run when INTIALIZED.* (What does the dependancy module do?)
//TODO: How do we store the "jobs" data? 
//TODO: Once you successfully store the jobs in the useEffect, HOW and WHERE can you map out that info to your Job.js component (*think props!*)
//HINT: WHen you map the objects array remember you should create a Job component for every ITEM in the jobs array. (How would you do that?)


/*  PART 2   */
//TODO: Go into your Job.js component and think where should each prop go and set it up so that each job component will have a different job!
//TODO: Get the search bar to display the jobs you write in the input field!
//TODO: Finish the functionality of the findJobs function
//TODO: Get the Apply now button to work!
//TODO: Display the correct count of the jobs that are displayed


function App() {

    // Paste the api url given by your instructor here:
    const [jobs, setJobs] = useState([])
    const [unfilter, setUnfilter] = useState([])
    const [text, setText] = useState('')
    const url = "https://cpbootcamp.proxy.beeceptor.com/devjobs"
    // console.log(jobs)

  
    //HINT: This array may be useful somewhere!
    let filtered = []
    let unFiltered = unfilter
    // console.log(unFiltered)
    let input = document.querySelector('.input-container')
    
    //Replace any instance of placeholder with something else
    let searchText = text
    console.log(searchText)

    useEffect(() => {
        fetch(url)
    .then(response => {return response.json()})
    .then(json => {return setUnfilter(json) })

    return

    }, [])

    useEffect(() => {
        fetch(url)
    .then(response => {return response.json()})
    .then(json => {return setJobs(json) })

    return

    }, [])

    // coole.log(jobs)

    // console.log(unFiltered)ns
    

      const findJobs = (e) => {
        // This function should filter jobs based on what you type on the input field!
        //How can you grab what you typed in the input field?
       setText(e.target.value)
      
        if(searchText !== ""){
            // What does the filter function do?
            // What array should you be filtering?
            jobs.filter(job => {
                if(job.roleName.toLowerCase().includes(e.target.value) 
                    || job.type.toLowerCase().includes(e.target.value)
                    || job.company.toLowerCase().includes(e.target.value)
                    || job.requirements.content.toLowerCase().includes(e.target.value)) {

                       filtered.push(job)
                        // console.log('hello')

            
                } 

              
                
                // console.log(filtered)
                return true
            })
           
            // console.log(filtered)
            setJobs(filtered)
         
        } else {

            // console.log('hello')
        //    filtered = [];
        //    unFiltered.map((job) => {
        //    return filtered.push(job)
        //    })
            setJobs(unFiltered)
        }
      
      }

     
      
    //   console.log(jobs)

      const searchJob = () => {
       
      }
      
      

    return (
        <div className="app">
             <header>
                <div className="header-container">
                    <div className="logo">
                        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" alt=""/>
                    </div>
                    <span>CleverJobs</span>
                </div>
            </header>
            <div className="search">
                <div className="search-container">
                <div className="input-container">
                        <i className="fas fa-search"></i>
                        <input type="text" id="filter-jobs" onChange={findJobs} name="filter-jobs" placeholder="Filter by title" />
                    </div>
                    <div className="button-container">
                        <span onClick ={searchJob}>Find Job</span>
                    </div>
                </div>
            </div>
            
            <div className="jobs-list">
                <h1> {`Showing ${jobs.length} Jobs`} </h1>
                <div className="jobs-container"> 
                     {jobs.map((job) => {
                        return  <Job logo = {job.logo} company = {job.company} id = {job.id} roleName = {job.roleName} requirements = {job.requirements.description}
                        applicationLink = {job.applicationLink} website = {job.website}/>
                     })}  
                      
                        
                </div>
            </div>
        </div>
    )
}

export default App


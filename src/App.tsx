// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { useEffect } from 'react'
import CourseDataService from './service/Service'
// import {Switch, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import SubjectAndNumber from './component/search-option/SubjectAndNumber';
import { Course } from './component/tsClasses'
import { Table, Tag, Space, Divider } from 'antd';
import TablePage from './component/TablePage';
import AllCourses from './component/search-option/AllCourses'
import Footer from './component/Footer';
import Subject from './component/search-option/Subject';
import SubjectAndFirstNumber from './component/search-option/SubjectAndFirstNumber';
import Credit from './component/search-option/Credit';
import Title from './component/search-option/Title';
import SubjectAndCredit from './component/search-option/SubjectAndCredit';
import SubjectAndTitle from './component/search-option/SubjectAndTitle';
import SubjectAndFirstNumberAndTitle from './component/search-option/SubjectAndFirstnumberAndTitle';
//import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
function App() {
    // const [courses, setCourses] = useState<Course[]>()
    const [courses, setCourses] = useState<Course[]>([])
    const [searchSubject, setSearchSubject] = useState("")
    const [searchNumber, setSearchNumber] = useState("")
    const [searchCredit, setSearchCredit] = useState(0)
    const [searchTitle, setSearchTitle] = useState("")
    const [searchFirstNumber, setSearchFirstNumber] = useState("")
    //Menu option
    // let data: any[] = [{"id":0}];
    useEffect(()=>{
        console.log(courses)
        console.log(typeof courses)
    },[searchSubject,searchNumber,searchCredit,searchTitle,searchFirstNumber])

    const retriveCourse = () => {
        CourseDataService.getCourseBySubjectAndNumber(searchSubject,searchNumber)
        //CourseDataService.getAllCourses()
        .then(response =>{
            // data = response.data
            console.log(response.data)
            setCourses(response.data)
        })
        .catch(e =>{
            console.log(e)
        })
    }
    const retriveCourses = () => {
      CourseDataService.getAllCourses()
      .then(response =>{
          // data = response.data
          console.log(response.data)
          setCourses(response.data)
      })
      .catch(e =>{
          console.log(e)
      })
    }
    const retriveCoursesBySubject = () => {
      CourseDataService.getCourseBySubject(searchSubject)
      .then(response =>{
          // data = response.data
          console.log(response.data)
          setCourses(response.data)
      })
      .catch(e =>{
          console.log(e)
      })
    }
    const retriveCoursesByTitle = () => {
      CourseDataService.getCourseByTitle(searchTitle)
      .then(response =>{
          // data = response.data
          console.log(response.data)
          setCourses(response.data)
      })
      .catch(e =>{
          console.log(e)
      })
    }
    const retriveCoursesByCredit = () => {
      CourseDataService.getCourseByCredit(searchCredit)
      .then(response =>{
          // data = response.data
          console.log(response.data)
          setCourses(response.data)
      })
      .catch(e =>{
          console.log(e)
      })
    }

    const retriveCoursesBySubjectAndCredit = () => {
      CourseDataService.getCourseBySubjectAndCredit(searchSubject,searchCredit)
      .then(response =>{
          // data = response.data
          console.log(response.data)
          setCourses(response.data)
      })
      .catch(e =>{
          console.log(e)
      })
    }
    const retriveCoursesBySubjectAndFirstNumber = () => {
      CourseDataService.getCourseBySubjectAndFirstNumber(searchSubject, searchFirstNumber)
      .then(response =>{
          // data = response.data
          console.log(response.data)
          setCourses(response.data)
      })
      .catch(e =>{
          console.log(e)
      })
    }
    const retriveCoursesBySubjectAndTitle = () => {
      CourseDataService.getCourseBySubjectAndTitle(searchSubject, searchTitle)
      .then(response =>{
          // data = response.data
          console.log(response.data)
          setCourses(response.data)
      })
      .catch(e =>{
          console.log(e)
      })
    }
    const retriveCoursesBySubjectAndFirstNumberAndTitle = () => {
      CourseDataService.getCourseBySubjectAndFirstNumberAndTitle(searchSubject, searchFirstNumber,searchTitle)
      .then(response =>{
          // data = response.data
          console.log(response.data)
          setCourses(response.data)
      })
      .catch(e =>{
          console.log(e)
      })
    }

    const handleChangeSearchSubject = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setSearchSubject(e.target.value)
    }
    const handleChangeSearchNumber = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setSearchNumber(e.target.value)
    }
    const handleChangeSearchCredit = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setSearchCredit(parseInt(e.target.value))
    }
    const handleChangeSearchTitle = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setSearchTitle(e.target.value)
    }
    const handleChangeSearchFirstNumber = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setSearchFirstNumber(e.target.value)
    }
    // Menu
    const [searchId, setSearchId] = useState("");
 
    
  
     
  
   
  return (
    <div className="App">
      <Navbar 
        setSearchId ={setSearchId}
      />
      <br />
      {
        searchId === 'All Courses' &&
        <AllCourses 
          retriveCourses={retriveCourses}
        />
      }
      {
        searchId === 'Subject Number' && 
        <SubjectAndNumber 
        searchSubject = {searchSubject}
        searchNumber = {searchNumber}
        onChangeSearchSubject={handleChangeSearchSubject}
        onChangeSearchNumber = {handleChangeSearchNumber}
        retriveCourse = {retriveCourse}
        />
      }
      {
        searchId === 'Subject' && 
        <Subject
          searchSubject = {searchSubject}
          onChangeSearchSubject={handleChangeSearchSubject}
          retriveCoursesBySubject = {retriveCoursesBySubject}
        />
      }
      {
        searchId === 'Credit' && 
        <Credit
          searchCredit= {searchCredit}
          onChangeSearchCredit={handleChangeSearchCredit}
          retriveCoursesByCredit = {retriveCoursesByCredit}
        />
      }
      {
        searchId === 'Title' && 
        <Title
          searchTitle = {searchTitle}
          onChangeSearchTitle={handleChangeSearchTitle}
          retriveCoursesByTitle = {retriveCoursesByTitle}
        />
      }
      {
        searchId === 'Subject Credit' && 
        <SubjectAndCredit
          searchSubject = {searchSubject}
          onChangeSearchSubject={handleChangeSearchSubject}
          searchCredit= {searchCredit}
          onChangeSearchCredit={handleChangeSearchCredit}
          retriveCoursesBySubjectAndCredit = {retriveCoursesBySubjectAndCredit}
        />
      }
      {
        searchId === 'Subject Year' && 
        <SubjectAndFirstNumber
          searchSubject = {searchSubject}
          onChangeSearchSubject={handleChangeSearchSubject}
          searchFirstNumber= {searchFirstNumber}
          onChangeSearchFirstNumber={handleChangeSearchFirstNumber}
          retriveCoursesBySubjectAndFirstNumber = {retriveCoursesBySubjectAndFirstNumber}
        />
      }
      {
        searchId === 'Subject Title' && 
        <SubjectAndTitle
          searchSubject = {searchSubject}
          onChangeSearchSubject={handleChangeSearchSubject}
          searchTitle = {searchTitle}
          onChangeSearchTitle={handleChangeSearchTitle}
          retriveCoursesBySubjectAndTitle = {retriveCoursesBySubjectAndTitle}
        />
      }
      {
        searchId === 'Subject Year Title' && 
        <SubjectAndFirstNumberAndTitle
          searchSubject = {searchSubject}
          onChangeSearchSubject={handleChangeSearchSubject}
          searchFirstNumber= {searchFirstNumber}
          onChangeSearchFirstNumber={handleChangeSearchFirstNumber}
          searchTitle = {searchTitle}
          onChangeSearchTitle={handleChangeSearchTitle}
          retriveCoursesBySubjectAndFirstNumberAndTitle = {retriveCoursesBySubjectAndFirstNumberAndTitle}
        />
      }

     
      <Divider />
      <TablePage 
        data={courses}/>
      <Footer />
    </div>
  
  );
}




export default App;
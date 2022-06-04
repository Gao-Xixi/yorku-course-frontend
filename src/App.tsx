// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { useEffect } from 'react'
import CourseDataService from './service/Service'
// import {Switch, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import CoursesList from './component/CoursesList';

import { Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;
//import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
function App() {
    // const [courses, setCourses] = useState<Course[]>()
    const [courses, setCourses] = useState<any[]>([])
    const [searchSubject, setSearchSubject] = useState("")
    const [searchNumber, setSearchNumber] = useState("")
    let data: any[] = [{"id":0}];
    useEffect(()=>{
        console.log(courses)
        console.log(typeof courses)
    },[searchSubject,searchNumber])

    const retriveCourse = () => {
        CourseDataService.getCourseBySubjectAndNumber(searchSubject,searchNumber)
        //CourseDataService.getAllCourses()
        .then(response =>{
            data = response.data
            console.log(response.data)
            setCourses(data)
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
    // const columns: GridColDef[] = [
    //   { field: 'id', headerName: 'ID', width: 70 },
    //   { field: 'subject', headerName: 'Subject', width: 130, sortable: true},
    //   { field: 'number', headerName: 'Course Number', width: 130 },
    //   {
    //     field: 'credit',
    //     headerName: 'Credit',
    //     type: 'number',
    //     width: 90,
    //   },
    //   {
    //     field: 'title',
    //     headerName: 'Title',
    //     width: 160
    //   },
    //   {
    //     field: 'detail',
    //     headerName: 'Check Detail',
    //     width: 160,
    //     render=(text)=>{<a>text</a>}
    
    //   },
    // ];
   
  return (
    <div className="App">
      <Navbar />
      <CoursesList 
        searchSubject = {searchSubject}
        searchNumber = {searchNumber}
        onChangeSearchSubject={handleChangeSearchSubject}
        onChangeSearchNumber = {handleChangeSearchNumber}
        retriveCourse = {retriveCourse}
      />
      <Table 
        dataSource={courses}
      >
       
      <Column title="Subject" dataIndex="subject" key="subject" />
      <Column title="Course Number" dataIndex="number" key="number" />
      <Column title="Credit" dataIndex="credit" key="crdit" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column
        title="Detail"
        dataIndex="detail"
        key="detail"
        render={(text) => (
          <a>
            <Tag color="blue" key={text}>
              Click for more Detail
            </Tag>
          </a>
      )}
    />

      </Table>
    </div>
  );
}




export default App;
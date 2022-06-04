import React, { useState } from 'react'
import { useEffect } from 'react'
import CourseDataService from '../service/Service'
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const CoursesList = ({ searchSubject, searchNumber, onChangeSearchSubject,onChangeSearchNumber, retriveCourse}: any) => {
    // const [courses, setCourses] = useState([])
    // const [searchSubject, setSearchSubject] = useState("")
    // const [searchNumber, setSearchNumber] = useState("")
    // useEffect(()=>{
    //     retriveCourse()
    // },[searchSubject,searchNumber])

    // const retriveCourse = () => {
    //     CourseDataService.getCourseBySubjectAndNumber(searchSubject,searchNumber)
    //     .then(response =>{
    //         console.log(response.data)
    //         setCourses(response.data)
    //     })
    //     .catch(e =>{
    //         console.log(e)
    //     })
    // }

    // const onChangeSearchSubject = (e :React.ChangeEvent<HTMLInputElement>) =>{
    //     setSearchSubject(e.target.value)
    // }
    // const onChangeSearchNumber = (e :React.ChangeEvent<HTMLInputElement>) =>{
    //     setSearchNumber(e.target.value)
    // }
  return (
        
    <Form
        name="wrap"
        labelCol={{
        flex: '110px',
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
        flex: 1,
        }}
        colon={false}
    >
        <Form.Item
        label="Subject"
        name="subject"
        rules={[
            {
            required: true,
            },
        ]}
        >
        <Input 
            type='text'
            placeholder='EECS/eecs'
            value={searchSubject}
            onChange={ onChangeSearchSubject }/>
        </Form.Item>

        <Form.Item
        label="Course Number"
        name="number"
        rules={[
            {
            required: true,
            },
        ]}
        >
            <Input 
                type='text'
                placeholder='1000'
                value={searchNumber}
                onChange={ onChangeSearchNumber }
            />
        </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit" onClick={retriveCourse}>
        Search
      </Button>
    </Form.Item>
  </Form>
);
};

export default CoursesList

// onClick={findBySubjectAndNumber}
import React, { useState } from 'react'
import { useEffect } from 'react'
import CourseDataService from '../../service/Service'
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const Title = ({ searchTitle, onChangeSearchTitle, retriveCoursesByTitle}: any) => {
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
        label="Title"
        name="title"
        rules={[
            {
            required: true,
            },
        ]}
        >
        <Input 
            type='text'
            placeholder='Course Title Keyword'
            value={searchTitle}
            onChange={ onChangeSearchTitle }/>
        </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit" onClick={retriveCoursesByTitle}>
        Search
      </Button>
    </Form.Item>
  </Form>
);
}

export default Title;


import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const SubjectAndTitle = ({ searchSubject, searchTitle, onChangeSearchSubject, onChangeSearchTitle,retriveCoursesBySubjectAndTitle}: any) => {
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
      <Button type="primary" htmlType="submit" onClick={retriveCoursesBySubjectAndTitle}>
        Search
      </Button>
    </Form.Item>
  </Form>
);
};

export default SubjectAndTitle;

// onClick={findBySubjectAndNumber}
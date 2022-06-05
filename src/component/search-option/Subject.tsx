
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const Subject = ({ searchSubject, onChangeSearchSubject, retriveCoursesBySubject}: any) => {
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
            value={ searchSubject }
            onChange={ onChangeSearchSubject }/>
        </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit" onClick={retriveCoursesBySubject}>
        Search
      </Button>
    </Form.Item>
  </Form>
);
}

export default Subject


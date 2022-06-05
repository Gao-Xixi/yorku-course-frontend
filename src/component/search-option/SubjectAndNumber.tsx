
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const SubjectAndNumber = ({ searchSubject, searchNumber, onChangeSearchSubject,onChangeSearchNumber, retriveCourse}: any) => {
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

export default SubjectAndNumber

// onClick={findBySubjectAndNumber}
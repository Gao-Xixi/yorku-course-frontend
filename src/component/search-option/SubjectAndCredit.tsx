
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const SubjectAndCredit = ({ searchSubject, searchCredit, onChangeSearchSubject,onChangeSearchCredit, retriveCoursesBySubjectAndCredit}: any) => {
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
        label="Credit"
        name="credit"
        rules={[
            {
            required: true,
            },
        ]}
        >
        <Input 
            type='text'
            placeholder='EECS/eecs'
            value={searchCredit}
            onChange={ onChangeSearchCredit }/>
        </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit" onClick={retriveCoursesBySubjectAndCredit}>
        Search
      </Button>
    </Form.Item>
  </Form>
);
};

export default SubjectAndCredit

// onClick={findBySubjectAndNumber}

import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const Credit = ({ searchCredit, onChangeSearchCredit, retriveCoursesByCredit}: any) => {
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
      <Button type="primary" htmlType="submit" onClick={retriveCoursesByCredit}>
        Search
      </Button>
    </Form.Item>
  </Form>
);
}

export default Credit;


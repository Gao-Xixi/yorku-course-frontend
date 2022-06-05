
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { Course } from './tsClasses'
import { Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;
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
//     width: 160

//   },
// ];
// export default function (data: any[]) {

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={data}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

export default function TablePage(props:{data: Course[]}) {
  useEffect(()=>{
    console.log("down")
  });
  return(
    <>
   <Table 
        dataSource={props.data}
      >
      <Column title="Id" dataIndex="id" key="id" />
      <Column title="Subject" dataIndex="subject" key="subject" />
      <Column title="Course Number" dataIndex="number" key="number" />
      <Column title="Credit" dataIndex="credit" key="crdit" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column
        title="Detail"
        dataIndex="detail"
        key="detail"
        render={(text) => (

          <a href={text}>
            <Tag color="blue" key={text}>
              Click here. Detail may not work now...
            </Tag>
          </a>
      )}
    />

      </Table>
  </>

  ) 
  
 
}

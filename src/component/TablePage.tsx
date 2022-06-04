
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { Course } from './tsClasses'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'subject', headerName: 'Subject', width: 130, sortable: true},
  { field: 'number', headerName: 'Course Number', width: 130 },
  {
    field: 'credit',
    headerName: 'Credit',
    type: 'number',
    width: 90,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 160
  },
  {
    field: 'detail',
    headerName: 'Check Detail',
    width: 160

  },
];
export default function DataTable(data: any[]) {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}



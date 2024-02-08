import "./datatable.scss"

import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from "../../datatablesourve";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: () => {
        return (
          <div className="cellaction">
            <div className="viewbutton">view</div>
            <div className="deletebutton">delete</div>
          </div>
        )
      }
    }
  ];
  return (
    <div className='datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

    </div>
  )
}

export default Datatable

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 600,
  margin: 10,
  width: "100%",
  "& .super-app-theme--header": {
    backgroundColor: "rgb(235,235,235)"
  },
  "& .MuiFormGroup-options": {
    alignItems: "center",
    paddingBottom: theme.spacing(1),
    "& > div": {
      minWidth: 100,
      margin: theme.spacing(2),
      marginLeft: 0,
    },
  },
}));

function Table(props) {
  const [pageSize, setPageSize] = React.useState(25);
  return (
    <>
      <StyledBox>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          editMode="row"
          experimentalFeatures={{ newEditingApi: true }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[25, 50, 100]}
          pagination
        />
      </StyledBox>
    </>
  );
}

export default Table;

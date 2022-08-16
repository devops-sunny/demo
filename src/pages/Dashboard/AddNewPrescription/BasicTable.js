import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import Copy from '../../../assets/images/copy.png';
import Delete from '../../../assets/images/delete.png';
import Edit from '../../../assets/images/edit-e.png';
import Eye from '../../../assets/images/eye.png';

function BasicTable() {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#EBEBEB",
      color: "#000000",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,

    },
  }));
  

  const handleClickOpen = () => {
   console.log("hi Delete");
  };


  return (
    <>
      <div class="main-table">
        <div class="cmn-table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>No</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Written by</StyledTableCell>
                  <StyledTableCell align="left">Type of Consultation</StyledTableCell>
                  <StyledTableCell align="left">Shared with Pharmacist</StyledTableCell>
                  <StyledTableCell align="left"> </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="td" scope="row">
                    1
                  </TableCell>
                  <TableCell align="left">12/05/2022</TableCell>
                  <TableCell align="left">Dr. J.S. Ali</TableCell>
                  <TableCell align="left">Clinic</TableCell>
                  <TableCell align="left">Right Pharmacy</TableCell>
                  <TableCell align="left">
                  <img src={Delete} alt="Copy" onClick={handleClickOpen}/>
                  <img src={Copy} alt="Copy" />
                  <img src={Edit} alt="Copy" />
                  <img src={Eye} alt="Copy" />
                 </TableCell>
                </TableRow>
                </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default BasicTable;

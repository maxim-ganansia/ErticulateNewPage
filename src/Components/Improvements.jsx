import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import '../App.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
// import DateTimePicker from 'react-datetime-picker';

// import DateAndTimePickers from './DatePicker'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  CO2_Level,
  city_origin,
  product_type,
  category,
  traceability,
  category1,
  traceability1
) {
  return {
    CO2_Level, city_origin, product_type, category, traceability, category1,
    traceability1
  };
}

const rows = [
  createData("2020/09/11", "Your Skills were not bad, try harder", "75", "Its hard not to be great timewise", "99", "Subject Nice", "65"),
  createData("2020/09/08", "Your Skills were not bad, try harder", "90", "Its hard not to be great timewise", "75", "Subject Nice", "70"),
  createData("2020/09/06", "Your Skills were not bad, try harder", "75", "Its hard not to be great timewise", "75", "Subject Nice", "75"),
  createData("2020/09/04", "Your Skills were not bad, try harder", "75", "Its hard not to be great timewise", "75", "Subject Nice", "70"),
  createData("2020/09/01", "Your Skills were not bad, try harder", "75", "Its hard not to be great timewise", "99", "Subject Nice", "65"),
  createData("2020/08/29", "Your Skills were not bad, try harder", "90", "Its hard not to be great timewise", "75", "Subject Nice", "70"),
  createData("2020/08/24", "Your Skills were not bad, try harder", "75", "Its hard not to be great timewise", "75", "Subject Nice", "75"),
  createData("2020/08/21", "Your Skills were not bad, try harder", "75", "Its hard not to be great timewise", "75", "Subject Nice", "70"),
];

const useStyles = makeStyles({
  table: {
    font: 16
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  const [mentorValue, setMentorValue] = useState([])
  const [DateTime, SetDateTime] = useState([new Date()]);

  const handleSelect = (e) => {
    console.log(e);
    setMentorValue(e)
  }


  function handleOnSubmit(event) {
    event.preventDefault();
    alert("You selected " + DateTime + " With " + mentorValue)
    console.log({ DateTime })
  }

  return (
    <div className="tableinfo" >
      <TableContainer style={{ width: "80%", marginLeft: "10%" }} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dates </StyledTableCell>
              <StyledTableCell align="center">Presentation-Skills</StyledTableCell>
              <StyledTableCell align="center">
                Creativity&nbsp;
              </StyledTableCell>
              <StyledTableCell align="center">
                Adherance to Time&nbsp;
              </StyledTableCell>
              <StyledTableCell align="center">
                Ability to articulate &nbsp;
              </StyledTableCell>
              <StyledTableCell align="center">
                Subject Matter&nbsp;
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (

              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {row.CO2_Level}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.city_origin}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.product_type}
                </StyledTableCell>
                <StyledTableCell align="center">{row.category}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.traceability}
                </StyledTableCell>
                <StyledTableCell align="center">{row.category1}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.traceability1}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
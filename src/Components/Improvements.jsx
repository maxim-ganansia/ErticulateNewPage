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

  // const [DateValue, SetDateValue] = useState(new Date());
  const [mentorValue, setMentorValue] = useState([])
  const [DateTime, SetDateTime] = useState([new Date()]);
  // const [mentorName, setMentorName] = useState([])

  const handleSelect = (e) => {
    console.log(e);
    setMentorValue(e)
  }

  // let stateChoice = "You have selected " + DateTime + " With " + mentorValue

  function handleOnSubmit(event) {
    event.preventDefault();
    alert("You selected " + DateTime + " With " + mentorValue)
    console.log({ DateTime })
  }

  return (
    <div className="tableinfo" style={{ marginTop: "4%" }}>
      <div className="student-infos">
        <h1>My Page</h1>
        <img className="student-picture" src="../Moi.png" />
        <h1 className="student-name">Maxim-ilan Gnansia</h1>
        <p className="student-info"></p>
        {/* <div className="date-picker">
          <h3 className="calendar-title">Do You want to schedule a time with your Mentor ?</h3>
          <h4 className="calendar-title">When are You Available ??</h4>
          <div className="student-choice">
            <DropdownButton
              title="Choose a Mentor"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
              className="dropdown-button"
            >
              <Dropdown.Item className="dropdown-list" eventKey="Maxim-ilan Gnansia">Maxim-ilan Gnansia</Dropdown.Item>
              <Dropdown.Item className="dropdown-list" eventKey="Ben Szuchmacher">Ben Szuchmacher</Dropdown.Item>
              <Dropdown.Item className="dropdown-list" eventKey="Benyamin Netenyahu">Benyamin Netenyahu</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="dropdown-list" eventKey="some link">some link</Dropdown.Item>
            </DropdownButton>
            <div className="date-time-div">
              <DateTimePicker className="date-time-picker"
                onChange={SetDateTime}
                value={DateTime}
              />
            </div>
          </div>
          <h4>{stateChoice}</h4>
          <button variant="primary"
            className="submit-calendar-button"
            type="submit"
            onClick={(event) => { handleOnSubmit(event) }}><i class="far fa-paper-plane"></i></button>
        </div> */}

        
      </div>
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
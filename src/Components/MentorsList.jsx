import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  traceability
) {
  return { CO2_Level, city_origin, product_type, category, traceability };
}

const rows = [
  createData("Maxim G", "Sun-Thurs: 9am-1pm 7pm-830pm", "Torah, Math, Science"),
  createData("Ben S", "Sun-Thurs: 11am-1pm 4pm-830pm", "Web Design, Public Speaking, Chemistry"),
  createData("Mustafa Jordan", "Sun,Wed,Fri: 9am-4pm 6pm-830pm", "Arabic, Language, Science, Math"),
  createData("Donald Trump", "Mon-Thurs: 7am-11am ", "Business and Politics"),
];

const useStyles = makeStyles({
  table: {
    font: 16
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  // const whatToRender = (a) => {
  //   if (a > 5) return "#F04141";
  //   else if (a > 3) return "#F2F23D";
  //   else return "#98BF82";
  // };

  return (
    <div className="tableinfo" style={{ marginTop: "3%"}}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mentor Name </StyledTableCell>
              <StyledTableCell align="center">Hours of Availability</StyledTableCell>
              <StyledTableCell align="center">
                Subjects&nbsp;
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
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <button style={{ background: 'yellow', marginTop: "4%"}} >Add Mentor</button> */}
    </div>
  );
}
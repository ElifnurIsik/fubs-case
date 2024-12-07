import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TitleComp from "../TitleComp";
function createData(
  name: string,
  sold: number,
  remaining: number,
  price: number
) {
  return { name, sold, remaining, price };
}

const rows = [
  createData("Surf Excel", 300, 12, 100),
  createData("Rin", 217, 15, 207),
  createData("Parle G", 19, 17, 105),
];

const TableComp = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
        p: 1,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TitleComp
        title="Top Selling Stock"
        buttonText="See All"
        onButtonClick={() => console.log("See All clicked!")}
      />

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "14px", color: "#5D6679" }}>
                Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: "14px", color: "#5D6679" }}
              >
                Sold Quantity
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: "14px", color: "#5D6679" }}
              >
                Remaining Quantity
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: "14px", color: "#5D6679" }}
              >
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  {row.sold}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  {row.remaining}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  ₹ {row.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComp;

import React from "react";
import styled from "styled-components";
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

const TableComp: React.FC = () => {
  return (
    <TableComp__Container>
      <TitleComp
        title="Top Selling Stock"
        textButtons={[
          {
            text: "See All",
            onClick: () => console.log("See All clicked!"),
          },
        ]}
      />
      <TableComp__TableContainer>
        <table className="table-comp__table">
          <thead>
            <tr>
              <th className="table-comp__header-cell">Name</th>
              <th className="table-comp__header-cell">Sold Quantity</th>
              <th className="table-comp__header-cell">Remaining Quantity</th>
              <th className="table-comp__header-cell">Price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="table-comp__body-row">
                <td className="table-comp__body-cell">{row.name}</td>
                <td className="table-comp__body-cell">{row.sold}</td>
                <td className="table-comp__body-cell">{row.remaining}</td>
                <td className="table-comp__body-cell">₹ {row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableComp__TableContainer>
    </TableComp__Container>
  );
};

export default TableComp;

/** Styled Components */
const TableComp__Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%; /* Tam yüksekliği kapla */
  display: flex; /* Flex düzen */
  flex-direction: column; /* İçerikler dikey hizalansın */
`;

const TableComp__TableContainer = styled.div`
  margin-top: 16px;
  flex: 1; /* Kalan alanı doldur */
  height: 100%; /* Kapsayıcı yükseklik */
  overflow-y: auto; /* Uzun tablo durumunda kaydırma */

  .table-comp__table {
    width: 100%;
    border-collapse: collapse; /* Kenar boşluklarını kaldır */
  }

  .table-comp__header-cell {
    font-size: 14px;
    color: #5d6679;
    text-align: left;
    padding: 12px 8px;
    background-color: #f3f4f6; /* Başlık hücre arka plan rengi */
    font-weight: bold;
  }

  .table-comp__body-row {
    &:hover {
      background-color: #f9f9f9; /* Satır üzerine gelindiğinde arka plan */
    }
  }

  .table-comp__body-cell {
    font-size: 14px;
    color: #5d6679;
    text-align: left;
    padding: 12px 8px;
    border-top: 1px solid #e5e7eb; /* Satırlar arasında çizgi */
  }
`;

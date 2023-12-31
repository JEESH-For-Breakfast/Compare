import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import TypingEffectCell from "./TypingEffectCell";
import { useSelector } from "react-redux";
import { getFirstTwoSentences } from "./comparisonSlice";

const ReduxComparisonTable = ({
  title,
  tableData,
  companyNames,
  doTypingEffect,
}) => {
  console.log("received tableData:", tableData);
  console.log("recieved companyNames:", companyNames);
  const [headers, setHeaders] = useState([]);
  const [showColumns, setShowColumns] = useState({});
  const [companyIds, setCompanyIds] = useState([]);
  const [calculatedWidth, setCalculatedWidth] = useState(0);

  useEffect(() => {
    initializeTableData(tableData);
  }, [tableData]);

  const initializeTableData = (tableData) => {
    if (!tableData) {
      return;
    }

    const initialShowColumns = {};
    const tempCompanyIds = [];

    if (tableData && tableData[0] && tableData[0].data) {
      setHeaders(tableData[0].data.map((dataRow) => dataRow.key));
    }
    console.log("headers:", headers);

    tableData.forEach((dataRow) => {
      initialShowColumns[dataRow.companyId] = true;
      tempCompanyIds.push(dataRow.companyId);
    });

    setShowColumns(initialShowColumns);
    setCompanyIds(tempCompanyIds);

    setCalculatedWidth(`100%`);

    if (tableData.length > 0) {
      const calculatedWidth = `${100 / tableData.length}%`;
      setCalculatedWidth(calculatedWidth);
      console.log(calculatedWidth);
    }
  };

  console.log("headers:", headers);
  console.log("showColumns:", showColumns);
  console.log("get first two sentences:", getFirstTwoSentences);

  return (
    <>
      <div id="company-profile">
        <h4>{title}</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              {tableData.map((dataRow) => (
                <th key={dataRow.companyId}>
                  <div>
                    <span>{companyNames[dataRow.companyId]}</span>
                    <Button variant="outline-secondary" size="sm">
                      Hide
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <>
              {headers.map((header) => (
                <tr key={header}>
                  <td>{header}</td>
                  {tableData.map((dataRow) => (
                    <TypingEffectCell
                      key={`${tableData.companyId}-${header}`}
                      hidden={!showColumns[dataRow.companyId]}
                      doTypingEffect={doTypingEffect}
                      fullText={getFirstTwoSentences(
                        dataRow.data.find((obj) => obj.key === header)?.value
                      )}
                    />
                  ))}
                </tr>
              ))}
            </>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ReduxComparisonTable;

import React, { useContext, useEffect, useState } from "react";
import TableOfContents from "./TableOfContents";
import CompanyProfileTable from "./CompanyProfileTable";
import SwotTable from "./SwotAnalysisTable";
import ProductProfileTable from "./ProductProfileTable";
import MarketApproachTable from "./MarketApproachTable";
import TakeawaysTable from "./TakeawaysTable";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const Comparison = () => {
  //This is tentative functions to access DB
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const { data } = await axios.get('/api/comparisons');
  //   setData(data);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <TableOfContents />
        </Col>
        <Col className="my-5 me-5">
          <Row>
            <h1 className="text-center mb-5">
              Your Company VS. The World
            </h1>
          </Row>
          <CompanyProfileTable />
          <SwotTable />
          <ProductProfileTable />
          <MarketApproachTable />
          <TakeawaysTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Comparison;

import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/data.json";

const Store = () => {
  return (
    <Row md={2} xs={1} lg={3}>
      {storeItems.map((item) => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Store;

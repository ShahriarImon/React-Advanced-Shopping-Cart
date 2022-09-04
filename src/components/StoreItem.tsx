import React from "react";
import { Card } from "react-bootstrap";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="260px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4"></Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;

import React from "react";
import styled from "styled-components";
import { Chip, Typography } from "@mui/material";
import TitleComp from "../TitleComp";

interface ListItemData {
  name: string;
  quantity: string;
  image: string;
}

const ListComp: React.FC = () => {
  const items: ListItemData[] = [
    {
      name: "Tata Salt",
      quantity: "10 Packet",
      image: "../../icons/tata.svg",
    },
    {
      name: "Lays",
      quantity: "15 Packet",
      image: "../../icons/lays.svg",
    },
    {
      name: "Lays",
      quantity: "10 Bottle",
      image: "../../icons/lays.svg",
    },
  ];

  return (
    <ListComp__Container>
      <TitleComp
        title="Low Quantity Stock"
        textButtons={[
          {
            text: "See All",
            onClick: () => console.log("See All clicked!"),
          },
        ]}
      />
      <ListComp__List>
        {items.map((item, index) => (
          <ListComp__ListItem key={index}>
            <ListComp__Avatar src={item.image} alt={item.name} />
            <ListComp__Text>
              <Typography className="list-comp__text-primary">
                {item.name}
              </Typography>
              <Typography className="list-comp__text-secondary">
                Remaining Quantity: {item.quantity}
              </Typography>
            </ListComp__Text>
            <ListComp__Chip label="Low" size="small" />
          </ListComp__ListItem>
        ))}
      </ListComp__List>
    </ListComp__Container>
  );
};

export default ListComp;

/** Styled Components */
const ListComp__Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  height: 100%;
`;

const ListComp__List = styled.ul`
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0;
  margin: 0;
`;

const ListComp__ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
`;

const ListComp__Avatar = styled.img`
  width: 60px;
  height: 70px;
  border-radius: 4px; /* Optional: If you want rounded edges */
`;

const ListComp__Text = styled.div`
  flex: 1;

  .list-comp__text-primary {
    font-size: 16px;
    font-weight: bold;
    color: #383e49;
  }

  .list-comp__text-secondary {
    font-size: 14px;
    color: #6b7280;
  }
`;

const ListComp__Chip = styled(Chip)`
  background-color: #feeceb !important;
  color: #aa3028 !important;
  font-weight: 500;
`;

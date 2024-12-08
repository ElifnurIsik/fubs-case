import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box, Chip, Typography } from "@mui/material";
import TitleComp from "../TitleComp";
const ListComp = () => {
  const items = [
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
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          p: 1,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TitleComp
          title="Low Quantity Stock"
          textButtons={[
            {
              text: "See All",
              onClick: () => console.log("See All clicked!"),
            },
          ]}
        />

        <List
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: 2,
          }}
        >
          {items.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex", // Flex düzeni
                alignItems: "center", // Dikey ortalama
                gap: 1, // Öğeler arasındaki boşluk
                p: 0,
              }}
            >
              {/* Avatar */}

              <img src={item.image} style={{ width: "60px", height: "70px" }} />

              {/* Text Content */}
              <ListItemText
                primary={item.name}
                secondary={`Remaining Quantity: ${item.quantity}`}
                sx={{
                  flex: 1, // Tüm alanı kaplar
                  "& .MuiListItemText-primary": {
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#383E49",
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: "14px",
                    color: "#6B7280",
                  },
                }}
              />

              {/* Chip */}
              <Chip
                label="Low"
                size="small"
                sx={{
                  backgroundColor: "#FEECEB",
                  color: "#AA3028",
                  fontWeight: 500,
                  mx: "2%",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default ListComp;

import React from "react";
import { Box, Grid, Typography, Divider, List, ListItem } from "@mui/material";
import TitleComp from "../TitleComp";

// Statik veri yapısı için bir tip tanımlaması
interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface CardOneProps {
  array: StatItem[];
  titles: string;
}

const CardOne: React.FC<CardOneProps> = ({ array, titles }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
        p: 1,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TitleComp title={titles} />

      {/* İçerik */}
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-evenly"
      >
        {array.map((stat, index) => (
          <React.Fragment key={index}>
            <Grid item alignItems="center" sx={{ px: "1%" }}>
              <List>
                <ListItem
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  {" "}
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    style={{ width: 30, height: 30 }}
                  />
                </ListItem>
                <ListItem sx={{ justifyContent: "space-between", px: 0 }}>
                  {" "}
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#5D6679",
                      pr: 5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#6B7280",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </ListItem>
              </List>
            </Grid>

            {/* Divider */}
            {index < array.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  height: "50%", // Divider'ın yüksekliğini %50 yapar
                  backgroundColor: "#e5e7eb", // Divider'ın rengini ayarlar
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default CardOne;

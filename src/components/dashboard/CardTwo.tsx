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
  data: StatItem[];
  titles: string;
}

const CardTwo: React.FC<CardOneProps> = ({ data, titles }) => {
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
        {data.map((stat, index) => (
          <React.Fragment key={index}>
            <Grid item alignItems="center" sx={{ px: "1%" }}>
              <List>
                <ListItem
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    pb: "4px",
                  }}
                >
                  {" "}
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    style={{ width: 30, height: 30 }}
                  />
                </ListItem>
                <ListItem sx={{ justifyContent: "center", p: 0 }}>
                  {" "}
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#5D6679",
                    }}
                  >
                    {stat.value}
                  </Typography>
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  {" "}
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#444444",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </ListItem>
              </List>
            </Grid>

            {/* Divider */}
            {index < data.length - 1 && (
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

export default CardTwo;

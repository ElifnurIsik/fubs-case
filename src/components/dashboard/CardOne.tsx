import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
        p: 1,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        flex: 1,
        height: "100%",
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
            {index < array.length - 1 && isMobile && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  backgroundColor: "#e5e7eb",
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

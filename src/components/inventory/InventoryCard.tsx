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

interface InventoryCardItem {
  title: string;
  value: string | number;
  price?: string | number;
  description: string;
  type?: string;
  color?: string;
}

interface InventoryCardProps {
  data: InventoryCardItem[];
  title: string;
}

const InventoryCard: React.FC<InventoryCardProps> = ({ data, title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
        p: 2,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      {/* Başlık */}
      <TitleComp title={title} />

      {/* İçerik */}
      <Grid container spacing={2} alignItems="center">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6} sm>
              <Box
                sx={{
                  textAlign: "start",
                  color: item.color || "#383E49",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, fontSize: "16px" }}
                >
                  {item.title}
                </Typography>
                <List>
                  <ListItem sx={{ justifyContent: "space-between", p: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#5D6679",
                        mt: 1,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#5D6679",
                        mt: 1,
                      }}
                    >
                      {item.price}
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ justifyContent: "space-between", p: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        color: "#858D9D",
                        mt: 0.5,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#858D9D",
                        mt: 1,
                      }}
                    >
                      {item.type}
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Grid>

            {/* Divider */}
            {index < data.length - 1 && isMobile && (
              <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                sx={{
                  mx: 2,
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

export default InventoryCard;

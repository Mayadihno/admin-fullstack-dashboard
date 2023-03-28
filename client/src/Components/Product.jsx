import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const Product = ({
  data: { _id, name, category, description, price, rating, supply, stat },
}) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  return (
    <React.Fragment>
      <Card
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.55rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color={theme.palette.secondary[700]}
            gutterBottom
          >
            {category}
          </Typography>
          <Typography variant="h4" component={"div"}>
            {name}
          </Typography>
          <Typography
            sx={{ mb: "1.5rem" }}
            color={theme.palette.secondary[400]}
          >
            ${Number(price).toFixed(2)}
          </Typography>
          <Rating value={rating} readOnly />
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setExpanded(!expanded)}
          >
            SEE MORE
          </Button>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          sx={{ color: theme.palette.neutral }}
        >
          <CardContent>
            <Typography>id:{_id}</Typography>
            <Typography>Supply Left:{supply}</Typography>
            <Typography>
              Yearly Sales This Year:
              {stat.map((data) => {
                return data.yearlySalesTotal;
              })}
            </Typography>
            <Typography>
              Yearly Units Sold This Year:
              {stat.map((data) => {
                return data.yearlyTotalSoldUnits;
              })}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
};

export default Product;

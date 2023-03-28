import { Box, useMediaQuery } from "@mui/material";
import Header from "Components/Header";
import Product from "Components/Product";
import React from "react";
import { useGetProductQuery } from "state/api";

const Products = () => {
  const { data, isLoading } = useGetProductQuery();
  const isNOnMobile = useMediaQuery("(min-width:1000px)");
  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header title={"PRODUCTS"} subtitle={"See your list of products"} />
        {data || !isLoading ? (
          <Box
            mt="20px"
            display={"grid"}
            gridTemplateColumns="repeat(4,minmax(0,1fr))"
            justifyContent={"space-between"}
            rowGap="20px"
            columnGap={"1.33%"}
            sx={{
              "& > div": { gridColumn: isNOnMobile ? undefined : "span 4" },
            }}
          >
            {data.map((data) => {
              return (
                <div key={data._id}>
                  <Product data={data} />
                </div>
              );
            })}
          </Box>
        ) : (
          "Loading..."
        )}
      </Box>
    </React.Fragment>
  );
};

export default Products;

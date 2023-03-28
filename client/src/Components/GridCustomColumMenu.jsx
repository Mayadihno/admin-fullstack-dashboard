import {
  GridColumnMenuContainer,
  GridFilterInputMultipleValue,
  HideGridColMenuItem,
} from "@mui/x-data-grid";
import React from "react";

const GridCustomColumMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <React.Fragment>
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
      >
        <GridFilterInputMultipleValue
          onClick={hideMenu}
          column={currentColumn}
        />
        {/* <HideGridColMenuItem onClick={hideMenu} column={currentColumn} /> */}
      </GridColumnMenuContainer>
    </React.Fragment>
  );
};

export default GridCustomColumMenu;

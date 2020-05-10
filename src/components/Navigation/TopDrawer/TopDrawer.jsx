import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./TopDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const topDrawer = props => {
  let attachedClasses = [classes.TopDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.TopDrawer, classes.Open];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <nav>
          <NavigationItems clicked={props.clicked}/>
        </nav>
      </div>
    </div>
  );
};

export default topDrawer;
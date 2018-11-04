import React, { Fragment } from "react";
import { render } from "react-dom";

import { Timeline, Event } from "./index";

const App = () => (
  <Fragment>
    <h1>React Timeline Scribble</h1>
    <Timeline style={{ align: "center" }}>
      <Event interval={"Feb 12, 2018"} title={"Lorem"} subtitle={"Ipsum"} />
      <Event interval={"Feb 13, 2018"} title={"Lorem"} subtitle={"Ipsum"} />
    </Timeline>
  </Fragment>
);

render(<App />, document.getElementById("root"));

import React, { Fragment } from "react";
import { render } from "react-dom";
import {Timeline} from "./Timeline"
import {Event} from "./Event"

class App extends React.Component{
  render(){
    const events = [
      {"title":"Pyconf 2017", "subtitle":"Hyderabad","interval":"07-10-2019", "description":"Held at IIIT Hyderabad. Some Talks were really good"},
      {"title":"Pycon 2018", "subtitle":"Hyderabad","interval":"O7-10-2018"}
  ]
    return(
  <Fragment>
    <h1>React Timeline </h1>
    <Timeline>
      {events? events.map((event,index)=>(
        <Event key={index} interval={event.interval} title={event.title} subtitle={event.subtitle} description={event.description}/>
      )): null
      }
    </Timeline>
  </Fragment>

    )
  }
}

render(<App />, document.getElementById("root"));

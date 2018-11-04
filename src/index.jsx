import React, { Fragment } from "react";
import { render } from "react-dom";
import {Card,CardContent,CardHeader} from "@material-ui/core"
import s from './style'


export const Timeline = ({ children }) =>
  <div className={s.container}>
    <ul className={s.timeline}>
      {children}
    </ul>
  </div>

export const Event = ({ title, subtitle, interval, children }) =>
  <li className={s.event}>
    <label className={s.icon}></label>
    <div className={s.body}>
      <Card>
      <div style={{"float":"right"}}>
      <p className={s.date}>{interval}</p>
      </div>
      <CardHeader title={title} className={s.cardHeader} subheader={subtitle}/>
      <CardContent className={s.description}>
        {children}
      </CardContent>
      </Card>
    </div>
  </li>

class App extends React.Component{
  render(){
    const events = [
      {"title":"Pyconf 2017", "subtitle":"Hyderabad","interval":"Oct 7,2017", "description":"Held at IIIT Hyderabad. Some Talks were really good"},
      {"title":"Pycon 2018", "subtitle":"Hyderabad","interval":"Oct 7,2018"}
  ]
    return(
  <Fragment>
    <h1>React Timeline </h1>
    <Timeline>
      {events? events.map((event,index)=>(
        <Event key={index} interval={event.interval} title={event.title} subtitle={event.subtitle} children={event.description}/>
      )): null
      }
    </Timeline>
  </Fragment>

    )
  }
}

render(<App />, document.getElementById("root"));

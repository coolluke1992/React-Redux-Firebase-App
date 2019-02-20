import React from 'react'
import EventSummary from './EventSummary'
import { Link } from 'react-router-dom'

const EventList = ({events}) => {
  return (
    <div className="events-list section">
      { events && events.map(event => {
        return (
          <Link to={'/events/' + events.id} key={events.id}>
            <EventSummary event={event} />
          </Link>
        )
      })}  
    </div>
  )
}

export default EventList

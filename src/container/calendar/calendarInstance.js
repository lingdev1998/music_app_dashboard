import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyledBigCalendar } from '../../components/UI/Elements';
import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)


const CalendarInstance = (props) => {
  return (
    <div style={{ flexBasis: '70%', height: 500 }}>
      <StyledBigCalendar
        localizer={localizer}
        style={{ flexBasis: '70%' }}
        events={props.events ? props.events : []}
        defaultDate={props.defaultDate || new Date()}
        startAccessor={(event) => new Date(event.start)}
        endAccessor={(event) => new Date(event.end)}
        selectable={props.selectable}
        popup={props.popup}
        onSelecting={(range) => console.log(range)}
        onSelectSlot={(range) => {
          props.onSelectSlot(range)
        }}
        onSelectEvent={props.onSelectEvent}
        slotPropGetter={(date) => {
          console.log(date)
        }}
      />
    </div>
  )
}
export default CalendarInstance;
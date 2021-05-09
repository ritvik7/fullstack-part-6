import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const Notification = ({notification}) => {
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification===''? 'none' : ''
  }

  return (
    <div style={style} >
      {notification}
    </div>
  )
}

export default connect(mapStateToProps)(Notification)
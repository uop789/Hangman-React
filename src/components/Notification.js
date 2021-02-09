import React from 'react'

const Notification = ({ errorMessage }) => {
    return (
        <div className="notification-container">
          { errorMessage && <p>{errorMessage}</p> }
        </div>
    )
}

export default Notification

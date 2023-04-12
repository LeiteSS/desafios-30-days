import React from "react";

const SuccessAlertBox = () => {

  const alertStyle = {
    padding: 20,
    backgroundColor: '#00FF00',
    color: 'black',
    marginBottom: 15,
  }

  return (
    <div style={alertStyle}>
      <p>This is a alert</p>
    </div>
  )
}

export default SuccessAlertBox;
import React from "react";

const WarningAlertBox = () => {
  const alertStyle = {
    padding: 20,
    backgroundColor: '#FFFF00',
    color: 'black',
    marginBottom: 15,
  }

  return (
    <div style={alertStyle}>
      <p>This is a warning</p>
    </div>
  )
}

export default WarningAlertBox;
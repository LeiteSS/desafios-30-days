import React from "react";

const Subscribe = () => {

  const subscribeStyles = {
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
    padding: 10
  }

  const titleSectionStyles = {
    textTransForm: 'uppercase'
  }
  
  const formStyles = {
    display: 'flex',
    padding: 10,
    justifyContent: 'space-between',
  }

  const inputStyles = {
    width: 120,
    heigh: 40,
    border: 10,
    borderBottom: 2,
  }

  const submitStyles = {
    backgroundColor: '#FF7F7F',
    width: '90%',
    color: 'white',
  }

  return (
    <>
      <section style={subscribeStyles}>
      <h2 style={titleSectionStyles}>Subscribe</h2>
      <p style={subscribeStyles}>Sign up with your email address to receive news and updates</p>
      <form style={formStyles} id='personal-data'>
        <input style={inputStyles} type='text' placeholder='First name' />
        <input style={inputStyles} type='text' placeholder='Last Name' />
        <input style={inputStyles} type='text' placeholder='Email' />
      </form>
    <button type="submit" style={submitStyles}>Submit</button>
    </section>

    </>
  )
}

export default Subscribe;
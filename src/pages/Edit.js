import React from 'react'
import Form from '../components/Form'

function Edit(props) {
    console.log("EDIT Page:",props)
    return (
      <>
      <Form reload={props.reload} />
      </>
    )
}

export default Edit
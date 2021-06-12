import React from 'react'
import UpdateForm from './UpdateForm'

function Edit(props) {
    console.log("EDIT Page:",props)
    console.log(props.match.params.id)
    return (
      <>
      <UpdateForm reload={props.reload} id={props.match.params.id}/>
      </>
    )
}

export default Edit
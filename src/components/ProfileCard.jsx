import React from 'react'

const ProfileCard = ({name,occupation,email}) => {
  return (
    <div style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
        <h2>Name : {name}</h2>
        <p>occupation : {occupation}</p>
        <p>Email : {email}</p>
    </div>
  )
}

export default ProfileCard
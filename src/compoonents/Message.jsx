import React from 'react';


export function Message(props) {
    const {message="Сообщение из пропса"} = props
   console.log(props);
  
    return <h1>{message}</h1>
}
import React from 'react'

export default function App1(props) {
    
  return (
    <div>
        Hello {props.name}.you are {props.age}
    </div>
  );
}
App1.defaultprops = {name:"Nani",age:25};

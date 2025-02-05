// import React, { Component } from 'react'
// import { useState } from 'react'

// export const State = () => {
// let [name , setName] = useState("ammu")
// console.log(name);
// console.log(setName);
// let demo = () => {
//     setName("shammi")
// }
//   return (
//     <div>
//         <h1>{name}</h1>
//         <button onClick ={demo}>click</button>

//     </div>
//   )
// }
// export default State

// state in react:
// state is used to store the data in same Component and update the data in same component 
// states are mutable(read and write)

// syntax:
// let [inital-value, function] = useState(inital-value)


// import React, { useState } from 'react'

// const State = () => {
//   let [state ,setState] = useState(0)

//   let incr = () => {
//     setState(state + 1)
//   }
//   let reset = () => {
//     setState(0)
//   }
//   let decr = () => {
//     setState(state - 1)
//   }
//   return (
//     <>
//     <h1>{state}</h1>
//     <button onClick={incr}>increment</button>
//     <button onClick={reset}>reset</button>
//     <button onClick={decr}>decrement</button>
//     </>
//   )
// }
// export default State

// import React, { useState } from 'react'

// const State = () => {
//   let [name, setName] = useState('')
//   let [password, setPassword] = useState('')

//   let demo =(e) => {
//     e.preventDefault()
//     console.log({name,password});
//     name === "admin" && password === '12345' ? window.open("http://www.pixabay.com") : console.log("error")
//   }

//   return (
//     <>
//     <form action="">
//       <label htmlFor="name">Name:</label>
//       <input type="text" name="name" id="name" value={name}
//       onChange={(e) => {setName(e.target.value)}}/>

//       <br />
//       <label htmlFor="password">Password</label>
//       <input type="password" name="password" id="password" value={password}
//       onChange={(e) => {setPassword(e.target.value)}}/>

//       <br />
//       <button onClick={demo}>submit</button>
//     </form>
//     </>
//   )
// }

// export default State

import React, {useState} from 'react'
import video from "./video.mp4"

const State = () => {
  let [state, setState] = useState(true)
  let ref1 = useRef()
  let demo = () => {
    setState(!state)
    state === true ? ref1.current.play() : ref1.current.pause()
  }
  return (
    <div>
      <video src ={video} height="300px" ref={ref1}></video>
      <button onClick ={demo}>click</button>
    </div>
  )
}

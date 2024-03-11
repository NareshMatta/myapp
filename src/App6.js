// import {useState} from 'react'
// export default function App6() {
//     const [count,setCount] = useState(0);
//     console.log("compound loaded");
//   return (
//     <div><button onClick={() => setCount((prevState) =>prevState + 1)}>
//         Click
//         </button>
//         <span>{count}</span>
//         </div>
//   )
// }

import {useState,useEffect} from 'react'
export default function App6() {
    const [runs,setRuns] = useState(0);
    const [wickets,setWickets] = useState(0)
    console.log("compound loaded");
    useEffect(() =>{
        console.log("better luck next time");
    },[wickets]);
  return (
    <div><button onClick={() => setRuns((prevState) =>prevState + 1)}>
          Runs({runs})       
          </button>
          <button onClick={() => setWickets((prevState) =>prevState + 1)}>
          Wickets({wickets})       
          </button>
        </div>
  );
}
//TODO LIST BY BHAGWAN JI
import React,{ useState } from "react";
const Nav = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [todoList, setodoList] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const addTask = () => {
    if (task && time && date) {
      const newTask = {
        id: Date.now(),
        task,
        time,
        date,
      };
      setodoList([...todoList, newTask]);
      setTask("");
      setTime("");
      setDate("");
    } else {
      alert("Fill all fields");
    }
  };
  const deleteTask = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setodoList(updatedList);
  };
  return (
    <>
    <div style={{background:"rgb(153,255,255)",textAlign:'center'}}>
      <h1 style={{background:'rgb(244,196,46)'}}>TODO LIST PROJECT JAI SHREE RAM</h1>
      <p>Enter Task:</p>
      <input type="text" value={task} onChange={handleTask} /><br /><br />
      <p>Enter Time:</p>
      <input type="time" value={time} onChange={handleTime} /><br /><br />
      <p>Enter Date:</p>
      <input type="date" value={date} onChange={handleDate} /><br /><br />
      <button onClick={addTask} style={{border:'none',background:'rgb(2,200,20)'}}>Jodo</button>
      <h1 style={{color:'rgb(51, 0, 255)'}}>Displaying TODO List</h1>
      {todoList.map((item) => (
        <div key={item.id}>
          <p>Task:{item.task}</p>
          <p>Time:{item.time}</p>
          <p>Date:{item.date}</p>
          <button onClick={() => deleteTask(item.id)} style={{border:'none',background:'red'}}>Hatao</button>
        </div>
      ))}
      </div>
    </>
  );
};
export default Nav;




// import React, { useState } from "react";

// const Nav = () => {
//   const [task, setTask] = useState('');
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState('');
//   const [todoList, setodoList] = useState([]);

//   const handleTask = (e) => {
//     setTask(e.target.value);
//   };

//   const handleTime = (e) => {
//     setTime(e.target.value);
//   };

//   const handleDate = (e) => {
//     setDate(e.target.value);
//   };

//   const addTask = () => {
//     if (task && time && date) {
//       const newTask = {
//         id: Date.now(),
//         task,
//         time,
//         date,
//       };
//       setodoList([...todoList, newTask]);
//       setTask("");
//       setTime("");
//       setDate("");
//     } else {
//       alert("Fill all fields");
//     }
//   };

//   const deleteTask = (id) => {
//     const updatedList = todoList.filter((item) => item.id !== id);
//     setodoList(updatedList);
//   };

//   return (
//     <>
//       <p>Enter Task:</p>
//       <input type="text" value={task} onChange={handleTask} />

//       <p>Enter Time:</p>
//       <input type="time" value={time} onChange={handleTime} />

//       <p>Enter Date:</p>
//       <input type="date" value={date} onChange={handleDate} />

//       <button onClick={addTask}>Jodo</button>

//       <h1>Displaying TODO List</h1>
//       {todoList.map((item) => (
//         <div key={item.id}>
//           <p>Task: {item.task}</p>
//           <p>Time: {item.time}</p>
//           <p>Date: {item.date}</p>
//           <button onClick={() => deleteTask(item.id)}>Hatao</button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Nav;
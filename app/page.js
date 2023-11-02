'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTasks, setmainTasks] = useState([])

  const notify = () => {
    toast.success('Task Added Successfully!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const resetNotify = () => {
    toast.success('Reset Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTasks([...mainTasks, { task, desc }])
    settask("")
    setdesc("")
  }

  const resetHandler = () => {
    setmainTasks([])
    resetNotify()
  }

  const deleteHandler = (i) => {
    let copyTaks = [...mainTasks]
    copyTaks.splice(i, 1)
    setmainTasks(copyTaks)
  }

  let renderTask = <h2 className=' text-slate-200 font-bold text-xl'>No Tasks Avialable</h2>


  if (mainTasks.length > 0) {
    renderTask = (
      <div className='flex flex-wrap'>
        {mainTasks.map((t, i) => (
          <div key={i} className='max-w-md mx-auto bg-blue-300 shadow-lg rounded-md overflow-hidden mb-5 mr-2'>
            <div className='p-6'>
              <h5 className='text-3xl font-semibold mb-2 text-center'>{t.task}</h5>
              <p className='text-lg mb-4 text-center'>{t.desc}</p>
              <button
                onClick={() => {
                  deleteHandler(i);
                }}
                className='bg-red-500 text-white px-4 py-2 rounded font-bold'>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center  bg-blue-900">
        <h1 class='text-center text-5xl p-3 text-pink-100 font-bold font-serif bg-blue-900'>
          ToDo List
        </h1>
        <button 
        onClick={resetHandler}
        className="mr-4 bg-red-500 text-white px-4 py-1.5 text-2xl font-bold rounded m-5f">Reset</button>
      </div>



      <div className='flex justify-center'>
        <form onSubmit={submitHandler}  >
          <input
            type="text"
            className='text-2xl bg-purple-100 border-zinc-800 border-2 m-5 px-3 py-1'
            placeholder='Task'
            value={task}
            onChange={(e) => {
              settask(e.target.value)
            }}
          />
          <input
            type="text"
            className='text-2xl bg-purple-100 border-zinc-800 border-2 m-5 px-3 py-1'
            placeholder='Description'
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value)
            }}
          />
          <button onClick={notify} className='bg-blue-800 text-white px-4 py-1.5 text-2xl font-bold rounded m-5'>
            Add Task
          </button>
        </form>
      </div>
      <ToastContainer />
      <div className='p-8 bg-purple-800 w-2/3 mx-auto rounded-lg shadow-lg flex justify-center' >
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default page
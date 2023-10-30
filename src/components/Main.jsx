import React, { useEffect, useState } from 'react'
import {
  BsThreeDots, BsPlus, BsXCircleFill, BsFillCheckCircleFill, BsCircle,
  BsClockFill, BsFillCircleFill
} from "react-icons/bs";
import './Css/Main.css'
import { Task } from './Card/Task';

export const Main = (props) => {
  const [itemcount, setitemcount] = useState({
    'backlog': 0,
    'todo': 0,
    'inprogress': 0,
    'done': 0,
    'canceled': 0
  })
  const [taskData, settaskData] = useState('')

  useEffect(() => {
    let data = props.apidata

    const updatedTaskData = {
      'backlog': [],
      'todo': [],
      'inprogress': [],
      'done': [],
      'canceled': [],
    };

    data?.tickets.map((item, index) => {
      if (item.status === 'Todo') {
        setitemcount(prev => ({ ...prev, 'todo': (prev.todo) + 1 }))
        updatedTaskData['todo'].push(item);
      }

      else if (item.status === 'In progress') {
        setitemcount(prev => ({ ...prev, 'inprogress': (prev.inprogress) + 1 }))
        updatedTaskData['inprogress'].push(item);
      }

      else if (item.status === 'Backlog') {
        setitemcount(prev => ({ ...prev, 'backlog': (prev.backlog) + 1 }))
        updatedTaskData['backlog'].push(item);
      }

      else if (item.status === 'Done') {
        setitemcount(prev => ({ ...prev, 'done': (prev.done) + 1 }))
        updatedTaskData['done'].push(item);
      }

      else if (item.status === 'Cancel') {
        setitemcount(prev => ({ ...prev, 'canceled': (prev.canceled) + 1 }))
        updatedTaskData['canceled'].push(item);
      }
      return updatedTaskData
    })
    settaskData(updatedTaskData)
  }, [props.apidata])

  return (
    <div className='row'>

      {/* //Back Log */}
      <div className="TaskContainer BackLog">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsFillCircleFill />
            <span>Back Log</span>
            <span>{itemcount?.backlog}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.backlog?.length > 0 ? taskData?.backlog?.map((item, index) => {
            return <Task data={item} count={index} type={'status'} />
          }) : <p className='NoTask'>No Task</p>
        }
      </div>

      {/* //Todo */}
      <div className="TaskContainer Todo">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsCircle />
            <span>Todo</span>
            <span>{itemcount?.todo}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.todo?.length > 0 ? taskData?.todo?.map((item, index) => {
            return <Task data={item} count={index} type={'status'} />
          }) : <p className='NoTask'>No Task</p>
        }
      </div>

      {/* //In progress */}
      <div className="TaskContainer Inprogress">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsClockFill style={{ color: '#F2DC93' }} />
            <span>In Progress</span>
            <span>{itemcount?.inprogress}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.inprogress?.length > 0 ? taskData?.inprogress?.map((item, index) => {
            return <Task data={item} count={index} type={'status'} />
          }) : <p className='NoTask'>No Task</p>
        }
      </div>

      {/* // Task Done */}
      <div className="TaskContainer Done">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsFillCheckCircleFill style={{ color: '#5D69D1' }} />
            <span>Done</span>
            <span>{itemcount?.done}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.done?.length > 0 ? taskData?.done?.map((item, index) => {
            return <Task data={item} count={index} type={'status'} />
          }) : <p className='NoTask'>No Task</p>
        }
      </div>

      {/* // Task canceled */}
      <div className="TaskContainer Cancelled">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsXCircleFill style={{ color: '#9AA7B8' }} />
            <span>Canceled</span>
            <span>{itemcount?.canceled}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.canceled?.length > 0 ? taskData?.canceled?.map((item, index) => {
            return <Task data={item} count={index} type={'status'} />
          }) : <p className='NoTask'>No Task</p>
        }
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { BsThreeDots, BsPlus, BsReception4,
  BsFillExclamationSquareFill,BsReception3,BsReception2 } from "react-icons/bs";
import './Css/Main.css'
import { Task } from './Card/Task';

export const Priority = (props) => {
  const [itemcount, setitemcount] = useState({
    'priority0': 0,
    'priority1': 0,
    'priority2': 0,
    'priority3': 0,
    'priority4': 0
  })
  const [PriorityData,setPriorityData] =  useState('')

  useEffect(() => {
    let data = props.apidata

      const updatedPriorityData = {
        'priority0': [],
        'priority1': [],
        'priority2': [],
        'priority3': [],
        'priority4': [],
      };

      data?.tickets.map((item, index) => {
        if (item.priority === 0) {
          setitemcount(prev => ({ ...prev, 'priority0': (prev.priority0) + 1 }))
          updatedPriorityData['priority0'].push(item);
        }

        else if (item.priority === 1) {
          setitemcount(prev => ({ ...prev, 'priority1': (prev.priority1) + 1 }))
          updatedPriorityData['priority1'].push(item);
        }

        else if (item.priority === 2) {
          setitemcount(prev => ({ ...prev, 'priority2': (prev.priority2) + 1 }))
          updatedPriorityData['priority2'].push(item);
        }

        else if (item.priority === 3) {
          setitemcount(prev => ({ ...prev, 'priority3': (prev.priority3) + 1 }))
          updatedPriorityData['priority3'].push(item);
        }

        else if (item.priority === 4) {
          setitemcount(prev => ({ ...prev, 'priority4': (prev.priority4) + 1 }))
          updatedPriorityData['priority4'].push(item);
        }
        return updatedPriorityData
      })
      setPriorityData(updatedPriorityData)
  }, [props.apidata])

  return (
    <div className='row'>

      {/* //No Priority */}
      <div className="TaskContainer">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsThreeDots />
            <span>No Priority</span>
            <span>{itemcount?.priority0}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          PriorityData?.priority0?.length > 0 ?PriorityData?.priority0?.map((item,index)=>{
            return <Task data={item} key={index} type={'priority'}/>
          }):<p className='NoTask'>No Task</p>
        }
      </div>

      {/* //Urgent */}
      <div className="TaskContainer Urgent">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsFillExclamationSquareFill style={{color:'#FC7840'}} />
            <span>Urgent</span>
            <span>{itemcount?.priority1}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          PriorityData?.priority1?.length > 0 ?PriorityData?.priority1?.map((item,index)=>{
            return <Task data={item} key={index} type={'priority'}/>
          }):<p className='NoTask'>No Task</p>
        }
      </div>

      {/* //High */}
      <div className="TaskContainer high">
        <div className='top-menu'>
          <div className='Item-name' style={{ width: '42%' }}>
            <BsReception4 />
            <span>High</span>
            <span>{itemcount?.priority2}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          PriorityData?.priority2?.length > 0 ?PriorityData?.priority2?.map((item,index)=>{
            return <Task data={item} key={index} type={'priority'}/>
          }):<p className='NoTask'>No Task</p>
        }
      </div>

      {/* // Medium */}
      <div className="TaskContainer medium">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsReception3 />
            <span>Medium</span>
            <span>{itemcount?.priority3}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          PriorityData?.priority3?.length > 0 ?PriorityData?.priority3?.map((item,index)=>{
            return <Task data={item} key={index} type={'priority'}/>
          }):<p className='NoTask'>No Task</p>
        }
      </div>

      {/* // Low */}
      <div className="TaskContainer low">
        <div className='top-menu'>
          <div className='Item-name' style={{ width: '38%' }}>
            <BsReception2 />
            <span>Low</span>
            <span>{itemcount?.priority4}</span>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          PriorityData?.priority4?.length > 0 ?PriorityData?.priority4?.map((item,index)=>{
            return <Task data={item} key={index} type={'priority'}/>
          }):<p className='NoTask'>No Task</p>
        }
      </div>
    </div>
  )
}

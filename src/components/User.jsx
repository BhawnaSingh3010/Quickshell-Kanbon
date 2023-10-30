import React, { useEffect, useState } from 'react'
import { BsThreeDots, BsPlus, BsPersonCircle } from "react-icons/bs";
import './Css/Main.css'
import { Task } from './Card/Task';

export const User = (props) => {

  const [UserData, setUserData] = useState([])
  const [userTask, setuserTask] = useState([])

  useEffect(() => {
    let data = props.apidata
      setUserData(data?.users);

      let datah = {};
      data?.tickets.forEach((item) => {
        data?.users?.forEach((user) => {
          if (item.userId === user.id) {
            if (!datah[user.name]) {
              datah[user.name] = [item]; 
            } else {
              datah[user.name].push(item);
            }
          }
        });
      });
      setuserTask(datah)
  }, [props.apidata]);

  return (
    <div className='row'>

      {UserData?.length != 0 ? UserData?.map((item,index) => {
        return <div className="TaskContainer" key={item?.id}>
          <div className='top-menu'>
            <div className='Item-name'>
            <img src={require(`../Assets/user_icon/icon${index+1}.PNG`)} alt={index}/>
              <span>{item?.name}</span>
              <span>{userTask[item?.name].length}</span>
            </div>
            <div>
              <BsPlus />
              <BsThreeDots />
            </div>
          </div>
          {
            Object.keys(userTask).length > 0 ? userTask[item?.name]?.map((item, index) => {
              return <Task data={item} key={index} type={'user'}/>
            }) : <p className='NoTask'>No Task</p>
          }
        </div>
      }) : ''

      }


    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { BsPersonCircle, BsThreeDots, BsFillCircleFill } from 'react-icons/bs'

export const Task = (props) => {
console.log(props?.data?.image)
    return (
        <div className='Main-Task-container'>
            <div className='taskBox'>
                <p className='CAM-value'>{props?.data?.id}</p>
                <p>{props?.data?.title.length > 55 ? `${props?.data?.title.slice(0, 55)}...` : props?.data?.title}</p>
                <div className='task-bottom'>
                    <BsThreeDots />
                    <div className='featureBox'>
                        <BsFillCircleFill />
                        <span>{props?.data?.tag[0]}</span>
                    </div>
                </div>
            </div>
            {
                props.type !== 'user' ? <div className='icon_img'>
                    <img src={require(`../../Assets/user_icon/${props?.data?.image}`)} alt={props?.data?.image}/>
                </div> : ''
            }
        </div>
    )
}

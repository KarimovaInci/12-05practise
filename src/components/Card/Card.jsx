import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { add } from '../../store/cartSlice'
import "./Card.css"

const Card = () => {
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData(res.data)
        })
    },[data])

    const handleAdd=(item)=>{
        dispatch(add(item))
    }


  return (
   <>  <div className="products__cards">{
    data.map((item)=>{

        return(

      
            <div className="card">
                <div className="card__img">
                    <img src={item.image} alt="" />
                </div>
                <div className="card__text">
                    <h4 className='title'>{item.title}</h4>
                    <p className='price'>{item.price} AZN</p>
                    <button className='addBtn' onClick={()=> handleAdd(item) }>Add to card</button>
                </div>
            </div>
       
      
        )

    })
   } </div>
  
   </>
  )
}

export default Card
import React, { useEffect, useState } from 'react'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux'
import { addcommande, getcommande } from '../../JS/CommandeSlice/commandeSlice'

const Card = ({data,user}) => {
  const dispatch=useDispatch()
  const [newcommande, setnewcommande] = useState({
    product:data,
    details:user
  })
  useEffect(() => {
dispatch(getcommande())
  }, [])
  
  const commande=useSelector((store)=>store.commande?.commande)
  console.log(commande)
  return (
      <>
 
  <div class="container"> 
        <div class="products-card">
          <div class="card-image">
            <img src={data?.photo}  alt="img"/>
 

            <div class="card-text">
              <h3><a href="#">{data?.name}</a></h3>
    <p className="card-body">{data?.description}</p>

              <span><a href="#">{data?.price}DT</a></span>
            </div>
            <div class="link">
                <button className='container1' onClick={()=>dispatch(addcommande(newcommande))}>add to list</button>

            <a href="#"> Add to Cart </a>
            </div>
            </div>
        </div>
</div>

</>

  )
}

export default Card

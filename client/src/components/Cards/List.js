import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduit } from '../../JS/ProduitSlice/produitSlice'
import Card from './Card'
import "./Card.css"
import Navbar from '../Navbar/Navbar'

const List = () => {
    const dispatch=useDispatch()
    useEffect(() => {
   dispatch(getproduit())
    }, [])
    const produits=useSelector((store)=>store.produit?.produit)
    const user=useSelector((store)=>store.user?.user)
    console.log(user)
  return (
    <>
    <Navbar />
    <div className='list-product'>
      {produits?.map((el)=><Card  data={el} user={user}/>)}
    </div>
    </>
  )
}

export default List

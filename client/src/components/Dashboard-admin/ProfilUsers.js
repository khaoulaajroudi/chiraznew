import React, { useEffect, useState } from 'react'
import  './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { userCurrent } from '../../JS/userSlice/userSlice'

const ProfilUsers = ({data,user}) => {
  const dispatch=useDispatch()
  const [newuser, setnewuser] = useState({
    user:data,
    details:user
  })
  useEffect(() => {
    dispatch((userCurrent))
      }, [])
      const users=useSelector((store)=>store.users?.commande)
  console.log(users)
  /*
  const [tab, settab] = useState("user");
  const products = useSelector((state) => state.product?.productlist);
  const commandes = useSelector((state) => state.commande.commandelist);
  const users = useSelector((state) => state.user.userlist);
  const dispatch = useDispatch();
  */
  return (
    <div>
       <div class="table">
                
                    <tr>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Adress</th>
                        <th>Email</th>
                        <th>phone number</th>
                        <th>Command</th>
                         <th>Facture N°</th>
                   
                    </tr> 
                     {/*
                    {Users?.map((el) => (
                    <tr>
                        <td class="profile_name"><img src={el?.image_user} alt="img"/> {el?.name_uuser} </td>
                        <td>{el?.lastname_user}</td>
                        <td>{el?.adress_user}</td>
                        <td>{el?.email_user}</td>
                        <td>profile phone</td>
                        <td>profile </td>
                        <td>profile </td>


                    </tr>
                    )}
                    */}
                  
     </div>
    </div>
  )
}

export default ProfilUsers
                          
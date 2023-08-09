import Image from 'next/image'
import React, { useState } from 'react'
import mypic from '@/assets/logo.svg'
import {BsSearch} from "react-icons/bs"
import { Menu, Xmark } from './Icons'

function Nav() {
  const [values,setValues] = useState()
  const [click,setClick] = useState(false)

  const InputHandler = (e) =>{
      const {name,value} = e
      setValues({...values,[name]:value})
  }


  const ClickHandler = () =>{

  }


  const MenuHandler = () =>{
    setClick(!click)
  }

  return (
     <nav className='nav'>
           <div className='nav__header'>
           <Image
              src={mypic}
              alt="Vercel Logo"
              className="nav__logo"
              width={100}
              height={24}
              priority
            />
            {click ?  <button onClick={MenuHandler} ><Xmark className="xmark"  /> </button>: <button onClick={MenuHandler} className="bars"  ><Menu  /></button>}
           </div>
           <form method='get' action='' className='search__form' >
             <input type='text' placeholder='Add Location' onChange={InputHandler} className='search__location__input' />
             <input type='text' placeholder='Add guests' onChange={InputHandler} className='search__member__input' />
             <button onClick={ClickHandler}  className='search__button'>
               <BsSearch  className='search__icon'/>
             </button>
           </form>
     </nav>
  )
}

export default Nav
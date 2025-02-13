import React from 'react'

const Footer = () => {
  const d = new Date();
  return (
    <div>
        <h1 className='fixed left-[40%]  bottom-0 text-center text-white px-20 py-5'>copyright © kut@it.com {d.getFullYear()}</h1>
    </div>
  )
}

export default Footer
import React from 'react'
import Button from "../../form/button/FormButton"

const Card = () => {
  return (
    <article className='flex py-2 bg-slate-100 rounded-lg'>
        <div className='flex flex-col items-center justify-center p-5'>
            <p>Status</p><span className='cursor-pointer'>🟢</span>
        </div>
        <div className='px-2 w-full'>
            <h1 className='text-lg md:text-xl lg:text-3xl font-semibold'>Cours sur les associations de table sequelize</h1>
            
            <div className='flex justify-around w-full'>
                <div className='flex flex-col items-center'>
                    <p>Nathan Bardi</p>
                    <p><span>27</span> viewers</p>
                </div>
                <div className='h-full w-1/3'>
                    <Button>Rejoindre</Button>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Card
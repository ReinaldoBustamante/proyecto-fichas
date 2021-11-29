import React from 'react'
import { Accordion } from '../Accordion'


export const Form = () => {


    const handleOnSubmit = (e) =>{
        e.preventDefault()
        alert('d')
      }

    return (
        <div className='container mt-5'>
      
            <div className='row d-flex justify-content-center'>
                <div className='col'>

                
                        <form action ="" onSubmit={handleOnSubmit} >
                            <Accordion />
                        </form>
                    </div>
                </div>
        </div>
    )
}

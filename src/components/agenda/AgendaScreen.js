import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { useSelector } from 'react-redux'
import { Navbar } from './Navbar'


export const AgendaScreen = () => {

    const { active } = useSelector( state => state.notes )

    return (
        <div 
            className="agenda__main-content animate__animated animate__fadeIn animate__faster"
        >
         <Navbar />

            <main>
                {
                    ( active ) 
                    ? ( <NoteScreen /> )
                    : ( <NothingSelected />)
                }
            </main>
        </div>
    )
}

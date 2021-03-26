import React from 'react'
import { Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { showModal } from '../actions'

export default function AddButton() {
    const dispatch = useDispatch()
    return(
        <Button title='Add new goal!' onPress={() => dispatch(showModal())}/>
    )
}
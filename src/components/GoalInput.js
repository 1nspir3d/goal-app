import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { TextInput, Button, View, StyleSheet, Modal } from 'react-native'

import { setInput, addGoal, showModal, } from '../actions'

function InputForm() {
    const dispatch = useDispatch()
    const goal = useSelector(state => state.inputReducer)
    const showAble = useSelector(state => state.modalReducer)
    function onPressHandle() {
        if(goal.split(' ').join('') !== '') {
            dispatch(addGoal(goal))
            dispatch(setInput(''))
            dispatch(showModal())
        } 
    }
    return(
        <Modal visible={showAble} animationType= 'slide'>
            <View style={styles.inputForm}>
                <TextInput
                style={styles.goalInput}
                onChangeText={e => dispatch(setInput(e))}
                onSubmitEditing={onPressHandle}
                placeholder='Enter your goal!'
                autoFocus={true}
                value={goal}/>
                <View style={styles.buttons}>
                    <Button title="Cancle" color='red' onPress={() => {dispatch(showModal())}}/>
                    <Button title="Add" onPress={onPressHandle}/>
                </View>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputForm: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    goalInput: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        height: 50,
        width: "80%",
        maxWidth: 300,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 15,
        width: '60%',
        maxWidth: 250,
        justifyContent: 'space-between',
    }
})

export default InputForm

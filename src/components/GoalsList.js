import React from 'react'
import { useDispatch, useSelector,} from 'react-redux'
import { View, FlatList, Text, StyleSheet, TouchableHighlight} from 'react-native'
import { removeGoal, setColor, setDelete } from '../actions'

function GoalsList() {
    const data = useSelector(state => state.goalListReducer)
    const color = useSelector(state => state.goalColorReducer)
    const deleteAble = useSelector(state => state.deleteReducer)
    
    const dispatch = useDispatch()
    return(
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return(
                 <TouchableHighlight    
                  onLongPress={() => {
                    if(deleteAble) {
                      dispatch(removeGoal(item.index))
                      dispatch(setDelete())
                      dispatch(setColor(''))
                    }
                  }}
                  onPressIn={() => {
                    dispatch(setDelete())
                    dispatch(setColor(index))
                    
                  }}
                  onPressOut={() => {
                    dispatch(setColor(''))
                  }}
                  style={{marginVertical: 10,}}
                  activeOpacity= {1}
                 >
                    <View  key={item.index}  style={[styles.item, {backgroundColor: `${index !== color.index ? 'skyblue' : color.color}`}]}>
                      <Text style={{fontSize: 20}}>{item}</Text>
                    </View> 
                 </TouchableHighlight>  
                )
            }}
          />
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    minHeight: 40,
    flex: 1,
    borderRadius: 5
  }
})

export default GoalsList
import { View, Text ,StatusBar} from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HomeScreen = ({route}) => {
    const {name} = route.params;
  return (
    
    <View style={tw`flex-1 justify-center items-center bg-sky-400`}>
         <StatusBar style="light" translucent={true} backgroundColor="transparent"></StatusBar>
      <Text style={tw`text-2xl text-white font-bold`}>Xin chào,  {name}</Text>
    </View>
  )
}

export default HomeScreen
import React, {useEffect , useState} from 'react'
import { Text, View , TextInput, TouchableOpacity, FlatList , StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import CountryOption from '../../components/CountryOption'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountryData } from '../../store/countryReducer'

const country = [{id:1,name:"Azerbaijan" , code:"+994"}]
const CountryScreen = () => {
  const countrylist = useSelector(state => state.country.countries);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCountryData())
  },[])

  const handleFilterPress = () => {
    setShowInput(true);
  };

  const handleCancelPress = () => {
    setShowInput(false);
    setInputText('');
  };

  const filteredCountries = countrylist && countrylist.filter((item) =>
    item.name.toLowerCase().includes(inputText.toLowerCase())
  );


  
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      {showInput ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Filter items"
            autoFocus
          />
          <TouchableOpacity onPress={handleCancelPress}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text>Select Country</Text>
          <TouchableOpacity onPress={handleFilterPress}>
          <Icon name="filter" color="red" size={30} />
          </TouchableOpacity>
        
        </>
      )}
      </View>
      <FlatList data={filteredCountries} renderItem={({item}) => <CountryOption country={item} />} />
    </View>
  )
}

const styles =  StyleSheet.create({
  container:{
    flex: 1,
    padding: 4,
    backgroundColor: "#F5F5F5",
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
 
})

export default CountryScreen
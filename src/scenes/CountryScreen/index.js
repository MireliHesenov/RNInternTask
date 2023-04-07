import React, {useEffect , useState} from 'react'
import { Text, View , TextInput, TouchableOpacity, FlatList , StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import CountryOption from '../../components/CountryOption'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountryData } from '../../store/countryReducer'
import CustomInput from '../../components/CustomInput'
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent'

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
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
      <View style={styles.header}>
      {showInput ? (
        <View style={styles.inputContainer}>
          <CustomInput  value={inputText}
            onChange={(text) => setInputText(text)}
            placeholder="Filter items"
            iconName="filter"
            autoFocus />
        </View>
      ) : (
        <>
          <Text style={styles.headerText}>Select Country</Text>
          <TouchableOpacity onPress={handleFilterPress}>
          <Icon name="filter" color="#005B96" size={25} />
          </TouchableOpacity>
        
        </>
      )}
      </View>
      <FlatList data={filteredCountries} renderItem={({item}) => <CountryOption country={item} />} />
    </View>
    </KeyboardAvoidingComponent>
    
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
    justifyContent:"space-between",
    padding:4
  },
  inputContainer:{
    flex:1,
    alignItems:"stretch",
  },
  headerText:{
    color:"#141414",
    fontSize: 20
  }
 
})

export default CountryScreen
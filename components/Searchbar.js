import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import DetailsArea from './DetailsArea';

const SearchBar = () => {
  const [takeInput, settakeInput] = useState('')
  const [movieData, setMovieData] = useState({});
  const urls = process.env.EXPO_PUBLIC_API_URL

  const handleSearch = async (moviename) => {
   
    const url = `${urls}?search_value=${moviename}&search_type=1`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.EXPO_PUBLIC_X_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.EXPO_PUBLIC_X_RAPID_API_HOST
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();;
      // console.log(data);
      setMovieData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>

      <TextInput
        editable
        placeholder='Search...'
        // numberOfLines={4}
        maxLength={40}
        onChangeText={takeInput => settakeInput(takeInput)}
        value={takeInput}
        style={{ padding: 10 }}
      />
      <Button style={styles.Searchbutton} title='Search' onPress={() => handleSearch(takeInput)} />
      <DetailsArea movieData={movieData} />
    </View>
  )
}
const styles = StyleSheet.create({
  Searchbutton: {
    padding: 1
  },
})
export default SearchBar
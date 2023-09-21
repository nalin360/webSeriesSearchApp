import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const DetailsArea = ({ movieData }) => {
  if (!movieData || !movieData.results || movieData.results.length == 0) {
    return <Text>No data available</Text>;
  }

  // Render each item in the list
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        {item.image_url ? (
          <Image source={{ uri: item.image_url }} style={styles.itemImage} />
        ) : (
          <View style={styles.noImageContainer}>
            <Text>No Image</Text>
          </View>
        )}
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemType}>{item.type}</Text>
        <Text style={styles.itemYear}>{item.year}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movieData.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 5,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
  },
  noImageContainer: {
    width: 100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  itemType: {
    fontSize: 14,
    color: 'gray',
  },
  itemYear: {
    fontSize: 14,
    color: 'gray',
  },
});

export default DetailsArea;

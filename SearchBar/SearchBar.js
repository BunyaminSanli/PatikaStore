import React from "react";
import { View, TextInput } from "react-native";
import { StyleSheet } from "react-native";


function SearchBar() {
    
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Ara..."
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      padding: 8,
    },

    textInput: {
      fontSize: 18,
      padding: 10,
      height: 50,
      borderRadius: 10,
      backgroundColor: "#ecef",
      color: "#000",
    },
  });

  export default SearchBar;
  
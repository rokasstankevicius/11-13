import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useAdContext } from './Global/AdContext';

const AddItemScreen = ({ navigation }) => {
  const [ newItemText, setNewItemText ] = useState('');
  const [ newItemDescription, setNewItemDescription ] = useState('');
  const [ newItemPrice, setNewItemPrice ] = useState('');
  const { handleAddItem } = useAdContext();

  const handleAddItemPress = () => {
    if (newItemText.trim() && newItemDescription.trim() && newItemPrice.trim()) {
      const newItem = {
        id: String(Math.random()),
        title: newItemText,
        description: newItemDescription,
        price: newItemPrice,
      };
      handleAddItem(newItem);
      setNewItemText('');
      navigation.goBack();
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter title"
        value={newItemText}
        onChangeText={text => setNewItemText(text)}
      />
      <TextInput
        placeholder="Enter description"
        value={newItemDescription}
        onChangeText={text => setNewItemDescription(text)}
      />
      <TextInput
        placeholder="Enter price"
        value={newItemPrice}
        onChangeText={text => setNewItemPrice(text)}
        keyboardType='numeric'
      />
      <Button title="Add" onPress={handleAddItemPress} />
    </View>
  );
};

export default AddItemScreen;
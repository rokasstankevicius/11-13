import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useAdContext } from './Global/AdContext';

const UpdateItemScreen = ({ route, navigation }) => {
  const { data, handleUpdateItem } = useAdContext();
  const { itemId } = route.params;
  const currentItem = data.find(item => item.id === itemId);
  const [updatedTitle, setUpdatedTitle] = useState(currentItem ? currentItem.title : '');
  const [updatedDescription, setUpdatedDescription] = useState( currentItem ? currentItem.description : '');
  const [updatedPrice, setUpdatedPrice] = useState(currentItem ? currentItem.price : '');

  const handleUpdateItemPress = () => {
    if (updatedTitle.trim()) {
      handleUpdateItem(itemId, {
        title: updatedTitle,
        description: updatedDescription,
        price: updatedPrice,
      });
      navigation.goBack();
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter updated title"
        value={updatedTitle}
        onChangeText={text => setUpdatedTitle(text)}
      />
      <TextInput
        placeholder="Enter updated description"
        value={updatedDescription}
        onChangeText={text => setUpdatedDescription(text)}
      />
      <TextInput
        placeholder="Enter updated price"
        value={updatedPrice}
        onChangeText={text => setUpdatedPrice(text)}
        keyboardType="numeric"
      />
      <Button title="Update" onPress={handleUpdateItemPress} />
    </View>
  );
};

export default UpdateItemScreen;

import React, { useEffect, useRef } from 'react';
import { View, FlatList, Text, Button, Animated  } from 'react-native';
import { useAdContext } from './Global/AdContext';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ListScreen = ({ navigation }) => {
  const { data, handleDeleteItem, handleUpdateItem } = useAdContext();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const renderItem = ({ item }) => (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0],
            }),
          },
        ],
      }}
    >
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>€{item.price}</Text>
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
          <View style={{ marginRight: 10 }}>
            <Button title="Delete" onPress={() => handleDeleteItem(item.id)} />
          </View>
          <Button
            title="Update"
            onPress={() => navigation.navigate('Update', { itemId: item.id })}
          />
        </View>
      </View>
    </Animated.View>
  );
  

  return (
    <View>
      <Button title="Add Item" onPress={() => navigation.navigate('Add')} 
        transitionSpec={{
          open: { animation: 'timing', config: { duration: 400 } },
          close: { animation: 'timing', config: { duration: 400 } },
        }}
      />
      <AnimatedFlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

export default ListScreen;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen_A from './HomeScreen';
import Screen_B from './AddAd';
import Screen_C from './UpdateAd';
import { AdProvider } from './Global/AdContext';


const Stack = createStackNavigator();


function App() {
  
  return (
    <AdProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="List"
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                    {
                      translateX: next
                        ? next.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -layouts.screen.width],
                          })
                        : 1,
                    },
                  ],
                },
              };
            },
          }}
        >
          <Stack.Screen name="Home" component={Screen_A} />
          <Stack.Screen name="Add" component={Screen_B} />
          <Stack.Screen name="Update" component={Screen_C} />
        </Stack.Navigator>
      </NavigationContainer>
    </AdProvider>
  );
}


export default App;

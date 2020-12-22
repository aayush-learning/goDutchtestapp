import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './screens/Details';
import Home from './screens/Home';
import SetUp from './screens/SetUp';

const Stack = createStackNavigator();

const appStackScreens = { home: Home, setup: SetUp, details: Details };

export const createCustomScreenStack = ({
  screens,
  headerMode = 'none',
  customScreenOptions = {},
  customOptions = {},
}) => (
  <Stack.Navigator screenOptions={customScreenOptions} headerMode={headerMode}>
    {Object.entries(screens).map(([name, component]) => (
      <Stack.Screen options={customOptions} key={name} name={name} component={component} />
    ))}
  </Stack.Navigator>
);

const appStack = (screens) => createCustomScreenStack({ screens });

export const Route = () => <NavigationContainer>{appStack(appStackScreens)}</NavigationContainer>;

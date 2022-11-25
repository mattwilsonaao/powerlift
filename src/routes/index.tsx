import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RpeCalculator from '../screens/Drawer/RPECalculator';
import WorkoutDetails from '../screens/Drawer/Workouts/WorkoutDetails';
import Workouts from '../screens/Drawer/Workouts';
import { AntDesign } from '@expo/vector-icons';
import { Pressable, useTheme } from 'native-base';
import { useCallback } from 'react';
import { Workout } from '../interfaces/types';
import AddWorkout from '../screens/Drawer/Workouts/AddWorkout';
import Dashboard from '../screens/Dashboard';
import Drawer from '../screens/Drawer';

type Routes = {
  Drawer: undefined;
  Dashboard: undefined;
  Workouts: any;
  RpeCalculator: undefined;
  WorkoutDetails: {
    details: Workout;
  };
  AddWorkout: undefined;
};

export type RootStackParamList = Routes;

const Routes = () => {
  const { colors } = useTheme();
  const { Navigator, Screen } = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef();

  const back = useCallback(
    () => navigationRef.current?.goBack(),
    [navigationRef]
  );

  const headerLeft = () => (
    <Pressable onPress={back}>
      <AntDesign
        name='arrowleft'
        size={24}
        color='black'
      />
    </Pressable>
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName='Drawer'
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.gray[600]
          },
          headerLeft,
          headerTitleAlign: 'center'
        }}
      >
        <Screen
          name='Drawer'
          component={Drawer}
          options={{
            headerShown: false
          }}
        />
        <Screen
          name='Dashboard'
          component={Dashboard}
        />
        <Screen
          name='Workouts'
          component={Workouts}
        />
        <Screen
          name='RpeCalculator'
          component={RpeCalculator}
        />
        <Screen
          name='WorkoutDetails'
          component={WorkoutDetails}
          options={{
            headerTitle: ''
          }}
        />
        <Screen
          name='AddWorkout'
          component={AddWorkout}
          options={{ headerTitle: '' }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
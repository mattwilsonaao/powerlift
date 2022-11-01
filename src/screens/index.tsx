import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './Drawer';
import Dashboard from './Drawer';
import RpeCalculator from './RpeCalculator';
import WorkoutDetails from './WorkoutDetails';
import Workouts from './Workouts';
import { AntDesign } from '@expo/vector-icons';
import { Pressable, useTheme } from 'native-base';
import { useCallback } from 'react';

type Routes = {
  Drawer: undefined;
  Dashboard: undefined;
  Workouts: any;
  RpeCalculator: undefined;
  WorkoutDetails: {
    details: {
      workout: [
        {
          compound: {
            name: string;
            rpe: string;
            sets: string;
          };
          name: string;
        }
      ];
    };
  };
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
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;

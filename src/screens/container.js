import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import authScreen from './authScreen';
import homeScreen from './homeScreen';

const AppScreenContainer = createAppContainer(
    createSwitchNavigator({
        authScreen,
        home: createStackNavigator({
            homeScreen
        })
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    })
);

export default AppScreenContainer;

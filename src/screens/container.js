import { createAppContainer, createStackNavigator } from 'react-navigation';
import authScreen from './authScreen';

const AppScreenContainer = createAppContainer(
    createStackNavigator({
        authScreen
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    })
);

export default AppScreenContainer;

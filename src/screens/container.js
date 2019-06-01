import React from 'react';
import { ScrollView, View } from 'react-native';
import { Image } from 'react-native-elements';
import { 
    createAppContainer,
    createDrawerNavigator,
    createSwitchNavigator,
    DrawerItems,
    SafeAreaView,
    createStackNavigator
} from 'react-navigation';
import { safeAreaViewStyle } from '../css/DrawerNavigationCSS';
import authScreen from './authScreen';
import invScreen from './invScreen';
import peticionesScreen from './peticionesScreen';
import perfilScreen from './perfilScreen';
import newItemScreen from './newItemScreen';
import userIcon from '../icons/userIcon.png';

const contentComponent = (props) => (
    <ScrollView>
        <SafeAreaView>
            <View style={safeAreaViewStyle}>
                <Image
                source={userIcon}
                style={{ height: 150, width: 150 }}
                />
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
  );
const AppScreenContainer = createAppContainer(
    createSwitchNavigator({
        authScreen,
        home: createDrawerNavigator({
            inventario: invScreen,
            peticiones: peticionesScreen,
            perfil: perfilScreen
        }, {
            defaultNavigationOptions: {
                
            },
            initialRouteName: 'perfil',
            contentComponent
        }),
        newItem: createStackNavigator({
            newItemScreen
        })
    })
);

export default AppScreenContainer;

import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

export const authgContainerStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: screenWidth / 1.5,
    height: screenheight / 2,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    justifyItems: 'baseline'
};

export const authScreenContainer = {
    backgroundColor: '#ECF0EF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
};

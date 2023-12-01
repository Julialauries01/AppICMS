import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainAdm from '../screens/MainAdm'
import MainUser from '../screens/MainUser';
import InsertProducts from '../screens/InsertProducts';
import EditProducts from '../screens/EditProducts';

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){

   return(
      <Navigator>

         <Screen 
            name="MainUser" 
            component={MainUser}
         />

         <Screen 
            name="MainAdm" 
            component={MainAdm}
         />
          <Screen 
            name="InsertProducts" 
            component={InsertProducts}
         />

         <Screen 
            name="EditProducts" 
            component={EditProducts}
         />
      </Navigator>
   )
}


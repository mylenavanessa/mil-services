import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Location from '../pages/Location'

const Router = createStackNavigator({
  Login, 
  SignUp,
  Location
})

export default createAppContainer(Router)
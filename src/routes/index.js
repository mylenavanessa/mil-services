import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Location from '../pages/Location'
import Profile from '../pages/Profile'

const Router = createStackNavigator({
  Login,
  SignUp,
  Location,
  Profile
})

export default createAppContainer(Router)
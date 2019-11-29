import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Location from '../pages/Location'
import Profile from '../pages/Profile'
import Person from  '../pages/Person'

const Router = createStackNavigator({
  Login,
  SignUp,
  Location,
  Profile,
  Person
})

export default createAppContainer(Router)
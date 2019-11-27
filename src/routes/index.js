import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const Router = createStackNavigator({
  Login, 
  SignUp
})

export default createAppContainer(Router)
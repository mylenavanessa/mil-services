import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Location from '../pages/Location'
import Profile, { navigationOptions } from '../pages/Profile'

const Router = createStackNavigator({
  Login,
  Profile: {
    screen: Profile,
    navigationOptions: navigationOptions,
  },
  SignUp,
  Location,
})

export default createAppContainer(Router)
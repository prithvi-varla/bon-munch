import ThemeOptions from './ThemeOptions';
import Dashboard from './dashboard_reducer';
import Login from './login_reducer';
import Image from './image_reducer';
import SiteSetting from './setting_reducer';
import ProfileSetting from './profile_reducer';
import Product from './product_reducer';
import Orders from './order_reducer';
import Categories from './category_reducer';
import { reducer as formReducer } from 'redux-form';

export default {
  form: formReducer,
  ThemeOptions,
  Dashboard,
  Login,
  Image,
  SiteSetting,
  ProfileSetting,
  Product,
  Orders,
  Categories
};

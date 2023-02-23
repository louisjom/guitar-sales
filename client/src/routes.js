import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';
import Loader from 'utils/loader';
import AuthenticationCheck from './hoc/authGuard';


import { useDispatch, useSelector } from 'react-redux';
import { userIsAuth ,userSignOut } from 'store/actions/user.actions';

import Header from './components/navigation/header';
import Footer from './components/navigation/footer';
import Home from './components/home';
import RegisterLogin from './components/auth';
import Shop from './components/shop';
import ProductDetail from './components/product';

import Dashboard from './components/dashboard';
import UserInfo from './components/dashboard/user/info';
import AdminProducts from './components/dashboard/admin/products';
import AddProduct from './components/dashboard/admin/products/addedit/add';
import EditProduct from './components/dashboard/admin/products/addedit/edit';
import UserCart from './components/dashboard/user/cart';
import ManageSite from  './components/dashboard/admin/site';

const AllRoutes = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();


  const signOutUser = () => {
    dispatch(userSignOut())
  }


  useEffect(() => {
    dispatch(userIsAuth())
  }, [dispatch])


  useEffect(()=>{
    if(users.auth !== null){
      setLoading(false)
    }
  },[users])

  // const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  //   const WrappedComponent = AuthGuard(Component);
  //   return <Route {...rest} render={(props) => <WrappedComponent {...props} />} />;
  // };

  return (
    <BrowserRouter>
      { loading ?
        <Loader full={true} />
        :
        <>
          <Header 
            users={users}
            signOutUser={signOutUser}
          />
          <MainLayout>
            <Routes>
              <Route path="/dashboard/admin/edit_product/:id" element={<AuthenticationCheck><EditProduct /></AuthenticationCheck>} />
              <Route path="/dashboard/admin/add_products" element={<AuthenticationCheck><AddProduct /></AuthenticationCheck>} />
              <Route path="/dashboard/admin/manage_site" element={<AuthenticationCheck><ManageSite /></AuthenticationCheck>} />
              <Route path="/dashboard/admin/admin_products" element={<AuthenticationCheck><AdminProducts /></AuthenticationCheck>} />

              
              <Route path="/dashboard/user/user_cart" element={<AuthenticationCheck><UserCart users={users}/></AuthenticationCheck>} />
              <Route path="/dashboard/user/user_info" element={<AuthenticationCheck><UserInfo users={users}/></AuthenticationCheck>} />
              <Route path="/dashboard" element={<AuthenticationCheck><Dashboard users={users}/></AuthenticationCheck>} />
              
              
              <Route path="/product_detail/:id" element={<ProductDetail/>} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/sign_in" element={<RegisterLogin/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </MainLayout>
          <Footer />
        </>
      }


    </BrowserRouter>
  );
}

export default AllRoutes;

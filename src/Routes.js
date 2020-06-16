import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import bonMunchLogo from './assets/images/bon-munch.png';
// Layout Blueprints

import {
LeftSidebar,
PresentationLayout,
} from './layout-blueprints';

const BonMunch = lazy(() => import('./components/BonMunch'));
const DashboardDefault = lazy(() => import('./components/DashboardDefault'));
const Orders = lazy(() => import('./components/Orders'));
const Profile = lazy(() => import('./components/Profile'));
const Gallery = lazy(() => import('./components/Gallery'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const AddImage = lazy(() => import('./components/AddImage'));
const LoginPage = lazy(() => import('./components/Login'));
const LogoutPage= lazy(() => import('./components/Logout'));
const InitialSetup = lazy(() => import('./components/InitialSetup'));
const Categories = lazy(() => import('./components/Categories'));
const SubCategories = lazy(() => import('./components/SubCategories'));
const Products = lazy(() => import('./components/Products'));
const ProductDetails = lazy(() => import('./components/Products/ProductDetails'));
const CategoryDetails = lazy(() => import('./components/Categories/CategoryDetails'));
const SubCategoryDetails = lazy(() => import('./components/SubCategories/SubCategoryDetails'));

const Routes = () => {

const location = useLocation();

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.99
    },
    in: {
        opacity: 1,
        
        scale: 1
    },
    out: {
        opacity: 0,
        scale: 1.01
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
};

return (
<AnimatePresence>
        <Suspense fallback=
        {
        <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
            <div className={'loading-wrapper'}>
                <div className={'loading'}>
                    <div className={'background'}>
                        <img src={bonMunchLogo} />
                    </div>
                    <div className={'spinner'} />
                </div>
            </div>
        </div>
        }>
        <Switch>
        <Route path={[  "/Products/NewEntry", "/Categories/NewEntry","/SubCategories/NewEntry" ]}>
                <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                    <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                    >
                    <Route path="/Products/NewEntry" component={ProductDetails} />
                    <Route path="/Categories/NewEntry" component={CategoryDetails} />
                    <Route path="/SubCategories/NewEntry" component={SubCategoryDetails} />
                    </motion.div>
                </Switch>
                </LeftSidebar>
            </Route>
            <Route path={[ "/DashboardDefault", "/Orders","/Profile", "/Gallery", "/AddImage", "/LandingPage",  "/Maps", "/InitialSetup", "/Categories", "/SubCategories", "/Products", "/Logout" ]}>
                <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                    <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                    >
                        <Route path="/DashboardDefault" component={ DashboardDefault } />
                        <Route path="/Orders" component={ Orders } />
                        <Route path="/Profile" component={ Profile } />
                        <Route path="/Gallery" component={ Gallery } />
                        <Route path="/LandingPage" component={ LandingPage } />
                        <Route path="/AddImage" component={ AddImage } />
                        <Route path="/InitialSetup" component={ InitialSetup } />
                        <Route path="/Categories" component={ Categories } />
                        <Route path="/SubCategories" component={ SubCategories } />
                        <Route path="/Products" component={Products} />
                        <Route path="/Logout" component={LogoutPage} />
                    </motion.div>
                </Switch>
                </LeftSidebar>
            </Route>

            <Route path={[  "/LoginPage"  ]}>
                <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                    <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                    >
                    <Route path="/" component={ LoginPage } />
                    </motion.div>
                </Switch>
                </PresentationLayout>
            </Route>

            <Route path={[  "/"  ]}>
                <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                    <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            //variants={pageVariants}
                            //transition={pageTransition}
                    >
                    <Route path="/" component={ BonMunch } />
                    </motion.div>
                </Switch>
                </PresentationLayout>
            </Route>

        </Switch>
    </Suspense>
</AnimatePresence>
    );
};

export default Routes;

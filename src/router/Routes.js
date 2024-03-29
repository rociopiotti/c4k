import React from "react";

// ROUTER
import { BrowserRouter, Route, Switch } from "react-router-dom";

// CONTEXT
import PageManagerContext from "../context/pageManager-context";

// COMPONENTS
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Faq from "../components/Faq/Faq";
import Stores from "../components/Stores/Stores";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import GridContainer from "../components/GridContainer/GridContainer";
import ProductBox from "../components/ProductBox/ProductBox";
import Checkout from "../components/Checkout/Checkout";
import PaymentGateway from "../components/PaymentGateway/PaymentGateway";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SlideManager from "../components/SlideManager/SlideManager";
import SearchResults from "../components/SearchResults/SearchResults";
import PaymentConfirmation from "../components/PaymentConfirmation/PaymentConfirmation";

const Routes = () => {
  return (
    <PageManagerContext.Consumer>
      {(context) => (
        <BrowserRouter basename="/">
          <SlideManager />
          <Header />
          <Switch>
            <Route path='/products/:category/:name' component={ProductBox} />
            <Route path='/products/:category' component={GridContainer} />
            <Route path='/products' component={GridContainer} />
            <Route path='/paymentgateway/orderconfirmation' component={PaymentConfirmation} />
            <Route path='/paymentgateway' component={PaymentGateway} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/about' component={About} />
            <Route path='/stores' component={Stores} />
            <Route path='/help' component={Faq} />
            <Route path='/privacypolicy' component={PrivacyPolicy} />
            <Route path='/termsandconditions' component={TermsAndConditions} />
            <Route path='/searchresults' component={SearchResults} />
            <Route path='/home' component={Home} />
            <Route path='/' component={Home} />
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </PageManagerContext.Consumer>
  );
};

export default Routes;

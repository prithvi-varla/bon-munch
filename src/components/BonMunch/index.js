import React, { Component } from "react";

import Motorhome from "../../assets/images/bonmunch/img/Shopping_cart_with_food_clip_art.svg";
import MapLight from "../../assets/images/bonmunch/img/map_light.svg";
import Support from "../../assets/images/bonmunch/img/support.svg";
import MobilePhone from "../../assets/images/bonmunch/img/mobile-phone.svg";
import Inbox from "../../assets/images/bonmunch/img/inbox.svg";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import StepsContainer, {
  StepsHeader,
  Steps,
  Step,
  StepMedia,
  StepText,
  StepsMoreInfo,
  StepsInfo
} from "../../layout-components/Steps";
import FullSection, {
  SectionContent,
  SectionText,
  SectionTitle,
  SectionMediaItinerary
} from "../../layout-components/FullSection";
import FAQs from "../../components/Faqs";
import Prices from "../../layout-components/Prices";
import faqQuestions from "../../static-data/faq-questions";
import Button from "../../layout-components/Inputs/button";
import IconLabel from "../../layout-components/IconLabel";
import SmartphoneIcon from "../../layout-components/Svg/smartphone";
import ContactForm from "./components/contact-form";
import Helmet from "react-helmet";
import { smoothScrollToSelector, isSSR } from "../../commons/utils";

import TransparentNavbar from "../../layout-components/TransparentNavbar";

class BonMunch extends Component {
  componentDidMount() {
    this.jumpToHash();
    if (window.Trustpilot !== undefined) {
      var trustbox = document.getElementById("trustbox");
      window.Trustpilot.loadFromElement(trustbox);
    }
  }

  componentDidUpdate() {
    this.jumpToHash();
  }

  jumpToHash = () => {
    if (!isSSR()) {
      const hash = window.location.hash;
      if (hash) {
        smoothScrollToSelector(hash, 20);
      }
    }
  };

  render() {
    return (
      <TransparentNavbar>
        <Helmet>
          <title>
            BonMunch
          </title>
          <meta
            name="description"
            content="BonMunch"
          />
        </Helmet>
        <Hero withSub />

        <StepsContainer>
          <StepsHeader id="whyBonMunch">
            <h2 id="why-bonMunch">Why BonMunch?</h2>
            <p>
              Here are some reasons why you should use BonMunch application
            </p>
          </StepsHeader>
          <Steps>
            <Step>
              <StepMedia src={MapLight} />
              <h4>Order Menu Management</h4>
              <StepText>
              Professionally designed out of the box, go online 
              without needing to type a single line of code. 
              Need to make important changes to your menu? 
              Do it in minutes with our tried and tested user flow.
              </StepText>
            </Step>
            <Step>
              <StepMedia src={Motorhome} />
              <h4>Branded Shopping Cart</h4>
              <StepText>
              We've taken care of that for you, with pages that load 
              blazing fast and are fully responsive on any screen.
              </StepText>
            </Step>
            <Step>
              <StepMedia src={Support} />
              <h4>Analytics & Assistance </h4>
              <StepText>
              You can contact us 24/7 to ask for our help with 
              absolutely any problem you encounter. By phone, 
              email or video conference.
              </StepText>
            </Step>
          </Steps>
          <StepsMoreInfo text="see all extra features">
            <StepsInfo text="No Design Expertise Required" />
            <StepsInfo text="Optimized and Responsive Over Multiple Screens" />
            <StepsInfo text="Automated Orders Management" />
            <StepsInfo text="F&B Specific Features" />
            <StepsInfo text="Discover Your Top Performing Items" />
            <StepsInfo text="24/7 Assistance" />
          </StepsMoreInfo>
        </StepsContainer>

        <FullSection>
          <div>
            Some of our Customers
          </div>
        </FullSection>

        <FullSection >
          <SectionContent>
            <SectionTitle>Payments & Logistics Integration</SectionTitle>
            <SectionText>
              Allow The Choice of Multiple Payment Methods For Your Customers
            </SectionText>
            <SectionText>
             Be it cash on delivery, credit card, or bank transfers, we allow 
             the flexibility of offering your customers multiple payment methods.
             We are integrated with multiple payment gateways across various countries.
            </SectionText>
            <h4>What are the future integrations?</h4>
            <div className="container itinerary__content">
              <IconLabel text="Integration with PayPal" />
              <IconLabel text="Built in POS" />
              <IconLabel text="Any 3rd party services per customer" />
            </div>
          </SectionContent>
          <SectionMediaItinerary />
        </FullSection>

        <FullSection oneCol={true}>
          <SectionTitle id="prices">Prices</SectionTitle>
          <Prices />
        </FullSection>

        <StepsContainer>
          <StepsHeader>
            <h2 id="contact">Contact us</h2>
            <p>
              Do not hesitate to contact us for any questions or assistance you encounter. We're here to help you!
            </p>
          </StepsHeader>

          <Steps className="contact__container">
            <Step>
              <StepMedia src={Inbox} />
              <h4>Email</h4>
              <StepText>
                Write us an email with anything you would like to know or to get starting.
              </StepText>

              <a
                href="mailto:prithvi.varla@gmail.com"
                title="Email BonMunch"
                className="contact__email"
                ga-on="click,auxclick,contextmenu"
                ga-event-category="Link"
                ga-event-action="prithvi.varla@gmail.com"
                ga-event-label="contact us"
              >
                prithvi.varla@gmail.com
              </a>
            </Step>
            <Step>
              <StepMedia src={MobilePhone} />
              <h4>Phone</h4>
              <StepText>
                Call us for any questions or assistance you needed!
              </StepText>
              <Button
                type="accent"
                className="contact__phone"
                onClick={() => window.open("tel:+1 806-392-5237", "_self")}
                renderIcon={() => <SmartphoneIcon color="#fff" width="20" />}
                ga-on="click,auxclick,contextmenu"
                ga-event-category="Button"
                ga-event-action="806-392-5237"
                ga-event-label="contact us"
              >
                806-392-5237
              </Button>

              <div>
                <small>available 24/7</small>
              </div>
            </Step>

            <Step>
              <h4>Reach us through message</h4>
              <ContactForm />
            </Step>
          </Steps>
        </StepsContainer>

        <FullSection oneCol={true}>
          <SectionTitle>Frequent Questions</SectionTitle>
          <FAQs questions={faqQuestions} />
        </FullSection>

      </TransparentNavbar>
    );
  }

}

export default BonMunch;

  /*


const BonMunch = props => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-midnight-bloom min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-6"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-skim-blue opacity-2" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <div className="container pb-5">
              <Row>
                <Col lg="4" className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <Badge
                      pill
                      color="info"
                      className="px-4 text-uppercase h-auto py-1"
                      id="ProjVersion123">
                      BonMunch
                    </Badge>
                    <UncontrolledTooltip
                      placement="top"
                      target="ProjVersion123">
                      Version: 1.0.0
                    </UncontrolledTooltip>
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        BonMunch App
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        ecommerce app
                      </p>
                      <p className="text-white font-size-lg">
                        The ecommerce site with all the features.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );

  };

export default BonMunch;

  */

import React, { useState } from "react";
import { check, financingFive, financingFour, financingOne, financingThree, financingTwo, unCheck } from "../../../assets/icons";
import { BlogView, Footer, NavBar, TextInput } from "../../../components";
import './financing.css'

export default function Financing() {
  const [terms, setTerms] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [businessLocated, setBusinessLocated] = useState('')
  const businessLocatedArray = [
    {
      id: 1,
      title: 'Pakistan',
    },
    {
      id: 2,
      title: 'Australia',
    },
    {
      id: 3,
      title: 'Canada',
    },
    {
      id: 4,
      title: 'Other'
    }
  ]

  return (
    <div className="alpha-calculator-main_container">
      <BlogView />
      <NavBar />
      <div className="alpha_detail_page_container">
        <div className="alpha-financing-top_container">
          <div className="alpha-financing-detail_container">
            <h1>Get expert advice to help you make the right decision</h1>
            <h3>When the economy pivots, you need to be able to do the same with your equipment & truck needs. But you need to know your options – and we can help.Maecenas sagittis hendrerit porta. Quisque nec tempor justo, quis malesuada quam. Ut in magna non risus vestibulum eleifend. Nullam fringilla tempor neque. Phasellus maximus nulla nec dui molestie tristique non vel nulla.</h3>
            <h3>Our 200+ Ritchie Bros. equipment financing specialists are here to listen and expertly guide you through these unpredictable times – whatever the situation – with proven finance solutions.</h3>
            <h2>What sets Ritchie Bros. Financial Services apart?</h2>
            <h3>Maecenas sagittis hendrerit porta. Quisque nec tempor justo, quis malesuada quam. Ut in magna non risus vestibulum eleifend. Nullam fringilla tempor neque. Phasellus maximus nulla nec dui molestie tristique non vel nulla.</h3>
          </div>
          <div className="alpha-financing-services_top_view">
            <div>
              <img src={financingOne} className="alpha-financing-services_image_one" />
              <h3>Flexible finance options</h3>
              <h4>Maecenas sagittis hendrerit porta. Quisque nec tempor justo, quis malesuada quam.</h4>
            </div>
            <div>
              <img src={financingTwo} className="alpha-financing-services_image_two" />
              <h3>10+ years of equipment financing</h3>
              <h4>And tens of thousands of satisfied customers Ut in magna non risus vestibulum eleifend.</h4>
            </div>
            <div>
              <img src={financingThree} className="alpha-financing-services_image_three" />
              <h3>$1B+ in open credit approvals</h3>
              <h4>Helping businesses of all sizes & situations Ut in magna non risus vestibulum eleifend.</h4>
            </div>
            <div className="alpha-financing-margin_left" >
              <img src={financingFour} className="alpha-financing-services_image_four" />
              <h3>Approvals in as little as one day</h3>
              <h4>Maecenas sagittis hendrerit porta. Quisque nec tempor justo, quis malesuada quam.</h4>
            </div>
            <div className="alpha-financing-margin_right">
              <img src={financingFive} className="alpha-financing-services_image_five" />
              <h3>Your equipment & financing one-stop-shop</h3>
              <h4>To access Ritchie Bros. full suite of services, solutions, and insights</h4>
            </div>
          </div>

          <div className="alpha-financing-steps_title_view">
            <h2>Heavy Equipment Financing</h2>
            <h3>Apply for up to 100% financing with $0 down payment. Financing Services Approed customers may have deposit waived.</h3>
          </div>
          <div className="alpha-financing-inputs_top_view">
            <div>
              <TextInput
                disabled
                selectedValue={(item) => setBusinessLocated(item.title)}
                value={businessLocated}
                // onClickDropDown={() => setShowDropdown(!showDropdown)}
                dropDownArray={businessLocatedArray}
                dropDownValue={showDropdown}
                type={'dropdown'}
                title={'Where is your business located?'}
                placeholder={'Select Country'} />
            </div>
            <div>
              <TextInput
                title={'Amount Requird'}
                placeholder={'Enter required amount'} />
            </div>
            <div>
              <TextInput
                title={'Legal Business Name'}
                placeholder={'Enter your business name'} />
            </div>
            <div>
              <TextInput
                title={'Phone Number'}
                placeholder={'Enter your phone number'} />
            </div>
            <div>
              <TextInput
                title={'Email'}
                placeholder={'Enter your email'} />
            </div>
            <div>
              <TextInput
                title={'Business Type'}
                placeholder={'Select your business type'} />
            </div>
          </div>
          <div onClick={() => setTerms(!terms)} className="alpha-financing-terms_view">
            <img src={terms ? check : unCheck} />
            <h2>By tapping confirm, you agree to the <span style={{ fontWeight: 500, color: '#0072DB' }}>terms of service</span> and <span style={{ fontWeight: 500, color: '#0072DB' }}>privacy policy</span> of app name</h2>
          </div>
          <div className="alpha-financing-inputs_view_button">
            <div>
              <h2>NEXT</h2>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>

  );
}

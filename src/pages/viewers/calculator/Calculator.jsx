import React, { useState } from "react";
import { calculatorImage, distance, dummyFour } from "../../../assets/icons";
import { BlogView, Footer, NavBar, TextInput } from "../../../components";
import './calculator.css'
import { useNavigate } from "react-router-dom";

export default function Calculator() {
  const navigate = useNavigate()
  const [showcalculation, setShowCalculation] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [equipmentType, setEquipmentType] = useState('')
  const equipmentTypeArray = [
    {
      id: 1,
      title: 'Transport Truck',
    },
    {
      id: 2,
      title: 'Earth Moving',
    },
    {
      id: 3,
      title: 'Lifting Material',
    },
    {
      id: 4,
      title: 'Other'
    }
  ]
  const similarProArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]

  return (
    <div className="alpha-calculator-main_container">
      <BlogView />

      <NavBar />
      <div className="alpha_detail_page_container">
        <div className="alpha_calculator_main_container">
          <h1>Equipment Value Estimator</h1>
          <h2>We have developed statistical pricing models for<span style={{ fontWeight: 600 }}> 6,996 models</span> with <span style={{ fontWeight: 600 }}>7,090 variants</span> across <span style={{ fontWeight: 600 }}>671 makes</span> based on publicly available for-sale listings to help buyers and sellers determine current market pricing. The sample size used in developing our pricing models are listed after each make and model.</h2>
          <div className="alpha_calculator_inputs_top_view">
            <div>
              <TextInput
                disabled
                selectedValue={(item) => setEquipmentType(item.title)}
                value={equipmentType}
                onClickDropDown={() => setShowDropdown(!showDropdown)}
                dropDownArray={equipmentTypeArray}
                dropDownValue={showDropdown}
                type={'dropdown'}
                inputStyle={{ width: 193 }}
                title={'Equipment Type'}
                placeholder={'Select type'} />
            </div>
            <div>
              <TextInput inputStyle={{ width: 193 }} title={'Make'} placeholder={'Enter make'} />
            </div>
            <div>
              <TextInput inputStyle={{ width: 193 }} title={'Year'} placeholder={'Enter year'} />
            </div>
            <div>
              <TextInput inputStyle={{ width: 193 }} title={'Model'} placeholder={'Enter model'} />
            </div>
            <div>
              <TextInput inputStyle={{ width: 193 }} title={'Mileage'} placeholder={'Enter mileage'} />
            </div>
            <div>
              <TextInput inputStyle={{ width: 193 }} title={'Meter'} placeholder={'Enter meter'} />
            </div>
          </div>
          <div className="alpha-calculator-buttion_view">
            <div onClick={() => setShowCalculation(!showcalculation)}>
              <h3>Calculate</h3>
            </div>
          </div>
          {showcalculation ?
            <div className="alpha-calculator-result_view">
              <h4>JOHN DEERE 1025R</h4>
              <h5>All Variants</h5>
              <h6>Taking only age into consideration, the UEG target price for this item is $13,672 with a fair market price being between $12,781 and $14,272.</h6>
              <p>Location can have a significant impact on market prices.</p>
            </div>
            :
            <div className="alpha-calculator-image_view">
              <img src={calculatorImage} />
            </div>
          }
        </div>
        {showcalculation &&
          <div className="alpha-calculator-similar_items_top_view">
            <div className="alpha-calculator-similar_items_text">
              <h1>Similar Items</h1>
            </div>
            <div className="alpha-calculator_divider" />
            {similarProArray.map((item) => {
              return (
                <div key={item.id}>
                  <div className="alpha-calculator_item_view">
                    <div className="alpha-calculator_item_image_view">
                      <img src={dummyFour} />
                    </div>
                    <div className="alpha-calculator_item_detail_view">
                      <h1>2016 Wacker Neuson RD12A Double Drum Roller</h1>
                      <h2>Location: <span style={{ fontWeight: 500 }}>Lorem ipsum dolor sit amet ipsum dolor sit</span></h2>
                      <div className="alpha-calculator-dis_and_km_top_view">
                        <div className="alpha-calculator-dis_view">
                          <h3>Hours Meter: 300h</h3>
                        </div>
                        <div className="alpha-calculator-dis_view">
                          <img src={distance} />
                          <h4>4.3 km</h4>
                        </div>
                      </div>
                      <h5>Catalogue Notes: <span style={{ fontWeight: 400 }}>Lorem ipsum dolor amuet, conse ctetur adipi scing elit. Vivamus at bibendum ante</span></h5>
                      <div className="alpha-home-page-spare_part_price_distance_view">
                        <p>{'Price: $8600'}</p>
                        <h6>Highest Bid:<span style={{ fontWeight: 700 }}> $5000</span></h6>
                      </div>
                    </div>
                  </div>
                  <div className="alpha-calculator_divider" />
                </div>
              )
            })}
          </div>
        }
        <Footer />
      </div>
    </div>

  );
}

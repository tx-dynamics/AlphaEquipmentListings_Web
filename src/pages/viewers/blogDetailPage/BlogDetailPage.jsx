import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyFour, dummyOne, dummyTwo, graphImage } from '../../../assets/icons'
import { BlogView, Footer, NavBar } from "../../../components";
import './blogDetailPage.css'
import CustomeInput from "./customInput";

export default function BlogDetailPage() {
  const navigate = useNavigate()

  const recentArray = [
    {
      id: 1,
      title: 'Minimizing Risk When Buying Used Equipment',
      date: 'November 23, 2022',
      image: dummyOne
    },
    {
      id: 2,
      title: 'Rouse Services issues Q3 crane report',
      date: 'November 17, 2022',
      image: graphImage
    },
    {
      id: 3,
      title: 'Rouse Services latest transportation market update',
      date: 'November 17, 2022',
      image: dummyTwo
    },
    {
      id: 4,
      title: 'Rouse Services latest transportation market update',
      date: 'November 17, 2022',
      image: dummyFour
    },
  ]


  return (
    <div className="alpha-home_page-main_container">
      <BlogView />

      <NavBar />
      <div className="alpha-home_page-container">
        <div className="alpha-blogpage_container">
          <div className="alpha-blogpage_top_image_view">
            <div>
              <h1>Alpha Equipment Listings</h1>
            </div>
          </div>
          <div className="alpha-blogdetailpage_blogs_top_view">
            <div className="alpha-blogdetailpage_blogs_grid_view">
              <div className="alpha-blogdetailpage_prodoct_top_view">
                <h1>Minimizing Risk When Buying Used Equipment</h1>
                <p>November 23, 2022</p>
                <div className="alpha-blogdetailpage_prodoct_img">
                  <img src={dummyFour} />
                </div>
                <div className="alpha-blogdetailpage_image_detail">
                  <h2>Despite the economic advantage of buying used equipment, some business owners shy away from this option because they fear the risk may outweigh the reward. At Ritchie Bros., we have PurchaseSafe™ to help guide buyers search and purchase used equipment with peace of mind.</h2>
                  <h2>Includes transaction management, taxation, lien search and payout coordination</h2>
                  <h2>Works perfectly with PurchaseFlex™ Financing. Buyers get access to great rates, promotional offers, and fast funding from Ritchie Bros. Financial Services</h2>
                  <h2>Our PurchaseSafe™ team at Ritchie Bros. Financial Services ensures the transaction goes smoothly. Here are the 5 areas they focus in on to ensure you don’t encounter any issues.</h2>
                  <h3>1. Buy from a reputable seller</h3>
                  <img src={dummyOne} />
                  <h2>It’s important to ensure you are dealing with a legitimate and reputable business by checking the following</h2>
                  <h4>Public company records.</h4>
                  <h2>The best way to protect yourself is to do business with companies that have a long history and large customer base. Publicly-traded companies are required to publish financial statements, so you can easily find out if the company is stable and likely to be in business over the long term.</h2>
                  <h4>Online reviews.</h4>
                  <h2>Google and Facebook are good places to find unbiased customer reviews. Once published, Google and Facebook reviews can’t be removed or edited by the Google Business or Facebook page owner.</h2>

                  <h4>Customer testimonials.</h4>
                  <h2>Many companies publish customer testimonials on their website. The more frequent, the better. Customer testimonials show that other equipment buyers are more than willing to endorse the seller.</h2>
                  <h4>Better Business Bureau.</h4>
                  <h2>Visit the Better Business Bureau in your area and search for the business from which you are considering buying used equipment. The Better Business Bureau maintains a list of businesses with contact information and reported consumer complaints.</h2>
                  <h3>2. Do a background check</h3>
                  <h2>Despite the economic advantage of buying used equipment, some business owners shy away from this option because they fear the risk may outweigh the reward. At Ritchie Bros., we have PurchaseSafe™ to help guide buyers search and purchase used equipment with peace of mind.</h2>
                  <h2>Includes transaction management, taxation, lien search and payout coordination</h2>
                  <img src={dummyTwo} />
                  <h2>Works perfectly with PurchaseFlex™ Financing. Buyers get access to great rates, promotional offers, and fast funding from Ritchie Bros. Financial Services</h2>
                  <h2>Despite the economic advantage of buying used equipment, some business owners shy away from this option because they fear the risk may outweigh the reward. At Ritchie Bros., we have PurchaseSafe™ to help guide buyers search and purchase used equipment with peace of mind. Despite the economic advantage of buying used equipment, some business owners shy away from this option because they fear the risk may outweigh the reward. At Ritchie Bros., we have PurchaseSaf</h2>
                  <h2>Works perfectly with PurchaseFlex™ Financing. Buyers get access to great rates, promotional offers, and fast funding from Ritchie Bros. Financial Services</h2>
                  <h3>3. Ensure clear title</h3>
                  <h2>Despite the economic advantage of buying used equipment, some business owners shy away from this option because they fear the risk may outweigh the reward. At Ritchie Bros., we have PurchaseSafe™ to help guide buyers search and purchase used equipment with peace of mind.</h2>
                  <h2>Includes transaction management, taxation, lien search and payout coordination</h2>
                  <h2>Works perfectly with PurchaseFlex™ Financing. Buyers get access to great rates, promotional offers, and fast funding from Ritchie Bros. Financial Services</h2>
                  <h3>4. Do a background check</h3>
                  <h2>Despite the economic advantage of buying used equipment, some business owners shy away from this option because they fear the risk may outweigh the reward. At Ritchie Bros., we have PurchaseSafe™ to help guide buyers search and purchase used equipment with peace of mind.</h2>
                  <h2>Includes transaction management, taxation, lien search and payout coordination</h2>
                  <h2>Works perfectly with PurchaseFlex™ Financing. Buyers get access to great rates, promotional offers, and fast funding from Ritchie Bros. Financial Services</h2>
                  <h2>Our PurchaseSafe™ team at Ritchie Bros. Financial Services ensures the transaction goes smoothly. Here are the 5 areas they focus in on to ensure you don’t encounter any issues.</h2>

                </div>
              </div>
              <div className="alpha-blogdetailpage_leave_reply_top_view">
                <h1>Leave a Reply</h1>
                <p>Your email address will not be published. Required fields are marked *</p>
                <CustomeInput textArea title={'Comment'} />
                <CustomeInput title={'Name'} />
                <CustomeInput title={'Email'} />
                <div className="alpha-blogdetailpage_leave_reply_button_view">
                  <div>
                    <h5>Post Comment</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="alpha-blogpage_second_view">
              <div className="alpha-blog-page_recents_top_view">
                <div className="alpha-blog-page_recents_header_view">
                  <h2>Recent</h2>
                </div>
                <div className="alpha-blogpage-recents_items_top_view">
                  {recentArray.map((item) => {
                    return (
                      <div key={item.id} className="alpha-blogpage-recents_items_view">
                        <img src={item.image} />
                        <div>
                          <h3>{item.title}</h3>
                          <h4>{item.date}</h4>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="alpha-blog-page_recents_top_view">
                <div className="alpha-blog-page_recents_header_view">
                  <h2>Popular</h2>
                </div>
                <div className="alpha-blogpage-recents_items_top_view">
                  {recentArray.map((item) => {
                    return (
                      <div key={item.id} className="alpha-blogpage-recents_items_view">
                        <img src={item.image} />
                        <div>
                          <h3>{item.title}</h3>
                          <h4>{item.date}</h4>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

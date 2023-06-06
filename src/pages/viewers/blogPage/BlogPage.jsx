import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyFour, dummyOne, dummyTwo, graphImage } from '../../../assets/icons'
import { BlogView, Footer, Loader, NavBar } from "../../../components";
import './blogPage.css'

export default function BlogPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const blogArray = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
  ]
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
      <Loader loading={isLoading} />

      <NavBar loaderValue={(data) => setIsLoading(data)} />
      <div className="alpha-home_page-container">
        <div className="alpha-blogpage_container">
          <div className="alpha-blogpage_top_image_view">
            <div>
              <h1>Blog</h1>
            </div>
          </div>
          <div className="alpha-blogpage_blogs_top_view">
            <div className="alpha-blogpage_blogs_grid_view">
              {blogArray.map((item) => {
                return (
                  <div onClick={() => navigate('/blogdetailpage')} key={item.id} className="alpha-blogpage_blogs_view">
                    <img src={dummyFour} />
                    <h2>Lorem ium dolor sit amet con ctetur adipiscing vulputate elit.</h2>
                    <h3>Despite the economic advantage of buying used equipment, some business owners shy away from this option because they....</h3>
                    <h4>November 23, 2022</h4>
                  </div>
                )
              })}
            </div>
            <div className="alpha-blogpage_second_view">
              <div className="alpha-blog-page_recents_top_view">
                <div className="alpha-blog-page_recents_header_view">
                  <h2>Recent</h2>
                </div>
                <div className="alpha-blogpage-recents_items_top_view">
                  {recentArray.map((item) => {
                    return (
                      <div onClick={() => navigate('/blogdetailpage')} key={item.id} className="alpha-blogpage-recents_items_view">
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
                      <div onClick={() => navigate('/blogdetailpage')} key={item.id} className="alpha-blogpage-recents_items_view">
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

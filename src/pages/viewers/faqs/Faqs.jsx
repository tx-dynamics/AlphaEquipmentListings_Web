import React, { useState } from "react";
import { addBlack, minusBlack } from "../../../assets/icons";
import { BlogView, Footer, NavBar, } from "../../../components";
import './faqs.css'
import { useNavigate } from "react-router-dom";

export default function Faqs() {
  const navigate = useNavigate()
  const [generalTopicArray, setGeneralTopicArray] = useState([
    {
      id: 1,
      title: 'Where can I watch?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 2,
      title: 'Tempus magna risus interdum ultricies sed urna?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 3,
      title: 'Augue in nibh urna volutpat mattis?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 4,
      title: 'Eu egestas sed sed posuere ultrices ?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    }
  ])
  const [beforeBidArray, setBeforeBidArray] = useState([
    {
      id: 1,
      title: 'Eu egestas sed sed posuere ultrices ?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 2,
      title: 'Elementum facilisi aliquam, nisi, orci vulputate?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 3,
      title: 'Nibh at odio dolor etiam neque in vel id orci?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 4,
      title: 'Non dolor at velit lorem erat maecenas?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    }
  ])
  const [afterYouWinArray, setAfterYouWinArray] = useState([
    {
      id: 1,
      title: 'Eu egestas sed sed posuere ultrices ?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 2,
      title: 'Elementum facilisi aliquam, nisi, orci vulputate?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 3,
      title: 'Nibh at odio dolor etiam neque in vel id orci?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 4,
      title: 'Non dolor at velit lorem erat maecenas?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    }
  ])
  const [serviceForSellingArray, setServiceForSellingArray] = useState([
    {
      id: 1,
      title: 'Eu egestas sed sed posuere ultrices ?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 2,
      title: 'Elementum facilisi aliquam, nisi, orci vulputate?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 3,
      title: 'Nibh at odio dolor etiam neque in vel id orci?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    },
    {
      id: 4,
      title: 'Non dolor at velit lorem erat maecenas?',
      ans: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel cum quis deserunt ab accusamus doloremque omnis ipsam? Maxime velit hic, eius vel quaerat ipsum dolore magni corporis porro enim ut at ipsam deserunt error dolor. Voluptatem repudiandae incidunt modi ut officiis totam quae eos assumenda non soluta minus, sint quis atque nulla neque minima sunt ab optio ipsa deserunt et.',
      ansShow: false
    }
  ])

  const showAnswer = (index, value) => {
    let data = value === 1 ? [...generalTopicArray] : value === 2 ? [...beforeBidArray] : value === 3 ? [...afterYouWinArray] : [...serviceForSellingArray]
    data[index]['ansShow'] = !data[index]['ansShow']
    value === 1 ?
      setGeneralTopicArray(data) :
      value === 2 ?
        setBeforeBidArray(data) :
        value === 3 ?
          setAfterYouWinArray(data) :
          setServiceForSellingArray(data)
  }

  return (
    <div className="alpha-home_page-main_container">
      <BlogView />

      <NavBar />
      <div className="alpha_detail_page_container">
        <div className="alpha-profile_outer_container">
          <div className="alpha-faqs_top_container">
            <h1>Frequently Asked Questions</h1>
            <div className="alpha-faqs-sub_heading_top_view">
              <h2>General Topics</h2>
              {generalTopicArray.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="alpha-faqs-title_top_view">
                      <h3>{item.title}</h3>
                      <img onClick={() => showAnswer(index, 1)} src={item.ansShow ? minusBlack : addBlack} />
                    </div>
                    {item.ansShow && <h4>{item.ans}</h4>}
                    <div className="alpha-faqs-divider" />
                  </div>
                )
              })}
            </div>
            <div className="alpha-faqs-sub_heading_top_view">
              <h2>Before You Bid & Buy</h2>
              {beforeBidArray.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="alpha-faqs-title_top_view">
                      <h3>{item.title}</h3>
                      <img onClick={() => showAnswer(index, 2)} src={item.ansShow ? minusBlack : addBlack} />
                    </div>
                    {item.ansShow && <h4>{item.ans}</h4>}
                    <div className="alpha-faqs-divider" />
                  </div>
                )
              })}
            </div>
            <div className="alpha-faqs-sub_heading_top_view">
              <h2>After You Win (Buy) An Item</h2>
              {afterYouWinArray.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="alpha-faqs-title_top_view">
                      <h3>{item.title}</h3>
                      <img onClick={() => showAnswer(index, 3)} src={item.ansShow ? minusBlack : addBlack} />
                    </div>
                    {item.ansShow && <h4>{item.ans}</h4>}
                    <div className="alpha-faqs-divider" />
                  </div>
                )
              })}
            </div>
            <div className="alpha-faqs-sub_heading_top_view">
              <h2>Services For Selling</h2>
              {serviceForSellingArray.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="alpha-faqs-title_top_view">
                      <h3>{item.title}</h3>
                      <img onClick={() => showAnswer(index, 4)} src={item.ansShow ? minusBlack : addBlack} />
                    </div>
                    {item.ansShow && <h4>{item.ans}</h4>}
                    <div className="alpha-faqs-divider" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}

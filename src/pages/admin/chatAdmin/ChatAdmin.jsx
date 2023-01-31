import React, { useState } from "react";
import { dummyFour, dummyOne, dummyThree, emoji, send, dummyTwo, user, document } from "../../../assets/icons";
import { SideBar, TopBar } from "../../../components";
import './chatAdmin.css'
export default function ChatAdmin() {
  const [drawerValue, setDrawerValue] = useState(-500)
  const userListArray = [
    {
      id: 1,
      image: dummyOne,
      name: 'Aadam Gabriel',
      lastMessage: 'Thanks',
      date: '04:22 PM',
      counter: 0,
      online: true
    },
    {
      id: 2,
      image: dummyTwo,
      name: 'Robert',
      lastMessage: 'Yeah Sure!',
      date: '04:22 PM',
      counter: 0,
      online: false

    },
    {
      id: 3,
      image: dummyThree,
      name: 'Downey',
      lastMessage: 'Yeah Sure!',
      date: '04:22 PM',
      counter: 12,
      online: true

    },
    {
      id: 4,
      image: user,
      name: 'Robert',
      lastMessage: 'Yeah Sure!',
      date: '04:22 PM',
      counter: 0,
      online: false

    },
    {
      id: 5,
      image: dummyOne,
      name: 'Downey',
      lastMessage: 'Thanks',
      date: '04:22 PM',
      counter: 0,
      online: false

    },
    {
      id: 6,
      image: dummyThree,
      name: 'Aadam Gabriel',
      lastMessage: 'Yeah Sure!',
      date: '04:22 PM',
      counter: 0,
      online: false

    },
    {
      id: 7,
      image: dummyFour,
      name: 'Robert',
      lastMessage: 'Yeah Sure!',
      date: '04:22 PM',
      counter: 0,
      online: false

    },
    {
      id: 8,
      image: dummyOne,
      name: 'Downey',
      lastMessage: 'Thanks',
      date: '04:22 PM',
      counter: 0,
      online: false

    },
    {
      id: 9,
      image: dummyOne,
      name: 'Aadam Gabriel',
      lastMessage: 'Thanks',
      date: '04:22 PM',
      counter: 0,
      online: false

    },

  ]
  const userChatArray = [
    {
      id: 1,
      image: dummyFour,
      message: 'Welcome',
      date: '11:25 AM',
      userType: 'sender'
    },
    {
      id: 2,
      image: dummyFour,
      message: '?',
      date: '11:25 AM',
      userType: 'sender'
    },
    {
      id: 3,
      image: dummyThree,
      message: 'Thanks',
      date: '11:25 AM',
      userType: 'receiver'
    }
  ]


  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-chat_admin_top_container">
          <div className="alpha-chat_admib_container">
            <div className="alpha-chat_buyer-user_list-top_view">
              <div className="alpha-chat_buyer-user_list_view">
                <div className="alpha-chat_buyer-list_header_view">
                  <h1>Messaging</h1>
                </div>
                <div className="alpha_chat_buyer_divider_horizontal" />
                <div className="alpha_chat_buyer_user_list_view">
                  {userListArray.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="alpha_chat_buyer_user_list_item_view">
                          <div className="alpha_chat_buyer_user_list_item_image_view">
                            <img src={item.image} />
                            {item.online &&
                              <div />
                            }
                          </div>
                          <div className="alpha_chat_buyer_user_list_item_name_view">
                            <h2>{item.name}</h2>
                            <h3>You: {item.lastMessage}</h3>
                          </div>
                          <div className="alpha_chat_buyer_user_list_item_time_view">
                            <h4>{item.date}</h4>
                            {item.counter > 0 &&
                              <div>
                                <h5>{item.counter}</h5>
                              </div>
                            }
                          </div>
                        </div>
                        <div className="alpha_chat_buyer_divider_horizontal" />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="alpha_chat_buyer_divider" />
            </div>

            <div className="alpha_chat_buyer_chat_detail_top_view">
              <div className="alpha_chat_buyer_drawer_view" style={{ left: drawerValue }}>
                <div className="alpha-chat_buyer-user_list-top_view_drawer">
                  <div className="alpha-chat_buyer-user_list_view">
                    <div className="alpha-chat_buyer-list_header_view">
                      <h1 onClick={() => setDrawerValue(drawerValue === 0 ? -500 : 0)}>Messaging</h1>
                    </div>
                    <div className="alpha_chat_buyer_divider_horizontal" />
                    <div className="alpha_chat_buyer_user_list_view">
                      {userListArray.map((item) => {
                        return (
                          <div key={item.id}>
                            <div className="alpha_chat_buyer_user_list_item_view">
                              <div className="alpha_chat_buyer_user_list_item_image_view">
                                <img src={item.image} />
                                {item.online &&
                                  <div />
                                }
                              </div>
                              <div className="alpha_chat_buyer_user_list_item_name_view">
                                <h2>{item.name}</h2>
                                <h3>You: {item.lastMessage}</h3>
                              </div>
                              <div className="alpha_chat_buyer_user_list_item_time_view">
                                <h4>{item.date}</h4>
                                {item.counter > 0 &&
                                  <div>
                                    <h5>{item.counter}</h5>
                                  </div>
                                }
                              </div>
                            </div>
                            <div className="alpha_chat_buyer_divider_horizontal" />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="alpha_chat_buyer_divider" />
                </div>
              </div>

              <div className="alpha_chat_buyer_chat_detail_header_view">
                <h1 onClick={() => setDrawerValue(0)}>Aadam Gabriel</h1>
              </div>
              <div className="alpha_chat_buyer_divider_horizontal" />
              <div className="alpha_chat_buyer_chat_detail_messages_view">
                {userChatArray.map((item) => {
                  return (
                    item.userType === 'sender' ?
                      <div key={item.id} className="alpha_chat_buyer-chat_detail_message_view_one">
                        <img src={item.image} />
                        <div>
                          <h2>{item.message}</h2>
                          <h3>{item.date}</h3>
                        </div>
                      </div>
                      :
                      <div key={item.id} className="alpha_chat_buyer-chat_detail_message_view_two">
                        <div>
                          <h2>{item.message}</h2>
                          <h3>{item.date}</h3>
                        </div>
                        <img src={item.image} />
                      </div>
                  )
                })}
              </div>
              <div className="alpha_chat_buyer_chat_detail_send_area_top_view">
                <div className="alpha_chat_buyer_send_area_circle_view">
                  <img src={document} />
                </div>
                <div className="alpha_chat_buyer_send_area_circle_view">
                  <img src={emoji} />
                </div>
                <div className="alpha_chat_buyer_chat_detail_input_top_view">
                  <input placeholder="Type your message here" />
                </div>
                <div className="alpha_chat_buyer_send_area_circle_view">
                  <img src={send} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

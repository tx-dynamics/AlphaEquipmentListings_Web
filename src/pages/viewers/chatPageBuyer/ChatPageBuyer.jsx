import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIO from "socket.io-client";

import { document, dummyFour, dummyOne, dummyThree, dummyTwo, emoji, send, user } from "../../../assets/icons";
import { BlogView, Footer, Loader, NavBar } from "../../../components";
import './chatPageBuyer.css'
import { BASE_URL } from "../../../network/Environment";
import { store } from "../../../redux/store";

const socket = socketIO(BASE_URL);

export default function ChatPageBuyer() {
  const navigate = useNavigate()
  const userData = store.getState().userData.userData
  const [inboxesData, setInboxesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [drawerValue, setDrawerValue] = useState(-500)
  const [selectedChat, setSelectedChat] = useState({
    id: 1,
    messagesArray: [],
  });


  // useEffect(() => {
  //   if (!userData._id) return;
  //   socket.emit("user-enter", { userId: userData._id });
  //   socket.emit("get-inboxes", { userId: userData._id });

  //   let first = true;

  //   socket.on("inboxes", (data) => {
  //     const inboxes = data.data.inboxes;
  //     socket.emit("get-messages", { userId: userData._id, inbox: inboxes[0].id });
  //     socket.on("messages", (data) => {
  //       const messagesArray = data.data.messages.map((message) => {
  //         return {
  //           ...message,
  //           type: message.sender == userData._id ? "sender" : "receiver",
  //         };
  //       });

  //       const newinboxes = inboxes.map((inbox) => {
  //         return {
  //           id: inbox.id,
  //           title: inbox.name,
  //           message: inbox.lastMessage,
  //           image: inbox.image,
  //           messagesArray,
  //         };
  //       });
  //       console.log(newinboxes?.length, '----');
  //       setInboxesData(newinboxes);
  //       newinboxes.forEach((inbox) => {
  //         console.log(inbox, '-p0-0-');
  //         if (inbox.id == selectedChat.id) setSelectedChat(inbox);
  //       });
  //       console.log('-p0-0-');

  //       // setSelectedChat(newinboxes[0]);
  //       first = false;
  //     });

  //     return () => {
  //       socket.removeAllListeners("inboxes");
  //       socket.removeAllListeners("messages");
  //     };
  //   });
  //   return () =>
  //     socket.emit('user-leave', { "userId": userData._id });
  // }, [user]);


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
    <div className="alpha-home_page-main_container">
      <BlogView />
      <NavBar />
      <Loader loading={isLoading} />
      <div className="alpha-home_page-container">
        <div className="alpha-blogpage_container">

          <div className="alpha-chat_buyer_top_container">
            <div className="alpha-chat_buyer-user_list-top_view">
              <div className="alpha-chat_buyer-user_list_view">
                <div className="alpha-chat_buyer-list_header_view">
                  <h1>Messaging</h1>
                </div>
                <div className="alpha_chat_buyer_divider_horizontal" />
                <div className="alpha_chat_buyer_user_list_view">
                  {inboxesData?.length > 0 ?
                    (inboxesData?.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="alpha_chat_buyer_user_list_item_view">
                            <div className="alpha_chat_buyer_user_list_item_image_view">
                              <img src={item?.image} />
                              {item.online &&
                                <div />
                              }
                            </div>
                            <div className="alpha_chat_buyer_user_list_item_name_view">
                              <h2>{item.title}</h2>
                              <h3>Message: {item.message}</h3>
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
                    }))
                    :
                    <div className="alpha_chat_empty_view">
                      <h1>No inboxes found</h1>
                    </div>
                  }

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
                      {inboxesData?.length > 0 ?
                        (inboxesData?.map((item) => {
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
                        }))
                        :
                        <div className="alpha_chat_empty_view">
                          <h1>No inboxes found</h1>
                        </div>
                      }

                    </div>
                  </div>
                  <div className="alpha_chat_buyer_divider" />
                </div>
              </div>
              {inboxesData.length > 0 ?
                <>
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
                </>
                :
                <div className="alpha_chat_empty_view">
                  <h1>Sorry we couldn't find anything</h1>
                </div>
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div >
  );
}

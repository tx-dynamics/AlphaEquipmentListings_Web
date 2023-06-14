import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";

import { emoji, send, document } from "../../../assets/icons";
import { Loader, SideBar, TopBar } from "../../../components";
import { store } from "../../../redux/store";
import { BASE_URL } from "../../../network/Environment";
import './chatAdmin.css'
import { useSnackbar } from "react-simple-snackbar";
import { snakbarOptions } from "../../../globalData";
const socket = socketIO(BASE_URL);

export default function ChatAdmin() {
  const userData = store.getState().userData.userData
  const [drawerValue, setDrawerValue] = useState(-500)
  const [message, setMessage] = useState("");
  const [inboxesData, setInboxesData] = useState([]);
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [isLoading, setIsLoading] = useState(false);
  const [selectedChat, setSelectedChat] = useState({
    id: 1,
    messagesArray: [],
  });

  useEffect(() => {
    if (!userData._id) return;
    setIsLoading(true);
    socket.emit("user-enter", { userId: userData._id });
    socket.emit("get-inboxes", { userId: userData._id });
    let first = true;
    socket.on("inboxes", (data) => {
      const inboxes = data.data.inboxes;
      if (inboxes?.length > 0) {
        socket.emit("get-messages", { userId: userData._id, inbox: inboxes[0].id });
        socket.on("messages", (data) => {
          const messagesArray = data.data.messages.map((message) => {
            return {
              ...message,
            };
          });
          const newinboxes = inboxes.map((inbox) => {
            return {
              id: inbox.id,
              title: inbox.name,
              message: inbox.lastMessage,
              image: inbox.image,
              messagesArray,
            };
          });
          setInboxesData(newinboxes);
          newinboxes.forEach((inbox) => {
            if (inbox.id == selectedChat.id) setSelectedChat(inbox);
          });
          setSelectedChat(newinboxes[0]);
          setIsLoading(false);
          first = false;
        });
      }
      else {
        setIsLoading(false);
        showMessage('No data found')
      }

      return () => {
        socket.removeAllListeners("inboxes");
        socket.removeAllListeners("messages");
      };
    });
    return () =>
      socket.emit('user-leave', { "userId": userData._id });
  }, [userData]);

  const sendMessage = () => {
    socket.emit("send-message", {
      userId: userData._id,
      to: selectedChat.id,
      message,
      messageType: "text",
      messageTime: new Date(),
    });
    setMessage("");
  }

  const getOtherUserMessages = (otherUser) => {
    setSelectedChat(null)
    setIsLoading(true);
    socket.emit("listening-for-user", { userId: userData._id, to: otherUser.id })
    socket.emit("get-messages", {
      userId: userData._id,
      inbox: otherUser.id,
    });
    socket.on("messages", (res) => {
      const mapRes = inboxesData.map((chat) =>
        chat.id == otherUser.id
          ? {
            ...chat,
            messagesArray: res.data.messages.map((message) => {
              return {
                ...message,

              };
            }),
          }
          : chat
      );
      const singleChat = inboxesData.filter(
        (chat) => (chat = chat.id == otherUser.id)
      )[0];
      singleChat.messagesArray = res.data.messages;
      setInboxesData(mapRes);
      setSelectedChat(singleChat);
      setIsLoading(false);
    });
  }

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <Loader loading={isLoading} />
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
                  {inboxesData?.length > 0 ?
                    (inboxesData?.map((item) => {
                      return (
                        <div key={item.id}>
                          <div onClick={() => getOtherUserMessages(item)} className="alpha_chat_buyer_user_list_item_view">
                            <div className="alpha_chat_buyer_user_list_item_image_view">
                              <img src={item?.image} />
                              {item.online &&
                                <div />
                              }
                            </div>
                            <div className="alpha_chat_buyer_user_list_item_name_view">
                              <h2>{item.title}</h2>
                              {/* <h3 id={item?.id}>Message: {item.message === 'Hidden Message' ? '' : item?.message}</h3> */}
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
                    <h1 onClick={() => setDrawerValue(0)}>{selectedChat?.title}</h1>
                  </div>
                  <div className="alpha_chat_buyer_divider_horizontal" />
                  <div className="alpha_chat_buyer_chat_detail_messages_view">
                    {selectedChat?.messagesArray?.map((item, index) => {
                      const finalTime = new Date(item?.createdAt)
                      return (
                        item?.sender !== userData?._id ?
                          (item.type !== 'hidden' &&
                            <div key={index} className="alpha_chat_buyer-chat_detail_message_view_one">
                              {/* <img src={selectedChat?.image} /> */}
                              <div>
                                <h2>{item.message}</h2>
                                <h3>{finalTime.getHours()}:{finalTime.getMinutes()}</h3>
                              </div>
                            </div>
                          )

                          :
                          (item.type !== 'hidden' &&
                            <div key={item.id} className="alpha_chat_buyer-chat_detail_message_view_two">
                              <div>
                                <h2>{item.message}</h2>
                                <h3>{finalTime.getHours()}:{finalTime.getMinutes()}</h3>
                              </div>
                              {/* <img src={item?.sender?.image} /> */}
                            </div>
                          )

                      )
                    }).reverse()}
                  </div>
                  <div className="alpha_chat_buyer_chat_detail_send_area_top_view">
                    <div className="alpha_chat_buyer_send_area_circle_view">
                      <img src={document} />
                    </div>
                    <div className="alpha_chat_buyer_send_area_circle_view">
                      <img src={emoji} />
                    </div>


                    <div className="alpha_chat_buyer_chat_detail_input_top_view">
                      <input onKeyDown={ev => {
                        if (ev.key === "Enter") sendMessage()
                      }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here" />
                    </div>
                    <div onClick={() => sendMessage()} className="alpha_chat_buyer_send_area_circle_view">
                      <img src={send} />
                    </div>
                  </div>
                </>
                :
                <div className="alpha_chat_empty_view">
                  <h1>Sorry we couldn't find anything</h1>
                </div>
              }
              {/* <div className="alpha_chat_buyer_chat_detail_header_view">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

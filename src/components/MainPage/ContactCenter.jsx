import React, { useState } from "react";
import styles from "./ContactCenter.module.css";
import Profile from "../../assets/profile.png";

const ContactCenter = ({ teamMembers }) => {
  // States for chats using team members prop
  const [chats, setChats] = useState(
    teamMembers.map((member) => ({
      id: `chat-${member.id}`,
      title: member.fullName,
      preview:
        member.role === "Admin" ? "I have a Question" : "Ask me Anything",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      messages: [
        member.role === "Admin" ? "I have a Question" : "Ask me Anything",
      ],
      contact: {
        name: member.fullName,
        phone: member.phoneNumber,
        email: member.email,
      },
      ticketNumber: `2025-${String(member.id).padStart(5, "0")}`,
      status: "Open",
      assignedTo: member.id,
    }))
  );

  const [activeChat, setActiveChat] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showResolveModal, setShowResolveModal] = useState(false);
  const [transferTo, setTransferTo] = useState("");

  const currentChat = chats.find((chat) => chat.id === activeChat) || chats[0];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setChats(
      chats.map((chat) =>
        chat.id === activeChat
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    );
    setNewMessage("");
  };

  const handleTransfer = () => {
    if (!transferTo) return;

    setChats(
      chats.map((chat) =>
        chat.id === activeChat ? { ...chat, assignedTo: transferTo } : chat
      )
    );
    setShowTransferModal(false);
    setTransferTo("");
  };

  const handleResolveTicket = () => {
    setChats(
      chats.map((chat) =>
        chat.id === activeChat ? { ...chat, status: "Resolved" } : chat
      )
    );
    setShowResolveModal(false);
  };

  const getAssignedMember = (memberId) => {
    return (
      teamMembers.find((member) => member.id === memberId) || teamMembers[0]
    );
  };

  return (
    <div className={styles.contactCenter}>
      <div className={styles.chatListContainer}>
        <div className={styles.sectionHeader}>
          <h5>Contact Center</h5>
          <p className={styles.subHeader}>Chats</p>
        </div>

        <div className={styles.chatList}>
          {chats.map((chat) => {
            const member = getAssignedMember(chat.assignedTo);
            return (
              <div
                key={chat.id}
                className={`${styles.chatItem} ${
                  activeChat === chat.id ? styles.activeChat : ""
                }`}
                onClick={() => setActiveChat(chat.id)}
              >
                <img
                  src={Profile}
                  alt="Profile"
                  className={styles.profileImage}
                />
                <div className={styles.chatInfo}>
                  <h5>{member.fullName}</h5>
                  <p>{chat.preview}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.mainChatArea}>
        {currentChat && (
          <>
            <div className={styles.chatHeader}>
              <p className={styles.ticketId}>
                Ticket# {currentChat.ticketNumber}
              </p>
              <i className="bi bi-house-door"></i>
            </div>

            <div className={styles.chatContent}>
              <p className={styles.chatDate}>{currentChat.date}</p>

              <div className={styles.messagesContainer}>
                {currentChat.messages.map((message, index) => (
                  <div key={index} className={styles.message}>
                    <div className={styles.userChat}>
                      <h5>{currentChat.contact.name}</h5>
                      <p>{message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className={styles.messageForm}>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type here..."
                  className={styles.messageInput}
                />
                <div className={styles.actionButtons}>
                  <button type="submit" className={styles.sendButton}>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>

      {currentChat && (
        <div className={styles.contactDetails}>
          <div className={styles.detailsHeader}>
            <img src={Profile} alt="Profile" className={styles.profileImage} />
            <p>Chat</p>
          </div>

          <div className={styles.detailsSection}>
            <h5>Details</h5>
            <div className={styles.detailField}>
              <input type="text" value={currentChat.contact.name} readOnly />
            </div>
            <div className={styles.detailField}>
              <input type="tel" value={currentChat.contact.phone} readOnly />
            </div>
            <div className={styles.detailField}>
              <input type="email" value={currentChat.contact.email} readOnly />
            </div>
          </div>

          <div className={styles.teamSection}>
            <h5>TeamMates</h5>
            <div className={styles.selectWrapper}>
              <select
                value={currentChat.assignedTo}
                onChange={(e) => setTransferTo(e.target.value)}
              >
                {teamMembers.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.fullName} ({member.role})
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.selectWrapper}>
              <select
                value={currentChat.status}
                onChange={(e) => {
                  if (e.target.value === "Resolved") {
                    setShowResolveModal(true);
                  }
                }}
              >
                <option value="Open">Ticket Status: Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </div>

          <button
            className={styles.transferButton}
            onClick={() => setShowTransferModal(true)}
          >
            Transfer Chat
          </button>
        </div>
      )}

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Chat will be assigned to different team member</h4>
            <div className={styles.modalContent}>
              <select
                className={styles.modalSelect}
                value={transferTo}
                onChange={(e) => setTransferTo(e.target.value)}
              >
                {teamMembers
                  .filter((member) => member.id !== currentChat?.assignedTo)
                  .map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.fullName} ({member.role})
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles.modalButtons}>
              <button
                className={styles.cancelButton}
                onClick={() => setShowTransferModal(false)}
              >
                Cancel
              </button>
              <button className={styles.confirmButton} onClick={handleTransfer}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resolve Modal */}
      {showResolveModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>This chat will be closed</h4>
            <div className={styles.modalButtons}>
              <button
                className={styles.cancelButton}
                onClick={() => setShowResolveModal(false)}
              >
                Cancel
              </button>
              <button
                className={styles.confirmButton}
                onClick={handleResolveTicket}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCenter;

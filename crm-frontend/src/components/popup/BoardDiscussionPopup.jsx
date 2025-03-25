import styled from "styled-components";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 1.6rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);
  margin-bottom: 1.2rem;
  padding: 1rem 1.6rem;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  color: ${({ active }) => (active ? "var(--color-brand-700)" : "#555")};
  border-bottom: ${({ active }) =>
    active ? "2px solid var(--color-brand-700)" : "none"};
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    color: var(--color-brand-700);
  }
`;

const Content = styled.div`
  padding: 1.6rem;
  flex: 1;
  overflow-y: auto;
`;

const Comment = styled.div`
  padding: 1rem;
  background: #f9f9f9;
  margin-bottom: 1rem;
  border-radius: 0.6rem;
`;

const InputBox = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.6rem;
  resize: none;
  margin-top: auto;
`;

const SendButton = styled.button`
  margin-top: 0.8rem;
  background: var(--color-brand-600);
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
`;

function BoardDiscussionPopup({ onClose }) {
  const [activeTab, setActiveTab] = useState("activity");
  const [messages, setMessages] = useState([
    { id: 1, user: "Pragesh", message: "This looks good!" },
    { id: 2, user: "Alice", message: "Let’s push this live next week." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), user: "You", message: input },
      ]);
      setInput("");
    }
  };

  return (
    <Overlay>
      <Header>
        Board Discussion
        <button onClick={onClose}>✖</button>
      </Header>

      <Tabs>
        <TabButton
          onClick={() => setActiveTab("activity")}
          active={activeTab === "activity"}
        >
          Activity
        </TabButton>
        <TabButton
          onClick={() => setActiveTab("lastViewed")}
          active={activeTab === "lastViewed"}
        >
          Last Viewed
        </TabButton>
        <TabButton
          onClick={() => setActiveTab("updates")}
          active={activeTab === "updates"}
        >
          Updates
        </TabButton>
      </Tabs>

      <Content>
        {activeTab === "activity" &&
          messages.map((msg) => (
            <Comment key={msg.id}>
              <strong>{msg.user}</strong>
              <p>{msg.message}</p>
            </Comment>
          ))}
        {activeTab === "updates" && <p>No updates yet.</p>}
        {activeTab === "lastViewed" && <p>Last viewed by Alice 3 mins ago.</p>}
      </Content>

      <div style={{ padding: "1.6rem" }}>
        <InputBox
          rows="3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a reply and mention others with @"
        />
        <SendButton onClick={handleSend}>Reply</SendButton>
      </div>
    </Overlay>
  );
}

export default BoardDiscussionPopup;

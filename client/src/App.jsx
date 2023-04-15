import React from "react";
import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";
import { useState } from "react";
import loadingIcon from "./assets/loader.svg";

const App = () => {
  // Declare state variables
  const [input, setInput] = useState(""); // input state variable for text input field
  const [posts, setPosts] = useState([]); // posts state variable for chat history

  // Function to handle form submission
  const onSubmit = () => {
    // Ignore empty input
    if (input.trim() === "") return;

    // Add user input to chat history
    updatePosts(input);

    // Clear input field
    setInput("");
  };

  // Function to update chat history with new post
  const updatePosts = (post) => {
    setPosts((prevState) => {
      return [...prevState, { type: "user", post }];
    });
  };

  // Function to handle key press events in input field
  const onKeyUp = (e) => {
    // Submit form if Enter key is pressed
    if (e.key === "Enter" || e.which === 13) {
      onSubmit();
    }
  };

  // Render chat application UI
  return (
    <div>
      <main className="chatGPT-app">
        <section className="chat-container">
          <div className="layout">
            {posts.map((post, index) => (
              <div
                key={index}
                className={`chat-bubble ${
                  post.type === "bot" || post.type === "loading" ? "bot" : ""
                }`}
              >
                <div className="avatar">
                  <img
                    src={
                      post.type === "bot" || post.type === "loading"
                        ? bot
                        : user
                    }
                    alt="Avatar"
                  />
                </div>
                {post.type === "loading" ? (
                  <div className="loader">
                    <img src={loadingIcon} alt="Loading" />
                  </div>
                ) : (
                  <div className="post">{post.post}</div>
                )}
              </div>
            ))}
          </div>
        </section>
        <footer>
          <input
            className="composebar"
            autoFocus
            type="text"
            placeholder="Ask Anything"
            value={input} // Bind input field value to input state variable
            onChange={(e) => setInput(e.target.value)} // Update input state variable on change
            onKeyUp={onKeyUp} // Handle key press events
          />
          <div className="send-button" onClick={onSubmit}>
            <img src={send} alt="Send" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;

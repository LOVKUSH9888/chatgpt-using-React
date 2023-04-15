import React from "react";
import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";
import { useState } from "react";
import loadingIcon from "./assets/loader.svg";

const App = () => {
  const [input, setInput] = ("");
  const [post, setPost] = ([]);


  const onSubmit = () => {
    if(input.trim() === "") return;
    updatePosts(input)
  }

  const updatePosts = (post) => {
    setPosts(prevState => {
      return [
        ...prevState,
        {type: "user", post}
      ]
    })
  }

  const onKeyUp = () => {

  }

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
                  />
                </div>
                {post.type === "loading" ? (
                  <div className="loader">
                    <img src={loadingIcon} />
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
            onChange={() => {(e)=> setInput(e.target.value)}}
            onKeyUp={onKeyUp}
          />
          <div className="send-button" onClick={onSubmit}>
            <img src={send} />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;

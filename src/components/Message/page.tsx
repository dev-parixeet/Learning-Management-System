'use client'
import React, { useRef, useState } from "react";
import Chatprofessor from "/images/logo/chatprofessor.svg"
// import "./newpopup.css";
// import dpLogo from "/dp.svg";
// import CloseIcon from "@mui/icons-material/Close";
import Album from "/images/cover/album.jpg";

const Newpopup: React.FC = () => {
    const [userMessage, setUserMessage] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<
        Array<{
            content: string;
            className: string;
            sender: string;
            timestamp: string;
        }>
    >([]);
    const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);
    const chatInputRef = useRef<HTMLTextAreaElement | null>(null);
    const chatBoxRef = useRef<HTMLUListElement | null>(null);
    const [outgoingMessage, setOutgoingMessage] = useState<boolean>(true);

    const createChatLi = (message: string, className: string, sender: string) => {
        return { content: message, className, sender, timestamp: getCurrentTime() };
    };

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    const handleReset = (e: any): any => {
        setChatHistory([]);
    };

    const handleChat = () => {
        const message = userMessage.trim();
        if (!message) return;

        setUserMessage("");

        if (outgoingMessage) {
            setChatHistory((prevChatHistory) => [
                ...prevChatHistory,
                createChatLi(message, "outgoing", "user"),
            ]);
        } else {
            setChatHistory((prevChatHistory) => [
                ...prevChatHistory,
                createChatLi(message, "incoming", "bot"),
            ]);
        }

        setOutgoingMessage(!outgoingMessage);
    };

    const toggleChatbot = () => {
        setIsChatbotOpen((prevIsChatbotOpen) => !prevIsChatbotOpen);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey && window.innerWidth > 800) {
            event.preventDefault();
            handleChat();
        }
    };

    const handleAlbumImageClick = () => {
        const fileInput = document.getElementById("fileInput");
        if (fileInput) {
            fileInput.click();
        }
    };

    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"
            />
            <button
                className="chatbot__button flex items-center justify-center"
                onClick={toggleChatbot}
            >
                <div className="material-symbols-outlined">
                    {isChatbotOpen ? "close" : "mode_comment"}
                </div>
            </button>

            {isChatbotOpen && (
                <div className="chatbot">
                    <div className="chatbot__header flex w-full">
                        <img src="/images/logo/chatprofessor.svg" className="w-10 h-10" />
                        <h3 className="chatbox__title w-full flex font-semibold">How Can Help You??!</h3>
                        <div className="flex sm:ml-0 md:ml-4 ml-auto">
                            <svg onClick={(e) => handleReset(e)} width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_429_11083)">
                                    <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="red" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_429_11083">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <ul className="chatbot__box" ref={chatBoxRef}>
                        {chatHistory.map((chat, index) => (
                            <li
                                key={index}
                                className={`chatbot__chat ${chat.className} ${chat.sender === "user" ? "outgoing" : "incoming"
                                    }`}
                            >
                                <span className="whitespace-pre-wrap">{chat.content}</span>
                                <span className="timestamp">&nbsp;&nbsp;{chat.timestamp}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="chatbot__input-box flex">
                        <div>
                            <img
                                src='/images/cover/album.jpg'
                                alt="Your Logo"
                                className="allbum-logo w-7 h-6"
                                onClick={handleAlbumImageClick}
                            />
                            <input type="file" id="fileInput" className="hidden" />
                        </div>

                        <div className="vartical"></div>
                        <textarea
                            ref={chatInputRef}
                            className="chatbot__textarea"
                            placeholder="Enter a message..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />

                        <span
                            id="send-btn"
                            className="material-symbols-outlined "
                            onClick={handleChat}
                        >
                            send
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Newpopup;

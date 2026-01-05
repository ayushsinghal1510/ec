'use client';

import { useEffect } from "react";
import { initVoxioChatbot } from "voxioagent";

export default function VoxioChatbot() {
  useEffect(() => {
    const init = async () => {
      try {
        await initVoxioChatbot({
          // Note the NEXT_PUBLIC prefix
          apiKey: process.env.NEXT_PUBLIC_VOXIO_API_KEY, 
          config: {
            "botName": "Support Bot",
            "botAvatar": "https://example.com/bot-icon.png",
            "botStatus": "Always Online",
            "primaryColor": "#4f46e5",
            "userMessageBg": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
            "welcomeMessage": "Hello! Welcome to our support chat. How can I assist you?",
            "position": {
              "bottom": "20px",
              "right": "20px"
            },
            "iconShape": "rounded-square",
            "iconSize": "65px",
            "chatWidth": "400px",
            "chatHeight": "600px",
            "showExpandButton": true
          },
        });
        console.log("Voxio Chatbot initialized");
      } catch (error) {
        console.error("Voxio Chatbot failed to load:", error);
      }
    };

    init();
  }, []);

  return null; // This component handles logic only
}
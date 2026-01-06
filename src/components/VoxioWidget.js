"use client";
import { useEffect } from "react";

export default function VoxioWidget() {
  useEffect(() => {
    const init = async () => {
      try {
        const { initVoxioChatbot } = await import("voxioagent");

        await initVoxioChatbot({
          apiKey: process.env.NEXT_PUBLIC_VOXIO_API_KEY,
          config: {
            botName: "NextStore Support",
            botAvatar:
              "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
            botStatus: "Online",
            primaryColor: "#232f3e",
            userMessageBg: "#ffd814",
            welcomeMessage: "Hi! How can I help you today?",
            position: {
              bottom: "30px",
              right: "30px",
            },
            iconShape: "circle",
            iconSize: "60px",
            chatWidth: "380px",
            chatHeight: "600px",
            showExpandButton: true,
          },
        });
        console.log("Voxio Chatbot initialized");
      } catch (error) {
        console.error("Failed to initialize Voxio:", error);
      }
    };

    init();
  }, []);

  return null;
}

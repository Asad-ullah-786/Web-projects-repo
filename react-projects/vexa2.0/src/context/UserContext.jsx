
import React, { createContext, useState } from 'react';
import run from '../gemini';

export const datacontext = createContext();

function UserContext({ children }) {
    let [speaking, setSpeaking] = useState(false);
    let [prompt, setPrompt] = useState("Listening...");
    let [response, setResponse] = useState(false);

    function speak(text) {
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.lang = "hi-GB";  // corrected language code
        window.speechSynthesis.speak(text_speak);
    }

    async function aiResponse(prompt) {
         let text=await run("Write a fast response in about 20 words only: " + prompt)
   let newText=text.split("**")&&text.split("*")&&text.replace("google","Asad Ullah")&&text.replace("Google","Asad Ullah")&&text.replace("Google","Asad Ullah")

        setPrompt(newText);
        speak(newText);
        setResponse(true);
        setTimeout(() => {
            setSpeaking(false);
        }, 6000);
    }

    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new speechRecognition();

    recognition.onresult = (e) => {
        let currentIndex = e.resultIndex;
        let transcript = e.results[currentIndex][0].transcript;
        setPrompt(transcript);
        takeCommand(transcript.toLowerCase());
    };

    function takeCommand(command) {
        if (command.includes("open") && command.includes("youtube")) {
            window.open("https://www.youtube.com/", "_blank");
            speak("Opening Youtube...");
            setResponse(true);
            setPrompt("Opening Youtube");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("whatsapp")) {
            window.open("https://www.whatsapp.com/", "_blank");
            speak("Opening Whatsapp...");
            setResponse(true);
            setPrompt("Opening Whatsapp");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("google")) {
            window.open("https://www.google.com/", "_blank");
            speak("Opening Google...");
            setResponse(true);
            setPrompt("Opening Google");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("instagram")) {
            window.open("https://www.instagram.com/", "_blank");
            speak("Opening Instagram...");
            setResponse(true);
            setPrompt("Opening Instagram");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("tiktok")) {
            window.open("https://www.tiktok.com/", "_blank");
            speak("Opening Tiktok...");
            setResponse(true);
            setPrompt("Opening Tiktok");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("snapchat")) {
            window.open("https://www.snapchat.com/", "_blank");
            speak("Opening Snapchat...");
            setResponse(true);
            setPrompt("Opening Snapchat");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("facebook")) {
            window.open("https://www.facebook.com/", "_blank");
            speak("Opening Facebook...");
            setResponse(true);
            setPrompt("Opening Facebook");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("chatgpt")) {
            window.open("https://www.chatgpt.com/", "_blank");
            speak("Opening Chatgpt...");
            setResponse(true);
            setPrompt("Opening Chatgpt");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("gmail")) {
            window.open("https://mail.google.com/", "_blank");
            speak("Opening Gmail...");
            setResponse(true);
            setPrompt("Opening Gmail");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
        else if (command.includes("open") && command.includes("github")) {
            window.open("https://www.github.com/", "_blank");
            speak("Opening Github...");
            setResponse(true);
            setPrompt("Opening Github...");
            setTimeout(() => { setSpeaking(false); }, 5000);
        }
         else if(command.includes("time")){
            let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})      
            speak(time)
            setPrompt(time);
            setTimeout(() => { setSpeaking(false); }, 5000);
           }
            else if(command.includes("date")){
            let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})      
            speak(date)
            setPrompt(date);
            setTimeout(() => { setSpeaking(false); }, 5000);
           }
        else {
            aiResponse(command);  // fixed undefined variable issue
        }
    }

    let value = {
        recognition,
        speaking,
        setSpeaking,
        prompt,
        setPrompt,
        response,
        setResponse
    };

    return (
        <datacontext.Provider value={value}>
            {children}
        </datacontext.Provider>
    );
}

export default UserContext;

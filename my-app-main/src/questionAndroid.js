import React, { useState } from 'react';
import {  Linking,Text } from 'react-native';
const bioUrl = "https://support.apple.com/en-ca/HT208109";
const passUrl = "https://support.apple.com/en-ca/HT204060";
const safeChkUrl="https://support.apple.com/en-ca/guide/personal-safety/ips2aad835e1/web"
export const QuestionsA = [
  {
    id: 1,
    question: "How do you unlock your phone without a smartwatch or trusted Bluetooth device?",
    answers: [
      {
        id: 1,
        text: "Pattern, PIN, or Password",
        feedback:
        "You should consider adding Biometric fsce or fingerprint option to unlock your phone/tablet. To add it, go to Settings > Security & privacy > Device lock. Screen lock will show your currently set lock. Do not remove it. If your device has supported hardware, Face & Fingerprint Unlock will be underneath. Follow the instructions onscreen to add either option. ",
      },
      {
        id: 2,
        text: "Swipe or Unlocked",
        feedback:
        "Secure your device with a pattern, PIN, or password, ideally combined with biometric authentication, to protect your online identity and location activity. To set it up, go to Settings > Security & privacy > Device lock. Screen lock must be set as a backup, even if you plan to use biometric authentication. If supported, Face & Fingerprint Unlock will be available underneath Screen lock. Simply follow the onscreen instructions.",
      },
    ],
  },
  {
    id: 2,
    question:
      "Have you previously shared your location, logged into another device with your account, or are concerned with unauthorized access to your data or location? If unsure, select Yes.",
    answers: [
      {
        id: 4,
        text: "Yes",
        feedback:
          "Go to Settings > Security & privacy > Google Security Checkup. Follow security tips, remove unused devices, and don't share your location with anyone. Or on your google apps: Go to Settings and tap “Manage your Google Account”. Go to the Security tab and Location Sharing is found under the Data & privacy or People & sharing tabs.",
        },
      {
        id: 5,
        text: "No",
        feedback: "You are a security wizer!",
      },
    ],
  },
  {
    id: 3,
    question: "Have you enabled two-factor authentication on your Apple ID? If unsure, select No.",
    answers: [
      {
        id: 6,
        text: "Yes",
        feedback:
          "You are a on point with security!",
      },
      {
        id: 7,
        text: "No",
        feedback:
          "Go to Settings and tap your profile icon. From the “Your info” screen, tap the “Manage your Google Account” button. Under the Security tab, tap 2-Step Verification and sign into your Google Account. Multiple methods are available and can be used as backup methods. Select at least two and follow the instructions. Voice or text message verification is not recommended due to weak security.",
      },
    ],
  },
];
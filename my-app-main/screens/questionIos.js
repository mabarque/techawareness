import React, { useState } from 'react';
import {  Linking,Text } from 'react-native';
const bioUrl = "https://support.apple.com/en-ca/HT208109";
const passUrl = "https://support.apple.com/en-ca/HT204060";
const safeChkUrl="https://support.apple.com/en-ca/guide/personal-safety/ips2aad835e1/web"
const mfaUrl="https://support.apple.com/en-ca/HT204915"
export const Questions = [
  {
    id: 1,
    question: "How do you unlock your device?",
    answers: [
      {
        id: 1,
        text: "Passcode Only",
        feedback:
        <Text>
        We're off to a good start! Consider adding biometric authentication if possible. This will prevent people and cameras from seeing your passcode when you enter it in public. To do so, tap  
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(bioUrl)}> here </Text>
         and follow the instructions.
      </Text>
      },
      {
        id: 2,
        text: "Unlocked",
        feedback:
          <Text>
          Your device should at least be secured with a passcode but ideally with both measures.  Having an unlocked device allows easy access to your online identity and your location activity. To do so, tap  
          <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(passUrl)}> here </Text>
           and follow the instructions.
        </Text>
        },
    ],
  },
  {
    id: 2,
    question:
      "Have you previously shared your location, logged into another device with your account? If unsure press yes.",
    answers: [
      {
        id: 4,
        text: "Yes",
        feedback:
          <Text>
          On iPhones running iOS 16, you can perform a Safety Check. This can be accessed in Settings -- Privacy & Security -- Safety Check. For more information, To do so, tap  
          <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(safeChkUrl)}> here </Text>
           and follow the instructions.
        </Text>
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
          <Text>
          Go to Settings -- your name -- Password & Security. “Turn On Two-Factor Authentication”. Then Continue and follow the onscreen instructions. Two-factor authentication is an added security layer that involves sending a code to your trusted devices, in addition to your login credentials, to complete the login process. This prevent password theft or guessing. For more information, To do so, tap  
          <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(mfaUrl)}> here </Text>
           and follow the instructions.
        </Text>
        },
    ],
  },
  {
    id: 4,
    question: "With any of your Google Account, have previously shared your location or logged into another device with this account?",
    answers: [
      {
        id: 8,
        text: "Yes",
        feedback:
          "You are all set for iOS",
      },
      {
        id: 9,
        text: "No",
        feedback:
          "In any Google app, tap your profile icon and tap “Manage your Google Account”. Under the Data & privacy or People & sharing tabs, scroll down to Location Sharing and ensure that it is not being shared with untrusted people. Under the Security tab, scroll down to Your devices and ensure that devices you are no longer using are removed from your account. Consider adding 2-Step Verification for your Google Account as well. This is found under the Security tab.",
      },
    ],
  },
];

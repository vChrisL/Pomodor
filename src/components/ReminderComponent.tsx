import {useEffect, useState} from "react";

const REMINDERS: string[] = [
  "Don't forget to hydrate! Grab a glass of water!",
  "Don't forget to get up and move around!",
  "Take a deep breath! It helps to clear your mind.",
  "Take a short walk to refresh your mind!",
  "Take a deep breath and hydrate!"
]

type ReminderProps = {
  isFocusPeriod: boolean
}

export function Reminder({isFocusPeriod}: ReminderProps) {
  const [message, setMessage] = useState<string>("");

  function getRandomReminder(): void {
    setMessage(REMINDERS[Math.floor(Math.random() * REMINDERS.length)]);
  }

  useEffect((): void => {
    getRandomReminder();
  }, [isFocusPeriod]);

  return (
    <h2 className={`invisible text-lg p-2 h-12 ${!isFocusPeriod ? 'visible' : ''}`}>{message}</h2>
  )
}
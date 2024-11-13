"use client";

import Image from "next/image";
import { User } from "stream-chat";
import { useCallback, useState } from 'react';
import { LoadingIndicator } from "stream-chat-react";
import { useClerk } from "@clerk/nextjs";

type HomeState = {
  apiKey: string;
  user: User;
  token: string;
}


export default function Home() { 
  const [homeState, setHomeState] = useState<HomeState | undefined>();
  const {user: clerkUser} = useClerk()

  //register user function
  const registerUser = useCallback(async function RegiserUser() {
    //local variables for clerkUser
    const userId = clerkUser?.id;
    const mail = clerkUser?.primaryEmailAddress?.emailAddress;
    if (userId && mail){
      const response = await fetch('api/register-user', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId: userId, email: mail}),

      })
      const responseBody = response.json();
      return responseBody
    }
    //update clerkUser whenever this is changed.
  },[clerkUser])
  
  async function getUserToken(userId: string, userName: string){
    const response = await fetch('/api/token',{
      method: 'POST',
      headers:{ 'Content-Type': 'application/json'},
      body: JSON.stringify({userId: userId}),
    });

    const responseBody = await response.json();
    const token = responseBody.token;

    if (!token){
      console.error("No Token!");
    }

    const user: User = {
      id: userId,
      name: userName,
      image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
    };

    const apiKey = process.env.STREAM_API_KEY;
    if (apiKey){

    setHomeState({apiKey: apiKey, user: user, token: token});
    }
  }


  // LoadingIndicator is displayed until we have a homestate to display.
  if (!homeState){return <LoadingIndicator />};

  return <div>Welcome to Discord</div>;
}
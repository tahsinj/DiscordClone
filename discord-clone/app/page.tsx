"use client";

import Image from "next/image";
import { User } from "stream-chat";
import { useState } from 'react';
import { LoadingIndicator } from "stream-chat-react";

type HomeState = {
  apiKey: string;
  user: User;
  token: string;
}


export default function Home() { 
  const [homeState, setHomeState] = useState<HomeState | undefined>();
  
  // LoadingIndicator is displayed until we have a homestate to display.
  if (!homeState){return <LoadingIndicator/>};

  return (<div>Welcome to Discord</div>);
}

import { clerkClient } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";

export async function POST(request: Request) {

    const apiKey = process.env.STREAM_API_KEY;
    if (!apiKey){
        return Response.error();
    }

    const serverClient = StreamChat.getInstance(
      apiKey,
      process.env.STREAM_CHAT_SECRET
    );
    const body = await request.json();
    console.log('[/api/register-user] Body:', body);
  
    const userId = body?.userId;
    const mail = body?.email;
  
//Error if userID or email field is null.
    if (!userId || !mail) {
      return Response.error();
    }
}

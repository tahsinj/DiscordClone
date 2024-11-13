import { useEffect, useState } from "react";
import {StreamChat, TokenOrProvider, User} from 'stream-chat';

export type UseClinetOptions = {
    apiKey: string;
    user: User;
    tokenOrProvider: TokenOrProvider;
}

export const useClient = ({
    apiKey,
    user,
    tokenOrProvider,
}: UseClientOptions): StreamChat | undefined => {

};
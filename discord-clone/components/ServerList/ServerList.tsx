import { DiscordServer } from "@/models/DiscordServer"
import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import { useState } from 'react';
import Link from "next/link";
import CreateServerForm from "./CreateServerForm";
export default function ServerList(): JSX.Element {
    const [activeServer, setActiveServer] = useState<DiscordServer| undefined>();
    const servers: DiscordServer[] = [
        {
            id: '1',
            name: "A Test Server",
            image: ""
        },
        {
            id: '2',
            name: "B Test Server",
            image: ""
        },
        {
            id: '3',
            name: "C Test Server",
            image: ""
        }
    ];
    return (
        <div className='bg-dark-gray h-full flex flex-col items-center'>
            {servers.map((server)=>(
                <button key = {server.id} 
                    className={`p-4 sidebar-icon ${server.id === activeServer?.id ? 'selected-icon' : ''}`} 
                    onClick = {() => setActiveServer(server)}
                >
                    {server.image && checkIfUrl(server.image) ? (
                        <Image
                        className = 'rounded-icon'
                        src = {server.image}
                        width = {50}
                        height = {50}
                        alt = 'Server Icon'/>
                    ) : (
                        <span className = 'rounded-icon bg-gray-600 w-[50px] flex items-center justify-center text-sm'>
                            {server.name.charAt(0)}
                        </span>
                    )}
                </button>
            ))}
            <Link
            href={'/?createServer=true'}
            className='flex items-center justify-center rounded icon bg-white p-2 my-2 text-2xl font-light h-12 w-12 text-green-500 hover:bg-green-500 hover:text-white hover:rounded-xl transition-all duration-200'
            >
                <span className='inline-block'>+</span>
            </Link>
            <CreateServerForm/>
        </div>
    );

    function checkIfUrl(path: string): Boolean {
        try {
            const _ = new URL(path);
            return true;
        } catch (_) {
            return false;
        }
    }
}


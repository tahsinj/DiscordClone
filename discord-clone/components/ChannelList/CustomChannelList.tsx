import { useDiscordContext } from "@/context/DiscordContext";

export default function CustomChannelList(): JSX.Element {

    const {server} = useDiscordContext();

    return(<div className='w-72 bg-medium-gray h-full flex flex-col items-start'>
        <h2>CUSTOM CHANNEL LIST</h2>
        <h2>{server?.name || 'Direct Messages'}</h2>
    </div>);
}
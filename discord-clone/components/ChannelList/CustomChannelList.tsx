import { useDiscordContext } from "@/context/DiscordContext";
import ChannelListTopBar from "./TopBar/ChannelListTopBar";

export default function CustomChannelList(): JSX.Element {

    const {server} = useDiscordContext();

    return(<div className='w-72 bg-medium-gray h-full flex flex-col items-start'>
        <ChannelListTopBar serverName = {server?.name || 'Direct Messages'}/>

    </div>);
}
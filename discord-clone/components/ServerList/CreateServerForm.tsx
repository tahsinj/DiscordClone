import Link from "next/link";

export default function CreateServerForm(): JSX.Element{

    return (
        <dialog className='absolute z-10 space-y-2 rounded-xl'>
        <div className='w-full felx items-center justify-between py-8 px-6'>
            <h2 className='text-3xl font-semibold text-gray-600'>
                Create new server
            </h2>
            <Link href='/'></Link>
        </div>
        </dialog>
    )
}   
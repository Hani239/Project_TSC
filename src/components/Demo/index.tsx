import React from 'react'
import Image from 'next/image'
import profile from '@/image/profile1.jpg'

type Props = {}

const Demo = (props: Props) => {
    return (
        <div className='flex justify-center items-center h-screen gap-5 bg-[#F2FAFB]'>
            <div className='flex border-2 relative justify-between w-1/2 bg-white shadow-xl'>
                <div className='flex gap-5 m-5'>
                    <div className='profile flex rounded-md'>
                        <Image src={profile} height={80} width={80} alt={'profile'} className='border-2 rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex text-[#6F9E9A] font-bold'>Photosnap</div>
                        <div className='flex font-bold'>Senior Frontend Developer</div>
                        <div className='flex text-[#868E8D] font-medium w-full gap-3'>
                            <div className='text-sm'>1d ago</div>
                            <div className='text-sm'>Full time</div>
                            <div className='text-sm'>USA only</div>
                        </div>
                    </div>
                </div>
                <div className='flex absolute right-0 mr-5 items-center justify-center h-full gap-5'>
                    <div className='bg-[#F1F8F7] rounded-md font-medium text-[#98C0BD] p-2'>html</div>
                    <div className='bg-[#F1F8F7] rounded-md font-medium text-[#98C0BD] p-2'>css</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Demo
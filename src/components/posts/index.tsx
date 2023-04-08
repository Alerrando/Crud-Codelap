import React from 'react';
import { NetworkPostsProps } from '../../page/network';
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'

type PostsProps = {
    post: NetworkPostsProps
}

export function Posts({ post }: PostsProps) {
    return (
        <div className='w-3/4 md:w-[47rem] h-[316px] bg-[#fff] border border-[#999] rounded-2xl'>
            <header className='w-full h-auto flex flex-row items-center justify-between bg-[#7695EC] py-7 px-9 rounded-t-2xl'>
                <h2 className='text-white font-roboto font-bold text-[22px] leading-6'>{post.title}</h2>
            
                <div className="w-auto h-auto flex flex-row gap-[34.2px]">
                    <RiDeleteBin2Line size={22} className='cursor-pointer' color='white' />
                    <FiEdit size={22} className='cursor-pointer' color="white" />
                </div>
            </header>

            <section className='w-full h-full p-6'>
                <div className="w-full h-auto flex items-center justify-between">
                    <span className='text-[#777] font-roboto font-bold text-lg leading-[21px]'>{`@${post.username}`}</span>
                </div>
            </section>
        </div>
    );
}
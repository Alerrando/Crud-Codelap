import React from 'react';
import { NetworkPostsProps } from '../../page/network';
import { FormPost } from '../formPost';

type ModalProps = {
    editPost?: NetworkPostsProps;
    setEditPost?: (editPost: NetworkPostsProps) => void;
}

export function Modal({ editPost, setEditPost }: ModalProps) {
    return (
        <div className='fixed flex items-center justify-center bg-modal inset-0'>
            <div className="w-3/4 md:w-[47rem] h-auto bg-[#fff] border border-[#999] rounded-2xl">
                <FormPost titleForm={"Edit Item"} editPost={editPost} setEditPost={setEditPost} />
            </div>
        </div>
    );
}
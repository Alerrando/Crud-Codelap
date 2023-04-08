import React from 'react';
import { NetworkPostsProps } from '../../page/network';

type ModalProps = {
    editPost: NetworkPostsProps
}

export function Modal({ editPost }: ModalProps) {
    return (
        <div className='fixed bg-modal inset-0'>
            
        </div>
    );
}
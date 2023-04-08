import React from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

type PaginationProps = {
    pageNumber: number,
    setPageNumber: (pageNumber: number) => void,
    pageTotal: number,
}

export function Pagination(props: PaginationProps) {
    const { pageNumber, pageTotal, setPageNumber } = props;

    return (
        <div className="w-[65%] flex items-center justify-end gap-2">
          <AiOutlineDoubleLeft 
            onClick={() => setPageNumber(0)} 
            size={18} 
            className="cursor-pointer hover:text-blue-500 transition-colors" 
          />

          <AiOutlineLeft 
            onClick={() => pageNumber !=0 && setPageNumber(pageNumber - 1)} 
            size={18} 
            className="cursor-pointer hover:text-blue-500 transition-colors" 
          />

          {pageNumber + 1}

          <AiOutlineRight 
            onClick={() => pageNumber+1 < Math.floor(pageTotal/10) && setPageNumber(pageNumber + 1)} 
            size={18} 
            className="cursor-pointer hover:text-blue-500 transition-colors" 
          />

          <AiOutlineDoubleRight 
            onClick={() => setPageNumber(Math.floor(pageTotal/10))} 
            size={18} 
            className="cursor-pointer hover:text-blue-500 transition-colors" 
          />

        </div>
    );
}
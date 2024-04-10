/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Columns } from '../../types';

const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Boards);

  return (
    <>
      <DragDropContext onDragEnd={(result: any)=>console.log(result)}>

        <div className="w-full flex items-start justify-between px-5 md:gap-0 gap-10">

        </div>
      </DragDropContext>
    </>
  )
}

export default Boards
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components';
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
 background-color: ${(props) => props.theme.boardColor};
 padding: 10px 10px;
 border-radius: 5px;
 min-height: 200px;
 height: auto;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

const Board = ({toDos, boardId}: IBoardProps) => {
  return (
    <Wrapper>
        <Title>{boardId}</Title>
    <Droppable droppableId={boardId}>
    {(provided) => (
      <div 
        ref={provided.innerRef} 
        {...provided.droppableProps}
      >
        {toDos.map((toDo, index) => (
          <DraggableCard key={toDo} index={index} toDo={toDo} />
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
  </Wrapper>
  );
}

export default Board

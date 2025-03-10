import styled from 'styled-components'; 
import {DragDropContext, Droppable, Draggable, DropResult} from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { toDoState } from './atoms';
import DraggableCard from './Components/DraggableCard';

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 480px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
 background-color: ${(props) => props.theme.boardColor};
 padding: 30px 10px 20px 10px;
 border-radius: 5px;
 min-height: 200px;
`;



const toDos =  ["a", "b", "c", "d", "e", "f"];

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source}: DropResult) => {
    // User drops it on the same place
    if(!destination) return;
    setToDos((currentToDos) => {
      const toDosCopy = [...currentToDos];
      // 1. Delete item on source.index
      toDosCopy.splice(source.index, 1);
      // 2. Put back the item on the destination.index
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId='one'>
            {(provided) => (
              <Board 
                ref={provided.innerRef} 
                {...provided.droppableProps}
              >
                {toDos.map((toDo, index) => (
                  <DraggableCard key={toDo} index={index} toDo={toDo} />
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App

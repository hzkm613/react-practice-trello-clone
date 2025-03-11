import styled from 'styled-components'; 
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { toDoState } from './atoms';
import Board from './Components/Board';

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
  max-width: 680px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;


const toDos =  ["a", "b", "c", "d", "e", "f"];

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source}: DropResult) => {
    // User drops it on the same place
    if(!destination) return;
    // setToDos((currentToDos) => {
    //   const toDosCopy = [...currentToDos];
    //   // 1. Delete item on source.index
    //   toDosCopy.splice(source.index, 1);
    //   // 2. Put back the item on the destination.index
    //   toDosCopy.splice(destination?.index, 0, draggableId);
    //   return toDosCopy;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
        {Object.keys(toDos).map((boardId) => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />)}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App

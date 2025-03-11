import React, { memo } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 5px;
`;

interface IDraggableCard {
    toDo: string;
    index: number;
}

const DraggableCard = ({toDo, index}: IDraggableCard) => {
  return (
<Draggable draggableId={toDo} index={index}>
                    {(provided) => (
                      <Card 
                        ref={provided.innerRef} 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
  )
}

//export default memo(DraggableCard);
export default DraggableCard;
import { KeyboardEvent, useRef } from "react";
import { Container } from "./styles";

type AddAreaProps = {
  onEnter: (taskName: string) => void;
}

export const AddArea = ({ onEnter }: AddAreaProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' && inputRef.current!.value !== '') {
      onEnter(inputRef.current!.value);
      inputRef.current!.value = '';
    }
  }

  return (
    <Container>
      <div className="image">+</div>
      <input
        ref={ inputRef }
        type="text"
        placeholder="Adicione uma tarefa"
        onKeyUp={ handleKeyUp }
      />
    </Container>
  );
};

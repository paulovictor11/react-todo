import { useState } from 'react';
import { Area, Container, Header } from './App.styles';
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';
import { Item } from './types/Item';

export const App = () => {

  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: 'Comprar pão na padaria', done: false },
    { id: 2, name: 'Comprar bolo na padaria', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    const item = { id: list.length + 1, name: taskName, done: false };
    setList([...list, item]);
  }

  const handleCheckTask = (isChecked: boolean, id: number) => {
    const findedItem = list.find((item: Item) => item.id === id);
    findedItem!.done = isChecked;
  }
  
  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea onEnter={ handleAddTask } />

        {
          list.map((item: Item, index: number) => (
            <ListItem key={ index } item={ item } onCheck={ handleCheckTask } />
          ))
        }
      </Area>
    </Container>
  );
}
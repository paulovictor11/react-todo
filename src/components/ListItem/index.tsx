import { ChangeEvent, useState } from 'react';
import { Item } from '../../types/Item';
import { Container } from './styles';

type ListItemProps = {
    item: Item;
    onCheck: (isChecked: boolean, id: number) => void;
}

export const ListItem = ({ item, onCheck }: ListItemProps) => {

    const [ isChecked, setIsChecked ] = useState<boolean>(item.done);

    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        onCheck(event.target.checked, item.id);
        setIsChecked(event.target.checked);
    }

    return (
        <Container done={ isChecked }>
            <input type="checkbox" checked={ isChecked } onChange={ handleChecked } />
            <label>{ item.name }</label>
        </Container>
    );
}

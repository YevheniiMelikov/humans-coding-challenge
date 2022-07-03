import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EditableNameForm } from '../EditableNameForm';
import { Name } from './styled';

export interface EditableNameProps {
  name?: string;
  newHuman?: boolean;
}

export const EditableName = ({ name, newHuman = false }: EditableNameProps) => {
  const { id } = useParams<{ id?: string }>();

  const [isEditing, setIsEditing] = useState(newHuman);

  const handleClick = () => setIsEditing(true);
  const onSubmit = () => setIsEditing(false);

  useEffect(() => {
    setIsEditing(newHuman);
  }, [newHuman, id]);

  if (isEditing) {
    return <EditableNameForm onSubmit={onSubmit} name={name} />;
  }

  return <Name onClick={handleClick}>{name}</Name>;
};

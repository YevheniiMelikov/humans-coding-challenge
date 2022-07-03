import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import {
  useCreateHumanMutation,
  useUpdateHumanMutation,
} from '../../../../api';
import { Human } from '../../../../types';
import { useCreateHumanCacheUpdate } from './CreateHumanCacheUpdate';
import { EditHumanFormInput } from './styled';
import { useUpdateHumanCacheUpdate } from './UpdateHumanCacheUpdate';

export interface EditableNameFormProps {
  onSubmit?: (data: Pick<Human, 'name'>) => void;
  name?: string;
}

export const EditableNameForm = ({
  name,
  onSubmit: onSubmitCallback = () => undefined,
}: EditableNameFormProps) => {
  const { register, handleSubmit } = useForm<Pick<Human, 'name'>>({
    mode: 'all',
    defaultValues: {
      name: name || 'New Human',
    },
  });

  const { id } = useParams<{ id?: string }>();
  const history = useHistory();

  const { ref, ...rest } = register('name', { required: true });
  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  // TODO: add error handling and loading states
  const [createHuman] = useCreateHumanMutation();
  const [updateHuman] = useUpdateHumanMutation();

  const updateHumanCacheUpdate = useUpdateHumanCacheUpdate();
  const createHumanCacheUpdate = useCreateHumanCacheUpdate();

  const onSubmit = handleSubmit((data) => {
    if (id) {
      return updateHuman({ id, name: data.name }).then((result) => {
        onSubmitCallback(data);
        updateHumanCacheUpdate(result as { data: Human });
      });
    }
    return createHuman({ name: data.name }).then((result) => {
      onSubmitCallback(data);
      createHumanCacheUpdate(result as { data: Human });
      history.push(`/humans/${(result as { data: Human }).data.id}`);
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <EditHumanFormInput
        {...rest}
        ref={(e) => {
          ref(e);
          nameRef.current = e;
        }}
      />
    </form>
  );
};

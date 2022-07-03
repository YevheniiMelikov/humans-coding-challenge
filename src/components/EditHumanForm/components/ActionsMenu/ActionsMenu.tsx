import { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Button } from '../../../Button';
import { PopoverContent } from './styled';
import { DeleteHuman } from './components/DeleteHuman';

export const ActionsMenu = ({ hidden }: { hidden?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  if (hidden) {
    return null;
  }

  return (
    <Popover
      isOpen={isOpen}
      positions={['bottom', 'top', 'left', 'right']}
      onClickOutside={close}
      content={
        <PopoverContent>
          <DeleteHuman />
        </PopoverContent>
      }
    >
      <Button icon={<HiDotsHorizontal />} variant="link" onClick={open} />
    </Popover>
  );
};

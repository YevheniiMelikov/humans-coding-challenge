import React from 'react';
import { Human } from '../../../../types';
import { getInitialsFromFullName } from '../../../../utils/nameUtils';
import { Avatar } from '../../../Avatar';
import { Timestamp } from './components/Timestamp';
import { HumanCardContainer, HumanName, HumanCardGrid } from './styled';

export interface HumanCardProps {
  human: Human;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const HumanCard = ({ human, onClick }: HumanCardProps) => (
  <HumanCardContainer key={human.id} onClick={onClick}>
    <HumanCardGrid>
      <Avatar
        url={human.avatarUrl}
        fallback={getInitialsFromFullName(human.name)}
      />
      <HumanName>{human.name}</HumanName>
      <Timestamp date={human.updatedAt} />
    </HumanCardGrid>
  </HumanCardContainer>
);

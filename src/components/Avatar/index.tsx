import React from 'react';
import { AvatarProps } from './../../components/Share/types';
import './../../build.css';

export default (props: AvatarProps) => {
  const { name = '-', avatarUrl = '', size = 6 } = props;
  const firstLetter = name.slice(0, 1);

  if (avatarUrl) {
    return (
      <img
        className={`w-${size}`}
        src={avatarUrl}
        alt={name || 'avatar-image'}
      />
    );
  }

  // Todo: Need to use size prop for width & height
  return (
    <div
      className={`flex w-6 h-6 bg-gray-500 text-white rounded text-sm items-center`}
    >
      <span className="flex-1 text-center">{firstLetter}</span>
    </div>
  );
};

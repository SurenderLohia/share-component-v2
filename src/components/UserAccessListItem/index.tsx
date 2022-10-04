import { accessTypes } from '../Share/data';
import { AccessListItemProps } from '../Share/types';

export default (props: AccessListItemProps) => {
  const { name, info, avatarUrl, accessType, handleAccessTypeChange } = props;
  return (
    <div className="flex items-center mb-4">
      <div className="flex">
        <img src={avatarUrl} alt={name} />
      </div>
      <div className="ml-2">
        <span className="font-main text-base text-gray-900 font-normal">
          {name}
        </span>{' '}
        <br />
        <span className="font-main text-sm text-gray-500 font-normal">
          {info}
        </span>
      </div>
      <div className="group relative ml-auto">
        <select
          className="p-2 text-xs text-gray-500"
          onChange={handleAccessTypeChange}
          value={accessType}
        >
          {accessTypes.map((accessType) => (
            <option key={accessType.id} value={accessType.id}>
              {accessType.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import './styles/build.css';

import { ShareIcon, GlobeIcon, HelpIcon, LinkIcon } from './Icons';
import {
  AccessListItemProps,
  AccessTypeId,
  Person,
  ShareCurrentView,
  ShareProps,
} from './types';
import { accessTypes } from './data';
import PersonItem from '../PersonItem';
import ChipItem from '../ChipItem';

const buttonClass =
  'bg-gray-1000 text-white font-main font-normal py-2 px-4 text-sm rounded flex gap-2 items-center hover:bg-gray-700 mb-1';

const SectionTitle = (text: string) => {
  return <h3 className="text-base font-main text-gray-700 mb-3"> {text} </h3>;
};

const Footer = (
  <div className="flex px-3 py-3 bg-gray-50 rounded-b-lg">
    <button type="button" className="flex gap-2 text-gray-500 items-center">
      {HelpIcon}
      <span className="text-sm">learn about sharing</span>
    </button>
    <button
      type="button"
      className="flex ml-auto gap-2 text-gray-900 items-center"
    >
      {LinkIcon}
      <span className="text-sm">Copy link</span>
    </button>
  </div>
);

const AccessListItem = (props: AccessListItemProps) => {
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

export default function (props: ShareProps) {
  const { persons, groups, userAccessList } = props;
  const [currentView, setCurrentView] =
    useState<ShareCurrentView>('share-button');
  const [selectedPersons, setSelectedPersons] = useState<Person[]>([]);
  const [searchText, setSearchText] = useState('');
  const [allPersons, setAllPersons] = useState(persons);
  const [allGroups, setAllGroups] = useState(groups);
  const [selectedAccessType, setSelectedAccessType] = useState('no-access');
  const [selectedPersonIds, setSelectedPersonIds] = useState<number[]>([]);

  // Todo: change access need to implement

  useEffect(() => {
    if (searchText) {
      const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(searchText)
      );

      const filteredGroups = groups.filter((group) =>
        group.name.toLowerCase().includes(searchText)
      );

      setAllGroups(filteredGroups);
      setAllPersons(filteredPersons);
    } else {
      setAllPersons(persons);
      setAllGroups(groups);
    }
  }, [searchText]);

  useEffect(() => {
    const _selectedPersonIds = selectedPersons.map((item) => item.id);
    setSelectedPersonIds(_selectedPersonIds);
  }, [selectedPersons]);

  const handleShareButtonClick = () => {
    setCurrentView('list');
  };

  const handleSearchClick = () => {
    setCurrentView('person-selection');
  };

  const handleInviteClick = () => {
    // Todo: Make api call here
    console.log({ selectedPersons });
    console.log({ selectedAccessType });
    setCurrentView('share-button');
  };

  const addPerson = (person: Person) => {
    const newPersons = [...selectedPersons, person];
    setSelectedPersons(newPersons);
    setSearchText('');
  };

  const handleSelectPerson = (person: Person) => {
    addPerson(person);
  };

  const removePerson = (id: number) => {
    const newPersons = [...selectedPersons].filter(
      (person) => person.id !== id
    );
    setSelectedPersons(newPersons);
  };

  const handleRemovePerson = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const personId = e.target.getAttribute('data-person-id');
    if (personId) {
      const id = Number(personId);
      removePerson(id);
    }
  };

  const handleOnSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleAccessTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAccessType(e.target.value);
  };

  return (
    <div className="share-container">
      {currentView === 'share-button' && (
        <>
          <button
            className={buttonClass}
            type="button"
            onClick={handleShareButtonClick}
          >
            Share
            {ShareIcon}
          </button>
        </>
      )}
      {/* Invite-view */}
      {currentView === 'list' && (
        <div className="border border-gray-200 rounded-lg">
          <div className="flex border-b border-gray-200">
            <div className="flex pl-5 pr-3 py-4 items-center">
              {GlobeIcon}
              <div className="ml-4">
                <span className="font-main text-base text-gray-900 font-normal">
                  Share to web
                </span>{' '}
                <br />
                <span className="font-main text-sm text-gray-500 font-normal">
                  Publish and share link with anyone
                </span>
              </div>
            </div>
            {/* "https://medium.com/front-end-weekly/build-a-css-only-toggle-switch-using-tailwindcss-d2739882934" */}
            <label className="relative flex justify-between items-center p-2 text-xl ml-auto">
              <input
                type="checkbox"
                className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
              />
              <span className="w-11 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5"></span>
            </label>
          </div>
          <div className="px-3 py-4 border-b border-gray-200">
            <div className="flex mb-4">
              <input
                type="text"
                className="border border-gray-300 rounded-l px-2 py-1 font-main flex-1"
                placeholder="People, emails, groups"
                onClick={handleSearchClick}
              />
              <span className="border border-gray-300 border-l-0 rounded-r px-4 py-2 font-main bg-gray-50 text-gray-700">
                Invite
              </span>
            </div>
            {userAccessList.map((item) => (
              <AccessListItem
                name={item.name}
                info={item.info}
                avatarUrl={item.avatarUrl}
                accessType={item.accessType as AccessTypeId}
                handleAccessTypeChange={handleAccessTypeChange}
              />
            ))}
          </div>

          {Footer}
        </div>
      )}
      {/* Person selection view */}
      {currentView === 'person-selection' && (
        <div className="border border-gray-200 rounded-lg">
          <div className="flex px-3 py-3 bg-gray-50 rounded-t-lg items-center">
            <div onClick={handleRemovePerson}>
              {selectedPersons.map((person) => (
                <ChipItem text={person.name} id={person.id} />
              ))}
            </div>

            <input
              type="text"
              className="flex-1 text-sm text-gray-500 font-main focus:bottom-0 p-1 bg-transparent focus:outline-0"
              placeholder="Search emails, names or groups"
              value={searchText}
              onChange={handleOnSearchTextChange}
            />

            <div className="flex ml-auto">
              <select
                className="p-2 text-xs text-gray-500 bg-transparent mr-3"
                onChange={handleAccessTypeChange}
                value={selectedAccessType}
              >
                {accessTypes.map((accessType) => (
                  <option key={accessType.id} value={accessType.id}>
                    {accessType.label}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="border border-gray-200 rounded-lg text-sm text-gray-700 px-3 py-2"
                onClick={handleInviteClick}
              >
                Invite
              </button>
            </div>
          </div>
          {allPersons.filter((person) => !selectedPersonIds.includes(person.id))
            .length > 0 && (
            <div className="pl-6 pr-4 py-4">
              {SectionTitle('Select a person')}
              {allPersons
                .filter((person) => !selectedPersonIds.includes(person.id))
                .map((person) => (
                  <PersonItem
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    avatarUrl={person.avatarUrl}
                    accessType={person.accessType as AccessTypeId}
                    handleSelectPerson={handleSelectPerson}
                  />
                ))}
            </div>
          )}
          {allGroups.filter((person) => !selectedPersonIds.includes(person.id))
            .length > 0 && (
            <div className="pl-6 pr-4 py-4">
              {SectionTitle('Select a group')}
              {allGroups
                .filter((person) => !selectedPersonIds.includes(person.id))
                .map((person) => (
                  <PersonItem
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    accessType={person.accessType as AccessTypeId}
                    handleSelectPerson={handleSelectPerson}
                  />
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

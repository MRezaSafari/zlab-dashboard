import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  IDropdownOption,
  IDropdownProps,
} from '@zlab/shared-models';

import styles from './dropdown.module.scss';

export function Dropdown(props: IDropdownProps) {
  const { onChange, options, minimumSearchLength = 0 } = props;

  const [selectedOption, setSelectedOption] = useState<string>('Select option');
  const [optionsList, setOptionsList] = useState<IDropdownOption[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [listOpenState, setListOpenState] = useState<boolean>(false);

  const SearchInputRef = useRef<HTMLInputElement | null>(null);
  const ContainerRef = useRef<HTMLDivElement | null>(null);

  const handleFillingOptions = () => {
    setOptionsList(options);
  };

  const toggleListState = () => {
    setListOpenState(!listOpenState);
  };

  const handleSelectOption = (option: IDropdownOption) => {
    onChange(option.value);
    setSelectedOption(option.label);
    toggleListState();
  };

  const handleSearch = (term: string) => {
    if (term.length === 0) setOptionsList(options);

    if (term.length <= minimumSearchLength) return;

    const filteredList = optionsList.filter(
      (item) => (item.value.toLowerCase()).indexOf(term.toLowerCase()) > -1
    );
    setOptionsList(filteredList);
  };

  const handleInputFocus = (state: boolean) => {
    if (state) {
      // we use timeout because the state open have some animation that took 400ms
      setTimeout(() => {
        SearchInputRef?.current?.focus();
      }, 100);
    }
  };

  const handleOutSideClick = () => {
    const onClickOutside = (e: any) => {
      if (ContainerRef.current && !ContainerRef.current.contains(e.target))
        setListOpenState(false);
    };

    document.addEventListener('click', onClickOutside);

    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  };

  useEffect(handleOutSideClick, []);

  useEffect(() => {
    handleInputFocus(listOpenState);
  }, [listOpenState]);
  useEffect(handleFillingOptions, [options]);
  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value.trim());
  };

  const renderOptions = () =>
    optionsList.map((option: IDropdownOption) => (
      <li key={option.id} onClick={() => handleSelectOption(option)}>
        {option.label}
      </li>
    ));

  return (
    <div className={styles['container']} ref={ContainerRef}>
      <div
        data-testid="parent-container"
        onClick={toggleListState}
        className={styles['selected-option-container']}
      >
        <p className={styles['selection-option']}>{selectedOption}</p>
      </div>
      <div
        data-testid="dropdown-inner-container"
        className={`${styles['inner-container']} ${
          listOpenState ? styles['active'] : ''
        }`}
      >
        {listOpenState && (
          <>
            <input
              ref={SearchInputRef}
              className={styles['search-input']}
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Search..."
            />
            <ul className={styles['options-list']}>{renderOptions()}</ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Dropdown;

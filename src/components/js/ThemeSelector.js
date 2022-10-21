/* eslint-disable react/react-in-jsx-scope */
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import '../css/ThemeSelector.css';


function ThemeSelector() {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Theme Selector">
        <Dropdown.Item href="#/action-1">Coming</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Very</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Soon</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default ThemeSelector;







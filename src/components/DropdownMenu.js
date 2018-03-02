import styled from 'styled-components';
import React, { Component, Fragment } from 'react';
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/Menu';
import { ArrowDropDown } from './../icons/icons';

const Dropdown = styled.select`
  border-color: transparent;
  background-color: transparent;
  color: black;
  width: 100%;
  position: absolute;
  z-index: 1;
  font-size: 17px;
  -webkit-appearance: button; /* hide default arrow in chrome OSX */

  &:focus {
    outline: none;
  }
`;

const HiddenOption = styled.option`
  display: none;
`;

const Symbol = styled(ArrowDropDown)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  bottom: 5px;
  fill: #726969;
`;

export default class DropdownMenu extends Component {
  state = {
    isOpen: false,
    selected: this.props.options[0],
    options: this.props.options,
  }
   
  onSelectMenuItem = (option): void => {
    this.setState({ selected: option });
  }

  toggleSelect = (e): boolean => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    return false;
  }

  render() {
    const { options, isOpen, selected } = this.state;
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    return (
      <div onClick={this.toggleSelect}>
        {(!isChrome || navigator === undefined) && (
          <Dropdown
            defaultValue={selected}
          >
            {options.map(option => (
              <option key={option}>
                {option}
              </option>
            ))}
          </Dropdown>
        )}
        {isChrome && (
          <Fragment>
            <Dropdown
              value={selected}
              hidden={isOpen}
            >
              {options.map(option => (
                <HiddenOption key={option}>
                  {option}
                </HiddenOption>
              ))}
            </Dropdown>
            <Menu
              aria-hidden="true"
              value={selected}
              open={isOpen}
            >
              {options.map(option => (
                <MenuItem
                  key={option}
                  onClick={() => this.onSelectMenuItem(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Fragment>
        )}
        <Symbol />
      </div>
    );
  }
}

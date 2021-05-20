import React from 'react';

export default function useExpandable() {
  const [isOpen, setIsOpen] = React.useState(false);
  var toogleData = isOpen
    ? {
        displayStyle: {display: 'flex'},
        icon: 'arrow-dropup',
        text: 'Less Info',
      }
    : {
        displayStyle: {display: 'none'},
        icon: 'arrow-dropdown',
        text: 'More Info',
      };

  function toogle() {
    setIsOpen(!isOpen);
  }

  return {toogle, toogleData};
}

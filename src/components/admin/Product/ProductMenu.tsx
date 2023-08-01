'use client';
import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProductMenu = () => {
  const onDelete = () => {};
  const onUpdate = () => {};
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  return (
    <div className='absolute right-10 top-1/2 -translate-y-1/2'>
      <div onClick={handleOpenMenu} className='cursor-pointer text-purple-700'>
        <BsThreeDotsVertical size={24} />
      </div>
      <Menu
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            onUpdate();
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            onDelete();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProductMenu;

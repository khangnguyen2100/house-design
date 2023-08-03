'use client';
import { Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { API_URL } from '@/constants';
import useConfirm from '@/hooks/useConfirm';
interface Props {
  productId: string;
}
const ProductMenu = ({ productId }: Props) => {
  const router = useRouter();
  const { ConfirmModal, confirmResult } = useConfirm({
    title: 'Xóa sản phẩm',
    message: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
  });
  const onDelete = async () => {
    const result = await confirmResult();
    if (result) {
      const response = await fetch(`${API_URL}/products/${productId}`, {
        method: 'DELETE',
        next: {
          tags: ['products', 'categories'],
        },
      });
      if (response.ok) {
        router.refresh();
        enqueueSnackbar('Xóa sản phẩm thành công', { variant: 'success' });
      } else {
        enqueueSnackbar('Xóa sản phẩm thất bại', { variant: 'error' });
      }
    }
  };
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
      <ConfirmModal />
    </div>
  );
};

export default ProductMenu;

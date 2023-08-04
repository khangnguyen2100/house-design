'use client';
import { Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { CategoryProps } from '@/Types/Type';
import { API_URL } from '@/constants';
import useConfirm from '@/hooks/useConfirm';

import UpdateProductModal from './UpdateProductModal';
interface Props {
  categories: CategoryProps[];
  productId: string;
}
const ProductMenu = ({ productId, categories }: Props) => {
  const router = useRouter();
  const { ConfirmModal, confirmResult } = useConfirm({
    title: 'Xóa sản phẩm',
    message: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
  });
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  // menu
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  // update modal
  const handleOpenUpdateModal = () => {
    setOpenUpdateModal(true);
  };
  const handleCloseUpdateModal = () => {
    setOpenUpdateModal(false);
  };

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
            handleOpenUpdateModal();
          }}
        >
          Update
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
      <UpdateProductModal
        productId={productId}
        categories={categories}
        onOpen={handleOpenUpdateModal}
        onClose={handleCloseUpdateModal}
        open={openUpdateModal}
      />
      <ConfirmModal />
    </div>
  );
};

export default ProductMenu;

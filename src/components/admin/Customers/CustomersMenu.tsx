'use client';
import { Menu, MenuItem } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { UserProps } from '@/Types/Type';

interface Props {
  userData: UserProps;
}
const CustomersMenu = ({ userData }: Props) => {
  const router = useRouter();
  const session = useSession();
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  const checkIsCurrentUser = () => {
    const currentUserId = (session?.data?.user as { id: string }).id;

    if (userData._id === currentUserId) return true;
    return false;
  };

  const handleSwitchAccountStatus = async () => {
    if (checkIsCurrentUser())
      return enqueueSnackbar('Không thể chỉnh sửa tài khoản của chính mình', {
        variant: 'error',
      });
    const request = await fetch(
      `/api/users/${userData._id}?type=change-status`,
      {
        method: 'POST',
      },
    );
    const data = await request.json();
    if (request.ok) {
      router.refresh();
      enqueueSnackbar(data.message, { variant: 'success' });
    } else {
      enqueueSnackbar('Xảy ra lỗi', { variant: 'error' });
    }
  };
  const handleSwitchAccountRole = async () => {
    if (checkIsCurrentUser())
      return enqueueSnackbar('Không thể chỉnh sửa tài khoản của chính mình', {
        variant: 'error',
      });
    if (userData.status === 'block') {
      return enqueueSnackbar('Tài khoản đã bị khóa', {
        variant: 'error',
      });
    }
    const request = await fetch(`/api/users/${userData._id}?type=change-role`, {
      method: 'POST',
    });
    const data = await request.json();
    if (request.ok) {
      router.refresh();
      enqueueSnackbar(data.message, { variant: 'success' });
    } else {
      enqueueSnackbar('Xảy ra lỗi', { variant: 'error' });
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
            handleSwitchAccountStatus();
          }}
        >
          {userData.status === 'active'
            ? 'Khóa tài khoản'
            : 'Mở khóa tài khoản'}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            handleSwitchAccountRole();
          }}
        >
          {userData.role === 'admin'
            ? 'Phân quyền khách hàng'
            : 'Phân quyền admin'}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CustomersMenu;

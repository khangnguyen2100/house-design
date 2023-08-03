'use client';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { FormEvent, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';

import { API_URL } from '@/constants';
import { CategoryProps } from '@/Types/Type';

interface Props {
  categories: CategoryProps[];
}

const AddProductModal = ({ categories }: Props) => {
  const [categoryValue, setCategoryValue] = useState(categories[0]._id);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setCategoryValue(event.target.value);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleAddProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // validate

    const data = new FormData(event.currentTarget);
    const enteredName = data.get('name') as string;
    const enteredPrice = data.get('price') as string;
    const enteredSalePrice = data.get('salePrice') as string;
    const enteredThumbnail = data.get('thumbnail') as string;
    const enteredCategory = data.get('category') as string;
    const enteredRemainingItem = data.get('remainingItem') as string;
    const enteredDescription = data.get('description') as string;

    if (
      !enteredName ||
      !enteredPrice ||
      !enteredThumbnail ||
      !enteredRemainingItem ||
      !enteredSalePrice ||
      !enteredCategory
    ) {
      enqueueSnackbar('Vui lòng nhập đủ thông tin', {
        variant: 'info',
      });
      setLoading(false);
      return;
    }

    try {
      // send request
      const res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: enteredName,
          price: enteredPrice,
          salePrice: enteredSalePrice,
          thumbnail: enteredThumbnail,
          category: enteredCategory,
          remainingItem: enteredRemainingItem,
          description: enteredDescription,
        }),
        next: {
          tags: ['products', 'categories'],
        },
      });
      const data = await res.json();
      enqueueSnackbar(data.message, { variant: 'success' });
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    setLoading(false);
    handleCloseModal();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        onBackdropClick={handleCloseModal}
        maxWidth='md'
        fullWidth
      >
        <DialogTitle className='font-semibold text-typo-1'>
          Thêm sản phẩm
        </DialogTitle>
        <DialogContent className='w-full'>
          <Box
            className='mt-6 flex w-full flex-col gap-y-3'
            component='form'
            onSubmit={handleAddProduct}
            noValidate
          >
            {/* name */}
            <div className='flex items-center gap-x-4'>
              <div className='w-1/2'>
                <TextField
                  autoComplete='name'
                  name='name'
                  fullWidth
                  id='name'
                  label='Tên'
                  autoFocus
                />
              </div>
              {/* category */}
              <div className='w-1/2'>
                <Select
                  value={categoryValue}
                  onChange={handleChange}
                  displayEmpty
                  fullWidth
                  name='category'
                  id='category'
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {categories.map((category: CategoryProps, index: number) => {
                    return (
                      <MenuItem key={index} value={category._id}>
                        {category.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              {/* price */}
              <div className='w-1/2'>
                <TextField
                  name='price'
                  fullWidth
                  label='Giá gốc'
                  type='number'
                  id='price'
                />
              </div>
              {/* sale price */}
              <div className='w-1/2'>
                <TextField
                  fullWidth
                  name='salePrice'
                  label='Giá bán'
                  type='number'
                  id='salePrice'
                />
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <div className='w-1/2'>
                {/* thumbnail */}
                <TextField
                  fullWidth
                  name='thumbnail'
                  label='Ảnh'
                  type='url'
                  id='thumbnail'
                />
              </div>
              <div className=' w-1/2 '>
                {/* remaining item */}
                <TextField
                  name='remainingItem'
                  fullWidth
                  id='remainingItem'
                  label='Số lượng'
                />
              </div>
            </div>
            {/* description */}
            <div className='w-full'>
              <TextareaAutosize
                id='description'
                placeholder='Giới thiệu sản phẩm'
                className='w-full rounded-md border !border-gray-400 p-3 font-montserrat text-sm focus:outline-none'
                name='description'
                minRows={7}
                maxRows={7}
              />
            </div>
            <div className='flex items-center justify-end gap-x-5'>
              <Button
                onClick={handleCloseModal}
                color='warning'
                variant='outlined'
              >
                Cancel
              </Button>
              <LoadingButton
                loading={loading}
                color='primary'
                type='submit'
                variant='contained'
              >
                Thêm
              </LoadingButton>
            </div>
          </Box>
        </DialogContent>
      </Dialog>
      <Fab
        color='secondary'
        aria-label='add'
        className='fixed bottom-10 right-10 z-10'
        onClick={handleOpenModal}
      >
        <IoMdAdd size={22} className='text-white' />
      </Fab>
    </>
  );
};

export default AddProductModal;

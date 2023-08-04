'use client';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import type { SelectChangeEvent } from '@mui/material';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { FormEvent, useEffect, useState } from 'react';
import isURL from 'validator/lib/isURL';

import { API_URL } from '@/constants';
import { CategoryProps, ProductProps } from '@/Types/Type';

interface Props {
  categories: CategoryProps[];
  open: boolean;
  productId: string;
  onClose: () => void;
  onOpen: () => void;
}

const UpdateProductModal = (props: Props) => {
  const { categories, open, onClose, productId } = props;
  const router = useRouter();

  const [categoryValue, setCategoryValue] = useState(categories[0]._id);
  const [productData, setProductData] = useState<ProductProps>();
  const [loading, setLoading] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setCategoryValue(event.target.value);
  };

  const handleUpdateProduct = async (event: FormEvent<HTMLFormElement>) => {
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
    if (!isURL(enteredThumbnail)) {
      enqueueSnackbar('Vui lòng nhập đúng định dạng url', {
        variant: 'info',
      });
      setLoading(false);
      return;
    }
    try {
      // send request
      const res = await fetch(`${API_URL}/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...productData,
          name: enteredName,
          price: enteredPrice,
          salePrice: enteredSalePrice,
          thumbnail: enteredThumbnail,
          category: enteredCategory,
          remainingItem: enteredRemainingItem,
          description: enteredDescription,
        }),
      });
      if (!res.ok) {
        throw new Error('Cập nhật sản phẩm thất bại');
      }
      const data = await res.json();
      router.refresh();
      enqueueSnackbar(data.message, { variant: 'success' });
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    setLoading(false);
    onClose();
  };
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`${API_URL}/products/${productId}`);
      if (!res.ok) {
        throw new Error('Lỗi');
      }
      const data = await res.json();
      setProductData(data);
      setCategoryValue(data.category._id);
    };
    getProduct();
  }, [productId]);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        onBackdropClick={onClose}
        maxWidth='md'
        fullWidth
      >
        <DialogTitle className='font-semibold text-typo-1'>
          Cập nhật sản phẩm
        </DialogTitle>
        <DialogContent className='w-full'>
          {productData ? (
            <Box
              className='mt-6 flex w-full flex-col gap-y-3'
              component='form'
              onSubmit={handleUpdateProduct}
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
                    defaultValue={productData?.name}
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
                    {categories.map(
                      (category: CategoryProps, index: number) => {
                        return (
                          <MenuItem key={index} value={category._id}>
                            {category.name}
                          </MenuItem>
                        );
                      },
                    )}
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
                    defaultValue={productData?.price}
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
                    defaultValue={productData?.salePrice}
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
                    defaultValue={productData?.thumbnail}
                    id='thumbnail'
                  />
                </div>
                <div className=' w-1/2 '>
                  {/* remaining item */}
                  <TextField
                    name='remainingItem'
                    fullWidth
                    defaultValue={productData?.remainingItem}
                    type='number'
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
                  defaultValue={productData?.description}
                  maxRows={7}
                />
              </div>
              <div className='flex items-center justify-end gap-x-5'>
                <Button onClick={onClose} color='warning' variant='outlined'>
                  Cancel
                </Button>
                <LoadingButton
                  loading={loading}
                  color='primary'
                  type='submit'
                  variant='contained'
                >
                  Cập nhật
                </LoadingButton>
              </div>
            </Box>
          ) : (
            <p>Loading...</p>
          )}
        </DialogContent>
      </Dialog>
      {/* <Fab
        color='secondary'
        aria-label='update'
        className='fixed bottom-10 right-10 z-10'
        onClick={onOpen}
      >
        <IoMdSave size={22} className='text-white' />
      </Fab> */}
    </>
  );
};

export default UpdateProductModal;

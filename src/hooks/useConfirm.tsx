'use client';
/* eslint-disable no-unused-vars */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

type Props = {
  title: string;
  message: string;
};
type PromiseType = {
  resolve: (value: boolean) => void;
  reject?: () => void;
} | null;

type ReturnType = {
  ConfirmModal: () => JSX.Element;
  confirmResult: () => Promise<boolean>;
};

const useConfirm = ({ title, message }: Props): ReturnType => {
  const [promise, setPromise] = useState<PromiseType>(null);

  const confirmResult = (): Promise<boolean> =>
    new Promise(resolve => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };
  const ConfirmModal = () => (
    <Dialog
      open={promise !== null}
      fullWidth
      classes={{
        paper: 'p-2',
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleConfirm} variant='outlined'>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
  return { ConfirmModal, confirmResult };
};

export default useConfirm;

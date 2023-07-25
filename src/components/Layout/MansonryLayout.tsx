'use client';

import Masonry from '@mui/lab/Masonry';
type Props<T> = {
  spacing?: number;
  columns?: number;
  itemArray: T[];
  itemRender: (item: T, index: number) => JSX.Element;
};
function MansonryLayout<T>(props: Props<T>) {
  const { spacing = 3, columns = 3, itemArray, itemRender } = props;
  return (
    <Masonry spacing={spacing} columns={columns}>
      {itemArray.map((item: T, index) => {
        return <div key={index}>{itemRender(item, index)}</div>;
      })}
    </Masonry>
  );
}

export default MansonryLayout;

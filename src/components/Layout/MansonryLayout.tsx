'use client';

import Masonry from '@mui/lab/Masonry';
type Props<T> = {
  spacing?: number;
  columns?: number;
  itemArray: T[];
  itemRender: (item: T, index: number) => JSX.Element;
};
function MasonryLayout<T>(props: Props<T>) {
  const { spacing = 3, columns = 3, itemArray, itemRender } = props;
  return (
    <Masonry spacing={spacing} columns={columns}>
      {itemArray.map((item: T, index) => {
        return <>{itemRender(item, index)}</>;
      })}
    </Masonry>
  );
}

export default MasonryLayout;

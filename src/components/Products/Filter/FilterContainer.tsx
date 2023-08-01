import { Button, Col, Input, Row, Select } from 'antd';
import Title from 'antd/es/typography/Title';

import { CategoryProps } from '@/Types/Type';

import { FilterChangeType, FilterType } from '../ProductsList';
type Props = {
  filters: FilterType;
  categories: CategoryProps[];
  // eslint-disable-next-line no-unused-vars
  onChange: (props: FilterChangeType) => void;
  onFilter: () => void;
  onReset: () => void;
};

const sortByOptions = [
  { value: 1, label: 'Phổ biến nhất' },
  { value: 2, label: 'Mới nhất' },
  { value: 3, label: 'Giá cao đến thấp' },
  { value: 4, label: 'Giá thấp đến cao' },
];
const FilterContainer = (props: Props) => {
  const { filters, categories, onChange, onFilter, onReset } = props;
  const transFormCategories = categories.map((item: CategoryProps) => ({
    value: item._id,
    label: item.name,
  }));
  return (
    <Row className='m-7 w-full' gutter={16}>
      {/* price */}
      <Col span={6}>
        <Title level={4}>Sắp xếp</Title>
        <Select
          size='large'
          style={{ width: '100%' }}
          onChange={e => onChange({ type: 'sortBy', value: e })}
          value={filters.sortBy}
          options={sortByOptions}
        />
      </Col>
      {/* category */}
      <Col span={6}>
        <Title level={4}>Loại</Title>
        <Select
          size='large'
          allowClear
          mode='multiple'
          style={{ width: '100%' }}
          placeholder='Chọn loại'
          onChange={e => onChange({ type: 'category', value: e })}
          value={filters.category || []}
          options={transFormCategories}
        />
      </Col>
      {/* search */}
      <Col span={6}>
        <Title level={4}>Tìm kiếm</Title>
        <Input
          value={filters.search}
          onChange={e => onChange({ type: 'search', value: e.target.value })}
          placeholder='Tìm kiếm'
          size='large'
          allowClear
        />
      </Col>
      <Col span={6} className='flex items-end justify-end gap-x-4'>
        <Button type='primary' size='large' onClick={onFilter}>
          Áp dụng
        </Button>
        <Button size='large' onClick={onReset}>
          Xóa bộ lọc
        </Button>
      </Col>
    </Row>
  );
};

export default FilterContainer;

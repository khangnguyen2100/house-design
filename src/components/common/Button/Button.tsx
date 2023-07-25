import { UrlObject } from 'url';
type Url = string | UrlObject;

import Link from 'next/link';

type Props = {
  onClick?: () => void;
  className: string;
  full?: boolean;
  type: 'button' | 'submit' | 'reset';
  bgColor?: string;
  children?: React.ReactNode;
  text: string;
  href?: Url; // Sửa kiểu dữ liệu của href
};

function Button(props: Props) {
  const { onClick, type, children, bgColor, className, text, href } = props;

  // Nếu có giá trị href thì bọc thẻ Link vào, còn không thì sử dụng fragment <>
  const content = href ? (
    <Link href={href}>
      <button type={type} className={`${className}`} onClick={onClick}>
        {text}
        {children}
      </button>
    </Link>
  ) : (
    <>
      <button type={type} className={`${className}`} onClick={onClick}>
        {text}
        {children}
      </button>
    </>
  );

  return content;
}

export default Button;

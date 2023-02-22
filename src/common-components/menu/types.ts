import { MenuProps } from 'antd';
export type TOnClickMenuItem = MenuProps['onClick'];

export type TMenuItem = {
  key: string;
  label: React.ReactNode;
  value?: string;
  icon?: React.ReactNode;
  children?: TMenuItem[];
  onClick?: TOnClickMenuItem;
};

import React from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Menu as MenuAnt } from 'antd';

import { TMenuItem, TOnClickMenuItem } from './types';

import './Menu.scss';

interface IProps {
  className?: string;
  selectedKeys?: string;
  items: TMenuItem[];
  mode?: 'inline' | 'horizontal' | 'vertical';
  onClick?: TOnClickMenuItem;
}

const Menu = (props: IProps) => {
  const { className, selectedKeys, items, mode, onClick } = props;

  const handleClickItem = (e: MenuInfo) => {
    onClick?.(e);
  };

  return (
    <MenuAnt
      mode={mode}
      className={`menu ${className ?? ''}`}
      onClick={handleClickItem}
      selectedKeys={[selectedKeys || '']}
      items={items}
    />
  );
};

export default Menu;

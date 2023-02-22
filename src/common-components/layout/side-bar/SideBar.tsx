import React, { useState } from 'react';
import { HomeFilled, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { ERoutesPath } from '@variables';
import Menu from '@common-components/menu';
import { TOnClickMenuItem } from '@common-components/menu/types';

import './SideBar.scss';
import { renderIcon } from '@utils/common-utils';

interface ISideBarProps {
  collapsed?: boolean;
}

const SideBar = (props: ISideBarProps) => {
  const { collapsed } = props;
  const navigate = useNavigate();

  const [selectedKey, setSelectedKey] = useState<string>(ERoutesPath.HOME);

  const handleClickItem: TOnClickMenuItem = (e) => {
    setSelectedKey(e.key);
    navigate(e.key);
  };

  const items = [
    {
      key: ERoutesPath.HOME,
      icon: renderIcon(ERoutesPath.HOME, selectedKey, <HomeOutlined />, <HomeFilled />),
      label: !collapsed ? 'Trang chủ' : '',
    },
  ];

  return (
    <div className="side-bar">
      <Menu onClick={handleClickItem} mode="vertical" selectedKeys={selectedKey} items={items} />
    </div>
  );
};

export default SideBar;

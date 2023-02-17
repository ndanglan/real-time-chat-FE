import { ThemeConfig } from 'antd';

const bgBase = '#FAFAFA';
const textBase = '#262626';
const primaryColor = '#3E54AC';
const errorColor = '#BE0000';

const theme: ThemeConfig = {
  token: {
    colorBgBase: bgBase,
    colorBgLayout: bgBase,
    colorTextBase: textBase,
    colorInfo: primaryColor,
    colorPrimary: primaryColor,
    colorSuccess: '#9EDE73',
    colorWarning: '#E48900',
    colorError: errorColor,
    colorPrimaryBorderHover: 'red',
    colorErrorActive: errorColor,
    colorErrorTextActive: errorColor,
  },
};

export default theme;

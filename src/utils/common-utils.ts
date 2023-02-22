import { RcFile } from 'antd/es/upload';

export const renderIcon = (
  key: string,
  selectedKey: string,
  iconActive: React.ReactNode,
  iconInActive: React.ReactNode,
) => {
  return key === selectedKey ? iconActive : iconInActive;
};
export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

import React from "react";
import { ConfigProvider } from 'antd';

import Router from "@routes";
import theme from "./theme/antd-override";

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Router />
    </ConfigProvider>
  );
};

export default App;
import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="micro-survey-widget"
      src="<WIDGET_URL>"
      data-sitekey="<WEBSITE_KEY>"
      async
    />,
  ]);
};

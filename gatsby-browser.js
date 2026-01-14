import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="micro-survey-widget"
      src="http://localhost:3000/widget/survey-widget.final.js"
      data-sitekey="b0dae7210f514325ae535c79546d5c1b"
      async
    />,
  ]);
};

// @flow

import 'babel-polyfill'; // NOTE: REALLY important to avoid "regeneratorRuntime is not defined"
import React from 'react';
import { hydrate, render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { loadComponents, getState } from 'loadable-components';
// $FlowIgnore
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root';

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
window.snapSaveState = () => getState();
// #endregion

// #region render (with hot reload if dev)
const renderApp = RootComponent => {
  const Application = () => (
    <AppContainer>
      <RootComponent />
    </AppContainer>
  );

  // needed for react-snap:
  // $FlowIgnore
  if (bootstrapedElement.hasChildNodes()) {
    // avoid 1st load flickering due to async component loading:
    loadComponents().then(() => {
      // $FlowIgnore
      hydrate(<Application />, bootstrapedElement);
    });
  } else {
    // $FlowIgnore
    render(<Application />, bootstrapedElement);
  }
};

renderApp(Root);

// $FlowIgnore
if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
// #endregion

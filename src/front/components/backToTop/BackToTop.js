// @flow
/* eslint-disable no-undefined */

// #region imports
import React, { useState, useEffect } from 'react';
import BackToTopButton from './backToTopButton/BackToTopButton';
import { Motion, spring, presets } from 'react-motion';
// #endregion

// #region flow types
type Props = {
  minScrollY: number,
  scrollTo?: string,
  onScrollDone?: () => any,
};
// #endregion

function BackToTop({ minScrollY, onScrollDone }: Props) {
  const [showBackButton, setShowBackButton] = useState(false);
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [tickingScollObserve, setTickingScollObserve] = useState(false);

  // #region on windows scroll callback
  const handleWindowScroll = () => {
    if (!window) {
      return;
    }

    /* eslint-disable no-undefined */
    const currentWindowScrollY =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : // $FlowIgnore
          (
            document.documentElement ||
            // $FlowIgnore
            document.body.parentNode ||
            document.body
          ).scrollTop;
    /* eslint-enable no-undefined */

    // scroll event fires to often, using window.requestAnimationFrame to limit computations
    if (!tickingScollObserve) {
      window.requestAnimationFrame(() => {
        if (windowScrollY !== currentWindowScrollY) {
          const shouldShowBackButton =
            currentWindowScrollY >= minScrollY ? true : false;

          setWindowScrollY(currentWindowScrollY);
          setShowBackButton(shouldShowBackButton);
        }
        setTickingScollObserve(false);
      });
    }

    setTickingScollObserve(true);
  };
  // #endregion

  // #region on button click (smooth scroll)
  const handlesOnBackButtonClick = (event?: SyntheticEvent<*>) => {
    event && event.preventDefault();
    if (window && windowScrollY && windowScrollY > minScrollY) {
      // using here smoothscroll-polyfill
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      // smoothScroll.scrollTo(scrollTo, this.scrollDone);
    }
  };

  // const scrollDone = () => onScrollDone && onScrollDone();
  // #endregion

  // #region mount and unmount subscrubstions
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleWindowScroll);
    }

    return function unsubscribeEvents() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleWindowScroll);
      }
    };
  });
  // #endregion

  return (
    // @ts-ignore
    <Motion style={{ x: spring(showBackButton ? 0 : 120, presets.stiff) }}>
      {({ x }) => (
        <BackToTopButton
          position={'bottom-right'}
          onClick={handlesOnBackButtonClick}
          motionStyle={{
            WebkitTransform: `translate3d(${x}px, 0, 0)`,
            transform: `translate3d(${x}px, 0, 0)`,
          }}
        />
      )}
    </Motion>
  );
}

BackToTop.displayName = 'BackToTop';

BackToTop.defaultProps = {
  minScrollY: 120,
  onScrollDone: () => {
    return;
  },
};

export default BackToTop;

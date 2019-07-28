import './global.less';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      /* eslint-disable */
      console.error('err', err);
    }
  }
};

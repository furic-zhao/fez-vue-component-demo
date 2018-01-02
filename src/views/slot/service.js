/* @if MOCK */
import mock from 'fezmock';
import mockData from './mock';
/* @endif */

import Api from 'public/api';

export default {
  welcome() {
    return new Promise((resolve, reject) => {
      /* @if MOCK */
      resolve(mockData.welcome);
      return;
      /* @endif */

      // 这里写请求api逻辑
      Api.get().then((data) => {
        //从接口获取数据处理后把状态resolve、reject上层模块
      });
    });
  }
}

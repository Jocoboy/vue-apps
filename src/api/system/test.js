import request from '@/utils/request';

export default {
  getMapInfo() {
    return request({
      url: '/getMapInfo',
      method: 'get',
    });
  },
};

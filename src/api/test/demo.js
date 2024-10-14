import request from '@/utils/request';

export default {
  time() {
    return request({
      url: '/api/student/test',
      method: 'get',
    });
  },
};
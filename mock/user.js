export default [
  {
    url: '/web/api/auth/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        data: {
          tokenName: 'Bear',
          tokenValue:
            'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImFkbWluIjp0cnVlLCJpc3MiOiJKb2NvYm95IiwiZXhwIjoxNzI5NjEyODAwLCJzdWIiOiJ3ZWJhcGkiLCJhdWQiOiJ3ZWJhcGkiLCJuYmYiOjE3MjkxODA4MDAsImlhdCI6MTcyOTE4MDgwMCwianRpIjoiMDAxIn0.M-p-DqXLEn_quEYCRwYfUAEKG7snMRz3v5AF7MwcmUCtsjliKsGYUyiCw5BnHvfhfBL4WrVl5xMdn_G9nzTZEg',
        },
        msg: 'OK',
      };
    },
  },
  {
    url: '/web/api/system/perm/getUserPerm',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          permissionTreeList: {
            children: [],
            component: 'dashboatd/index',
            icon: '0dometer',
            isHasPerm: true,
            isShow: true,
            isShowBreadcrumb: true,
            menuId: 1,
            meta: {
              
            },
            parentId: 0,
            parentNmae: '',
            path: '/',
            permList: [],
            redirect: '',
            sort: 1,
            title: '首页'
          }
        },
        msg: 'OK',
      };
    },
  },
];

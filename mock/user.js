export default [
{
    url: '/web/api/auth/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImFkbWluIjp0cnVlLCJpc3MiOiJKb2NvYm95IiwiZXhwIjoxNzI5NjEyODAwLCJzdWIiOiJ3ZWJhcGkiLCJhdWQiOiJ3ZWJhcGkiLCJuYmYiOjE3MjkxODA4MDAsImlhdCI6MTcyOTE4MDgwMCwianRpIjoiMDAxIn0.M-p-DqXLEn_quEYCRwYfUAEKG7snMRz3v5AF7MwcmUCtsjliKsGYUyiCw5BnHvfhfBL4WrVl5xMdn_G9nzTZEg',
      };
    },
  }
];

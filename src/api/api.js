import db from '../../mock/db.json';

export const requestLogin = (params,_this) =>{
  let {username, password} = params;

  /*_this.$ajax({
    url:"/api/accounts",
    method:'POST'
  }).then(function(res){
    console.log('res:',res);
  })*/
  return new Promise((resolve, reject) => {
    let user = null;
    setTimeout(() => {
      let hasUser = db.accounts.some(u => {
        if (u.username === username && u.password === password) {
          user = JSON.parse(JSON.stringify(u));
          user.password = undefined;
          return true;
        }
      });

      if (hasUser) {
        resolve([200, { code: 200, msg: '请求成功', user }]);
      } else {
        resolve([400, { code: 500, msg: '账号或密码错误' }]);
      }
    }, 1000);
  });
}

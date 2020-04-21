import fly from './interceptor'

/**
 *  创建自定义错误
 */
function UserError (message) {
  if (message && typeof message === 'object') {
    for (var i in message) {
      if (i !== 'message' && i !== 'name') {
        this[i] = message[i];
      } else {
        throw new Error('对象属性重复，message or name');
      }
    }
  } else {
    this.message = message;
  }
  this.name = 'UserError';
}
UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

export const get = async (url, params) => {
  let bUserErr = false;
  let newUrl = url
  let newParams = params
  if (params && !(typeof params === 'object')) {
    newUrl = url + '/' + params
    newParams = ''
  }
  try {
    let res = await fly.get(newUrl, newParams)
    if (res.data.code === 0) {
      return res.data
    } else {
      bUserErr = true;
      throw new UserError(res.data.msg);
    }
  } catch (e) {
    throw new UserError((bUserErr && e.message) || (e.response && e.response.data && e.response.data.msg) || (e.response && e.response.data && e.response.data.message) || '网络异常!')
  }
}

export const downFile = async (url, params) => {
  try {
    let res = await fly.get(url, params, {responseType: 'arraybuffer'})
    return res.data
  } catch (e) {
    console.log(e)
    throw new UserError((e.response && e.response.data && e.response.data.msg) || (e.response && e.response.data && e.response.data.message) || '网络异常!');
  }
}

export const post = async (url, params, body) => {
  let bUserErr = false;
  let postUrl = url
  if (typeof params === 'object') {
    for (let k in params) {
      if (k) {
        if (postUrl.indexOf('?') >= 0) {
          postUrl += `&${k}=${params[k]}`
        } else {
          postUrl += `?${k}=${params[k]}`
        }
      }
    }
  }
  console.log(postUrl)
  try {
    let res = await fly.post(postUrl, body)
    console.log('得到数据了')
    if (res.data) {
      if (res.data.code === 0) {
        return res.data
      } else if (res.data.code === 10002 && url === '/api/mini/user/loginByWx') {
        return res.data
      } else {
        bUserErr = true;
        throw new UserError(res.data.msg);
      }
    }
  } catch (e) {
    console.log('报错了')
    console.log(e)
    throw new UserError((bUserErr && e.message) || (e.response && e.response.data && e.response.data.msg) || (e.response && e.response.data && e.response.data.message) || '网络异常!')
  }
}

export const Delete = async function (url, params, body) {
  let bUserErr = false;
  // let returnObj = translateParam(url, params);
  // url = returnObj.url;
  // delete returnObj.url;
  let reUrl = url
  let par = params
  for (let k in par) {
    reUrl = reUrl + `/${par[k]}`
    par = {}
  }
  try {
    let res = await fly.delete(reUrl, body, {params: par});
    if (res.data.code === 0) {
      return res.data;
    } else {
      bUserErr = true;
      throw new UserError(res.data.msg);
    }
  } catch (e) {
    throw new UserError((bUserErr && e.message) || (e.response && e.response.data && e.response.data.msg) || (e.response && e.response.data && e.response.data.message) || '网络异常!');
  }
}

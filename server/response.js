/**
 * Created by axetroy on 17-5-16.
 */

// 为了统一api的response返回
const _ = require('lodash');

const stuck = {
  success: null,
  status: null,
  meta: null,
  msg: null,
  data: null,
  err: null // only for debug
};

function success(__stuck) {
  return _.extend({}, stuck, { success: true, status: 200 }, __stuck);
}

function fail(__stuck) {
  return _.extend({}, stuck, { success: false, status: 400 }, __stuck);
}

module.exports = {
  success,
  fail,
  error: fail
};

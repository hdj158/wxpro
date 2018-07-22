const { mysql } = require('../qcloud.js')

module.exports = async ctx => {
  var res = await mysql('wxtb').select('*')
  var resget = await mysql('wxtb').insert({ mc: ctx.query.mc, dm: ctx.query.dm, sj: ctx.query.sj })
  ctx.state.data = res
}
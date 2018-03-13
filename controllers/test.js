const APIError = require('../rest').APIError




/**
 * 分页查询
 * request :@query(page: Int, pageSize: Int, isDesc: boolean, sortKey: String)
 *          @body({}: App)
 * response applist: [] , page: Int, pageSize: Int, total: Int, pageCount: Int
 */
var test = async (ctx, next) => {
    let response = {
        result: 200,
        msg: 'hello'
    }
    ctx.rest(response)
}

//设置模糊查询
function modifyFilter(filter) {
    let result = {}
    for (var key in filter) {
        result[key] = {$regex: filter[key]}
    }
    return result
}

module.exports = {
    'GET /api/test': test
}
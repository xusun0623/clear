// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
    try {
        return {
            orders1: await db.collection('Buding_Floor').where({ order: event.order1 }).get({}),
            orders2: await db.collection('Buding_Floor').where({ order: event.order2 }).get({}),
            orders3: await db.collection('Buding_Floor').where({ order: event.order3 }).get({}),
            orders4: await db.collection('Buding_Floor').where({ order: event.order4 }).get({}),
            orders5: await db.collection('Buding_Floor').where({ order: event.order5 }).get({}),
            orders6: await db.collection('Buding_Floor').where({ order: event.order6 }).get({})
        }
        // .get
        // db.collection('Buding_Floor')
        //     .where({
        //         order: event.order1
        //     })
        //     .get({
        //         success: function(res) {
        //             return {
        //                 test: res
        //             }
        //         }
        //     });
        // return {
        //     orders: [event.order1, event.order2, event.order3, event.order4, event.order5, event.order6]
        // }
        // return await db.collection('Buding_Floor')
        //     .where([
        //     ])
        //     .get({
        //     });
    } catch (e) {
        console.error(e);
    }
}
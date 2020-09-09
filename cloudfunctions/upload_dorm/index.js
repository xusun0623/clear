// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  const db = cloud.database()
  const wxContext = cloud.getWXContext()

  return await db.collection('Dorm_Special').add({
    data: {
      dorm: event.dorm,
      refuse: event.refuse,
      unopen: event.unopen
    },
  })

   
}
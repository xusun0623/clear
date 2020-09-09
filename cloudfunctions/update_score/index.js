// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()


// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const wxContext = cloud.getWXContext()
  
  return await db.collection("Dorm_Score")
    .where({
      dorm: event.current_Dorm
    })
    // .get({
    //     success: res => {
    //         that.setData({
    //             _id: res.data[0]._id
    //         })
    //         console.log("成功传出_id", that.data._id)
    //     }
    // })
    .update({
      data: {
        banned: event.banned,
        score_num: event.score_num,
        minus: event.minus,
      },
      success: res => {
        console.log(res)
      }
    })

}
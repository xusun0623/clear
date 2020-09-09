// pages/lookup/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tips: [
            { minus: "地面扣分", total_score: "(3分)", score: '' },
            { minus: "1桌扣分", total_score: "(6分)", score: '' },
            { minus: "2桌扣分", total_score: "(6分)", score: '' },
            { minus: "3桌扣分", total_score: "(6分)", score: '' },
            { minus: "4桌扣分", total_score: "(6分)", score: '' },
            { minus: "椅子扣分", total_score: "(1分)", score: '' },
            { minus: "鞋子衣物扣分", total_score: "(4分)", score: '' },
            { minus: "垃圾桶扣分", total_score: "(5分)", score: '' },
            { minus: "门窗台扣分", total_score: "(4分)", score: '' },
            { minus: "天花板、平台、地面扣分", total_score: "(5分)", score: '' },
            { minus: "镜子扣分", total_score: "(1分)", score: '' },
            { minus: "干净摆放扣分", total_score: "(6分)", score: '' },
            { minus: "脏衣物堆积扣分", total_score: "(3分)", score: '' },
            { minus: "厕所门窗扣分", total_score: "(2分)", score: '' },
            { minus: "厕所便池扣分", total_score: "(8分)", score: '' },
            { minus: "蚊帐扣分", total_score: "(2分)", score: '' },
            { minus: "制度扣分", total_score: "(3分)", score: '' },
            { minus: "门后物品扣分", total_score: "(2分)", score: '' },
            { minus: "违章电器扣分", total_score: "(1分)", score: '' }
        ],
        STU_NUM: '',
        dorm: "",
        score: '',
        style: 'none'
    },

    score_question: function() { //对卫生成绩有疑问
        wx.navigateTo({
            url: '/pages/intro/index'
        });
    },

    formSubmit: function(e) {
        var that = this
        console.log(e.detail.value.stu_num)
        var stu_num = e.detail.value.stu_num
        const db = wx.cloud.database()
        db.collection('Dorm_Stu')
            .where({
                stu: parseInt(stu_num)
            })
            .get({
                success: res => {
                    // console.log(res)
                    that.setData({
                            dorm: res.data[0].dorm
                        })
                        // console.log(that.data.dorm)
                }
            })
        setTimeout(function() {
            db.collection('Dorm_Score').where({
                dorm: that.data.dorm
            }).get({
                success: res => {
                    console.log(res.data[0])
                    if (res.data[0].score_num == undefined) {
                        wx.showToast({
                            title: '当前没有此寝室的卫生成绩记录',
                            icon: 'none',
                            duration: 1500,
                            mask: false
                        });
                    }
                    that.setData({
                        score: res.data[0].score_num,
                        STU_NUM: stu_num
                    })
                    for (var i = 0; i < res.data[0].minus.length; i++) {
                        if (res.data[0].minus[i] != 0) {
                            that.setData({
                                ['tips[' + i + '].score']: res.data[0].minus[i]
                            })
                        }
                    }
                }
            })
            that.setData({
                style: 'block'
            })
        }, 1000)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
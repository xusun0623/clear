//index.js
const app = getApp()

Page({
    data: {
        xusun: [],
        buding: ["QB01", "QB02", "QB03", "QB04", "QB05", "QB06", "QB07", "QB08", "QB09", "QB10", "QB11", "QB12", "QB13", "QB14", "QB15", "QB16", "QB17", "QB18", "QB19", "QB20", "QB21", "QB22", "QB24", "QB25", "QB26", "QS24", "QS25"],
        choose: ''
    },
    onLoad: function() {},
    buding: function(evt) {
        // console.log(evt.target.dataset.index)
        app.globalData.buding = this.data.buding[evt.target.dataset.index] //将取出来的楼栋号赋给globaldata
        this.setData({
            choose: app.globalData.buding
        })
        console.log(app.globalData)
    },

    buding_start: function() {
        wx.showModal({
            title: '请确认你的选择',
            content: '你将要检查的楼栋为:' + this.data.choose,
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#4e8acf',
            success: (result) => {
                if (result.confirm) {
                    console.log(app.globalData.buding)
                    wx.reLaunch({
                        url: '/pages/floor/index'
                    });
                }
            },
            fail: () => {},
            complete: () => {}
        });
    }


    // xusun: function() {
    //     wx.cloud.init({
    //         traceUser: true
    //     })
    //     wx.cloud.callFunction({
    //         name: 'getnewslist',
    //         complete: res => {
    //             console.clear()
    //             console.log(res)
    //         }
    //     })
    // }
})
const app = getApp()
const db = wx.cloud.database()

Page({
    data: {
        dorm: [
            { order: '', dorm: [] },
            { order: '', dorm: [] },
            { order: '', dorm: [] },
            { order: '', dorm: [] },
            { order: '', dorm: [] },
            { order: '', dorm: [] },
        ],
        buding: "",
        dorm_order: [],
        scored_dorm: [],
        scored_txt: "",
        finished: [], //已访问过的
        unopen: [], //未开门
        later_request: [], //请求稍后检查卫生
        refuse: [], //拒查
        finished_txt: "",
        display: "none"
    },
    globalData: {
        ddorm: [],
        orders1: [],
        orders2: [],
        orders3: [],
        orders4: [],
        orders5: [],
        orders6: [],
        unopen: [],
        later_request: [], //请求稍后检查卫生
        refuse: [] //拒查
    },

    onLoad: function(options) {
        wx.showToast({
            title: '加载中...',
            icon: 'loading',
            duration: 5000
        })

        var that = this
        db.collection('Dorm_Buding')
            .where({
                Buding: app.globalData.buding
            })
            .get({
                success: function(res) {
                    that.globalData.ddorm = res.data
                    console.log(res.data.length)
                    if (res.data.length < 7) {
                        for (var i = res.data.length; i < 6; i++) {
                            that.globalData.ddorm.push({ Buding: "本楼栋有空缺楼层", Order: "Extra" })
                        }
                    }
                    console.log(that.globalData.ddorm)
                },
                fail: function(res) {
                    wx.showToast({
                        title: '请连接网络',
                        icon: 'none',
                        duration: 1500,
                        mask: false,
                        fail: () => {},
                        complete: () => {}
                    });
                }
            })

        setTimeout(function() {
            wx.cloud.init({
                traceUser: true
            })
            wx.cloud.callFunction({
                name: 'getnewslist',
                data: {
                    order1: that.globalData.ddorm[0].Order,
                    order2: that.globalData.ddorm[1].Order,
                    order3: that.globalData.ddorm[2].Order,
                    order4: that.globalData.ddorm[3].Order,
                    order5: that.globalData.ddorm[4].Order,
                    order6: that.globalData.ddorm[5].Order
                },
                complete: res => {
                    console.log(res)
                    for (var i = 0; i < res.result.orders1.data.length; i++) {
                        that.globalData.orders1.push(res.result.orders1.data[i].Dornum)
                    }
                    for (var i = 0; i < res.result.orders2.data.length; i++) {
                        that.globalData.orders2.push(res.result.orders2.data[i].Dornum)
                    }
                    for (var i = 0; i < res.result.orders3.data.length; i++) {
                        that.globalData.orders3.push(res.result.orders3.data[i].Dornum)
                    }
                    for (var i = 0; i < res.result.orders4.data.length; i++) {
                        that.globalData.orders4.push(res.result.orders4.data[i].Dornum)
                    }
                    for (var i = 0; i < res.result.orders5.data.length; i++) {
                        that.globalData.orders5.push(res.result.orders5.data[i].Dornum)
                    }
                    for (var i = 0; i < res.result.orders6.data.length; i++) {
                        that.globalData.orders6.push(res.result.orders6.data[i].Dornum)
                    }
                    console.log(that.globalData)
                },
                fail: res => {
                    wx.showToast({
                        title: '请检查网络连接后重新进入',
                        icon: 'none',
                        duration: 1500,
                        mask: false
                    });
                }
            })
        }, 3000)

        setTimeout(function() {
                //要延时执行的代码
                that.setData({
                    ["dorm[0].order"]: that.globalData.ddorm[0].Order,
                    ["dorm[1].order"]: that.globalData.ddorm[1].Order,
                    ["dorm[2].order"]: that.globalData.ddorm[2].Order,
                    ["dorm[3].order"]: that.globalData.ddorm[3].Order,
                    ["dorm[4].order"]: that.globalData.ddorm[4].Order,
                    ["dorm[5].order"]: that.globalData.ddorm[5].Order,
                    ["dorm[0].dorm"]: that.globalData.orders1,
                    ["dorm[1].dorm"]: that.globalData.orders2,
                    ["dorm[2].dorm"]: that.globalData.orders3,
                    ["dorm[3].dorm"]: that.globalData.orders4,
                    ["dorm[4].dorm"]: that.globalData.orders5,
                    ["dorm[5].dorm"]: that.globalData.orders6,
                    scored_dorm: app.globalData.Scored_Dorm,
                    finished_txt: "最近访问：",
                    display: "flex"
                })
                console.log(that.globalData.ddorm)
            }, 6000) //延迟时间 这里是1秒
    },


    comp: function() { //检查完成

        var that = this

        wx.cloud.callFunction({
                name: 'upload_dorm',
                data: {
                    dorm: app.globalData.buding,
                    refuse: that.globalData.refuse,
                    unopen: that.globalData.unopen
                },
                success: res => {
                    console.log(res)
                    wx.showToast({
                        title: '提交成功！'
                    });
                }
            },

        )
        setTimeout(() => {
            wx.reLaunch({
                url: "/pages/index/index"
            });
        }, 2000);
    },

    longpress: function(res) {
        wx.vibrateShort();
        var that = this
        console.log(res.target.dataset.index)
        var dorm = res.target.dataset.index
        wx.showActionSheet({
            itemList: ["未开门", "稍后检查", "据查"],
            itemColor: '#000',
            success: (result) => {
                console.log(dorm)
                switch (result.tapIndex) {
                    case 0:
                        that.globalData.unopen.push(dorm)
                        that.setData({
                            unopen: that.globalData.unopen
                        })
                        break;
                    case 1:
                        that.globalData.later_request.push(dorm)
                        that.setData({
                            later_request: that.globalData.later_request
                        })
                        break;
                    case 2:
                        that.globalData.refuse.push(dorm)
                        that.setData({
                            refuse: that.globalData.refuse
                        })
                        break;
                    default:
                        break;
                }
                console.log()
            }
        });
    },

    refuse: function(res) {
        wx.vibrateShort();
        wx.showModal({
            title: '是否移出据查名单？',
            content: '',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#2b7ae8',
            success: (result) => {
                if (result.confirm) { //确认移出名单

                    var that = this
                    console.log(res.target.dataset.index)
                    var dorm = res.target.dataset.index
                    var index = that.globalData.refuse.indexOf(dorm) //获取位置
                    that.globalData.refuse.splice(index, 1)
                    that.setData({
                        refuse: that.globalData.refuse
                    })

                }
            },
            fail: () => {},
            complete: () => {}
        });
    },

    unopen: function(res) {
        wx.vibrateShort();
        wx.showModal({
            title: '是否移出未开门名单？',
            content: '',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#2b7ae8',
            success: (result) => {
                if (result.confirm) { //确认移出名单

                    var that = this
                    console.log(res.target.dataset.index)
                    var dorm = res.target.dataset.index
                    var index = that.globalData.unopen.indexOf(dorm) //获取位置
                    that.globalData.unopen.splice(index, 1)
                    that.setData({
                        unopen: that.globalData.unopen
                    })

                }
            },
            fail: () => {},
            complete: () => {}
        });
    },

    later_request: function(res) {
        wx.vibrateShort();
        wx.showModal({
            title: '是否移出稍后请求名单？',
            content: '',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#2b7ae8',
            success: (result) => {
                if (result.confirm) { //确认移出名单

                    var that = this
                    console.log(res.target.dataset.index)
                    var dorm = res.target.dataset.index
                    var index = that.globalData.later_request.indexOf(dorm) //获取位置
                    that.globalData.later_request.splice(index, 1)
                    that.setData({
                        later_request: that.globalData.later_request
                    })

                }
            },
            fail: () => {},
            complete: () => {}
        });
    },

    choose_dorm: function(evt) {
        var that = this
        var target_dorm = evt.target.dataset.index
        console.log(evt.target.dataset.index)
        app.globalData.current_Dorm = target_dorm

        if (target_dorm != "本楼栋有空缺楼层，此项勿点") {

            wx.navigateTo({
                url: '/pages/begin/index',
                success: (result) => {
                    for (var i = 0; i < app.globalData.finished.length; i++) {
                        var item = app.globalData.finished[i]
                        if (item == target_dorm) {
                            app.globalData.finished.splice(i, 1);
                        }
                    }
                    app.globalData.finished.push(target_dorm)
                },
                fail: () => {},
                complete: () => {
                    setTimeout(function() {
                        that.setData({
                            finished: app.globalData.finished
                        })
                    }, 1000)
                }
            });

        } else {
            wx.showToast({
                title: '╭(●｀∀´●)╯',
                icon: 'none',
                duration: 1500,
                mask: false
            });
        }
    },
})
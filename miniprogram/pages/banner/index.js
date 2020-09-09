// pages/banner/index.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    globalData: {
        SG_Code: '',
        Cloud_SG_Code: '',
        err_count: 0
    },

    onLoad: function() {
        var that = this
        const db = wx.cloud.database()
        db.collection('Dorm_DG_Code')
            .where({
                name: "SG_Code"
            }).get().then(res => {
                // console.log(res.data[0].DG_Code)
                that.globalData.Cloud_SG_Code = res.data[0].DG_Code
            })
    },

    SG_submit: function(res) {
        if (app.globalData.Timer > 0) {
            app.globalData.Timer--;
            wx.showToast({
                title: "还剩 " + app.globalData.Timer + " 次",
                icon: 'none',
                duration: 1500
            });
            this.globalData.err_count = 0;
        } else if (this.globalData.err_count >= 3) {
            app.globalData.Timer = 60;
            wx.showToast({
                title: '连续输错3次，点击右箭头60下解锁',
                icon: 'none',
                duration: 1500,
            });
        } else if (this.globalData.SG_Code == this.globalData.Cloud_SG_Code && this.globalData.SG_Code != '' && app.globalData.Timer == 0) {
            wx.navigateTo({
                url: '/pages/start/index'
            });
        } else {
            this.globalData.err_count++;
            wx.showToast({
                title: 'SG码输入错误，共计 ' + this.globalData.err_count + " 次",
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false
            });
        }
    },
    inputvalue: function(res) {
        this.globalData.SG_Code = res.detail.value
    }
})
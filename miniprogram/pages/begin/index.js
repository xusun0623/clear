//index.js
const app = getApp()

Page({
    data: {
        Dorm_num: '',
        People_num: 4,
        score_num: 100,
        score: [
            { tip: '地面', score: 3 },
            { tip: '1桌', score: 6 },
            { tip: '2桌', score: 6 },
            { tip: '3桌', score: 6 },
            { tip: '4桌', score: 6 },
            { tip: '椅子', score: 1 },
            { tip: '鞋子衣物', score: 4 },
            { tip: '垃圾桶', score: 5 },
            { tip: '门窗台', score: 4 },
            { tip: '天花板、平台、地面', score: 5 },
            { tip: '镜子', score: 1 },
            { tip: '干净摆放', score: 6 },
            { tip: '脏衣物堆积', score: 3 },
            { tip: '厕所门窗', score: 2 },
            { tip: '厕所便池', score: 8 },
            { tip: '蚊帐', score: 2 },
            { tip: '制度', score: 3 },
            { tip: '门后物品', score: 2 },
            { tip: '违章电器', score: 15 }
        ],
        score_backup: [
            { tip: '地面', score: 3 },
            { tip: '1桌', score: 6 },
            { tip: '2桌', score: 6 },
            { tip: '3桌', score: 6 },
            { tip: '4桌', score: 6 },
            { tip: '椅子', score: 1 },
            { tip: '鞋子衣物', score: 4 },
            { tip: '垃圾桶', score: 5 },
            { tip: '门窗台', score: 4 },
            { tip: '天花板、平台、地面', score: 5 },
            { tip: '镜子', score: 1 },
            { tip: '干净摆放', score: 6 },
            { tip: '脏衣物堆积', score: 3 },
            { tip: '厕所门窗', score: 2 },
            { tip: '厕所便池', score: 8 },
            { tip: '蚊帐', score: 2 },
            { tip: '制度', score: 3 },
            { tip: '门后物品', score: 2 },
            { tip: '违章电器', score: 15 }
        ],
        temp: [],
        temp_minus: [],
        minus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        minus_tmp: 0,
        _id: '',
        banned: "",
        banned_style: 'none'
    },
    onLoad: function() {
        this.setData({
            Dorm_num: app.globalData.current_Dorm
        })
        for (var i = 0; i < 19; i++) {
            this.setData({
                temp: this.data.temp.concat("score[" + i + "].tip"),
                temp_minus: this.data.temp_minus.concat("minus[" + i + "]")
            })
        }
    },

    banned_input_rect: function(res) {
        this.setData({
            banned: res.detail.value
        })
    },

    comp_sub: function() {
        console.log(this.data.banned)
        this.setData({
            banned_style: 'none'
        })
    },

    score_end: function(evt) {
        this.setData({
            startTime: evt.timeStamp
        })
    },

    score_end: function(evt) {
        this.setData({
            endTime: evt.timeStamp
        })
    },

    check_in: function(res) {
        console.log(res)
    },

    score: function(evt) {
        console.log(evt)
        var index = "B" + evt.currentTarget.dataset.index
        switch (index) {
            case "B0":
                this.setData({
                    [this.data.temp_minus[0]]: (this.data.minus[0] + 1) % (this.data.score[0].score + 1)
                })
                if (this.data.minus[0] != 0) {
                    this.setData({
                        [this.data.temp[0]]: "-" + this.data.minus[0]
                    })
                } else {
                    this.setData({
                        [this.data.temp[0]]: "地面"
                    })
                }

                break;
            case "B1":
                this.setData({
                    [this.data.temp_minus[1]]: (this.data.minus[1] + 1) % (this.data.score[1].score + 1)
                })
                if (this.data.minus[1] != 0) {
                    this.setData({
                        [this.data.temp[1]]: "-" + this.data.minus[1]
                    })
                } else {
                    this.setData({
                        [this.data.temp[1]]: "1桌"
                    })
                }
                break;
            case "B2":
                this.setData({
                    [this.data.temp_minus[2]]: (this.data.minus[2] + 1) % (this.data.score[2].score + 1)
                })
                if (this.data.minus[2] != 0) {
                    this.setData({
                        [this.data.temp[2]]: "-" + this.data.minus[2]
                    })
                } else {
                    this.setData({
                        [this.data.temp[2]]: "2桌"
                    })
                }

                break;

            case "B3":
                this.setData({
                    [this.data.temp_minus[3]]: (this.data.minus[3] + 1) % (this.data.score[3].score + 1)
                })
                if (this.data.minus[3] != 0) {
                    this.setData({
                        [this.data.temp[3]]: "-" + this.data.minus[3]
                    })
                } else {
                    this.setData({
                        [this.data.temp[3]]: "3桌"
                    })
                }

                break;

            case "B4":
                this.setData({
                    [this.data.temp_minus[4]]: (this.data.minus[4] + 1) % (this.data.score[4].score + 1)
                })
                if (this.data.minus[4] != 0) {
                    this.setData({
                        [this.data.temp[4]]: "-" + this.data.minus[4]
                    })
                } else {
                    this.setData({
                        [this.data.temp[4]]: "4桌"
                    })
                }

                break;

            case "B5":
                this.setData({
                    [this.data.temp_minus[5]]: (this.data.minus[5] + 1) % (this.data.score[5].score + 1)
                })
                if (this.data.minus[5] != 0) {
                    this.setData({
                        [this.data.temp[5]]: "-" + this.data.minus[5]
                    })
                } else {
                    this.setData({
                        [this.data.temp[5]]: "椅子"
                    })
                }

                break;

            case "B6":
                this.setData({
                    [this.data.temp_minus[6]]: (this.data.minus[6] + 1) % (this.data.score[6].score + 1)
                })
                if (this.data.minus[6] != 0) {
                    this.setData({
                        [this.data.temp[6]]: "-" + this.data.minus[6]
                    })
                } else {
                    this.setData({
                        [this.data.temp[6]]: "鞋子衣物"
                    })
                }

                break;

            case "B7":
                if (this.data.minus[7] == 3 | this.data.minus[7] == 4 | this.data.minus[7] == 5) {
                    this.setData({
                        [this.data.temp_minus[7]]: (this.data.minus[7] + 1) % (this.data.score[7].score + 1)
                    })
                } else if (this.data.minus[7] == 0) {
                    this.setData({
                        [this.data.temp_minus[7]]: 1
                    })
                } else if (this.data.minus[7] == 1) {
                    this.setData({
                        [this.data.temp_minus[7]]: (this.data.minus[7] + 3) % (this.data.score[7].score + 1)
                    })
                } else if (this.data.minus[7] == 2) {
                    this.setData({
                        [this.data.temp_minus[7]]: (this.data.minus[7] + 2) % (this.data.score[7].score + 1)
                    })
                }
                if (this.data.minus[7] != 0) {
                    this.setData({
                        [this.data.temp[7]]: "-" + this.data.minus[7]
                    })
                } else {
                    this.setData({
                        [this.data.temp[7]]: "垃圾桶"
                    })
                }

                break;

            case "B8":
                this.setData({
                    [this.data.temp_minus[8]]: (this.data.minus[8] + 1) % (this.data.score[8].score + 1)
                })
                if (this.data.minus[8] != 0) {
                    this.setData({
                        [this.data.temp[8]]: "-" + this.data.minus[8]
                    })
                } else {
                    this.setData({
                        [this.data.temp[8]]: "门窗台"
                    })
                }

                break;

            case "B9":
                this.setData({
                    [this.data.temp_minus[9]]: (this.data.minus[9] + 1) % (this.data.score[9].score + 1)
                })
                if (this.data.minus[9] != 0) {
                    this.setData({
                        [this.data.temp[9]]: "-" + this.data.minus[9]
                    })
                } else {
                    this.setData({
                        [this.data.temp[9]]: "天花板、平台、地面"
                    })
                }
                break;

            case "B10":
                this.setData({
                    [this.data.temp_minus[10]]: (this.data.minus[10] + 1) % (this.data.score[10].score + 1)
                })
                if (this.data.minus[10] != 0) {
                    this.setData({
                        [this.data.temp[10]]: "-" + this.data.minus[10]
                    })
                } else {
                    this.setData({
                        [this.data.temp[10]]: "镜子"
                    })
                }

                break;

            case "B11":
                this.setData({
                    [this.data.temp_minus[11]]: (this.data.minus[11] + 1) % (this.data.score[11].score + 1)
                })
                if (this.data.minus[11] != 0) {
                    this.setData({
                        [this.data.temp[11]]: "-" + this.data.minus[11]
                    })
                } else {
                    this.setData({
                        [this.data.temp[11]]: "干净摆放"
                    })
                }

                break;

            case "B12":
                if (this.data.minus[12] == 0 | this.data.minus[12] == 1 | this.data.minus[12] == 2) {
                    this.setData({
                        [this.data.temp_minus[12]]: 3
                    })
                } else {
                    this.setData({
                        [this.data.temp_minus[12]]: 0
                    })
                }
                if (this.data.minus[12] != 0) {
                    this.setData({
                        [this.data.temp[12]]: "-" + this.data.minus[12]
                    })
                } else {
                    this.setData({
                        [this.data.temp[12]]: "脏衣物堆积"
                    })
                }
                break;

            case "B13":
                this.setData({
                    [this.data.temp_minus[13]]: (this.data.minus[13] + 1) % (this.data.score[13].score + 1)
                })
                if (this.data.minus[13] != 0) {
                    this.setData({
                        [this.data.temp[13]]: "-" + this.data.minus[13]
                    })
                } else {
                    this.setData({
                        [this.data.temp[13]]: "厕所门窗"
                    })
                }
                break;

            case "B14":
                this.setData({
                    [this.data.temp_minus[14]]: (this.data.minus[14] + 1) % (this.data.score[14].score + 1)
                })
                if (this.data.minus[14] != 0) {
                    this.setData({
                        [this.data.temp[14]]: "-" + this.data.minus[14]
                    })
                } else {
                    this.setData({
                        [this.data.temp[14]]: "厕所便池"
                    })
                }

                break;

            case "B15":
                if (this.data.minus[15] == 0 | this.data.minus[15] == 1) {
                    this.setData({
                        [this.data.temp_minus[15]]: 2
                    })
                } else {
                    this.setData({
                        [this.data.temp_minus[15]]: 0
                    })
                }
                if (this.data.minus[15] != 0) {
                    this.setData({
                        [this.data.temp[15]]: "-" + this.data.minus[15]
                    })
                } else {
                    this.setData({
                        [this.data.temp[15]]: "蚊帐"
                    })
                }

                break;

            case "B16":
                if (this.data.minus[16] == 0 | this.data.minus[16] == 1 | this.data.minus[16] == 2) {
                    this.setData({
                        [this.data.temp_minus[16]]: 3
                    })
                } else {
                    this.setData({
                        [this.data.temp_minus[16]]: 0
                    })
                }
                if (this.data.minus[16] != 0) {
                    this.setData({
                        [this.data.temp[16]]: "-" + this.data.minus[16]
                    })
                } else {
                    this.setData({
                        [this.data.temp[16]]: "制度"
                    })
                }

                break;

            case "B17":
                this.setData({
                    [this.data.temp_minus[17]]: (this.data.minus[17] + 1) % (this.data.score[17].score + 1)
                })
                if (this.data.minus[17] != 0) {
                    this.setData({
                        [this.data.temp[17]]: "-" + this.data.minus[17]
                    })
                } else {
                    this.setData({
                        [this.data.temp[17]]: "门后物品"
                    })
                }

                break;

            case "B18":
                // this.setData({ //弹出违章电器录入框
                //     banned_style: "flex"
                // })
                if (this.data.minus[18] != 15) {
                    this.setData({
                        [this.data.temp_minus[18]]: 15
                    })
                } else {
                    this.setData({
                        [this.data.temp_minus[18]]: 0
                    })
                }
                if (this.data.minus[18] != 0) {
                    this.setData({
                        [this.data.temp[18]]: "-" + this.data.minus[18]
                    })
                } else {
                    this.setData({
                        [this.data.temp[18]]: "违章电器"
                    })
                }
                break;
            default:
                break;
        }
        var Num_temp = 0;
        for (var i = 0; i < this.data.minus.length; i++) {
            Num_temp += this.data.minus[i]
        }
        this.setData({
            score_num: 100 - Num_temp
        })
    },
    score_reset: function(evt) {
        console.log(evt.currentTarget.dataset.reset)
        var tip = evt.currentTarget.dataset.reset
        if (tip != "违章电器" && tip != "-15") { //当所选项不是违章电器时

            var tmp = evt.currentTarget.dataset.index
            this.setData({
                [this.data.temp_minus[tmp]]: 0,
            })
            this.setData({
                [this.data.temp[tmp]]: this.data.score_backup[tmp].tip
            })
            var Num_temp = 0;
            for (var i = 0; i < this.data.minus.length; i++) {
                Num_temp += this.data.minus[i]
            }
            this.setData({
                score_num: 100 - Num_temp
            })
            wx.vibrateShort();
            wx.showToast({
                title: '已清零',
                icon: 'success',
                duration: 500
            })
        } else { //录入违章电器
            wx.vibrateShort({});
            this.setData({
                banned_style: "flex"
            })
        }

    },

    search: function() {
        var that = this
        const db = wx.cloud.database()
        db.collection('Dorm_Score').where({
            dorm: that.data.Dorm_num
        }).get({
            success: res => {
                if (res.data[0].minus == undefined) {
                    wx.showToast({
                        title: '未打分',
                        icon: 'none',
                        duration: 1500,
                        mask: false,
                        success: (result) => {

                        },
                        fail: () => {
                            wx.showToast({
                                title: '请联网！',
                                icon: 'none',
                                duration: 1500,
                                mask: false,
                            });
                        },
                        complete: () => {}
                    });
                } else {
                    console.log("已打分")
                    wx.showModal({
                        title: '已打分',
                        content: '成绩为：' + res.data[0].score_num,
                        showCancel: true,
                        cancelText: '取消',
                        cancelColor: '#cdcdcd',
                        confirmText: '确定',
                        confirmColor: '#414141'
                    });
                    // wx.showToast({
                    //     title: '已打成绩：' + res.data[0].score_num,
                    //     // icon: 'none',
                    //     duration: 1500,
                    //     mask: false,
                    // });
                    // console.log(res.data[0].score_num)
                }
            }
        })
    },

    subm: function() { //提交打分信息
        var that = this
        console.log(that.data.banned)
        const db = wx.cloud.database()
        db.collection('Dorm_Score').where({
            dorm: that.data.Dorm_num
        }).get({
            success: res => {
                // console.log(res.data[0].minus)
                if (res.data[0].minus == undefined) { //如果查询到扣分信息，则询问是否覆盖
                    wx.cloud.init({
                        traceUser: true
                    })
                    wx.cloud.callFunction({
                        name: 'update_score',
                        data: {
                            current_Dorm: that.data.Dorm_num,
                            score_num: that.data.score_num,
                            banned: that.data.banned,
                            minus: that.data.minus,
                        },
                        complete: res => { //向APP全局数据加入已打分寝室
                            console.log(res)
                            wx.showToast({
                                title: '打分成功！',
                                duration: 800,
                                mask: false
                            });
                            setTimeout(function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }, 1200)
                        }
                    })
                } else {
                    wx.showModal({
                        title: '已有成绩:' + res.data[0].score_num + ",是否覆盖？",
                        content: '确认后将会修改此值，操作不可逆',
                        showCancel: true,
                        cancelText: '取消',
                        cancelColor: '#000000',
                        confirmText: '确定',
                        confirmColor: '#4e8acf',
                        success: (result) => {
                            if (result.confirm) {
                                wx.cloud.init({
                                    traceUser: true
                                })
                                wx.cloud.callFunction({
                                    name: 'update_score',
                                    data: {
                                        current_Dorm: that.data.Dorm_num,
                                        score_num: that.data.score_num,
                                        banned: that.data.banned,
                                        minus: that.data.minus
                                    },
                                })
                                app.globalData.Scored_Dorm.push(that.data.Dorm_num)
                                wx.showToast({
                                    title: '打分成功！',
                                    duration: 800,
                                });
                                setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }, 1200)
                            }
                        }
                    });
                }
            },
            fail: res => {
                wx.showToast({
                    title: '成绩未提交',
                    icon: 'none'
                });
            }
        })
    }
})
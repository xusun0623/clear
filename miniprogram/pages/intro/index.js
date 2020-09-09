Page({
    data: {
        question: [],
        intro_dis: "none"
    },
    globalData: {
        question: []
    },

    onLoad: function() {
        var that = this
        const db = wx.cloud.database()

        wx.showToast({
            title: '',
            icon: 'loading',
            duration: 2500,
            mask: false,
            success: () => {},
            complete: () => {}
        });

        db.collection('Question_Answer').where({
                name: "question_answer"
            })
            .get()
            .then(
                res => {
                    for (var i = 0; i < res.data.length; i++) {
                        that.globalData.question.push({ question: res.data[i].question, answer: res.data[i].answer })
                    }
                    console.log(res.data)
                }
            )
        setTimeout(() => {
            that.setData({
                question: that.globalData.question,
                intro_dis: "block"
            })
        }, 1000);
    }
})
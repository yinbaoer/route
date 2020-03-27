var app = getApp();
Page({
    data : {
        localList : [],
    },
 
    onLoad : function () {
        this.setData({
          localList: app.globalData.localList
        })
    }
});
import updateManager from './common/updateManager';

App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'cloud1-0gys80m48da147a1', // 这里填写你的云开发环境ID
        traceUser: true,
      });
      // 获取云存储图片的真实URL
      wx.cloud.getTempFileURL({
        fileList: ['cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/share2.jpg'],
        success: (res) => {
          this.globalData = {
            shareImageUrl: res.fileList[0].tempFileURL,
          };
        },
      });
    }
  },
  onShow: function () {
    updateManager();
  },
  globalData: {
    shareImageUrl: '',
  },
});

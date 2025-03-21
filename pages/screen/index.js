Page({
  data: {
    locationList: [],
    showCardModal: false,
    cardInfo: [
      {
        avatar: '',
        name: '邱标',
        title: '山苏总负责人',
        phone: '13726964858',
        wechat: 'D376152841',
      },
      {
        avatar: '',
        name: '赖女士',
        title: '山苏销售负责人',
        phone: '15915123972',
        wechat: 'ads123321123321',
      },
    ],
  },

  async onLoad() {
    // 获取场地列表图片
    const { fileList } = await wx.cloud.getTempFileURL({
      fileList: [
        'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/main-title.jpg',
        'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/大唐/main-title.jpg',
        'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/石歧/main-title.jpg',
      ],
    });

    this.setData({
      locationList: [
        {
          id: 1,
          title: '清远市石角镇灵洲村山苏种植基地',
          description: '占地约180亩，清远市乡村振兴示范基地',
          image: fileList[0].tempFileURL,
        },
        {
          id: 2,
          title: '佛山市三水区育苗基地',
          description: '育苗基地，现存30万+颗苗，总投资400万+',
          image: fileList[1].tempFileURL,
        },
        {
          id: 3,
          title: '石歧村-初代山苏基地',
          description: '全国大陆内地第一个山苏种植基地',
          image: fileList[2].tempFileURL,
        },
      ],
    });

    // 获取名片头像
    const { fileList: avatarList } = await wx.cloud.getTempFileURL({
      fileList: [
        'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/fuzeren.jpg',
        'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/shansu5.jpg',
      ],
    });

    this.setData({
      'cardInfo[0].avatar': avatarList[0].tempFileURL,
      'cardInfo[1].avatar': avatarList[1].tempFileURL,
    });
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1, // 全景VR的索引是2
      });
    }
  },

  onLocationTap(e) {
    const { id } = e.currentTarget.dataset;
    console.log('点击场地，ID:', id); // 添加日志
    if (!id) {
      wx.showToast({
        title: '场地信息无效',
        icon: 'none',
      });
      return;
    }
    wx.navigateTo({
      url: `/pages/screen/detail/index?id=${id}`,
      fail: (err) => {
        console.error('页面跳转失败:', err);
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none',
        });
      },
    });
  },

  // 添加分享功能
  onShareAppMessage() {
    return {
      title: '翡翠绿山苏',
      path: '/pages/home/home',
      imageUrl: getApp().globalData?.shareImageUrl,
    };
  },

  onShareTimeline() {
    return {
      title: '翡翠绿山苏',
      query: '',
      imageUrl: getApp().globalData?.shareImageUrl,
    };
  },

  // 添加名片相关方法
  handleBooking(e) {
    console.log('点击预约按钮，当前 showCardModal:', this.data.showCardModal);
    this.setData(
      {
        showCardModal: true,
      },
      () => {
        console.log('设置后 showCardModal:', this.data.showCardModal);
      },
    );
  },

  closeModal() {
    this.setData({
      showCardModal: false,
    });
  },

  onVisibleChange(e) {
    const visible = e.detail.visible;
    this.setData({
      showCardModal: visible,
    });
  },

  copyWechat(e) {
    const wechat = e.currentTarget.dataset.wechat;
    wx.setClipboardData({
      data: wechat,
      success: () => {
        wx.showModal({
          title: '添加联系人',
          content: '微信号已复制，请打开微信添加好友',
          showCancel: false,
          confirmText: '确定',
          success: () => {
            this.setData({
              showCardModal: false,
            });
          },
        });
      },
    });
  },
});

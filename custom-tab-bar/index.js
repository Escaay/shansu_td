Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#3cc51f',
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
        iconPath: 'home',
      },
      {
        pagePath: 'pages/screen/index',
        text: '全景VR',
        iconPath: 'tv',
      },
      // {
      //   pagePath: 'pages/news/index',
      //   text: '山苏简报',
      //   iconPath: 'comment',
      // },
    ],
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = `/${data.path}`;

      // 先更新选中状态
      this.setData({
        selected: data.index,
      });

      wx.switchTab({
        url,
        fail: (err) => {
          console.error('switchTab failed:', err);
          // 如果跳转失败，恢复之前的选中状态
          this.setData({
            selected: this.data.selected,
          });
        },
      });
    },
  },
});

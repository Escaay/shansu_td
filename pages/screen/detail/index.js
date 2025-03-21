var wxPano = requirePlugin('wxPano');

Page({
  data: {
    locationId: null,
    panolist: null,
    entrypanoname: 'xindamen',
    showModal: false,
    isLoading: true,
    sceneList: [], // 初始为空，后续根据 id 设置
    isMenuOpen: false,
    showSceneModal: false,
    showInfoModal: false,
    currentScene: null,
  },

  onLoad(options) {
    const { id } = options;
    this.setData({ locationId: id });

    // 根据 id 设置对应的场景数据
    const locationData = {
      1: {
        scenes: [
          {
            name: 'main',
            title: '入口处',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/main-title.jpg',
            description:
              '清远市石角镇灵洲村山苏种植基地，占地约120亩，带动周边60余户农户的就业，是清远市石角镇乡村振兴的示范基地。',
            panorama:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/main.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.8336, y: 0.5007 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'lengku',
                opacity: 0.7,
              },
              {
                type: 'pano',
                position: { x: 0.9946, y: 0.5107 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'zhongzhidi',
                opacity: 0.7,
              },
              {
                type: 'pano',
                position: { x: 0.6433, y: 0.4645 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'feiliaojian',
                opacity: 0.7,
              },
              {
                type: 'pano',
                position: { x: 0.6727, y: 0.47 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'jiedaishi',
                opacity: 0.7,
              },
              {
                type: 'pano',
                position: { x: 0.7956, y: 0.4815 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'jiedaishi',
                opacity: 0.7,
              },
            ],
          },
          {
            name: 'jiedaishi1',
            title: '蓄水池（暂时关闭）',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/xushuichi-title.jpg',
            description: '用于接待客人，洽谈业务',
            panorama:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/jiedai.jpg',
            infospots: [],
          },
          {
            name: 'zhongzhidi',
            title: '种植地',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/zhongzhidi-title.jpg',
            description: '山苏的种植场所',
            panorama:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/zhongzhidi.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.0121, y: 0.49 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'main',
                opacity: 0.75,
              },
            ],
          },
          {
            name: 'lengku2',
            title: '打包冷库',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/lengku2-title.jpg',
            description: '用于存储泡沫箱和山苏的打包发货',
            panorama:
              '	cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/lengku2.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.3693, y: 0.4487 },
                size: 0.8,
                icon: 'arrow',
                entryname: 'main',
                opacity: 0.75,
              },
            ],
          },
          {
            name: 'lengku',
            title: '存储冷库',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/lengku-title.jpg',
            description: '用于存储泡沫箱和山苏的打包发货',
            panorama:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/lengku.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.5781, y: 0.4512 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'main',
                opacity: 0.75,
              },
            ],
          },
          {
            name: 'feiliaojian',
            title: '肥料间',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/feiliaojian-title.jpg',
            description: '用于发酵和存储肥料',
            panorama:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/feiliaojian.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.6105, y: 0.4422 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'main',
                opacity: 0.75,
              },
            ],
          },
          {
            name: 'jiedaishi',
            title: '接待室',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/jiedai-title.jpg',
            description: '用于接待客人，洽谈业务',
            panorama:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/灵洲村/jiedai.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.6567, y: 0.435 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'main',
                opacity: 0.75,
              },
            ],
          },
        ],
      },
      2: {
        scenes: [
          {
            name: 'main',
            title: '入口处',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/大唐/main-title.jpg',
            description: '佛山市三水区育苗基地，现存30万+颗苗，总投资400万+',
            panorama: 'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/大唐/main.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.1115, y: 0.488 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'muzhu',
                opacity: 0.7,
              },
              {
                type: 'pano',
                position: { x: 0.7826, y: 0.5022 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'yumiao',
                opacity: 0.7,
              },
            ],
          },
          {
            name: 'xushuichi',
            title: '蓄水池（暂时关闭）',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/xushuichi-title.jpg',
            description: '存放母株的区域，母株指20年以上的山苏。',
            panorama:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/大唐/yumiao.jpg',
            infospots: [],
          },
          {
            name: 'muzhu',
            title: '母株区',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/大唐/muzhu-title.jpg',
            description: '存放母株的区域，母株指20年以上的山苏。',
            panorama: 'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/大唐/muzhu.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.7925, y: 0.5012 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'main',
                opacity: 0.7,
              },
            ],
          },
          {
            name: 'yumiao',
            title: '育苗区',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/大唐/yumiao-title.jpg',
            description: '培育山苏苗的区域。',
            panorama:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/大唐/yumiao.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.7501, y: 0.5112 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'main',
                opacity: 0.7,
              },
            ],
          },
        ],
      },
      3: {
        scenes: [
          {
            name: 'main',
            title: '入口处',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/石歧/main-title.jpg',
            description: '全国大陆内地第一个山苏基地',
            panorama: 'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/石歧/main.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.489, y: 0.4682 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'muzhu',
                opacity: 0.7,
              },
            ],
          },
          {
            name: 'xushuichi',
            title: '蓄水池（暂时关闭）',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/xushuichi-title.jpg',
            description: '存放母株的区域，母株指20年以上的山苏。',
            panorama: 'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/石歧/muzhu.jpg',
            infospots: [],
          },
          {
            name: 'muzhu',
            title: '母株区',
            image:
              'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/石歧/muzhu-title.jpg',
            description: '存放母株的区域，母株指20年以上的山苏。',
            panorama: 'cloud://cloud1-0gys80m48da147a1.636c-cloud1-0gys80m48da147a1-1304271127/image/vr/石歧/muzhu.jpg',
            infospots: [
              {
                type: 'pano',
                position: { x: 0.1045, y: 0.4655 },
                size: 0.7,
                icon: 'arrow',
                entryname: 'main',
                opacity: 0.7,
              },
            ],
          },
        ],
      },
    };

    // 设置场景列表
    const currentLocation = locationData[id];
    if (currentLocation) {
      this.setData({
        sceneList: currentLocation.scenes,
      });

      // 获取全景图URL
      const fileList = currentLocation.scenes.map((scene) => scene.panorama);

      // 获取云文件URL
      wx.cloud.getTempFileURL({
        fileList: fileList,
        success: (res) => {
          const panoConfig = {
            panolist: currentLocation.scenes.map((scene, index) => ({
              name: scene.name,
              src: res.fileList[index].tempFileURL,
              infospots: scene.infospots,
            })),
            request: wx.request,
            loader: 'GLLoader',
            entryname: currentLocation.scenes[0].name,
          };

          this.setData({
            panolist: panoConfig.panolist,
            autoinit: true,
          });
          wxPano.config(panoConfig);
        },
        fail: (err) => {
          console.error('获取云文件URL失败：', err);
          this.setData({ isLoading: false });
        },
      });
    }

    wxPano.onReady = () => {
      console.log('wxPano.onReady');
      wxPano.setCameraFov(90);
      wxPano.setCameraLookAt({
        x: 0.5,
        y: 0.5,
      });
      this.setData({ isLoading: false });
    };
  },

  covertap: function () {
    this.setData({
      isMenuOpen: false,
      showSceneModal: true,
    });
  },

  closeSceneModal: function () {
    this.setData({
      showSceneModal: false,
    });
  },

  selectScene: function (e) {
    const scene = e.currentTarget.dataset.scene;

    // 直接使用 navigateMethod 切换到新场景
    wxPano.navigateMethod({
      type: 'pano',
      entryname: scene.name,
    });

    // 关闭模态框
    this.setData({
      showSceneModal: false,
    });
  },

  setCameraLookAt: function () {
    wxPano.setCameraLookAt({
      x: 0.5,
      y: 0.5,
    });
  },

  enableTouch: function () {
    wxPano.enableTouch();
  },

  disableTouch: function () {
    wxPano.disableTouch();
  },

  getPanoInfo() {
    // 获取当前场景信息
    const currentPanoInfo = wxPano.getPanoInfo();
    const currentSceneName = currentPanoInfo.name;

    // 从 sceneList 中找到当前场景
    const currentScene = this.data.sceneList.find((scene) => scene.name === currentSceneName);

    if (currentScene) {
      this.setData({
        isMenuOpen: false,
        showInfoModal: true,
        currentScene: {
          title: currentScene.title,
          description: currentScene.description,
        },
      });
    }
  },

  closeInfoModal() {
    this.setData({
      showInfoModal: false,
    });
  },

  showSceneList() {
    this.setData({
      showModal: true,
    });
  },

  hideModal() {
    this.setData({
      showModal: false,
    });
  },

  toggleMenu() {
    console.log('toggleMenu');
    this.setData({
      isMenuOpen: !this.data.isMenuOpen,
    });
  },

  goBack() {
    this.setData({ isMenuOpen: false });
    wx.navigateBack();
  },

  closeMenu: function () {
    if (this.data.isMenuOpen) {
      this.setData({
        isMenuOpen: false,
      });
    }
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
});

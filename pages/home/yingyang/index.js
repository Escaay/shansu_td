Page({
  data: {
    nutritionData: [
      {
        name: '粗蛋白',
        content: '2.82%',
        average: '0.40%~2.40%',
        advantage: '高1.18~7.05倍',
        benefit: '促进肌肉生长，增强免疫力',
      },
      {
        name: '粗脂肪',
        content: '2.59%',
        average: '0.10%~0.40%',
        advantage: '高6.5~25.9倍',
        benefit: '富含不饱和脂肪酸，保护心血管',
      },
      {
        name: '维生素C',
        content: '791.2 μg/g',
        average: '200~320 μg/g',
        advantage: '高2.5~4倍',
        benefit: '强力抗氧化，提升抗病能力',
      },
      {
        name: '钾（K）',
        content: '4,921 μg/g',
        average: '910~3,133 μg/g',
        advantage: '高1.6~5.4倍',
        benefit: '调节血压，平衡电解质',
      },
      {
        name: 'β-胡萝卜素',
        content: '10.4 μg/g',
        average: '0.26~7.51 μg/g',
        advantage: '高1.4~40倍',
        benefit: '护眼防癌，增强皮肤健康',
      },
      {
        name: '铜（Cu）',
        content: '19.1 μg/g',
        average: '0.1~0.5 μg/g',
        advantage: '高38~191倍',
        benefit: '促进铁吸收，预防贫血',
      },
      {
        name: '膳食纤维',
        content: '1.16%',
        average: '1.10%~4.00%',
        advantage: '与高纤维蔬菜相当',
        benefit: '改善肠道健康，预防便秘',
      },
      {
        name: '总糖（低糖特性）',
        content: '1.56%',
        average: '1.10%~5.80%',
        advantage: '比多数低34%~73%',
        benefit: '适合糖尿病及控糖人群',
      },
    ],
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

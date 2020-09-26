// 配置
window.Config = {
  // 站点名
  SiteName: '忆星辰の服务器状态',

  // 站点链接
  SiteUrl: 'https://status-v2.extingstudio.com/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1032491-bbade06318d93fc14e10407a',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'SSL 证书',
      url: 'https://ssl.extingstudio.com/'
    },
    {
      text: '回到主页',
      url: 'https://extingstudio.com'
    }
  ]
};

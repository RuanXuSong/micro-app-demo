/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-11-25 15:12:01
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-04-18 18:36:26
 */
export default {
  '/resource': {
    success: true,
    data: [
      {
        name: 'homepage',
        apiUrl: '/homepage',
        description: '首页',
      },
      {
        key: '/commodity_manage/list',
        apiUrl: '/commodity_manage/list',
        description: '商品管理',
      },
      {
        key: '/order_manage/list',
        apiUrl: '/order_manage/list',
        description: '交易管理',
        children: [],
      },
      {
        key: '/store/list',
        apiUrl: '/store/list',
        description: '店铺管理',
        children: [],
      },
      {
        key: '/admin',
        apiUrl: '/admin',
        description: '管理员管理',
        children: [
          {
            key: '/admin/staff/list',
            apiUrl: '/admin/staff/list',
            description: '员工管理',
            children: [],
          },
          {
            name: '/admin/authorization/list',
            apiUrl: '/admin/authorization/list',
            description: '角色管理',
          },
          {
            name: '/admin/resource/list',
            apiUrl: '/admin/resource/list',
            description: '资源管理',
          },
          {
            name: '/admin/account/list',
            apiUrl: '/admin/account/list',
            description: '商户后台账户管理',
          },
        ],
      },
      {
        key: '/page',
        apiUrl: '/page',
        description: '页面配置',
        children: [
          {
            key: '/page/banner/list',
            apiUrl: '/page/banner/list',
            description: '页面轮播',
            children: [],
          },
          {
            key: '/page/hot_search/list',
            apiUrl: '/page/hot_search/list',
            description: '热搜设置',
            children: [],
          },
          {
            key: '/page/systemProtocol/list',
            apiUrl: '/page/systemProtocol/list',
            description: '系统协议',
            children: [],
          },
          {
            key: '/page/helpCenter/list',
            apiUrl: '/page/helpCenter/list',
            description: '帮助中心',
            children: [],
          },
        ],
      },
      {
        key: '/accountChecking',
        apiUrl: '/accountChecking',
        description: '财务对账',
        children: [
          {
            key: '/accountChecking/bill/list',
            apiUrl: '/accountChecking/bill/list',
            description: '商务对账单',
            children: [],
          },
          {
            key: '/accountChecking/credentials/list',
            apiUrl: '/accountChecking/credentials/list',
            description: '打款凭证',
            children: [],
          },
        ],
      },
      {
        key: '/unsettled',
        apiUrl: '/unsettled',
        description: '待处理',
        children: [
          {
            key: '/unsettled/store_check/list',
            apiUrl: '/unsettled/store_check/list',
            description: '店铺审核',
            children: [],
          },
          {
            key: '/unsettled/commodity_check/list',
            apiUrl: '/unsettled/commodity_check/list',
            description: '商品审核',
            children: [],
          },
          {
            key: '/unsettled/withDrawManage',
            apiUrl: '/withDrawManage',
            description: '提现管理',
            children: [
              {
                key: '/unsettled/withDrawManage/list',
                apiUrl: '/unsettled/withDrawManage/list',
                description: '提现审核',
                children: [],
              },
              {
                key: '/unsettled/withDrawManage/paymentList',
                apiUrl: '/unsettled/withDrawManage/paymentList',
                description: '财务打款',
                children: [],
              },
            ],
          },
          {
            key: '/unsettled/feedback/list',
            apiUrl: '/unsettled/feedback/list',
            description: '问题反馈',
            children: [],
          },
          {
            key: '/unsettled/cooperateInfo/list',
            apiUrl: '/unsettled/cooperateInfo/list',
            description: '合作信息',
            children: [],
          },
        ],
      },
      {
        key: '/',
        apiUrl: '/paymentManage',
        description: '支付管理',
        children: [
          {
            key: '/paymentManage/list',
            apiUrl: '/paymentManage/list',
            description: '支付流水',
            children: [],
          },
          {
            key: '/paymentManage/detailList',
            apiUrl: '/paymentManage/detailList',
            description: '个人推广明细',
            children: [],
          },
          {
            key: '/paymentManage/monthDetail/list',
            apiUrl: '/paymentManage/monthDetail/list',
            description: '每月推广明细',
            children: [],
          },
          {
            key: '/paymentManage/agentList',
            apiUrl: '/paymentManage/agentList',
            description: '代理商流水',
            children: [],
          },
        ],
      },
      {
        key: '/agent/list',
        apiUrl: '/agent/list',
        description: '代理商',
        children: [],
      },
      {
        key: '/member/list',
        apiUrl: '/member/list',
        description: '会员管理',
        children: [],
      },
      {
        key: '/agentShareConfig/edit',
        apiUrl: '/agentShareConfig/edit',
        description: '代理分成配置',
        children: [
          {
            key: '/agentShareConfig/personal',
            apiUrl: '/agentShareConfig/personal',
            description: '个人推广',
            children: [],
          },
          {
            key: '/agentShareConfig/group',
            apiUrl: '/agentShareConfig/group',
            description: '团队奖励',
            children: [],
          },
        ],
      },
    ],
    code: 20000,
    message: '成功',
  },
};

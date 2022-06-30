const customerList = [
  {
    userId: 10001,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '50',
    gender: '男'
  },
  {
    userId: 10002,
    name: '里斯',
    idCard: '482502200012121245',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '50',
    gender: '男'
  },
  {
    userId: 10003,
    name: '王五',
    idCard: '420502199912121145',
    customerType: '建档立卡贫困人口',
    applyType: '多人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '银行初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '50',
    gender: '男'
  },
  {
    userId: 10004,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '50',
    gender: '男'
  },
  {
    userId: 10005,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '50',
    gender: '男'
  },
  {
    userId: 10006,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '50',
    gender: '男'
  },
  {
    userId: 10007,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '50',
    gender: '男'
  },
  {
    userId: 10008,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '50',
    gender: '男'
  },
  {
    userId: 10009,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '150',
    gender: '男'
  },
  {
    userId: 10009,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '150',
    gender: '男'
  },
  {
    userId: 10009,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '150',
    gender: '男'
  },
  {
    userId: 10009,
    name: '张三',
    idCard: '420502199912121145',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    applyTime: '2021-02-01 15:38:47',
    state: '人设初审',
    responsible: '杨幂',
    applyForm: '表格',
    applyAmount: '150',
    gender: '男'
  }

]

const customerInfo = {
  personalInfo: {
    name: '江波',
    gender: '0',
    address: '湖北省宜昌市',
    isMarried: '0',
    idCard: '430703196911019859',
    idCardExpiredTime: '2048-02-14',
    birth: '1988-07-08',
    phone: '18912345678',
    customerType: '城镇登记失业人员',
    bankName: '湖北银行东山支行',
    usage: '流动周转',
    applyTime: '2018-12-12  18:00',
    applyAmount: '150,0000',
    applyTimes: '1',
    guaranteeType: '抵押',
    applyRange: '24',
    socialInsuranceTime: '2018年11月',
    socialInsuranceInfo: '',
    originAddr: '宜昌市龙腾虎跃小区8栋3单元502号',
    livingAddr: '宜昌市龙腾虎跃小区8栋3单元502号'
  },
  businessInfo: {
    enterpriseName: '宜昌科讯金服科技有限公司',
    socialCreditNum: '91340100551846686J',
    legal: '江波',
    enterpriseType: '有限公司',
    registerTime: '2018-03-22',
    expireTime: '2048-03-22',
    registerMoney: '500万',
    enterpriseState: '存续',
    registerAddress: '宜昌市云计算中心2F',
    staffNum: '234',
    BusinessScope: '数据资源采集、存储、开发、处理、交易、服务和运营,数据资产运营,数据资产评估,数据产品开发,数据资产增值,数据信息咨询服务,信息系统集成服务,大数据产业资产管理,大数据产业投资,大数据平台建设及运营维护,云计算平台建设及运营维护,大数据应用平台开发和运营维护;(以上范围不得涉及国家、商业及个人等的秘密数据;不含个人征信、电子支付、虚拟货币、增值电信等禁止或限制类业务)。'
  },
  urgent: {
    name: '张三',
    phone: '13800138000',
    relation: '兄弟'
  },
  pictures: {
    idCard_z: '',
    idCard_f: '',
    faceAuth: '',
    residence: '',
    graduate: '',
    marry: '',
    realEstate: '',
    employment: ''
  }

}

const spouseInfo = {
  name: '建波',
  gender: '男',
  address: '湖北省宜昌市西陵区湖畔花岸别墅',
  isMarried: '已婚',
  idCard: '420501197410121234',
  idCardExpiredTime: '2044-12-01',
  enterpriseName: '国家电网'
}

const guarantorInfo = {
  name: '赵丽颖',
  gender: '女',
  address: '湖北省宜昌市',
  isMarried: '已婚',
  idCard: '420502200012121123',
  idCardExpiredTime: '2035-09-11',
  enterpriseName: '三峡金科',
  spouseName: '麦兜',
  spouseIdCard: '420502200011121234'
}

const bankStatisticList = [
  {
    id: '1',
    name: '张三',
    gender: '男',
    idCard: '420502199912121234',
    cardType: '身份证',
    customerType: '高校毕业生',
    applyType: '个人申请',
    phone: '13112345678',
    isMarried: '否',
    spouseName: '里斯',
    spouseIdCard: '420502199912011212',
    principalName: '三峡金科有限责任公司',
    code: '341281199111302095',
    loanAmount: '150000',
    isFirstLoan: '是',
    loanTime: '2021-01-01',
    repaymentTime: '2022-12-31',
    interestRate: '2.35%',
    loanTerm: '12个月',
    bank: '中国工商银行铁路吧支行',
    area: '西陵区',
    registerAddress: '高新区发展大道108号',
    guaranteeType: '抵押'

  }
]

export default {
  'get|/customerList': option => {
    return {
      status: 200,
      message: 'success',
      data: customerList
    }
  },
  'get|/customerInfo': option => {
    return {
      status: 200,
      message: 'success',
      data: customerInfo
    }
  },
  'get|/spouseInfo': option => {
    return {
      status: 200,
      message: 'success',
      data: spouseInfo
    }
  },
  'get|/guarantorInfo': option => {
    return {
      status: 200,
      message: 'success',
      data: guarantorInfo
    }
  },
  'get|/statistical': option => {
    return {
      status: 200,
      message: 'success',
      data: bankStatisticList
    }
  }

}

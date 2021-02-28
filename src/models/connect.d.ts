import { CustomerModelState } from './customer.model'
import { OperatorModelState } from './operator.model'
import { Settings } from '@ant-design/pro-layout'
import { MenuDataItem } from '@ant-design/pro-layout'
import { GlobalModelState } from './global'
import { UserModelState } from './users'
import { AccountModelState } from './account.model'

export {
  GlobalModelState,
  UserModelState,
  AccountModelState,
  CustomerModelState,
  OperatorModelState,
}

export interface Loading {
  global: boolean
  effects: { [key: string]: boolean | undefined }
  models: {
    global?: boolean
    menu?: boolean
    user?: boolean
    setting?: boolean
    account?: boolean
    customer?: boolean
    operator?: boolean
  }
}

export interface ConnectState {
  isLogin: Number
  global: GlobalModelState
  loading: Loading
  user: UserModelState
  settings: Settings
  account: AccountModelState
  customer: CustomerModelState
  operator: OperatorModelState
}

export interface Route extends MenuDataItem {
  routes?: Route[]
}

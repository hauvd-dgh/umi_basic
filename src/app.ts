import { getStateFromStore } from './utils/utils'
import { ConnectState } from './models/connect'

export async function getInitialState() {
  const state: Partial<ConnectState> = {
    isLogin: 0,
    user: {
      accessToken: getStateFromStore('accessToken'),
      currentUser: getStateFromStore('currentUser'),
    },
  }

  return state
}

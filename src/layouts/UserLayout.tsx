import React from 'react'
import { MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout'
import { Link, formatMessage, ConnectProps, connect, useIntl } from 'umi'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import styles from './UserLayout.less'
import SelectLang from '@/components/SelectLang'
import { ConnectState } from '@/models/connect'
import { Card } from 'antd'

export interface UserLayoutProps extends Partial<ConnectProps> {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem
  }
}

const UserLayout: React.FC<UserLayoutProps> = props => {
  const {
    route = {
      routes: [],
    },
    children,
    location = {
      pathname: '',
    },
  } = props

  const { routes = [] } = route
  const { breadcrumb } = getMenuData(routes)
  const { formatMessage } = useIntl()
  const customizeTitle = formatMessage({ id: 'login.loginPage' })

  const titlePage = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    title: customizeTitle,
    ...props,
  })

  return (
    <HelmetProvider>
      <Helmet>
        <title>{titlePage}</title>
        <meta name="description" content={titlePage} />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <Card size="small" className={styles.card}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/login">
                  <img alt="logo" src="logo.png" />
                </Link>
              </div>
            </div>
            {children}
          </Card>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default connect(({ settings }: ConnectState) => ({ ...settings }))(
  UserLayout,
)

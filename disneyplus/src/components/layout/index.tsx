import type { PropsWithChildren } from 'react';
import style from './index.module.css';
import Sidebar from './sidebar/sidebar';
import Page from './pages';
const Layout = (props: PropsWithChildren<unknown>) => {
 const {children} = props;

  return (
    <div className={style.container}>
        <Sidebar />
        <Page>
        {children}
        </Page>
    </div>
  );
};

export default Layout;
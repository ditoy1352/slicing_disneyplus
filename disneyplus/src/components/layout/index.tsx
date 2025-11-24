import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import Page from './page';

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Page>
        <Outlet />
      </Page>
    </div>
  );
};

export default Layout;
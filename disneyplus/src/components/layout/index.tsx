import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import Page from './page';
import useAuth from '../../hooks/useAuth';
import useAuthState from '../../hooks/useAuthState';

const Layout = () => {
  const user =useAuthState();
  const {logout} = useAuth();
  const handleLogout = () => {
    logout();
  }
  return (
    <div>
      <Sidebar user={user} onLogout={handleLogout}/>
      <Page>
        <Outlet />
      </Page>
    </div>
  );
};

export default Layout;
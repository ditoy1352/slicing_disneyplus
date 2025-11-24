import type { PropsWithChildren } from 'react';
import styles from './index.module.css'
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type MenuItemsProps = {
  icon: string;
  children: React.ReactNode;
  url: string;
}

const MenuItems = (props: PropsWithChildren<MenuItemsProps>) => {
  const { children, icon, url} = props;


  return <li className={styles.menuItem}>
    <Link to={url} className={styles.link}>
    <span className={clsx(["material-symbols-outlined", styles.menuIcon])}>
      {icon}
    </span>
    <span className={styles.menuName}>{children}</span>
    </Link>
    </li>
}

const Sidebar = () => {
  return (
    <nav className={styles.container} >
      <img className={styles.logo} src="https://cdn.brandfetch.io/idh5Jct7tV/w/3840/h/2811/theme/light/idRhWuwdh-.png?c=1dxbfHSJFAPEGdCLU4o5B" alt="" />
      <ul className={styles.wrapper}>
        <MenuItems url='/search' icon="search">search</MenuItems>
        <MenuItems url='/' icon="home">Home</MenuItems>
        <MenuItems url='/Series' icon="tv_gen">Series</MenuItems>
        <MenuItems url='/Movies' icon="movie">Movie</MenuItems>
      </ul>
      <div className={styles.overlay}></div>
    </nav>
  );
};

export default Sidebar;
import type { PropsWithChildren } from 'react';
import styles from './index.module.css'
import clsx from 'clsx';

type MenuItemsProps = PropsWithChildren<{
  icon: string;
}>;
const MenuItems = (props: PropsWithChildren<MenuItemsProps>) => {
  const { children, icon} = props;

  return <li className={styles.menuItem}>
    <span className={clsx(["material-symbols-outlined", styles.menuIcon])}>
      {icon}
    </span>
    <span className={styles.menuName}>{children}</span>
    </li>
}

const Sidebar = () => {
  return (
    <nav className={styles.container}>
      <img className={styles.logo} src="https://cdn.brandfetch.io/idh5Jct7tV/w/3840/h/2811/theme/light/idRhWuwdh-.png?c=1dxbfHSJFAPEGdCLU4o5B" alt="" />
      <ul className={styles.wrapper}>
        <MenuItems icon="search">search</MenuItems>
        <MenuItems icon="home">Home</MenuItems>
        <MenuItems icon="tv_gen">Series</MenuItems>
        <MenuItems icon="movie">Movie</MenuItems>
      </ul>
      <div className={styles.overlay}></div>
    </nav>
  );
};

export default Sidebar;
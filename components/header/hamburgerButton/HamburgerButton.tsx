import styles from './hamburgerButton.module.scss';
import cn from 'classnames';
import { useHeaderState } from '../shared/stores/HeaderContext';

const HamburgerButton = () => {
  const { isMenuVisible, toogleMenu } = useHeaderState();

  return (
    <button
      aria-haspopup="true"
      aria-controls="navigation"
      aria-expanded={isMenuVisible}
      onClick={toogleMenu}
      className={cn(styles.hamburger, {
        [styles.hamburgerOpen]: !isMenuVisible,
      })}
    >
      <span className="visually-hidden">{isMenuVisible ? 'Zamknij' : 'Otwórz'} menu</span>
    </button>
  );
};

export default HamburgerButton;

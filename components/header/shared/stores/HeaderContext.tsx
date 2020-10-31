import { ReactNode, createContext, useReducer, useContext } from 'react';
import useToggle from 'shared/hooks/useToggle';

type State = {
  isMenuVisible: boolean;
  toogleMenu: () => void;
};

type HeaderProviderProps = { children: ReactNode };

const HeaderStateContext = createContext<State | undefined>(undefined);

const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isMenuVisible, toogleMenu] = useToggle();

  return (
    <HeaderStateContext.Provider value={{ isMenuVisible, toogleMenu }}>
      {children}
    </HeaderStateContext.Provider>
  );
};

const useHeaderState = () => {
  const context = useContext(HeaderStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};

export { HeaderProvider, useHeaderState };

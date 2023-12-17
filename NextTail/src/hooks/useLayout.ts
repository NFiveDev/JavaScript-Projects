import { useContext } from 'react';
import { LayoutContext, LayoutDispatchContext } from '@/context/layoutProvider';

export default function useLayout() {
  const dispatch = useContext(LayoutDispatchContext);
  const context = useContext(LayoutContext);

  if (!dispatch || !context) {
    throw new Error('Must be used inside LayoutContextProvider');
  }

  return {
    layoutDispatcher: dispatch,
    layoutState: context,
  };
}

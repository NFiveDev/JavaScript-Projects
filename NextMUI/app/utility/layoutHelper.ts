export const SIDEBAR_OPEN_STATE = 'sidebar_open';

export const SIDEBAR_OPEN_STATE_VALUES = ['yes', 'no'];

export function convertLocalSidebarStateBoolean(val: string | null) {
  return val === 'yes' ? true : false;
}

function convertStateToString(val: boolean) {
  const strToYesNo = val === true ? SIDEBAR_OPEN_STATE_VALUES[0] : SIDEBAR_OPEN_STATE_VALUES[1];
  return strToYesNo;
}

export function getLocalStorageSidebarState() {
  const state = localStorage.getItem(SIDEBAR_OPEN_STATE);
  return state;
}

export function setLocalStorageSidebarState(val: boolean){
  return localStorage.setItem(SIDEBAR_OPEN_STATE, convertStateToString(val));
}


function OsHelper() {

  function isWindows() : boolean{
    return navigator.userAgent.indexOf('Windows') !== -1 ? true : false;
  }
  
  function isMacOs() : boolean {
    return navigator.userAgent.indexOf('Mac') !== -1 ? true : false;
  }

  function getOperationSys() : 'win' | 'mac' | undefined {
    if(isMacOs()) return 'mac';
    if(isWindows()) return 'win';
    return;
  }

  return {
    GetSys: getOperationSys
  }
}

const SysHelper = OsHelper();

export default SysHelper;
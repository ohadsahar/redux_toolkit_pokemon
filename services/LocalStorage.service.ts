export class LocalStorageService {
  static getNameByKey(keyName: string) {
    const item = localStorage.getItem(keyName);
    const parseItem = item ? JSON.parse(item) : item;
    return parseItem;
  }

  static setByKeyName(keyName: string, value: unknown) {
    try {
      localStorage.setItem(keyName, JSON.stringify(value));
    } catch (error) {
      console.log(`Can't to set item in local storage ${error}`);
    }
  }

  static removeByKeyName(keyName: string) {
    localStorage.removeItem(keyName);
  }
}

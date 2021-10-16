type StorageNameProps = 'historyStorage' | 'playersStorage' | 'settingsStorage';

interface LocalStorageProps {
    getLocalStorage(storageName: StorageNameProps);
    setLocalStorage(storageName: StorageNameProps, value: any): void;
}

export default function useLocalStorage(): LocalStorageProps {
    function getLocalStorage(storageName: StorageNameProps) {
        return localStorage.getItem(storageName);
    }

    function setLocalStorage(storageName: StorageNameProps, value: any): void {
        localStorage.setItem(storageName, JSON.stringify(value));
    }

    return { getLocalStorage, setLocalStorage };
}

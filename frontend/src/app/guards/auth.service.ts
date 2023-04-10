import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor() {

    }
    setLocalStorage(key: any, value: any) {
        if (!key || !value) {
            return null;
        }
        localStorage.setItem(key, value);
        return true;
    }
    getLocalStorage(key: any) {
        if (!key) {
            return null;
        }
        const item = localStorage.getItem(key);
        return item;
    }
}
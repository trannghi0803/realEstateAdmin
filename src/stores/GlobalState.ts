import { types, onSnapshot } from "mobx-state-tree";
import { Constants } from "../constants";
import Cookies from 'universal-cookie';
// Don"t remove !!!
const Model = types
    .model("model", {
        model: types.frozen()
    })
    .actions((self) => ({
        setModel(model: any) {
            self.model = model;
        }
    }));
const Global = types
    .model("session", {
        isAuthenticated: false,
        setting: types.frozen(),
        isShowLoading: false,
        isOpenModalLogin: false,
        isOpenModalForgotPassword: false,
        isOpenModalRegister: false,
        user: types.frozen(),
        language: types.frozen(),
        filterObj: types.frozen(),
        listFavorite: types.frozen(),
        province: types.frozen(),
        isLoadSplash: true,
        listProvinceList: types.frozen(),
        contacts: types.frozen(),
        userInfo: types.frozen(),
    })
    .actions((self) => ({
        setAuthenticateStatus(isAuthenticated: boolean) {
            self.isAuthenticated = isAuthenticated;
        },
        setSetting(setting: any) {
            self.setting = setting;
        },
        setUser(user: any){
            self.user = user;
        },
        setLanguage(language: any){
            self.language = language;
        },
        showLoading() {
            self.isShowLoading = true;
        },
        hideLoading() {
            self.isShowLoading = false;
        },
        setFilter(filterObj: any) {
            self.filterObj = filterObj;
        },
        setListFavorite(listFavorite: any){
            self.listFavorite = listFavorite;
        },
        setModalLogin(value: boolean){
            self.isOpenModalLogin = value
        },
        setModalForgotPassword(value: boolean) {
            self.isOpenModalForgotPassword = value
        },
        setModalRegister(value: boolean){
            self.isOpenModalRegister = value
        },
        setProvince(data?: any){
            self.province = data;
        },
        setIsLoadSplash(value: boolean){
            self.isLoadSplash = value;
        },
        setListProvinceList(value: any){
            self.listProvinceList = value
        },
        setContacts(value: any){
            self.contacts = value
        },
        setUserInfo(userInfo: any) {
            self.userInfo = userInfo;
        },
    }));

// Don"t remove !!!
const sessionStorageState = localStorage.getItem(Constants.StorageKeys.GLOBAL_STATE);
const initialState = sessionStorageState !== null ? JSON.parse(sessionStorageState) : {};

function createGlobalState(snapshot: any) {
    let store: any = undefined;
    let snapshotListenerDestroyer: any = undefined;
    // clean up snapshot listener
    if (snapshotListenerDestroyer) snapshotListenerDestroyer()

    // create new one
    store = Global.create(snapshot);
    // connect local storage
    snapshotListenerDestroyer = onSnapshot(store, (snapshot) =>
        localStorage.setItem(Constants.StorageKeys.GLOBAL_STATE, JSON.stringify(snapshot))
    )
  
    return store;
}

const ModelStorage = Model.create();
let GlobalState = createGlobalState(initialState);

export function clearGlobalState() {
    GlobalState = createGlobalState({});
    localStorage.clear();
}

export {
    ModelStorage,
    GlobalState,
};
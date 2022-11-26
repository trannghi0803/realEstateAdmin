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
        setting: types.frozen(),
        isShowLoading: false,
        isOpenModalLogin: false,
        isOpenModalRegister: false,
        user: types.frozen(),
        language: types.frozen(),
        filterObj: types.frozen(),
        listFavorite: types.frozen(),
        province: types.frozen(),
        isLoadSplash: true,
        listProvinceList: types.frozen(),
        contacts: types.frozen(),
    })
    .actions((self) => ({
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
        }
    }));

// Don"t remove !!!
const sessionStorageState = sessionStorage.getItem(Constants.StorageKeys.GLOBAL_STATE);
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
        sessionStorage.setItem(Constants.StorageKeys.GLOBAL_STATE, JSON.stringify(snapshot))
    )
  
    return store;
}

const ModelStorage = Model.create();
let GlobalState = createGlobalState(initialState);

export function clearGlobalState() {
    GlobalState = createGlobalState({});
}

export {
    ModelStorage,
    GlobalState,
};
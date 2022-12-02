import { TEnvironment, TLanguage } from "../commons/utils";

const Constants = {

    /**
     * Config for api.
     */
    Api: {
        /** Root URL of Api Server */
        // BASE_URL: "https://domain.com", // Server Live
        // BASE_URL: "https://localhost:5001/api/", // Server Local
        // BASE_URL: "http://api.phulong.shop/api/", // Server Test
        BASE_URL: "http://localhost:5000/api/", // Server AWS
        // BASE_URL: "https://api.phulongsmileliving.com/api", // Server AWS
        BASE_ASSETS_URL: "http://localhost:5003/assets/", // Server AWS
        
        // CLIENT_CERT: null,
        CLIENT_ID: null,
        CLIENT_KEY: null,
        /** Timeout for each request: 25sec */
        TIMEOUT: 25 * 1000,

        REPORT_IMG_ROOTPATH: "/reports/",
        USER_IMG_ROOTPATH: "/users/"
    },

    /**
     * Return code from Api
     */
    ApiCode: {
        // Code from server api
        SUCCESS: 200,

        // Code from local app
        CONNECTION_TIMEOUT: "CONNECTION_TIMEOUT",
        INTERNAL_SERVER: 500,
        UNKNOWN_NETWORK: "UNKNOWN_NETWORK",
        SHOW_POPUP: "SHOW_POPUP"
    },

    /**
     * Setting path for Api
     */
    ApiPath: {
        // auth
        LOGIN: "Login",
        LOGOUT: "/Logout",
        REGISTER: "register",
        ACTIVE_ACCOUNT: "active",
        REFRESH_TOKEN: "/RefreshToken",
        UPLOAD_FILE: "file/upload",
        GET_USER_INFO: "Account/GetUserInfo",
        CHECK_ACCOUNT: "/Account/CheckAccount",
        
        CATEGORY: "/category",
        REAL_ESTATE: "/realEstate",
        REAL_ESTATE_BY_USER: "/realEstate/getByUser",
        REAL_ESTATE_SUBMIT: "/userSubmitRealEstate",
        REAL_ESTATE_UPDATE: "/userUpdateRealEstate",
        REAL_ESTATE_GET_BY_CATEGORY: "/realEstate/getByCategory/",
        REAL_ESTATE_GET_BY_HIGHLIGHT: "/realEstate/getByHighLight/",
        
        ADDRESS: {
            GET_PROVINCE: "/Address/getProvinces",
            GET_DISTRICT_BY_PROVINCE: "/Address/getDistrictsByProvinceCode/",
            GET_WARD_BY_DISTRICT: "/Address/getWardsByDistrictCode/",
        },
        NEWS: "/news",
        NEWS_GET_PAGED: "/news/getPaged",

        getProfile: "user/userProfile",
        updateProfile: "user/updateUserProfile",
        FORGOT_PASSWORD: "user/forgotPassword",
        CHANGE_PASSWORD: "user/changePassword",

    },

    /**
     * Request methods
     */
    Methods: {
        DELETE: "DELETE",
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
    },

    /**
     * Styles for app.
     *
     * Color refer
     * @see https://www.rapidtables.com/web/color/index.html
     * @see https://www.w3schools.com/w3css/w3css_colors.asp
     */
    Styles: {
        // =====================================================================
        // Common color
        // =====================================================================
        BLACK_COLOR: "#000000",
        BLUE_COLOR: "#0000FF",
        GRAY_COLOR: "#808080",
        GREEN_COLOR: "#008000",
        LIGHTGRAY_COLOR: "#D3D3D3",
        RED_COLOR: "#FF0000",
        WHITE_COLOR: "#FFFFFF",

        // New - Analysis - Processing - Processed - Cancelled - Close
        STATUS_COLOR: ["#27AE60", "#FEC600", "#24EBC7", "#00AFF0", "#D3D3D3", "#CED4DA"],

        // =====================================================================
        // Console log style
        // Color refer at: https://www.w3schools.com/w3css/w3css_colors.asp
        // =====================================================================
        CONSOLE_LOG_DONE_ERROR: "border: 2px solid #F44336; color: #000000", // Red
        CONSOLE_LOG_DONE_SUCCESS: "border: 2px solid #4CAF50; color: #000000", // Green
        CONSOLE_LOG_ERROR: "background: #F44336; color: #FFFFFF", // Red
        CONSOLE_LOG_NOTICE: "background: #FF9800; color: #000000; font-size: x-large", // Orange
        CONSOLE_LOG_PREPARE: "border: 2px solid #2196F3; color: #000000", // Blue
        CONSOLE_LOG_START: "background: #2196F3; color: #FFFFFF", // Blue
        CONSOLE_LOG_SUCCESS: "background: #4CAF50; color: #FFFFFF", // Green

        // =====================================================================
        // Common size
        // =====================================================================
        AVATAR_SIZE: "80px",
        DEFAULT_FONTSIZE: "16px",
        DEFAULT_SPACING: "24px",
    },

    /**
     * Regex Expression
     */
    RegExp: {
        EMAIL_ADDRESS: "^(([^<>()\\[\\]\\\\.,;:\\s@`]+(\\.[^<>()\\[\\]\\\\.,;:\\s@`]+)*)|(`.+`))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        ORGANIZATION_SHORTNAME: "^[A-Z0-9]{2,3}$",
        PASSWORD: "^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\\w!@#$%^&*]{8,}$",
        PHONE_NUMBER: "^\(?((0))\)?([1|3|5|7|8|9]{1})?([0-9]{8})$",
        USERNAME: "^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$",
    },

    /**
     * Storage keys
     */
    StorageKeys: {
        ACCESS_TOKEN: "ACCESS_TOKEN",
        USER: "USER",
        IS_AUTHENTICATED: "IS_AUTHENTICATED",
        DISPLAY_NAME: "DISPLAY_NAME",
        MENU_ITEM: "MENU_ITEM",
        MENU_INDEX: "MENU_INDEX",
        PRE_SCREEN: "PRE_SCREEN",
        APARTMENT_ID: "APARTMENT_ID",
        PROJECT_ID: "PROJECT_ID",
        GLOBAL_STATE: "GLOBAL_STATE",
        TOKEN: "TOKEN",
    },

    /**
     * Cookie keys
     */
    CookieNames: {
        LANGUAGE: "lang",
        SESSION_ID: "sessionId"
    },

    /**
     * Header name
     */
    HeaderNames: {
        DURATION: "X-Duration-Time"
    },

    /**
     * Event name using for DeviceEventEmitter
     */
    EventName: {
        ON_LOGOUT: "ON_LOGOUT"
    },

    /**
     * Environment
     */
    Environment: {
        DEV: "development" as TEnvironment,
        PRO: "production" as TEnvironment,
    },

    /**
     * Language
     */
    Language: {
        EN: "EN" as TLanguage,
        VN: "VN" as TLanguage,
        KR: "KR" as TLanguage,
        HK: "HK" as TLanguage,
        JA: "JA" as TLanguage,
    },

    /**
     * Debounce time for action
     */
    DEBOUNCE_TIME: 400,
    MAX_AVATAR_FILE_SIZE: 5 * 1024 * 1024, // 5MB

    ROW_PER_PAGE: 12,
    DefaultLanguage: "vi",

    DateFormat: {
        DDMMYYYY: "DD/MM/YYYY"
    },

    VALUE_KEY: {
        TITLE: "TITLE",
        ATTR_VALUE: "ATTR_VALUE",
        ATTR_VALUE_TITLE: "ATTR_VALUE_TITLE",
        ATTR_PHOTOS: "ATTR_PHOTOS"
    },
    DISPLAY_TYPE: {
        GENERAL: 1,
        INFO: 3,
        UTILITIES: 2,
        LOCATION: 4,
        INVESTMENT_OWNER: 5,
        DOCUMENT: 6,
        PREMISES: 7,
        LINK_360: 8,
        LINK_YOUTUBE: 9,
        LINK_PROJECT: 10,
    },
    TYPE:{
        HOUSE: '0',
        RESORT: '1',
        OFFICE: '2',
        URBAN_AREA: '3'
    },
    GOOGLE: {
        CLIENT_ID: "821697217175-qd87ptcinen79dd9mp8rjb87ngsu1erf.apps.googleusercontent.com"
    },

    FACEBOOK: {
        APP_ID: "262963035618905"
    },

    APARTMENT_HOUSE: "6384f89195da3df571238b58", //BĐS nhà Riếng
    APARTMENT_URBAN_AREA: "6382f20425c4bc3d490ae2a1", //BĐS Căn hộ chung cư
    REAL_ESTATE_LAND: "6382f22925c4bc3d490ae2b8", //BĐS Đất nền
    VILLAS: "6382f24425c4bc3d490ae2cb", //BĐS biệt thụ liền kề
};

export default Constants;

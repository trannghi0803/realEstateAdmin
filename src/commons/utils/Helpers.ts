import moment from "moment";
import swal from "@sweetalert/with-react";
import { Constants,  Screens, Strings } from "../../constants";
import { IOptionSelect,  IValueContent } from "./Interface";
import { CategoryTarget, CategoryType } from "../../constants/Enums";

/**
 * Helpers.ts
 *
 * Common function for app.
 */
const Helpers = {

    /**
     * Check value is string or non.
     *
     * @param {any} value: The value to be tested.
     * @returns {boolean} If data type is string true. Otherwise it returns false.
     */
    isString: (value: any): value is string => {
        return typeof value === "string";
    },

    /**
     * Check value is object or non.
     *
     * @param {any} value: The value to be tested.
     * @returns {boolean} If data type is object true. Otherwise it returns false.
     */
    isObject: (value: any): value is object => {
        return typeof value === "object";
    },

    /**
     * Determine if the argument passed is a JavaScript function object.
     *
     * @param {any} obj: Object to test whether or not it is an array.
     * @returns {boolean} returns a Boolean indicating whether the object is a JavaScript function
     */
    isFunction: (value: any): value is (...args: any) => void => {
        return typeof value === "function";
    },

    /**
     * Check a value is number or non, if number then return true, otherwise return false.
     *
     * @param {string} value: Value can check number
     * @returns {boolean} if number then return true, otherwise return false.
     */
    isNumber: (value: any): value is number => {
        return typeof value === "number";
    },

    /**
     * Check Object is null or String null or empty.
     *
     * @param {object | string} value Object or String
     * @returns {boolean} if null or empty return true, otherwise return false.
     */
    isNullOrEmpty: (value: any): value is undefined | boolean => {
        return value === undefined || value === null || value === "";
    },

    /**
     * Trim space character (start, end) of input string.
     *
     * @param {string} value: Value for trim
     * @returns {string} String after trim, space start & end is removed
     */
    trim: (value: string): string => {
        return Helpers.isString(value) ? value.trim() : "";
    },

    /**
     * If value is string return value, otherwise return value.toString
     *
     * @param {string} value: Value
     * @returns {string} String or convert of value to string
     */
    ensureString: (value: any): string => {
        try {
            if (!Helpers.isNullOrEmpty(value)) {
                if (Helpers.isString(value)) {
                    return value;
                } else if (Helpers.isObject(value)) {
                    return JSON.stringify(value);
                } else {
                    return `${value}`;
                }
            }
        } catch (error) {
            return "";
        }
        return "";
    },

    /**
     * Convert size in bytes to KB, MB, GB or TB
     *
     * @param {number} bytes: Size convert
     * @returns {string} Value formatted include unit.
     */
    bytesToSize: (bytes: number): string => {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (Helpers.isNullOrEmpty(bytes) || (bytes === 0)) {
            return "0 Byte";
        }
        const i = Math.floor(Math.floor(Math.log(bytes) / Math.log(1024)));
        return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
    },

    /**
     * Convert date to string with custom format.
     *
     * @param {number | Date} date Date or Timestamp
     * @param {string} format Format string output
     */
    dateToString: (date: number | Date | undefined, format: string): string => {
        if (Helpers.isNullOrEmpty(date)) {
            return "";
        } else if (Helpers.isNumber(date) && (`${date}`.length === 10)) {
            return moment.unix(date).format(format);
        } else {
            return moment(date).format(format);
        }
    },

    /**
     * Convert string to date.
     *
     * @param {string} dateString string
     */
    stringToDate: (dateString: string): Date => {
        return new Date(dateString);
    },

    /**
     * Convert date to unix time.
     *
     * @param {Date} date Date
     */
    dateToUnixTime: (date?: Date): number => {
        if (!Helpers.isNullOrEmpty(date)) {
            return moment(date).unix();
        }
        return 0;
    },

    /**
     * Get protocal from url.
     * e.g. URL is https://google.com, protocal output is [https:]
     *
     * @param {string} url URL
     * @returns {string} Protocal of URL, if not a URL return empty string
     */
    getProtocolFromURL: (url: string): string => {
        const urlTrim = Helpers.trim(url);
        const index = urlTrim.indexOf("//");
        if (index > -1) {
            return urlTrim.substring(0, index);
        }
        return "";
    },

    /**
     * Format numbers with leading zeros
     *
     * @param {number} num A number
     * @param {number} size Sring output length
     * @returns {string} String format with leading zero
     */
    zeroPad: (num: number, size: number): string => {
        let result = `${num}`;
        while (result.length < size) {
            result = "0" + result;
        }
        return result;
    },

    /**
     * Copy object properties to another object
     *
     * @param {any} sourceObj Object
     * @param {any} distObj Object
     */
    copyProperties: (sourceObj: any, distObj: any) => {
        for (const key in sourceObj) {
            if (!sourceObj.hasOwnProperty(key)) {
                continue;
            }
            const sourceObjData: any = sourceObj[key];
            if (!Helpers.isNullOrEmpty(sourceObjData)) {
                if (Array.isArray(sourceObjData)) {
                    const distObjData: any = [];
                    Helpers.copyProperties(sourceObjData, distObjData);
                    distObj[key] = distObjData;
                    continue;
                }
                if (Helpers.isObject(sourceObjData)) {
                    const distObjData: any = {};
                    Helpers.copyProperties(sourceObjData, distObjData);
                    distObj[key] = distObjData;
                    continue;
                }
            }
            distObj[key] = sourceObjData;
        }
    },

    /**
     * Clone object
     *
     * @param {T} sourceObj Object
     */
    cloneObject: <T>(sourceObj: T): T => {
        const cloneObj: T = {} as T;
        Helpers.copyProperties(sourceObj, cloneObj);
        return cloneObj;
    },

    /**
     * Get last date of month
     *
     * @param {number} month A number
     * @param {number} year A number
     */
    getLastDateOfMonth: (month: number, year: number): number => {
        const startOfMonth = moment([year, month - 1]);
        const lastOfMonth = moment(startOfMonth).endOf("month");
        return lastOfMonth.toDate().getDate();
    },

    /**
     * Show alert
     *
     * @param {string} message message for display
     * @param {"warning" | "success" | "error" | "info" | undefined} type type of alert
     */
    showAlert: async (message: string, type?: "warning" | "success" | "error" | "info", okCallback?: any) => {
        const msg = message;
        const okPress = await swal(msg, { icon: type });
        if (okPress && okCallback && Helpers.isFunction(okCallback)) {
            okCallback();
        }
    },

    /**
     * Show confirm alert
     *
     * @param {string} message message for display
     * @param {function} okCallback callback handle when click ok
     * @param {function} cancelCallback callback handle when click cancel
     */
    showConfirmAlert: async (message: string, okCallback: any, cancelCallback?: any, MesCancel?: string, MesOk?: string) => {
        const msg = message;
        const okPress = await swal(msg,
            {
                buttons: [MesCancel || Strings.Message.CANCEL, MesOk || Strings.Message.OK],
                icon: "warning",
            });
        if (okPress && okCallback && Helpers.isFunction(okCallback)) {
            okCallback();
        } else {
            if (cancelCallback && Helpers.isFunction(cancelCallback)) {
                cancelCallback();
            }
        }
    },

    handleNumberString: (numberValue: number) => {
        if (numberValue >= 1000000 && numberValue < 1000000000) {
            return (numberValue % 1000000) + ' ' + `${Strings.Common.MILLION}`
        }
        if (numberValue >= 1000000000) {
            return (numberValue / 1000000000) + ' ' + `${Strings.Common.BILLION}`
        }
        return numberValue.toLocaleString();
    },

    getTitle: () => {
        const screens = window.location.pathname;
        let title = "";
        switch (screens) {
            case Screens.ADMIN: {
                title = Strings.User.TITLE;
                break;
            }
            case Screens.SETTING: {
                title = Strings.Setting.TITLE;
                break;
            }
            case Screens.PROFILE: {
                title = Strings.ProfileInfo.TITLE;
                sessionStorage.removeItem(Constants.StorageKeys.MENU_INDEX);
                break;
            }
            case Screens.DEPARTMENT: {
                title = Strings.Department.TITLE;
                break;
            }
            case Screens.CREATE_DEPARTMENT: {
                title = Strings.Department.CREATE_TITLE;
                sessionStorage.removeItem(Constants.StorageKeys.MENU_INDEX);
                break;
            }
            case Screens.UPDATE_DEPARTMENT: {
                title = Strings.Department.UPDATE_TITLE;
                sessionStorage.removeItem(Constants.StorageKeys.MENU_INDEX);
                break;
            }
            case Screens.AUDIT_LIST: {
                title = Strings.AuditList.TITLE;
                break;
            }
            case Screens.CREATE_AUDIT: {
                title = Strings.Audit.CREATE_TITLE;
                sessionStorage.removeItem(Constants.StorageKeys.MENU_INDEX);
                break;
            }
            case Screens.UPDATE_AUDIT: {
                title = Strings.Audit.UPDATE_TITLE;
                sessionStorage.removeItem(Constants.StorageKeys.MENU_INDEX);
                break;
            }
        }
        return title;
    },

    formatCurrency: (money: string | number): string => {
        let format = '$1,';
        if (Strings.getLanguage() ===  'vi') {
            format = '$1.';
        }
        if (Helpers.isString(money)) {
            return money.replace(/(\d)(?=(\d{3})+(?!\d))/g, format);
        }
        return `${(+money).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, format)} đ`;
    },
    getAttributes: (attributes: any[], displayType: number): any => {
        if (attributes) {
            return attributes.find((attribute: any) => {
                return attribute.displayType === displayType;
            }) || {};
        }
        return {};
    },
    getSubAttributes: (subAttributes: any[], displayType: number): any => {
        if (subAttributes) {
            return subAttributes.find((subAttribute: any) => {
                return subAttribute.attributeDisplayType === displayType;
            }) || {};
        }
        return {};
    },
    // getImageById: (id: any): any => {
    //     if (id) {
    //         return `${Constants.Api.BASE_IMAGE_URL}${Constants.ApiPath.IMAGE.GET_IMAGE}/${id}`;
    //     }
    //     return Resources.Images.DEFAULT
    // },


    checkValidatePhone: (phone: string) => {
        if (!phone) { return true }
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,5})$/;
        return re.test(phone);
    },
    checkValidateEmail: (email: string) => {
        if (!email) { return true }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    checkPassword: (password: string) => {
        if (!password) { return true }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(password).toLowerCase());
    },
    sliceFirstName: (name: string) => {
        const index = name.indexOf(' ');
        if (index !== -1) {
            const firstName = name.slice(0, index);
            return firstName;
        }
        return name
    },

    sliceLastName: (name: string) => {
        const index = name.indexOf(' ');
        if (index !== -1) {
            const lastName = name.slice(index, name.length);
            return lastName;
        }
        return ''
    },
    getOptionTypeProject: () => {
        return [
            { value: `${CategoryType.HIGH_LIGHT}`, label: Strings.Home.PERSONAL_PROPERTY_HIGHTLIGHT },
            { value: `${CategoryType.VILLAS}`, label: Strings.Common.VILLAS },
            { value: `${CategoryType.APARTMENT_URBAN_AREA}`, label: Strings.Common.APARTMENT_URBAN_AREA },
            { value: `${CategoryType.APARTMENT_HOUSE}`, label: Strings.Common.PERSONAL_PROPERTY_HOUSE },
            { value: `${CategoryType.REAL_ESTATE_LAND}`, label: Strings.Common.LAND },
        ] as IOptionSelect[]
    },
    getOptionStatusProject: () => {
        return [
            { value: '0', label: Strings.Home.ABOUT_TO_ANNOUNCE },
            { value: '1', label: Strings.Home.OPEN_SALE },
            { value: '2', label: Strings.Home.ARE_ACTIVE },
        ] as IOptionSelect[]
    },
    getOptionLineProject: () => {
        return [
            { value: '1', label: "Cao cấp" },
            { value: '2', label: "Trung cấp" },
        ] as IOptionSelect[]
    },
    getOptionFloor: () => {
        return [
            { value: 1, label: 'Tầng 1' },
            { value: 2, label: 'Tầng 2' },
            { value: 3, label: 'Tầng 3' },
            { value: 4, label: 'Tầng 4' },
            { value: 5, label: 'Tầng 5' },
            { value: 6, label: 'Tầng 6' },
            { value: 7, label: 'Tầng 7' },
            { value: 8, label: 'Tầng 8' },
            { value: 9, label: 'Tầng 9' },
            { value: 10, label: 'Tầng 10' },
        ] as IOptionSelect[]
    },
    getProvince: () => {
        return [
            { value: '01', label: "Hà Nội" },
            { value: '48', label: "Đà Nẵng" },
            { value: '56', label: "Nha Trang" },
            { value: '79', label: "TP. Hồ Chí Minh" },
            { value: '91', label: "Phú Quốc" },
        ] as IOptionSelect[]
    },
    getTarget: () => {
        return [
            { value: `${CategoryTarget.Rent}`, label: Strings.Home.FOR_RENT },
            { value: `${CategoryTarget.Sell}`, label: Strings.Home.SALE },
        ] as IOptionSelect[]
    },
    getTypeNews: () => {
        return [
            { value: "0", label: "Thị trường" },
            { value: "1", label: "Sự kiện" },
            { value: "2", label: "Ưu đãi - Khuyến mãi" },
            { value: "3", label: "Tin công ty" },
        ]

    },
    getOptionOrientation: () => {
        return [
            { value: '0', label: Strings.Common.EAST },
            { value: '1', label: Strings.Common.WEST },
            { value: '2', label: Strings.Common.SOUTH },
            { value: '3', label: Strings.Common.NORTH },
            { value: '4', label: Strings.Common.EAST_NORTH },
            { value: '5', label: Strings.Common.WEST_NORTH },
            { value: '6', label: Strings.Common.EAST_SOUTH },
            { value: '7', label: Strings.Common.WEST_NORTH },
        ] as IOptionSelect[]
    },
    getCodeName: (options: string, id: any, list?: any[]) => {
        switch (options) {
            case 'type':
                const optionType = Helpers.getOptionTypeProject();
                const result = optionType.find(item => item.value.toString() === (Helpers.isNullOrEmpty(id) ? '' : id).toString());
                if (result) {
                    return result.label
                }
                return ''
            case 'status':
                const optionStatus = Helpers.getOptionStatusProject();
                const resultStatus = optionStatus.find(item => item.value.toString() === (Helpers.isNullOrEmpty(id) ? '' : id).toString());
                if (resultStatus) {
                    return resultStatus.label
                }
                return ''
            case 'line':
                const optionLine = Helpers.getOptionLineProject();
                const resultLine = optionLine.find(item => item.value.toString() === (Helpers.isNullOrEmpty(id) ? '' : id).toString());
                if (resultLine) {
                    return resultLine.label
                }
                return ''
            case 'target':
                const optionTarget = Helpers.getTarget();
                const resultarget = optionTarget.find(item => item.value.toString() === (Helpers.isNullOrEmpty(id) ? '' : id).toString());
                if (resultarget) {
                    return resultarget.label
                }
                return ''
            case 'province':
                const optionProvince = Helpers.getProvince();
                const resulProvincet = optionProvince.find(item => item.value.toString() === (Helpers.isNullOrEmpty(id) ? '' : id).toString());
                if (resulProvincet) {
                    return resulProvincet.label
                }
                return ''
            case 'typeNews':
                const optionTypeNews = Helpers.getTypeNews();
                const resultTypesNews = optionTypeNews.find(item => item.value.toString() === (Helpers.isNullOrEmpty(id) ? '' : id).toString());
                if (resultTypesNews) {
                    return resultTypesNews.label
                }
                return ''
            case 'orientation':
                const optionOrientation = Helpers.getOptionOrientation();
                const resultOrientation = optionOrientation.find(item => item.value.toString() === (Helpers.isNullOrEmpty(id) ? '' : id).toString());
                if (resultOrientation) {
                    return resultOrientation.label
                }
                return '';
        }
    },
    handleUnitArea: (value: number) => {
        if ((value / 10000) >= 1) {
            return `${(value / 10000)} ha`
        }
        return `${value} m²`

    },

    getName: (name?: string, nameContents?: IValueContent[]) =>{
        if(nameContents){
            if(!name){
                name = nameContents?.find(el=> el.language === Constants.Language.VN)?.value || ""
            }
        }
        return name || ""

    }
};

export default Helpers;

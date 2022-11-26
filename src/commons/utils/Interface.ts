import { IActionRequest } from "../../constants/Enums";

export interface IRequest {
}

export interface IResult {
    response: any;
    data: any;
}

export interface IError {
    code: string;
    message?: string;
    extras?: any;
}

export interface IMenuItem {
    id: string;
    tilte: string;
    iconName?: string;
    controller: string;
    action: string;
    subMenu?: IMenuItem[];
}

export enum MenuAction {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    GET = "GET",
    MANAGEMENT = "MANAGEMENT"
}

export interface IAudit {
    [key: string]: string | number | undefined;
    id: string;
    type: number;
    status: number;
    name: string;
    description?: string;
    startTime: number;
    endTime: number;
    qualified: number;
    score: number;
    createTime: number;
    createUser: string;
    updateTime: number;
    updateUser: string;
}

export interface IUser {
    access_token?: string;
    expires_at?: string;
    id_token: number;
    profile:{
        amr?: any;
        auth_time?: number;
        email?: string;
        email_verified?: boolean;
        idp?: string;
        name?: string;
        phone_number?: string;
        phone_number_verified?: string;
        preferred_username?: string;
        s_hash?: string;
        sid?: string;
        sub?: string;
        unique_name?: string;

    }
    scope?: string;
    session_state?: string;
    token_type?: string;
}
export interface IUserInfo {
    accessFailedCount?: number;
    avatarId?: any;
    concurrencyStamp?: string;
    email?: string;
    emailConfirmed?: boolean;
    fullName?: string;
    id?: string;
    lockoutEnabled?: boolean;
    lockoutEnd?: any;
    normalizedEmail?: any;
    normalizedUserName?: any;
    organizationId?: string;
    passwordHash?: any
    phoneNumber?: string;
    phoneNumberConfirmed?:  boolean;
    securityStamp?:string;
    twoFactorEnabled?: boolean;
    userName?: string;
    userRoles?: any;
    avatarUrl?: string;
}
export interface IInput {
    value?: any;
    error?: string;
    label?: any;
}
export interface IOptionSelect{
    value: any;
    label: string;
    icon?: any;
    attach?: any;
}
export interface ICities{
    code: string;
    name: any;
    name_with_type?: any;
    slug?: string;
    type?: string
}
export interface IInfoProfile{
    name: any;
    value: any;
    change: boolean;
}
export interface IInfoApm{
    icon: any;
    text: any;
}
export interface ILikeProject {
    idProject: Array<any>;
    quantity: number;
}
export interface IOptionStepper {
    label: string;
}

export interface IResponseBody {
    Version: string,
    StatusCode: number,
    Message: string,
    Result?: any,
    ResponseException?: {
        IsError: boolean,
        ExceptionMessage: string,
        Details: string,
        ReferenceErrorCode: any,
        ReferenceDocumentLink: any,
        ValidationErrors: any
    }
}
export interface IOrderDetail{
    bookingId?: string,
    contactId?: string,
    type?: number,
    customerContact?:{
        createTime?: number
        createUser?: string,
        email?: string,
        firstName?: string,
        id?: string,
        lastName?: string,
        phoneNumber?: string,
        status?: number
        type?: number
        updateTime?: number
        updateUser?: string,
    }
    description?: null,
    id?: string,
    orderTime?: number,
    organizationId?: string,
    payment?: {
        amount?: number,
        createTime?: number,
        createUser?: number,
        id?: string,
        jsonResponse?: number,
        orderId?: string,
        organizationId?: number,
        status?: number,
        updateTime?: number,
        updateUser?: number,
    }
    paymentStatus?: number,
    totalPrice?: number,
    details?:[
        {
            apartmentId?: string,
            createTime?: number,
            createUser?: number,
            id?: string,
            orderId?:  string,
            organizationId?:  string,
            price?: number,
            projectId?: string,
            status?: number,
            updateTime?: number,
            updateUser?: number,
        }
    ]   
}
export interface IValueContent {
    code?: string;
    id: string;
    language: string;
    value: string;
}
export interface IProject {
    apartment?: number;
    architect?: string;
    isHighlight?: number;
    attributes: {
        apartmentAttributes?: any;
        code?: string;
        displayType?: number;
        iconName?: string;
        id?: string;
        projectAttributes?: {
            attributeCode?: string;
            attributeDisplayType?: number;
            attributeIconName?: string;
            attributeId?: string;
            attributeTitle?: string;
            attributeType?: number;
            attributeValue?: string;
            attributeValueIconName?: string;
            attributeValueId?: string;
            attributeValueTitle?: string;
            id?: string;
            projectAttributePhotos?: {
                createTime?: number;
                createUser?: string;
                displayOrder?: number;
                id?: string;
                organizationId?: string;
                photoId?: string;
                projectAttributeId?: string;
                projectId?: string;
                status?: number;
                updateTime?: number;
                updateUser?: string;
                photoUrl?: string;
            }[];
            projectId?: string;
            status?: number
        }[];
        templateApartmentAttributes?: any;
        title?: string;
        titleContentCode?: string
        type?: number;
    }[];
    buildingDensity?: number;
    constructionArea?: number;
    constructionStatus?: number;
    constructor?: string;
    id?: string;
    launchDate?: number;
    maxPrice?: number;
    bookingPrice?: number;
    minPrice?: number;
    name?: string;
    nameContents?: IValueContent[];
    organizationId?: string;
    owner?: string;
    projectPhotos: {
        createTime?: number;
        createUser?: string;
        displayOrder?: number;
        id?: string;
        organizationId?: string;
        photoId?: string;
        projectId?: string;
        status?: string;
        updateTime?: number;
        photoUrl?: string;
        updateUser?: string;
    }[];
    projectZones: any;
    searchText?: string;
    siteArea?: number;
    status?: number;
    nameContentCode?: string;
    type?: number;
    addressId?: string;
    provinceCode?: string;
    latitude?: number;
    longitude?: number;
    provinceName?: string;
    villa?: number;
    hotel?: number;
    addressFull?: string;
    long?: number;
    width?: number;
    scale?: string;
}
export interface IApartment {
    apartmentPhotos?: {
        apartmentId?: string;
        createTime?: number;
        createUser?: string;
        displayOrder?: number;
        id?: string;
        organizationId?: string;
        photoId?: string;
        status?: string;
        updateTime?: string;
        photoUrl?: string;
        updateUser?: string;
    }[];
    area?: number;
    attributes: {
        apartmentAttributes?: {
            apartmentAttributePhotos?: {
                apartmentAttributeId?: string;
                apartmentId?: string;
                createTime?: number;
                createUser?: string;
                displayOrder?: number;
                id?: string;
                organizationId?: string;
                photoId?: string;
                status?: number;
                updateTime?: number;
                photoUrl?: string;
                updateUser?: string;
            }[];
            apartmentId?: string;
            attributeCode?: string;
            attributeDisplayType?: number;
            attributeIconName?: string;
            attributeId?: string;
            attributeTitle?: string;
            attributeType?: number;
            attributeValue?: string;
            attributeValueIconName?: string;
            attributeValueId?: string;
            attributeValueTitle?: string;
            id?: string;
            status?: number;
        }[];
        code?: string;
        displayType?: number;
        iconName?: string;
        id?: string;
        projectAttributes?: any;
        templateApartmentAttributes?: any;
        title?: string;
        type?: number;
    }[];
    depositPrice?: number;
    bathroom?: number;
    bedroom?: number;
    constructionStatus?: number;
    floor?: number;
    id: string;
    listPrice?: number;
    name?: string;
    nameContents?: IValueContent[];
    projectNameContents?: IValueContent[];
    organizationId?: string;
    orientation?: number;
    projectId: string;
    searchText?: string;
    status?: number;
    templateCode?: string;
    type?: number;
    projectName?: string;
    latitude?: any;
    longitude?: any;
    projectAttributes?: any;
    addressFull?: any;
    buildupArea?: number;
    carpetArea?: number;
    long?: number;
    width?: number;
    code?: string;
    isHighlight?: number;
}
export interface IFavorite {
    apartmentId?: string,
    createTime?: number,
    createUser?: string,
    id?: string,
    organizationId?:string,
    projectId?: string,
    status?: number
    updateTime?: number
    updateUser?: string,
    userId?: string,
}
export interface IResult{
    message: string;
    responseException?: any;
    result?: any;
    statusCode: number
    version: string
    isSuccess?: boolean
}
export interface ICart {
    name?: string;
    id?: string;
    img?: string;
    listPrice?: number;
    paymentPrice?: number;
    projectId?: string;
    projectName?: string;
}
export interface ICodename {
    id: string;
    group?: any;
    code?: string;
    name?: string;
    icon?: string; // using for option 
}
export interface IPost {
    id?: string,
    type?: number,
    title?: string,
    titleContentCode?: string,
    content?: any,
    contentCode?: any
    shortDescription?: string,
    shortDescriptionCode?: string,
    imageId?: any,
    searchText?: any,
    publishedTime?: any,
    titleContents?: any,
    contents?: any,
    shortDescriptionContents?: any,
    link?: any,
    document?: any
}
export interface IItemFavorite{
    apartment?: IApartment;
    apartmentId?: string;
    id?: string;
    organizationId?: string;
    project?: IProject;
    projectId?: string;
    userId?: string;
}
export interface IPhotoRequest{
    id?: string,
    photoId?: string;
    projectId?: string,
    attributeValueId?: string,
    base64Photo?: string,
    displayOrder?: number,
    action?: IActionRequest,
    fileType?: string
    photoUrl?: string;
}
export interface INews{
    content: string;
    contentCode?: string;
    contents?: any;
    abstract?: string;
    id?: string;
    imageId?:  string;
    imageUrl?:  string;
    publishedTime?: number;
    searchText?:  string;
    shortDescription?:  string;
    shortDescriptionCode?:  string;
    shortDescriptionContents?:any;
    title?: string;
    titleContentCode?:  string;
    titleContents?: any;
    type?: number
    fileUrl?: string
}

export interface IProjectAttribute {
    attributeCode?: string;
    attributeDisplayType?: number;
    attributeIconName?: string;
    attributeId?: string;
    attributeTitle?: string;
    attributeType?: number;
    attributeValue?: string;
    attributeValueIconName?: string;
    attributeValueId?: string;
    attributeValueTitle?: string;
    id?: string;
    projectAttributePhotos?: {
        createTime?: number;
        createUser?: string;
        displayOrder?: number;
        id?: string;
        organizationId?: string;
        photoId?: string;
        projectAttributeId?: string;
        projectId?: string;
        status?: number;
        updateTime?: number;
        updateUser?: string;
        photoUrl?: string;
    }[];
    projectId?: string;
    status?: number;
    attributeValueContents?:{
        code?: string;
        id: string;
        language: string;
        value: string;
        status?: number
    }[];

    attributeValueTitleContents?:{
        code?: string;
        id: string;
        language: string;
        value: string;
        status?: number
    }[];
}
export type TEnvironment = "development" | "production";
export type TLanguage = "en" | "vi";
export interface ISystem{
    id: string;
    setting: string;
    settingCode: any;
}
export interface IIntrodution{
    description?: string,
    descriptionContents?: IValueContent[],
    iconName?: any,
    id?: string,
    introductionPhotos?: {
        id?: string,
        photoUrl?: string
    }[],
    title?: string,
    titleContents?: IValueContent[],
    sequence?: number,
    type?: number
}
export interface ISearchCommone{
    id: string
    shortDescription: string
    title: string
    type: number
}
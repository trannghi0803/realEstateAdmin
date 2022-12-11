export enum ApartmentsDetail {
    ACREAGE = "acreage",
    BEDROOM = "bedroom",
    BATHROOM = "bathroom"
}
export enum TypeProperty {
    PROJECT = "project",
    APARTMENT = "apartment"
}
export enum MessageApi{
    SUCCESS = "Request successful."
}
export enum FieldSearch{
    PROJECT,
    TYPES,
    STATUS ,
    LINE,
    PROVICE,
    FLOOR,
    MAX ,
    MIN ,
    BED ,
    BATH ,
}
export enum IActionRequest {
    Create,
    Update,
    Delete
}
export enum PaymentStatus
{
    Pending,
    Success,
    Canceled,
    Rejected
}
export enum CodeSystem{
    EMAIL_CONFIG_SYSTEM_CODE = "00001",
    YOUTUBE_URL_SYSTEM_CODE = "00002",
    FACEBOOK_URL_SYSTEM_CODE = "00003",
    LINNKED_URL_SYSTEM_CODE = "00004",
    HOTLINE_INFO_SYSTEM_CODE = "00005",
    MESSENGER_INFO_SYSTEM_CODE = "00006"
}
export enum DisplayArea{
    HOME_DESTOP = "0",
    HOME_MOBILE = "1",
    POPUP = "2",
    ECOMEC = "3"
}

export enum TYPE_INTRO{
    BANNER = 0,
    ABOUT_US = 1,
    VISION_MISSION = 2,
    CORE_VALUES = 3,
    SUSTAINABLE_DEVELOPMENT_PHILOSOPHY = 4,
    CATEGORY_PROJECT = 5,
    LOGO = 6,
    ACHIEVEMENTS_AWARDS = 7
}
export enum TYPE_SEARCH{
    PROJECT = 0,
    APARTMENT = 1,
    NEWS = 2
}

export enum IsHighLight {
    False = 0,
    True = 1
}

export enum CategoryType {
    APARTMENT_HOUSE = 0,
    APARTMENT_URBAN_AREA = 1,
    REAL_ESTATE_LAND = 2,
    VILLAS = 3,
    HIGH_LIGHT = 4
}
export enum CategoryRentType {
    OFFICE = 0,
    URBAN_AREA = 1,
    HOUSE = 2,
    STORE = 3
}

export enum RealEstateType {
    Create = 1,
    Crawl = 2
}

export enum RealEstateStatus {
    Active = 1,
    Inactive = 0
}

export enum CategoryTarget {
    Sell = 0,
    Rent = 1
}


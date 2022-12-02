import { IApartment,  ICodename,  IInput, IItemFavorite, IOptionSelect, IPhotoRequest, IProject, IUser, IUserInfo } from "../../commons/utils/Interface";
import { Strings } from "../../constants";
import BaseModel from "./BaseModel";

interface IAddress {
    provinceName?: string;
    districtName?: string;
    wardName?: string;
    provinceCode?: string;
    districtCode?: string;
    wardCode?: string;
    addressLine?: string;
}
class ProfileModel extends BaseModel {
    
    titleMenu?: string = Strings.Profile.MY_ACCOUNT
    userInfo?: IUserInfo;
    listRealEstateActive?: any[];
    listRealEstateInactive?: any[];

    avatarId?: any;

    userName?: IInput;
    email?: IInput;
    phoneNumber?: IInput;
    avatar?: string

    imgUrl?: any;
    orderDetail?: Array<any>;
    keyIndex?: number = 0;

    //submit real_estate
    public id?: string;
    public title?: IInput;
    public price?: IInput;
    public area?: IInput;
    public description?: string;
    public attributes?: IInput;
    public images?: any[] = [];
    public category?: IInput;
    public type?: number;
    public isHighLight?: number;

    public isLoadingImages?: boolean;

    public categoryList?: any[] = [];
    public realEstateList?: any[] = [];
    public provinceList?: ICodename[];
    public districtList?: ICodename[];
    public wardList?: ICodename[];
    public address?: IAddress;

    //changePassword
    password?: IInput;
    newPassword?: IInput;
    newPasswordConfirm?: IInput;
}

export default ProfileModel;
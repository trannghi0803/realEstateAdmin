import { IApartment,  IInput, IItemFavorite, IOptionSelect, IPhotoRequest, IProject, IUser, IUserInfo } from "../../commons/utils/Interface";
import { Strings } from "../../constants";
import BaseModel from "./BaseModel";

class ProfileModel extends BaseModel {
    infoList?: any[] = [
        {
            key: Strings.Profile.FULLNAME,
            value: "Nguyễn Văn A"
        },
        {
            key: Strings.Profile.PHONE_NUMBER,
            value: "0905 222 333"
        },
        {
            key: "Hình thức",
            value: "Chuyển khoản"
        },
        {
            key: "Giao dịch vào",
            value: "CN, 20 thg 2 2021"
        },
        {
            key: Strings.Common.STATUS,
            status: "waitingApprove",
        },
    ]
    menuApartment?: Array<any> 
    parameterDetail?: Array<any>
    menuActiveIndex?: number = 0
    valueWatch?: string = '1'
    menuStatusOrder?: Array<any>
    optionWatch?:  IOptionSelect[] = [
        {value: '0', label : Strings.Profile.MY_ACCOUNT},
        {value: '1', label: Strings.Profile.MY_ORDER},
    ];
    title?: string = Strings.Profile.MY_ACCOUNT
    userInfo?: IUserInfo;
    listApartmentFavorite?: IItemFavorite[];
    listProjectFavorite?: IItemFavorite[];
    // input
    selectedOption?: IInput = {value: '0'};
    avatarId?: any;
    userName?: IInput;
    imgUrl?: any;
    orderDetail?: Array<any>;
    keyIndex?: number = 0;
}

export default ProfileModel;
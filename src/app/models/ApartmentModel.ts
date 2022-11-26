import { IApartment, IOptionSelect, ICart, IInput } from "../../commons/utils";
import { Strings } from "../../constants";
import BaseModel from "./BaseModel";

class ApartmentModel extends BaseModel {
    id?: string;
    projectId?: string;
    public headerTable?: string[] = [Strings.Aparment.PERIOD_MONTH, Strings.Aparment.INTEREST_PAYABLE, Strings.Aparment.PRINCIPAL_PAYABLE, Strings.Aparment.MONEY_HAVE_TO_PAY, Strings.Aparment.THE_REMAINING_AMOUNT];
    public dataTable?: any[];
    public pageTable?: number;
    apartments?: IApartment[];
    apartment?: IApartment;
    showProductCart?: boolean;
    public optionBank?:  IOptionSelect[];
    bankSelected?:  IOptionSelect;
    isHide?: boolean;
    isFixed?: boolean = true;
    price?: number = 2300000000;
    percent?: number = 50;
    term?: number = 15;
    showModalLoan?: boolean = false;
    showResult?: boolean = false;
    showProperty?: boolean = false;
    showButtonBuyHeader?: boolean = false;
    idScroll?: string;
    banksOptions?: IOptionSelect[] = [
        {
            label: Strings.BankCode[10],
            value: Strings.BankCode[10],
        },
        {
            label: Strings.BankCode[23],
            value: Strings.BankCode[23],
        },
        {
            label: Strings.BankCode[36],
            value: Strings.BankCode[36],
        },
        {
            label: Strings.BankCode[25],
            value: Strings.BankCode[25],
        }
    ]
    interestRateSelected?: string = "7";
    interestRateOptions?: IOptionSelect[] = [
        {
            label: "1%",
            value: "1",
        },
        {
            label: "2%",
            value: "2",
        },
        {
            label: "3%",
            value: "3",
        },
        {
            label: "4%",
            value: "4",
        },
        {
            label: "5%",
            value: "5",
        },
        {
            label: "6%",
            value: "6",
        },
        {
            label: "7%",
            value: "7",
        },
        {
            label: "8%",
            value: "8",
        },
        {
            label: "9%",
            value: "9",
        },
        {
            label: "10%",
            value: "10",
        },
    ]
    shopingCart?: ICart[];

    fullName?: IInput;
    email?: IInput;
    phoneNumber?: IInput;
    description?: IInput;
    showModelVideo?: boolean
    isView?: boolean;
    isShowViewImg?: boolean = false
    urlImg?: any
    keyIndex?: number = 0;
    menuIndex?: number;
    listImg?: Array<any> = [];
    imageNumber?: number;
}

export default ApartmentModel;
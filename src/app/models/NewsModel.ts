import { INews } from "../../commons/utils";
import BaseModel from "./BaseModel";

class SplashScreenModel extends BaseModel {
    category?: number = 0;
    listNews?: Array<any>;
    menuIndex?: number = 0;
    showModalVideo?: boolean = false;
    linkNews?: string;
    page?: number = 1;
    newDetail?: any;
    totalNews?: number;
    relatedPosts?: any[];
    typeNews?: number;
    file?: string;
    fileType?: string;
}

export default SplashScreenModel;
import { IApartment, IOptionSelect, IProject } from "../../commons/utils/Interface";
import BaseModel from "./BaseModel";

class HomeModel extends BaseModel {
    listItemHighLight?: any[];
    projectItem?: any;;


    menuApartment?: string[];
    menuIndex?: number = -1;
    valuetext?: any
    valueLocation?: any;
    setProcess?: boolean = false;
    isIntro?: boolean = false;
    currentIndex?: number = 0;
    ref?: any;
    projectIdSearch?: string;
    bannerHome?: Array<any>;
    play?: boolean
}

export default HomeModel;
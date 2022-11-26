import { IApartment, IFavorite, IInput, IProject } from "../../commons/utils";
import BaseModel from "./BaseModel";

class ProjectModel extends BaseModel {
    id?: string;
    readMore?: boolean = true;
    apartments?: IApartment[];
    project?: IProject = {} as IProject;
    projects?: IProject[];
    showProperty?: boolean = false;
    showButtonDepositHeader?: boolean = false;
    showModelVideo?: boolean = false;
    // input
    fullName?: IInput
    email?: IInput;
    phoneNumber?: IInput;
    description?: IInput;
    isView?: boolean;
    keyIndex?: number = 0;
    isShowViewImg?: boolean;
    urlImg?: string;
    menuIndex?: number
    scale?: any;
    listImg?: Array<any> = [];
    imageNumber?: number;
    /* listUImg?: Array<any> = []; */
}

export default ProjectModel;
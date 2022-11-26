import { IApartment, IInput, IOptionSelect, IProject } from "../../commons/utils/Interface";
import BaseModel from "./BaseModel";

class ListingModel extends BaseModel {
    searchUrl?: string;
    menuApartment?: Array<any> 
    parameterDetail?: Array<any>
    menuIndex?: number = 0
    menuProject?: Array<any>
    feeBooked ?: number[]
    valuetext?: any
    partner?: Array<any>
    listProjectOptions?: IOptionSelect[]
    listCitiesOptions?: IOptionSelect[]
    floorOptions?: IOptionSelect[]
    valueCheckedProject?: any;
    valueLocation?: any;
    openModal?: boolean;
    listApartment?: IApartment[];
    projects?: any[] = [];
   
    onScrollBottom?: boolean = false;
    showModelSearch?: boolean = false;
    showApartment ?: boolean = false;
    listProject?: IProject[];

    //input
    types?: IInput;
    status?: IInput;
    province?: IInput;
    line?: IInput;
    searchText?: string;
    target?: IInput;

    floorSearch?: IInput;
    projectIdSearch?: IInput;
    bedroomSearch?: IInput;
    bathroomSearch?: IInput;

    minPrice?: number;
    maxPrice?: number;
    minArea?: number;
    maxArea?: number;

    renderKey?: number = 0;

    currentProject?: IProject;
    currentApartment?: IApartment;
    expand?: boolean;
    showMap?: boolean = true;


    districtName?: string;
    districtId?: string;

    currentPage?: number = 0;
    totalPages?: number = 0;
    totalCount?: number = 0;
}

export default ListingModel;
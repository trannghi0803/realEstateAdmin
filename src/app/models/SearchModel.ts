import { ISearchCommone } from "../../commons/utils/Interface";
import BaseModel from "./BaseModel";

class SearchModel extends BaseModel {
    searchUrl?: string;
    keyword?: string;
    listData?: ISearchCommone[] = [];
    menuIndex?: number = -1;
    numberShow?: number = 5
}

export default SearchModel;
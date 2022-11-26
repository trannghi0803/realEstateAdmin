import { IApartment, IProject } from "../../commons/utils";
import BaseModel from "./BaseModel";

class CommerceModel extends BaseModel {
   public listProject?: IProject[];
   public listApartmentHightLight?: IApartment[];
   public listApartmentResort?: IApartment[];
   public listApartmentHouse?: any[];
   public listApartmentUrbanArea?: IApartment[];
   public listApartmentOffice?: IApartment[];
   bannerImages?: Array<any> ;
   type?: string;
}

export default CommerceModel;
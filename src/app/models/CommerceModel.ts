import { IApartment, IProject } from "../../commons/utils";
import BaseModel from "./BaseModel";

class CommerceModel extends BaseModel {
   public listApartmentHightLight?: any[];
   public listApartmentLand?: any[];
   public listApartmentHouse?: any[];
   public listApartmentUrbanArea?: any[];
   public listApartmentVillas?: any[];
   bannerImages?: Array<any> ;
   type?: string;
}

export default CommerceModel;
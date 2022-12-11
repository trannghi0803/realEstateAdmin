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

   //rent
   public listRentHouse?: any[];
   public listRentOffice?: any[];
   public listRentUrbanArea?: any[];
   public listRentStore?: any[];
}

export default CommerceModel;
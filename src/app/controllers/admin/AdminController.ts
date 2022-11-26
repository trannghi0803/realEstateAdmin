import AdminModel from "../../models/AdminModel";
import { AdminService } from "../../services";
import { BaseController } from "../base";

class AdminController extends BaseController<AdminModel, AdminService> {

    constructor(props: any) {
        super(props, AdminModel, AdminService);
    }

}
export default AdminController;
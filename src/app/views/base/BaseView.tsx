import React from "react";
import { onSnapshot } from "mobx-state-tree";
import { Helpers, ISystem } from "../../../commons/utils";
import { GlobalState, ModelStorage } from "../../../stores/GlobalState";
import { History } from "history";
import { BaseController } from "../../controllers/base";
import { EventEmitter } from "events";
import { ControlLoading, Header } from "../../../components";
import Aos from "aos";
import ScrollToTop from "../../../components/ScrollToTop";
import CustomModal from "../../../components/CustomModal";
import { Constants, Resources, Strings } from "../../../constants";
import FormLogin from "../../../components/FormLogin";
import Footer from "../../../components/Footer";
import FormRegister from "../../../components/FormRegister";
import Cookies from 'universal-cookie';
import BaseService from "../../services/BaseService";
import { CodeSystem } from "../../../constants/Enums";
interface IProps {
    // history?: History;
}
interface IStateProps {

}
class BaseView<TController extends BaseController<{}, {}>, TModel, TService> extends React.Component<IProps, IStateProps> {

    public readonly className: string;
    public readonly controller: TController;
    public readonly model: TModel;
    public readonly service: TService;
    public readonly history: History;
    public readonly eventEmitter: EventEmitter;

    private mounted?: boolean;
    

    constructor(props: any, controllerClass: any, modelClass: any, serviceClass: any) {
        super(props);
        this.className = this.constructor.name;
        this.model = new modelClass();
        this.service = new serviceClass(this.model);
        this.controller = new controllerClass(props, this.model, this.service);
        this.eventEmitter = __EventEmitter as EventEmitter;
        this.history = props.history as History;
        this.controller.historys(props.history);
        // Copy passProps to model
        Helpers.copyProperties(props.location.state, this.model);
        this.state = this.model;
        this.mounted = true;
        Aos.init();
        onSnapshot(ModelStorage, () => {
            this.mounted && this.setModel(ModelStorage.model);
        });
    }

    public goBack() {
        this.history.go(-1);
    }

    public componentWillMount() {
        this.controller.onBefore();
    }

    public async componentDidMount() {
        const cookies = new Cookies();
        GlobalState.setModalLogin(false);
        GlobalState.setModalRegister(false);
        GlobalState.setLanguage(GlobalState.language || Constants.Language.VN);
        // if(!GlobalState.contacts){
        //     const contacts = new BaseService().SystemSettingGetAll();
        //     Promise.all([contacts]).then((data) => {
        //         if(data[0]){
        //             GlobalState.setContacts(data[0])
        //         }
        //     })
        // }
        if(!GlobalState.user && cookies.get(Constants.StorageKeys.TOKEN)){
            GlobalState.setUser(cookies.get(Constants.StorageKeys.TOKEN));
        }
        this.controller.onStarted();
    }

    public componentDidUpdate() {
        this.controller.onUpdate();
    }
    
    public componentWillUnmount() {
        this.mounted = false;
        this.controller.onStop();
    }
    
    public getUrlParams = (keys: string[]): any => {
        const params = new URLSearchParams(window.location.search);
        let datas: { [key: string]: string | undefined } = {};
        keys.forEach((key) => {
            datas[key] = params.get(key) || ""
        });
        return datas;
    }
    /**
     * Update new data to model object
     *
     * @param {object} model Model data
     * @param {function} callback Updated callback function
     */
    public setModel = (model: TModel, callback?: (changed: boolean) => void) => {
        let isUpdate: boolean = false;
        if (!Helpers.isNullOrEmpty(model)) {
            for (const key in model) {
                if (this.model[key] !== model[key]) {
                    this.model[key] = model[key];
                    isUpdate = true;
                }
            }
            if (isUpdate) {
                this.controller.updateModel(model);
                this.setState(this.model, () => {
                    if (Helpers.isFunction(callback)) {
                        callback(isUpdate);
                    }
                });
                return;
            }
        }
        if (!isUpdate && Helpers.isFunction(callback)) {
            callback(isUpdate);
        }
    }
    public animation = (text: any, classText?: string) => {
        let content: any[] = [];
        let container: any[] = [];
        const strCopy = text.split(' ');
        let a = 0;
        for (let item of strCopy) {
            for (let i = 0; i < item.length; i++) {
                a++;
                content.push(
                    <span className={classText} data-aos="flip-left" data-aos-duration="1500" data-aos-delay={a * 50} data-aos-once={true}>
                        {item[i]}
                    </span>
                )
            }
            container.push(
                <div className="d-flex">
                    {content}
                </div>
            )
            container.push(
                <div className="d-flex">
                    &nbsp;
                </div>
            )
            content = [];
        }
        return <div className="flex-wrap d-flex">
            {container}
        </div>
    }

    public renderPage() {
        return <div ></div>;
    }
    public renderModelLogin() {
        return (
            <>
                <CustomModal sizeModal="small" show={GlobalState.isOpenModalLogin || false} onClose={(value) => GlobalState.setModalLogin(value)} header={"Phu Long Smile Living"}>
                    <FormLogin onCreateSuccess={(value)=>GlobalState.setModalLogin(value) }/>
                </CustomModal>
                <CustomModal sizeModal="medium" show={GlobalState.isOpenModalRegister || false} onClose={(value) => GlobalState.setModalRegister(value)} header={Strings.Home.REGISTER}>
                    <FormRegister onCreateSuccess={(value)=>GlobalState.setModalRegister(value) } />
                </CustomModal>
            </>

        )
    }
    public render() {
        return (
            <div className={`${GlobalState.isShowLoading ? 'pointer-events-none' : ''} h-100 w-100`}>
                <Header />
                <div className="wrap-body">
                    {this.renderPage()}
                </div>
                <ScrollToTop />
                <ControlLoading visible={GlobalState.isShowLoading} />
                {this.renderModelLogin()}
              
                <Footer />
            </div>
        );
    }
}

export default BaseView;

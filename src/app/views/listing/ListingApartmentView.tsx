import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import "../../../commons/styles/ListingStyles.css";
import ListingModel from "../../models/ListingModel";
import ListingService from "../../services/ListingService";
import { Screens, Strings } from "../../../constants";
import { Grid } from "@material-ui/core";
import {
    CardApartment,
    Container,
} from "../../../components";
import Helpers from "../../../commons/utils/Helpers";
import CloseIcon from "@material-ui/icons/Close";
import ListingApartmentController from "../../controllers/listing/ListingApartmentController";
import { IApartment } from "../../../commons/utils";
import { Pagination } from "@material-ui/lab";
import { GlobalState } from "../../../stores/GlobalState";

@observer
export default class ListingApartmentView extends BaseView<ListingApartmentController, ListingModel, ListingService> {
    constructor(props: any) {
        super(
            props,
            ListingApartmentController,
            ListingModel,
            ListingService
        );
    }

    public renderPage() {
        const listApartment = this.model.listApartment || [];
        console.log("first", GlobalState.categoryList)
        return (
            <Container>
                <Grid className="container-e-comercio">
                    <Grid className="frame-item-left">
                        <Grid className="title-show-item">
                            <span>{Strings.Listing.SHOW} &nbsp;</span>
                            <span className="font-weight-bold">
                                {((this.model.currentPage || 1) - 1) * 10} -&nbsp;
                                {(this.model.listApartment || [])?.length + ((this.model.currentPage || 1) - 1) * 10} {Strings.Listing.AMONG} {this.model.totalCount} {Strings.Listing.APARTMENT}
                            </span>
                        </Grid>
                        {/* HashTag */}
                        <Grid className="menu-find-apartment">
                            {this.model.target?.value
                                ?
                                <Grid className="project-item">
                                    <span className="project-item-name">
                                        {Helpers.getCodeName('target', this.model.target?.value)}
                                        {/* {GlobalState.categoryList?.find((c: any) => c.value === this.model.target?.value)?.label} */}
                                    </span>
                                    <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(0)} />
                                </Grid>
                                : null
                            }
                            {/* {this.model.projectIdSearch?.value ? (
                                    <Grid className="project-item">
                                        <span className="project-item-name">
                                            {this.model.projectIdSearch.label}
                                        </span>
                                        <CloseIcon
                                            className="cursor-pointer"
                                            onClick={() => this.controller.removeAttributes(1)}
                                        />
                                    </Grid>
                                ) : (
                                    ""
                                )} */}
                            {this.model.province?.value
                                ?
                                <Grid className="project-item">
                                    <span className="project-item-name">
                                        {GlobalState.listProvinceList?.find((el: any) => el.value === GlobalState.filterObj?.province)?.label}
                                    </span>
                                    {this.model.districtName ?
                                        <span className="project-item-name">
                                            / {this.model.districtName}
                                        </span>
                                        : null}
                                    <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(2)} />
                                </Grid>
                                : null
                            }
                            {this.model.types?.value
                                ?
                                <Grid className="d-flex flex-wrap">
                                    <Grid className="project-item">
                                        <span className="project-item-name">
                                            {/* {Helpers.getCodeName('type', this.model.types.value)} */}
                                            {GlobalState.categoryList?.find((c: any) => `${c.value}` === `${this.model.types?.value}`)?.label}
                                        </span>
                                        <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(3)} />
                                    </Grid>
                                </Grid>
                                : null
                            }
                            {this.model.status?.value
                                ?
                                <Grid className="project-item">
                                    <span className="project-item-name">
                                        {Helpers.getCodeName('status', this.model.status.value)}
                                    </span>
                                    <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(4)} />
                                </Grid>
                                : null
                            }
                            {this.model.maxPrice && this.model.minPrice ?
                                <Grid className="project-item">
                                    <span className="project-item-name">
                                        {Strings.Listing.PRICE_RANGR}:&nbsp;
                                        {this.model.minPrice / 1000000000} {Strings.Common.BILLION} -&nbsp;
                                        {this.model.maxPrice / 1000000000} {Strings.Common.BILLION}
                                    </span>
                                    <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(5)} />
                                </Grid>
                                : ''}
                            {this.model.minArea && this.model.maxArea ?
                                <Grid className="project-item">
                                    <span className="project-item-name">
                                        {Strings.Listing.AREA}:&nbsp;
                                        {this.model.minArea}{Strings.Common.SQUARE_METTER} -&nbsp;
                                        {this.model.maxArea}{Strings.Common.SQUARE_METTER}
                                    </span>
                                    <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(6)} />
                                </Grid>
                                : ''}
                        </Grid>
                        {/* Item */}
                        <Grid className="item-project-list" id="frameItem">
                            {this.model.listApartment?.map((apartment, index) => {
                                return (
                                    <Grid
                                        className="d-flex justify-content-center m-3"
                                        key={apartment._id}
                                    >
                                        <CardApartment
                                            onClick={() => this.history.push({ pathname: Screens.APARTMENT, search: `?&id=${apartment._id}` })}
                                            onClickLike={() => { }}
                                            apartment={apartment}
                                            voucherName={Strings.Common.VOUCHER_NAME}
                                            remainDate={2}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                        {(this.model.listApartment || [])?.length > 0 ?
                            <Grid className="w-100 wrap-pagination">
                                <Pagination className="custom-pagination" count={this.model.totalPages} page={this.model.currentPage} onChange={this.controller.handleChangePagination} />
                            </Grid> :
                            <Grid className="w-100 wrap-pagination">
                                Không có dữ liệu
                            </Grid>
                        }
                    </Grid>
                </Grid>
                {/* Model Search */}
            </Container>
        );
    }
}

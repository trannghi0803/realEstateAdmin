import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import "../../../commons/styles/ListingStyles.css"
import { ListingProjectController } from "../../controllers/listing";
import ListingModel from "../../models/ListingModel";
import ListingService from "../../services/ListingService";
import { Resources, Screens, Strings } from "../../../constants";
import { Grid } from "@material-ui/core";
import {  Container, ControlButton } from "../../../components";
import Helpers from "../../../commons/utils/Helpers";
import CloseIcon from '@material-ui/icons/Close';
import CustomModal from "../../../components/CustomModal";
import SelectCheckbox from "../../../components/SelectIcon";
import CardProject from "../../../components/CardProject";
import { IProject } from "../../../commons/utils";
import ControlAutocomplete from "../../../components/ControlAutocomplete";
import Pagination from "@material-ui/lab/Pagination";
@observer

export default class ListingProjectView extends BaseView<
ListingProjectController,
ListingModel,
ListingService
> {
    constructor(props: any) {
        super(props, ListingProjectController, ListingModel, ListingService);
    }
    public renderPage() {
        const optionStatusProject = Helpers.getOptionStatusProject();
        const optionLineProject = Helpers.getOptionLineProject();
        const optionTypeProject = Helpers.getOptionTypeProject();
        const listProject: IProject[] = this.model.listProject || [];
      
        return (
            <Container>
                {/* <HomeHeader /> */}
                {/* Screen web */}
                <Grid className="container-e-comercio">
                    <Grid className="frame-item-left">
                        <Grid className="title-show-item d-flex justify-content-between">
                            <Grid>
                                {Strings.Listing.SHOW}&nbsp;
                                <span className="font-weight-bold">
                                    {((this.model.currentPage  || 1 ) - 1) * 10} -&nbsp;
                                    {listProject?.length + ((this.model.currentPage  || 1 ) - 1) * 10} {Strings.Listing.AMONG} {this.model.totalCount} {Strings.Listing.PROJECT}
                                </span>
                            </Grid>
                        </Grid>
                        {/* HashTag */}
                        <Grid className="menu-find-apartment" >
                            {this.model.target?.value
                                ?
                                <Grid className="project-item">
                                    <span className="project-item-name">
                                        {Helpers.getCodeName('target', this.model.target?.value)}
                                    </span>
                                    <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(0)} />
                                </Grid>
                                : null
                            }
                            {this.model.province?.value
                                ?
                                <Grid className="project-item">
                                    <span className="project-item-name">
                                        {Helpers.getCodeName('province', this.model.province?.value)}
                                    </span>
                                    {this.model.districtName ?
                                        <span className="project-item-name">
                                            / {this.model.districtName}
                                        </span>
                                    : null}
                                   
                                    <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(1)} />
                                </Grid>
                                : null
                            }
                            {this.model.types?.value
                                ?
                                <Grid className="d-flex flex-wrap">
                                    <Grid className="project-item">
                                        <span className="project-item-name">
                                            {Helpers.getCodeName('type', this.model.types?.value)}
                                        </span>
                                        <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(2, this.model.types?.value)} />
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
                                    <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(3)} />
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
                                <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(4)} />
                            </Grid>
                            : ''}
                            {this.model.minArea && this.model.maxArea ? 
                             <Grid className="project-item">
                                <span className="project-item-name">
                                    {Strings.Listing.AREA}:&nbsp;
                                    {this.model.minArea}{Strings.Common.SQUARE_METTER} -&nbsp;
                                    {this.model.maxArea}{Strings.Common.SQUARE_METTER}
                                </span>
                                <CloseIcon className="cursor-pointer" onClick={() => this.controller.removeAttributes(5)} />
                            </Grid>
                            : ''}
                        </Grid>
                        {/* Item */}
                            <Grid className="item-project-list" id="frameItem">
                            {listProject?.map((project: IProject, index: number) => {
                                const projectPhotos: any[] = project.projectPhotos || [];
                                return (
                                    <Grid key={`${project.id} ${index}`} className="d-flex justify-content-center m-3">
                                        <CardProject
                                            maxPrice={project.maxPrice || 0}
                                            minPrice={project.minPrice || 0}
                                            imageProject={projectPhotos[0]?.photoUrl || Resources.Images.DEFAULT}
                                            nameProject={Helpers.getName(project.name, project.nameContents)}
                                            typeProject={project.type}
                                            id={project.id || ''}
                                            onClick={() => this.history.push({ pathname: Screens.PROJECT, search: `?&id=${project.id}` })}
                                            onClickLike={() => {}}
                                            status={project.constructionStatus}
                                            isHighlight={project.isHighlight}
                                            addressFull= {project.addressFull}
                                            scale={project?.scale}

                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                        {listProject.length > 0 ?
                            <Grid className="w-100 wrap-pagination">
                                <Pagination className="custom-pagination" count={this.model.totalPages} page={this.model.currentPage} onChange={this.controller.handleChangePagination}/>
                            </Grid> : ''
                        }
                        {/* Map */}
                    </Grid>
                </Grid>
                {/* modal */}
                <CustomModal sizeModal="medium" show={this.model.showModelSearch || false} onClose={(value) => { this.setModel({ showModelSearch: value }) }} header={Strings.Common.FIND}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <ControlAutocomplete
                                Icon={Resources.Icon.GREEN_MAP}
                                label={Strings.Home.PROVINCE_CT}
                                onChangeValue={(value) => {
                                    this.setModel({
                                        province: { value }
                                    })
                                }}
                                data={this.model.listCitiesOptions || []}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ControlAutocomplete
                                multiple
                                Icon={Resources.Icon.HOME_GREEN}
                                label={Strings.Home.TYPE_PERSONAL_PROPERTY}
                                onChangeValue={(value) => this.setModel({
                                    types: { value }
                                })}
                                data={optionTypeProject || []}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <SelectCheckbox
                                onChangeValue={(value) => this.setModel({ status: { value } })}
                                variant="filled"
                                Icon={Resources.Icon.LEFT_GREEN}
                                placeholder={Strings.Home.STATUS_PROJECT}
                                options={optionStatusProject || []}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <SelectCheckbox
                                onChangeValue={(value) => this.setModel({ line: { value } })}
                                variant="filled"
                                Icon={Resources.Icon.GRID_GREEN}
                                placeholder={Strings.Home.PRODUCT_LINE}
                                options={optionLineProject || []}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ControlButton
                                classButton=""
                                text={Strings.Common.FIND}
                                image={Resources.Icon.SEARCH}
                                onClick={this.controller.getProject}
                            />
                        </Grid>
                    </Grid>
                </CustomModal>
            </Container>
        );
    }
}

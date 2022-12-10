import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import "../../../commons/styles/ProfileStyles.css";
import {
	ControlButton,
	Container,
	ProductItem,
	Separator,
	Text,
	ControlInput,
	ControlHtmlInput,
	ControlImageGridList,
} from "../../../components";
import "../../../components/ComponentStyles.css";
import { ProfileController, SubmitRealEstateController } from "../../controllers/profile";
import ProfileModel from "../../models/ProfileModel";
import ProfileService from "../../services/ProfileService";
import { Avatar, Button, Grid, Link, Typography } from "@material-ui/core";
import { Resources, Screens, Strings } from "../../../constants";
import ControlSelect from "../../../components/ControlSelect";
import Inputs from "../../../components/Inputs";
import { ArrowBack, Save } from "@material-ui/icons";
import CtrlAutocomplete from "../../../components/CtrlAutocomplete";
import ControlCheckbox from "../../../components/ControlCheckbox";
import { IsHighLight } from "../../../constants/Enums";
@observer
export default class SubmitRealEstateView extends BaseView<
SubmitRealEstateController,
ProfileModel,
ProfileService
> {
	constructor(props: any) {
		super(props, SubmitRealEstateController, ProfileModel, ProfileService);
	}

	renderPhotos() {
		var photos: Array<any> = [];
		let isLoading;

		photos = this.model.images || [];

		return (
			<div>
				<input
					multiple
					type="file"
					accept="image/png, image/gif, image/jpeg"
					style={{ display: 'none' }}
					id={`contained-button-file`}
					onChange={(e) => this.controller.handlePhotoChange(e)}
				/>
				<label htmlFor={`contained-button-file`}>
					<Button variant="outlined" color="primary" component="span" className="mb-3">
						{"Chọn hình ảnh"}
					</Button>
				</label>
				<Grid>
					{photos && (
						<ControlImageGridList
							photos={photos}
							onDelete={(e, i, id) => { this.controller.handleDeletePhoto(i, id) }}
						/>
					)}
				</Grid>
			</div>
		)
	}

	public renderPage() {
		return (
			<Container>
				{/* <HomeHeader/> */}
				<Grid className="standard-frame">
					<Grid container spacing={2} className="frame-profile" key={this.model.renderKey}>
						<Grid item xs={12} className="pb-0 pb-4 pt-3">
							<Text className="title-profle">{"Tạo bài đăng tin Bất động sản"}</Text>
							{/* <h4 className="font-weight-bold">{Strings.Staff.BASIC_INFO}</h4> */}
						</Grid>
						<Grid item xs={12} sm={6} className="mt-3">
							<CtrlAutocomplete
								label={Strings.RealEstate.CATEGORY}
								items={this.model.categoryList || []}
								key={this.model.category?.value}
								value={this.model.category?.value || ""}
								onChangeValue={(value) => {
									this.setModel({
										category: { value }
									})
								}}
								errorMessage={this.model.category?.error}
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="mt-3">
							<ControlInput
								required
								label={Strings.RealEstate.NAME}
								errorMessage={this.model.title?.error}
								defaultValue={this.model.title?.value || ""}
								onChangeValue={(value) => {
									this.setModel({
										title: { value }
									})
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="mt-3">
							<ControlInput
								required
								label={Strings.RealEstate.PRICE}
								defaultValue={this.model.price?.value || ""}
								onChangeValue={(value) => {
									this.setModel({
										price: { value }
									})
								}}
								errorMessage={this.model.price?.error}
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="mt-3">
							<ControlInput
								label={Strings.RealEstate.AREA}
								defaultValue={this.model.area?.value || ""}
								onChangeValue={(value) => {
									this.setModel({
										area: { value }
									})
								}}
							/>
						</Grid>

						<Grid item xs={12} sm={6} className="mt-3">
							<CtrlAutocomplete
								variant="outlined"
								label={Strings.RealEstate.CITY}
								items={this.model.provinceList || []}
								value={this.model.address?.provinceCode || ""}
								onChangeValue={(value) => {
									this.controller.getDistrictsByCityCode(value);
									this.setModel({
										address: {
											provinceCode: value,
											districtCode: undefined,
											wardCode: undefined,
										},
										districtList: [],
										wardList: [],
										renderKey: Date.now()
									})
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="mt-3">
							<CtrlAutocomplete
								variant="outlined"
								label={Strings.RealEstate.DISTRICT}
								items={this.model.districtList || []}
								value={this.model.address?.districtCode || ""}
								onChangeValue={(value) => {
									this.controller.getWardByDistrictCode(value);
									this.setModel({
										address: {
											...this.model.address,
											districtCode: value,
											wardCode: undefined,
										},
										wardList: [],
										renderKey: Date.now()
									})

								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="mt-3">
							<CtrlAutocomplete
								variant="outlined"
								label={Strings.RealEstate.WARD}
								items={this.model.wardList || []}
								value={this.model.address?.wardCode || ""}
								onChangeValue={(value) => {
									this.setModel({
										address: {
											...this.model.address,
											wardCode: value,
										},
										renderKey: Date.now()
									})
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="mt-3">
							<ControlInput
								label={Strings.RealEstate.ADDRESS_LINE}
								defaultValue={this.model.address?.addressLine || ""}
								onChangeValue={(addressFull) => {
									this.setModel({
										address: {
											...this.model.address,
											addressLine: addressFull,
										}
									})
								}}
							/>
						</Grid>

						<Grid item xs={12} sm={6} className="mt-3">
							<Typography variant="subtitle1" gutterBottom>
								{Strings.RealEstate.ATTRIBUTE}
							</Typography>
							<ControlHtmlInput
								content={this.model.attributes?.value || ""}
								onBlur={(value: string) => {
									// console.log("attributes", value)
									this.setModel({
										attributes: { value }
									})
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="mt-3">
							<Typography variant="subtitle1" gutterBottom>
								{Strings.RealEstate.DESCRIPTION}
							</Typography>
							<ControlHtmlInput
								content={this.model.description || ""}
								onBlur={(value: string) => {
									// console.log("description", value)
									this.setModel({
										description: value
									})
								}}
							/>
						</Grid>

						<Grid item xs={12} md={12} lg={12}>
							<p>{Strings.RealEstate.IMAGE}</p>
							{this.renderPhotos()}
						</Grid>

						<Grid item xs={12} md={12} lg={12} className="d-flex justify-content-center mb-3">
							<Button
								variant="contained"
								className="mt-3"
								startIcon={<ArrowBack />}
								onClick={() => this.goBack()}
							>
								{Strings.Common.GO_BACK}
							</Button>
							{/* Save button */}
							<Button
								color="primary"
								variant="contained"
								className="mt-3 ml-3"
								startIcon={<Save />}
								onClick={() => this.controller.onCreateOrUpdateRealEstate()}
							>
								{Strings.Common.SAVE}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

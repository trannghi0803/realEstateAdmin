import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import "../../../commons/styles/ProfileStyles.css";
import {
	CardApartment,
	Container,
	TitleLink,
} from "../../../components";
import "../../../components/ComponentStyles.css";
import ProfileModel from "../../models/ProfileModel";
import ProfileService from "../../services/ProfileService";
import { Grid } from "@material-ui/core";
import { Resources, Screens, Strings } from "../../../constants";
import CardSliderAparment from "../../../components/CardSlickApartment";
import { Helpers } from "../../../commons/utils";
import CardProject from "../../../components/CardProject";
import FavoriteController from "../../controllers/profile/FavoriteController";
import { Swiper, SwiperSlide } from 'swiper/react';
import { isBuffer } from "lodash";

@observer
export default class FavoriteItem extends BaseView<
FavoriteController,
ProfileModel,
ProfileService
> {
	constructor(props: any) {
		super(props, FavoriteController, ProfileModel, ProfileService);
	}
	public renderPage() {
		return (
			<Container>
				{/* <HomeHeader/> */}
				<Grid className="standard-frame">
					{/* this.setModel({ selectedOption: selectedOption, valueWatch: selectedOption.value } */}
					<Grid style={{ margin: '5.33rem 0rem' }}>
						<Grid container spacing={2}>
							<Grid item xs={12} className="pb-0">
								<TitleLink nameTitle={("Bài đăng đã được duyệt" || '')}></TitleLink>
							</Grid>
							<Grid container xs={12} spacing={2}>
								{/* listApartmentFavorite */}
								{(this.model.listRealEstateActive || []).length > 0 ?
									this.model.listRealEstateActive?.map((item, index) => {
										return (
											<Grid item>
												<CardApartment
													onClick={() => this.history.push(Screens.APARTMENT + `?id=${item.id}`)}
													onClickLike={() => { }}
													apartment={item}
													voucherName={Strings.Common.VOUCHER_NAME}
													remainDate={2}
												/>
											</Grid>
										);
									})
									:
									<Grid className="view-all-card">
										{Strings.Common.NOT_ITEM}
									</Grid>
								}
							</Grid>
						</Grid>
					</Grid>

					<Grid style={{ margin: '5.33rem 0rem' }}>
						<Grid container spacing={2}>
							<Grid item xs={12} className="pb-0">
								<TitleLink nameTitle={("Bài đăng đang chờ duyệt" || '')}></TitleLink>
							</Grid>
							<Grid container xs={12} spacing={2}>
								{(this.model.listRealEstateInactive || []).length > 0 ?
									this.model.listRealEstateInactive?.map((item, index) => {
										return (
											<Grid item>
												<CardApartment
													onClick={() => this.history.push(Screens.USER_SUBMIT_REAL_ESTATE + `?id=${item.id}`)}
													onClickLike={() => { }}
													apartment={item}
													voucherName={Strings.Common.VOUCHER_NAME}
													remainDate={2}
												/>
											</Grid>
										);
									})
									:
									<Grid className="view-all-card">
										{Strings.Common.NOT_ITEM}
									</Grid>
								}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

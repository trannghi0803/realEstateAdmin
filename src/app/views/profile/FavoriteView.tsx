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
						<TitleLink className="mt-3" nameTitle={("Bài đăng đã được duyệt" || '')}></TitleLink>
						{/* listApartmentFavorite */}
						{(this.model.listRealEstateActive || []).length > 0 ?
							// <CardSliderAparment nameTitle={Strings.Profile.FAVORITE_PRODUCT} lengthCard={this.model.listApartmentFavorite?.length || 0}>
							this.model.listRealEstateActive?.map((item, index) => {
								return (
									<CardApartment
										onClick={() => this.history.push(Screens.APARTMENT + `?id=${item.id}`)}
										onClickLike={() => { }}
										apartment={item}
										voucherName={Strings.Common.VOUCHER_NAME}
										remainDate={2}
									/>
								);
							})
							// </CardSliderAparment>
							:
							// <CardSliderAparment nameTitle={Strings.Profile.FAVORITE_PRODUCT} lengthCard={1}>
							<Grid className="view-all-card">
								{Strings.Common.NOT_ITEM}
							</Grid>
							// </CardSliderAparment> 
						}
					</Grid>

					<Grid style={{ margin: '5.33rem 0rem' }}>
						<TitleLink className="mt-3" nameTitle={("Bài đăng đang chờ duyệt" || '')}></TitleLink>
						{/* listApartmentFavorite */}
						{(this.model.listRealEstateInactive || []).length > 0 ?
							// <CardSliderAparment nameTitle={Strings.Profile.FAVORITE_PRODUCT} lengthCard={this.model.listApartmentFavorite?.length || 0}>
							this.model.listRealEstateInactive?.map((item, index) => {
								return (
									<SwiperSlide
										key={index + 'apartment'}
										className="swiper-card-project"
									>
										<CardApartment
											onClick={() => this.history.push(Screens.USER_SUBMIT_REAL_ESTATE + `?id=${item.id}`)}
											onClickLike={() => { }}
											apartment={item}
											voucherName={Strings.Common.VOUCHER_NAME}
											remainDate={2}
										/>
									</SwiperSlide>
								);
							})
							// </CardSliderAparment>
							:
							// <CardSliderAparment nameTitle={Strings.Profile.FAVORITE_PRODUCT} lengthCard={1}>
							<Grid className="view-all-card">
								{Strings.Common.NOT_ITEM}
							</Grid>
							// </CardSliderAparment> 
						}


					</Grid>
				</Grid>
			</Container>
		);
	}
}

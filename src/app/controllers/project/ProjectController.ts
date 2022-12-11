import { Helpers, IProject, IProjectAttribute, IResult } from "../../../commons/utils";
import { Constants, Resources, Screens, Strings } from "../../../constants";
import { MessageApi } from "../../../constants/Enums";
import { ProjectModel } from "../../models";
import { ProjectService } from "../../services";
import { BaseController } from "../base";

class ProjectController extends BaseController<ProjectModel, ProjectService> {

	constructor(props: any) {
		super(props, ProjectModel, ProjectService);
	}
	async onStarted() {
		const { id } = this.getUrlParams(["id"]);
		if (!id) {
			this.history.push(Screens.HOME);
			return
		} else {
			try {
				window.scrollTo(0, 0)
				const data: any =
				{
					"id": "45a67f60-c5ed-4c31-a8bb-581281233097",
					"status": 0,
					"type": 1,
					"isHighlight": 1,
					"name": "Furama Resort Đà Nẵng",
					"nameContentCode": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
					"siteArea": 30000,
					"constructionStatus": 0,
					"constructionArea": 0,
					"buildingDensity": 0,
					"apartment": 0,
					"villa": 0,
					"hotel": 0,
					"launchDate": 1627656323,
					"bookingPrice": 1774045,
					"scale": "198 phòng nghỉ",
					"owner": "",
					"constructor": "",
					"architect": "",
					"searchText": "Furama Resort Đa Nang",
					"minPrice": 16316.705,
					"maxPrice": 15000000,
					"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
					"addressId": "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
					"districtCode": "494",
					"districtName": "",
					"wardCode": null,
					"wardName": null,
					"provinceCode": "48",
					"provinceName": "Thành phố Đà Nẵng",
					"latitude": null,
					"longitude": null,
					"addressFull": "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
					"projectPhotos": [
						{
							"id": "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
							"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
							"photoId": "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
							"photoUrl": "https://file4.batdongsan.com.vn/resize/200x200/2022/11/18/20221118181822-8b1c_wm.jpg",
							"displayOrder": 0,
							"organizationId": null
						},
						{
							"id": "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
							"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
							"photoId": "1414acdc-99ee-4305-a7ac-3fdb614907b6",
							"photoUrl": "https://file4.batdongsan.com.vn/resize/200x200/2022/11/18/20221118181822-7a8a_wm.jpg",
							"displayOrder": 0,
							"organizationId": null
						},
						{
							"id": "3b6200da-43d1-4d51-afdd-56f275fb2591",
							"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
							"photoId": "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
							"photoUrl": "https://file4.batdongsan.com.vn/resize/200x200/2022/11/18/20221118181823-03a8_wm.jpg",
							"displayOrder": 0,
							"organizationId": null
						},
						{
							"id": "9685a0af-18fa-41e1-b768-6e450724e9ca",
							"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
							"photoId": "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
							"photoUrl": "https://file4.batdongsan.com.vn/resize/200x200/2022/11/18/20221118181823-a1c8_wm.jpg",
							"displayOrder": 0,
							"organizationId": null
						}
					],
					"projectZones": [],
					"attributes": [
						{
							"id": "fa13adb2-2bba-4207-b01d-bbd5b9f38910",
							"type": 0,
							"code": "00007",
							"displayType": 7,
							"title": "Mặt bằng",
							"titleContentCode": "0ab9af33-6b41-4a2b-8a02-10eea6c510ef",
							"iconName": "1",
							"apartmentAttributes": null,
							"templateApartmentAttributes": null,
							"projectAttributes": [
								{
									"id": "eed7e742-fe21-467d-b4c3-9a6e0e939afd",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "1873c229-7272-40b7-a795-647f4d7ce415",
									"attributeId": "fa13adb2-2bba-4207-b01d-bbd5b9f38910",
									"attributeType": 0,
									"attributeCode": "00007",
									"attributeDisplayType": 7,
									"attributeTitle": "Mặt bằng",
									"attributeTitleContentCode": "0ab9af33-6b41-4a2b-8a02-10eea6c510ef",
									"attributeIconName": "1",
									"attributeValueTitle": null,
									"attributeValueTitleContentCode": "426a062d-adc8-489f-ad62-380a8b5d65d8",
									"attributeValue": "<p><span style=\"font-size: 14px; font-family: &quot;SVN-Gotham Book&quot;;\"><span id=\"jodit-selection_marker_1627561264626_06691970954774984\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span>Toàn bộ 198 phòng nghỉ sang trọng ở cả hai cánh Đông và Tây được kiến tạo giữa một khu vườn nhiệt đới rộng hơn 3 ha với hàng trăm chủng loại hoa cỏ, cây cối. Liên kết giữa các tầng nhà và các phòng chức năng của khu nghỉ dưỡng là các lối đi uốn lượn: lúc xuôi xuống thung lũng, lúc ngược lên đồi cao; mát mẻ, yên bình và lãng mạn qua các rừng cây to rậm rạp dây leo, những thảm cỏ mướt mát được cắt tỉa chau chuốt và những vườn hoa ngập tràn màu sắc...<span id=\"jodit-selection_marker_1627561264626_8052394551109248\" data-jodit-selection_marker=\"end\" style=\"line-height: 0; display: none;\">﻿</span></span><br></p>",
									"attributeValueContentCode": "efebe952-4dd5-4d16-9a58-7c8fc6b654f8",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [],
									"attributeValueContents": [
										{
											"id": "2e2c56f6-15c1-42f9-929f-911857667843",
											"code": "efebe952-4dd5-4d16-9a58-7c8fc6b654f8",
											"value": "<p><span style=\"font-size: 14px; font-family: &quot;SVN-Gotham Book&quot;;\"><span id=\"jodit-selection_marker_1627561264626_06691970954774984\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span>Toàn bộ 198 phòng nghỉ sang trọng ở cả hai cánh Đông và Tây được kiến tạo giữa một khu vườn nhiệt đới rộng hơn 3 ha với hàng trăm chủng loại hoa cỏ, cây cối. Liên kết giữa các tầng nhà và các phòng chức năng của khu nghỉ dưỡng là các lối đi uốn lượn: lúc xuôi xuống thung lũng, lúc ngược lên đồi cao; mát mẻ, yên bình và lãng mạn qua các rừng cây to rậm rạp dây leo, những thảm cỏ mướt mát được cắt tỉa chau chuốt và những vườn hoa ngập tràn màu sắc...<span id=\"jodit-selection_marker_1627561264626_8052394551109248\" data-jodit-selection_marker=\"end\" style=\"line-height: 0; display: none;\">﻿</span></span><br></p>",
											"language": "VN",
											"status": 1,
										}
									],
									"projectAttributePhotos": [
										{
											"id": "3f59570f-b2e1-4863-a0f3-00e9eb501b32",
											"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
											"projectAttributeId": "eed7e742-fe21-467d-b4c3-9a6e0e939afd",
											"photoId": "70cee647-add8-48eb-abd3-1dce5633e148",
											"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/70cee647-add8-48eb-abd3-1dce5633e148.jpg",
											"displayOrder": 0,
											"organizationId": null
										},
										{
											"id": "a9361600-3ed5-4ffa-a1be-6d77a63b2b14",
											"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
											"projectAttributeId": "eed7e742-fe21-467d-b4c3-9a6e0e939afd",
											"photoId": "d16fa941-5295-4493-8c83-a22d5bd564a9",
											"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/d16fa941-5295-4493-8c83-a22d5bd564a9.jpg",
											"displayOrder": 0,
											"organizationId": null
										}
									]
								}
							],
							"titleContents": [
								{
									"id": "d7e65388-3019-4f98-b90e-33138b3869b2",
									"code": "0ab9af33-6b41-4a2b-8a02-10eea6c510ef",
									"value": "Mặt bằng",
									"language": "VN",
									"status": 0,
								}
							]
						},
						{
							"id": "00008",
							"type": 8,
							"code": "00008",
							"displayType": 8,
							"title": null,
							"titleContentCode": "Review video",
							"iconName": "1",
							"apartmentAttributes": null,
							"templateApartmentAttributes": null,
							"projectAttributes": [
								{
									"id": "039ac5e3-0b6b-4e3c-a2b8-0ec5f38dedc0",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "fedff4c4-c0f0-4595-b018-58cc0a5ef5f1",
									"attributeId": "00008",
									"attributeType": 8,
									"attributeCode": "00008",
									"attributeDisplayType": 8,
									"attributeTitle": null,
									"attributeTitleContentCode": "Review video",
									"attributeIconName": "1",
									"attributeValueTitle": null,
									"attributeValueTitleContentCode": "2c5df12f-de7d-4e65-a161-f54660eef7ce",
									"attributeValue": "",
									"attributeValueContentCode": "7b4cfbc6-2ddc-4b0a-9305-4633d54d379d",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [],
									"attributeValueContents": [
										{
											"id": "27437d9f-ec40-4ebe-9880-850aff0decff",
											"code": "7b4cfbc6-2ddc-4b0a-9305-4633d54d379d",
											"value": "",
											"language": "VN",
											"status": 1,
										}
									],
									"projectAttributePhotos": null
								}
							],
							"titleContents": []
						},
						{
							"id": "22749402-a5e8-4b9e-9ddb-bc52377fd5b5",
							"type": 0,
							"code": "00002",
							"displayType": 2,
							"title": "Thông tin dự án",
							"titleContentCode": "2a892355-a0fe-4315-81fd-3c29c8ec8fc1",
							"iconName": "1",
							"apartmentAttributes": null,
							"templateApartmentAttributes": null,
							"projectAttributes": [
								{
									"id": "97a05a51-6e94-48c5-a8e3-40dce70f078d",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "629a365d-e35e-4919-906e-7a428e90a68a",
									"attributeId": "22749402-a5e8-4b9e-9ddb-bc52377fd5b5",
									"attributeType": 0,
									"attributeCode": "00002",
									"attributeDisplayType": 2,
									"attributeTitle": "Thông tin dự án",
									"attributeTitleContentCode": "2a892355-a0fe-4315-81fd-3c29c8ec8fc1",
									"attributeIconName": "1",
									"attributeValueTitle": "Diện tích dành cho cây xanh",
									"attributeValueTitleContentCode": "6666ed91-756d-49bc-9243-a9787fd58651",
									"attributeValue": "70%",
									"attributeValueContentCode": "79a4b623-7d0c-444e-8223-e65d0c4cfa15",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [
										{
											"id": "0a778cab-a773-4a46-9395-a4ffdefbf4e4",
											"code": "6666ed91-756d-49bc-9243-a9787fd58651",
											"value": "Diện tích dành cho cây xanh",
											"language": "VN",
											"status": 1,
										}
									],
									"attributeValueContents": [
										{
											"id": "90ffa575-9243-4303-9095-2880bc9a512a",
											"code": "79a4b623-7d0c-444e-8223-e65d0c4cfa15",
											"value": "70%",
											"language": "VN",
											"status": 1,
											"createTime": 1631861482,
											"createUser": "303d2fde-73fd-4811-834e-66c05704e761",
											"updateTime": 1631861482,
											"updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
										}
									],
									"projectAttributePhotos": null
								},
								{
									"id": "c855e883-fa70-4d1c-bcca-87088a818a52",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "d61610a8-585d-4460-a3f9-fa6e478f3df3",
									"attributeId": "22749402-a5e8-4b9e-9ddb-bc52377fd5b5",
									"attributeType": 0,
									"attributeCode": "00002",
									"attributeDisplayType": 2,
									"attributeTitle": "Thông tin dự án",
									"attributeTitleContentCode": "2a892355-a0fe-4315-81fd-3c29c8ec8fc1",
									"attributeIconName": "1",
									"attributeValueTitle": "Chuẩn 5 sao bao gồm",
									"attributeValueTitleContentCode": "ad8ebfea-ee59-42c5-9589-776cc78d032f",
									"attributeValue": "3 hồ bơi, 6 nhà hàng",
									"attributeValueContentCode": "16cd6751-d031-41b5-84ef-34a58462d847",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [
										{
											"id": "113fc69c-94e0-445b-88b5-2d624111ffdb",
											"code": "ad8ebfea-ee59-42c5-9589-776cc78d032f",
											"value": "Chuẩn 5 sao bao gồm",
											"language": "VN",
											"status": 1,
										}
									],
									"attributeValueContents": [
										{
											"id": "e7e4f012-2b96-4a3d-a2ff-b0f685dc79d0",
											"code": "16cd6751-d031-41b5-84ef-34a58462d847",
											"value": "3 hồ bơi, 6 nhà hàng",
											"language": "VN",
											"status": 1,
										}
									],
									"projectAttributePhotos": null
								},
								{
									"id": "f48ce9a8-bb8f-4f35-b8d0-0c61141deae8",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "9f2699fe-6ba7-4e0b-9e7b-e42335de3f28",
									"attributeId": "22749402-a5e8-4b9e-9ddb-bc52377fd5b5",
									"attributeType": 0,
									"attributeCode": "00002",
									"attributeDisplayType": 2,
									"attributeTitle": "Thông tin dự án",
									"attributeTitleContentCode": "2a892355-a0fe-4315-81fd-3c29c8ec8fc1",
									"attributeIconName": "1",
									"attributeValueTitle": "Tống số phòng ngủ",
									"attributeValueTitleContentCode": "6203c52b-42a3-44c8-9481-48b8d3c0c360",
									"attributeValue": "198 phòng nghỉ sang trọng ",
									"attributeValueContentCode": "6dea52c0-f6a1-4915-804a-b799624135f8",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [
										{
											"id": "d8d9c40a-eb80-41b2-828a-39f999b14e5c",
											"code": "6203c52b-42a3-44c8-9481-48b8d3c0c360",
											"value": "Tống số phòng ngủ",
											"language": "VN",
											"status": 1,
										}
									],
									"attributeValueContents": [
										{
											"id": "ae4e182d-5097-4d2b-98a5-80aa0d8a31dc",
											"code": "6dea52c0-f6a1-4915-804a-b799624135f8",
											"value": "198 phòng nghỉ sang trọng ",
											"language": "VN",
											"status": 1,
										}
									],
									"projectAttributePhotos": null
								}
							],
							"titleContents": [
								{
									"id": "db1ace75-b1ac-48a8-b97c-8bb48f69f6a7",
									"code": "2a892355-a0fe-4315-81fd-3c29c8ec8fc1",
									"value": "Thông tin dự án",
									"language": "VN",
									"status": 0,
								}
							]
						},
						{
							"id": "1d77f2ed-e28f-4fef-9597-85f98a8f6edf",
							"type": 0,
							"code": "00004",
							"displayType": 4,
							"title": "Vị trí",
							"titleContentCode": "04204574-4e2a-4c47-bb3f-7c9bf8a1e3cc",
							"iconName": "1",
							"apartmentAttributes": null,
							"templateApartmentAttributes": null,
							"projectAttributes": [
								{
									"id": "7ece70bb-b038-403d-bd5c-8229a6063cdb",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "04050de1-6334-4e98-a8c6-98e743fcb8bc",
									"attributeId": "1d77f2ed-e28f-4fef-9597-85f98a8f6edf",
									"attributeType": 0,
									"attributeCode": "00004",
									"attributeDisplayType": 4,
									"attributeTitle": "Vị trí",
									"attributeTitleContentCode": "04204574-4e2a-4c47-bb3f-7c9bf8a1e3cc",
									"attributeIconName": "1",
									"attributeValueTitle": null,
									"attributeValueTitleContentCode": "60a22acf-924f-414b-b88c-6faed8e829c6",
									"attributeValue": "<p><span id=\"jodit-selection_marker_1627561252036_3510601228662211\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span><span style=\"font-size: 14px; font-family: &quot;SVN-Gotham Book&quot;;\">Tọa lại ngay tại 103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng. Với một ví trí đắc địa, Furama Resort thuận lợi cho trên tất cả các hành trình của du khách, khu nghỉ dưỡng chỉ mất 15 phút đường để đến với sân bay Quốc Tế Đà Nẵng cho các chuyến bay tới Hồ Chí Minh, Buôn Mê Thuột, Pleiku, Nha Trang, Quy Nhơn và Đà Lạt. Các chuyến bay quốc tế trực tiếp đi Singapore cùng với các chuyến bay tới Hong Kong, Ma Cao, Nhật Bản và Hàn Quốc.</span><span id=\"jodit-selection_marker_1627561252036_6561297016920984\" data-jodit-selection_marker=\"end\" style=\"line-height: 0; display: none;\">﻿</span></p>",
									"attributeValueContentCode": "b5321a26-747e-40ec-8486-d81c2105eda6",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [],
									"attributeValueContents": [
										{
											"id": "3264c99d-ed57-48f4-b182-6cf4e06ccdfd",
											"code": "b5321a26-747e-40ec-8486-d81c2105eda6",
											"value": "<p><span id=\"jodit-selection_marker_1627561252036_3510601228662211\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span><span style=\"font-size: 14px; font-family: &quot;SVN-Gotham Book&quot;;\">Tọa lại ngay tại 103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng. Với một ví trí đắc địa, Furama Resort thuận lợi cho trên tất cả các hành trình của du khách, khu nghỉ dưỡng chỉ mất 15 phút đường để đến với sân bay Quốc Tế Đà Nẵng cho các chuyến bay tới Hồ Chí Minh, Buôn Mê Thuột, Pleiku, Nha Trang, Quy Nhơn và Đà Lạt. Các chuyến bay quốc tế trực tiếp đi Singapore cùng với các chuyến bay tới Hong Kong, Ma Cao, Nhật Bản và Hàn Quốc.</span><span id=\"jodit-selection_marker_1627561252036_6561297016920984\" data-jodit-selection_marker=\"end\" style=\"line-height: 0; display: none;\">﻿</span></p>",
											"language": "VN",
											"status": 1,
										}
									],
									"projectAttributePhotos": [
										{
											"id": "ecbefbf4-f52b-4025-8f6d-c5d4c81d0726",
											"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
											"projectAttributeId": "7ece70bb-b038-403d-bd5c-8229a6063cdb",
											"photoId": "93309909-8567-439b-8927-c4b7e7653435",
											"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/Restaurant-Don Cipriani's 3b.jpg",
											"displayOrder": 0,
											"organizationId": null
										}
									]
								}
							],
							"titleContents": [
								{
									"id": "d0d427a5-86dd-471b-996e-edbbd50bb848",
									"code": "04204574-4e2a-4c47-bb3f-7c9bf8a1e3cc",
									"value": "Vị trí",
									"language": "VN",
									"status": 0,
								}
							]
						},
						{
							"id": "7f0f3870-e719-4cf2-97c8-fc1cffd37f30",
							"type": 0,
							"code": "00010",
							"displayType": 10,
							"title": "Link",
							"titleContentCode": "225b1c06-a759-4be7-b309-5aedfe7ef1f3",
							"iconName": null,
							"apartmentAttributes": null,
							"templateApartmentAttributes": null,
							"projectAttributes": [
								{
									"id": "f40f7735-21cb-4b1a-8f53-d25d6b323d38",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "9ae732e0-1879-429b-922b-a2ee7cdf6f64",
									"attributeId": "7f0f3870-e719-4cf2-97c8-fc1cffd37f30",
									"attributeType": 0,
									"attributeCode": "00010",
									"attributeDisplayType": 10,
									"attributeTitle": "Link",
									"attributeTitleContentCode": "225b1c06-a759-4be7-b309-5aedfe7ef1f3",
									"attributeIconName": null,
									"attributeValueTitle": null,
									"attributeValueTitleContentCode": "cf213282-416f-4ece-ad39-012c259d1e19",
									"attributeValue": "",
									"attributeValueContentCode": "fdf767aa-c25e-45bc-bf7e-edaa4996026b",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [],
									"attributeValueContents": [
										{
											"id": "7ff7a243-ec94-4e78-89cd-90e1b81a6789",
											"code": "fdf767aa-c25e-45bc-bf7e-edaa4996026b",
											"value": "",
											"language": "VN",
											"status": 1,
										},
									],
									"projectAttributePhotos": null
								}
							],
							"titleContents": [
								{
									"id": "65bed08a-117e-4132-94fd-2c3ed3694ef6",
									"code": "225b1c06-a759-4be7-b309-5aedfe7ef1f3",
									"value": "Link",
									"language": "VN",
									"status": 1,
								}
							]
						},
						{
							"id": "4e0ae7f3-5524-4d81-bdb0-2aac42805f90",
							"type": 0,
							"code": "00003",
							"displayType": 3,
							"title": "Tiện ích",
							"titleContentCode": "8b75ba37-3116-47db-bc7b-a3f395f841f2",
							"iconName": "1",
							"apartmentAttributes": null,
							"templateApartmentAttributes": null,
							"projectAttributes": [
								{
									"id": "fcd26c8a-73c3-46bc-9f88-7f86684b02ed",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "ed900c8d-994a-4baf-be8e-90ccbedb200c",
									"attributeId": "4e0ae7f3-5524-4d81-bdb0-2aac42805f90",
									"attributeType": 0,
									"attributeCode": "00003",
									"attributeDisplayType": 3,
									"attributeTitle": "Tiện ích",
									"attributeTitleContentCode": "8b75ba37-3116-47db-bc7b-a3f395f841f2",
									"attributeIconName": "1",
									"attributeValueTitle": "",
									"attributeValueTitleContentCode": "d25de242-3059-482e-aadd-6f79ff2d4bd9",
									"attributeValue": "06 nhà hàng và quầy bar đẳng cấp",
									"attributeValueContentCode": "f02d8228-7aa5-4d06-8149-84ae1c7d5420",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [
										{
											"id": "d8fa64da-2eeb-44c4-9f6a-61c6b5fecc43",
											"code": "d25de242-3059-482e-aadd-6f79ff2d4bd9",
											"value": "",
											"language": "VN",
											"status": 1,
										}
									],
									"attributeValueContents": [
										{
											"id": "389395bc-d67a-4ab1-b009-705022f4fdf4",
											"code": "f02d8228-7aa5-4d06-8149-84ae1c7d5420",
											"value": "06 nhà hàng và quầy bar đẳng cấp",
											"language": "VN",
											"status": 1,
										},
									],
									"projectAttributePhotos": [
										{
											"id": "c9368f35-36ca-4c75-8c4c-de1deec76ea8",
											"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
											"projectAttributeId": "fcd26c8a-73c3-46bc-9f88-7f86684b02ed",
											"photoId": "d4d5ebda-7c1e-4ee1-9bc2-9136490a9c11",
											"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/Restaurant-Don Cipriani's 3b.jpg",
											"displayOrder": 0,
											"organizationId": null
										}
									]
								},
								{
									"id": "d7ac1533-2e18-432c-bca4-82fc6ba441f2",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "f97d4ab8-cc4a-4535-9cc2-a95c89f2d9db",
									"attributeId": "4e0ae7f3-5524-4d81-bdb0-2aac42805f90",
									"attributeType": 0,
									"attributeCode": "00003",
									"attributeDisplayType": 3,
									"attributeTitle": "Tiện ích",
									"attributeTitleContentCode": "8b75ba37-3116-47db-bc7b-a3f395f841f2",
									"attributeIconName": "1",
									"attributeValueTitle": "",
									"attributeValueTitleContentCode": "e5277e45-4ace-4b69-ade4-9563432dbc87",
									"attributeValue": "Bar Hai Van Lounge",
									"attributeValueContentCode": "2e08e7f1-bdb2-47fb-b70c-2c3699973f64",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [
										{
											"id": "ee2b9833-9ca5-4a0f-b40a-c8058319752a",
											"code": "e5277e45-4ace-4b69-ade4-9563432dbc87",
											"value": "",
											"language": "VN",
											"status": 1,
										}
									],
									"attributeValueContents": [
										{
											"id": "740e50a8-eb31-4227-b913-fcd49e9590fa",
											"code": "2e08e7f1-bdb2-47fb-b70c-2c3699973f64",
											"value": "Bar Hai Van Lounge",
											"language": "VN",
											"status": 1,
										},
									],
									"projectAttributePhotos": [
										{
											"id": "9b460405-9df0-46ff-97c4-ad68633662e0",
											"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
											"projectAttributeId": "d7ac1533-2e18-432c-bca4-82fc6ba441f2",
											"photoId": "77869773-6071-435a-94d0-59dbde9f95f2",
											"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/Bar-Hai Van Lounge.jpg",
											"displayOrder": 0,
											"organizationId": null
										}
									]
								}
							],
							"titleContents": [
								{
									"id": "fdaf3336-e9f6-4462-8fd4-715ea4396ae4",
									"code": "8b75ba37-3116-47db-bc7b-a3f395f841f2",
									"value": "Tiện ích",
									"language": "VN",
									"status": 0,
								}
							]
						},
						{
							"id": "d7f04573-e9a9-4adf-b3bf-0f7e262c03c2",
							"type": 0,
							"code": "00001",
							"displayType": 1,
							"title": "Tổng quan",
							"titleContentCode": "7cae37ac-a36c-4338-b215-9d8e8dbed18a",
							"iconName": "1",
							"apartmentAttributes": null,
							"templateApartmentAttributes": null,
							"projectAttributes": [
								{
									"id": "f823e25e-502f-45c9-a75e-d7e81d876da4",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "e4d23deb-649b-4a52-8d18-03fb56bc9af3",
									"attributeId": "d7f04573-e9a9-4adf-b3bf-0f7e262c03c2",
									"attributeType": 0,
									"attributeCode": "00001",
									"attributeDisplayType": 1,
									"attributeTitle": "Tổng quan",
									"attributeTitleContentCode": "7cae37ac-a36c-4338-b215-9d8e8dbed18a",
									"attributeIconName": "1",
									"attributeValueTitle": null,
									"attributeValueTitleContentCode": "8cb2db66-8ff6-42f0-9a42-aeb79c4e527e",
									"attributeValue": "<p><span id=\"jodit-selection_marker_1628057126288_7040561642019132\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span><span style=\"font-size: 14px; font-family: &quot;SVN-Gotham Book&quot;;\">Tọa lạc trên một trong 6 bãi biển đẹp nhất hành tinh, ở vị trí đắc địa nhất trên bờ biển Đà Nẵng - trung tâm của dải du lịch biển miền Trung - Furama Resort Đà Nẵng không chỉ nổi tiếng vì địa thế lý tưởng, vì chất lượng phục vụ 5 sao đẳng cấp quốc tế mà còn được công nhận như là một “Ốc đảo xanh” trong lành tuyệt đẹp giữa lòng thành phố Đà Nẵng, và là nơi dừng chân của nhiều nhà lãnh đạo, diễn viên điện ảnh, thương gia nước ngoài; đồng thời cũng là nơi được lựa chọn để đón tiếp những phái đoàn ngoại giao quốc tế, tổ chức các sự kiện quốc gia.</span><span id=\"jodit-selection_marker_1628057126288_0947384782198506\" data-jodit-selection_marker=\"end\" style=\"line-height: 0; display: none;\">﻿</span></p>",
									"attributeValueContentCode": "81a6e36c-3922-4c70-8878-3413e8d61981",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [],
									"attributeValueContents": [
										{
											"id": "589a32a4-0e9b-4b2c-b8f6-b7d632449312",
											"code": "81a6e36c-3922-4c70-8878-3413e8d61981",
											"value": "<p><span id=\"jodit-selection_marker_1628057126288_7040561642019132\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span><span style=\"font-size: 14px; font-family: &quot;SVN-Gotham Book&quot;;\">Tọa lạc trên một trong 6 bãi biển đẹp nhất hành tinh, ở vị trí đắc địa nhất trên bờ biển Đà Nẵng - trung tâm của dải du lịch biển miền Trung - Furama Resort Đà Nẵng không chỉ nổi tiếng vì địa thế lý tưởng, vì chất lượng phục vụ 5 sao đẳng cấp quốc tế mà còn được công nhận như là một “Ốc đảo xanh” trong lành tuyệt đẹp giữa lòng thành phố Đà Nẵng, và là nơi dừng chân của nhiều nhà lãnh đạo, diễn viên điện ảnh, thương gia nước ngoài; đồng thời cũng là nơi được lựa chọn để đón tiếp những phái đoàn ngoại giao quốc tế, tổ chức các sự kiện quốc gia.</span><span id=\"jodit-selection_marker_1628057126288_0947384782198506\" data-jodit-selection_marker=\"end\" style=\"line-height: 0; display: none;\">﻿</span></p>",
											"language": "VN",
											"status": 1,
										},
									],
									"projectAttributePhotos": null
								}
							],
							"titleContents": [
								{
									"id": "e8becf87-c23c-4d85-b6b5-ed9f547f1c5a",
									"code": "7cae37ac-a36c-4338-b215-9d8e8dbed18a",
									"value": "Tổng quan",
									"language": "VN",
									"status": 0,
								},
							]
						},
						{
							"id": "00009",
							"type": 9,
							"code": "00009",
							"displayType": 9,
							"title": null,
							"titleContentCode": "360 độ view",
							"iconName": "1",
							"apartmentAttributes": null,
							"templateApartmentAttributes": null,
							"projectAttributes": [
								{
									"id": "c9472f26-568b-4a54-9e18-11da722f2722",
									"status": 1,
									"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
									"attributeValueId": "5e3f5db2-036b-4fb2-8b21-1440b7ac1d6b",
									"attributeId": "00009",
									"attributeType": 9,
									"attributeCode": "00009",
									"attributeDisplayType": 9,
									"attributeTitle": null,
									"attributeTitleContentCode": "360 độ view",
									"attributeIconName": "1",
									"attributeValueTitle": null,
									"attributeValueTitleContentCode": "e117d96d-1f20-4a7f-aa7b-aa9b72526647",
									"attributeValue": "https://youtu.be/dJCeMv8vyBE",
									"attributeValueContentCode": "333f0e84-d47a-447d-9079-4e1708effa0c",
									"attributeValueIconName": null,
									"attributeValueTitleContents": [],
									"attributeValueContents": [
										{
											"id": "0d964f9c-47ed-4018-b434-3eb7fadee987",
											"code": "333f0e84-d47a-447d-9079-4e1708effa0c",
											"value": "https://youtu.be/dJCeMv8vyBE",
											"language": "VN",
											"status": 1,
										},
									],
									"projectAttributePhotos": null
								}
							],
							"titleContents": []
						}
					],
					"nameContents": [
						{
							"id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
							"code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
							"value": "Furama Resort Đà Nẵng",
							"language": "VN",
							"status": 1,
						},
					]
				}
				const img = data.projectPhotos || [];
				const listImg: Array<any> = [];
				img.forEach((element: any) => {
					listImg.push({
						src: element.photoUrl || Resources.Images.DEFAULT
					})
				});
				// const params = new URLSearchParams;
				// params.append('Orderby', 'project.isHighlight DESC, project.constructionStatus ASC')
				// params.append('PageSize', '10')
				// params.append('types', data.type)
				const apartments: any = [
					{
						"id": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
						"status": 0,
						"type": 0,
						"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
						"code": "HF",
						"projectName": "Furama Resort Đà Nẵng",
						"projectNameContentCode": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
						"templateCode": null,
						"constructionStatus": 0,
						"isHighlight": 1,
						"name": "Pool Villas",
						"nameContentCode": "71354908-b43d-4691-abe1-48cdab562e7d",
						"floor": 0,
						"area": 400,
						"bedroom": 4,
						"bathroom": 5,
						"orientation": 1,
						"width": 20,
						"long": 20,
						"carpetArea": 388,
						"buildupArea": 368,
						"listPrice": 6000000000,
						"depositPrice": 999999998,
						"searchText": "Pool Villas",
						"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
						"addressId": "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
						"provinceCode": "48",
						"provinceName": "Thành phố Đà Nẵng",
						"latitude": null,
						"longitude": null,
						"addressFull": "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
						"apartmentPhotos": [
							{
								"id": "69e61acc-40de-42d0-94d8-b6a3ef5c8036",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "8144882f-e326-4751-812e-073a1e9864a9",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-5178068.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "6d6c959d-d887-49ca-a61a-e51fc001efce",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "ecc81379-eaf4-495c-adaf-04c884ab9bc0",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-4682110.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "98116183-c386-49b5-9107-2cc3c0a35003",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "45857351-c643-4102-a8ec-3699aabd9723",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-cleyder-duque-3637739.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "b79ba35d-136e-491d-ba7e-003209d5e575",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "643eb661-cb79-4f10-941d-c5505274100d",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-5178080.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							}
						],
						"nameContents": [
							{
								"id": "6d758b27-c1ba-4f15-b7f2-e537bea5440b",
								"code": "71354908-b43d-4691-abe1-48cdab562e7d",
								"value": "Pool Villas",
								"language": "VN",
								"status": 1,
							},
						],
						"projectNameContents": [
							{
								"id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
								"code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
								"value": "Furama Resort Đà Nẵng",
								"language": "VN",
								"status": 1,
							},
						]
					},
					{
						"id": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
						"status": 0,
						"type": 0,
						"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
						"code": "HF",
						"projectName": "Furama Resort Đà Nẵng",
						"projectNameContentCode": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
						"templateCode": null,
						"constructionStatus": 0,
						"isHighlight": 1,
						"name": "Pool Villas",
						"nameContentCode": "71354908-b43d-4691-abe1-48cdab562e7d",
						"floor": 0,
						"area": 400,
						"bedroom": 4,
						"bathroom": 5,
						"orientation": 1,
						"width": 20,
						"long": 20,
						"carpetArea": 388,
						"buildupArea": 368,
						"listPrice": 6000000000,
						"depositPrice": 999999998,
						"searchText": "Pool Villas",
						"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
						"addressId": "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
						"provinceCode": "48",
						"provinceName": "Thành phố Đà Nẵng",
						"latitude": null,
						"longitude": null,
						"addressFull": "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
						"apartmentPhotos": [
							{
								"id": "69e61acc-40de-42d0-94d8-b6a3ef5c8036",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "8144882f-e326-4751-812e-073a1e9864a9",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-5178068.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "6d6c959d-d887-49ca-a61a-e51fc001efce",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "ecc81379-eaf4-495c-adaf-04c884ab9bc0",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-4682110.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "98116183-c386-49b5-9107-2cc3c0a35003",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "45857351-c643-4102-a8ec-3699aabd9723",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-cleyder-duque-3637739.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "b79ba35d-136e-491d-ba7e-003209d5e575",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "643eb661-cb79-4f10-941d-c5505274100d",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-5178080.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							}
						],
						"nameContents": [
							{
								"id": "6d758b27-c1ba-4f15-b7f2-e537bea5440b",
								"code": "71354908-b43d-4691-abe1-48cdab562e7d",
								"value": "Pool Villas",
								"language": "VN",
								"status": 1,
							},
						],
						"projectNameContents": [
							{
								"id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
								"code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
								"value": "Furama Resort Đà Nẵng",
								"language": "VN",
								"status": 1,
							},
						]
					},
					{
						"id": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
						"status": 0,
						"type": 0,
						"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
						"code": "HF",
						"projectName": "Furama Resort Đà Nẵng",
						"projectNameContentCode": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
						"templateCode": null,
						"constructionStatus": 0,
						"isHighlight": 1,
						"name": "Pool Villas",
						"nameContentCode": "71354908-b43d-4691-abe1-48cdab562e7d",
						"floor": 0,
						"area": 400,
						"bedroom": 4,
						"bathroom": 5,
						"orientation": 1,
						"width": 20,
						"long": 20,
						"carpetArea": 388,
						"buildupArea": 368,
						"listPrice": 6000000000,
						"depositPrice": 999999998,
						"searchText": "Pool Villas",
						"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
						"addressId": "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
						"provinceCode": "48",
						"provinceName": "Thành phố Đà Nẵng",
						"latitude": null,
						"longitude": null,
						"addressFull": "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
						"apartmentPhotos": [
							{
								"id": "69e61acc-40de-42d0-94d8-b6a3ef5c8036",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "8144882f-e326-4751-812e-073a1e9864a9",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-5178068.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "6d6c959d-d887-49ca-a61a-e51fc001efce",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "ecc81379-eaf4-495c-adaf-04c884ab9bc0",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-4682110.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "98116183-c386-49b5-9107-2cc3c0a35003",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "45857351-c643-4102-a8ec-3699aabd9723",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-cleyder-duque-3637739.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							},
							{
								"id": "b79ba35d-136e-491d-ba7e-003209d5e575",
								"apartmentId": "a10dca68-11be-48db-891a-b5f3ab7ad91c",
								"photoId": "643eb661-cb79-4f10-941d-c5505274100d",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/pexels-curtis-adams-5178080.jpg",
								"displayOrder": 0,
								"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
							}
						],
						"nameContents": [
							{
								"id": "6d758b27-c1ba-4f15-b7f2-e537bea5440b",
								"code": "71354908-b43d-4691-abe1-48cdab562e7d",
								"value": "Pool Villas",
								"language": "VN",
								"status": 1,
							},
						],
						"projectNameContents": [
							{
								"id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
								"code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
								"value": "Furama Resort Đà Nẵng",
								"language": "VN",
								"status": 1,
							},
						]
					},
				];
				const projects: any = [
					{
						"id": "45a67f60-c5ed-4c31-a8bb-581281233097",
						"type": 1,
						"status": 0,
						"isHighlight": 1,
						"name": "Furama Resort Đà Nẵng",
						"nameContentCode": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
						"siteArea": 30000,
						"constructionArea": 0,
						"constructionStatus": 0,
						"buildingDensity": 0,
						"apartment": 0,
						"villa": 0,
						"hotel": 0,
						"launchDate": 1627656323,
						"bookingPrice": 1774045,
						"scale": "198 phòng nghỉ",
						"owner": "",
						"constructor": "",
						"architect": "",
						"searchText": "Furama Resort Đa Nang",
						"minPrice": 16316.705,
						"maxPrice": 15000000,
						"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
						"addressId": "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
						"provinceCode": "48",
						"provinceName": "Thành phố Đà Nẵng",
						"districtCode": "494",
						"districtName": "",
						"wardCode": null,
						"wardName": null,
						"latitude": null,
						"longitude": null,
						"addressFull": "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
						"attributes": [],
						"projectPhotos": [
							{
								"id": "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "1414acdc-99ee-4305-a7ac-3fdb614907b6",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1414acdc-99ee-4305-a7ac-3fdb614907b6.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "3b6200da-43d1-4d51-afdd-56f275fb2591",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/b01ab102-fad6-4d82-b383-8d9cd79ee7cf.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "9685a0af-18fa-41e1-b768-6e450724e9ca",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/a977c07c-4fb2-4d96-a866-d39d7d8545a8.jpg",
								"displayOrder": 0,
								"organizationId": null
							}
						],
						"nameContents": [
							{
								"id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
								"code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
								"value": "Furama Resort Đà Nẵng",
								"language": "VN",
								"status": 1,
							},
						]
					},
					{
						"id": "45a67f60-c5ed-4c31-a8bb-581281233097",
						"type": 1,
						"status": 0,
						"isHighlight": 1,
						"name": "Furama Resort Đà Nẵng",
						"nameContentCode": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
						"siteArea": 30000,
						"constructionArea": 0,
						"constructionStatus": 0,
						"buildingDensity": 0,
						"apartment": 0,
						"villa": 0,
						"hotel": 0,
						"launchDate": 1627656323,
						"bookingPrice": 1774045,
						"scale": "198 phòng nghỉ",
						"owner": "",
						"constructor": "",
						"architect": "",
						"searchText": "Furama Resort Đa Nang",
						"minPrice": 16316.705,
						"maxPrice": 15000000,
						"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
						"addressId": "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
						"provinceCode": "48",
						"provinceName": "Thành phố Đà Nẵng",
						"districtCode": "494",
						"districtName": "",
						"wardCode": null,
						"wardName": null,
						"latitude": null,
						"longitude": null,
						"addressFull": "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
						"attributes": [],
						"projectPhotos": [
							{
								"id": "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "1414acdc-99ee-4305-a7ac-3fdb614907b6",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1414acdc-99ee-4305-a7ac-3fdb614907b6.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "3b6200da-43d1-4d51-afdd-56f275fb2591",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/b01ab102-fad6-4d82-b383-8d9cd79ee7cf.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "9685a0af-18fa-41e1-b768-6e450724e9ca",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/a977c07c-4fb2-4d96-a866-d39d7d8545a8.jpg",
								"displayOrder": 0,
								"organizationId": null
							}
						],
						"nameContents": [
							{
								"id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
								"code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
								"value": "Furama Resort Đà Nẵng",
								"language": "VN",
								"status": 1,
							},
						]
					},
					{
						"id": "45a67f60-c5ed-4c31-a8bb-581281233097",
						"type": 1,
						"status": 0,
						"isHighlight": 1,
						"name": "Furama Resort Đà Nẵng",
						"nameContentCode": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
						"siteArea": 30000,
						"constructionArea": 0,
						"constructionStatus": 0,
						"buildingDensity": 0,
						"apartment": 0,
						"villa": 0,
						"hotel": 0,
						"launchDate": 1627656323,
						"bookingPrice": 1774045,
						"scale": "198 phòng nghỉ",
						"owner": "",
						"constructor": "",
						"architect": "",
						"searchText": "Furama Resort Đa Nang",
						"minPrice": 16316.705,
						"maxPrice": 15000000,
						"organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
						"addressId": "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
						"provinceCode": "48",
						"provinceName": "Thành phố Đà Nẵng",
						"districtCode": "494",
						"districtName": "",
						"wardCode": null,
						"wardName": null,
						"latitude": null,
						"longitude": null,
						"addressFull": "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
						"attributes": [],
						"projectPhotos": [
							{
								"id": "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "1414acdc-99ee-4305-a7ac-3fdb614907b6",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1414acdc-99ee-4305-a7ac-3fdb614907b6.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "3b6200da-43d1-4d51-afdd-56f275fb2591",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/b01ab102-fad6-4d82-b383-8d9cd79ee7cf.jpg",
								"displayOrder": 0,
								"organizationId": null
							},
							{
								"id": "9685a0af-18fa-41e1-b768-6e450724e9ca",
								"projectId": "45a67f60-c5ed-4c31-a8bb-581281233097",
								"photoId": "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
								"photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/a977c07c-4fb2-4d96-a866-d39d7d8545a8.jpg",
								"displayOrder": 0,
								"organizationId": null
							}
						],
						"nameContents": [
							{
								"id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
								"code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
								"value": "Furama Resort Đà Nẵng",
								"language": "VN",
								"status": 1,
							},
						]
					},
				]
				this.setModel({
					id: id,
					project: data,
					listImg,
					projects,
					apartments,
				});
			} catch (error) {
			}
			window.addEventListener("scroll", () => this.showProperty(this));
		}
	}


	scrollToBottom = (id: string) => {
		const headerHeight = 100; /* PUT HEADER HEIGHT HERE */
		const scrollToEl = document.getElementById(id);
		if (scrollToEl) {
			const topOfElement = window.pageYOffset + scrollToEl!.getBoundingClientRect().top - headerHeight;
			window.scroll({ top: topOfElement, behavior: "smooth" });
		}
	}

	showProperty(seft: any) {

		const scrollToEl1 = (document.getElementById('#frame1')?.offsetTop || 8000) - 200;
		const scrollToEl2 = (document.getElementById('#frame2')?.offsetTop || 8000) - 200;
		const scrollToEl3 = (document.getElementById('#frame3')?.offsetTop || 8000) - 200;
		const scrollToEl4 = (document.getElementById('#frame4')?.offsetTop || 8000) - 200;
		const scrollToEl5 = (document.getElementById('#frame5')?.offsetTop || 8000) - 200;
		const scrollToEl6 = (document.getElementById('#frame6')?.offsetTop || 8000) - 200;
		const scrollToEl7 = (document.getElementById('#frame7')?.offsetTop || 8000) - 200;
		const scrollToEl8 = (document.getElementById('#frame8')?.offsetTop || 8000) - 200;

		const buttonPlaceholder = document.getElementById('buttonPlaceholder');
		const header = document.getElementById('header');
		if (buttonPlaceholder) {
			if ((buttonPlaceholder?.getBoundingClientRect().top - (header?.getBoundingClientRect().height || 70)) < 0) {
				this.setModel({
					showButtonDepositHeader: true
				})
			} else {
				if (buttonPlaceholder?.getBoundingClientRect().top > window.screen.height) {
					this.setModel({
						showButtonDepositHeader: true
					})
				} else {
					this.setModel({
						showButtonDepositHeader: false
					})
				}

			}
		}

		if (document.documentElement.scrollTop < scrollToEl1) {
			this.setModel({
				menuIndex: undefined
			})
		}
		if (document.documentElement.scrollTop >= scrollToEl1 && document.documentElement.scrollTop < scrollToEl2) {
			this.setModel({
				menuIndex: 0
			})
		}
		if (document.documentElement.scrollTop >= scrollToEl2 && document.documentElement.scrollTop < scrollToEl3) {
			this.setModel({
				menuIndex: 1
			})
		}
		if (document.documentElement.scrollTop >= scrollToEl3 && document.documentElement.scrollTop < scrollToEl4) {
			this.setModel({
				menuIndex: 2
			})
		}
		if (document.documentElement.scrollTop >= scrollToEl4 && document.documentElement.scrollTop < scrollToEl5) {
			this.setModel({
				menuIndex: 3
			})
		}
		if (document.documentElement.scrollTop >= scrollToEl5 && document.documentElement.scrollTop < scrollToEl6) {
			this.setModel({
				menuIndex: 4
			})
		}
		if (document.documentElement.scrollTop >= scrollToEl6 && document.documentElement.scrollTop < scrollToEl7) {
			this.setModel({
				menuIndex: 5
			})
		}
		if (document.documentElement.scrollTop >= scrollToEl7 && document.documentElement.scrollTop < scrollToEl8) {
			this.setModel({
				menuIndex: 6
			})
		}
		if (document.documentElement.scrollTop >= scrollToEl8) {
			this.setModel({
				menuIndex: 7
			})
		}
		if (window.pageYOffset > 200) {
			seft.setModel({
				showProperty: true
			})
		} else {
			seft.setModel({
				showProperty: false
			})
		}
	}

	getValue = (key: string, displayType: number) => {
		const project: IProject = this.model.project || {} as IProject;
		switch (key) {
			case Constants.VALUE_KEY.TITLE:
				console.log("object", Helpers.getAttributes(project.attributes, displayType).title);
				return Helpers.getAttributes(project.attributes, displayType).title ? Helpers.getAttributes(project.attributes, displayType).title : Helpers.getAttributes(project.attributes, displayType).titleContentCode;
			case Constants.VALUE_KEY.ATTR_VALUE:
				const items = Helpers.getSubAttributes(
					Helpers.getAttributes(project.attributes, displayType).projectAttributes, displayType
				)
				const name = Helpers.getName(items.attributeValue, items.attributeValueContents)
				return name;
			default:
				break;
		}
	}

	getValueContent = (key: string, items: IProjectAttribute) => {
		switch (key) {
			case Constants.VALUE_KEY.ATTR_VALUE_TITLE:
				return items.attributeValueTitle ? items.attributeValueTitle : items?.attributeValueTitleContents?.find(el => el.language === Constants.Language.VN)?.value

			case Constants.VALUE_KEY.ATTR_VALUE:
				return items.attributeValue ? items.attributeValue : items?.attributeValueContents?.find(el => el.language === Constants.Language.VN)?.value
		}
	}

	onsubmitAdvisory = async () => {
		let isValid = true;
		if (!this.model.fullName?.value) {
			this.setModel({
				fullName: { error: Strings.Validation.REQUIRED }
			})
			isValid = false
		}
		if (!this.model.email?.value) {
			this.setModel({
				email: { error: Strings.Validation.REQUIRED }
			})
			isValid = false
		} else if (!Helpers.checkValidateEmail(this.model.email?.value)) {
			this.setModel({
				email: { error: Strings.Validation.EMAIL_ADDRESS }
			})
			isValid = false;
		}
		if (!this.model.phoneNumber?.value) {
			this.setModel({
				phoneNumber: { error: Strings.Validation.REQUIRED }
			})
			isValid = false
		} else if (!Helpers.checkValidatePhone(this.model.phoneNumber?.value || '')) {
			this.setModel({
				phoneNumber: { error: Strings.Validation.PHONE_NUMBER }
			})
			isValid = false;
		}
		if (isValid) {
			const data = {
				type: 1,
				firstName: this.model.fullName?.value || '',
				phoneNumber: this.model.phoneNumber?.value,
				email: this.model.email?.value,
				projectId: this.model.project?.id,
				description: this.model.description?.value,
			};
		}
	}
}
export default ProjectController;
import { Helpers } from "../../../commons/utils";
import { Screens } from "../../../constants";
import { GlobalState } from "../../../stores/GlobalState";
import ListingModel from "../../models/ListingModel";
import { HomeService } from "../../services";
import ListingService from "../../services/ListingService";
import { BaseController } from "../base";

class ListingProjectController extends BaseController<ListingModel, ListingService> {
    ref: any;
    constructor(props: any) {
        super(props, ListingModel, ListingService);
    }
    async onStarted() {
        try {
            await this.getDetail();            
        } catch (error) {
            this.hideLoading()
        }
    }

    onUpdate () {
        if(window.location.search !== this.model.searchUrl){
            this.setModel({searchUrl: window.location.search})
            this.getDetail();      
        }
    }
    getDetail = async ()=>{
        const {province} = this.getUrlParams(["province"]);
        const {target} = this.getUrlParams(["target"]);
        const {types} = this.getUrlParams(["types"]);
        const {status} = this.getUrlParams(["status"]);
        const {minPrice} = this.getUrlParams(["minPrice"]);
        const {maxPrice} = this.getUrlParams(["maxPrice"]);
        const {minArea} = this.getUrlParams(["minArea"]);
        const {maxArea} = this.getUrlParams(["maxArea"]);
        const {district} = this.getUrlParams(["district"]);

        this.setModel({
            types: {value: types} ,
            province: {value: province},
            status: {value:status},
            target: {value: target},
            minPrice: parseInt(minPrice),
            maxPrice: parseInt(maxPrice),
            minArea:  parseInt(minArea),
            maxArea: parseInt(maxArea),
            districtId: district
        })
        await this.getProject();
    }

    getProject = async () => {
        try {
            this.showLoading();
            const resultProject: any = [
                {
                    "id": "3e37d691-ff4b-458c-a891-57b00b6af48c",
                    "type": 1,
                    "status": 0,
                    "isHighlight": 0,
                    "name": "Pax Ana Doc Let",
                    "nameContentCode": "c18d5a1e-963e-4324-951d-e15b750c3ee1",
                    "siteArea": 210000,
                    "constructionArea": 0,
                    "constructionStatus": 0,
                    "buildingDensity": 0,
                    "apartment": 0,
                    "villa": 0,
                    "hotel": 0,
                    "launchDate": 1627741022,
                    "bookingPrice": 999999998,
                    "scale": "54 Villas",
                    "owner": "",
                    "constructor": "",
                    "architect": "",
                    "searchText": "Pax Ana Doc Let",
                    "minPrice": 0,
                    "maxPrice": 0,
                    "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                    "addressId": "d938d951-2850-40f7-b8a3-1526ae92a95c",
                    "provinceCode": "56",
                    "provinceName": "Khánh Hòa",
                    "districtCode": "568",
                    "districtName": "",
                    "wardCode": null,
                    "wardName": null,
                    "latitude": null,
                    "longitude": null,
                    "addressFull": "Dốc Lết - Nha Trang ",
                    "attributes": [],
                    "projectPhotos": [
                        {
                            "id": "7408e843-472d-4941-a972-58d69e98f9e8",
                            "projectId": "3e37d691-ff4b-458c-a891-57b00b6af48c",
                            "photoId": "07bde4ff-3d57-4928-b8c0-efc852da7e40",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (2).png",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "da56c86f-dd06-4f68-979d-f9a9b2e01ba8",
                            "projectId": "3e37d691-ff4b-458c-a891-57b00b6af48c",
                            "photoId": "9bfaadcb-d4cf-4c48-8edb-dfcc50c2aef8",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (3).png",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "f5fb266f-47f8-45f1-b819-1bcd1e2b3611",
                            "projectId": "3e37d691-ff4b-458c-a891-57b00b6af48c",
                            "photoId": "5e56c277-04b1-4902-bb08-8fb32a1a0882",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (1).png",
                            "displayOrder": 0,
                            "organizationId": null
                        }
                    ],
                    "nameContents": [
                        {
                            "id": "3c39b8b0-726c-4f14-a0a3-82ffd4ffe1e1",
                            "code": "c18d5a1e-963e-4324-951d-e15b750c3ee1",
                            "value": "Pax Ana Doc Let",
                            "language": "VN",
                            "status": 1,
                            "createTime": 1627664819,
                            "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                            "updateTime": 1628237110,
                            "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                        },
                    ]
                },
                {
                    "id": "0b1abf1b-baa0-433b-90ba-d08adefcaaba",
                    "type": 1,
                    "status": 0,
                    "isHighlight": 0,
                    "name": "Evason Ana Mandara Nha Trang",
                    "nameContentCode": "2d451859-7f98-4ddc-9a32-3a2ae4169da8",
                    "siteArea": 0,
                    "constructionArea": 0,
                    "constructionStatus": 2,
                    "buildingDensity": 0,
                    "apartment": 0,
                    "villa": 0,
                    "hotel": 0,
                    "launchDate": 1627738841,
                    "bookingPrice": 1000000000,
                    "scale": "74 Villas",
                    "owner": "",
                    "constructor": "",
                    "architect": "",
                    "searchText": "Evason Ana Mandara Nha Trang",
                    "minPrice": 0,
                    "maxPrice": 0,
                    "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                    "addressId": "618a87f7-141f-4efd-a662-61fbdd9e12e9",
                    "provinceCode": "56",
                    "provinceName": "Khánh Hòa",
                    "districtCode": "568",
                    "districtName": "Thành phố Nha Trang",
                    "wardCode": null,
                    "wardName": null,
                    "latitude": null,
                    "longitude": null,
                    "addressFull": "",
                    "attributes": [],
                    "projectPhotos": [
                        {
                            "id": "604aa242-a9b5-41d2-aa53-3ffc9b1cdf99",
                            "projectId": "0b1abf1b-baa0-433b-90ba-d08adefcaaba",
                            "photoId": "6c2e9565-4073-4342-a8bc-2126db8ae2de",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (13).png",
                            "displayOrder": 0,
                            "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                        },
                        {
                            "id": "863b5ed2-ba6f-4c1a-b82a-d3f5c5f8523d",
                            "projectId": "0b1abf1b-baa0-433b-90ba-d08adefcaaba",
                            "photoId": "10e5ea98-5a32-43f6-a2a5-ba43d32cf6a4",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (12).png",
                            "displayOrder": 0,
                            "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                        },
                        {
                            "id": "9f011351-9034-43e6-84f6-ed8b4638143b",
                            "projectId": "0b1abf1b-baa0-433b-90ba-d08adefcaaba",
                            "photoId": "ca47e2cf-76c5-4048-99c4-5d2fda060d2c",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (11).png",
                            "displayOrder": 0,
                            "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                        }
                    ],
                    "nameContents": [
                        {
                            "id": "d30ff459-54bb-4e26-9cbf-0ce729140704",
                            "code": "2d451859-7f98-4ddc-9a32-3a2ae4169da8",
                            "value": "Evason Ana Mandara Nha Trang",
                            "language": "VN",
                            "status": 1,
                            "createTime": 1627634014,
                            "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                            "updateTime": 1627739102,
                            "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                        },
                    ]
                },
                {
                    "id": "793b1f4d-02cb-4400-ada5-b00e79f81031",
                    "type": 1,
                    "status": 0,
                    "isHighlight": 0,
                    "name": "Ariyana Beach Resort & Suites",
                    "nameContentCode": "283ca1fb-208d-442b-ba06-7563eba76bc2",
                    "siteArea": 270000,
                    "constructionArea": 0,
                    "constructionStatus": 2,
                    "buildingDensity": 0,
                    "apartment": 0,
                    "villa": 0,
                    "hotel": 0,
                    "launchDate": 1627739240,
                    "bookingPrice": 9999999998,
                    "scale": "1400 căn hộ",
                    "owner": "",
                    "constructor": "",
                    "architect": "",
                    "searchText": "Ariyana Beach Resort & Suites",
                    "minPrice": 0,
                    "maxPrice": 0,
                    "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                    "addressId": "cb49a079-f111-4777-8812-7244e3cb77bd",
                    "provinceCode": "48",
                    "provinceName": "Đà Nẵng",
                    "districtCode": "",
                    "districtName": "",
                    "wardCode": null,
                    "wardName": null,
                    "latitude": null,
                    "longitude": null,
                    "addressFull": "",
                    "attributes": [],
                    "projectPhotos": [
                        {
                            "id": "0e96320d-5902-4401-a682-3da9d1af757d",
                            "projectId": "793b1f4d-02cb-4400-ada5-b00e79f81031",
                            "photoId": "217a621b-383c-4716-8d8b-20a5206b83cd",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (9).png",
                            "displayOrder": 0,
                            "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                        },
                        {
                            "id": "0eccc148-2fd0-468f-b3cc-bc0863032b24",
                            "projectId": "793b1f4d-02cb-4400-ada5-b00e79f81031",
                            "photoId": "5d4b8b68-d44f-47bf-8949-815aaa251e75",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (10).png",
                            "displayOrder": 0,
                            "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                        },
                        {
                            "id": "f6498b03-b9b6-4332-be6d-84bb83c5fbb1",
                            "projectId": "793b1f4d-02cb-4400-ada5-b00e79f81031",
                            "photoId": "b7b424b0-5530-4bbd-8593-4fcce8d5a454",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/imgvtool (8).png",
                            "displayOrder": 0,
                            "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                        }
                    ],
                    "nameContents": [
                        {
                            "id": "9047bed7-2433-4bea-87b4-adda7ce5e995",
                            "code": "283ca1fb-208d-442b-ba06-7563eba76bc2",
                            "value": "Ariyana Beach Resort & Suites",
                            "language": "VN",
                            "status": 1,
                            "createTime": 1627633402,
                            "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                            "updateTime": 1627739445,
                            "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                        },
                    ]
                },
                {
                    "id": "b04c7e35-8005-4253-afff-feea0ab7f0b6",
                    "type": 0,
                    "status": 0,
                    "isHighlight": 0,
                    "name": "Dragon Hill Residence and Suites ",
                    "nameContentCode": "87705b0a-6bf6-43fc-aeab-de20221ce116",
                    "siteArea": 58622,
                    "constructionArea": 0,
                    "constructionStatus": 0,
                    "buildingDensity": 0,
                    "apartment": 0,
                    "villa": 0,
                    "hotel": 0,
                    "launchDate": 1627740207,
                    "bookingPrice": 99999998,
                    "scale": "2 tòa nhà, 450 căn hộ",
                    "owner": "",
                    "constructor": "",
                    "architect": "",
                    "searchText": "Dragon Hill Residence and Suites ",
                    "minPrice": 0,
                    "maxPrice": 0,
                    "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                    "addressId": "ca6e0a65-0c30-44b0-9d55-b623a6b0c7ef",
                    "provinceCode": "79",
                    "provinceName": "Hồ Chí Minh",
                    "districtCode": "786",
                    "districtName": "Huyện Nhà Bè",
                    "wardCode": null,
                    "wardName": null,
                    "latitude": null,
                    "longitude": null,
                    "addressFull": "--",
                    "attributes": [],
                    "projectPhotos": [
                        {
                            "id": "13636fde-1f73-42c6-a25c-04efac9107cb",
                            "projectId": "b04c7e35-8005-4253-afff-feea0ab7f0b6",
                            "photoId": "aa47e080-7110-4747-8c63-aea2d2d3de8e",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/Trang 48_DRAGON HILL RESIDENCE  SUITE.jpg",
                            "displayOrder": 0,
                            "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                        },
                        {
                            "id": "37673125-45ec-4da2-a236-10d046edd0ec",
                            "projectId": "b04c7e35-8005-4253-afff-feea0ab7f0b6",
                            "photoId": "1b23428a-9526-4921-9d96-f5d2b95e21ea",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/THY_1727 (press).jpg",
                            "displayOrder": 0,
                            "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                        },
                        {
                            "id": "40ab4329-7b00-4fe6-8ca9-0ac9f7e808c2",
                            "projectId": "b04c7e35-8005-4253-afff-feea0ab7f0b6",
                            "photoId": "fd615093-2df7-49f5-9fde-cef61d6c47d1",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/THY_1711-HDR.jpg",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "5271d530-d0d6-4c74-9d27-a29bd1517fc1",
                            "projectId": "b04c7e35-8005-4253-afff-feea0ab7f0b6",
                            "photoId": "464fb418-e873-420d-9ae6-6f565c71fc76",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/THY_1703.jpg",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "7395a3f7-8567-41fb-a362-de8950191a29",
                            "projectId": "b04c7e35-8005-4253-afff-feea0ab7f0b6",
                            "photoId": "41d2429d-3781-4c8b-ab61-2a6e3cfc1578",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/Trang 48_DRAGON HILL RESIDENCE  SUITE.jpg",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "c2130ef8-fb15-4b33-bc1e-4c4a36e98eb6",
                            "projectId": "b04c7e35-8005-4253-afff-feea0ab7f0b6",
                            "photoId": "40698583-18b9-4bca-ab19-9ba122234d5b",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/THY_1727 (press).jpg",
                            "displayOrder": 0,
                            "organizationId": null
                        }
                    ],
                    "nameContents": [
                        {
                            "id": "2a4594df-f262-4e22-9c0a-dce6fedab368",
                            "code": "87705b0a-6bf6-43fc-aeab-de20221ce116",
                            "value": "Dragon Hill Residence and Suites ",
                            "language": "VN",
                            "status": 1,
                        },
                    ]
                },
                {
                    "id": "5f5b1b05-9adb-43c3-865a-1b10a442df58",
                    "type": 3,
                    "status": 0,
                    "isHighlight": 0,
                    "name": "Splendora",
                    "nameContentCode": "9e0a4627-d0b7-4ca4-ab4a-90580cbaa455",
                    "siteArea": 264130000,
                    "constructionArea": 0,
                    "constructionStatus": 0,
                    "buildingDensity": 0,
                    "apartment": 0,
                    "villa": 0,
                    "hotel": 0,
                    "launchDate": 1627740439,
                    "bookingPrice": 999999997,
                    "scale": "6.440 căn hộ, 1.311 căn biệt thự ",
                    "owner": "",
                    "constructor": "",
                    "architect": "",
                    "searchText": "Splendora",
                    "minPrice": 0,
                    "maxPrice": 0,
                    "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                    "addressId": "be5cb75a-4976-47f0-a290-504090f8651e",
                    "provinceCode": "01",
                    "provinceName": "Hà Nội",
                    "districtCode": "274",
                    "districtName": "Huyện Hoài Đức",
                    "wardCode": null,
                    "wardName": null,
                    "latitude": null,
                    "longitude": null,
                    "addressFull": "Đường Đại lộ Thăng Long, Xã An Khánh, Hoài Đức, Hà Nội",
                    "attributes": [],
                    "projectPhotos": [
                        {
                            "id": "22369e76-a9b4-492a-b2f7-89fe925f6fc2",
                            "projectId": "5f5b1b05-9adb-43c3-865a-1b10a442df58",
                            "photoId": "01453c29-4366-47dd-b72e-1167592a5e6c",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1200-x-700-splendora-01-01.png",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "59460bf1-426d-4436-813a-e3ff868d5f7e",
                            "projectId": "5f5b1b05-9adb-43c3-865a-1b10a442df58",
                            "photoId": "51c6cf96-ad42-4f24-97c3-97c819f8f3aa",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/DSC_0408.JPG",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "63641cc3-ec2d-4349-b50c-7fa1403d8b81",
                            "projectId": "5f5b1b05-9adb-43c3-865a-1b10a442df58",
                            "photoId": "2d2d1372-228d-4fa4-8452-ad8054bcd2ae",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1200-x-700-splendora-1-01-01.png",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "ca547c92-915a-4aca-81ac-f08c58e97885",
                            "projectId": "5f5b1b05-9adb-43c3-865a-1b10a442df58",
                            "photoId": "e7db0aac-c5db-4608-aad5-711fd63d3c6c",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/1200-x-700-splendora-1-01-30af34.png",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "fd3112c9-66b3-4f5a-af79-608629214f54",
                            "projectId": "5f5b1b05-9adb-43c3-865a-1b10a442df58",
                            "photoId": "d0f78866-b82d-445b-84eb-40cbdbdd4abe",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/LNOM7926.JPG",
                            "displayOrder": 0,
                            "organizationId": null
                        }
                    ],
                    "nameContents": [
                        {
                            "id": "ae0435b8-8b0b-433d-b578-9498859dec74",
                            "code": "9e0a4627-d0b7-4ca4-ab4a-90580cbaa455",
                            "value": "Splendora",
                            "language": "VN",
                            "status": 1,
                        },
                    ]
                },
                {
                    "id": "60f6cd13-eeb0-4327-b5a0-6c889fd6074f",
                    "type": 1,
                    "status": 0,
                    "isHighlight": 1,
                    "name": " Ana Mandara Cam Ranh",
                    "nameContentCode": "e7c09ae8-6daf-4d62-ace5-a62b5815ed83",
                    "siteArea": 290000,
                    "constructionArea": 0,
                    "constructionStatus": 0,
                    "buildingDensity": 0,
                    "apartment": 0,
                    "villa": 0,
                    "hotel": 0,
                    "launchDate": 1627740685,
                    "bookingPrice": 100000000,
                    "scale": "--",
                    "owner": "",
                    "constructor": "",
                    "architect": "",
                    "searchText": " Ana Mandara Cam Ranh",
                    "minPrice": 0,
                    "maxPrice": 0,
                    "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                    "addressId": "1af4f8e9-a6a5-462a-8082-a496712f7eb4",
                    "provinceCode": "56",
                    "provinceName": "Khánh Hòa",
                    "districtCode": "569",
                    "districtName": "Thành phố Cam Ranh",
                    "wardCode": null,
                    "wardName": null,
                    "latitude": null,
                    "longitude": null,
                    "addressFull": "Cam Ranh - Khánh Hòa",
                    "attributes": [],
                    "projectPhotos": [
                        {
                            "id": "56a5729d-4a15-4dfe-91b4-edfbedc443cc",
                            "projectId": "60f6cd13-eeb0-4327-b5a0-6c889fd6074f",
                            "photoId": "917535cc-02e1-4f27-a1fc-66acf8921ed4",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/INTRO (1).png",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "c392d8f2-2666-4779-be85-87708d6260ba",
                            "projectId": "60f6cd13-eeb0-4327-b5a0-6c889fd6074f",
                            "photoId": "eb7800a6-40b3-48c8-b264-5d26fe393514",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/INTRO (0).png",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "f2b85553-2764-4221-ae61-a7012f24ba9b",
                            "projectId": "60f6cd13-eeb0-4327-b5a0-6c889fd6074f",
                            "photoId": "fb68d565-6510-4619-a2ef-82f204a559ce",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/INTRO (2).png",
                            "displayOrder": 0,
                            "organizationId": null
                        }
                    ],
                    "nameContents": [
                        {
                            "id": "63006f61-ced9-465a-96c9-29ecf5e7c337",
                            "code": "e7c09ae8-6daf-4d62-ace5-a62b5815ed83",
                            "value": " Ana Mandara Cam Ranh",
                            "language": "VN",
                            "status": 1,
                        },
                    ]
                },
                {
                    "id": "924c8d9f-ad8a-476c-b3d3-7c430d185462",
                    "type": 1,
                    "status": 0,
                    "isHighlight": 1,
                    "name": "L’Alya Ninh Van Bay",
                    "nameContentCode": "073db3e0-b8af-44dd-b90d-ed570c0f96df",
                    "siteArea": 400000,
                    "constructionArea": 0,
                    "constructionStatus": 0,
                    "buildingDensity": 0,
                    "apartment": 0,
                    "villa": 0,
                    "hotel": 0,
                    "launchDate": 1627741567,
                    "bookingPrice": 100000000,
                    "scale": "Diện tích: 40ha, 33 biệt thự, 125 villas",
                    "owner": "",
                    "constructor": "",
                    "architect": "",
                    "searchText": "L’Alya Ninh Van Bay",
                    "minPrice": 0,
                    "maxPrice": 0,
                    "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                    "addressId": "39ff12ca-3d19-40d7-a834-576017687483",
                    "provinceCode": "56",
                    "provinceName": "Khánh Hòa",
                    "districtCode": "572",
                    "districtName": "Thị xã Ninh Hòa",
                    "wardCode": null,
                    "wardName": null,
                    "latitude": null,
                    "longitude": null,
                    "addressFull": " Ninh Vân, Ninh Hòa, TP.Khánh Hòa",
                    "attributes": [],
                    "projectPhotos": [
                        {
                            "id": "1433f668-beb7-4bb0-9718-caebb489da77",
                            "projectId": "924c8d9f-ad8a-476c-b3d3-7c430d185462",
                            "photoId": "58399c0a-9f8a-4f2e-afe9-c54888410480",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/An Lam Restaurant 1.jpg",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "41ec2d52-5549-4837-9d88-e1a20bee1112",
                            "projectId": "924c8d9f-ad8a-476c-b3d3-7c430d185462",
                            "photoId": "1d018fae-f825-4a65-a030-6d284bb5c838",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/Main_Restaurant_and_Jetty.jpg",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "42769344-6868-4b51-9cd3-fbed3679a057",
                            "projectId": "924c8d9f-ad8a-476c-b3d3-7c430d185462",
                            "photoId": "a0c3d8e8-f5cf-4d4c-9c50-ba8201b712bf",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/Main_Pool_&_Sea.jpg",
                            "displayOrder": 0,
                            "organizationId": null
                        },
                        {
                            "id": "c1cfc8ab-8fed-4b54-ad56-9e59f5620a8a",
                            "projectId": "924c8d9f-ad8a-476c-b3d3-7c430d185462",
                            "photoId": "f8a39008-253b-4fa1-bafd-781bf558b255",
                            "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/MASTER_PLAN (2).jpg",
                            "displayOrder": 0,
                            "organizationId": null
                        }
                    ],
                    "nameContents": [
                        {
                            "id": "bbc8c9c1-fe7b-45fa-acf8-1c6a9b27d6b9",
                            "code": "073db3e0-b8af-44dd-b90d-ed570c0f96df",
                            "value": "L’Alya Ninh Van Bay",
                            "language": "VN",
                            "status": 1,
                        }
                    ]
                },
            ];
            this.setModel({
                listProject: resultProject,
                showModelSearch: false,
                showApartment: true,
                currentPage: 1,
                totalPages: 3,
                totalCount: 26
                
            })
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            
        }
       
    }

    removeAttributes(type: number, temp?: any) {
        switch (type) {
            case 0: // provicen
                { this.setModel({
                    target: undefined
                });
                GlobalState.setFilter({
                    ...GlobalState.filterObj, target: null 
                });}
                break
            case 1:
               { this.setModel({
                    province: undefined,
                    districtId: undefined,
                });
                GlobalState.setFilter({
                    ...GlobalState.filterObj, province: null, district: null
                });}
                break
            case 2: //type
                this.setModel({
                    types: {value: undefined}
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, types: null 
                });
                break
            case 3: //status
                this.setModel({
                    status: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, status: null 
                })
                break
            case 4: //price
                this.setModel({
                    minPrice: undefined,
                    maxPrice: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, minPrice: undefined, maxPrice: undefined 
                })
                break
            case 5: //price
                this.setModel({
                    minArea: undefined,
                    maxArea: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, minArea: undefined, maxArea: undefined 
                })
                break
        }

        let params = new URLSearchParams;
        if (GlobalState.filterObj?.province) {
            params.append('province', GlobalState.filterObj?.province)
        }
        if (GlobalState.filterObj?.types) {
            params.append('types', GlobalState.filterObj?.types)
        }
        if (GlobalState.filterObj?.status) {
            params.append('status', GlobalState.filterObj?.status)
        }
        if (GlobalState.filterObj?.line) {
            params.append('line', GlobalState.filterObj?.line)
        }
        this.history.push({
            pathname: Screens.LISTING_PROJECT,
            search: `?${params.toString()}`,
        });
        this.getProject();
    }

    handleChangePagination = async (event: React.ChangeEvent<unknown>, pageNumeber: number)=>{
        this.setModel({
            currentPage :pageNumeber
        })
        this.getProject();
        const scrollToEl = document.getElementById('frameItem');
        if ((window.innerHeight - scrollToEl!.getBoundingClientRect().top) < 300) {
            { window.scrollTo({ top: 400, behavior: 'smooth' }) }
        } else {
            { window.scrollTo({ top: 0, behavior: 'smooth' }) }
        }
    }
}
export default ListingProjectController;
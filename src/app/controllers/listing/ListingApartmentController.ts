import { Helpers, IOptionSelect, IProject, IResult } from "../../../commons/utils";
import { GlobalState } from "../../../stores/GlobalState";
import ListingModel from "../../models/ListingModel";
import { HomeService, ProjectService } from "../../services";
import ListingService from "../../services/ListingService";
import { BaseController } from "../base";

class ListingApartmentController extends BaseController<ListingModel, ListingService> {
    ref: any;
    constructor(props: any) {
        super(props, ListingModel, ListingService);
    }
    onStarted() {
        try {
            this.getDetail()
        } catch (error) {
            
        }
    }
    onUpdate () {
        if(window.location.search !== this.model.searchUrl){
            this.setModel({searchUrl: window.location.search})
            this.getDetail();      
        }
    }
    getDetail = async ()=>{
        const { province } = this.getUrlParams(["province"]);
        const { target } = this.getUrlParams(["target"]);
        const { types } = this.getUrlParams(["types"]);
        const { status } = this.getUrlParams(["status"]);
        const { line } = this.getUrlParams(["line"]);
        const { projectId } = this.getUrlParams(["projectId"]);
        const { minPrice } = this.getUrlParams(["minPrice"]);
        const { maxPrice } = this.getUrlParams(["maxPrice"]);
        const { minArea } = this.getUrlParams(["minArea"]);
        const { maxArea } = this.getUrlParams(["maxArea"]);
        const { district } = this.getUrlParams(["district"]);

        this.setModel({
            province: { value: province },
            status: { value: status },
            line: { value: line },
            types: { value: types },
            projectIdSearch: { value: projectId },
            target: { value: target },
            minPrice: parseInt(minPrice),
            maxPrice: parseInt(maxPrice),
            minArea: parseInt(minArea),
            maxArea: parseInt(maxArea),
            districtId: district,
            // floorSearch: {value: floorSearch},
            // bedroomSearch: {value: bedroomSearch},
            // bathroomSearch: {value: bathroomSearch},
            // maxPriceSearch: {value: maxPriceSearch}, 
            // minPriceSearch: {value: minPriceSearch},
            // expand: expand
        })
        this.getApartment();
    }


    getApartment = async () => {
        try {
            this.showLoading();
            const listApartment: any =  [
                {
                  "id": "426f286a-0f78-4468-b371-a65ced84e6e5",
                  "status": 0,
                  "type": 0,
                  "projectId": "28b3179f-0a39-4936-9cfd-e97422bfe297",
                  "code": "DP.3",
                  "projectName": " DRAGON PARC",
                  "projectNameContentCode": "3b7b175a-fb3d-4cc7-a0c4-b7bb5a301a5c",
                  "templateCode": "0000A",
                  "constructionStatus": 0,
                  "isHighlight": 1,
                  "name": "Biệt thự Dragon Parc 1 ",
                  "nameContentCode": "a9cc42e5-e33a-4161-bae6-3cdb02c9270e",
                  "floor": 0,
                  "area": 168,
                  "bedroom": 4,
                  "bathroom": 3,
                  "orientation": 0,
                  "width": 11,
                  "long": 8,
                  "carpetArea": 168,
                  "buildupArea": 166,
                  "listPrice": 25000000000,
                  "depositPrice": 199999998,
                  "searchText": " DP 1",
                  "organizationId": null,
                  "addressId": "30738ed8-2ae9-4ea4-9a29-527594f603f5",
                  "provinceCode": "79",
                  "provinceName": "Hồ Chí Minh",
                  "latitude": null,
                  "longitude": null,
                  "addressFull": "Hồ Chí Minh",
                  "apartmentPhotos": [
                    {
                      "id": "1d61bcbc-bbf1-434d-b0e0-af27f1457530",
                      "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                      "photoId": "4781fca5-4f43-4c4a-8d30-0ed44404a06c",
                      "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/HOA_3475.jpg",
                      "displayOrder": 0,
                      "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                    },
                    {
                      "id": "381561f5-daed-4ad1-b00e-50523da067cb",
                      "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                      "photoId": "ff28c7f1-2b0e-4f46-9486-cf2847502f0e",
                      "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/DSC_4111.JPG",
                      "displayOrder": 0,
                      "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                    },
                    {
                      "id": "88636517-ff0c-45be-b0db-036c2bb859a7",
                      "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                      "photoId": "fc34dbe5-2cc7-4932-8ded-d13b78bca98f",
                      "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/DSC_4119.JPG",
                      "displayOrder": 0,
                      "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                    }
                  ],
                  "nameContents": [
                    {
                      "id": "78329613-bc8c-4319-a069-f8f41662161a",
                      "code": "a9cc42e5-e33a-4161-bae6-3cdb02c9270e",
                      "value": "Biệt thự Dragon Parc 1 ",
                      "language": "VN",
                      "status": 0,
                      "createTime": 1626097066,
                      "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                      "updateTime": 1627891349,
                      "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                    },
                  ],
                  "projectNameContents": [
                    {
                      "id": "3889e952-e18b-49ad-8644-7d4386469303",
                      "code": "3b7b175a-fb3d-4cc7-a0c4-b7bb5a301a5c",
                      "value": " DRAGON PARC",
                      "language": "VN",
                      "status": 1,
                      "createTime": 1621436402,
                      "createUser": null,
                      "updateTime": 1627748174,
                      "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
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
                      "createTime": 1626071107,
                      "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                      "updateTime": 1628015607,
                      "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                    },
                  ],
                  "projectNameContents": [
                    {
                      "id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
                      "code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                      "value": "Furama Resort Đà Nẵng",
                      "language": "VN",
                      "status": 1,
                      "createTime": 1625824412,
                      "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                      "updateTime": 1631861482,
                      "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                    },
                  ]
                },
                {
                    "id": "426f286a-0f78-4468-b371-a65ced84e6e5",
                    "status": 0,
                    "type": 0,
                    "projectId": "28b3179f-0a39-4936-9cfd-e97422bfe297",
                    "code": "DP.3",
                    "projectName": " DRAGON PARC",
                    "projectNameContentCode": "3b7b175a-fb3d-4cc7-a0c4-b7bb5a301a5c",
                    "templateCode": "0000A",
                    "constructionStatus": 0,
                    "isHighlight": 1,
                    "name": "Biệt thự Dragon Parc 1 ",
                    "nameContentCode": "a9cc42e5-e33a-4161-bae6-3cdb02c9270e",
                    "floor": 0,
                    "area": 168,
                    "bedroom": 4,
                    "bathroom": 3,
                    "orientation": 0,
                    "width": 11,
                    "long": 8,
                    "carpetArea": 168,
                    "buildupArea": 166,
                    "listPrice": 25000000000,
                    "depositPrice": 199999998,
                    "searchText": " DP 1",
                    "organizationId": null,
                    "addressId": "30738ed8-2ae9-4ea4-9a29-527594f603f5",
                    "provinceCode": "79",
                    "provinceName": "Hồ Chí Minh",
                    "latitude": null,
                    "longitude": null,
                    "addressFull": "Hồ Chí Minh",
                    "apartmentPhotos": [
                      {
                        "id": "1d61bcbc-bbf1-434d-b0e0-af27f1457530",
                        "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                        "photoId": "4781fca5-4f43-4c4a-8d30-0ed44404a06c",
                        "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/HOA_3475.jpg",
                        "displayOrder": 0,
                        "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                      },
                      {
                        "id": "381561f5-daed-4ad1-b00e-50523da067cb",
                        "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                        "photoId": "ff28c7f1-2b0e-4f46-9486-cf2847502f0e",
                        "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/DSC_4111.JPG",
                        "displayOrder": 0,
                        "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                      },
                      {
                        "id": "88636517-ff0c-45be-b0db-036c2bb859a7",
                        "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                        "photoId": "fc34dbe5-2cc7-4932-8ded-d13b78bca98f",
                        "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/DSC_4119.JPG",
                        "displayOrder": 0,
                        "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                      }
                    ],
                    "nameContents": [
                      {
                        "id": "78329613-bc8c-4319-a069-f8f41662161a",
                        "code": "a9cc42e5-e33a-4161-bae6-3cdb02c9270e",
                        "value": "Biệt thự Dragon Parc 1 ",
                        "language": "VN",
                        "status": 0,
                        "createTime": 1626097066,
                        "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                        "updateTime": 1627891349,
                        "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                      },
                    ],
                    "projectNameContents": [
                      {
                        "id": "3889e952-e18b-49ad-8644-7d4386469303",
                        "code": "3b7b175a-fb3d-4cc7-a0c4-b7bb5a301a5c",
                        "value": " DRAGON PARC",
                        "language": "VN",
                        "status": 1,
                        "createTime": 1621436402,
                        "createUser": null,
                        "updateTime": 1627748174,
                        "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
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
                        "createTime": 1626071107,
                        "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                        "updateTime": 1628015607,
                        "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                    },
                    ],
                    "projectNameContents": [
                    {
                        "id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
                        "code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                        "value": "Furama Resort Đà Nẵng",
                        "language": "VN",
                        "status": 1,
                        "createTime": 1625824412,
                        "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                        "updateTime": 1631861482,
                        "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                    },
                    ]
                },
                {
                    "id": "426f286a-0f78-4468-b371-a65ced84e6e5",
                    "status": 0,
                    "type": 0,
                    "projectId": "28b3179f-0a39-4936-9cfd-e97422bfe297",
                    "code": "DP.3",
                    "projectName": " DRAGON PARC",
                    "projectNameContentCode": "3b7b175a-fb3d-4cc7-a0c4-b7bb5a301a5c",
                    "templateCode": "0000A",
                    "constructionStatus": 0,
                    "isHighlight": 1,
                    "name": "Biệt thự Dragon Parc 1 ",
                    "nameContentCode": "a9cc42e5-e33a-4161-bae6-3cdb02c9270e",
                    "floor": 0,
                    "area": 168,
                    "bedroom": 4,
                    "bathroom": 3,
                    "orientation": 0,
                    "width": 11,
                    "long": 8,
                    "carpetArea": 168,
                    "buildupArea": 166,
                    "listPrice": 25000000000,
                    "depositPrice": 199999998,
                    "searchText": " DP 1",
                    "organizationId": null,
                    "addressId": "30738ed8-2ae9-4ea4-9a29-527594f603f5",
                    "provinceCode": "79",
                    "provinceName": "Hồ Chí Minh",
                    "latitude": null,
                    "longitude": null,
                    "addressFull": "Hồ Chí Minh",
                    "apartmentPhotos": [
                    {
                        "id": "1d61bcbc-bbf1-434d-b0e0-af27f1457530",
                        "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                        "photoId": "4781fca5-4f43-4c4a-8d30-0ed44404a06c",
                        "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/HOA_3475.jpg",
                        "displayOrder": 0,
                        "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                    },
                    {
                        "id": "381561f5-daed-4ad1-b00e-50523da067cb",
                        "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                        "photoId": "ff28c7f1-2b0e-4f46-9486-cf2847502f0e",
                        "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/DSC_4111.JPG",
                        "displayOrder": 0,
                        "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                    },
                    {
                        "id": "88636517-ff0c-45be-b0db-036c2bb859a7",
                        "apartmentId": "426f286a-0f78-4468-b371-a65ced84e6e5",
                        "photoId": "fc34dbe5-2cc7-4932-8ded-d13b78bca98f",
                        "photoUrl": "https://dd9yiw9gyjnor.cloudfront.net/assets/DSC_4119.JPG",
                        "displayOrder": 0,
                        "organizationId": "63ff63f0-dc1e-406e-b664-4a3fff723b48"
                    }
                    ],
                    "nameContents": [
                    {
                        "id": "78329613-bc8c-4319-a069-f8f41662161a",
                        "code": "a9cc42e5-e33a-4161-bae6-3cdb02c9270e",
                        "value": "Biệt thự Dragon Parc 1 ",
                        "language": "VN",
                        "status": 0,
                        "createTime": 1626097066,
                        "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                        "updateTime": 1627891349,
                        "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                    },
                    ],
                    "projectNameContents": [
                    {
                        "id": "3889e952-e18b-49ad-8644-7d4386469303",
                        "code": "3b7b175a-fb3d-4cc7-a0c4-b7bb5a301a5c",
                        "value": " DRAGON PARC",
                        "language": "VN",
                        "status": 1,
                        "createTime": 1621436402,
                        "createUser": null,
                        "updateTime": 1627748174,
                        "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
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
                        "createTime": 1626071107,
                        "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                        "updateTime": 1628015607,
                        "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                    },
                    ],
                    "projectNameContents": [
                    {
                        "id": "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
                        "code": "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                        "value": "Furama Resort Đà Nẵng",
                        "language": "VN",
                        "status": 1,
                        "createTime": 1625824412,
                        "createUser": "303d2fde-73fd-4811-834e-66c05704e761",
                        "updateTime": 1631861482,
                        "updateUser": "303d2fde-73fd-4811-834e-66c05704e761"
                    },
                    ]
                },
              ];
            this.setModel({
                listApartment: listApartment,
                showModelSearch: false,
                showApartment: true,
                currentPage: 1,
                totalPages: 2,
                totalCount: 10
            })
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
        }
    }

    removeAttributes(type: number) {
        switch (type) {
            case 0: // target
                this.setModel({
                    target: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, target: null
                });
                break
            case 1:
                this.setModel({
                    projectIdSearch: undefined
                })
                break
            case 2:
                this.setModel({
                    province: undefined,
                    districtId: undefined,
                });
                GlobalState.setFilter({
                    ...GlobalState.filterObj, province: null, district: null
                });
                break
            case 3: //types
                this.setModel({
                    types: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, types: null
                });
                break
            case 4: //status
                this.setModel({
                    status: undefined
                });
                GlobalState.setFilter({
                    ...GlobalState.filterObj, status: null
                });
                break
            case 5: //price
                this.setModel({
                    minPrice: undefined,
                    maxPrice: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, minPrice: undefined, maxPrice: undefined
                })
                break
            case 6: //price
                this.setModel({
                    minArea: undefined,
                    maxArea: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, minArea: undefined, maxArea: undefined
                })
                break
        }
        this.getApartment();
    }

    handleChangePagination = async (event: React.ChangeEvent<unknown>, pageNumeber: number) => {
        this.setModel({
            currentPage: pageNumeber
        })
        this.getApartment();
        const scrollToEl = document.getElementById('frameItem');
        if ((window.innerHeight - scrollToEl!.getBoundingClientRect().top) < 300) {
            { window.scrollTo({ top: 400, behavior: 'smooth' }) }
        } else {
            { window.scrollTo({ top: 0, behavior: 'smooth' }) }
        }
    }
}
export default ListingApartmentController;
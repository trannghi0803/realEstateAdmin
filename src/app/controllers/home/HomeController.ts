import { IProject } from "../../../commons/utils";
import { Constants, Resources } from "../../../constants";
import { DisplayArea } from "../../../constants/Enums";
import { GlobalState } from "../../../stores/GlobalState";
import { HomeModel } from "../../models";
import HomeService from "../../services/HomeService";
import { BaseController } from "../base";

class HomeController extends BaseController<HomeModel, HomeService> {
    
    intervalId: any;

    constructor(props: any) {
        super(props, HomeModel, HomeService);
    }
    async onStarted() {
        const projects: any[] = [
            {
                id: "45a67f60-c5ed-4c31-a8bb-581281233097",
                type: 1,
                status: 0,
                isHighlight: 1,
                name: "Furama Resort Đà Nẵng",
                nameContentCode: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                siteArea: 30000,
                constructionArea: 0,
                constructionStatus: 0,
                buildingDensity: 0,
                apartment: 0,
                villa: 0,
                hotel: 0,
                launchDate: 1627656323,
                bookingPrice: 1774045,
                scale: "198 phòng nghỉ",
                owner: "",
                constructor: "",
                architect: "",
                searchText: "Furama Resort Đa Nang",
                minPrice: 16316.705,
                maxPrice: 15000000,
                organizationId: "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                addressId: "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
                provinceCode: "48",
                provinceName: "Thành phố Đà Nẵng",
                districtCode: "494",
                districtName: "",
                addressFull: "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
                attributes: [],
                projectPhotos: [
                    {
                        id: "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1414acdc-99ee-4305-a7ac-3fdb614907b6",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1414acdc-99ee-4305-a7ac-3fdb614907b6.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "3b6200da-43d1-4d51-afdd-56f275fb2591",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/b01ab102-fad6-4d82-b383-8d9cd79ee7cf.jpg",
                        displayOrder: 0,
                    },
                    {
                        id: "9685a0af-18fa-41e1-b768-6e450724e9ca",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/a977c07c-4fb2-4d96-a866-d39d7d8545a8.jpg",
                        displayOrder: 0,
                    }
                ],
                nameContents: [
                    {
                        id: "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
                        code: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                        value: "Furama Resort Đà Nẵng",
                        language: "VN"
                    }
                ]
            },
            {
                id: "45a67f60-c5ed-4c31-a8bb-581281233097",
                type: 1,
                status: 0,
                isHighlight: 1,
                name: "Furama Resort Đà Nẵng",
                nameContentCode: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                siteArea: 30000,
                constructionArea: 0,
                constructionStatus: 0,
                buildingDensity: 0,
                apartment: 0,
                villa: 0,
                hotel: 0,
                launchDate: 1627656323,
                bookingPrice: 1774045,
                scale: "198 phòng nghỉ",
                owner: "",
                constructor: "",
                architect: "",
                "searchText": "Furama Resort Đa Nang",
                minPrice: 16316.705,
                maxPrice: 15000000,
                organizationId: "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                addressId: "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
                provinceCode: "48",
                provinceName: "Thành phố Đà Nẵng",
                districtCode: "494",
                districtName: "",
                addressFull: "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
                attributes: [],
                projectPhotos: [
                    {
                        id: "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1414acdc-99ee-4305-a7ac-3fdb614907b6",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1414acdc-99ee-4305-a7ac-3fdb614907b6.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "3b6200da-43d1-4d51-afdd-56f275fb2591",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/b01ab102-fad6-4d82-b383-8d9cd79ee7cf.jpg",
                        displayOrder: 0,
                    },
                    {
                        id: "9685a0af-18fa-41e1-b768-6e450724e9ca",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/a977c07c-4fb2-4d96-a866-d39d7d8545a8.jpg",
                        displayOrder: 0,
                    }
                ],
                nameContents: [
                    {
                        id: "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
                        code: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                        value: "Furama Resort Đà Nẵng",
                        language: "VN"
                    }
                ]
            },
            {
                id: "45a67f60-c5ed-4c31-a8bb-581281233097",
                type: 1,
                status: 0,
                isHighlight: 1,
                name: "Furama Resort Đà Nẵng",
                nameContentCode: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                siteArea: 30000,
                constructionArea: 0,
                constructionStatus: 0,
                buildingDensity: 0,
                apartment: 0,
                villa: 0,
                hotel: 0,
                launchDate: 1627656323,
                bookingPrice: 1774045,
                scale: "198 phòng nghỉ",
                owner: "",
                constructor: "",
                architect: "",
                "searchText": "Furama Resort Đa Nang",
                minPrice: 16316.705,
                maxPrice: 15000000,
                organizationId: "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                addressId: "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
                provinceCode: "48",
                provinceName: "Thành phố Đà Nẵng",
                districtCode: "494",
                districtName: "",
                addressFull: "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
                attributes: [],
                projectPhotos: [
                    {
                        id: "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1414acdc-99ee-4305-a7ac-3fdb614907b6",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1414acdc-99ee-4305-a7ac-3fdb614907b6.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "3b6200da-43d1-4d51-afdd-56f275fb2591",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/b01ab102-fad6-4d82-b383-8d9cd79ee7cf.jpg",
                        displayOrder: 0,
                    },
                    {
                        id: "9685a0af-18fa-41e1-b768-6e450724e9ca",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/a977c07c-4fb2-4d96-a866-d39d7d8545a8.jpg",
                        displayOrder: 0,
                    }
                ],
                nameContents: [
                    {
                        id: "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
                        code: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                        value: "Furama Resort Đà Nẵng",
                        language: "VN"
                    }
                ]
            },
            {
                id: "45a67f60-c5ed-4c31-a8bb-581281233097",
                type: 1,
                status: 0,
                isHighlight: 1,
                name: "Furama Resort Đà Nẵng",
                nameContentCode: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                siteArea: 30000,
                constructionArea: 0,
                constructionStatus: 0,
                buildingDensity: 0,
                apartment: 0,
                villa: 0,
                hotel: 0,
                launchDate: 1627656323,
                bookingPrice: 1774045,
                scale: "198 phòng nghỉ",
                owner: "",
                constructor: "",
                architect: "",
                "searchText": "Furama Resort Đa Nang",
                minPrice: 16316.705,
                maxPrice: 15000000,
                organizationId: "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                addressId: "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
                provinceCode: "48",
                provinceName: "Thành phố Đà Nẵng",
                districtCode: "494",
                districtName: "",
                addressFull: "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
                attributes: [],
                projectPhotos: [
                    {
                        id: "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1414acdc-99ee-4305-a7ac-3fdb614907b6",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1414acdc-99ee-4305-a7ac-3fdb614907b6.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "3b6200da-43d1-4d51-afdd-56f275fb2591",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/b01ab102-fad6-4d82-b383-8d9cd79ee7cf.jpg",
                        displayOrder: 0,
                    },
                    {
                        id: "9685a0af-18fa-41e1-b768-6e450724e9ca",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/a977c07c-4fb2-4d96-a866-d39d7d8545a8.jpg",
                        displayOrder: 0,
                    }
                ],
                nameContents: [
                    {
                        id: "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
                        code: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                        value: "Furama Resort Đà Nẵng",
                        language: "VN"
                    }
                ]
            },
            {
                id: "45a67f60-c5ed-4c31-a8bb-581281233097",
                type: 1,
                status: 0,
                isHighlight: 1,
                name: "Furama Resort Đà Nẵng",
                nameContentCode: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                siteArea: 30000,
                constructionArea: 0,
                constructionStatus: 0,
                buildingDensity: 0,
                apartment: 0,
                villa: 0,
                hotel: 0,
                launchDate: 1627656323,
                bookingPrice: 1774045,
                scale: "198 phòng nghỉ",
                owner: "",
                constructor: "",
                architect: "",
                "searchText": "Furama Resort Đa Nang",
                minPrice: 16316.705,
                maxPrice: 15000000,
                organizationId: "63ff63f0-dc1e-406e-b664-4a3fff723b48",
                addressId: "5136f9ec-c0fe-4e33-8823-8bbc9a62f122",
                provinceCode: "48",
                provinceName: "Thành phố Đà Nẵng",
                districtCode: "494",
                districtName: "",
                addressFull: "103 - 105 Võ Nguyên Giáp, P. Khuê Mỹ, Q. Ngũ Hành Sơn, TP. Đà Nẵng",
                attributes: [],
                projectPhotos: [
                    {
                        id: "0c74b9ce-f8d6-4ce4-8045-e087a7d9c650",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1fdd5ddd-d9a7-4f30-ad8e-216a8a3b0c73.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "13a4a3e2-688e-46a3-a779-70e7d0c329f9",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "1414acdc-99ee-4305-a7ac-3fdb614907b6",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/1414acdc-99ee-4305-a7ac-3fdb614907b6.jpg",
                        displayOrder: 0
                    },
                    {
                        id: "3b6200da-43d1-4d51-afdd-56f275fb2591",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "b01ab102-fad6-4d82-b383-8d9cd79ee7cf",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/b01ab102-fad6-4d82-b383-8d9cd79ee7cf.jpg",
                        displayOrder: 0,
                    },
                    {
                        id: "9685a0af-18fa-41e1-b768-6e450724e9ca",
                        projectId: "45a67f60-c5ed-4c31-a8bb-581281233097",
                        photoId: "a977c07c-4fb2-4d96-a866-d39d7d8545a8",
                        photoUrl: "https://dd9yiw9gyjnor.cloudfront.net/assets/a977c07c-4fb2-4d96-a866-d39d7d8545a8.jpg",
                        displayOrder: 0,
                    }
                ],
                nameContents: [
                    {
                        id: "3f984f7a-eba2-4dcd-8a5f-ee565ee54b0b",
                        code: "cd14329a-5ec7-4542-b71a-24f2fdf08ef7",
                        value: "Furama Resort Đà Nẵng",
                        language: "VN"
                    }
                ]
            },
        ];
        this.setModel({
            projects
        })
    }

    
}
export default HomeController;
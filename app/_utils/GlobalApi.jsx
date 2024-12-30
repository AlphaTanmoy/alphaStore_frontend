const { default: axios } = require("axios");

const baseURL_apiGateway = 'http://localhost:8080'
const baseURL_cart = 'http://localhost:8083/cart'
const baseURL_merchant = 'http://localhost:8084/merchant'
const baseURL_product = 'http://localhost:8085/product'
const baseURL_seeder = 'http://localhost:8086/seeder'
const baseURL_user = 'http://localhost:8087/user'
const baseURL_wallet = 'http://localhost:8088/wallet'
const baseURL_enum = 'http://localhost:8086/enums'

const axiosClient=axios.create({
    baseURL:baseURL_enum
})

const getAccessRole=()=>axiosClient.get(
    '/AccessRole'
);

const getDataStatus=()=>axiosClient.get(
    '/DataStatus'
);

const getDateRangeType=()=>axiosClient.get(
    '/DateRangeType'
);

const getDeliveryStatus=()=>axiosClient.get(
    '/DeliveryStatus'
);

const getHttpMethod=()=>axiosClient.get(
    '/HttpMethod'
);

const getOtpDeliveryChannel=()=>axiosClient.get(
    '/OtpDeliveryChannel'
);

const getOtpRequiredFor=()=>axiosClient.get(
    '/OtpRequiredFor'
);

const getOtpVerificationResult=()=>axiosClient.get(
    '/OtpVerificationResult'
);


const getProductMainCategory=()=>axiosClient.get(
    '/ProductMainCategory'
);

const getProductSellingStatus=()=>axiosClient.get(
    '/ProductSellingStatus'
);

const getProductSubCategory=()=>axiosClient.get(
    '/ProductSubCategory'
);

const getRefundStatus=()=>axiosClient.get(
    '/RefundStatus'
);

const getResponseType=()=>axiosClient.get(
    '/ResponseType'
);

const getSendEmailFrom=()=>axiosClient.get(
    '/SendEmailFrom'
);

const getTransferredStatus=()=>axiosClient.get(
    '/TransferredStatus'
);

const getUserType=()=>axiosClient.get(
    '/UserType'
);


export default{
    getAccessRole, getDataStatus, getDateRangeType, getOtpRequiredFor, getOtpDeliveryChannel, 
    getHttpMethod, getDeliveryStatus, getProductMainCategory, getProductSubCategory, 
    getOtpVerificationResult, getProductSellingStatus,
    getRefundStatus, getResponseType, getSendEmailFrom, getTransferredStatus, getUserType
}
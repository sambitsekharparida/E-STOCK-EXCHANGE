import axios from "axios";

const COMPANY_API_BASE_URL = "http://ec2-43-205-203-193.ap-south-1.compute.amazonaws.com:8081/api/v1.0/company";

class CompanyService{

    saveCompany(company){
        console.log(COMPANY_API_BASE_URL.concat("/register"));
        return axios.post(COMPANY_API_BASE_URL.concat("/register"), company);
    }

    getCompanyList(){
        console.log(COMPANY_API_BASE_URL.concat("/getall"));
        return axios.get(COMPANY_API_BASE_URL.concat("/getall"));
    }

    removeCompany(code){
        console.log(COMPANY_API_BASE_URL + "/delete/" + code);
        return axios.delete(COMPANY_API_BASE_URL + "/delete/" + code);
    }
}

export default new CompanyService();
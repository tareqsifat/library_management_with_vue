import { Axios } from "axios";

const state = {
    check_auth_status: false,
    auth_info:{
        first_name = null,
        last_name = null,
        email = null,
        user_name = null,
        image = null,
        address = null,
        status = null,
        role_name = "guest",
    },
    auth_role_name =  "guest",
    // auth_token: "",
    // server_url:"api/user"
};

const getters = {
    get_check_auth_status: state=>state.check_auth_status,
    get_auth_info: state=>state.auth_info,
    get_auth_role_id: state=>state.auth_role_id
}
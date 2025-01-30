
import LoginForm from "../components/Login/LoginForm";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import state from "@/state";

function Login({setIsAuthenticated}) {

    return (
        <>
            <LoginForm setIsAuthenticated={setIsAuthenticated} />
        </>
    );
}

export default Login;

export const getStaticProps = async ({ locale }) => {

    return {

        props: {

            ...(await serverSideTranslations(locale, ["common"])),
            state

        },

    };

};
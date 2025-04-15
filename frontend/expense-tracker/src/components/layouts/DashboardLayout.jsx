import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Dashboardlayout = ({ children, activeMenu }) => {
    const { user } = useContext(UserContext);

    if (user === undefined) {
        return <div className="p-5">Checking authentication...</div>;
    }

    if (!user) {
        return <div className="p-5 text-red-600">User not logged in. Redirecting...</div>;
    }

    return (
        <div>
            <Navbar activeMenu={activeMenu} />

            <div className="flex">
                <div className="max-[1080px]:hidden">
                    <SideMenu activeMenu={activeMenu} />
                </div>
                <div className="grow mx-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dashboardlayout;
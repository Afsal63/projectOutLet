import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import moreIcon from "../assets/images/moreIcon.png";
import Bulb from "../assets/images/bulb.png";

import { PRIVATE, PUBLIC } from "../routes/routes";
import { useAppSelector } from "../store/hooks";

const AuthLayout: React.FC = () => {
    const { user, isAuthenticated } = useAppSelector(
        (state: any) => state.user
    );

    // if (isAuthenticated && user?.role) {
    //     return (
    //         <Navigate
    //             to={`${PRIVATE.BASE_PATH.replace(":userType", user?.role)}`}
    //         />
    //     );
    // }

    return (
        <section className="bg-[url('./assets/images/bg.svg')] bg-no-repeat h-[100vh] flex">
            <div className="container max-w-[1024px] m-auto">
                <div className="flex flex-row gap-[150px] items-stretch">
                    <div className="basis-2/4">
                        <div className="border-solid border-2 rounded-2xl p-12 bg-white">
                            <div>
                                <img src={Bulb} />
                            </div>
                            <div className="py-8 border-b">
                                <h5 className="font-medium text-[25px] text-[#242732]">
                                    Resolve support tickets fast with these
                                    strategies
                                </h5>
                                <span className="text-gray-400 mb-8 text-xs">
                                    Mon May 22 2023
                                </span>
                                <p className="mb-[35px] text-[#6B6B6B] mt-[20px]">
                                    Use these ticketing strategies from tawk.to
                                    to speed up help desk responses, win
                                    underserved customers, and better serve the
                                    customers you have.
                                </p>
                                <a className="text-sm text-[#3372D1] font-normal inline-flex gap-3 h-[12px] items-center">
                                    Learn More <img src={moreIcon} />
                                </a>
                            </div>

                            <div className="pt-8">
                                <h5 className="font-medium text-[25px] text-[#242732]">
                                    Resolve support tickets fast with these
                                    strategies
                                </h5>
                                <span className="text-gray-400 mb-8 text-xs">
                                    Mon May 22 2023
                                </span>
                                <p className="mb-[35px] text-[#6B6B6B] mt-[20px]">
                                    Use these ticketing strategies from tawk.to
                                    to speed up help desk responses, win
                                    underserved customers, and better serve the
                                    customers you have.
                                </p>
                                <a className="text-sm text-[#3372D1] font-normal inline-flex gap-3 h-[12px] items-center">
                                    Learn More <img src={moreIcon} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="basis-2/4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthLayout;

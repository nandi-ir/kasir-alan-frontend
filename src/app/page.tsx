import React, { ReactElement } from "react";
import { NextPage } from "next";
import HomeModule from "@/modules/home/module";

const HomePage: NextPage = (): ReactElement => {
  return <HomeModule />;
};

export default HomePage;

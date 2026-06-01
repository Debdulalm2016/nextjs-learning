import React from "react";
import Image from "next/image";
import HomeUI from "./ui/HomeUI";
import PageHeader from "./ui/PageHeader";
import PageFooter from "./ui/PageFooter";

export default function Home() {
  return (
    <>
      <PageHeader />
      <HomeUI />      
      <PageFooter />            
      
    </>
  );
}

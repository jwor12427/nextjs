import { notFound } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  notFound();
  return <div>page</div>;
};

export default page;

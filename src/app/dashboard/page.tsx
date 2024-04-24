import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    //ejemplo de absolute
    absolute: "Dashboard",
  },
};

export default function Dashboard() {
  return <h1>Dashboard</h1>;
}

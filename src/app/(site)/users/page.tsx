import GradeLists from "@/components/Users/GradeLists";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Grade Lists",
};

export default function Page() {
    return (
        <>
        <GradeLists/>
        </>
    );
};

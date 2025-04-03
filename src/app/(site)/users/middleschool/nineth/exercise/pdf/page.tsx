import NinethSubListsExercisePdf from "@/components/Users/MiddleSchool/Nineth/Exercise/Pdf/NinethSubListsExercisePdf";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nineth Exercise PDF Subjects List",
};

export default function Page() {
    return (
        <>
            <NinethSubListsExercisePdf />
        </>
    );
};
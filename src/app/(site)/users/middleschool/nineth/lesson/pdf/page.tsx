import NinethSubListsLessonPdf from "@/components/Users/MiddleSchool/Nineth/Lesson/Pdf/NinethSubListsLessonPdf";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nineth Lesson Subjects List",
};

export default function Page() {
    return (
        <>
            <NinethSubListsLessonPdf />
        </>
    );
};
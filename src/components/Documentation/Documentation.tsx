import { HighSchool } from "./HighSchool"
import { DocNavigation } from "./DocNavigation"
import { Introduction } from "./PreSchool"
import { PackageStructure } from "./PrimarySchool"
import { QuickStart } from "./MiddleSchool"
import Header from "../Layout/Header"


export const Documentation = () => {
    return (
        <div className="" >
            <Header />
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:pt-40 pt-10">
                <div className="grid grid-cols-12 gap-6">
                    <div className="lg:col-span-3 col-span-12 lg:block lg:bg-white hidden">
                        <DocNavigation />
                    </div>
                    <div className="lg:col-span-9 col-span-12">
                        <Introduction />
                        <PackageStructure />
                        <QuickStart />
                        <HighSchool />
                    </div>
                </div>
            </div>
        </div>
    )
}
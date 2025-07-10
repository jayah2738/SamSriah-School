"use client";
import { HighSchool } from "./HighSchool"
import { DocNavigation } from "./DocNavigation"
import { Introduction } from "./PreSchool"
import { PackageStructure } from "./PrimarySchool"
import { QuickStart } from "./MiddleSchool"
import Header from "../Layout/Header"

export const Documentation = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            <Header />
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:pt-40 pt-10">
                <div className="grid grid-cols-12 gap-8">
                    <div className="lg:col-span-3 col-span-12 lg:block hidden">
                        <div className="sticky top-40">
                            <div className=" hidden lg:block bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
                                <DocNavigation />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-9 col-span-12 space-y-16">
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
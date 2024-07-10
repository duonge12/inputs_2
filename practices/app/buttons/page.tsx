import { Button } from "@/components";
import { EButtonType } from "@/components/buttons/type";
import { LucideStar } from "lucide-react";


export default function ButtonPage()
{
    return (
        <div className="flex gap-1 w-full flex-wrap">
            <div>
                <h1 className="text-2xl font-bold">PRIMARY WHITE</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button className="rounded-xl px-4 py-1"> CLick me</Button>
                    <Button className="rounded-xl px-4 py-1" leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl px-4 py-1" rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl px-6 py-1" isLoading={true}> Click me</Button>
                    <Button className="rounded-xl px-6 py-1" isDisable={true}> Click me</Button>

                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY WHITE Large</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button className="rounded-xl text-lg px-4 py-1"> Click me</Button>
                    <Button className="rounded-xl text-lg px-4 py-1" leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-lg px-4 py-1" rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-lg px-6 py-1" isLoading={true}> Click me</Button>
                    <Button className="rounded-xl text-lg px-6 py-1" isDisable={true}> Click me</Button>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY WHITE XL</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button className="rounded-xl text-xl px-4 py-1"> Click me</Button>
                    <Button className="rounded-xl text-xl px-4 py-1" leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-xl px-4 py-1" rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button className="rounded-xl text-xl px-6 py-1" isLoading={true}> Click me</Button>
                    <Button className="rounded-xl text-xl px-6 py-1" isDisable={true}> Click me</Button>
                </div>
            </div>
            <div className="w-[600px]"></div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY DARK</h1>
                <div className="flex bg-slate-500 justify-between w-[600px] p-2">
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  px-4 py-1"> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  px-4 py-1" leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  px-4 py-1" rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  px-6 py-1" isLoading={true}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl  px-6 py-1" isDisable={true}> Click me</Button>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY DARK Large</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg px-4 py-1"> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg px-4 py-1" leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg px-4 py-1" rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg px-6 py-1" isLoading={true}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-lg px-6 py-1" isDisable={true}> Click me</Button>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">PRIMARY DARK XL</h1>
                <div className="flex bg-black justify-between w-[600px] p-2">
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl px-4 py-1"> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl px-4 py-1" leftSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl px-4 py-1" rightSymbol={<LucideStar/>}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl px-6 py-1" isLoading={true}> Click me</Button>
                    <Button colorTheme={EButtonType.PRIMARY_DARK} className="rounded-xl text-xl px-6 py-1" isDisable={true}> Click me</Button>
                </div>
            </div>
        </div>
    )
}
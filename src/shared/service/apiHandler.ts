import { useCallback } from "react"
import type { NvimPlugin } from "../interfaces"
import { useBoundStore } from "../store"
import { axiosNeon } from "./axiosInstances"

const awaitAndSet = async (promise: Promise<any>, setFunction: any) => {
    const result = await promise
    setFunction(result)
}

export const getAllNvimPlugins = async () => {
    const response = await axiosNeon.get("/")
    const pluginArray = response.data
    return pluginArray
}

export const useGetAndSetAllNvimPlugins = () => {
    const setNvimPluginArray = useBoundStore((state) => state.setNevimPluginArray)

    const getAndSetAllNvimPlugins = useCallback(() => {
        const promise = getAllNvimPlugins()
        awaitAndSet(promise, setNvimPluginArray)
    }, [])

    return { getAndSetAllNvimPlugins }
}

const postNvimPlugin = async (nvimPlugin: NvimPlugin) => {
    // const resposne = await axiosNeon.post("/", nvimPlugin)
    debugger
}
export const colorClassName = {
    borderVivid: "border-1 border-black/60 dark:border-white/60 ",
    borderMuted: "border-1 border-blck/30 dark:border-white/30",
    fontVivid: "text-black/90 dark:text-white/90",
    fontMuted: "text-black/60 dark:text-white/60",
    fontVividInverted: "text-white/90 dark:text-black/90",
    bg: "bg-white dark:bg-black",
    bgNeutral: "transition bg-black/75 hover:bg-black/60 active:bg-black/45 dark:bg-white/75 dark:hover:bg-white/60 dark:active:bg-white/45"
}

export const fontClassName = {
    super: "text-4xl font-semibold",
    title: "text-2xl font-semilbold",
    accent: "text-xl font-semibold",
    justBold: "font-medium"
}

export const displayClassName = {
    flexCol: "flex flex-col gap-3",
    gridCard: "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3"
}

export const sizeClassName = {
    fullScreen: "w-screen h-screen overflow-hidden",
}

export const shapeClassName = {
    rounded: "rounded-md",
}

/** 얘는 위의 것들 사용함. 위에는 아래 것을 사용 못 함 */
export const boxClassName = {
    button: `py-2 px-3 ${shapeClassName.rounded} border-1 ${colorClassName.fontVividInverted} ${colorClassName.bgNeutral} ${fontClassName.justBold} border-black/15 bg-black/5 hover:border-black/30 hover:bg-black/10 active:border-black/45`,
    groupByBorder: `p-3 ${colorClassName.borderMuted} ${displayClassName.flexCol} ${shapeClassName.rounded}`
}

export const sx = {
    scrollbar: {
        scrollbarColor: "oklch(0.5 0 0 ) transparent"
    }
}
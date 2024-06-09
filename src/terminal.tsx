import { CommandMenu, ProfileHub, SearchBar } from "./items/_main.itm"

export const Terminal = () => {
    return (
        <section className="shrink-0 bg-secondary w-60 h-12 rounded-3xl flex justify-center items-center gap-6">
          <CommandMenu />
          <ProfileHub />
          <SearchBar />
        </section>
    )
}
import useSearch from '@renderer/hooks/useSearch'

export default function Search() {
  const { handleSearch, search } = useSearch()
  return (
    <main className="bg-slate-50 p-3 rounded-lg  drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          value={search}
          onChange={handleSearch}
          className="w-full outline-none text-2xl text-slate-600 bg-slate-200"
        />
      </section>
      <section className="text-center text-slate-600 text-xs mt-2">
        向军大叔作品 / 晚八点直播
      </section>
    </main>
  )
}

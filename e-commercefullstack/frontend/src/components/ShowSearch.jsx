import React from 'react'

const ShowSearch = () => {
    const [search, setSearch, showSearch] = useContext(ShopeContext)
  return (
    <div>
        <div>
            <div>
                <input type="text" value={search} />
            </div>
        </div>
    </div>
  )
}

export default ShowSearch

import { useState, useEffect } from "react"
import Repository from "./repo"

const Repositories = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const url = 'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc'

        fetch(url)
        .then(res => res.json())
        .then(data => setRepos(data.items))
    }, [])

    return (
        <div>
            {repos.map(item => {
                return <Repository key={item.owner.id} item={item} />
            })}
        </div>
    )
}

export default Repositories;
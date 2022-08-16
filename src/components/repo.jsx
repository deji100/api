const Repository = (props) => {
    const { owner, stargazers_count, open_issues, name, description, created_at } = props.item
    return (
        <div key={owner.id} className='content'>
            <div className="avatar">
                <img src={owner.avatar_url} alt="" />
            </div>
            <div className="detail">
                <div className="name-description">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="star-issues-time">
                    <p className="star">Stars: {stargazers_count}</p>
                    <p className="issue">Issues: {open_issues}</p>
                    <p>Submitted {Math.floor((new Date().getTime() - new Date(created_at).getTime()) / (1000 * 60 * 60 * 24))} days ago by {owner.login}</p>
                </div>
            </div>
        </div>
    )
}

export default Repository;
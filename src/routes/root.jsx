export default function Root () {
    return (
        <>
            <div id="sidebar">
                <h1>My Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input 
                            id="q"
                            aria-label="search-contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={`/contacts/1`}>Basil Goodluck</a>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Basil Desmond</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
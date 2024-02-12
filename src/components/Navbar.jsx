import NavbarItem from "./NavbarItem"

export default function Navbar({navs, selectedNav, setSelectedNav}) {
    // select navbar item function
    function handleSelectNav(id) {
        setSelectedNav(id)
    }

    return (
        <ul className="navbar">
            {
                navs.map((nav) => <NavbarItem 
                        classes={nav.classes}
                        id={nav.id}
                        selectedNav={selectedNav}
                        onSelectNav={handleSelectNav}
                    >
                        {nav.name}
                    </NavbarItem>)
            }
        </ul>
    )
}
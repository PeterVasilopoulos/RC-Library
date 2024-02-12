import NavbarItem from "./NavbarItem"

export default function Navbar({navs, selectedNav, setSelectedNav}) {
    // select navbar item function
    function handleSelectNav(nav) {
        setSelectedNav(nav)
    }

    return (
        <ul className="navbar">
            {
                navs.map((nav) => <NavbarItem 
                        classes={nav.classes}
                        nav={nav}
                        selectedNav={selectedNav}
                        onSelectNav={handleSelectNav}
                    >
                        {nav.name}
                    </NavbarItem>)
            }
        </ul>
    )
}
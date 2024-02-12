export default function NavbarItem({children, classes, nav, selectedNav, onSelectNav}) {
    let addClasses = classes
    
    if(selectedNav.id === nav.id) {
        addClasses = addClasses + ' navbar-selected'
    }
    function handleClick() {
        onSelectNav(nav)
    }

    return (
        <li className={`${addClasses} navbar-item`} onClick={handleClick}>
            {children}
        </li>
    )
}
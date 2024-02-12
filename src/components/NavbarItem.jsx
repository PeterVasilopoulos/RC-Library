export default function NavbarItem({children, classes, id, selectedNav, onSelectNav}) {
    let addClasses = classes
    
    if(selectedNav === id) {
        addClasses = addClasses + ' navbar-selected'
    }
    function handleClick() {
        onSelectNav(id)
    }

    return (
        <li className={`${addClasses} navbar-item`} onClick={handleClick}>
            {children}
        </li>
    )
}
import './header.css';

export const Header = () => {

    const menuItems = [
        { label: 'Home', href: '#header', id: 1 }, // 0
        { label: 'Footer', href: '#footer', id: 2 }, // 1
        { label: 'About us', href: '#about', id: 3 }, // 2
        { label: 'Contact us', href: '#contact', id:4 }, // 3
    ];

    return <header className="Header">
        <div className="container">
            <div className="row">
                <div className="col">👋</div>
                <div className="col">
                    <nav className="nav">
                        <ul role="menu">
                            {
                                menuItems.map(function (menuItem) {
                                    console.log({ menuItem });

                                    return (
                                        <li key={menuItem.id} role="menuitem">
                                            <a href={menuItem.href}>{menuItem.label}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
}
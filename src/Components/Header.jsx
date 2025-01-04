function Header() {
    return (
        <>
            <div className="header" style={{ backgroundColor: "white", maxHeight: "100px", minHeight:'50px', width: "100vw", placeItems: "center", display: "flex", padding: "10px 25px", color: 'black' }}>
                <div className="header-content" style={{ maxWidth: "1280px", width: '100%', display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
                    <h1 style={{}}>Test</h1>
                    <div style={{ display: 'flex', placeItems: 'center', justifyContent: 'space-between', gap: '1rem'}}>
                        <h2> Menu Item </h2>
                        <h2> Menu Item </h2>
                        <h2> Menu Item </h2>
                        <h2> Menu Item </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;  
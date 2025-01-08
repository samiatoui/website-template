function Home() {
    return (
        <>
            <div className="banner" style={{ backgroundColor: 'var(--accent-color)', padding: '100px 0px' }}>
                <h3>Welcome to our website</h3>
                <p> A generic company info.</p>
            </div>

            <h1> Services </h1>
            <div className="services-sec">
                <div className="service-item">
                    <h2>Web Development</h2>
                    <p>I build websites that meet your business needs. Working closely with you to ensure that your needs and requirements are well understood and satisfied.</p>
                    <ul>
                        <li>Wordpress & Shopify</li>
                        <li>Ecommerce</li>
                        <li>Web hosting</li>
                        <li>Web Maintenance</li>
                    </ul>

                </div>
                <div className="service-item">
                    <h2>Custom Programming</h2>
                    <p>Need a bespoke solution to meet your business requirements? I can help.</p>

                    <ul>
                        <li>Custom web application</li>
                        <li>Bespoke web plugins</li>
                        <li>Database design</li>
                    </ul>

                </div>

            </div>
            <button>View all services</button>

        </>
    );
}

export default Home;
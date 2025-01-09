function Home() {
    return (
        <>
            <div className="banner">
                <h3>Welcome to our website</h3>
                <p> A generic company info.</p>
            </div>

            <h1>Why us?</h1>

            <div className="bannerv2">
                <div className="bannerimg"><img src="https://imgs.search.brave.com/1IdW6KryGXd8Sh2AXmiIuYiM4gIvE8Z5U-ovwm93eho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/Ny8wOC8wNC8xMi93/b3JrLTUzODI1MDFf/NjQwLmpwZw"></img></div>
                <div className="bannertext">
                    <p>Kinex Media is a renowned Toronto-based web design company recognized for delivering outcome-focused web design solutions. We've assembled a global team of top-tier web designers to create tailored strategies that help our clients succeed in a fiercely competitive landscape. Our Toronto web design offerings are geared towards significantly boosting conversion rates and revenue generation.
                        Our highly trained professionals frame solutions after conducting an interview session with the clients to have a better idea about their short and long term goals. They are highly adept in bringing imagination to reality by putting numerous languages and technologies into use with advanced usage. All of our web design experts responsible for rendering Web Designing Services always focus on details and ensure to keep your website in touch with latest ‘AI’ and ‘Personalization’ trends. Be it about information architecture, user pathways or anything, we always ensure your website looks enchanting.</p>
                </div>
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
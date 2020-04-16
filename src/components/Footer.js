import React from 'react';

const Footer = () => {
    const links = [
        { link: 'https://www.facebook.com/the.yesbee', name: 'facebook' },
        { link: 'https://www.linkedin.com/in/saravanan-sb/', name: 'linkedIn' },
        { link: 'https://www.github.com/saravanansb96', name: 'Github' }
    ]
    return (
        <footer className="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <h5>About me</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dicta, id officia quidem sed dolor
          voluptatem deserunt beatae voluptatibus labore!</p>
                    </div>
                    <div className="col s12 l4 offset-l2">
                        <h5>Connect</h5>
                        <ul>
                            {
                                links.map((link, i) => <li key={i}><a href={link.link} className="grey-text text-lighten-3">{link.name}</a></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright grey darken-4">
                <div className="container center-align">© 2020 YesBee</div>
            </div>
        </footer>
    )
}

export default Footer;
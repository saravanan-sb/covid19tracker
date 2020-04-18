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
                        <h5>About the Site</h5>
                        <p>This site provides the latest updates on the covid19 related information statewise and district wise. All data is provided by <a href='https://api.covid19india.org/'>(https://api.covid19india.org/)</a>.</p><p>The owner of this site is not responsible for above data . Please check  <a href="https://www.covid19india.org/"> https://www.covid19india.org/</a> from more information.</p>
                    </div>
                    <div className="col s12 l4 offset-l2">
                        <h5>Connect</h5>
                        <ul>
                            {
                                links.map((link, i) => <li key={i}><a href={link.link} className="grey-text text-lighten-3">{link.name}</a></li>
                                )
                            }
                        </ul>
                        <div className='counter'>
                            {/* <a href="https://www.hitwebcounter.com" rel="noopener noreferrer" target="_blank">
                                <img src="https://hitwebcounter.com/counter/counter.php?page=7277301&style=0010&nbdigits=4&type=page&initCount=43" title="User Stats" alt=" Hits Count" border={0} />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright grey darken-4">
                <div className="container center-align">© 2020 YesBee  <i className="fab fa-forumbee"></i></div>
            </div>
        </footer>
    )
}

export default Footer;
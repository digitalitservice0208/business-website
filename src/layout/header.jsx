import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="ct-loadding" className="ct-loader style1">
        <div className="loading-spin"></div>
      </div>
      <div className="ct-page-loading-bg active"></div>
      <header id="ct-header-elementor" className="is-sticky mobile-style-dark">
        <div className="ct-header-elementor-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div data-elementor-type="wp-post" data-elementor-id="13" className="elementor elementor-13">
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-49249a0 elementor-section-content-middle ct-header-fixed-transparent elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-column-none ct-row-scroll-none ct-row-gradient--none"
                    data-id="49249a0" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-extended ">
                      <div
                        className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-79b8e02 ct-column-none"
                        data-id="79b8e02" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-599e8b8 elementor-widget elementor-widget-ct_logo"
                               data-id="599e8b8" data-element_type="widget" data-widget_type="ct_logo.default">
                            <div className="elementor-widget-container">
                              <div className="ct-logo "><Link to="/"> <img fetchpriority="high" width="348" height="165"
                                                                                   src="wp-content/uploads/2021/05/logo.png"
                                                                                   className="attachment-full" alt=""/> </Link></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-3594926 ct-column-none"
                        data-id="3594926" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-46e665d ct-inline elementor-widget elementor-widget-ct_menu"
                            data-id="46e665d" data-element_type="widget" data-widget_type="ct_menu.default">
                            <div className="elementor-widget-container">
                              <div id="ct_menu-46e665d" className="ct-nav-menu ct-nav-menu1  style1 ct-item--number-active">
                                <div className="menu-main-menu-container">
                                  <ul id="ct-main-menu" className="ct-main-menu clearfix">
                                    <li id="menu-item-435"
                                        className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home  page_item page-item-23  megamenu megamenu-style-alt menu-item-has-children menu-item-435 ${pathname === '/' ? 'current-menu-item current_page_item' : ''}`}>
                                      <Link to="/" aria-current="page"><span className="ct-menu-item"><span
                                        className="ct-item--number"><span></span></span>Home</span><span
                                        className="ct-menu--plus"></span></Link></li>
                                    <li id="menu-item-55"
                                        className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-55 ${pathname === '/about-us' ? 'current-menu-item current_page_item' : ''}`}><Link
                                      to="/about-us"><span className="ct-menu-item"><span
                                      className="ct-item--number"><span></span></span>About Us</span><span
                                      className="ct-menu--plus"></span></Link></li>
                                    <li id="menu-item-54"
                                        className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-54 ${pathname === '/services' ? 'current-menu-item current_page_item' : ''}`}>
                                      <Link to="/services"><span className="ct-menu-item"><span
                                        className="ct-item--number"><span></span></span>Services</span><span
                                        className="ct-menu--plus"></span></Link></li>
                                    <li id="menu-item-53"
                                        className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-53 ${pathname === '/portfolio' ? 'current-menu-item current_page_item' : ''}`}>
                                      <Link to="/portfolio"><span className="ct-menu-item"><span
                                        className="ct-item--number"><span></span></span>Portfolio</span><span
                                        className="ct-menu--plus"></span></Link></li>
                                    <li id="menu-item-51"
                                        className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-51 ${pathname === '/our-team' ? 'current-menu-item current_page_item' : ''}`}>
                                      <Link to="/our-team"><span className="ct-menu-item"><span
                                        className="ct-item--number"><span></span></span>Our Team</span><span
                                        className="ct-menu--plus"></span></Link></li>
                                    <li id="menu-item-51"
                                        className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-51 ${pathname === '/contact-us' ? 'current-menu-item current_page_item' : ''}`}>
                                      <Link to="/contact-us"><span className="ct-menu-item"><span
                                        className="ct-item--number"><span></span></span>Contact Us</span><span
                                        className="ct-menu--plus"></span></Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-4521ac7 ct-column-none"
                        data-id="4521ac7" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-0320f74 elementor-widget elementor-widget-ct_info_box"
                            data-id="0320f74" data-element_type="widget" data-widget_type="ct_info_box.default">
                            <div className="elementor-widget-container">
                              <div className="ct-info-box ct-info-box1 " data-wow-delay="ms">
                                <div className="ct-info-icon"><i aria-hidden="true" className="flaticon flaticon-add-contact"></i>
                                </div>
                                <div className="ct-info-holder">
                                  <div className="ct-info-label">Call us:</div>
                                  <div className="ct-info-title">+62 895-6256-70009</div>
                                  <a href="tel:62-895-6256-70009"></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ct-header-elementor-sticky">
          <div className="container">
            <div className="row">
              <div data-elementor-type="wp-post" data-elementor-id="14" className="elementor elementor-14">
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-4236bb60 elementor-section-content-middle ct-header-fixed-transparent elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-column-none ct-row-scroll-none ct-row-gradient--none"
                  data-id="4236bb60" data-element_type="section"
                  data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                  <div className="elementor-container elementor-column-gap-extended ">
                    <div
                      className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-1220a824 ct-column-none"
                      data-id="1220a824" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-64d31293 elementor-widget elementor-widget-ct_logo"
                             data-id="64d31293" data-element_type="widget" data-widget_type="ct_logo.default">
                          <div className="elementor-widget-container">
                            <div className="ct-logo "><Link to="/"> <img fetchpriority="high" width="348" height="165"
                                                                                 src="wp-content/uploads/2021/05/logo.png"
                                                                                 className="attachment-full" alt=""/> </Link></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-544d7b8c ct-column-none"
                      data-id="544d7b8c" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-6369179e ct-inline elementor-widget elementor-widget-ct_menu"
                          data-id="6369179e" data-element_type="widget" data-widget_type="ct_menu.default">
                          <div className="elementor-widget-container">
                            <div id="ct_menu-6369179e" className="ct-nav-menu ct-nav-menu1  style1 ct-item--number-active">
                              <div className="menu-main-menu-container">
                                <ul id="ct-main-menu" className="ct-main-menu clearfix">
                                  <li
                                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-23 megamenu megamenu-style-alt menu-item-has-children menu-item-435 ${pathname === '/' ? 'current-menu-item current_page_item' : ''}`}>
                                    <Link to="/" aria-current="page"><span className="ct-menu-item"><span
                                      className="ct-item--number"><span></span></span>Home</span><span
                                      className="ct-menu--plus"></span></Link></li>
                                  <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-55 ${pathname === '/about-us' ? 'current-menu-item current_page_item' : ''}`}><Link
                                    to="/about-us"><span className="ct-menu-item"><span
                                    className="ct-item--number"><span></span></span>About Us</span><span
                                    className="ct-menu--plus"></span></Link></li>
                                  <li
                                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-54 ${pathname === '/services' ? 'current-menu-item current_page_item' : ''}`}>
                                    <Link to="/services"><span className="ct-menu-item"><span
                                      className="ct-item--number"><span></span></span>Services</span><span
                                      className="ct-menu--plus"></span></Link></li>
                                  <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-53 ${pathname === '/portfolio' ? 'current-menu-item current_page_item' : ''}`}><Link
                                    to="/portfolio"><span className="ct-menu-item"><span
                                    className="ct-item--number"><span></span></span>Portfolio</span><span
                                    className="ct-menu--plus"></span></Link></li>
                                  <li
                                    className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-51 ${pathname === '/our-team' ? 'current-menu-item current_page_item' : ''}`}>
                                    <Link to="/our-team"><span className="ct-menu-item"><span
                                      className="ct-item--number"><span></span></span>Our Team</span><span
                                      className="ct-menu--plus"></span></Link></li>
                                  <li
                                    className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-51 ${pathname === '/contact-us' ? 'current-menu-item current_page_item' : ''}`}>
                                    <Link to="/contact-us"><span className="ct-menu-item"><span
                                      className="ct-item--number"><span></span></span>Contact Us</span><span
                                      className="ct-menu--plus"></span></Link></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-6abfb4e2 ct-column-none"
                      data-id="6abfb4e2" data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-8d9c06 elementor-widget elementor-widget-ct_info_box"
                          data-id="8d9c06" data-element_type="widget" data-widget_type="ct_info_box.default">
                          <div className="elementor-widget-container">
                            <div className="ct-info-box ct-info-box1 " data-wow-delay="ms">
                              <div className="ct-info-icon"><i aria-hidden="true" className="flaticon flaticon-add-contact"></i>
                              </div>
                              <div className="ct-info-holder">
                                <div className="ct-info-label">Call us:</div>
                                <div className="ct-info-title">+62 895-6256-70009</div>
                                <a href="tel:62-895-6256-70009"></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="ct-header-mobile">
          <div id="ct-header" className="ct-header-main">
            <div className="container">
              <div className="row">
                <div className="ct-header-branding"><Link className="logo-mobile" to="/" title="Software Consulting" rel="home"><img
                  src="wp-content/themes/gpri/assets/images/logo.png" alt="Software Consulting"/></Link></div>
                <div className="ct-header-navigation">
                  <nav className="ct-main-navigation">
                    <div className="ct-main-navigation-inner">
                      <div className="ct-logo-mobile"><a className="logo-mobile" href="index.html" title="Software Consulting" rel="home"><img
                        src="wp-content/themes/gpri/assets/images/logo.png" alt="Software Consulting"/></a></div>
                      <ul id="ct-main-menu" className="ct-main-menu clearfix">
                        <li
                          className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-23 megamenu megamenu-style-alt menu-item-435 ${pathname === '/' ? 'current-menu-item current_page_item' : ''}`}>
                          <Link to="/" aria-current="page"><span>Home</span></Link></li>
                        <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-55 ${pathname === '/about-us' ? 'current-menu-item current_page_item' : ''}`}>
                          <Link to="/about-us"><span>About Us</span></Link></li>
                        <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-54 ${pathname === '/services' ? 'current-menu-item current_page_item' : ''}`}>
                          <Link to="/services"><span>Services</span></Link></li>
                        <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-53 ${pathname === '/portfolio' ? 'current-menu-item current_page_item' : ''}`}>
                          <Link to="portfolio-grid"><span>Portfolio</span></Link></li>
                        <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-51 ${pathname === '/our-team' ? 'current-menu-item current_page_item' : ''}`}>
                          <Link to="/our-team"><span>Our Team</span></Link></li>
                        <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-51 ${pathname === '/contact-us' ? 'current-menu-item current_page_item' : ''}`}>
                          <Link to="/contact-us"><span>Contact Us</span></Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="ct-menu-overlay"></div>
              </div>
            </div>
            <div id="ct-menu-mobile">
              <div className="ct-mobile-meta-item btn-nav-mobile open-menu"><span></span></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

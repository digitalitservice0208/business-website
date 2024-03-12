import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    const prevPath = localStorage.getItem("previousPath");
    if (prevPath !== "/about-us") {
      localStorage.setItem("previousPath", location.pathname);
      window.location.reload();
    }
  }, []);

  return (
    <>
      <div id="ct-pagetitle" className="ct-pagetitle ">
        <div className="ct-pagetitle-highlight">Grupi</div>
        <div className="ct-pagetitle-image bg-image"></div>
        <div className="container">
          <div className="ct-page-title-holder"><h1 className="ct-page-title">About Us</h1></div>
          <ul className="ct-breadcrumb">
            <li><Link className="breadcrumb-entry" to="/">Home</Link></li>
            <li><span className="breadcrumb-entry">About Us</span></li>
          </ul>
        </div>
      </div>
      <div id="content" className="site-content">
        <div className="content-inner">
          <div className="container content-container">
            <div className="row content-row">
              <div id="primary" className="content-area content-full-width col-12">
                <main id="main" className="site-main">
                  <article id="post-43" className="post-43 page type-page status-publish hentry">
                    <div className="entry-content clearfix">
                      <div data-elementor-type="wp-page" data-elementor-id="43" className="elementor elementor-43">
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-b901812 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                          data-id="b901812" data-element_type="section"
                          data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                          <div className="elementor-container elementor-column-gap-extended ">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c48ffcd ct-column-none"
                              data-id="c48ffcd" data-element_type="column">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-322bc9f elementor-widget elementor-widget-ct_particle_animate"
                                  data-id="322bc9f" data-element_type="widget"
                                  data-widget_type="ct_particle_animate.default">
                                  <div className="elementor-widget-container">
                                    <div className="ct-particle-animate el-move-parents img-below-content " data-wow-delay="ms">
                                      <div id="ct_particle_animate-322bc9f0" className="top-left shape-animate3">
                                        <div className="ct-inline-css" data-css="
 .ct-particle-animate #ct_particle_animate-322bc9f0 {
 left: 10%;
 top: 30%;
 }"></div>
                                        <img loading="lazy" decoding="async" width="15" height="10"
                                             src="../wp-content/uploads/2021/06/particle1.png" className="attachment-full"
                                             alt=""/></div>
                                    </div>
                                  </div>
                                </div>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-341d5fb elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                  data-id="341d5fb" data-element_type="section">
                                  <div className="elementor-container elementor-column-gap-extended ">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4e0d92d ct-column-none"
                                      data-id="4e0d92d" data-element_type="column"
                                      data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-8020617 elementor-widget elementor-widget-ct_heading"
                                          data-id="8020617" data-element_type="widget"
                                          data-widget_type="ct_heading.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_heading-8020617"
                                                 className="ct-heading h-align- item-st-hexagon highlight-style1">
                                              <div className="ct-inline-css" data-css="
 "></div>
                                              <div className="ct-heading-hexagon-line">
                                                <div className="ct-heading-hexagon"></div>
                                              </div>
                                              <div className="ct-heading-text-below"> About us</div>
                                              <h3 className="item--title case-animate-time st-hexagon " data-wow-delay="ms">
                                                <span>There are many reasons to choice our agency</span></h3></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c3b383d ct-column-none"
                                      data-id="c3b383d" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-04c85f1 elementor-widget elementor-widget-ct_text_editor"
                                          data-id="04c85f1" data-element_type="widget"
                                          data-widget_type="ct_text_editor.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_text_editor-04c85f1" className="ct-text-editor " data-wow-delay="ms">
                                              <div className="ct-inline-css" data-css="
 "></div>
                                              <div className="ct-text-editor elementor-clearfix"> Grupi has been optimized to
                                                give your visitors the best experience in terms of UX/UI, with a unique
                                                design to deliver all layouts.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-09bda50 elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                  data-id="09bda50" data-element_type="section">
                                  <div className="elementor-container elementor-column-gap-extended ">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2cbaf73 ct-column-none"
                                      data-id="2cbaf73" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-6924419 elementor-widget elementor-widget-ct_banner"
                                          data-id="6924419" data-element_type="widget" data-widget_type="ct_banner.default">
                                          <div className="elementor-widget-container">
                                            <div className="ct-banner ct-banner1 ">
                                              <div className="ct-banner-inner">
                                                <div className="ct-banner-image"><img loading="lazy" decoding="async"
                                                                                      width="454" height="509"
                                                                                      src="../wp-content/uploads/2021/06/banner1.jpg"
                                                                                      className="attachment-full" alt=""/></div>
                                                <div className="ct-banner-meta bg-image">
                                                  <div className="ct-banner-title">
                                                    <div className="ct-banner-logo"><img loading="lazy" decoding="async"
                                                                                         width="43" height="43"
                                                                                         src="../wp-content/uploads/2021/06/banner-logo.png"
                                                                                         className="attachment-full" alt=""/></div>
                                                    <span>Best Digital agency 2022</span></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-aad5fae ct-column-none"
                                      data-id="aad5fae" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-23d76b5 elementor-widget elementor-widget-ct_heading"
                                          data-id="23d76b5" data-element_type="widget"
                                          data-widget_type="ct_heading.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_heading-23d76b5"
                                                 className="ct-heading h-align- item-st-default highlight-style1">
                                              <div className="ct-inline-css" data-css="
 "></div>
                                              <h3 className="item--title case-animate-time st-default " data-wow-delay="ms">
                                                <span>We are here to serve you!</span></h3></div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-60524e8 elementor-widget elementor-widget-ct_text_editor"
                                          data-id="60524e8" data-element_type="widget"
                                          data-widget_type="ct_text_editor.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_text_editor-60524e8" className="ct-text-editor " data-wow-delay="ms">
                                              <div className="ct-inline-css" data-css="
 "></div>
                                              <div className="ct-text-editor elementor-clearfix"> With long years of
                                                experience, we’ve established ourselves as one of the pioneering agencies in
                                                the region. Our small, flexible, agile and design-led structures and
                                                processes allow us to highly responsive
                                                and innovative.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-7a87487 elementor-widget elementor-widget-ct_progressbar"
                                          data-id="7a87487" data-element_type="widget"
                                          data-widget_type="ct_progressbar.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_progressbar-7a87487" className="ct-progressbar ct-progressbar1 style1">
                                              <div className="ct-inline-css" data-css="
 "></div>
                                              <div className="ct-progress-item">
                                                <div className="ct-progress-meta"><span
                                                  className="ct-progress-title">UI/UX Design</span>
                                                  <div className="ct-progress-percentage">90%</div>
                                                </div>
                                                <div className="ct-progress-bar-wrap">
                                                  <div className="ct-progress-bar" role="progressbar"
                                                       data-valuetransitiongoal="90"></div>
                                                </div>
                                              </div>
                                              <div className="ct-progress-item">
                                                <div className="ct-progress-meta"><span
                                                  className="ct-progress-title">Mobile Development</span>
                                                  <div className="ct-progress-percentage">85%</div>
                                                </div>
                                                <div className="ct-progress-bar-wrap">
                                                  <div className="ct-progress-bar" role="progressbar"
                                                       data-valuetransitiongoal="85"></div>
                                                </div>
                                              </div>
                                              <div className="ct-progress-item">
                                                <div className="ct-progress-meta"><span className="ct-progress-title">Web Development</span>
                                                  <div className="ct-progress-percentage">95%</div>
                                                </div>
                                                <div className="ct-progress-bar-wrap">
                                                  <div className="ct-progress-bar" role="progressbar"
                                                       data-valuetransitiongoal="95"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-fd05686 el-inline elementor-widget elementor-widget-ct_video_player"
                                          data-id="fd05686" data-element_type="widget"
                                          data-widget_type="ct_video_player.default"></div>
                                        <div
                                          className="elementor-element elementor-element-3bfcc2d el-inline elementor-widget elementor-widget-ct_button"
                                          data-id="3bfcc2d" data-element_type="widget" data-widget_type="ct_button.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_button-3bfcc2d" className="ct-button-wrapper ct-button-layout1">
                                              <div className="ct-inline-css" data-css="
 "></div>
                                              <span className="ct-icon-active"></span> <Link to="/contact-us"
                                                                                          className="btn btn-default  icon-ps- "
                                                                                          data-wow-delay="ms"> <span
                                              className="ct-button-icon ct-align-icon-"> </span> <span className="ct-button-text">Contact us</span>
                                            </Link></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-c6f1cf8 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                          data-id="c6f1cf8" data-element_type="section"
                          data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                          <div className="elementor-container elementor-column-gap-extended ">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d7587ae ct-column-none"
                              data-id="d7587ae" data-element_type="column">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-aeeb5ba elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                  data-id="aeeb5ba" data-element_type="section"
                                  data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                  <div className="elementor-container elementor-column-gap-extended ">
                                    <div
                                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5c55772 ct-col-line1 ct-column-none"
                                      data-id="5c55772" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-a038467 ct-counter-layout1 elementor-widget elementor-widget-ct_counter"
                                          data-id="a038467" data-element_type="widget"
                                          data-widget_type="ct_counter.default">
                                          <div className="elementor-widget-container">
                                            <div className="ct-counter ct-counter-layout1 hover-style1 " data-wow-delay="ms">
                                              <div className="ct-counter-inner">
                                                <div className="ct-counter-icon"><i aria-hidden="true"
                                                                                    className="flaticon flaticon-project-plan"></i>
                                                </div>
                                                <div className="ct-counter-meta">
                                                  <div className="ct-counter-number"><span className="ct-counter-number-value"
                                                                                           data-duration="2000"
                                                                                           data-to-value="2205"
                                                                                           data-delimiter=".">1</span></div>
                                                  <div className="ct-counter-title">Completed Projects</div>
                                                </div>
                                                <div className="ct-counter-line"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-dcdee8a ct-col-line1 ct-column-none"
                                      data-id="dcdee8a" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-3448d57 ct-counter-layout1 elementor-widget elementor-widget-ct_counter"
                                          data-id="3448d57" data-element_type="widget"
                                          data-widget_type="ct_counter.default">
                                          <div className="elementor-widget-container">
                                            <div className="ct-counter ct-counter-layout1 hover-style1 " data-wow-delay="ms">
                                              <div className="ct-counter-inner">
                                                <div className="ct-counter-icon"><i aria-hidden="true"
                                                                                    className="flaticon flaticon-cooperation"></i>
                                                </div>
                                                <div className="ct-counter-meta">
                                                  <div className="ct-counter-number"><span className="ct-counter-number-value"
                                                                                           data-duration="2000"
                                                                                           data-to-value="54"
                                                                                           data-delimiter=".">1</span> <span
                                                    className="ct-counter-number-suffix">+</span></div>
                                                  <div className="ct-counter-title">Active Members</div>
                                                </div>
                                                <div className="ct-counter-line"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5344f3b ct-col-line1 ct-column-none"
                                      data-id="5344f3b" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-3b9b233 ct-counter-layout1 elementor-widget elementor-widget-ct_counter"
                                          data-id="3b9b233" data-element_type="widget"
                                          data-widget_type="ct_counter.default">
                                          <div className="elementor-widget-container">
                                            <div className="ct-counter ct-counter-layout1 hover-style1 " data-wow-delay="ms">
                                              <div className="ct-counter-inner">
                                                <div className="ct-counter-icon"><i aria-hidden="true"
                                                                                    className="flaticon flaticon-award"></i></div>
                                                <div className="ct-counter-meta">
                                                  <div className="ct-counter-number"><span className="ct-counter-number-value"
                                                                                           data-duration="2000"
                                                                                           data-to-value="14"
                                                                                           data-delimiter=".">1</span> <span
                                                    className="ct-counter-number-suffix">+</span></div>
                                                  <div className="ct-counter-title">Award Winning</div>
                                                </div>
                                                <div className="ct-counter-line"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-a00da7f ct-column-none"
                                      data-id="a00da7f" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-408f6fb ct-counter-layout1 elementor-widget elementor-widget-ct_counter"
                                          data-id="408f6fb" data-element_type="widget"
                                          data-widget_type="ct_counter.default">
                                          <div className="elementor-widget-container">
                                            <div className="ct-counter ct-counter-layout1 hover-style1 " data-wow-delay="ms">
                                              <div className="ct-counter-inner">
                                                <div className="ct-counter-icon"><i aria-hidden="true"
                                                                                    className="flaticon flaticon-award-1"></i></div>
                                                <div className="ct-counter-meta">
                                                  <div className="ct-counter-number"><span className="ct-counter-number-value"
                                                                                           data-duration="2000"
                                                                                           data-to-value="100"
                                                                                           data-delimiter=".">1</span> <span
                                                    className="ct-counter-number-suffix">%</span></div>
                                                  <div className="ct-counter-title">Satisfaction Rate</div>
                                                </div>
                                                <div className="ct-counter-line"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-37c0190f elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                  data-id="37c0190f" data-element_type="section">
                                  <div className="elementor-container elementor-column-gap-extended ">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-69cf4f07 ct-column-none"
                                      data-id="69cf4f07" data-element_type="column"
                                      data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-4f39dbd5 elementor-widget elementor-widget-ct_heading"
                                          data-id="4f39dbd5" data-element_type="widget"
                                          data-widget_type="ct_heading.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_heading-4f39dbd5"
                                                 className="ct-heading h-align- item-st-hexagon highlight-style1">
                                              <div className="ct-inline-css" data-css="
 "></div>
                                              <div className="ct-heading-hexagon-line">
                                                <div className="ct-heading-hexagon"></div>
                                              </div>
                                              <div className="ct-heading-text-below"> Services</div>
                                              <h3 className="item--title case-animate-time st-hexagon " data-wow-delay="ms">
                                                <span>We are a digitally-led, full-service creative agency. </span></h3>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7316bb39 ct-column-none"
                                      data-id="7316bb39" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-5156e210 elementor-widget elementor-widget-ct_text_editor"
                                          data-id="5156e210" data-element_type="widget"
                                          data-widget_type="ct_text_editor.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_text_editor-5156e210" className="ct-text-editor " data-wow-delay="ms">
                                              <div className="ct-inline-css" data-css="
 "></div>
                                              <div className="ct-text-editor elementor-clearfix"> Grupi is a design studio
                                                founded in London and expanded our services, and become a multinational
                                                firm.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-f5af570 elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                  data-id="f5af570" data-element_type="section">
                                  <div className="elementor-container elementor-column-gap-extended ">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cb9a0cb ct-column-none"
                                      data-id="cb9a0cb" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-a084c0d elementor-widget elementor-widget-ct_service_carousel"
                                          data-id="a084c0d" data-element_type="widget"
                                          data-widget_type="ct_service_carousel.default">
                                          <div className="elementor-widget-container">
                                            <div id="ct_service_carousel-a084c0d"
                                                 className="ct-service-carousel1 ct-slick-slider dots-top-right">
                                              <div className="ct-carousel-inner">
                                                <div className="ct-slick-carousel" data-arrows="false" data-dots="true"
                                                     data-pauseOnHover="false" data-autoplay="false"
                                                     data-autoplaySpeed="5000" data-infinite="false" data-speed="500"
                                                     data-colxs="1" data-colsm="2" data-colmd="2" data-collg="2"
                                                     data-colxl="2" data-dir="false" data-slidesToScroll="2">
                                                  <div className="carousel-item slick-slide">
                                                    <div className="grid-item-inner " data-wow-duration="1.2s">
                                                      <div className="item--icon-abs"><i className="flaticon-flow-diagram"></i>
                                                      </div>
                                                      <div className="item--featured bg-image"
                                                           style={{ backgroundImage: 'url(../wp-content/uploads/2021/06/g25-370x350.jpg)' }}></div>
                                                      <div className="item--holder">
                                                        <div className="item--icon"><i className="flaticon-flow-diagram"></i></div>
                                                        <h3 className="item--title"><a href="#"> User Experience Design </a>
                                                        </h3>
                                                        <ul className="item--feature">
                                                          <li>UX strategy</li>
                                                          <li>Information architecture</li>
                                                          <li>Prototyping</li>
                                                          <li>Wireframing</li>
                                                          <li>UI Design</li>
                                                        </ul>
                                                      </div>
                                                      <div className="item--line"></div>
                                                    </div>
                                                  </div>
                                                  <div className="carousel-item slick-slide">
                                                    <div className="grid-item-inner " data-wow-duration="1.2s">
                                                      <div className="item--icon-abs"><i className="flaticon-branding"></i></div>
                                                      <div className="item--featured bg-image"
                                                           style={{ backgroundImage: 'url(../wp-content/uploads/2021/06/g30-370x350.jpg)' }}></div>
                                                      <div className="item--holder">
                                                        <div className="item--icon"><i className="flaticon-branding"></i></div>
                                                        <h3 className="item--title"><a href="#"> Web Development </a></h3>
                                                        <ul className="item--feature">
                                                          <li>WordPress web development</li>
                                                          <li>Dynamic CMS-based development</li>
                                                          <li>Mobile app development</li>
                                                          <li>E-commerce</li>
                                                          <li>Custom Software Development</li>
                                                        </ul>
                                                      </div>
                                                      <div className="item--line"></div>
                                                    </div>
                                                  </div>
                                                  <div className="carousel-item slick-slide">
                                                    <div className="grid-item-inner " data-wow-duration="1.2s">
                                                      <div className="item--icon-abs"><i className="flaticon-project-plan"></i>
                                                      </div>
                                                      <div className="item--featured bg-image"
                                                           style={{ backgroundImage: 'url(../wp-content/uploads/2021/06/g29-370x350.jpg)' }}></div>
                                                      <div className="item--holder">
                                                        <div className="item--icon"><i className="flaticon-project-plan"></i></div>
                                                        <h3 className="item--title"><a href="#"> Video Production </a></h3>
                                                        <ul className="item--feature">
                                                          <li>Concept</li>
                                                          <li>Scripting</li>
                                                          <li>Storyboarding</li>
                                                          <li>lllustration</li>
                                                          <li>3D animation</li>
                                                        </ul>
                                                      </div>
                                                      <div className="item--line"></div>
                                                    </div>
                                                  </div>
                                                  <div className="carousel-item slick-slide">
                                                    <div className="grid-item-inner " data-wow-duration="1.2s">
                                                      <div className="item--icon-abs"><i className="flaticon-web-browser"></i></div>
                                                      <div className="item--featured bg-image"
                                                           style={{ backgroundImage: 'url(../wp-content/uploads/2021/06/g27-370x350.jpg)' }}></div>
                                                      <div className="item--holder">
                                                        <div className="item--icon"><i className="flaticon-web-browser"></i></div>
                                                        <h3 className="item--title"><a href="#"> Cloud Computing Services </a>
                                                        </h3>
                                                        <ul className="item--feature">
                                                          <li>UX strategy</li>
                                                          <li>Information architecture</li>
                                                          <li>Prototyping</li>
                                                          <li>Wireframing</li>
                                                          <li>UI Design</li>
                                                        </ul>
                                                      </div>
                                                      <div className="item--line"></div>
                                                    </div>
                                                  </div>
                                                  <div className="carousel-item slick-slide">
                                                    <div className="grid-item-inner " data-wow-duration="1.2s">
                                                      <div className="item--icon-abs"><i className="flaticon-content-design"></i>
                                                      </div>
                                                      <div className="item--featured bg-image"
                                                           style={{ backgroundImage: 'url(../wp-content/uploads/2021/06/g26-370x350.jpg)' }}></div>
                                                      <div className="item--holder">
                                                        <div className="item--icon"><i className="flaticon-content-design"></i>
                                                        </div>
                                                        <h3 className="item--title"><a href="#"> Mobile App Development </a>
                                                        </h3>
                                                        <ul className="item--feature">
                                                          <li>UX strategy</li>
                                                          <li>Information architecture</li>
                                                          <li>Prototyping</li>
                                                          <li>Wireframing</li>
                                                          <li>UI Design</li>
                                                        </ul>
                                                      </div>
                                                      <div className="item--line"></div>
                                                    </div>
                                                  </div>
                                                  <div className="carousel-item slick-slide">
                                                    <div className="grid-item-inner " data-wow-duration="1.2s">
                                                      <div className="item--icon-abs"><i className="flaticon-web-design"></i></div>
                                                      <div className="item--featured bg-image"
                                                           style={{ backgroundImage: 'url(../wp-content/uploads/2021/06/g30-370x350.jpg)' }}></div>
                                                      <div className="item--holder">
                                                        <div className="item--icon"><i className="flaticon-web-design"></i></div>
                                                        <h3 className="item--title"><a href="#"> Cyber Security Services </a>
                                                        </h3>
                                                        <ul className="item--feature">
                                                          <li>UX strategy</li>
                                                          <li>Information architecture</li>
                                                          <li>Prototyping</li>
                                                          <li>Wireframing</li>
                                                          <li>UI Design</li>
                                                        </ul>
                                                      </div>
                                                      <div className="item--line"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bc1735f ct-column-none"
                                      data-id="bc1735f" data-element_type="column">
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-0fe9be4 elementor-widget elementor-widget-ct_image"
                                          data-id="0fe9be4" data-element_type="widget" data-widget_type="ct_image.default">
                                          <div className="elementor-widget-container">
                                            <div className="ct-image-single    " data-width="" data-height=""
                                                 data-wow-delay="ms">
                                              <div className="ct-image-single--inner"><Link to="/"> <img
                                                loading="lazy" decoding="async" width="304" height="336"
                                                src="../wp-content/uploads/2021/06/logo-big.png"
                                                className="no-lazyload img-main attachment-full" alt=""/> </Link></div>
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
                        </section>
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-b38496d elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                          data-id="b38496d" data-element_type="section"
                          data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                          <div className="elementor-container elementor-column-gap-no ">
                            <div
                              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e7c7ccc ct-column-none"
                              data-id="1e7c7ccc" data-element_type="column">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-23d230b3 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                  data-id="23d230b3" data-element_type="widget" data-widget_type="divider.default">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-divider"><span className="elementor-divider-separator"> </span></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div></article></main></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

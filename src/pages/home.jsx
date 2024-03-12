import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const prevPath = localStorage.getItem('previousPath');
    if (prevPath !== '/') {
      localStorage.setItem('previousPath', location.pathname);
      window.location.reload();
    }
  }, []);

  return (
    <div id="content" className="site-content">
      <div className="content-inner">
        <div className="container content-container">
          <div className="row content-row">
            <div id="primary" className="content-area content-full-width col-12">
              <main id="main" className="site-main">
                <article id="post-23" className="post-23 page type-page status-publish hentry">
                  <div className="entry-content clearfix">
                    <div data-elementor-type="wp-page" data-elementor-id="23" className="elementor elementor-23">
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-2ec534d elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="2ec534d" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                        <div className="elementor-container elementor-column-gap-no ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0c8d145 ct-column-none"
                            data-id="0c8d145" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-55f47fe elementor-widget elementor-widget-slider_revolution"
                                data-id="55f47fe" data-element_type="widget"
                                data-widget_type="slider_revolution.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="wp-block-themepunch-revslider">
                                    <p className="rs-p-wp-fix"></p>
                                    <rs-module-wrap
                                      id="rev_slider_1_1_wrapper"
                                      data-source="gallery"
                                      style={{
                                        visibility: 'hidden',
                                        background: 'transparent',
                                        padding: 0,
                                        margin: '0px auto',
                                        marginTop: 0,
                                        marginBottom: 0,
                                      }}>
                                      <rs-module id="rev_slider_1_1" data-version="6.6.20">
                                        <rs-slides style={{ overflow: 'hidden', position: 'absolute' }}>
                                          <rs-slide style={{ position: 'absolute' }} data-key="rs-1" data-title="Slide"
                                                    data-thumb="wp-content/uploads/2021/06/bg-slider1-50x100.jpg"
                                                    data-anim="ms:10;" data-in="o:1;" data-out="a:false;">
                                            <img
                                              loading="lazy" decoding="async"
                                              src="wp-content/plugins/revslider/public/assets/assets/dummy.png" alt=""
                                              title="bg-slider1" width="1920" height="936"
                                              className="rev-slidebg tp-rs-img rs-lazyload"
                                              data-lazyload="wp-content/uploads/2021/06/bg-slider1.jpg" data-no-retina
                                            />
                                            <rs-group
                                              id="slider-1-slide-1-layer-2"
                                              data-type="group"
                                              data-xy="xo:30px,30px,15px,15px;y:m;yo:47px,0,0,0;"
                                              data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                                              data-dim="w:800px,800px,600px,400px;h:360px,360px,310px,280px;"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="o:1;"
                                              data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                              style={{ zIndex: 15 }}
                                            >
                                              <Link
                                                id="slider-1-slide-1-layer-6"
                                                className="rs-layer"
                                                to="/about-us" target="_self" rel="nofollow"
                                                data-type="text"
                                                data-xy="xo:183px,183px,183px,143px;y:b;"
                                                data-pos="a"
                                                data-text="w:normal;s:16;l:51;"
                                                data-rsp_o="off"
                                                data-rsp_bd="off"
                                                data-frame_0="y:100%;"
                                                data-frame_0_mask="u:t;"
                                                data-frame_1="e:back.inOut;st:1500;sp:1200;sR:1500;"
                                                data-frame_1_mask="u:t;"
                                                data-frame_999="o:0;st:w;sR:6300;"
                                                style={{ zIndex: 14, fontFamily: 'Bebas Neue' }}
                                              >
                                                <span className="btn btn-slider1">Our team<i className="flaticon-right-arrows space-left"></i></span>
                                              </Link>
                                              <Link
                                                id="slider-1-slide-1-layer-5"
                                                className="rs-layer"
                                                to="/our-team" target="_self" rel="nofollow"
                                                data-type="text"
                                                data-xy="y:b;"
                                                data-pos="a"
                                                data-text="w:normal;s:16;l:51;"
                                                data-rsp_o="off"
                                                data-rsp_bd="off"
                                                data-frame_0="y:100%;"
                                                data-frame_0_mask="u:t;"
                                                data-frame_1="e:back.inOut;st:1300;sp:1200;sR:1300;"
                                                data-frame_1_mask="u:t;"
                                                data-frame_999="o:0;st:w;sR:6500;"
                                                style={{ zIndex: 13, fontFamily: 'Bebas Neue' }}
                                              >
                                                <span className="btn btn-outline-gradient">About us<i
                                              className="flaticon-next space-left"></i></span> </Link>
                                              <rs-layer
                                                id="slider-1-slide-1-layer-4"
                                                data-type="text"
                                                data-color="#cfcfcf"
                                                data-xy="yo:195px,195px,145px,100px;"
                                                data-pos="a"
                                                data-text="w:normal;s:18,18,16,16;l:32,32,28,28;"
                                                data-dim="w:430px,430px,430px,280px;"
                                                data-rsp_o="off"
                                                data-rsp_bd="off"
                                                data-frame_0="y:100%;"
                                                data-frame_0_mask="u:t;"
                                                data-frame_1="e:back.inOut;st:1000;sp:1200;sR:1000;"
                                                data-frame_1_mask="u:t;"
                                                data-frame_999="o:0;st:w;sR:6800;"
                                                style={{ zIndex: 12, fontFamily: 'Bebas Neue' }}
                                              >We’re a full-service creative digital marketing agency, collaborating
                                                with
                                                brands all over the world.
                                              </rs-layer>
                                              <rs-layer
                                                id="slider-1-slide-1-layer-3"
                                                data-type="text"
                                                data-xy="yo:-9px;"
                                                data-pos="a"
                                                data-text="w:normal;s:90,90,70,48;l:90,90,70,48;"
                                                data-rsp_o="off"
                                                data-rsp_bd="off"
                                                data-frame_0="y:100%;"
                                                data-frame_0_mask="u:t;"
                                                data-frame_1="e:back.inOut;st:700;sp:1200;sR:700;"
                                                data-frame_1_mask="u:t;"
                                                data-frame_999="o:0;st:w;sR:7100;"
                                                style={{ zIndex: 11, fontFamily: 'Bebas Neue' }}
                                              >We are the top<br /> agency in town
                                              </rs-layer>
                                            </rs-group>
                                            <rs-layer
                                              id="slider-1-slide-1-layer-0"
                                              className="ct-text-outline2"
                                              data-type="text"
                                              data-color="rgba(12, 12, 12, 0)"
                                              data-rsp_ch="on"
                                              data-xy="x:r,r,c,c;xo:38px,31px,0,0;y:b;yo:-20px,-16px,0,0;"
                                              data-text="w:normal;s:260,216,150,92;l:260,216,150,92;a:right;"
                                              data-dim="w:1400px,1165px,auto,auto;"
                                              data-basealign="slide"
                                              data-frame_0="y:50,41,31,19;"
                                              data-frame_1="st:1700;sp:1000;sR:1700;"
                                              data-frame_999="o:0;st:w;sR:6300;"
                                              style={{ zIndex: 9, fontFamily: 'Bebas Neue' }}
                                            >Digital agency
                                            </rs-layer>
                                            <rs-layer
                                              id="slider-1-slide-1-layer-1"
                                              className="ct-text-outline"
                                              data-type="text"
                                              data-color="#0c0c0c"
                                              data-rsp_ch="on"
                                              data-xy="xo:-348px,-289px,-219px,-135px;yo:140px,116px,88px,54px;"
                                              data-text="w:normal;s:260,216,164,101;l:260,216,164,101;"
                                              data-frame_0="x:-50,-41,-31,-19;"
                                              data-frame_1="st:700;sp:1000;"
                                              data-frame_999="o:0;st:w;sR:8000;"
                                              style={{ zIndex: 8, fontFamily: 'Bebas Neue' }}
                                            >Grupi
                                            </rs-layer>
                                            <rs-layer
                                              id="slider-1-slide-1-layer-7"
                                              className="ct-image-slider1"
                                              data-type="image"
                                              data-xy="x:r;xo:145px,15px,15px,15px;y:m;yo:-20px,0,0,0;"
                                              data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                                              data-dim="w:['510px','510px','510px','510px'];h:['549px','549px','549px','549px'];"
                                              data-vbility="t,t,f,f"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="x:50;"
                                              data-frame_1="e:back.inOut;st:700;sp:1000;sR:700;"
                                              data-frame_999="o:0;st:w;sR:7300;"
                                              style={{ zIndex: 10 }}
                                            ><img loading="lazy" decoding="async"
                                                  src="wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                  alt="img-slider1" className="tp-rs-img rs-lazyload" width="510"
                                                  height="549"
                                                  data-lazyload="wp-content/uploads/2021/06/img-slider1.jpg"
                                                  data-no-retina /></rs-layer>
                                          </rs-slide>
                                          <rs-slide style={{ position: 'absolute' }} data-key="rs-2" data-title="Slide"
                                                    data-thumb="//demo.casethemes.net/grupi/wp-content/uploads/2021/06/bg-slider1-50x100.jpg"
                                                    data-anim="ms:10;" data-in="o:1;" data-out="a:false;"><img
                                            loading="lazy" decoding="async"
                                            src="wp-content/plugins/revslider/public/assets/assets/dummy.png" alt=""
                                            title="bg-slider1" width="1920" height="936"
                                            className="rev-slidebg tp-rs-img rs-lazyload"
                                            data-lazyload="wp-content/uploads/2021/06/bg-slider1.jpg" data-no-retina />
                                            <rs-group
                                              id="slider-1-slide-2-layer-2"
                                              data-type="group"
                                              data-xy="xo:30px,30px,15px,15px;y:m;yo:47px,0,0,0;"
                                              data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                                              data-dim="w:800px,800px,600px,400px;h:360px,360px,310px,280px;"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="o:1;"
                                              data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                              style={{ zIndex: 15 }}
                                            ><Link
                                              id="slider-1-slide-2-layer-6"
                                              className="rs-layer"
                                              to="/about-us" target="_self" rel="nofollow"
                                              data-type="text"
                                              data-xy="xo:183px,183px,183px,143px;y:b;"
                                              data-pos="a"
                                              data-text="w:normal;s:16;l:51;"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="y:100%;"
                                              data-frame_0_mask="u:t;"
                                              data-frame_1="e:back.inOut;st:1500;sp:1200;sR:1500;"
                                              data-frame_1_mask="u:t;"
                                              data-frame_999="o:0;st:w;sR:6300;"
                                              style={{ zIndex: 14, fontFamily: 'Bebas Neue' }}
                                            ><span className="btn btn-slider1">Our team<i
                                              className="flaticon-right-arrows space-left"></i></span> </Link><Link
                                              id="slider-1-slide-2-layer-5"
                                              className="rs-layer"
                                              to="/about-us" target="_self" rel="nofollow"
                                              data-type="text"
                                              data-xy="y:b;"
                                              data-pos="a"
                                              data-text="w:normal;s:16;l:51;"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="y:100%;"
                                              data-frame_0_mask="u:t;"
                                              data-frame_1="e:back.inOut;st:1300;sp:1200;sR:1300;"
                                              data-frame_1_mask="u:t;"
                                              data-frame_999="o:0;st:w;sR:6500;"
                                              style={{ zIndex: 13, fontFamily: 'Bebas Neue' }}
                                            ><span className="btn btn-outline-gradient">About us<i
                                              className="flaticon-next space-left"></i></span> </Link>
                                              <rs-layer
                                                id="slider-1-slide-2-layer-4"
                                                data-type="text"
                                                data-color="#cfcfcf"
                                                data-xy="yo:195px,195px,145px,100px;"
                                                data-pos="a"
                                                data-text="w:normal;s:18,18,16,16;l:32,32,28,28;"
                                                data-dim="w:430px,430px,430px,280px;"
                                                data-rsp_o="off"
                                                data-rsp_bd="off"
                                                data-frame_0="y:100%;"
                                                data-frame_0_mask="u:t;"
                                                data-frame_1="e:back.inOut;st:1000;sp:1200;sR:1000;"
                                                data-frame_1_mask="u:t;"
                                                data-frame_999="o:0;st:w;sR:6800;"
                                                style={{ zIndex: 12, fontFamily: 'Bebas Neue' }}
                                              >We’re a full-service creative digital marketing agency, collaborating
                                                with
                                                brands all over the world.
                                              </rs-layer>
                                              <rs-layer
                                                id="slider-1-slide-2-layer-3"
                                                data-type="text"
                                                data-xy="yo:-9px;"
                                                data-pos="a"
                                                data-text="w:normal;s:90,90,70,48;l:90,90,70,48;"
                                                data-rsp_o="off"
                                                data-rsp_bd="off"
                                                data-frame_0="y:100%;"
                                                data-frame_0_mask="u:t;"
                                                data-frame_1="e:back.inOut;st:700;sp:1200;sR:700;"
                                                data-frame_1_mask="u:t;"
                                                data-frame_999="o:0;st:w;sR:7100;"
                                                style={{ zIndex: 11, fontFamily: 'Bebas Neue' }}
                                              >Improve Your<br /> Business today!
                                              </rs-layer>
                                            </rs-group>
                                            <rs-layer
                                              id="slider-1-slide-2-layer-0"
                                              className="ct-text-outline2"
                                              data-type="text"
                                              data-color="rgba(12, 12, 12, 0)"
                                              data-rsp_ch="on"
                                              data-xy="x:r,r,c,c;xo:38px,31px,0,0;y:b;yo:-20px,-16px,0,0;"
                                              data-text="w:normal;s:260,216,150,92;l:260,216,150,92;a:right;"
                                              data-dim="w:1400px,1165px,auto,auto;"
                                              data-basealign="slide"
                                              data-frame_0="y:50,41,31,19;"
                                              data-frame_1="st:1700;sp:1000;sR:1700;"
                                              data-frame_999="o:0;st:w;sR:6300;"
                                              style={{ zIndex: 9, fontFamily: 'Bebas Neue' }}
                                            >Digital agency
                                            </rs-layer>
                                            <rs-layer
                                              id="slider-1-slide-2-layer-1"
                                              className="ct-text-outline"
                                              data-type="text"
                                              data-color="#0c0c0c"
                                              data-rsp_ch="on"
                                              data-xy="xo:-348px,-289px,-219px,-135px;yo:140px,116px,88px,54px;"
                                              data-text="w:normal;s:260,216,164,101;l:260,216,164,101;"
                                              data-frame_0="x:-50,-41,-31,-19;"
                                              data-frame_1="st:700;sp:1000;"
                                              data-frame_999="o:0;st:w;sR:8000;"
                                              style={{ zIndex: 8, fontFamily: 'Bebas Neue' }}
                                            >Grupi
                                            </rs-layer>
                                            <rs-layer
                                              id="slider-1-slide-2-layer-7"
                                              className="ct-image-slider1"
                                              data-type="image"
                                              data-xy="x:r;xo:145px,15px,15px,15px;y:m;yo:-20px,0,0,0;"
                                              data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                                              data-dim="w:['510px','510px','510px','510px'];h:['549px','549px','549px','549px'];"
                                              data-vbility="t,t,f,f"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="x:50;"
                                              data-frame_1="e:back.inOut;st:700;sp:1000;sR:700;"
                                              data-frame_999="o:0;st:w;sR:7300;"
                                              style={{ zIndex: 10 }}
                                            ><img loading="lazy" decoding="async"
                                                  src="wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                  alt="img-slider2" className="tp-rs-img rs-lazyload" width="510"
                                                  height="549"
                                                  data-lazyload="wp-content/uploads/2021/06/img-slider2.jpg"
                                                  data-no-retina /></rs-layer>
                                          </rs-slide>
                                          <rs-slide style={{ postion: 'absolute' }} data-key="rs-3" data-title="Slide"
                                                    data-thumb="//demo.casethemes.net/grupi/wp-content/uploads/2021/06/bg-slider1-50x100.jpg"
                                                    data-anim="ms:10;" data-in="o:1;" data-out="a:false;"><img
                                            loading="lazy" decoding="async"
                                            src="wp-content/plugins/revslider/public/assets/assets/dummy.png" alt=""
                                            title="bg-slider1" width="1920" height="936"
                                            className="rev-slidebg tp-rs-img rs-lazyload"
                                            data-lazyload="wp-content/uploads/2021/06/bg-slider1.jpg" data-no-retina />
                                            <rs-group
                                              id="slider-1-slide-3-layer-2"
                                              data-type="group"
                                              data-xy="xo:30px,30px,15px,15px;y:m;yo:47px,0,0,0;"
                                              data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                                              data-dim="w:800px,800px,600px,400px;h:360px,360px,310px,280px;"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="o:1;"
                                              data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                              style={{ zIndex: 15 }}
                                            ><Link
                                              id="slider-1-slide-3-layer-6"
                                              className="rs-layer"
                                              to="/about-us" target="_self" rel="nofollow"
                                              data-type="text"
                                              data-xy="xo:183px,183px,183px,143px;y:b;"
                                              data-pos="a"
                                              data-text="w:normal;s:16;l:51;"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="y:100%;"
                                              data-frame_0_mask="u:t;"
                                              data-frame_1="e:back.inOut;st:1500;sp:1200;sR:1500;"
                                              data-frame_1_mask="u:t;"
                                              data-frame_999="o:0;st:w;sR:6300;"
                                              sstyle={{ zIndex: 14, fontFamily: 'Bebas Neue' }}
                                            ><span className="btn btn-slider1">Our team<i
                                              className="flaticon-right-arrows space-left"></i></span> </Link><Link
                                              id="slider-1-slide-3-layer-5"
                                              className="rs-layer"
                                              to="/about-us" target="_self" rel="nofollow"
                                              data-type="text"
                                              data-xy="y:b;"
                                              data-pos="a"
                                              data-text="w:normal;s:16;l:51;"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="y:100%;"
                                              data-frame_0_mask="u:t;"
                                              data-frame_1="e:back.inOut;st:1300;sp:1200;sR:1300;"
                                              data-frame_1_mask="u:t;"
                                              data-frame_999="o:0;st:w;sR:6500;"
                                              style={{ zIndex: 13, fontFamily: 'Bebas Neue' }}
                                            ><span className="btn btn-outline-gradient">About us<i
                                              className="flaticon-next space-left"></i></span> </Link>
                                              <rs-layer
                                                id="slider-1-slide-3-layer-4"
                                                data-type="text"
                                                data-color="#cfcfcf"
                                                data-xy="yo:195px,195px,145px,100px;"
                                                data-pos="a"
                                                data-text="w:normal;s:18,18,16,16;l:32,32,28,28;"
                                                data-dim="w:430px,430px,430px,280px;"
                                                data-rsp_o="off"
                                                data-rsp_bd="off"
                                                data-frame_0="y:100%;"
                                                data-frame_0_mask="u:t;"
                                                data-frame_1="e:back.inOut;st:1000;sp:1200;sR:1000;"
                                                data-frame_1_mask="u:t;"
                                                data-frame_999="o:0;st:w;sR:6800;"
                                                style={{ zIndex: 12, fontFamily: 'Bebas Neue' }}
                                              >We’re a full-service creative digital marketing agency, collaborating
                                                with
                                                brands all over the world.
                                              </rs-layer>
                                              <rs-layer
                                                id="slider-1-slide-3-layer-3"
                                                data-type="text"
                                                data-xy="yo:-9px;"
                                                data-pos="a"
                                                data-text="w:normal;s:90,90,70,48;l:90,90,70,48;"
                                                data-rsp_o="off"
                                                data-rsp_bd="off"
                                                data-frame_0="y:100%;"
                                                data-frame_0_mask="u:t;"
                                                data-frame_1="e:back.inOut;st:700;sp:1200;sR:700;"
                                                data-frame_1_mask="u:t;"
                                                data-frame_999="o:0;st:w;sR:7100;"
                                                style={{ zIndex: 11, fontFamily: 'Bebas Neue' }}
                                              >We are very<br /> energetic.
                                              </rs-layer>
                                            </rs-group>
                                            <rs-layer
                                              id="slider-1-slide-3-layer-0"
                                              className="ct-text-outline2"
                                              data-type="text"
                                              data-color="rgba(12, 12, 12, 0)"
                                              data-rsp_ch="on"
                                              data-xy="x:r,r,c,c;xo:38px,31px,0,0;y:b;yo:-20px,-16px,0,0;"
                                              data-text="w:normal;s:260,216,150,92;l:260,216,150,92;a:right;"
                                              data-dim="w:1400px,1165px,auto,auto;"
                                              data-basealign="slide"
                                              data-frame_0="y:50,41,31,19;"
                                              data-frame_1="st:1700;sp:1000;sR:1700;"
                                              data-frame_999="o:0;st:w;sR:6300;"
                                              style={{ zIndex: 9, fontFamily: 'Bebas Neue' }}
                                            >Digital agency
                                            </rs-layer>
                                            <rs-layer
                                              id="slider-1-slide-3-layer-1"
                                              className="ct-text-outline"
                                              data-type="text"
                                              data-color="#0c0c0c"
                                              data-rsp_ch="on"
                                              data-xy="xo:-348px,-289px,-219px,-135px;yo:140px,116px,88px,54px;"
                                              data-text="w:normal;s:260,216,164,101;l:260,216,164,101;"
                                              data-frame_0="x:-50,-41,-31,-19;"
                                              data-frame_1="st:700;sp:1000;"
                                              data-frame_999="o:0;st:w;sR:8000;"
                                              style={{ zIndex: 8, fontFamily: 'Bebas Neue' }}
                                            >Grupi
                                            </rs-layer>
                                            <rs-layer
                                              id="slider-1-slide-3-layer-7"
                                              className="ct-image-slider1"
                                              data-type="image"
                                              data-xy="x:r;xo:145px,15px,15px,15px;y:m;yo:-20px,0,0,0;"
                                              data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                                              data-dim="w:['510px','510px','510px','510px'];h:['549px','549px','549px','549px'];"
                                              data-vbility="t,t,f,f"
                                              data-rsp_o="off"
                                              data-rsp_bd="off"
                                              data-frame_0="x:50;"
                                              data-frame_1="e:back.inOut;st:700;sp:1000;sR:700;"
                                              data-frame_999="o:0;st:w;sR:7300;"
                                              style={{ zIndex: 10 }}
                                            ><img loading="lazy" decoding="async"
                                                  src="wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                  alt="img-slider3" className="tp-rs-img rs-lazyload" width="510"
                                                  height="549"
                                                  data-lazyload="wp-content/uploads/2021/06/img-slider3.jpg"
                                                  data-no-retina /></rs-layer>
                                          </rs-slide>
                                        </rs-slides>
                                      </rs-module>
                                    </rs-module-wrap>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4f208b63 elementor-widget elementor-widget-ct_social"
                                data-id="4f208b63" data-element_type="widget" data-widget_type="ct_social.default">
                                <div className="elementor-widget-container"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-5068beb elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="5068beb" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-extended ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0efb518 ct-column-none"
                            data-id="0efb518" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-aabd046 elementor-widget elementor-widget-ct_service_external_carousel"
                                data-id="aabd046" data-element_type="widget"
                                data-widget_type="ct_service_external_carousel.default">
                                <div className="elementor-widget-container">
                                  <div className="ct-service ct-service-external1 ct-slick-slider">
                                    <div className="ct-carousel-inner">
                                      <div className="ct-slick-carousel" data-arrows="" data-dots="true"
                                           data-pauseOnHover=""
                                           data-autoplay="" data-autoplaySpeed="5000" data-infinite="" data-speed="500"
                                           data-colxs="1" data-colsm="2" data-colmd="2" data-collg="4" data-colxl="4"
                                           data-dir="false" data-slidesToScroll="2">
                                        <div className="slick-slide">
                                          <div className="item--inner ">
                                            <div className="item--line"></div>
                                            <div className="item--subtitle">Web and mobile development</div>
                                            <h3 className="item--title"><a href="#"> Innovating products and solutions
                                              within
                                              your time and budget. </a></h3>
                                            <div className="item--readmore"><a href="#"> <span
                                              className="text-gradient">+</span>
                                              <span>+</span> </a></div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner ">
                                            <div className="item--line"></div>
                                            <div className="item--subtitle">User experience design</div>
                                            <h3 className="item--title"><a href="#"> World-class u/x with pixel-perfect
                                              user
                                              interface designs. </a></h3>
                                            <div className="item--readmore"><a href="#"> <span
                                              className="text-gradient">+</span>
                                              <span>+</span> </a></div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner ">
                                            <div className="item--line"></div>
                                            <div className="item--subtitle">Video production &amp; photography</div>
                                            <h3 className="item--title"><a href="#"> Engaging and high-end video
                                              photography
                                              services to help business. </a></h3>
                                            <div className="item--readmore"><a href="#"> <span
                                              className="text-gradient">+</span>
                                              <span>+</span> </a></div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner ">
                                            <div className="item--line"></div>
                                            <div className="item--subtitle">Digital marketing</div>
                                            <h3 className="item--title"><a href="#"> Strategic, performance-driven, and
                                              comprehensive digital marketing. </a></h3>
                                            <div className="item--readmore"><a href="#"> <span
                                              className="text-gradient">+</span>
                                              <span>+</span> </a></div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner ">
                                            <div className="item--line"></div>
                                            <div className="item--subtitle">Web and mobile development</div>
                                            <h3 className="item--title"><a href="#"> Innovating products and solutions
                                              within
                                              your time and budget. </a></h3>
                                            <div className="item--readmore"><a href="#"> <span
                                              className="text-gradient">+</span>
                                              <span>+</span> </a></div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner ">
                                            <div className="item--line"></div>
                                            <div className="item--subtitle">User experience design</div>
                                            <h3 className="item--title"><a href="#"> World-class u/x with pixel-perfect
                                              user
                                              interface designs. </a></h3>
                                            <div className="item--readmore"><a href="#"> <span
                                              className="text-gradient">+</span>
                                              <span>+</span> </a></div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner ">
                                            <div className="item--line"></div>
                                            <div className="item--subtitle">Video production &amp; photography</div>
                                            <h3 className="item--title"><a href="#"> Engaging and high-end video
                                              photography
                                              services to help business. </a></h3>
                                            <div className="item--readmore"><a href="#"> <span
                                              className="text-gradient">+</span>
                                              <span>+</span> </a></div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner ">
                                            <div className="item--line"></div>
                                            <div className="item--subtitle">Digital marketing</div>
                                            <h3 className="item--title"><a href="#"> Strategic, performance-driven, and
                                              comprehensive digital marketing. </a></h3>
                                            <div className="item--readmore"><a href="#"> <span
                                              className="text-gradient">+</span>
                                              <span>+</span> </a></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-604b75f0 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="604b75f0" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-extended ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4c79f9c0 ct-column-none"
                            data-id="4c79f9c0" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-1818e7b elementor-widget elementor-widget-ct_square_animate"
                                data-id="1818e7b" data-element_type="widget"
                                data-widget_type="ct_square_animate.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_square_animate-1818e7b" className="ct-square-animate el-move-parents">
                                    <div className="ct-square-container">
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-4604c852 elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                data-id="4604c852" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-extended ">
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6af7aae8 ct-column-none"
                                    data-id="6af7aae8" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-45871a05 elementor-widget elementor-widget-ct_banner"
                                        data-id="45871a05" data-element_type="widget"
                                        data-widget_type="ct_banner.default">
                                        <div className="elementor-widget-container">
                                          <div className="ct-banner ct-banner1 ">
                                            <div className="ct-banner-inner">
                                              <div className="ct-banner-image"><img loading="lazy" decoding="async"
                                                                                    width="454" height="509"
                                                                                    src="wp-content/uploads/2021/06/banner1.jpg"
                                                                                    className="attachment-full"
                                                                                    alt="" /></div>
                                              <div className="ct-banner-meta bg-image">
                                                <div className="ct-banner-title">
                                                  <div className="ct-banner-logo"><img loading="lazy" decoding="async"
                                                                                       width="43" height="43"
                                                                                       src="wp-content/uploads/2021/06/banner-logo.png"
                                                                                       className="attachment-full"
                                                                                       alt="" /></div>
                                                  <span>Best Digital agency</span></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5949510f ct-column-none"
                                    data-id="5949510f" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-487c0289 elementor-widget elementor-widget-ct_heading"
                                        data-id="487c0289" data-element_type="widget"
                                        data-widget_type="ct_heading.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_heading-487c0289"
                                               className="ct-heading h-align- item-st-default highlight-style1">
                                            <div className="ct-inline-css" data-css="
 "></div>
                                            <div className="ct-heading-text-below"> About</div>
                                            <h3 className="item--title case-animate-time st-default "
                                                data-wow-delay="ms">
                                            <span className="slide-in-container">
                                              <span
                                              className="d-inline-block wow case-fade-in-up">We combine strategy with marketing, design</span>
                                            </span>
                                            </h3></div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-78e3f130 elementor-widget elementor-widget-ct_text_editor"
                                        data-id="78e3f130" data-element_type="widget"
                                        data-widget_type="ct_text_editor.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_text_editor-78e3f130" className="ct-text-editor "
                                               data-wow-delay="ms">
                                            <div className="ct-inline-css" data-css="
 "></div>
                                            <div className="ct-text-editor elementor-clearfix"> With long years of
                                              experience, we’ve established ourselves as one of the pioneering agencies
                                              in
                                              the region. Our small, flexible, agile and design-led structures and
                                              processes allow us to highly responsive
                                              and innovative.
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-1f9024da elementor-widget elementor-widget-ct_progressbar"
                                        data-id="1f9024da" data-element_type="widget"
                                        data-widget_type="ct_progressbar.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_progressbar-1f9024da"
                                               className="ct-progressbar ct-progressbar1 style1">
                                            <div className="ct-inline-css" data-css=""></div>
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
                                        className="elementor-element elementor-element-18481fb4 el-inline elementor-widget elementor-widget-ct_video_player"
                                        data-id="18481fb4" data-element_type="widget"
                                        data-widget_type="ct_video_player.default"></div>
                                      <div
                                        className="elementor-element elementor-element-7c9590ca el-inline elementor-widget elementor-widget-ct_button"
                                        data-id="7c9590ca" data-element_type="widget"
                                        data-widget_type="ct_button.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_button-7c9590ca" className="ct-button-wrapper ct-button-layout1">
                                            <div className="ct-inline-css" data-css="
 "></div>
                                            <span className="ct-icon-active"></span> <Link to="/contact-us"
                                                                                           className="btn btn-default  icon-ps- "
                                                                                           data-wow-delay="ms"> <span
                                            className="ct-button-icon ct-align-icon-"> </span> <span
                                            className="ct-button-text">Contact us</span>
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
                        className="elementor-section elementor-top-section elementor-element elementor-element-753637c9 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="753637c9" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-extended ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4d348814 ct-column-none"
                            data-id="4d348814" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-4645f489 elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                data-id="4645f489" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-extended ">
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-640deb84 ct-column-none"
                                    data-id="640deb84" data-element_type="column"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-11856ddf elementor-widget elementor-widget-ct_heading"
                                        data-id="11856ddf" data-element_type="widget"
                                        data-widget_type="ct_heading.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_heading-11856ddf"
                                               className="ct-heading h-align- item-st-hexagon highlight-style1">
                                            <div className="ct-inline-css" data-css="
 "></div>
                                            <div className="ct-heading-hexagon-line">
                                              <div className="ct-heading-hexagon"></div>
                                            </div>
                                            <div className="ct-heading-text-below"> Services</div>
                                            <h3 className="item--title case-animate-time st-hexagon "
                                                data-wow-delay="ms">
                                            <span className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">We</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">are</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">a</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">digitally-led,</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">full-service</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">creative</span></span>
                                              <span
                                                className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">agency.</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up"></span></span></h3></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5d198b13 ct-column-none"
                                    data-id="5d198b13" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-9413b90 elementor-widget elementor-widget-ct_text_editor"
                                        data-id="9413b90" data-element_type="widget"
                                        data-widget_type="ct_text_editor.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_text_editor-9413b90" className="ct-text-editor "
                                               data-wow-delay="ms">
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
                                className="elementor-section elementor-inner-section elementor-element elementor-element-227676e6 elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                data-id="227676e6" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-extended ">
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e26d2b5 ct-column-none"
                                    data-id="e26d2b5" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-2b640ced elementor-widget elementor-widget-ct_service_carousel"
                                        data-id="2b640ced" data-element_type="widget"
                                        data-widget_type="ct_service_carousel.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_service_carousel-2b640ced"
                                               className="ct-service-carousel1 ct-slick-slider dots-top-right">
                                            <div className="ct-carousel-inner">
                                              <div className="ct-slick-carousel" data-arrows="false" data-dots="true"
                                                   data-pauseOnHover="false" data-autoplay="false"
                                                   data-autoplaySpeed="5000" data-infinite="false" data-speed="500"
                                                   data-colxs="1" data-colsm="2" data-colmd="2" data-collg="2"
                                                   data-colxl="2" data-dir="false" data-slidesToScroll="2">
                                                <div className="carousel-item slick-slide">
                                                  <div className="grid-item-inner " data-wow-duration="1.2s">
                                                    <div className="item--icon-abs"><i
                                                      className="flaticon-flow-diagram"></i>
                                                    </div>
                                                    <div className="item--featured bg-image"
                                                         style={{ backgroundImage: 'url(wp-content/uploads/2021/06/g25-370x350.jpg)' }}></div>
                                                    <div className="item--holder">
                                                      <div className="item--icon"><i
                                                        className="flaticon-flow-diagram"></i></div>
                                                      <h3 className="item--title"><a href="#"> User Experience
                                                        Design </a>
                                                      </h3>
                                                      <ul className="item--feature">
                                                        <li>UX strategy</li>
                                                        <li>Information architecture</li>
                                                        <li>Prototyping</li>
                                                        <li>Wireframing</li>
                                                        <li>UI Design</li>
                                                      </ul>
                                                    </div>
                                                    <div className="item-readmore"><a href="#"><i
                                                      className="flaticon-next"></i></a></div>
                                                    <div className="item--line"></div>
                                                  </div>
                                                </div>
                                                <div className="carousel-item slick-slide">
                                                  <div className="grid-item-inner " data-wow-duration="1.2s">
                                                    <div className="item--icon-abs"><i
                                                      className="flaticon-branding"></i></div>
                                                    <div className="item--featured bg-image"
                                                         style={{ backgroundImage: 'url(wp-content/uploads/2021/06/g30-370x350.jpg)' }}></div>
                                                    <div className="item--holder">
                                                      <div className="item--icon"><i className="flaticon-branding"></i>
                                                      </div>
                                                      <h3 className="item--title"><a href="#"> Web Development </a></h3>
                                                      <ul className="item--feature">
                                                        <li>WordPress web development</li>
                                                        <li>Dynamic CMS-based development</li>
                                                        <li>Mobile app development</li>
                                                        <li>E-commerce</li>
                                                        <li>Custom Software Development</li>
                                                      </ul>
                                                    </div>
                                                    <div className="item-readmore"><a href="#"><i
                                                      className="flaticon-next"></i></a></div>
                                                    <div className="item--line"></div>
                                                  </div>
                                                </div>
                                                <div className="carousel-item slick-slide">
                                                  <div className="grid-item-inner " data-wow-duration="1.2s">
                                                    <div className="item--icon-abs"><i
                                                      className="flaticon-project-plan"></i>
                                                    </div>
                                                    <div className="item--featured bg-image"
                                                         style={{ backgroundImage: 'url(wp-content/uploads/2021/06/g29-370x350.jpg)' }}></div>
                                                    <div className="item--holder">
                                                      <div className="item--icon"><i
                                                        className="flaticon-project-plan"></i></div>
                                                      <h3 className="item--title"><a href="#"> Video Production </a>
                                                      </h3>
                                                      <ul className="item--feature">
                                                        <li>Concept</li>
                                                        <li>Scripting</li>
                                                        <li>Storyboarding</li>
                                                        <li>lllustration</li>
                                                        <li>3D animation</li>
                                                      </ul>
                                                    </div>
                                                    <div className="item-readmore"><a href="#"><i
                                                      className="flaticon-next"></i></a></div>
                                                    <div className="item--line"></div>
                                                  </div>
                                                </div>
                                                <div className="carousel-item slick-slide">
                                                  <div className="grid-item-inner " data-wow-duration="1.2s">
                                                    <div className="item--icon-abs"><i
                                                      className="flaticon-web-browser"></i></div>
                                                    <div className="item--featured bg-image"
                                                         style={{ backgroundImage: 'url(wp-content/uploads/2021/06/g27-370x350.jpg)' }}></div>
                                                    <div className="item--holder">
                                                      <div className="item--icon"><i
                                                        className="flaticon-web-browser"></i></div>
                                                      <h3 className="item--title"><a href="#"> Cloud Computing
                                                        Services </a>
                                                      </h3>
                                                      <ul className="item--feature">
                                                        <li>UX strategy</li>
                                                        <li>Information architecture</li>
                                                        <li>Prototyping</li>
                                                        <li>Wireframing</li>
                                                        <li>UI Design</li>
                                                      </ul>
                                                    </div>
                                                    <div className="item-readmore"><a href="#"><i
                                                      className="flaticon-next"></i></a></div>
                                                    <div className="item--line"></div>
                                                  </div>
                                                </div>
                                                <div className="carousel-item slick-slide">
                                                  <div className="grid-item-inner " data-wow-duration="1.2s">
                                                    <div className="item--icon-abs"><i
                                                      className="flaticon-content-design"></i>
                                                    </div>
                                                    <div className="item--featured bg-image"
                                                         style={{ backgroundImage: 'url(wp-content/uploads/2021/06/g26-370x350.jpg)' }}></div>
                                                    <div className="item--holder">
                                                      <div className="item--icon"><i
                                                        className="flaticon-content-design"></i>
                                                      </div>
                                                      <h3 className="item--title"><a href="#"> Mobile App
                                                        Development </a>
                                                      </h3>
                                                      <ul className="item--feature">
                                                        <li>UX strategy</li>
                                                        <li>Information architecture</li>
                                                        <li>Prototyping</li>
                                                        <li>Wireframing</li>
                                                        <li>UI Design</li>
                                                      </ul>
                                                    </div>
                                                    <div className="item-readmore"><a href="#"><i
                                                      className="flaticon-next"></i></a></div>
                                                    <div className="item--line"></div>
                                                  </div>
                                                </div>
                                                <div className="carousel-item slick-slide">
                                                  <div className="grid-item-inner " data-wow-duration="1.2s">
                                                    <div className="item--icon-abs"><i
                                                      className="flaticon-web-design"></i></div>
                                                    <div className="item--featured bg-image"
                                                         style={{ backgroundImage: 'url(wp-content/uploads/2021/06/g30-370x350.jpg)' }}></div>
                                                    <div className="item--holder">
                                                      <div className="item--icon"><i
                                                        className="flaticon-web-design"></i></div>
                                                      <h3 className="item--title"><a href="#"> Cyber Security
                                                        Services </a>
                                                      </h3>
                                                      <ul className="item--feature">
                                                        <li>UX strategy</li>
                                                        <li>Information architecture</li>
                                                        <li>Prototyping</li>
                                                        <li>Wireframing</li>
                                                        <li>UI Design</li>
                                                      </ul>
                                                    </div>
                                                    <div className="item-readmore"><a href="#"><i
                                                      className="flaticon-next"></i></a></div>
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
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-482d97ae ct-column-none"
                                    data-id="482d97ae" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-246bef7b elementor-widget elementor-widget-ct_image"
                                        data-id="246bef7b" data-element_type="widget"
                                        data-widget_type="ct_image.default">
                                        <div className="elementor-widget-container">
                                          <div className="ct-image-single    wow zoomIn" data-width="" data-height=""
                                               data-wow-delay="ms">
                                            <div className="ct-image-single--inner"><Link href="/"> <img loading="lazy"
                                                                                                         decoding="async"
                                                                                                         width="304"
                                                                                                         height="336"
                                                                                                         src="wp-content/uploads/2021/06/logo-big.png"
                                                                                                         className="no-lazyload img-main attachment-full"
                                                                                                         alt="" />
                                            </Link>
                                            </div>
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
                        className="elementor-section elementor-top-section elementor-element elementor-element-28e2155a elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="28e2155a" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-extended ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-10309039 ct-column-none"
                            data-id="10309039" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-6b818a8a elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                data-id="6b818a8a" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-extended ">
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-25357c54 ct-column-none"
                                    data-id="25357c54" data-element_type="column"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-621b8fa elementor-widget elementor-widget-ct_heading"
                                        data-id="621b8fa" data-element_type="widget"
                                        data-widget_type="ct_heading.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_heading-621b8fa"
                                               className="ct-heading h-align- item-st-hexagon highlight-style1">
                                            <div className="ct-inline-css" data-css="
 "></div>
                                            <div className="ct-heading-hexagon-line">
                                              <div className="ct-heading-hexagon"></div>
                                            </div>
                                            <h3 className="item--title case-animate-time st-hexagon "
                                                data-wow-delay="ms">
                                            <span className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">Brands</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">we’ve</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">collaborated</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">with</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">team.</span></span>
                                            </h3></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d1c7d66 ct-column-none"
                                    data-id="d1c7d66" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-5c240705 elementor-widget elementor-widget-ct_client_grid"
                                        data-id="5c240705" data-element_type="widget"
                                        data-widget_type="ct_client_grid.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_client_grid-5c240705" className="ct-grid ct-client-grid1">
                                            <div className="ct-grid-inner ct-grid-masonry row animate-time"
                                                 data-gutter="7">
                                              <div className="grid-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div className="ct-client--image img-hover-active"><a href="#"> <img
                                                  loading="lazy" decoding="async" width="66" height="63"
                                                  src="wp-content/uploads/2021/06/client1.png"
                                                  className="no-lazyload ct-client--imgmain attachment-full" alt="" />
                                                  <img
                                                    loading="lazy" decoding="async" width="66" height="63"
                                                    src="wp-content/uploads/2021/06/hover-client1.png"
                                                    className="no-lazyload ct-client--imghover attachment-full"
                                                    alt="" /> </a>
                                                </div>
                                              </div>
                                              <div className="grid-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div className="ct-client--image img-hover-active"><a href="#"> <img
                                                  loading="lazy" decoding="async" width="72" height="63"
                                                  src="wp-content/uploads/2021/06/client2.png"
                                                  className="no-lazyload ct-client--imgmain attachment-full" alt="" />
                                                  <img
                                                    loading="lazy" decoding="async" width="72" height="63"
                                                    src="wp-content/uploads/2021/06/hover-client2.png"
                                                    className="no-lazyload ct-client--imghover attachment-full"
                                                    alt="" /> </a>
                                                </div>
                                              </div>
                                              <div className="grid-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div className="ct-client--image img-hover-active"><a href="#"> <img
                                                  loading="lazy" decoding="async" width="67" height="63"
                                                  src="wp-content/uploads/2021/06/client3.png"
                                                  className="no-lazyload ct-client--imgmain attachment-full" alt="" />
                                                  <img
                                                    loading="lazy" decoding="async" width="67" height="63"
                                                    src="wp-content/uploads/2021/06/hover-client3.png"
                                                    className="no-lazyload ct-client--imghover attachment-full"
                                                    alt="" /> </a>
                                                </div>
                                              </div>
                                              <div className="grid-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div className="ct-client--image img-hover-active"><a href="#"> <img
                                                  loading="lazy" decoding="async" width="63" height="63"
                                                  src="wp-content/uploads/2021/06/client4.png"
                                                  className="no-lazyload ct-client--imgmain attachment-full" alt="" />
                                                  <img
                                                    loading="lazy" decoding="async" width="63" height="63"
                                                    src="wp-content/uploads/2021/06/hover-client4.png"
                                                    className="no-lazyload ct-client--imghover attachment-full"
                                                    alt="" /> </a>
                                                </div>
                                              </div>
                                              <div className="grid-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div className="ct-client--image img-hover-active"><a href="#"> <img
                                                  loading="lazy" decoding="async" width="64" height="63"
                                                  src="wp-content/uploads/2021/06/client5.png"
                                                  className="no-lazyload ct-client--imgmain attachment-full" alt="" />
                                                  <img
                                                    loading="lazy" decoding="async" width="64" height="63"
                                                    src="wp-content/uploads/2021/06/hover-client5.png"
                                                    className="no-lazyload ct-client--imghover attachment-full"
                                                    alt="" /> </a>
                                                </div>
                                              </div>
                                              <div className="grid-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div className="ct-client--image img-hover-active"><a href="#"> <img
                                                  loading="lazy" decoding="async" width="65" height="63"
                                                  src="wp-content/uploads/2021/06/client6.png"
                                                  className="no-lazyload ct-client--imgmain attachment-full" alt="" />
                                                  <img
                                                    loading="lazy" decoding="async" width="65" height="63"
                                                    src="wp-content/uploads/2021/06/hover-client6.png"
                                                    className="no-lazyload ct-client--imghover attachment-full"
                                                    alt="" /> </a>
                                                </div>
                                              </div>
                                              <div className="grid-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div className="ct-client--image img-hover-active"><a href="#"> <img
                                                  loading="lazy" decoding="async" width="67" height="63"
                                                  src="wp-content/uploads/2021/06/client7.png"
                                                  className="no-lazyload ct-client--imgmain attachment-full" alt="" />
                                                  <img
                                                    loading="lazy" decoding="async" width="67" height="63"
                                                    src="wp-content/uploads/2021/06/hover-client7.png"
                                                    className="no-lazyload ct-client--imghover attachment-full"
                                                    alt="" /> </a>
                                                </div>
                                              </div>
                                              <div className="grid-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                                <div className="ct-client--image img-hover-active"><a href="#"> <img
                                                  loading="lazy" decoding="async" width="57" height="63"
                                                  src="wp-content/uploads/2021/06/client8.png"
                                                  className="no-lazyload ct-client--imgmain attachment-full" alt="" />
                                                  <img
                                                    loading="lazy" decoding="async" width="57" height="63"
                                                    src="wp-content/uploads/2021/06/hover-client8.png"
                                                    className="no-lazyload ct-client--imghover attachment-full"
                                                    alt="" /> </a>
                                                </div>
                                              </div>
                                              <div
                                                className="grid-sizer col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6"></div>
                                            </div>
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
                        className="elementor-section elementor-top-section elementor-element elementor-element-6a01c248 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="6a01c248" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                        <div className="elementor-container elementor-column-gap-no ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5e78b47f ct-column-none"
                            data-id="5e78b47f" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-22470be3 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="22470be3" data-element_type="widget" data-widget_type="divider.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider"><span
                                    className="elementor-divider-separator"> </span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-9ff9a94 elementor-section-full_width elementor-section-stretched ct-section-portfolio-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="9ff9a94" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-no ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ee54f32 ct-column-none"
                            data-id="ee54f32" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-70e84ad elementor-widget elementor-widget-ct_portfolio_carousel"
                                data-id="70e84ad" data-element_type="widget"
                                data-widget_type="ct_portfolio_carousel.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_portfolio_carousel-70e84ad"
                                       className="ct-portfolio-carousel2 ct-slick-slider">
                                    <div className="ct-carousel-inner">
                                      <div className="ct-slick-carousel ct-slick-arrow-middle ct-slick-arrow-center"
                                           data-arrows="true" data-dots="false" data-pauseOnHover="false"
                                           data-autoplay="false" data-autoplaySpeed="5000" data-infinite="false"
                                           data-speed="500" data-colxs="1" data-colsm="2" data-colmd="3" data-collg="4"
                                           data-colxl="4" data-dir="false" data-slidesToScroll="1">
                                        <div className="carousel-item slick-slide">
                                          <div className="grid-item-inner ">
                                            <div className="item--featured"><a href="#"><img loading="lazy"
                                                                                             decoding="async"
                                                                                             className=""
                                                                                             src="wp-content/uploads/2021/06/g13-600x900.jpg"
                                                                                             width="600" height="900"
                                                                                             alt="g13"
                                                                                             title="g13" /></a></div>
                                            <div className="item--meta">
                                              <div className="item--category"><a href="#" rel="tag">Strategy</a></div>
                                              <h4 className="item--title"><a href="#"> Startup Business </a></h4>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="43"
                                                   viewBox="0 0 58 43">
                                                <defs>
                                                  <linearGradient id="ct-portfolio-gradient-icon" x1="0%" y1="0%"
                                                                  x2="100%" y2="0%">
                                                    <stop offset="0%"
                                                          style={{ stopColor: '#ffde00', stopOpacity: 1 }} />
                                                    <stop offset="100%"
                                                          style={{ stopColor: '#f4a21a', stopOpacity: 1 }} />
                                                  </linearGradient>
                                                </defs>
                                                <path fill="url(#ct-portfolio-gradient-icon)"
                                                      d="M-76,83c0.865-14.868,5.424-27.347,15-34,9.2-6.394,19.169-4.737,33-4,12.43,0.662,25.13.451,32-1C25.321,39.5,43.176,24.079,58,1l5,102Z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="carousel-item slick-slide">
                                          <div className="grid-item-inner ">
                                            <div className="item--featured"><a href="#"><img loading="lazy"
                                                                                             decoding="async"
                                                                                             className=""
                                                                                             src="wp-content/uploads/2021/06/g14-600x900.jpg"
                                                                                             width="600" height="900"
                                                                                             alt="g14"
                                                                                             title="g14" /></a></div>
                                            <div className="item--meta">
                                              <div className="item--category"><a href="#" rel="tag">Facilitation</a>
                                              </div>
                                              <h4 className="item--title"><a href="#"> Market Research </a></h4>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="43"
                                                   viewBox="0 0 58 43">
                                                <defs>
                                                  <linearGradient id="ct-portfolio-gradient-icon" x1="0%" y1="0%"
                                                                  x2="100%" y2="0%">
                                                    <stop offset="0%"
                                                          style={{ stopColor: '#ffde00', stopOpacity: 1 }} />
                                                    <stop offset="100%"
                                                          style={{ stopColor: '#f4a21a', stopOpacity: 1 }} />
                                                  </linearGradient>
                                                </defs>
                                                <path fill="url(#ct-portfolio-gradient-icon)"
                                                      d="M-76,83c0.865-14.868,5.424-27.347,15-34,9.2-6.394,19.169-4.737,33-4,12.43,0.662,25.13.451,32-1C25.321,39.5,43.176,24.079,58,1l5,102Z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="carousel-item slick-slide">
                                          <div className="grid-item-inner ">
                                            <div className="item--featured"><a href="#"><img loading="lazy"
                                                                                             decoding="async"
                                                                                             className=""
                                                                                             src="wp-content/uploads/2021/06/g15-600x900.jpg"
                                                                                             width="600" height="900"
                                                                                             alt="g15"
                                                                                             title="g15" /></a></div>
                                            <div className="item--meta">
                                              <div className="item--category"><a href="#" rel="tag">Strategy</a></div>
                                              <h4 className="item--title"><a href="#"> SEO Optimization </a></h4>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="43"
                                                   viewBox="0 0 58 43">
                                                <defs>
                                                  <linearGradient id="ct-portfolio-gradient-icon" x1="0%" y1="0%"
                                                                  x2="100%" y2="0%">
                                                    <stop offset="0%"
                                                          style={{ stopColor: '#ffde00', stopOpacity: 1 }} />
                                                    <stop offset="100%"
                                                          style={{ stopColor: '#f4a21a', stopOpacity: 1 }} />
                                                  </linearGradient>
                                                </defs>
                                                <path fill="url(#ct-portfolio-gradient-icon)"
                                                      d="M-76,83c0.865-14.868,5.424-27.347,15-34,9.2-6.394,19.169-4.737,33-4,12.43,0.662,25.13.451,32-1C25.321,39.5,43.176,24.079,58,1l5,102Z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="carousel-item slick-slide">
                                          <div className="grid-item-inner ">
                                            <div className="item--featured"><a href="#"><img loading="lazy"
                                                                                             decoding="async"
                                                                                             className=""
                                                                                             src="wp-content/uploads/2021/06/g16-600x900.jpg"
                                                                                             width="600" height="900"
                                                                                             alt="g16"
                                                                                             title="g16" /></a></div>
                                            <div className="item--meta">
                                              <div className="item--category"><a href="#" rel="tag">Facilitation</a>
                                              </div>
                                              <h4 className="item--title"><a href="#"> Web Desiging </a></h4>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="43"
                                                   viewBox="0 0 58 43">
                                                <defs>
                                                  <linearGradient id="ct-portfolio-gradient-icon" x1="0%" y1="0%"
                                                                  x2="100%" y2="0%">
                                                    <stop offset="0%"
                                                          style={{ stopColor: '#ffde00', stopOpacity: 1 }} />
                                                    <stop offset="100%"
                                                          style={{ stopColor: '#f4a21a', stopOpacity: 1 }} />
                                                  </linearGradient>
                                                </defs>
                                                <path fill="url(#ct-portfolio-gradient-icon)"
                                                      d="M-76,83c0.865-14.868,5.424-27.347,15-34,9.2-6.394,19.169-4.737,33-4,12.43,0.662,25.13.451,32-1C25.321,39.5,43.176,24.079,58,1l5,102Z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="carousel-item slick-slide">
                                          <div className="grid-item-inner ">
                                            <div className="item--featured"><a href="#"><img loading="lazy"
                                                                                             decoding="async"
                                                                                             className=""
                                                                                             src="wp-content/uploads/2021/06/g17-600x900.jpg"
                                                                                             width="600" height="900"
                                                                                             alt="g17"
                                                                                             title="g17" /></a></div>
                                            <div className="item--meta">
                                              <div className="item--category"><a href="#" rel="tag">Coaching</a></div>
                                              <h4 className="item--title"><a href="#"> Business Growth </a></h4>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="43"
                                                   viewBox="0 0 58 43">
                                                <defs>
                                                  <linearGradient id="ct-portfolio-gradient-icon" x1="0%" y1="0%"
                                                                  x2="100%" y2="0%">
                                                    <stop offset="0%"
                                                          style={{ stopColor: '#ffde00', stopOpacity: 1 }} />
                                                    <stop offset="100%"
                                                          style={{ stopColor: '#f4a21a', stopOpacity: 1 }} />
                                                  </linearGradient>
                                                </defs>
                                                <path fill="url(#ct-portfolio-gradient-icon)"
                                                      d="M-76,83c0.865-14.868,5.424-27.347,15-34,9.2-6.394,19.169-4.737,33-4,12.43,0.662,25.13.451,32-1C25.321,39.5,43.176,24.079,58,1l5,102Z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="carousel-item slick-slide">
                                          <div className="grid-item-inner ">
                                            <div className="item--featured"><a href="#"><img loading="lazy"
                                                                                             decoding="async"
                                                                                             className=""
                                                                                             src="wp-content/uploads/2021/06/g18-600x900.jpg"
                                                                                             width="600" height="900"
                                                                                             alt="g18"
                                                                                             title="g18" /></a></div>
                                            <div className="item--meta">
                                              <div className="item--category"><a href="#" rel="tag">Coaching</a></div>
                                              <h4 className="item--title"><a href="#"> Financial Analysis </a></h4>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="43"
                                                   viewBox="0 0 58 43">
                                                <defs>
                                                  <linearGradient id="ct-portfolio-gradient-icon" x1="0%" y1="0%"
                                                                  x2="100%" y2="0%">
                                                    <stop offset="0%"
                                                          style={{ stopColor: '#ffde00', stopOpacity: 1 }} />
                                                    <stop offset="100%"
                                                          style={{ stopColor: '#f4a21a', stopOpacity: 1 }} />
                                                  </linearGradient>
                                                </defs>
                                                <path fill="url(#ct-portfolio-gradient-icon)"
                                                      d="M-76,83c0.865-14.868,5.424-27.347,15-34,9.2-6.394,19.169-4.737,33-4,12.43,0.662,25.13.451,32-1C25.321,39.5,43.176,24.079,58,1l5,102Z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="carousel-item slick-slide">
                                          <div className="grid-item-inner ">
                                            <div className="item--featured"><a href="#"><img loading="lazy"
                                                                                             decoding="async"
                                                                                             className=""
                                                                                             src="wp-content/uploads/2021/06/g19-600x900.jpg"
                                                                                             width="600" height="900"
                                                                                             alt="g19"
                                                                                             title="g19" /></a></div>
                                            <div className="item--meta">
                                              <div className="item--category"><a href="#" rel="tag">Stakeholder
                                                relations</a>
                                              </div>
                                              <h4 className="item--title"><a href="#"> Market Expansion </a></h4>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="43"
                                                   viewBox="0 0 58 43">
                                                <defs>
                                                  <linearGradient id="ct-portfolio-gradient-icon" x1="0%" y1="0%"
                                                                  x2="100%" y2="0%">
                                                    <stop offset="0%"
                                                          style={{ stopColor: '#ffde00', stopOpacity: 1 }} />
                                                    <stop offset="100%"
                                                          style={{ stopColor: '#f4a21a', stopOpacity: 1 }} />
                                                  </linearGradient>
                                                </defs>
                                                <path fill="url(#ct-portfolio-gradient-icon)"
                                                      d="M-76,83c0.865-14.868,5.424-27.347,15-34,9.2-6.394,19.169-4.737,33-4,12.43,0.662,25.13.451,32-1C25.321,39.5,43.176,24.079,58,1l5,102Z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="carousel-item slick-slide">
                                          <div className="grid-item-inner ">
                                            <div className="item--featured"><a href="#"><img loading="lazy"
                                                                                             decoding="async"
                                                                                             className=""
                                                                                             src="wp-content/uploads/2021/06/g20-600x900.jpg"
                                                                                             width="600" height="900"
                                                                                             alt="g20"
                                                                                             title="g20" /></a></div>
                                            <div className="item--meta">
                                              <div className="item--category"><a href="#" rel="tag">Facilitation</a>
                                              </div>
                                              <h4 className="item--title"><a href="#"> Digital Analysis </a></h4>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="43"
                                                   viewBox="0 0 58 43">
                                                <defs>
                                                  <linearGradient id="ct-portfolio-gradient-icon" x1="0%" y1="0%"
                                                                  x2="100%" y2="0%">
                                                    <stop offset="0%"
                                                          style={{ stopColor: '#ffde00', stopOpacity: 1 }} />
                                                    <stop offset="100%"
                                                          style={{ stopColor: '#f4a21a', stopOpacity: 1 }} />
                                                  </linearGradient>
                                                </defs>
                                                <path fill="url(#ct-portfolio-gradient-icon)"
                                                      d="M-76,83c0.865-14.868,5.424-27.347,15-34,9.2-6.394,19.169-4.737,33-4,12.43,0.662,25.13.451,32-1C25.321,39.5,43.176,24.079,58,1l5,102Z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-7b836a4 elementor-widget elementor-widget-ct_text_below"
                                data-id="7b836a4" data-element_type="widget" data-widget_type="ct_text_below.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_text_below-7b836a4"
                                       className="ct-text-below el-move-parents  bottom-center"
                                       data-wow-delay="ms">
                                    <div className="ct-inline-css" data-css="
 #ct_text_below-7b836a4.ct-text-below {
 color: #FFFFFF;
 }"></div>
                                    <div className="ct-inline-css" data-css="
 #ct_text_below-7b836a4.ct-text-below {
 text-stroke-color: #00000026;
 -webkit-text-stroke-color: #00000026;
 -ms-text-stroke-color: #00000026;
 -o-text-stroke-color: #00000026;
 }"></div>
                                    Portfolio
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-3267ef9 elementor-section-stretched elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="3267ef9" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-extended ">
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-be3caa8 ct-column-none"
                            data-id="be3caa8" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-24da04f elementor-widget elementor-widget-ct_square_animate"
                                data-id="24da04f" data-element_type="widget"
                                data-widget_type="ct_square_animate.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_square_animate-24da04f" className="ct-square-animate el-move-parents">
                                    <div className="ct-square-container">
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                      <div className="ct-square-item"><span></span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-9cc3148 elementor-widget elementor-widget-ct_video_player"
                                data-id="9cc3148" data-element_type="widget" data-widget_type="ct_video_player.default">
                                <div className="elementor-widget-container">
                                  <div className="ct-video-player ct-video-style2 wow fadeInLeft" data-wow-delay="ms">
                                    <div className="ct-video-box">
                                      <div className="ct-video-holder"><img loading="lazy" decoding="async" width="539"
                                                                            height="699"
                                                                            src="wp-content/uploads/2021/06/h-video1.jpg"
                                                                            className="attachment-full" alt="" /></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3ad9a3b ct-column-none"
                            data-id="3ad9a3b" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-dff49ff elementor-widget elementor-widget-ct_particle_animate"
                                data-id="dff49ff" data-element_type="widget"
                                data-widget_type="ct_particle_animate.default">
                                <div className="elementor-widget-container">
                                  <div className="ct-particle-animate el-move-parents img-below-content "
                                       data-wow-delay="ms">
                                    <div id="ct_particle_animate-dff49ff0" className="top-right animate-none">
                                      <div
                                        className="ct-inline-css"
                                        data-css=".ct-particle-animate #ct_particle_animate-dff49ff0 { right: 16%; top: 19%; }">
                                      </div>
                                      <img loading="lazy" decoding="async" width="110" height="236"
                                           src="wp-content/uploads/2021/06/h-contact-img2.png"
                                           className="attachment-full"
                                           alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-b0a514e elementor-widget elementor-widget-ct_text_below"
                                data-id="b0a514e" data-element_type="widget" data-widget_type="ct_text_below.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_text_below-b0a514e" className="ct-text-below el-move-parents  top-right"
                                       data-wow-delay="ms">
                                    <div className="ct-inline-css" data-css=" #ct_text_below-b0a514e.ct-text-below { right: 6%; top: 10%; }"></div>
                                    Our goal
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-39e4b7f elementor-widget elementor-widget-ct_tabs"
                                data-id="39e4b7f" data-element_type="widget" data-widget_type="ct_tabs.default">
                                <div className="elementor-widget-container">
                                  <div
                                    className="ct-tabs ct-tabs1 wow fadeInRight content-type-text_editor bg-image ct-tab-boxed"
                                    style={{ backgroundImage: 'url(wp-content/uploads/2021/06/bg-client.png)' }}
                                    data-wow-delay="ms">
                                    <div className="ct-tabs--title">
                                      <div className="ct-heading item-st-hexagon">
                                        <div className="ct-heading-hexagon-line">
                                          <div className="ct-heading-hexagon"></div>
                                        </div>
                                        <h4 className="item--title">
                                          <span>we harness strength of our multi-disciplinary teams</span></h4></div>
                                    </div>
                                    <div className="ct-tabs--main">
                                      <div className="ct-tabs-title"><span className="ct-tab-title active"
                                                                           data-target="#ct_tabs-39e4b7f-3535652"> Our value </span>
                                        <span className="ct-tab-title "
                                              data-target="#ct_tabs-39e4b7f-5a20669"> Our vision </span> <span
                                          className="ct-tab-title "
                                          data-target="#ct_tabs-39e4b7f-394899e"> Our mission </span></div>
                                      <div className="ct-tabs-content">
                                        <div className="ct-tab-content " id="ct_tabs-39e4b7f-3535652"
                                             style={{ display: 'block' }}>
                                          With long years of experience, we’ve established ourselves as one the of
                                          pioneering agencies in the region.
                                          <ul>
                                            <li>We’re made of passionate leaders.</li>
                                            <li>Strategists, managers, developers, animators and designers.</li>
                                          </ul>
                                        </div>
                                        <div className="ct-tab-content " id="ct_tabs-39e4b7f-5a20669">Forging
                                          relationships
                                          between multi to national corporations, governments and global NGOs begins
                                          with
                                          connections between people.
                                          <ul>
                                            <li>We offer a variety of service.</li>
                                            <li>We've been lucky to collaborate with a long list of customers.</li>
                                          </ul>
                                        </div>
                                        <div className="ct-tab-content " id="ct_tabs-39e4b7f-394899e">What separates
                                          theme
                                          from all other web design agencies is the ability to offer the most Friendly
                                          Experience you can imagine.
                                          <ul>
                                            <li>We understand the importance of approaching.</li>
                                            <li>Design studio founded in London and expanded our services.</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-1c56cad0 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="1c56cad0" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-extended ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-243d4021 ct-column-none"
                            data-id="243d4021" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-32101f80 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                data-id="32101f80" data-element_type="section"
                                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-container elementor-column-gap-extended ">
                                  <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-433709b8 ct-column-none"
                                    data-id="433709b8" data-element_type="column"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-67cdb58 elementor-widget elementor-widget-ct_heading"
                                        data-id="67cdb58" data-element_type="widget"
                                        data-widget_type="ct_heading.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_heading-67cdb58"
                                               className="ct-heading h-align- item-st-hexagon highlight-style1">
                                            <div className="ct-inline-css" data-css="
 "></div>
                                            <div className="ct-heading-hexagon-line">
                                              <div className="ct-heading-hexagon"></div>
                                            </div>
                                            <div className="ct-heading-text-below"> Review</div>
                                            <h3 className="item--title case-animate-time st-hexagon "
                                                data-wow-delay="ms">
                                            <span className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">We</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">have</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">been</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">one</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">of</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">the</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">best</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up">partners</span></span>
                                              <span className="slide-in-container"><span
                                                className="d-inline-block wow case-fade-in-up">of</span></span> <span
                                              className="slide-in-container"><span
                                              className="d-inline-block wow case-fade-in-up"><cite>ILLC</cite>.</span></span>
                                            </h3></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3b43d7a ct-column-none"
                                    data-id="3b43d7a" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-76aaaad1 elementor-widget elementor-widget-ct_text_editor"
                                        data-id="76aaaad1" data-element_type="widget"
                                        data-widget_type="ct_text_editor.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_text_editor-76aaaad1" className="ct-text-editor "
                                               data-wow-delay="ms">
                                            <div className="ct-inline-css" data-css="
 "></div>
                                            <div className="ct-text-editor elementor-clearfix"> We value the
                                              experimentation,
                                              the reformation of the message, and the smart incentives. We offer a
                                              variety
                                              of services.
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6e02dac ct-column-none"
                                    data-id="6e02dac" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-66be527 elementor-align-right elementor-align-center elementor-align-left elementor-widget elementor-widget-ct_button"
                                        data-id="66be527" data-element_type="widget"
                                        data-widget_type="ct_button.default">
                                        <div className="elementor-widget-container">
                                          <div id="ct_button-66be527" className="ct-button-wrapper ct-button-layout1">
                                            <div className="ct-inline-css" data-css="
 "></div>
                                            <span className="ct-icon-active"></span></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <div
                                className="elementor-element elementor-element-8800a99 elementor-widget elementor-widget-ct_testimonial_carousel"
                                data-id="8800a99" data-element_type="widget"
                                data-widget_type="ct_testimonial_carousel.default">
                                <div className="elementor-widget-container">
                                  <div className="ct-testimonial ct-testimonial-carousel1 ct-slick-slider"
                                       data-cursor-label="DRAG">
                                    <div className="ct-carousel-inner">
                                      <div className="ct-slick-carousel slick-shadow" data-arrows="" data-dots=""
                                           data-pauseOnHover="" data-autoplay="true" data-autoplaySpeed="10000"
                                           data-infinite="" data-speed="500" data-colxs="1" data-colsm="2"
                                           data-colmd="2"
                                           data-collg="3" data-colxl="3" data-dir="false" data-slidesToScroll="1">
                                        <div className="slick-slide">
                                          <div className="item--inner " data-wow-duration="1.2s">
                                            <div className="item--image"><img loading="lazy" decoding="async"
                                                                              className=""
                                                                              src="wp-content/uploads/2021/06/author1-72x72.jpg"
                                                                              width="72" height="72" alt="author1"
                                                                              title="author1" /></div>
                                            <div className="item--description">Over the years we have relied heavily
                                              onto them
                                              for creative design and the marketing services in business.
                                            </div>
                                            <div className="item--holder">
                                              <div className="item--meta"><h4 className="item--title"> Robert
                                                Froast</h4>
                                                <div className="item--position">Senior Developer</div>
                                              </div>
                                              <div className="item--star"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner " data-wow-duration="1.2s">
                                            <div className="item--image"><img loading="lazy" decoding="async"
                                                                              className=""
                                                                              src="wp-content/uploads/2021/06/author2-72x72.jpg"
                                                                              width="72" height="72" alt="author2"
                                                                              title="author2" /></div>
                                            <div className="item--description">Over the years we have relied heavily
                                              onto them
                                              for creative design and the marketing services in business.
                                            </div>
                                            <div className="item--holder">
                                              <div className="item--meta"><h4 className="item--title"> Pamela
                                                Johnson</h4>
                                                <div className="item--position">Leadership Group</div>
                                              </div>
                                              <div className="item--star"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner " data-wow-duration="1.2s">
                                            <div className="item--image"><img loading="lazy" decoding="async"
                                                                              className=""
                                                                              src="wp-content/uploads/2021/06/author3-72x72.jpg"
                                                                              width="72" height="72" alt="author3"
                                                                              title="author3" /></div>
                                            <div className="item--description">Over the years we have relied heavily
                                              onto them
                                              for creative design and the marketing services in business.
                                            </div>
                                            <div className="item--holder">
                                              <div className="item--meta"><h4 className="item--title"> Ada Kanacki</h4>
                                                <div className="item--position">Digital Marketing</div>
                                              </div>
                                              <div className="item--star"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner " data-wow-duration="1.2s">
                                            <div className="item--image"><img loading="lazy" decoding="async"
                                                                              className=""
                                                                              src="wp-content/uploads/2021/06/author4-72x72.jpg"
                                                                              width="72" height="72" alt="author4"
                                                                              title="author4" /></div>
                                            <div className="item--description">Over the years we have relied heavily
                                              onto them
                                              for creative design and the marketing services in business.
                                            </div>
                                            <div className="item--holder">
                                              <div className="item--meta"><h4 className="item--title"> Kathleen
                                                Smith</h4>
                                                <div className="item--position">Jodie Comer</div>
                                              </div>
                                              <div className="item--star"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner " data-wow-duration="1.2s">
                                            <div className="item--image"><img loading="lazy" decoding="async"
                                                                              className=""
                                                                              src="wp-content/uploads/2021/06/author5-72x72.jpg"
                                                                              width="72" height="72" alt="author5"
                                                                              title="author5" /></div>
                                            <div className="item--description">Over the years we have relied heavily
                                              onto them
                                              for creative design and the marketing services in business.
                                            </div>
                                            <div className="item--holder">
                                              <div className="item--meta"><h4 className="item--title"> Carolyn
                                                Smith</h4>
                                                <div className="item--position">Leadership Group</div>
                                              </div>
                                              <div className="item--star"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="slick-slide">
                                          <div className="item--inner " data-wow-duration="1.2s">
                                            <div className="item--image"><img loading="lazy" decoding="async"
                                                                              className=""
                                                                              src="wp-content/uploads/2021/06/author6-72x72.jpg"
                                                                              width="72" height="72" alt="author6"
                                                                              title="author6" /></div>
                                            <div className="item--description">Over the years we have relied heavily
                                              onto them
                                              for creative design and the marketing services in business.
                                            </div>
                                            <div className="item--holder">
                                              <div className="item--meta"><h4 className="item--title"> Abbie Lloyd</h4>
                                                <div className="item--position">Digital Marketing</div>
                                              </div>
                                              <div className="item--star"><i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                                className="fas fa-star"></i> <i className="fas fa-star"></i></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-6395f52 elementor-section-stretched elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="6395f52" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-extended ">
                          <div
                            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-73528c2 ct-column-none"
                            data-id="73528c2" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-78b480cc elementor-widget elementor-widget-ct_heading"
                                data-id="78b480cc" data-element_type="widget" data-widget_type="ct_heading.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_heading-78b480cc"
                                       className="ct-heading h-align- item-st-hexagon highlight-style1">
                                    <div className="ct-inline-css" data-css="
 "></div>
                                    <div className="ct-heading-hexagon-line">
                                      <div className="ct-heading-hexagon"></div>
                                    </div>
                                    <div className="ct-heading-text-below"> Contact</div>
                                    <h3 className="item--title case-animate-time st-hexagon " data-wow-delay="ms"><span
                                      className="slide-in-container"><span
                                      className="d-inline-block wow case-fade-in-up">Let’s</span></span> <span
                                      className="slide-in-container"><span
                                      className="d-inline-block wow case-fade-in-up">do</span></span> <span
                                      className="slide-in-container"><span
                                      className="d-inline-block wow case-fade-in-up">Working</span></span> <span
                                      className="slide-in-container"><span
                                      className="d-inline-block wow case-fade-in-up">togather!</span></span>
                                    </h3></div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4df84a9 elementor-widget elementor-widget-ct_fancy_box"
                                data-id="4df84a9" data-element_type="widget" data-widget_type="ct_fancy_box.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_fancy_box-4df84a9" className="ct-fancy-box ct-fancy-box-layout3 style1 "
                                       data-wow-delay="ms">
                                    <div className="ct-inline-css" data-css="
 "></div>
                                    <div className="item--inner">
                                      <div className="item--icon"><i aria-hidden="true"
                                                                     className="flaticon flaticon-location"></i></div>
                                      <div className="item--meta"><h4 className="item--title"> Office Address:</h4>
                                        <div className="item--description">Level 6, 541 St Kilda Road Melbourne, VIC
                                          3004
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-0f356eb elementor-widget elementor-widget-ct_fancy_box"
                                data-id="0f356eb" data-element_type="widget" data-widget_type="ct_fancy_box.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_fancy_box-0f356eb" className="ct-fancy-box ct-fancy-box-layout3 style1 "
                                       data-wow-delay="ms">
                                    <div className="ct-inline-css" data-css="
 "></div>
                                    <div className="item--inner">
                                      <div className="item--icon"><i aria-hidden="true"
                                                                     className="flaticon flaticon-call"></i>
                                      </div>
                                      <div className="item--meta"><h4 className="item--title"> Phone number:</h4>
                                        <div className="item--description">+1300 658 700<br /> +1567 658 723</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-ca4761d elementor-widget elementor-widget-ct_fancy_box"
                                data-id="ca4761d" data-element_type="widget" data-widget_type="ct_fancy_box.default">
                                <div className="elementor-widget-container">
                                  <div id="ct_fancy_box-ca4761d" className="ct-fancy-box ct-fancy-box-layout3 style1 "
                                       data-wow-delay="ms">
                                    <div className="ct-inline-css" data-css="
 "></div>
                                    <div className="item--inner">
                                      <div className="item--icon"><i aria-hidden="true"
                                                                     className="flaticon flaticon-chat"></i>
                                      </div>
                                      <div className="item--meta"><h4 className="item--title"> mail Address:</h4>
                                        <div className="item--description">envato@gmail.com<br /> grupi@mail.com</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-dc3b215 elementor-widget elementor-widget-spacer"
                                data-id="dc3b215" data-element_type="widget" data-widget_type="spacer.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-9ca823d elementor-hidden-tablet elementor-hidden-phone ct-column-none"
                            data-id="9ca823d" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-8a775bc elementor-widget elementor-widget-ct_image"
                                data-id="8a775bc" data-element_type="widget" data-widget_type="ct_image.default">
                                <div className="elementor-widget-container">
                                  <div className="ct-image-single    wow fadeInUp" data-width="" data-height=""
                                       data-wow-delay="ms">
                                    <div className="ct-image-single--inner"><img loading="lazy" decoding="async"
                                                                                 width="470"
                                                                                 height="682"
                                                                                 src="wp-content/uploads/2021/06/h-man1.png"
                                                                                 className="no-lazyload img-main attachment-full"
                                                                                 alt="" /></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-50fffa5 ct-column-none"
                            data-id="50fffa5" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-c4cb707 elementor-widget elementor-widget-ct_particle_animate"
                                data-id="c4cb707" data-element_type="widget"
                                data-widget_type="ct_particle_animate.default">
                                <div className="elementor-widget-container">
                                  <div className="ct-particle-animate el-move-parents img-below-content "
                                       data-wow-delay="ms">
                                    <div id="ct_particle_animate-c4cb7070" className="top-right animate-none">
                                      <div className="ct-inline-css" data-css="
 .ct-particle-animate #ct_particle_animate-c4cb7070 {
 right: 14%;
 top: 18%;
 }"></div>
                                      <img loading="lazy" decoding="async" width="106" height="277"
                                           src="wp-content/uploads/2021/06/h-contact-img.png"
                                           className="attachment-full"
                                           alt="" /></div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-6048933 elementor-widget elementor-widget-ct_contact_form"
                                data-id="6048933" data-element_type="widget" data-widget_type="ct_contact_form.default">
                                <div className="elementor-widget-container">
                                  <div className="ct-contact-form ct-contact-form-layout1 style2 wow fadeInRight">
                                    <div className="ct-contact-meta"><h4 className="ct-meta--title">
                                      <span>Contact us</span></h4>
                                      <div className="ct-meta--desc">We work with ambitious leaders who want to define
                                        the
                                        future, not hide from it.
                                      </div>
                                    </div>
                                    <div className="ct-contact-form">
                                      <div className="wpcf7 no-js" id="wpcf7-f1637-p23-o1" lang="en-US" dir="ltr">
                                        <div className="screen-reader-response"><p role="status" aria-live="polite"
                                                                                   aria-atomic="true"></p>
                                          <ul></ul>
                                        </div>
                                        <form action="https://demo.casethemes.net/grupi/#wpcf7-f1637-p23-o1"
                                              method="post"
                                              className="wpcf7-form init" aria-label="Contact form"
                                              noValidate="novalidate"
                                              data-status="init">
                                          <div style={{ display: 'none' }}><input type="hidden" name="_wpcf7"
                                                                                  value="1637" />
                                            <input type="hidden" name="_wpcf7_version" value="5.8.6" /> <input
                                              type="hidden" name="_wpcf7_locale" value="en_US" /> <input type="hidden"
                                                                                                         name="_wpcf7_unit_tag"
                                                                                                         value="wpcf7-f1637-p23-o1" />
                                            <input type="hidden" name="_wpcf7_container_post" value="23" /> <input
                                              type="hidden" name="_wpcf7_posted_data_hash" value="" /></div>
                                          <div className="row">
                                            <div className="input-filled col-12"><p><label>Name *</label><span
                                              className="wpcf7-form-control-wrap" data-name="your-name"><input size="40"
                                                                                                               className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                               aria-required="true"
                                                                                                               aria-invalid="false"
                                                                                                               placeholder="Write Name..."
                                                                                                               value=""
                                                                                                               type="text"
                                                                                                               name="your-name" /></span><i
                                              className="fa fa-user input-icon"></i></p></div>
                                            <div className="input-filled col-12"><p><label>Mobile number *</label><span
                                              className="wpcf7-form-control-wrap" data-name="your-phone"><input
                                              size="40"
                                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                              aria-required="true"
                                              aria-invalid="false"
                                              placeholder="+88 (___) __ ____"
                                              value=""
                                              type="text"
                                              name="your-phone" /></span><i
                                              className="fa fa-phone input-icon"></i></p></div>
                                            <div className="input-filled col-12"><p><label>Email address *</label><span
                                              className="wpcf7-form-control-wrap" data-name="your-email"><input
                                              size="40"
                                              className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                              aria-required="true"
                                              aria-invalid="false"
                                              placeholder="envato@gmail.com"
                                              value=""
                                              type="email"
                                              name="your-email" /></span><i
                                              className="fa fa-envelope input-icon"></i></p></div>
                                            <div className="input-filled col-12">
                                              <p>
                                                <button type="submit"
                                                        className="wpcf7-submit btn btn-secondary btn-animate btn-inline-flex">
                                                  Let’s Get to Work<i
                                                  className="flaticon-right-arrows icon-space-left"></i>
                                                </button>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="wpcf7-response-output" aria-hidden="true"></div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-a79f900 elementor-widget elementor-widget-spacer"
                                data-id="a79f900" data-element_type="widget" data-widget_type="spacer.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-70484ac2 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                        data-id="70484ac2" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-container elementor-column-gap-extended ">
                          <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1802e110 ct-column-none"
                            data-id="1802e110" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-b1f36bf elementor-widget elementor-widget-ct_particle_animate"
                                data-id="b1f36bf" data-element_type="widget"
                                data-widget_type="ct_particle_animate.default">
                                <div className="elementor-widget-container">
                                  <div className="ct-particle-animate el-move-parents img-below-content wow fadeInUp"
                                       data-wow-delay="ms">
                                    <div id="ct_particle_animate-b1f36bf0" className="bottom-right animate-none">
                                      <div className="ct-inline-css" data-css="
 .ct-particle-animate #ct_particle_animate-b1f36bf0 {
 right: 5%;
 bottom: 0%;
 }"></div>
                                      <img loading="lazy" decoding="async" width="203" height="85"
                                           src="wp-content/uploads/2021/06/s-img-animate1.png"
                                           className="attachment-full"
                                           alt="" /></div>
                                  </div>
                                </div>
                              </div>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-91b05e1 elementor-section-boxed elementor-section-height-default elementor-section-height-default ct-header-fixed-none ct-column-none ct-row-scroll-none ct-row-gradient--none"
                                data-id="91b05e1" data-element_type="section"
                                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-container elementor-column-gap-extended ">
                                  <div
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3884791d ct-col-line1 ct-column-none"
                                    data-id="3884791d" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-391aa933 ct-counter-layout1 elementor-widget elementor-widget-ct_counter"
                                        data-id="391aa933" data-element_type="widget"
                                        data-widget_type="ct_counter.default">
                                        <div className="elementor-widget-container">
                                          <div className="ct-counter ct-counter-layout1 hover-style1 "
                                               data-wow-delay="ms">
                                            <div className="ct-counter-inner">
                                              <div className="ct-counter-icon"><i aria-hidden="true"
                                                                                  className="flaticon flaticon-project-plan"></i>
                                              </div>
                                              <div className="ct-counter-meta">
                                                <div className="ct-counter-number"><span
                                                  className="ct-counter-number-value"
                                                  data-duration="2000"
                                                  data-to-value="2205"
                                                  data-delimiter=",">1</span></div>
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
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-31b93e42 ct-col-line1 ct-column-none"
                                    data-id="31b93e42" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-729e47e4 ct-counter-layout1 elementor-widget elementor-widget-ct_counter"
                                        data-id="729e47e4" data-element_type="widget"
                                        data-widget_type="ct_counter.default">
                                        <div className="elementor-widget-container">
                                          <div className="ct-counter ct-counter-layout1 hover-style1 "
                                               data-wow-delay="ms">
                                            <div className="ct-counter-inner">
                                              <div className="ct-counter-icon"><i aria-hidden="true"
                                                                                  className="flaticon flaticon-cooperation"></i>
                                              </div>
                                              <div className="ct-counter-meta">
                                                <div className="ct-counter-number"><span
                                                  className="ct-counter-number-value"
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
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4c909b10 ct-col-line1 ct-column-none"
                                    data-id="4c909b10" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-31088948 ct-counter-layout1 elementor-widget elementor-widget-ct_counter"
                                        data-id="31088948" data-element_type="widget"
                                        data-widget_type="ct_counter.default">
                                        <div className="elementor-widget-container">
                                          <div className="ct-counter ct-counter-layout1 hover-style1 "
                                               data-wow-delay="ms">
                                            <div className="ct-counter-inner">
                                              <div className="ct-counter-icon"><i aria-hidden="true"
                                                                                  className="flaticon flaticon-award"></i>
                                              </div>
                                              <div className="ct-counter-meta">
                                                <div className="ct-counter-number"><span
                                                  className="ct-counter-number-value"
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
                                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-21c55c0f ct-column-none"
                                    data-id="21c55c0f" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        className="elementor-element elementor-element-3abfa732 ct-counter-layout1 elementor-widget elementor-widget-ct_counter"
                                        data-id="3abfa732" data-element_type="widget"
                                        data-widget_type="ct_counter.default">
                                        <div className="elementor-widget-container">
                                          <div className="ct-counter ct-counter-layout1 hover-style1 "
                                               data-wow-delay="ms">
                                            <div className="ct-counter-inner">
                                              <div className="ct-counter-icon"><i aria-hidden="true"
                                                                                  className="flaticon flaticon-award-1"></i>
                                              </div>
                                              <div className="ct-counter-meta">
                                                <div className="ct-counter-number"><span
                                                  className="ct-counter-number-value"
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
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

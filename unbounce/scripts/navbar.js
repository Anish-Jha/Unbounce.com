
// for product section

function navbar(){
    return ` <div id="nav">
    <div>
        <a href="./index.html"><img id = "logo" src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1" alt=""></a>
        <input type="checkbox" id="click">
        <label for="click" class="menu-btn" id="hr-menu">
            <i class="fas fa-bars"></i>
        </label>
        <ul id="ul-class">
            <!--   product.................................................... -->
            <div class="dropdown">
                <li id="product" class="nav-item">Products <i id="product-angle" class="fa-solid fa-angle-down"></i></li>
                
                <div id="mega-menu-product">
                    <div>
                        <h4>Conversion Intelligence Platform</h4>
                        <p>The AI-powered platform for effortlessly creating your highest-converting marketing campaigns.</p>
                        <div id="product-card-1">
                            <img class ="prod-icon-img" src="https://unbounce.com/photos/smartbuilder_icon_updated_stroke.svg" alt="">
                            <h4 class ="unbounce"><a href="./smartbuilder.html">Smart Builder</a><span class="span-pro">Beta</span></h4>
                        </div>
                    
                        <div id="product-card-1">
                            <img class ="prod-icon-img" src="https://unbounce.com/photos/Smart-Copy-black-icon.svg" alt="">
                            <h4 class ="unbounce"><a href="#">Smart Copy</a><span class="span-pro-new">New</span></h4>
                        </div>
                        <div id="product-card-1">
                            <svg  class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18"/><path d="m20 5l2 2l-2 2m2 9c-3 0-8.5 0-10.5-5.5S5 7 2 7"/><path d="m20 20l2-2l-2-2"/></g></g></svg>
                            <h4><a href="#">Smart Traffic</a></h4>
                        </div>
                        <div id="product-card-1">
                            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21.6 2.7c0-.2-.2-.3-.4-.4c-3.8-1-7.9.3-10.4 3.3L9.5 7.1l-2.7-.7c-1.1-.4-2.2.1-2.7 1.1L2 11.2s0 .1-.1.1c-.1.3.1.5.4.6l3.4.7c-.3.9-.6 1.8-.7 2.7c0 .2 0 .3.1.4l3 2.9c.1.1.2.1.4.1c.9-.1 1.9-.3 2.8-.6l.7 3.3c0 .2.3.4.5.4c.1 0 .2 0 .2-.1l3.7-2.1c.9-.5 1.3-1.6 1.1-2.6l-.7-2.9l1.4-1.3c3.1-2.3 4.4-6.3 3.4-10.1zM3.2 11.1L4.9 8c.3-.6.9-.8 1.5-.6l2.3.6l-1 1.2c-.6.8-1.2 1.6-1.6 2.5l-2.9-.6zM16 19l-3.1 1.8l-.6-2.9c.9-.4 1.7-1 2.5-1.6l1.3-1.2l.6 2.3c0 .6-.2 1.3-.7 1.6zm1.6-6.7l-3.5 3.2c-1.5 1.3-3.4 2.1-5.4 2.3l-2.6-2.6c.3-2 1.1-3.9 2.4-5.4L10.1 8l.1-.1l1.4-1.6c2.2-2.6 5.8-3.8 9.1-3.1c.7 3.4-.4 6.9-3.1 9.1zm-1.2-6.7c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9c1.1 0 1.9-.9 1.9-1.9c0-1-.8-1.9-1.9-1.9zm0 2.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9s.9.4.9.9s-.4.9-.9.9z"/></svg>
                            <h4><a href="#">Conversion Intelligence Features</a></h4>
                        </div>
                        <div id="product-card-1">
                            <img class ="prod-icon-img" src="https://unbounce.com/photos/Extensions.svg" alt="">
                            <h4 class ="unbounce"><a href="#">Unbounce Apps</a><span class="span-pro-new">New</span></h4>
                        </div>
                    
                    </div>
                    <hr>
                    <div>
                        <h4>Classic Unbounce</h4>
                        <p>The original drag-and-drop landing page platform for experienced marketers.</p>
                        <div id="product-card-1">
                            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z"/></svg>
                            <h4><a href="#">Classic Builder</a></h4>
                        </div>
                        <div id="product-card-1">
                            <img class ="prod-icon-img" src="https://unbounce.com/photos/Smart-Copy-black-icon.svg" alt="">
                            <h4 class ="unbounce"><a href="#">Popups & Sticky Bars</a></h4>
                        </div>
                        <div id="product-card-1">
                            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M10.208 5.5H8.11A4.502 4.502 0 0 1 12.5 2h11A6.5 6.5 0 0 1 30 8.5v11a4.502 4.502 0 0 1-3.502 4.389v-2.096A2.5 2.5 0 0 0 28 19.5v-11A4.5 4.5 0 0 0 23.5 4h-11a2.5 2.5 0 0 0-2.292 1.5ZM6.5 7A4.5 4.5 0 0 0 2 11.5v14A4.5 4.5 0 0 0 6.5 30h14a4.5 4.5 0 0 0 4.5-4.5v-14A4.5 4.5 0 0 0 20.5 7h-14ZM4 11.5A2.5 2.5 0 0 1 6.5 9h14a2.5 2.5 0 0 1 2.5 2.5v14a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 4 25.5v-14Z"/></svg>
                            <h4><a href="#">Templates</a></h4>
                        </div>
                        <div id="product-card-1">
                            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21.6 2.7c0-.2-.2-.3-.4-.4c-3.8-1-7.9.3-10.4 3.3L9.5 7.1l-2.7-.7c-1.1-.4-2.2.1-2.7 1.1L2 11.2s0 .1-.1.1c-.1.3.1.5.4.6l3.4.7c-.3.9-.6 1.8-.7 2.7c0 .2 0 .3.1.4l3 2.9c.1.1.2.1.4.1c.9-.1 1.9-.3 2.8-.6l.7 3.3c0 .2.3.4.5.4c.1 0 .2 0 .2-.1l3.7-2.1c.9-.5 1.3-1.6 1.1-2.6l-.7-2.9l1.4-1.3c3.1-2.3 4.4-6.3 3.4-10.1zM3.2 11.1L4.9 8c.3-.6.9-.8 1.5-.6l2.3.6l-1 1.2c-.6.8-1.2 1.6-1.6 2.5l-2.9-.6zM16 19l-3.1 1.8l-.6-2.9c.9-.4 1.7-1 2.5-1.6l1.3-1.2l.6 2.3c0 .6-.2 1.3-.7 1.6zm1.6-6.7l-3.5 3.2c-1.5 1.3-3.4 2.1-5.4 2.3l-2.6-2.6c.3-2 1.1-3.9 2.4-5.4L10.1 8l.1-.1l1.4-1.6c2.2-2.6 5.8-3.8 9.1-3.1c.7 3.4-.4 6.9-3.1 9.1zm-1.2-6.7c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9c1.1 0 1.9-.9 1.9-1.9c0-1-.8-1.9-1.9-1.9zm0 2.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9s.9.4.9.9s-.4.9-.9.9z"/></svg>
                            <h4><a href="#">Classic Unbounce Features</a></h4>
                        </div>
                        <div id="product-card-1">
                            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g transform="rotate(90 24 24)"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14"/><path d="M44 18H18v26h26V18Z"/></g></g></svg>
                            <h4><a href="#">Unbounce Integrations</a></h4>
                        </div>
                    
                    </div>
                    <hr>
                    <div>
                        <h4>Recession marketing survival toolkit</h4>
                        <p>Don’t get lost in the wilderness, here’s how you can rely on landing pages for more sales, leads, and clicks.</p>
                        
                        <h4 id="learn-more"><a href="#">Learn More</a></h4>
            
                        <a href="#"><img id ="product-image" src="https://unbounce.com/photos/big-nav-block-347x224-v2_2X.jpg" alt=""></a>
                    
                    </div>
                 
                </div>

            </div>
            <!-- ............................solution/......................... -->
            <div class="dropdown1">
                <li id="solution" class="nav-item">Solutions <i id="solution-angle" class="fa-solid fa-angle-down"></i></li>
                <div id="mega-menu-solution">
                    <div>
                        <h4>By Industry</h4>
                        <div id="solution-card">
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g transform="translate(32 0) scale(-1 1)"><path fill="currentColor" d="M5 7c-.55 0-1 .45-1 1s.45 1 1 1h2.219l2.625 10.5c.222.89 1.02 1.5 1.937 1.5H23.25c.902 0 1.668-.598 1.906-1.469L27.75 10H11l.5 2h13.656l-1.906 7H11.781L9.156 8.5A1.983 1.983 0 0 0 7.22 7zm17 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm0 2c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1zm9 0c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1z"/></g></svg>
                            <h4 class="sol"><a href="./ecommerce.html">Ecommerce</a></h4>
                        </div>
                        <div id="solution-card"> 
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g transform="translate(32 0) scale(-1 1)"><path fill="currentColor" d="M25.822 10.124a10 10 0 0 0-19.644 0A7.496 7.496 0 0 0 7.5 25H8v-2h-.5a5.496 5.496 0 0 1-.377-10.98l.836-.057l.09-.833a7.998 7.998 0 0 1 15.902 0l.09.833l.836.058A5.496 5.496 0 0 1 24.5 23H24v2h.5a7.496 7.496 0 0 0 1.322-14.876Z"/><path fill="currentColor" d="M23 22v-2h-2.101a4.968 4.968 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A4.968 4.968 0 0 0 17 16.101V14h-2v2.101a4.968 4.968 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A4.968 4.968 0 0 0 11.101 20H9v2h2.101a4.968 4.968 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a4.968 4.968 0 0 0 1.753.732V28h2v-2.101a4.968 4.968 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A4.968 4.968 0 0 0 20.899 22Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3Z"/></g></svg>
                            <h4 class="sol"><a href="#">SaaS</a></h4>
                        </div>
                        <div id="solution-card">
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 40 40"><g transform="translate(40 0) scale(-1 1)"><path fill="currentColor" d="M22.082 30.558h-4.047a1.238 1.238 0 0 1-1.236-1.237l-.229-3.135a7.707 7.707 0 0 1-4.186-6.837c0-4.232 3.443-7.676 7.676-7.676s7.676 3.443 7.676 7.676a7.712 7.712 0 0 1-4.186 6.837l-.231 3.171c-.001.646-.555 1.201-1.237 1.201zm-2.023-17.885a6.684 6.684 0 0 0-6.676 6.676a6.702 6.702 0 0 0 3.874 6.06l.267.124l.273 3.752c.001.167.107.273.238.273h4.047c.13 0 .236-.106.236-.237l.274-3.788l.268-.123a6.706 6.706 0 0 0 3.874-6.061a6.684 6.684 0 0 0-6.675-6.676z"/><path fill="currentColor" d="M22.193 33.894h-4.269a1.237 1.237 0 0 1-1.235-1.236V31.48c0-.682.554-1.235 1.235-1.235h4.269c.682 0 1.236.554 1.236 1.235v1.178a1.237 1.237 0 0 1-1.236 1.236zm-4.268-2.65a.235.235 0 0 0-.235.235v1.178c0 .13.105.236.235.236h4.269c.13 0 .236-.106.236-.236V31.48a.236.236 0 0 0-.236-.235h-4.269zm1.634-27.138h1v6.183h-1zm11.417 5.069l.707.707l-4.372 4.371l-.707-.707zm-1.491 10.478h6.183v1h-6.183zM9.028 9.173l4.371 4.371l-.707.707l-4.371-4.37zm-4.696 10.48h6.184v1H4.332z"/></g></svg>
                            <h4 class="sol"><a href="#">Agencies</a></h4>
                        </div>
                        <div id="solution-card"> 
                            <img class ="solution-img" src="https://unbounce.com/photos/icons8-small-business-96-black.svg" alt="">
                            <h4 class="sol"><a href="#">Small Businesses</a></h4>
                        </div>
                        <div id="solution-card">
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M14.68 14.81a6.76 6.76 0 1 1 6.76-6.75a6.77 6.77 0 0 1-6.76 6.75Zm0-11.51a4.76 4.76 0 1 0 4.76 4.76a4.76 4.76 0 0 0-4.76-4.76Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M16.42 31.68A2.14 2.14 0 0 1 15.8 30H4v-5.78a14.81 14.81 0 0 1 11.09-4.68h.72a2.2 2.2 0 0 1 .62-1.85l.12-.11c-.47 0-1-.06-1.46-.06A16.47 16.47 0 0 0 2.2 23.26a1 1 0 0 0-.2.6V30a2 2 0 0 0 2 2h12.7Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M26.87 16.29a.37.37 0 0 1 .15 0a.42.42 0 0 0-.15 0Z" class="clr-i-outline clr-i-outline-path-3"/><path fill="currentColor" d="m33.68 23.32l-2-.61a7.21 7.21 0 0 0-.58-1.41l1-1.86A.38.38 0 0 0 32 19l-1.45-1.45a.36.36 0 0 0-.44-.07l-1.84 1a7.15 7.15 0 0 0-1.43-.61l-.61-2a.36.36 0 0 0-.36-.24h-2.05a.36.36 0 0 0-.35.26l-.61 2a7 7 0 0 0-1.44.6l-1.82-1a.35.35 0 0 0-.43.07L17.69 19a.38.38 0 0 0-.06.44l1 1.82a6.77 6.77 0 0 0-.63 1.43l-2 .6a.36.36 0 0 0-.26.35v2.05A.35.35 0 0 0 16 26l2 .61a7 7 0 0 0 .6 1.41l-1 1.91a.36.36 0 0 0 .06.43l1.45 1.45a.38.38 0 0 0 .44.07l1.87-1a7.09 7.09 0 0 0 1.4.57l.6 2a.38.38 0 0 0 .35.26h2.05a.37.37 0 0 0 .35-.26l.61-2.05a6.92 6.92 0 0 0 1.38-.57l1.89 1a.36.36 0 0 0 .43-.07L32 30.4a.35.35 0 0 0 0-.4l-1-1.88a7 7 0 0 0 .58-1.39l2-.61a.36.36 0 0 0 .26-.35v-2.1a.36.36 0 0 0-.16-.35ZM24.85 28a3.34 3.34 0 1 1 3.33-3.33A3.34 3.34 0 0 1 24.85 28Z" class="clr-i-outline clr-i-outline-path-4"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                            <h4 class="sol"><a href="#">Professional Services</a></h4>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4>By Use Case</h4>
                        <div id="solution-card">
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M14.58 32.31a1 1 0 0 1-.94-.65L4 5.65a1 1 0 0 1 1.25-1.28l26 9.68a1 1 0 0 1-.05 1.89l-8.36 2.57l8.3 8.3a1 1 0 0 1 0 1.41l-3.26 3.26a1 1 0 0 1-.71.29a1 1 0 0 1-.71-.29l-8.33-8.33l-2.6 8.45a1 1 0 0 1-.93.71Zm3.09-12a1 1 0 0 1 .71.29l8.79 8.79L29 27.51l-8.76-8.76a1 1 0 0 1 .41-1.66l7.13-2.2L6.6 7l7.89 21.2l2.22-7.2a1 1 0 0 1 .71-.68Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                            <h4 class="sol"><a href="#">PPC</a></h4>
                        </div>
                        <div id="solution-card">  
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z"/></svg>
                            <h4 class="sol"><a href="#">Social Ads</a></h4>
                        </div>
                        <div id="solution-card">                               
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>
                            <h4 class="sol"><a href="#">Email Marketing</a></h4>
                        </div>
                        <div id="solution-card">  
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.074 2.633c.32-.844 1.531-.844 1.852 0l2.07 5.734a.99.99 0 0 0 .926.633h5.087c.94 0 1.35 1.17.611 1.743L18 14a.968.968 0 0 0-.322 1.092L19 20.695c.322.9-.72 1.673-1.508 1.119l-4.917-3.12a1 1 0 0 0-1.15 0l-4.917 3.12c-.787.554-1.83-.22-1.508-1.119l1.322-5.603A.968.968 0 0 0 6 14l-3.62-3.257C1.64 10.17 2.052 9 2.99 9h5.087a.989.989 0 0 0 .926-.633l2.07-5.734Z"/></svg>
                            <h4 class="sol"><a href="#">Lead Generation</a></h4>
                        </div>
                        <div id="solution-card"> 
                            <svg class ="icon-solution" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M13.35 10.48H4.5l-.24-1.25h9.13a1.24 1.24 0 0 0 1.22-1l.84-4a1.25 1.25 0 0 0-1.22-1.51H3l-.22-1.24H.5v1.25h1.25l1.5 7.84a2 2 0 0 0-1.54 1.93a2.09 2.09 0 0 0 2.16 2a2.08 2.08 0 0 0 2.13-2a2 2 0 0 0-.16-.77h5.49a2 2 0 0 0-.16.77a2.09 2.09 0 0 0 2.16 2a2 2 0 1 0 0-4zM14.23 4l-.84 4H4l-.74-4zM3.87 13.27A.85.85 0 0 1 3 12.5a.85.85 0 0 1 .91-.77a.84.84 0 0 1 .9.77a.84.84 0 0 1-.94.77zm9.48 0a.85.85 0 0 1-.91-.77a.92.92 0 0 1 1.81 0a.85.85 0 0 1-.9.77z"/></svg>
                            <h4 class="sol"><a href="#">Sell Online</a></h4>
                        </div>
                    </div>
                </div>
            </div>
            <li id="pricing" class="nav-item"><a id ="a-pricing" href="./pricing.html">Pricing</a></li>

            <!-- learn.............................................................................................. -->
            <div class="dropdown2">
                <li id="learn" class="nav-item">Learn <i id ="learn-angle" class="fa-solid fa-angle-down"></i></li>
                <div id="mega-menu-learn">
                    <div>
                        <h4>Conversion Intelligence Resources</h4>
                        <p>Learn how AI can help you get more leads, sign-ups, and sales from your campaigns.</p>                     
                        <h4 class ="unbounce-learn"><a href="./conversionIntel.html">What is Conversion Intelligence?</a></h4>
                        <h4 class ="unbounce-learn"><a href="#">The Ultimate Optimization Guide</a></h4>
                        <h4 class ="unbounce-learn"><a href="#">Why AI in Marketing Matters</a></h4>
                        <h4 class ="unbounce-learn"><a href="#">Conversion Benchmark Report</a></h4>
                        <h4 class ="unbounce-learn"><a href="#">Conversion Insights</a></h4>
                    </div>
                    <hr>
                    <div>
                        <h4>Marketing Fundamentals</h4>
                        <p>Explore a library of resources to help you build higher-converting landing pages and grow your business.</p>                     
                        <h4 class ="unbounce-learn"><a href="#">What is Landing Page?</a></h4>
                        <h4 class ="unbounce-learn"><a href="#">Landing Page Examples</a></h4>
                        <h4 class ="unbounce-learn"><a href="#">Customer Stories & Case Studies</a></h4>
                        <h4 class ="unbounce-learn"><a href="#">Blog</a></h4>
                        <h4 class ="unbounce-learn"><a href="#">Resource Library</a></h4>
                    </div>
                    <hr>
                    <div>
                        <h4>Join the All-New Unbounce Community</h4>
                        <p>Head over to the Unbounce Community to build your business, make connections, and grow smarter together.</p>                     
                        <h4 id ="learn-more"><a href="#">Learn More</a></h4>
                        <a href="#"><img id ="learn-img" src="https://unbounce.com/photos/big-Learn-Dropmenu-Image.jpg" alt=""></a>
                    </div>
                        
                </div>

            </div>
            <li id="contact" class="nav-item"><a id ="a-contact" href="./contact.html">Contact</a></li>
            
        </ul>
    
        <div id="right-nav">
            <button id="serach-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" placeholder="Search..." id="search">
            <button id="login" class="nav-left-btn"><a id = "a-login" href="./login.html">Log In</a></button>
            <button id="free-trial" class="nav-left-btn"><a id = "a-free" href="./pricing.html">Start My Free Trial</a></button>
        </div>

    </div>
</div>`
}
export default navbar;
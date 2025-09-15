const footerHtml =` <footer>

    <div class="container grid grid-four--cols">
        <div class="footer-1--div" data-aos="fade-up">
          <div class="logo-brand">
            <a href="index.html" class="footer-subheading" ><b>RAJPUT STORE</b></a>
          </div>
            <p>Your Destination For Cutting-Edge Gadgets!</p>   
        

        <div class="social-footer--icons">
            <a href="https://facebook.com" target="_blank">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@ar_collection_786?si=LJT3V5yjIyejyUsC" target="_blank">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>

    </div>
        <div class="footer-2--div" data-aos="fade-up">
            <p class="footer-subheading">SHOPPING</p>
            <ul>
                <li><a href="/">Computer Store</a></li>
                <li><a href="/">Laptop Store</a></li>
                <li><a href="/">Accessories</a></li>
                <li><a href="/">Sales & Discount</a></li>
            </ul>
            
        </div>


       <div class="footer-3--div"data-aos="fade-up">
            <p class="footer-subheading " id="site-links" >Experience</p>
            <ul>
                <li><a href="/">Discount</a></li>
                <li><a href="/">Payment Method</a></li>
                <li><a href="/">Delivery</a></li>
                <li><a href="/">Return & Exchange</a></li>
          
            </ul>
            
        </div>

        <div class="footer-4--div" data-aos="fade-up">
           <a href="contact.html" class="footer-subheading" >Contact Us:</a>
            <ul>
                <li><i class="fa-solid fa-location-dot"></i>   1234 Street, City, Country</li>
                <li><i class="fa-solid fa-phone"></i>   +1 234 567 890</li>
                <li><i class="fa-solid fa-envelope"></i>   Example123@gmail.com</li>
                </ul>
        </div>

    </div>
    </footer>`;
    const footerElement = document.querySelector('.section-footer');
    footerElement.insertAdjacentHTML("afterbegin", footerHtml);
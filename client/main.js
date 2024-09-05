// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
        })
    }
})
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


{/*
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="main.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <!-- AOS animation CSS -->
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
</head>
<body>
    
    <header class="header" data-aos="fade-down">
        <a href="#home" class="logo">
            Siva <span>Kumar</span>
        </a>

        <i class='bx bx-menu' id="menu-icon"></i>

        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section class="home" id="home">
        <div class="home-rectangle" data-aos="fade-down"></div>

        <div class="home-content" data-aos="fade-down">
            <h4>Hi</h4>
            <h1>I'm <span>Siva</span></h1>
            <h4 class="text-animation">I'm a <span></span></h4>
            <p>I am a recent graduate with a strong passion for web development, eager to kickstart my career in the field. My academic projects have fueled my interest in creating intuitive and engaging digital experiences. I am driven by a desire to learn, grow, and contribute to meaningful projects within a collaborative team environment.</p>

            <div class="social-icons" data-aos="fade-down">
                <a href="https://www.linkedin.com/in/siva-kumar-63185a326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class='bx bxl-linkedin-square'></i></a>
                <a href="https://github.com/Sivakess"><i class='bx bxl-github'></i></a>
                <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                <a href="#"><i class='bx bxl-facebook-square'></i></a>
            </div>

            <a href="/client/assets/Resume.pdf" class="btn" target="_blank" data-aos="fade-down">Open CV</a>
        </div>

        <div class="home-img" data-aos="fade-down">
            <img src="./img/3 Siva pic.jpg" alt="">
        </div>
    </section>

    <section class="about" id="about" data-aos="fade-down">
        <div class="about-rectangle"></div>
        <div class="about-img" data-aos="fade-down">
            <img src="./img/3 Siva pic.jpg" alt="">
        </div>

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h4 class="text-animation"><span></span></h4>
            <p>I am a recent graduate with a strong passion for web development, eager to kickstart my career in the field. My academic projects have fueled my interest in creating intuitive and engaging digital experiences. I am driven by a desire to learn, grow, and contribute to meaningful projects within a collaborative team environment.</p>
            <a href="#" class="btn" data-aos="fade-down">Read More</a>
        </div>
    </section>

    <section class="projects" id="projects" data-aos="fade-down">
        <h2 class="heading">Projects</h2>
        <div class="projects-container">
            <div class="projects-box" data-aos="fade-down">
                <img src="./img/presentation-1454403_640.webp" alt="">
                <div class="projects-info">
                    <h4>Local Database System</h4>
                    <a href="https://databaselocaldirectoryproject.netlify.app/"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="projects-box" data-aos="fade-down">
                <img src="./img/man-6107457_640.webp" alt="">
                <div class="projects-info">
                    <h4>E-Commerce</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="projects-box" data-aos="fade-down">
                <img src="./img/euro main.jpeg" alt="">
                <div class="projects-info">
                    <h4>Mobile Development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#"><i class="bx bx-link"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section class="skills" id="skills" data-aos="fade-down">
        <h2 class="heading">Skills</h2>
        <div class="skills-bars">
            <!-- Individual skill bar entries -->
        </div>
    </section>

    <section class="contact" id="contact" data-aos="fade-down">
        <h2 class="heading">Contact <span>Me</span></h2>
        <form action="https://api.web3forms.com/submit" method="POST">
            <!-- Contact form inputs -->
        </form>
    </section>

    <footer class="footer" data-aos="fade-down">
        <div class="social">
            <a href="https://www.linkedin.com/in/siva-kumar-63185a326"><i class='bx bxl-linkedin-square'></i></a>
            <a href="https://github.com/Sivakess"><i class='bx bxl-github'></i></a>
            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
            <a href="#"><i class='bx bxl-facebook-square'></i></a>
        </div>

        <ul class="list">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">&copy; Siva Kumar | All Rights Reserved</p>
    </footer>

    <script src="main.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" >
      AOS.init({
        duration: 1200, // animation duration in milliseconds
        once: true      // only animate once
      });
    </script>
</body>
</html>
 */}
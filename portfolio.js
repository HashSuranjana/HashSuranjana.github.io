const toggleBtn=document.querySelector(".toggle_btn")
        const toggleBtnIcon=document.querySelector(".toggle_btn i")
        const dropdownMenu=document.querySelector(".dropdown-menu")

        toggleBtn.onclick = function() {
            dropdownMenu.classList.toggle("open")
            const isOpen = dropdownMenu.classList.contains("open")
        }
        

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        document.addEventListener('scroll', function () {
        // Calculate the scroll position as a percentage of the total scroll height
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        // Update the width of the top bar as the scroll percentage
        document.getElementById('topBar').style.width = `${scrollPercentage}%`;

        // Calculate the red component of the RGB color based on the scroll percentage
        const redValue = Math.min(255, Math.round((scrollPercentage / 100) * 255));

        // Update the background color of the top bar
        document.getElementById('topBar').style.backgroundColor = `rgb(0, 255, 0)`;
    });

    var typed = new Typed(".typing",{
      strings: [" F r o n t e n d  D e v e l o p e r .","M o b i l e A p p D e v e l o p e r ."],
      typeSpeed:150,
      backSpeed:120,
      loop:true
    })

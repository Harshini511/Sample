const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        allInput = form.querySelectorAll(".first input");


        function update() {
            var select = document.getElementById('entity');
            var entity = select.options[select.selectedIndex].value;
            
            var time = document.getElementById("time").value;

            var date = document.getElementById("date").value;
            
            var quantity = document.getElementById("quantity").value;
            
            var price = document.getElementById("price").value;
            
            var select = document.getElementById('bs');
            var bs = select.options[select.selectedIndex].value;

            window.location.assign("http://www.w3schools.com");
        }



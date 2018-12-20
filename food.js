    (function() {
        var elements = [];

        function Food(x, y, width, height, color) {
            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 20;
            this.height = height || 20;
            this.color = color || "green";
        };


        function remove() {
            for (var i = 0; i < elements.length; i++) {
                elements[i].parentElement.removeChild(elements[i]);
            }
            while (elements.length > 0) {
                elements.pop();
            }
        }



        Food.prototype.init = function(map) {

            remove();

            var dv = document.createElement("div");
            map.appendChild(dv);

            dv.style.width = this.width + "px";
            dv.style.height = this.height + "px";
            dv.style.backgroundColor = this.color;
            dv.style.position = 'absolute';

            // this.x = (parseInt(Math.random() * (map.offsetWidth / this.width)) - 1) * this.width;
            // this.y = (parseInt(Math.random() * (map.offsetHeight / this.height)) - 1) * this.height;
            // 
            this.x = Math.floor(Math.random() * (map.offsetWidth - this.width));
            this.y = Math.floor(Math.random() * (map.offsetHeight - this.height));


            dv.style.left = this.x + "px";
            dv.style.top = this.y + "px";




            elements.push(dv);

        };
        window.Food = Food;
    }());
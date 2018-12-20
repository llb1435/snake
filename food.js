    (function() {
        var elements = [];

        function Food(x, y, width, height, color) {
            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 20;
            this.height = height || 20;
            this.color = color || "green";
            this.clear = false;
            this.id = guid();
        };


        function guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }


        function remove(food) {

            for (var i = 0; i < elements.length; i++) {
                if (food.clear == true && elements[i].getAttribute("id") == food.id) {
                    elements[i].parentElement.removeChild(elements[i]);
                    elements.splice(i, 1);
                    food.clear = false;
                    i--;

                }
            }

        }



        Food.prototype.init = function(map) {

            remove(this);

            var dv = document.createElement("div");
            map.appendChild(dv);

            dv.style.width = this.width + "px";
            dv.style.height = this.height + "px";
            dv.style.backgroundColor = this.color;
            dv.style.position = 'absolute';
            dv.setAttribute("id", this.id);

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
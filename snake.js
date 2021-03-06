(function() {
    var elements = [];

    function Snake(w, h, direction) {
        this.width = w || 20;
        this.height = h || 20;
        this.direction = direction || "right";

        this.body = [
            { x: 3, y: 2, color: "red" },
            { x: 2, y: 2, color: "orange" },
            { x: 1, y: 2, color: "orange" },
            // { x: 60, y: 2, color: "red" },
            // { x: 40, y: 2, color: "orange" },
            // { x: 20, y: 2, color: "orange" },
        ];
    }

    Snake.prototype.init = function(map) {

        remove();

        for (var i = 0; i < this.body.length; i++) {
            var obj = this.body[i];
            var dv = document.createElement("div");
            map.appendChild(dv);

            dv.style.position = "absolute";
            dv.style.width = this.width + "px";
            dv.style.height = this.height + "px";
            dv.style.left = obj.x * this.width + "px";
            dv.style.top = obj.y * this.height + "px";
            // dv.style.left = obj.x + this.width + "px";
            // dv.style.top = obj.y + this.height + "px";                
            dv.style.backgroundColor = obj.color;
            dv.style.borderRadius = "50%";

            elements.push(dv);
        }
    };

    Snake.prototype.move = function(food, map) {

        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
            // // this.body[i].x = this.body[i - 1].x - this.width + 1;
            // this.body[i].y = this.body[i - 1].y  + 1;
        };

        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "up":
                this.body[0].y -= 1;
                break;
            case "down":
                this.body[0].y += 1;
                break;
            default:
                // statements_def
                break;
        };

        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;

        // if(headX == food[i].x && headY == food[i].y) {

        for (var i = 0; i < 5; i++) {
            var topLeft = false,
                topRight = false,
                downLeft = false,
                downRight = false;
            if (((food[i].x >= headX) && (food[i].x <= headX + this.width)) && ((food[i].y >= headY) && (food[i].y <= headY + this.height))) {
                topLeft = true;
                food[i].clear = true;
            }
            if (((food[i].x + food[i].width >= headX) && (food[i].x + food[i].width <= headX + this.width)) && ((food[i].y >= headY) && (food[i].y <= headY + this.height))) {
                topRight = true;
                food[i].clear = true;
            }
            if (((food[i].x >= headX) && (food[i].x <= headX + this.width)) && ((food[i].y + food[i].height >= headY) && (food[i].y + food[i].height <= headY + this.height))) {
                downLeft = true;
                food[i].clear = true;
            }
            if (((food[i].x + food[i].width >= headX) && (food[i].x + food[i].width <= headX + this.width)) && ((food[i].y + food[i].height >= headY) && (food[i].y + food[i].height <= headY + this.height))) {
                downRight = true;
                food[i].clear = true;
            }

            if (topLeft || topRight || downLeft || downRight) {
                var last = this.body[this.body.length - 1];
                this.body.push({
                    x: last.x,
                    y: last.y,
                    color: last.color
                });
                food[i].init(map);
            }
        }
    };

    function remove() {
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentElement.removeChild(elements[i]);
        }
        while (elements.length > 0) {
            elements.pop();
        }
    }

    window.Snake = Snake;
}());
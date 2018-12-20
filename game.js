document.write("<script type='text/javascript' src='food.js'></script>");
document.write("<script type='text/javascript' src='snake.js'></script>");

(function() {
    function Game(map) {
        this.food = [];
        for (var i = 0; i < 5; i++) {
            this.food[i] = new Food();
        }
        this.snake = new Snake();
        this.map = map;
    };

    Game.prototype.init = function() {
        for (var i = 0; i < 5; i++) {
            this.food[i].init(this.map);
        }
        this.snake.init(this.map);
        // var Game = this;
        // setInterval(function () {
        //  Game.snake.move();
        //  Game.snake.init(Game.map);
        // }, 150);
        this.runSnake(this.food, this.map);
        this.bindKey();
    };

    Game.prototype.runSnake = function(food, map) {
        var game = this;
        var timer = [400, 300, 200, 150, 100, 50];
        var t = 450;

        // var timeID = setInterval(function() {
        //     this.snake.move(food, map);
        //     this.snake.init(map);

        //     var maxX = map.offsetWidth / this.snake.width;
        //     var maxY = map.offsetHeight / this.snake.height;

        //     var headX = this.snake.body[0].x;
        //     var headY = this.snake.body[0].y;

        //     if (headX < 0 || headX >= Math.floor(maxX) || headY < 0 || headY >= Math.floor(maxY)) {
        //         clearInterval(timeID);
        //         alert("Game over! \r\nYour score: " + this.snake.body.length + "\r\n    Go ahead! Come on!");
        //     };
        // }.bind(game), timer);
        var timeID = setInterval(fn.bind(game), t);

        function fn() {
            this.snake.move(food, map);
            this.snake.init(map);

            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;

            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;

            switch (this.snake.body.length) {
                case 5:
                    t = timer[0];
                    clearInterval(timeID);
                    timeID = setInterval(fn.bind(game), t);
                    break;
                case 7:
                    t = timer[1];
                    clearInterval(timeID);
                    timeID = setInterval(fn.bind(game), t);
                    break;
                case 8:
                    t = timer[2];
                    clearInterval(timeID);
                    timeID = setInterval(fn.bind(game), t);
                    break;
                case 9:
                    t = timer[3];
                    clearInterval(timeID);
                    timeID = setInterval(fn.bind(game), t);
                    break;
                case 20:
                    t = timer[4];
                    clearInterval(timeID);
                    timeID = setInterval(fn.bind(game), t);
                    break;
                default:
                    break;
            };


            if (headX < 0 || headX >= Math.floor(maxX) || headY < 0 || headY >= Math.floor(maxY)) {
                clearInterval(timeID);
                alert("Game over! \r\nYour score: " + this.snake.body.length + "\r\n    Go ahead! Come on!");
            };

        };


    };

    Game.prototype.bindKey = function() {
        var game = this;

        document.addEventListener("keydown", function(e) {
            switch (e.key) {
                case "w":
                case "ArrowUp":
                    if (this.snake.direction != "down") {
                        this.snake.direction = "up";
                    };
                    break;
                case "a":
                case "ArrowLeft":
                    if (this.snake.direction != "right") {
                        this.snake.direction = "left";
                    };
                    break;
                case "s":
                case "ArrowDown":
                    if (this.snake.direction != "up") {
                        this.snake.direction = "down";
                    };
                    break;
                case "d":
                case "ArrowRight":
                    if (this.snake.direction != "left") {
                        this.snake.direction = "right";
                    };
                    break;
                default:
                    // statements_def
                    break;
            }
        }.bind(game), false);

    };


    window.Game = Game;
}());
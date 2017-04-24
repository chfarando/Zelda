var Link = function(name, posX, posY, cross, hat){
	this.name = name;
	if(hat)	this.hatNb = 3;
	else this.hatNb = 0;

	this.cross = cross;
	this.posX = posX;
	this.posY = posY;
	this.div;
	this.create = function(){
		this.div = document.createElement("div");
		this.div.setAttribute("class", "link");
		this.div.style.top 	= this.posY + "px";
		this.div.style.left = this.posX + "px";
		this.display();
	}
	this.display = function(){
		document.querySelector("body").appendChild(this.div);
	}
	this.direction = "Bas";
	this.move = function(dir){
		if(dir =="up"){
			this.posY -= 32;
			this.direction = "Haut";
		}
		if(dir =="down"){
			this.posY += 32;
			this.direction = "Bas";
		}
		if(dir =="left"){
			this.posX -= 32;
			this.direction = "Gauche";
		}
		if(dir =="right"){
			this.posX += 32;
			this.direction = "Droite";
		}
		this.div.style.top 	= this.posY + "px";
		this.div.style.left 	= this.posX + "px";
	}
	this.detect = function(){
		var _this = this;
		window.addEventListener('keypress', function (e){
			if(e.keyCode==_this.cross[0]){ 
				_this.move("up");
			}
			if(e.keyCode==_this.cross[1]){ 
				_this.move("down");
			}
			if(e.keyCode==_this.cross[2]){ 
				_this.move("left");
			}
			if(e.keyCode==_this.cross[3]){ 
				_this.move("right");
			}
		}, false);
		_this = this;
		document.querySelector(".top").addEventListener('click', function (e){
			_this.move("up");
		}, false);
		document.querySelector(".bottom").addEventListener('click', function (e){
			_this.move("down");
		}, false);
		document.querySelector(".left").addEventListener('click', function (e){
			_this.move("left");
		}, false);
		document.querySelector(".right").addEventListener('click', function (e){
			_this.move("right");
		}, false);
	}
	this.animate = function(){
		var step=3;
		var _this = this;
		var animation = setInterval(function(){
			step%3==0 ? step=1 : step++;
			_this.div.setAttribute("class", "link");//reinit class
			_this.div.classList.add("dir"+_this.direction+parseInt(_this.hatNb+step) );
		}, 200);
	}
	//init:
	this.create();
	this.detect();
	this.animate();
}

var link1 = new Link("Pierre", 320, 64, [56, 53, 52, 54], true);

var link2 = new Link("Paul", 64, 320, [122, 115, 113, 100]);



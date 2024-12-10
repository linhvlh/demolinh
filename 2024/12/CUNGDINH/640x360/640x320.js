(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,360);


(lib.hoa = function() {
	this.initialize(img.hoa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,293);


(lib.phao01 = function() {
	this.initialize(img.phao01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,115);


(lib.phao02 = function() {
	this.initialize(img.phao02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,192);


(lib.phao03 = function() {
	this.initialize(img.phao03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,410);


(lib.phao04 = function() {
	this.initialize(img.phao04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,157);


(lib.sp1 = function() {
	this.initialize(img.sp1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,349,420);


(lib.sp2 = function() {
	this.initialize(img.sp2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,866,386);


(lib.sp3 = function() {
	this.initialize(img.sp3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,910,644);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,45);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,429,60);


(lib.talent = function() {
	this.initialize(img.talent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,298);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hoa();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.5,73.3);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-33.5,0,33.5,0).s().p("AlOR5MAAAgjxIKdAAMAAAAjxg");
	this.shape.setTransform(33.5,114.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,229);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sp3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227.5,161);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sp2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216.5,96.5);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sp1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.3,105);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330.4,46.2);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261,34.7);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.talent();
	this.instance.parent = this;
	this.instance.setTransform(483,53,0.74,0.74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(483,53,328.6,220.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#84B519","#107F2B"],[0,1],3.2,-3.1,-3.1,3.2).s().p("AgeAgQgNgNgBgTQABgSANgMQAMgNASgBQATABANANQAMAMABASQgBATgMANQgNANgTgBQgSABgMgNgAgTgTQgIAIAAALQAAAMAIAIQAIAIALAAQAMAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgMgBQgLABgIAIg");
	this.shape.setTransform(9.95,9.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#84B519","#107F2B"],[0,1],-6,0,6,0).s().p("AgqArQgRgSAAgZQAAgXARgTQATgRAXAAIA8AAIAAA7QAAAZgRASQgSARgZAAQgXAAgTgRgAgbgbQgMALAAAQQAAAQAMAMQALAMAQAAQAQAAAMgMQAMgMAAgQQAAgQgMgLQgMgMgQAAQgQAAgLAMg");
	this.shape_1.setTransform(9.95,9.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.Symbol8s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.closebutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("AiViWICVCWICWiWACWCXIiWiXIiVCX");
	this.shape.setTransform(18.1,19.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAAAICWiWAiViWICVCWIiVCXACWCXIiWiX");
	this.shape_1.setTransform(18.1,19.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiuCwIAAlfIFdAAIAAFfg");
	this.shape_2.setTransform(16.25,17.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0.3,37.800000000000004,37.7);


(lib.shape51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBCA6D").s().p("A5IZIQqZqZAAuvQAAutKZqbQKaqZOuAAQOvAAKZKZQKaKbAAOtQAAOvqaKZQqZKauvAAQuuAAqaqag");
	this.shape.setTransform(-329.5,409.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.9,182.4,454.79999999999995,454.80000000000007);


(lib.Symbol9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.phao02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183,192);


(lib.Symbol8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.phao01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,115);


(lib.Symbol7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.phao03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,417,410);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.phao04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,157);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgTg1QgBgWASgEQARgFAFAgIgXCFg");
	this.shape.setTransform(3.1973,10.1912);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(1.2,2.1,4,16.2), null);


(lib.shape38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF5A6","#FFF5A6","rgba(255,245,166,0.188)","rgba(255,245,166,0)"],[0,0.071,0.604,1],0,0,0,0,0,15.7).s().p("AhtBuQgtguAAhAQAAg/AtguQAugtA/AAQBAAAAuAtQAtAuAAA/QAABAgtAuQguAthAAAQg/AAgugtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol37("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.25,36.6,0.7,0.7,0,0,0,38.2,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,x:38.2},59).to({regX:38.4,scaleX:0.7,scaleY:0.7,rotation:0,x:38.3,y:36.55},95,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-14.3,102,101.89999999999999);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol34("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64.8,80.5,1,1,0,0,0,113.8,80.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:329.8,alpha:1},9,cjs.Ease.get(1)).to({x:324.8},6,cjs.Ease.get(1)).wait(189).to({startPosition:0},0).to({_off:true},1).wait(733));

	// Layer_3
	this.instance_1 = new lib.Symbol33("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-83.8,90.2,1,1,0,0,0,108.2,48.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:181.2,alpha:1},9,cjs.Ease.get(1)).to({x:176.2},6,cjs.Ease.get(1)).wait(186).to({startPosition:0},0).to({_off:true},1).wait(733));

	// Layer_2
	this.instance_2 = new lib.Symbol32("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-216.4,87.5,1,1,0,0,0,43.6,52.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:48.6,alpha:1},9,cjs.Ease.get(1)).to({x:43.6},6,cjs.Ease.get(1)).wait(183).to({startPosition:0},0).to({_off:true},1).wait(733));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260,0,703.5,161);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol30("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(97.15,58.1,0.3,0.3,0,0,0,165,23.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regY:23.2,scaleX:1.2,scaleY:1.2,y:58.15,alpha:1},9,cjs.Ease.get(1)).to({regX:165.2,regY:23.1,scaleX:1,scaleY:1,x:97.2,y:58.1},10,cjs.Ease.get(1)).wait(720));

	// Layer_1
	this.instance_1 = new lib.Symbol29("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(130.5,17.3,0.3,0.3,0,0,0,130.5,17.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:17.3,scaleX:1.2,scaleY:1.2,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},11,cjs.Ease.get(1)).wait(725));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-3.4,396.3,89.2);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-249.8,108.8,1,1,0,0,0,112.2,154.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-363.8,alpha:1},8,cjs.Ease.get(1)).to({x:-359.8},8,cjs.Ease.get(1)).wait(3269));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,7,442.6,220.5);


(lib._300x600_flasprite3_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 75
	this.instance = new lib.shape51("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(109.45,-83.75,0.0619,0.0619);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleX:0.0504,scaleY:0.0504,x:109.25,y:-86.9},1).to({scaleX:0.0242,scaleY:0.0242,x:120.95,y:-86.35},8).to({scaleX:0.0071,scaleY:0.0071,x:134.7,y:-87},11).to({_off:true},1).wait(14));

	// Layer 74
	this.instance_1 = new lib.shape51("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.8,-10.05,0.0431,0.0431);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({scaleX:0.0337,scaleY:0.0337,x:163.35,y:-3.55},1).to({scaleX:0.0048,scaleY:0.0048,x:244,y:-18.75},9).to({_off:true},1).wait(24));

	// Layer 73
	this.instance_2 = new lib.shape51("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(163.25,-56.15,0.0735,0.0735);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({scaleX:0.0619,scaleY:0.0619,x:181.6,y:-30.65},1).to({scaleX:0.0851,scaleY:0.0851,x:273.75,y:-58.55},1).to({_off:true},1).wait(33));

	// Layer 72
	this.instance_3 = new lib.shape51("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.9,-32.95,0.0836,0.0836);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({scaleX:0.0431,scaleY:0.0431,x:213.65,y:-20.45},1).to({_off:true},1).wait(34));

	// Layer 71
	this.instance_4 = new lib.shape51("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(182.65,-43.5,0.0401,0.0401);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:0.0342,scaleY:0.0342,x:199,y:-47.15},1).to({scaleX:0.0384,scaleY:0.0384,x:204.35,y:-50.15},1).to({scaleX:0.0285,scaleY:0.0285,x:249.55,y:-112.6},1).to({_off:true},1).wait(32));

	// Layer 70
	this.instance_5 = new lib.shape51("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(173.9,-0.45,0.0404,0.0404);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({scaleX:0.027,scaleY:0.027,guide:{path:[173.9,-0.3,173.7,2.9,174.1,6,174.1,6.1,174.1,6.1]}},2).to({scaleX:0.0102,scaleY:0.0102,guide:{path:[174.2,6.2,175.1,13.4,179,20.2,184.6,29.9,192.9,38.6,194.3,40.1,195.9,41.7,195.9,41.7,195.9,41.7]}},11).to({scaleX:0.0047,scaleY:0.0047,guide:{path:[195.9,41.7,202.8,48.6,210.4,54.9,219.8,62.5,226.8,69.2]}},15).to({_off:true},1).wait(6));

	// Layer 69
	this.instance_6 = new lib.shape51("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(162.55,-78.85,0.0608,0.0608);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({scaleX:0.0551,scaleY:0.0551,x:163.3,y:-103.85},1).to({scaleX:0.0465,scaleY:0.0465,x:165.7,y:-108.15},1).to({scaleX:0.0244,scaleY:0.0244,x:190.45,y:-120.25},7).to({scaleX:0.0154,scaleY:0.0154,x:205.5,y:-127.4},5).to({scaleX:0.0025,scaleY:0.0025,x:239.6,y:-139.4},14).to({_off:true},1).wait(6));

	// Layer 68
	this.instance_7 = new lib.shape51("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(143.5,-29.55,0.0665,0.0665);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({scaleX:0.0344,scaleY:0.0344,x:150.1,y:-21.1},9).to({scaleX:0.033,scaleY:0.033,y:-20.75},1).to({scaleX:0.0316,scaleY:0.0316,x:149.95,y:-20.4},1).to({scaleX:0.0175,scaleY:0.0175,x:149.5,y:-16.9},10).to({scaleX:0.0161,scaleY:0.0161,y:-16.55},1).to({scaleX:0.0147,scaleY:0.0147,x:149.4,y:-16.25},1).to({scaleX:0.0034,scaleY:0.0034,x:149,y:-13.45},8).to({_off:true},1).wait(3));

	// Layer 67
	this.instance_8 = new lib.shape51("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-242,-29,0.0404,0.0404);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({scaleX:0.0025,scaleY:0.0025,x:-189.2,y:83.85},32).to({_off:true},1).wait(4));

	// Layer 66
	this.instance_9 = new lib.shape51("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-213.4,0.5,0.0558,0.0558);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({scaleX:0.0383,scaleY:0.0383,x:-216.45,y:26.75},1).to({scaleX:0.0355,scaleY:0.0355,x:-213.45,y:43.5},1).to({scaleX:0.0122,scaleY:0.0122,x:-247.7,y:51.05},12).to({_off:true},1).wait(29));

	// Layer 65
	this.instance_10 = new lib.shape51("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-229.65,-24.5,0.0597,0.0597);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.0822,scaleY:0.0822,x:-190.8,y:-26.65},2).to({scaleX:0.0539,scaleY:0.0539,x:-186.6,y:11.5},1).to({scaleX:0.0379,scaleY:0.0379,x:-189.35,y:49.55},2).to({scaleX:0.0204,scaleY:0.0204,x:-191.55,y:68.25},4).to({scaleX:0.004,scaleY:0.004,x:-190.7,y:88.65},7).to({_off:true},1).wait(29));

	// Layer 64
	this.instance_11 = new lib.shape51("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-192.3,-25.85,0.0807,0.0807);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({_off:false},0).to({x:-169.1,y:-53.85},1).to({x:-173.9,y:-67.45},2).to({scaleX:0.0738,scaleY:0.0738,x:-168.7,y:-64.75},1).to({scaleX:0.0529,scaleY:0.0529,x:-156.05,y:-50.15},3).to({scaleX:0.0061,scaleY:0.0061,x:-48.35,y:32.8},34).wait(1).to({scaleX:0.0056,scaleY:0.0056,x:-46.5,y:34.25},0).wait(2));

	// Layer 63
	this.instance_12 = new lib.shape51("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-232.2,-40.95,0.0723,0.0723);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({scaleX:0.048,scaleY:0.048,x:-176.15,y:-48.05},1).to({scaleX:0.0346,scaleY:0.0346,x:-165.8,y:-72},1).to({x:-154.75,y:-76.7},1).to({scaleX:0.0277,scaleY:0.0277,x:-151.1,y:-77.45},1).to({scaleX:0.0052,scaleY:0.0052,x:-105.2,y:-73.5},9).to({_off:true},1).wait(30));

	// Layer 62
	this.instance_13 = new lib.shape51("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-107.95,-4.6,0.05,0.05);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({scaleX:0.0449,scaleY:0.0449,x:-114.8,y:11.8},1).to({scaleX:0.0313,scaleY:0.0313,x:-127.25,y:15},2).to({scaleX:0.0033,scaleY:0.0033,x:-157.15,y:4},7).to({_off:true},1).wait(30));

	// Layer 61
	this.instance_14 = new lib.shape51("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-180.9,-24,0.0646,0.0646);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({_off:false},0).to({scaleX:0.0386,scaleY:0.0386,x:-110.25,y:15.35},2).to({scaleX:0.0232,scaleY:0.0232,x:-95.65,y:57.35},2).to({scaleX:0.0061,scaleY:0.0061,x:-61.55,y:50},5).to({scaleX:0.0028,scaleY:0.0028,x:-24.2,y:33.2},5).to({_off:true},1).wait(29));

	// Layer 60
	this.instance_15 = new lib.shape51("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-103.45,-35.8,0.0687,0.0687);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5).to({_off:false},0).to({scaleX:0.0529,scaleY:0.0529,x:-65.95,y:-52.8},4).to({scaleX:0.0199,scaleY:0.0199,x:68.45,y:-133.2},18).to({scaleX:0.0148,scaleY:0.0148,x:109.9,y:-160.85},8).to({_off:true},1).wait(10));

	// Layer 59
	this.instance_16 = new lib.shape51("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-158.35,-21.25,0.0406,0.0406);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).to({scaleX:0.0818,scaleY:0.0818,x:-105,y:-38.05},1).to({scaleX:0.0577,scaleY:0.0577,x:-74.95,y:-36.9},1).to({y:-60.1},1).to({scaleX:0.0519,scaleY:0.0519,x:-70.65,y:-78.25},1).to({scaleX:0.0088,scaleY:0.0088,x:-28.4,y:-153.75},12).to({_off:true},1).wait(26));

	// Layer 58
	this.instance_17 = new lib.shape51("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-24.15,-40.65,0.0984,0.0984);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).to({scaleX:0.0879,scaleY:0.0879,x:-27.85,y:-48.75},1).to({scaleX:0.0597,scaleY:0.0597,x:-30.9,y:-63},2).to({scaleX:0.055,scaleY:0.055,x:-30.95,y:-62.1},1).to({scaleX:0.0198,scaleY:0.0198,x:-22.25,y:-64.4},12).to({scaleX:0.0036,scaleY:0.0036,x:-13.85,y:-64.9},12).to({_off:true},1).wait(12));

	// Layer 57
	this.instance_18 = new lib.shape51("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-24.25,-40,0.0975,0.0975);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5).to({_off:false},0).to({scaleX:0.0903,scaleY:0.0903,x:8.55,y:-42},1).to({scaleX:0.0573,scaleY:0.0573,x:23.25,y:-56.1},3).to({scaleX:0.0258,scaleY:0.0258,x:80.35,y:-97.9},10).to({scaleX:0.0083,scaleY:0.0083,x:132.35,y:-137.3},12).to({x:159.3,y:-157.1},7).to({_off:true},1).wait(7));

	// Layer 56
	this.instance_19 = new lib.shape51("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(20.95,15.95,0.0242,0.0242);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(8).to({_off:false},0).to({scaleX:0.0184,scaleY:0.0184,x:24.35,y:32.35},1).to({scaleX:0.0024,scaleY:0.0024,x:73.85,y:56.9},13).to({_off:true},1).wait(23));

	// Layer 55
	this.instance_20 = new lib.shape51("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(48.75,-18.65,0.095,0.095);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({_off:false},0).to({scaleX:0.0715,scaleY:0.0715,x:51.5,y:50.3},2).to({scaleX:0.0642,scaleY:0.0642,x:55.75,y:62.65},1).to({scaleX:0.03,scaleY:0.03,x:74.45,y:48.5},7).to({scaleX:0.0095,scaleY:0.0095,x:109.3,y:-20.6},14).to({_off:true},1).wait(14));

	// Layer 54
	this.instance_21 = new lib.shape51("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(65.05,43.3,0.0129,0.0129);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({_off:false},0).to({x:74.95,y:64.75},1).to({x:82.1,y:76.3},1).to({scaleX:0.0038,scaleY:0.0038,x:200.95,y:107.35},23).to({scaleX:0.0013,scaleY:0.0013,x:227.7,y:98},11).wait(1));

	// Layer 53
	this.instance_22 = new lib.shape51("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(55.9,-46.35,0.0845,0.0845);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(7).to({_off:false},0).to({scaleX:0.0714,scaleY:0.0714,x:73.5,y:-104.75},3).to({scaleX:0.0376,scaleY:0.0376,x:108.5,y:-67.9},8).to({scaleX:0.0045,scaleY:0.0045,x:206.3,y:71.5},26).to({_off:true},1).wait(1));

	// Layer 52
	this.instance_23 = new lib.shape51("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(16.95,-0.45,0.0298,0.0298);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(7).to({_off:false},0).to({scaleX:0.0851,scaleY:0.0851,x:83,y:-24.1},1).to({scaleX:0.0607,scaleY:0.0607,x:83.65,y:-21.3},1).to({scaleX:0.0381,scaleY:0.0381,x:89.65,y:-27.7},2).to({scaleX:0.0203,scaleY:0.0203,x:106.85,y:-16.5},4).to({scaleX:0.0051,scaleY:0.0051,x:127.45,y:-2.9},7).to({_off:true},1).wait(23));

	// Layer 51
	this.instance_24 = new lib.shape51("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(106.35,-69.45,0.0633,0.0633);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(9).to({_off:false},0).to({scaleX:0.05,scaleY:0.05,x:127.45,y:-123.3},2).to({scaleX:0.0206,scaleY:0.0206,x:255.6,y:-70.2},13).to({_off:true},1).wait(21));

	// Layer 50
	this.instance_25 = new lib.shape51("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-45.2,-32.25,0.0979,0.0979);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(5).to({_off:false},0).to({scaleX:0.0847,scaleY:0.0847,x:6.1,y:-40.2},1).to({x:105.05,y:-41.15},2).to({x:138.8,y:-29.15},1).to({scaleX:0.0551,scaleY:0.0551,x:230.45,y:-20.8},2).to({_off:true},1).wait(34));

	// Layer 49
	this.instance_26 = new lib.shape51("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(119.1,24.35,0.0477,0.0477);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(10).to({_off:false},0).to({scaleX:0.0362,scaleY:0.0362,x:114.45,y:58.3},1).to({scaleX:0.0325,scaleY:0.0325,x:113.2,y:73.3},1).to({scaleX:0.0046,scaleY:0.0046,x:152.55,y:109},33).wait(1));

	// Layer 48
	this.instance_27 = new lib.shape51("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(144.1,5.1,0.059,0.059);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(11).to({_off:false},0).to({scaleX:0.0531,scaleY:0.0531,x:151.85,y:16.85},1).to({scaleX:0.0299,scaleY:0.0299,x:169.6,y:41.3},4).to({scaleX:0.0169,scaleY:0.0169,x:189.35,y:57.9},4).to({scaleX:0.0046,scaleY:0.0046,x:220.95,y:78.6},7).to({_off:true},1).wait(18));

	// Layer 47
	this.instance_28 = new lib.shape51("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(145.2,-14.7,0.0569,0.0569);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(10).to({_off:false},0).to({scaleX:0.032,scaleY:0.032,x:171.7,y:-24.3},1).to({scaleX:0.0186,scaleY:0.0186,x:172.65,y:-28.25},2).to({scaleX:0.0033,scaleY:0.0033,x:228.75,y:-23.75},15).to({_off:true},1).wait(17));

	// Layer 46
	this.instance_29 = new lib.shape51("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(149.35,-32.2,0.0281,0.0281);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(10).to({_off:false},0).to({scaleX:0.0588,scaleY:0.0588,x:204.05,y:-8.3},1).to({scaleX:0.0449,scaleY:0.0449,x:198.2,y:50.5},2).to({scaleX:0.0397,scaleY:0.0397,x:198.15,y:64.35},1).to({scaleX:0.0158,scaleY:0.0158,x:207.95,y:109.5},11).to({scaleX:0.0049,scaleY:0.0049,x:227.55,y:140.25},20).wait(1));

	// Layer 45
	this.instance_30 = new lib.shape51("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(138.45,-33,0.013,0.013);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(10).to({_off:false},0).to({scaleX:0.0284,scaleY:0.0284,x:203.05,y:-15.4},1).to({scaleX:0.0322,scaleY:0.0322,x:227.75,y:-23.9},1).to({scaleX:0.0381,scaleY:0.0381,x:265.75,y:-48.75},1).to({_off:true},1).wait(32));

	// Layer 44
	this.instance_31 = new lib.shape51("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(-232.7,40.4,0.0275,0.0275);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(9).to({_off:false},0).to({scaleX:0.0178,scaleY:0.0178,x:-231.7,y:46.1},4).to({scaleX:0.0163,scaleY:0.0163,x:-230.1,y:47.4},3).to({scaleX:0.0097,scaleY:0.0097,x:-229.45,y:50.15},3).to({scaleX:0.0031,scaleY:0.0031,x:-225,y:48.65},9).to({_off:true},1).wait(17));

	// Layer 43
	this.instance_32 = new lib.shape51("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(-226.55,-14.85,0.0066,0.0066);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(2).to({_off:false},0).to({x:-240.2},2).to({scaleX:0.0033,scaleY:0.0033,x:-235.85,y:-0.6},11).to({_off:true},1).wait(30));

	// Layer 42
	this.instance_33 = new lib.shape51("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(-191.2,41,0.0242,0.0242);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(4).to({_off:false},0).to({scaleX:0.0147,scaleY:0.0147,x:-189.8,y:47.4},1).to({scaleX:0.0079,scaleY:0.0079,x:-181.4,y:30.3},3).to({scaleX:0.0031,scaleY:0.0031,x:-162.95,y:-5.95},7).to({_off:true},1).wait(30));

	// Layer 41
	this.instance_34 = new lib.shape51("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(-190.8,-26.3,0.0811,0.0811);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(2).to({_off:false},0).to({scaleX:0.053,scaleY:0.053,x:-187,y:12.05},1).to({scaleX:0.0383,scaleY:0.0383,x:-180.75,y:41.1},1).to({scaleX:0.0335,scaleY:0.0335,x:-176.05,y:55.7},1).to({scaleX:0.016,scaleY:0.016,x:-173.55,y:72.8},4).to({scaleX:0.0064,scaleY:0.0064,x:-168.3,y:89.05},6).to({_off:true},1).wait(30));

	// Layer 40
	this.instance_35 = new lib.shape51("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(-227.55,5.7,0.0296,0.0296);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(2).to({_off:false},0).to({scaleX:0.0164,scaleY:0.0164,x:-179.3,y:-13.4},1).to({scaleX:0.0148,scaleY:0.0148,x:-167,y:-9.05},1).to({scaleX:0.0132,scaleY:0.0132,x:-164,y:-8.65},1).to({scaleX:0.0026,scaleY:0.0026,x:-130.25,y:-53.95},10).to({_off:true},1).wait(30));

	// Layer 39
	this.instance_36 = new lib.shape51("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(-224.1,-43.95,0.0479,0.0479);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({scaleX:0.0217,scaleY:0.0217,x:-197.7,y:-76.35},4).to({scaleX:0.0022,scaleY:0.0022,x:-61.4,y:-82.4},13).to({_off:true},1).wait(28));

	// Layer 38
	this.instance_37 = new lib.shape51("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(-185.9,-23.7,0.0276,0.0276);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(2).to({_off:false},0).to({scaleX:0.0571,scaleY:0.0571,x:-131.15,y:-45},1).to({scaleX:0.0367,scaleY:0.0367,x:-128.9,y:-59.15},1).to({scaleX:0.0332,scaleY:0.0332,x:-127.6,y:-83.75},1).to({scaleX:0.0244,scaleY:0.0244,x:-122.6,y:-96.7},1).to({scaleX:0.0191,scaleY:0.0191,x:-118.05,y:-99.9},1).to({scaleX:0.0026,scaleY:0.0026,x:-82.85,y:-104.7},7).to({_off:true},1).wait(31));

	// Layer 37
	this.instance_38 = new lib.shape51("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(-152.65,0.25,0.0406,0.0406);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(3).to({_off:false},0).to({scaleX:0.0267,scaleY:0.0267,x:-135.25,y:57.45},2).to({scaleX:0.0249,scaleY:0.0249,x:-126.7,y:71.1},1).to({scaleX:0.0009,scaleY:0.0009,x:75.95,y:132.65},26).to({_off:true},1).wait(13));

	// Layer 36
	this.instance_39 = new lib.shape51("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(-104.05,-38.5,0.0815,0.0815);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(4).to({_off:false},0).to({scaleX:0.0434,scaleY:0.0434,x:-91.1,y:-45.6},1).to({scaleX:0.0316,scaleY:0.0316,x:-92.35,y:-66.75},1).to({scaleX:0.0257,scaleY:0.0257,y:-76.05},1).to({scaleX:0.0226,scaleY:0.0226,x:-92.25,y:-75.75},1).to({scaleX:0.0196,scaleY:0.0196,x:-92.2,y:-75.4},1).to({scaleX:0.0166,scaleY:0.0166,x:-92.05,y:-75.1},1).to({scaleX:0.0105,scaleY:0.0105,x:-91.85,y:-74.45},2).to({scaleX:0.0074,scaleY:0.0074,x:-91.8,y:-74.1},1).to({scaleX:0.0044,scaleY:0.0044,x:-91.7,y:-73.8},1).to({_off:true},1).wait(31));

	// Layer 35
	this.instance_40 = new lib.shape51("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(-233.9,-24.3,0.0432,0.0432);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({scaleX:0.0844,scaleY:0.0844,x:-108.15,y:-36.5},3).to({scaleX:0.1022,scaleY:0.1022,x:-66,y:-31},1).to({scaleX:0.0847,scaleY:0.0847,x:-71.75,y:-71.25},3).to({scaleX:0.0759,scaleY:0.0759,x:-72.7,y:-63.75},1).to({scaleX:0.0137,scaleY:0.0137,x:-77.6,y:38.45},23).to({scaleX:0.0064,scaleY:0.0064,x:-69.15,y:85.2},14).wait(1));

	// Layer 34
	this.instance_41 = new lib.shape51("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(-68.05,-31.65,0.0997,0.0997);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(4).to({_off:false},0).to({scaleX:0.1071,scaleY:0.1071,guide:{path:[-68,-31.6,-64.4,-30.9,-60.7,-29.5,-57.1,-28.1,-53.5,-27,-49.8,-25.9,-46.3,-25.4,-42.7,-25,-39.2,-26.1]}},1).to({scaleX:0.0769,scaleY:0.0769,guide:{path:[-39.2,-26.2,-39.2,-26.2,-39.2,-26.2,-35.2,-27.5,-36,-35.1,-36.8,-42.9,-38.2,-50.1,-38.8,-53.3,-39.2,-55.9,-39.2,-56,-39.2,-56]}},2).to({scaleX:0.0657,scaleY:0.0657,guide:{path:[-39.1,-56.1,-39.5,-58.8,-39.4,-60.6,-39.4,-62,-38.2,-61.4]}},1).to({scaleX:0.0583,scaleY:0.0583,guide:{path:[-38.2,-61.4,-37.9,-61.2,-37.6,-60.9]}},1).to({scaleX:0.0364,scaleY:0.0364,guide:{path:[-37.6,-60.8,-37.6,-60.8,-37.5,-60.8,-36,-59.5,-33.5,-56.2,-32.1,-54.4,-30.2,-52.6]}},7).to({scaleX:0.013,scaleY:0.013,guide:{path:[-30.2,-52.7,-30.2,-52.6,-30.1,-52.6,-29.5,-52,-28.8,-51.5,-25.9,-49.2,-23.6,-47,-21.3,-44.9,-20.4,-42.9,-20.3,-42.8,-20.3,-42.7]}},15).to({guide:{path:[-20.3,-42.7,-20.2,-42.4,-20.1,-42.3]}},4).to({scaleX:0.0026,scaleY:0.0026,guide:{path:[-20.1,-42.3,-20.1,-42.2,-20.1,-42.2,-20,-40.6,-21.7,-39.4]}},10).wait(1));

	// Layer 33
	this.instance_42 = new lib.shape51("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(-36.75,-5.45,0.0121,0.0121);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(7).to({_off:false},0).to({y:18.2},1).to({y:29.2},1).to({scaleX:0.0057,scaleY:0.0057,x:-43.65,y:114.75},25).to({_off:true},1).wait(11));

	// Layer 32
	this.instance_43 = new lib.shape51("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(-222.45,-20.75,0.0542,0.0542);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({scaleX:0.0896,scaleY:0.0896,x:-122.7,y:-43.2},3).to({scaleX:0.0861,scaleY:0.0861,x:-103.05,y:-39.4},1).to({scaleX:0.097,scaleY:0.097,x:-44.35,y:-31.85},1).to({scaleX:0.0724,scaleY:0.0724,x:9.95,y:-31.45},1).to({scaleX:0.0227,scaleY:0.0227,x:65.8,y:-8},13).to({scaleX:0.0051,scaleY:0.0051,x:142.05,y:13.25},22).to({_off:true},1).wait(4));

	// Layer 31
	this.instance_44 = new lib.shape51("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(-22.6,-23.15,0.0349,0.0349);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(6).to({_off:false},0).to({x:31.8,y:-15.95},1).to({scaleX:0.0384,scaleY:0.0384,x:44.95,y:36.25},2).to({x:48.15,y:56.25},1).to({scaleX:0.0085,scaleY:0.0085,x:90.3,y:112.5},24).to({scaleX:0.0037,scaleY:0.0037,x:104.75,y:118.05},11).wait(1));

	// Layer 30
	this.instance_45 = new lib.shape51("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(31.5,-33.25,0.0463,0.0463);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(7).to({_off:false},0).to({scaleX:0.0429,scaleY:0.0429,x:34.65,y:-66.25},1).to({scaleX:0.0394,scaleY:0.0394,x:43.75,y:-97.6},1).to({scaleX:0.0359,scaleY:0.0359,x:56.6,y:-114.5},1).to({scaleX:0.0337,scaleY:0.0337,x:63.55,y:-115.55},1).to({scaleX:0.0157,scaleY:0.0157,x:112.45,y:-85.65},8).to({scaleX:0.008,scaleY:0.008,x:140.35,y:-60.9},7).to({scaleX:0.0028,scaleY:0.0028,x:154.7,y:-0.3},14).to({_off:true},1).wait(5));

	// Layer 29
	this.instance_46 = new lib.shape51("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(41.75,-15.9,0.044,0.044);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(7).to({_off:false},0).to({scaleX:0.0881,scaleY:0.0881,x:65.5,y:-69.55},1).to({scaleX:0.0748,scaleY:0.0748,x:79.2,y:-72.15},1).to({scaleX:0.0682,scaleY:0.0682,x:82.2,y:-81.7},1).to({scaleX:0.0641,scaleY:0.0641,x:83.2,y:-79.35},1).to({scaleX:0.0358,scaleY:0.0358,x:80.35,y:-48.75},7).to({scaleX:0.0071,scaleY:0.0071,x:89.75,y:26.3},20).to({scaleX:0.0038,scaleY:0.0038,x:96.55,y:48.45},7).wait(1));

	// Layer 28
	this.instance_47 = new lib.shape51("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(99.65,-61.1,0.0703,0.0703);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(9).to({_off:false},0).to({x:110.9,y:-60.35},1).to({scaleX:0.0468,scaleY:0.0468,x:135.55,y:-50.7},1).to({scaleX:0.0367,scaleY:0.0367,x:136.75,y:-63.05},1).to({scaleX:0.0011,scaleY:0.0011,x:224.9,y:-54.3},25).to({_off:true},1).wait(8));

	// Layer 27
	this.instance_48 = new lib.shape51("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(33.75,-16.05,0.0371,0.0371);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(7).to({_off:false},0).to({scaleX:0.0809,scaleY:0.0809,guide:{path:[33.8,-16,39.9,-20.6,45.5,-25.9,51.1,-31.3,56.9,-36.5,62.7,-41.6,69,-45.9,75.2,-50.1,82.5,-52.5,82.5,-52.5,82.5,-52.5]}},1).to({scaleX:0.0911,scaleY:0.0911,guide:{path:[82.6,-52.5,94.6,-56.2,102.3,-52.9,110.1,-49.7,114.1,-46.5,117.3,-44,118.3,-43.9,118.3,-43.9,118.3,-43.9]}},1).to({scaleX:0.0809,scaleY:0.0809,guide:{path:[118.2,-44,118.3,-44,118.3,-44]}},1).to({scaleX:0.0707,scaleY:0.0707,guide:{path:[118.3,-43.9,118.4,-43.9,118.5,-44,118.6,-44.2,118.5,-44.7]}},1).to({scaleX:0.043,scaleY:0.043,guide:{path:[118.5,-44.8,118.5,-44.8,118.5,-44.8,118.3,-48,116.6,-56.2,115.1,-63.1,113.4,-69.8,113.4,-69.8,113.4,-69.8]}},9).to({scaleX:0.0038,scaleY:0.0038,guide:{path:[113.4,-69.7,113.2,-70.4,113,-71.1,111,-78.5,108.8,-85.8,106.6,-93.1,104.4,-100.4,102.1,-107.8,100.1,-115.2]}},25).wait(1));

	// Layer 26
	this.instance_49 = new lib.shape51("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(31.25,-16,0.0366,0.0366);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(7).to({_off:false},0).to({scaleX:0.0668,scaleY:0.0668,x:93.15,y:-38.45},1).to({scaleX:0.0803,scaleY:0.0803,x:115.75,y:-38.65},1).to({scaleX:0.0753,scaleY:0.0753,x:118.7,y:-40.3},1).to({scaleX:0.045,scaleY:0.045,x:113.45,y:-60.9},7).to({scaleX:0.0031,scaleY:0.0033,x:100.15,y:-115.4},28).wait(1));

	// Layer 25
	this.instance_50 = new lib.shape51("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(238.45,-27.65,0.049,0.049);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(12).to({_off:false},0).to({scaleX:0.0399,scaleY:0.0399,x:240.45,y:-24.55},1).to({scaleX:0.025,scaleY:0.025,x:236.65,y:-14.9},1).to({scaleX:0.0187,scaleY:0.0187,x:261.6,y:-3.95},5).to({_off:true},1).wait(26));

	// Layer 24
	this.instance_51 = new lib.shape51("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(261.55,-73.25,0.0405,0.0405);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(14).to({_off:false},0).to({_off:true},1).wait(31));

	// Layer 23
	this.instance_52 = new lib.shape51("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(271.35,-49.75,0.0747,0.0747);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(13).to({_off:false},0).to({scaleX:0.0711,scaleY:0.0711,x:275.65,y:-77.1},1).to({_off:true},1).wait(31));

	// Layer 22
	this.instance_53 = new lib.shape51("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(276.4,-22.2,0.0941,0.0941);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(12).to({_off:false},0).to({scaleX:0.0903,scaleY:0.0903,x:269.5,y:-77.9},1).to({scaleX:0.0559,scaleY:0.0559,x:235.9,y:-98.55},2).to({scaleX:0.0125,scaleY:0.0125,x:217.35,y:-120.7},15).to({scaleX:0.0028,scaleY:0.0028,x:227.2,y:-140.2},11).to({_off:true},1).wait(4));

	// Layer 21
	this.instance_54 = new lib.shape51("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(95.65,0.95,0.0248,0.0248);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(11).to({_off:false},0).to({scaleX:0.0029,scaleY:0.0029,x:41.15,y:-31.4},23).to({_off:true},1).wait(11));

	// Layer 20
	this.instance_55 = new lib.shape51("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(141.3,-12.75,0.071,0.071);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(10).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.0479,scaleY:0.0479,x:171.95,y:-31.1},0).to({scaleX:0.0057,scaleY:0.0057,x:147.2,y:-109.4},19).to({_off:true},1).wait(14));

	// Layer 19
	this.instance_56 = new lib.shape51("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(-233.5,63.35,0.0509,0.0509);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(4).to({_off:false},0).to({scaleX:0.0445,scaleY:0.0445,x:-233.25,y:63.6},1).to({scaleX:0.038,scaleY:0.038,x:-232.95,y:63.8},1).to({scaleX:0.0187,scaleY:0.0187,x:-232.15,y:64.55},3).to({scaleX:0.004,scaleY:0.004,x:-225.8,y:53.05},5).to({_off:true},1).wait(31));

	// Layer 18
	this.instance_57 = new lib.shape51("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(-155.55,-28.95,0.0893,0.0893);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(2).to({_off:false},0).to({scaleX:0.0636,scaleY:0.0636,x:-180.3,y:-2.1},1).to({scaleX:0.0507,scaleY:0.0507,x:-184.9,y:26},1).to({scaleX:0.0442,scaleY:0.0442,x:-187.9,y:45.35},1).to({scaleX:0.0248,scaleY:0.0248,x:-194.75,y:69.85},3).to({scaleX:0.0029,scaleY:0.0029,x:-201.75,y:111.95},8).to({_off:true},1).wait(29));

	// Layer 17
	this.instance_58 = new lib.shape51("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(-243.1,17.1,0.0226,0.0226);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).to({scaleX:0.011,scaleY:0.011,x:-207.2,y:49.45},4).to({scaleX:0.0024,scaleY:0.0024,x:-34.6,y:41.35},35).to({_off:true},1).wait(6));

	// Layer 16
	this.instance_59 = new lib.shape51("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(-244.05,-57.35,0.0268,0.0268);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(3).to({_off:false},0).to({scaleX:0.0052,scaleY:0.0052,x:-101.2,y:37.5},12).to({_off:true},1).wait(30));

	// Layer 15
	this.instance_60 = new lib.shape51("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(-125,-21.6,0.0794,0.0794);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(4).to({_off:false},0).to({scaleX:0.0565,scaleY:0.0565,x:-128.7,y:23.05},3).to({scaleX:0.0365,scaleY:0.0365,x:-116.4,y:62.55},5).to({scaleX:0.0196,scaleY:0.0196,x:-102.15,y:100.1},7).to({scaleX:0.0055,scaleY:0.0055,x:-79.25,y:139.15},18).to({_off:true},1).wait(8));

	// Layer 14
	this.instance_61 = new lib.shape51("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(-131.8,-2.9,0.0135,0.0135);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(4).to({_off:false},0).to({scaleX:0.0082,scaleY:0.0082,x:-132.65,y:19.35},2).to({scaleX:0.0055,scaleY:0.0055,x:-128.9,y:28.4},1).to({scaleX:0.0044,scaleY:0.0044,x:-128.35,y:28.65},2).to({scaleX:0.0029,scaleY:0.0029,x:-127.7,y:28.35},3).to({scaleX:0.0023,scaleY:0.0023,x:-127.55,y:28.2},1).to({scaleX:0.0013,scaleY:0.0013,x:-127.1,y:28},2).to({_off:true},1).wait(30));

	// Layer 13
	this.instance_62 = new lib.shape51("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(-156.3,-29.4,0.0538,0.0538);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(3).to({_off:false},0).to({scaleX:0.0384,scaleY:0.0384,x:-141,y:-28.55},2).to({scaleX:0.0275,scaleY:0.0275,x:-114.45,y:-23.05},4).to({scaleX:0.018,scaleY:0.018,x:-80,y:-16.45},6).to({scaleX:0.0128,scaleY:0.0128,x:-50.1,y:-11.6},6).to({scaleX:0.0027,scaleY:0.0027,x:2.4,y:-1.4},17).to({_off:true},1).wait(7));

	// Layer 12
	this.instance_63 = new lib.shape51("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(-218.4,-21.15,0.0558,0.0558);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({scaleX:0.0933,scaleY:0.0933,x:-93.95,y:-83},4).to({scaleX:0.0474,scaleY:0.0474,x:-108.15,y:-64.7},2).to({scaleX:0.0253,scaleY:0.0253,x:-105.95,y:-48.65},3).to({scaleX:0.0029,scaleY:0.0029,x:-95.85,y:-24.5},5).to({_off:true},1).wait(31));

	// Layer 11
	this.instance_64 = new lib.shape51("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(-227.8,-37.25,0.0836,0.0836);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).to({x:-172.8,y:-32.25},2).to({x:-123.8,y:-41.25},1).to({scaleX:0.0439,scaleY:0.0439,x:-114.9,y:-91.5},3).to({scaleX:0.0264,scaleY:0.0264,x:-99.1,y:-94.35},3).to({scaleX:0.0044,scaleY:0.0044,x:-41.35,y:-113.35},11).to({_off:true},1).wait(25));

	// Layer 10
	this.instance_65 = new lib.shape51("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(-76.9,29.3,0.0187,0.0187);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(9).to({_off:false},0).to({scaleX:0.0077,scaleY:0.0077,x:-49.05,y:57.3},12).to({scaleX:0.0058,scaleY:0.0058,x:-38.1,y:61},7).to({scaleX:0.0015,scaleY:0.0015,x:-21.55,y:60.45},17).wait(1));

	// Layer 9
	this.instance_66 = new lib.shape51("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(-34.9,7.35,0.0361,0.0361);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(6).to({_off:false},0).to({scaleX:0.0186,scaleY:0.0186,x:-28.7,y:77.55},2).to({scaleX:0.0045,scaleY:0.0045,x:8.2,y:144.9},9).to({_off:true},1).wait(28));

	// Layer 8
	this.instance_67 = new lib.shape51("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(-186,-21.8,0.0275,0.0275);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(2).to({_off:false},0).to({scaleX:0.0628,scaleY:0.0628,guide:{path:[-185.9,-21.7,-178.6,-24,-171.4,-27,-164.2,-30.1,-157,-32.9,-149.8,-35.7,-142.4,-37.8,-135.1,-40,-127.4,-40.7,-127.4,-40.7,-127.4,-40.7]}},1).to({scaleX:0.0737,scaleY:0.0737,guide:{path:[-127.4,-40.7,-106.6,-42.5,-97.7,-41.4,-88.9,-40.4,-91.9,-36.4,-94.4,-33,-97.8,-29.8,-97.8,-29.8,-97.8,-29.8]}},1).to({scaleX:0.0998,scaleY:0.0998,guide:{path:[-97.8,-29.7,-102.4,-25.5,-108.6,-21.5,-114,-18,-115.3,-16.2,-116.6,-14.4,-113.7,-14.4,-107.9,-14.4,-43.1,-33.9,-43.1,-33.9,-43.1,-33.9]}},1).to({scaleX:0.0955,scaleY:0.0955,guide:{path:[-43,-33.8,-32.7,-36.9,-30,-43.2,-28.6,-46.6,-27.9,-50.1,-27.9,-50.1,-27.9,-50.1]}},1).to({scaleX:0.0737,scaleY:0.0737,guide:{path:[-28,-50.1,-27.3,-53.7,-27.3,-57.3,-27.3,-64.8,-27.4,-72.6,-27.4,-80.3,-22.7,-86.2,-22.7,-86.2,-22.7,-86.2]}},2).to({scaleX:0.0671,scaleY:0.0671,guide:{path:[-22.7,-86.1,-21.5,-87.6,-18.9,-87.5,-16.4,-87.3,-12.6,-85.4]}},1).to({scaleX:0.0407,scaleY:0.0407,guide:{path:[-12.7,-85.4,-12.7,-85.4,-12.6,-85.4,-11.2,-84.6,-9.7,-83.8,0.2,-77.8,11.7,-68.7,23.3,-59.5,33.6,-50.3,34.1,-49.8,34.6,-49.3,34.6,-49.3,34.6,-49.3]}},6).to({scaleX:0.0319,scaleY:0.0319,guide:{path:[34.8,-49.3,44.1,-40.9,47.5,-38,59.5,-27.3,71.3,-16.3,72,-15.6,72.7,-15]}},6).to({scaleX:0.0011,scaleY:0.0011,guide:{path:[72.7,-14.9,72.7,-14.9,72.7,-14.9,83.6,-4.5,94.5,6.1,106,17.4,117.3,28.8,128.6,40.3,139.8,52]}},15).to({_off:true},1).wait(9));

	// Layer 7
	this.instance_68 = new lib.shape51("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(-20.35,-23.9,0.0376,0.0376);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(6).to({_off:false},0).to({scaleX:0.0331,scaleY:0.0331,x:-18.85,y:-45.6},2).to({scaleX:0.0286,scaleY:0.0286,x:-17.8,y:-45.3},1).to({scaleX:0.0088,scaleY:0.0088,x:-4.5,y:-20.65},18).to({scaleX:0.0017,scaleY:0.0017,x:-6.5,y:1.65},18).wait(1));

	// Layer 6
	this.instance_69 = new lib.shape51("synched",0);
	this.instance_69.parent = this;
	this.instance_69.setTransform(-8.25,-1.6,0.0451,0.0451);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(6).to({_off:false},0).to({scaleX:0.0343,scaleY:0.0343,x:-1.25,y:54.35},3).to({scaleX:0.0145,scaleY:0.0145,x:27.2,y:57.95},11).to({scaleX:0.002,scaleY:0.002,x:66.3,y:18.6},23).to({_off:true},1).wait(2));

	// Layer 5
	this.instance_70 = new lib.shape51("synched",0);
	this.instance_70.parent = this;
	this.instance_70.setTransform(30,-13.25,0.0297,0.0297);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(7).to({_off:false},0).to({scaleX:0.0253,scaleY:0.0253,x:30.55,y:38.55},2).to({x:30.05,y:47.05},1).to({scaleX:0.0024,scaleY:0.0024,x:27,y:-117.05},26).to({_off:true},1).wait(9));

	// Layer 4
	this.instance_71 = new lib.shape51("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(33.1,-16,0.0371,0.0371);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(7).to({_off:false},0).to({scaleX:0.0812,scaleY:0.0812,x:69.65,y:-29.15},1).to({scaleX:0.0597,scaleY:0.0597,x:56.65,y:-43.5},2).to({scaleX:0.0242,scaleY:0.0242,x:32.35,y:-58.2},10).to({x:30.35,y:-63.7},2).to({scaleX:0.0154,scaleY:0.0154,x:23.45,y:-68.1},3).to({x:19.45,y:-78.1},4).to({scaleX:0.0055,scaleY:0.0055,x:12.2,y:-87.85},6).to({_off:true},1).wait(10));

	// Layer 3
	this.instance_72 = new lib.shape51("synched",0);
	this.instance_72.parent = this;
	this.instance_72.setTransform(31.3,-14.55,0.0335,0.0335);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(7).to({_off:false},0).to({scaleX:0.0247,scaleY:0.0247,x:64.5,y:-7.9},1).to({scaleX:0.0176,scaleY:0.0176,x:71.1,y:0.75},1).to({scaleX:0.0143,scaleY:0.0143,x:72.1,y:9.95},1).to({scaleX:0.011,scaleY:0.011,x:79.1,y:13.95},1).to({scaleX:0.0011,scaleY:0.0011,x:128.8,y:-48.5},16).to({_off:true},1).wait(18));

	// Layer 2
	this.instance_73 = new lib.shape51("synched",0);
	this.instance_73.parent = this;
	this.instance_73.setTransform(83.8,-70.65,0.0649,0.0649);
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(9).to({_off:false},0).to({scaleX:0.0526,scaleY:0.0526,x:85.35,y:-91.6},1).to({scaleX:0.0457,scaleY:0.0457,x:89.85,y:-96},1).to({scaleX:0.0175,scaleY:0.0175,x:129.6,y:-76.85},9).to({scaleX:0.0027,scaleY:0.0027,x:165.7,y:-60.4},11).to({_off:true},1).wait(14));

	// Layer 1
	this.instance_74 = new lib.shape51("synched",0);
	this.instance_74.parent = this;
	this.instance_74.setTransform(142.5,-36.35,0.0959,0.0959);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(9).to({_off:false},0).to({scaleX:0.0423,scaleY:0.0423,x:172.25,y:0.05},1).to({scaleX:0.052,scaleY:0.052,x:230.55,y:-19.85},1).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.3,-158.1,542.7,305.9);


(lib.Symbol14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol8copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55,57.5,0.2,0.2,0,0,0,55,57.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2658,scaleY:0.2658,x:54.95,alpha:0.0687},0).wait(1).to({scaleX:0.3299,scaleY:0.3299,x:55,y:57.45,alpha:0.1356},0).wait(1).to({scaleX:0.3923,scaleY:0.3923,alpha:0.2007},0).wait(1).to({scaleX:0.453,scaleY:0.453,x:54.95,alpha:0.264},0).wait(1).to({scaleX:0.512,scaleY:0.512,x:55,y:57.5,alpha:0.3256},0).wait(1).to({scaleX:0.5692,scaleY:0.5692,alpha:0.3854},0).wait(1).to({scaleX:0.6248,scaleY:0.6248,y:57.45,alpha:0.4434},0).wait(1).to({scaleX:0.6786,scaleY:0.6786,x:54.95,alpha:0.4996},0).wait(1).to({scaleX:0.7307,scaleY:0.7307,x:55,alpha:0.554},0).wait(1).to({scaleX:0.7812,scaleY:0.7812,alpha:0.6066},0).wait(1).to({scaleX:0.8299,scaleY:0.8299,alpha:0.6574},0).wait(1).to({scaleX:0.8769,scaleY:0.8769,x:55.05,alpha:0.7065},0).wait(1).to({scaleX:0.9222,scaleY:0.9222,x:55,y:57.5,alpha:0.7538},0).wait(1).to({scaleX:0.9658,scaleY:0.9658,alpha:0.7993},0).wait(1).to({scaleX:1.0077,scaleY:1.0077,x:55.05,alpha:0.843},0).wait(1).to({scaleX:1.0478,scaleY:1.0478,x:55.1,alpha:0.8849},0).wait(1).to({scaleX:1.0863,scaleY:1.0863,x:55.05,alpha:0.9251},0).wait(1).to({scaleX:1.123,scaleY:1.123,alpha:0.9634},0).wait(1).to({scaleX:1.1581,scaleY:1.1581,y:57.55,alpha:1},0).wait(1).to({scaleX:1.1914,scaleY:1.1914,x:55.1,y:58.95,alpha:0.9025},0).wait(1).to({scaleX:1.223,scaleY:1.223,x:55.05,y:60.2,alpha:0.81},0).wait(1).to({scaleX:1.253,scaleY:1.253,y:61.45,alpha:0.7225},0).wait(1).to({scaleX:1.2812,scaleY:1.2812,y:62.6,alpha:0.64},0).wait(1).to({scaleX:1.3077,scaleY:1.3077,y:63.7,alpha:0.5625},0).wait(1).to({scaleX:1.3325,scaleY:1.3325,y:64.7,alpha:0.49},0).wait(1).to({scaleX:1.3555,scaleY:1.3555,y:65.7,alpha:0.4225},0).wait(1).to({scaleX:1.3769,scaleY:1.3769,y:66.5,alpha:0.36},0).wait(1).to({scaleX:1.3966,scaleY:1.3966,y:67.35,alpha:0.3025},0).wait(1).to({scaleX:1.4145,scaleY:1.4145,y:68.1,alpha:0.25},0).wait(1).to({scaleX:1.4308,scaleY:1.4308,y:68.75,alpha:0.2025},0).wait(1).to({scaleX:1.4453,scaleY:1.4453,y:69.35,alpha:0.16},0).wait(1).to({scaleX:1.4581,scaleY:1.4581,y:69.9,alpha:0.1225},0).wait(1).to({scaleX:1.4692,scaleY:1.4692,x:55,y:70.35,alpha:0.09},0).wait(1).to({scaleX:1.4786,scaleY:1.4786,y:70.7,alpha:0.0625},0).wait(1).to({scaleX:1.4863,scaleY:1.4863,x:55.05,y:71,alpha:0.04},0).wait(1).to({scaleX:1.4923,scaleY:1.4923,y:71.3,alpha:0.0225},0).wait(1).to({scaleX:1.4966,scaleY:1.4966,x:55,y:71.45,alpha:0.01},0).wait(1).to({scaleX:1.4991,scaleY:1.4991,y:71.55,alpha:0.0025},0).wait(1).to({scaleX:1.5,scaleY:1.5,y:71.5,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-14.7,165,172.5);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(87.5,78.5,0.2,0.2,0,0,0,87.5,78.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2484,scaleY:0.2484,y:78.45,alpha:0.0597},0).wait(1).to({scaleX:0.2962,scaleY:0.2962,x:87.45,alpha:0.1187},0).wait(1).to({scaleX:0.3434,scaleY:0.3434,x:87.5,alpha:0.1769},0).wait(1).to({scaleX:0.3899,scaleY:0.3899,x:87.45,alpha:0.2343},0).wait(1).to({scaleX:0.4358,scaleY:0.4358,x:87.5,alpha:0.2908},0).wait(1).to({scaleX:0.481,scaleY:0.481,alpha:0.3466},0).wait(1).to({scaleX:0.5256,scaleY:0.5256,alpha:0.4016},0).wait(1).to({scaleX:0.5695,scaleY:0.5695,alpha:0.4559},0).wait(1).to({scaleX:0.6129,scaleY:0.6129,x:87.45,alpha:0.5093},0).wait(1).to({scaleX:0.6555,scaleY:0.6555,x:87.5,alpha:0.5619},0).wait(1).to({scaleX:0.6976,scaleY:0.6976,alpha:0.6137},0).wait(1).to({scaleX:0.7389,scaleY:0.7389,alpha:0.6648},0).wait(1).to({scaleX:0.7797,scaleY:0.7797,alpha:0.7151},0).wait(1).to({scaleX:0.8198,scaleY:0.8198,alpha:0.7645},0).wait(1).to({scaleX:0.8592,scaleY:0.8592,alpha:0.8132},0).wait(1).to({scaleX:0.8981,scaleY:0.8981,alpha:0.8611},0).wait(1).to({scaleX:0.9362,scaleY:0.9362,alpha:0.9082},0).wait(1).to({scaleX:0.9738,scaleY:0.9738,alpha:0.9545},0).wait(1).to({scaleX:1.0107,scaleY:1.0107,x:87.6,y:78.55,alpha:1},0).wait(1).to({scaleX:1.0281,scaleY:1.0281,y:79.9,alpha:0.9399},0).wait(1).to({scaleX:1.0451,scaleY:1.0451,y:81.2,alpha:0.8809},0).wait(1).to({scaleX:1.0619,scaleY:1.0619,y:82.45,alpha:0.8229},0).wait(1).to({scaleX:1.0784,scaleY:1.0784,y:83.7,alpha:0.766},0).wait(1).to({scaleX:1.0945,scaleY:1.0945,y:84.95,alpha:0.7101},0).wait(1).to({scaleX:1.1104,scaleY:1.1104,y:86.15,alpha:0.6554},0).wait(1).to({scaleX:1.1259,scaleY:1.1259,y:87.35,alpha:0.6016},0).wait(1).to({scaleX:1.1412,scaleY:1.1412,y:88.5,alpha:0.549},0).wait(1).to({scaleX:1.1561,scaleY:1.1561,y:89.65,alpha:0.4974},0).wait(1).to({scaleX:1.1707,scaleY:1.1707,y:90.75,alpha:0.4469},0).wait(1).to({scaleX:1.185,scaleY:1.185,y:91.8,alpha:0.3974},0).wait(1).to({scaleX:1.199,scaleY:1.199,y:92.9,alpha:0.349},0).wait(1).to({scaleX:1.2127,scaleY:1.2127,y:93.95,alpha:0.3016},0).wait(1).to({scaleX:1.2261,scaleY:1.2261,y:94.95,alpha:0.2554},0).wait(1).to({scaleX:1.2392,scaleY:1.2392,y:96,alpha:0.2101},0).wait(1).to({scaleX:1.252,scaleY:1.252,y:96.95,alpha:0.166},0).wait(1).to({scaleX:1.2644,scaleY:1.2644,y:97.85,alpha:0.1229},0).wait(1).to({scaleX:1.2766,scaleY:1.2766,y:98.8,alpha:0.0809},0).wait(1).to({scaleX:1.2884,scaleY:1.2884,y:99.7,alpha:0.0399},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:87.5,y:100.5,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-1.5,227.5,204.1);


(lib.Symbol12copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol7copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(208.5,205,0.2,0.2,0,0,0,208.5,205);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2265,scaleY:0.2265,alpha:0.0589},0).wait(1).to({scaleX:0.2527,scaleY:0.2527,alpha:0.1172},0).wait(1).to({scaleX:0.2786,scaleY:0.2786,alpha:0.1747},0).wait(1).to({scaleX:0.3041,scaleY:0.3041,x:208.45,alpha:0.2316},0).wait(1).to({scaleX:0.3294,scaleY:0.3294,y:204.95,alpha:0.2877},0).wait(1).to({scaleX:0.3543,scaleY:0.3543,y:205,alpha:0.3432},0).wait(1).to({scaleX:0.3789,scaleY:0.3789,alpha:0.3979},0).wait(1).to({scaleX:0.4032,scaleY:0.4032,alpha:0.4519},0).wait(1).to({scaleX:0.4272,scaleY:0.4272,alpha:0.5053},0).wait(1).to({scaleX:0.4509,scaleY:0.4509,alpha:0.5579},0).wait(1).to({scaleX:0.4742,scaleY:0.4742,alpha:0.6098},0).wait(1).to({scaleX:0.4973,scaleY:0.4973,x:208.5,alpha:0.6611},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:208.45,alpha:0.7116},0).wait(1).to({scaleX:0.5424,scaleY:0.5424,x:208.5,alpha:0.7614},0).wait(1).to({scaleX:0.5645,scaleY:0.5645,x:208.45,alpha:0.8105},0).wait(1).to({scaleX:0.5862,scaleY:0.5862,x:208.5,y:205.05,alpha:0.8589},0).wait(1).to({scaleX:0.6077,scaleY:0.6077,x:208.45,alpha:0.9067},0).wait(1).to({scaleX:0.6288,scaleY:0.6288,y:205,alpha:0.9537},0).wait(1).to({regX:208.6,regY:205.1,scaleX:0.6497,scaleY:0.6497,x:208.5,y:205.05,alpha:1},0).wait(1).to({regX:208.5,regY:205,scaleX:0.6702,scaleY:0.6702,x:208.45,y:204.95,alpha:0.9414},0).wait(1).to({scaleX:0.6904,scaleY:0.6904,alpha:0.8838},0).wait(1).to({scaleX:0.7103,scaleY:0.7103,alpha:0.827},0).wait(1).to({scaleX:0.7298,scaleY:0.7298,x:208.4,y:204.9,alpha:0.7712},0).wait(1).to({scaleX:0.7491,scaleY:0.7491,x:208.45,alpha:0.7162},0).wait(1).to({scaleX:0.768,scaleY:0.768,y:204.95,alpha:0.6622},0).wait(1).to({scaleX:0.7866,scaleY:0.7866,x:208.4,y:204.9,alpha:0.609},0).wait(1).to({scaleX:0.805,scaleY:0.805,x:208.45,alpha:0.5568},0).wait(1).to({scaleX:0.8229,scaleY:0.8229,alpha:0.5054},0).wait(1).to({scaleX:0.8406,scaleY:0.8406,x:208.4,alpha:0.455},0).wait(1).to({scaleX:0.858,scaleY:0.858,x:208.45,alpha:0.4054},0).wait(1).to({scaleX:0.875,scaleY:0.875,y:204.95,alpha:0.3568},0).wait(1).to({scaleX:0.8917,scaleY:0.8917,y:204.9,alpha:0.309},0).wait(1).to({scaleX:0.9082,scaleY:0.9082,y:204.85,alpha:0.2622},0).wait(1).to({scaleX:0.9243,scaleY:0.9243,x:208.4,alpha:0.2162},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:208.45,y:204.9,alpha:0.1712},0).wait(1).to({scaleX:0.9555,scaleY:0.9555,x:208.4,alpha:0.127},0).wait(1).to({scaleX:0.9706,scaleY:0.9706,x:208.45,alpha:0.0838},0).wait(1).to({scaleX:0.9855,scaleY:0.9855,x:208.4,y:204.85,alpha:0.0414},0).wait(1).to({scaleX:1,scaleY:1,x:208.5,y:205,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,417,410);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol9copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(131.75,138.1,0.3656,0.3656,0,0,0,91.7,96);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:91.5,scaleX:0.4017,scaleY:0.4017,x:131.6,y:138.05,alpha:0.0622},0).wait(1).to({scaleX:0.4374,scaleY:0.4374,y:138.1,alpha:0.1236},0).wait(1).to({scaleX:0.4726,scaleY:0.4726,y:138.05,alpha:0.1843},0).wait(1).to({scaleX:0.5074,scaleY:0.5074,x:131.55,y:138.1,alpha:0.2441},0).wait(1).to({scaleX:0.5417,scaleY:0.5417,alpha:0.3032},0).wait(1).to({scaleX:0.5755,scaleY:0.5755,alpha:0.3615},0).wait(1).to({scaleX:0.6089,scaleY:0.6089,alpha:0.419},0).wait(1).to({scaleX:0.6419,scaleY:0.6419,alpha:0.4757},0).wait(1).to({scaleX:0.6744,scaleY:0.6744,alpha:0.5317},0).wait(1).to({scaleX:0.7064,scaleY:0.7064,alpha:0.5868},0).wait(1).to({scaleX:0.738,scaleY:0.738,alpha:0.6412},0).wait(1).to({scaleX:0.7691,scaleY:0.7691,x:131.5,alpha:0.6948},0).wait(1).to({scaleX:0.7998,scaleY:0.7998,x:131.55,y:138.15,alpha:0.7476},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:131.5,alpha:0.7997},0).wait(1).to({scaleX:0.8598,scaleY:0.8598,x:131.45,alpha:0.8509},0).wait(1).to({scaleX:0.8891,scaleY:0.8891,x:131.5,y:138.1,alpha:0.9014},0).wait(1).to({scaleX:0.918,scaleY:0.918,alpha:0.9511},0).wait(1).to({regX:91.7,scaleX:0.9464,scaleY:0.9464,x:131.7,alpha:1},0).wait(1).to({regX:91.5,scaleX:0.9743,scaleY:0.9743,x:131.45,alpha:0.9431},0).wait(1).to({scaleX:1.0018,scaleY:1.0018,y:138.05,alpha:0.8872},0).wait(1).to({scaleX:1.0289,scaleY:1.0289,alpha:0.8322},0).wait(1).to({scaleX:1.0555,scaleY:1.0555,alpha:0.7781},0).wait(1).to({scaleX:1.0816,scaleY:1.0816,y:138.1,alpha:0.725},0).wait(1).to({scaleX:1.1073,scaleY:1.1073,y:138.05,alpha:0.6727},0).wait(1).to({scaleX:1.1325,scaleY:1.1325,x:131.4,alpha:0.6214},0).wait(1).to({scaleX:1.1573,scaleY:1.1573,x:131.45,alpha:0.571},0).wait(1).to({scaleX:1.1816,scaleY:1.1816,x:131.4,alpha:0.5215},0).wait(1).to({scaleX:1.2055,scaleY:1.2055,x:131.45,y:138,alpha:0.473},0).wait(1).to({scaleX:1.2289,scaleY:1.2289,alpha:0.4254},0).wait(1).to({scaleX:1.2518,scaleY:1.2518,y:138.05,alpha:0.3787},0).wait(1).to({scaleX:1.2743,scaleY:1.2743,alpha:0.3329},0).wait(1).to({scaleX:1.2964,scaleY:1.2964,x:131.4,alpha:0.2881},0).wait(1).to({scaleX:1.318,scaleY:1.318,x:131.45,alpha:0.2441},0).wait(1).to({scaleX:1.3391,scaleY:1.3391,alpha:0.2011},0).wait(1).to({scaleX:1.3598,scaleY:1.3598,x:131.4,alpha:0.1591},0).wait(1).to({scaleX:1.38,scaleY:1.38,alpha:0.1179},0).wait(1).to({scaleX:1.3998,scaleY:1.3998,x:131.45,alpha:0.0777},0).wait(1).to({scaleX:1.4191,scaleY:1.4191,x:131.4,alpha:0.0384},0).wait(1).to({scaleX:1.438,scaleY:1.438,x:131.6,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.2,276.1);


(lib.Symbol10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 9
	this.instance = new lib.Symbol11copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(255.55,325.1,1,1,0,0,0,131.6,138.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(40));

	// Symbol 8
	this.instance_1 = new lib.Symbol14copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(807,138.5,1,1,0,0,0,55,57.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({_off:true},40).wait(6));

	// Symbol 7
	this.instance_2 = new lib.Symbol12copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(533.45,129.95,1,1,0,0,0,208.5,205);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({_off:true},40).wait(10));

	// Symbol 6
	this.instance_3 = new lib.Symbol13copy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(735.4,361.4,1,1,0,0,0,87.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},40).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124,-75,765.5,560.5);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2copy();
	this.instance.parent = this;
	this.instance.setTransform(-10.2,3.3,1,1,89.9948,0,0,3.3,10.2);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:89.9974,x:19.4,y:3.35,alpha:0.7695},9).to({rotation:89.9948,x:121.75,y:3.3,alpha:0},31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,1.2,148.20000000000002,4.2);


(lib.sprite39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape38("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite39, new cjs.Rectangle(-15.5,-15.5,31,31), null);


(lib.shape15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.sprite39();
	this.instance.parent = this;
	this.instance.setTransform(0.65,0.6,0.027,0.9203,135,0,0,1.3,-0.1);

	this.instance_1 = new lib.sprite39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,0.65,0.027,0.9203,45,0,0,3.9,0.1);

	this.instance_2 = new lib.sprite39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.75,0.65,0.047,1.5977,90,0,0,2.1,-0.1);

	this.instance_3 = new lib.sprite39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.65,0.7,0.047,1.5977,0,0,0,1.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF5A6","rgba(255,255,255,0.8)","rgba(255,245,166,0.188)","rgba(255,245,166,0)"],[0,0,0.549,1],0,0,0,0,0,6.8).s().p("AguAwQgUgUAAgcQAAgaAUgVQATgTAbAAQAbAAAUATQAUAVAAAaQAAAcgUAUQgUATgbAAQgbAAgTgTg");
	this.shape.setTransform(0.75,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-24.2,49.5,49.5);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.85,20.45,1,1,-99.999,0,0,-19.2,3.6);

	this.instance_1 = new lib.Symbol3copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.85,20.45,1,1,-80.0001,0,0,-19.2,3.7);

	this.instance_2 = new lib.Symbol3copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.85,20.55,1,1,-60.0001,0,0,-19.2,3.7);

	this.instance_3 = new lib.Symbol3copy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(5.8,20.45,1,1,-40.0005,0,0,-19.2,3.6);

	this.instance_4 = new lib.Symbol3copy("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.85,20.5,1,1,-20.0002,0,0,-19.2,3.7);

	this.instance_5 = new lib.Symbol3copy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.85,20.5,1,1,79.9998,0,0,-19.2,3.7);

	this.instance_6 = new lib.Symbol3copy("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(5.85,20.5,1,1,60.0001,0,0,-19.2,3.7);

	this.instance_7 = new lib.Symbol3copy("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(5.9,20.5,1,1,40.0005,0,0,-19.2,3.6);

	this.instance_8 = new lib.Symbol3copy("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(5.9,20.55,1,1,19.9997,0,0,-19.2,3.7);

	this.instance_9 = new lib.Symbol3copy("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(5.9,20.45,1,1,0,0,0,-19.2,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-119.9,169.1,280.70000000000005);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer_2 copy 13
	this.instance = new lib.Symbol4copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(190.1,162.8,1,1,180,0,0,11.5,18.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(40));

	// Layer_2 copy 14
	this.instance_1 = new lib.Symbol4copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(201.7,159.2,1,1,0,0,0,11.5,18.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(40));

	// Layer_2 copy 11
	this.instance_2 = new lib.Symbol4copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(190.1,162.8,1,1,180,0,0,11.5,18.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(48));

	// Layer_2 copy 12
	this.instance_3 = new lib.Symbol4copy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(201.7,159.2,1,1,0,0,0,11.5,18.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(48));

	// Layer_2 copy 10
	this.instance_4 = new lib.Symbol4copy("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.1,162.8,1,1,180,0,0,11.5,18.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(57));

	// Layer_2 copy 9
	this.instance_5 = new lib.Symbol4copy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(201.7,159.2,1,1,0,0,0,11.5,18.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(57));

	// Layer_2
	this.instance_6 = new lib.Symbol10copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(683.2,388,1,1,0,0,0,690,294);
	this.instance_6.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-79,794.3000000000001,550.1);


(lib.sprite16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.shape15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.95,5.95);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.1719},5).wait(1).to({alpha:0},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.2,49.5,49.5);


(lib.Start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_57 = function() {
		///* stop ();
		//*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(1));

	// Layer 49 copy
	this.instance = new lib.sprite16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.95,-25.65,0.7,0.7,179.734);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({_off:true},25).wait(15));

	// Layer 37 copy
	this.instance_1 = new lib.sprite16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.25,-30.6,0.8985,0.8985,132.8404,0,0,0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},25).wait(30));

	// Layer 25 copy
	this.instance_2 = new lib.sprite16("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35,-58.9,0.8985,0.8985,132.8404,0,0,-0.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({_off:true},29).wait(16));

	// Layer 25
	this.instance_3 = new lib.sprite16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(129.6,-42.4,0.8985,0.8985,132.8404,0,0,-0.1,0);

	this.instance_4 = new lib.sprite16("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(117.1,-54.9,0.8985,0.8985,132.8404,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},9).to({state:[]},25).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-74.7,270.8,74.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_204 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(204).call(this.frame_204).wait(1));

	// Layer_4
	this.instance = new lib.Start();
	this.instance.parent = this;
	this.instance.setTransform(241.75,356.45,1.5,1.7227,0,0,0,0.4,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(193));

	// mì (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_30 = new cjs.Graphics().p("Al4HjIAAtHIA5AAQAIAAAhAPQAhAPA7AAIFoAEQEjACAWgGQASgFAPgLQAWgIBJACIAAM5QgLADgOACQgbADgQgIIgtgbQgfgRgSAAIkxgDQkdgDgTAGIhTAdQg/AUgRABgA+9GYIhQrjQgNgFgMgKQgZgUAAgZQASghBngaQBkgZB+gGQCIgGBlAUQB0AXAmA1IAAAOQgBAGgEAFIAxAAQAIAAAhAPQAhAPA7AAIFpAEQEjACAWgGQASgFAPgLQAWgIBJACIAAM5QgLADgOACQgbADgQgIIgtgbQgfgRgSAAIkxgDQkegDgTAGIhTAdQg/AUgRABIg5AAIAAs9QgIAJgNAIQgEApgUFJQgUFQAAAVQAAANgxAYQg4AbhGAOQg6ALg2AAQiFAAhuhFgAJ6HWIgDgaQgCgdAFgMQAHgIAFgMQALgXAHg4QAViqgNnMQgGgZgWgbIAAhSIWyAAIAABRIgPAZQgPAjAAArIACDwQACD5AGAyQADAYAQBVQALA8AAAmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_graphics_30,x:333.251,y:276.7558}).wait(175));

	// Layer_13
	this.instance_1 = new lib.Symbol35("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.35,267.4,1,1,21.7251,0,0,33.5,114.5);
	this.instance_1.alpha = 0.8008;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:624.3},49,cjs.Ease.get(1)).wait(39).to({x:59.35},0).to({x:624.3},49,cjs.Ease.get(1)).wait(38));

	// Layer_8
	this.instance_2 = new lib.Symbol31("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(335.7,272.5,1,1,0,0,0,218.7,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(205));

	// talent
	this.instance_3 = new lib.Symbol12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(372.1,152.2,1,1,0,0,0,86.1,135.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(205));

	// hoa
	this.instance_4 = new lib.Symbol36("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.2,258.6,1,1,0,0,0,38.2,36.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(196));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_71 = new cjs.Graphics().p("AxqGBQgLgDgJgIIAAAAIgDgDIgCAEQgEAKgKgBIAAAAIgwAAQgJAAgBgJIAAAAQgBgUACgHIAAAAQACgGAEgCIAAAAIAEgDQgFgBgKAAIAAAAQgKAAgFABIAAAAIAAACQAGAFgBAIIAAAAIAAAOIgCAKIAAAAQgCAIgJAAIAAAAIgIgBIAAAAQgLgBgUABIAAAAQgNABgMgBIAAAAQgZgBgMABIAAAAIgJABIAAAAQgJAAgBgJIAAAAQAAgWACgFIAAAAQACgJAHgBIAAAAQAHAAACgJIAAAAIABgFQgCgBgNAAIAAAAIgQAAIgPABIAAAAQgCACgBALIAAAAQAMADgBAOIAAAAIAAAKIgBAFQgBAIgDAEIAAAAQgEAEgJgBIAAAAQgWgCgVACIAAAAIgFAAQgKAAgBgJIAAAAQgBgSACgJIAAAAQADgIAHgCIAAAAQAHAAACgIIAAAAIAOhMIAAgEQgGgEgFADIAAAAIgEAAQgJABgDAIIAAAAIgUBwQAAAHgDACIAAAAQgDADgGAAIAAAAIgPABQgHAAgDgCIAAAAQgCgDgDgGIAAAAIgghZQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAAAAIgIAxIAAADIAIABQAIACAAAIIAAAAIAAAVIgBACQgCAOgNgBIAAAAIgHgBQgQgBgRABIAAAAIgLABQgHgBAAgGIAAAAIAAgeQAAgGAHgCIAAAAIAFgBQAHgBAEgHIAAAAIACgHIAMhCIAAgHIgGgBQgKgBAAgKIAAAAIAAgTIABgFQACgLANAAIAAAAQAbACARgCIAAAAQALgBAFALIAAAAIAYBDQADgDABgHIAAAAIADgTQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAIAAAAIgEAAIAAAAQgIgCgBgHIAAAAQAAgWABgEIAAAAQADgLAMAAIAAAAQAYADAYgDIAAAAQADAAAHACIAAAAIAKgCIAAAAQAYADAYgDIAAAAQAFgBAEAEIAAAAQADADAAACIAAAAQABASgCAJIAAAAQgBAKgKABIAAAAQgEAAgCAFIAAAAQgEALAAAHIAAAAQAEABASAAIAAAAQARABAHgBIAAAAQACgEABgHIAAAAIACgMIAAAAIgFgCQgGgDAAgFIAAAAQgBgSACgIIAAAAQADgLAMAAIAAAAQAXADAYgDIAAAA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EgRIAAAAIAPhUIABgHIgLgEIgNADQgJAAgFAKIAAAAIgDAJQgHAhgHAoIAAAAIgIA7IgCAGQgBAFgFABIAAAAIgJACIAAAAIgQAAQgMAAgDgLIAAAAIgohvQgCgGgCgCIAAAAIgBABIgNBLIAAAEQADACAGABIAAAAQAMABAAALIAAAAIAAAPIgCAMQgCAJgLAAIAAAAIgDAAQgdgDgdADIAAAAQgLABgEgIIAAAAIgDACQgEAGgJgBIAAAAQgZgCghACIAAAAIgGAAQgIgCAAgHIAAAAQgBgTACgKIAAAAQADgJAIgBIAAAAQAIAAACgHIAAAAIAEgMIAAAAIARhgIAAgCIgFgCQgIgCAAgHIAAAAQgCgSADgMIAAAAQADgJAKAAIAAAAIAXABQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIAAAAIgWgLIgKgGIAAAAQgLgIAAgNIAAAAIABgSQgBgMAKgIIAAAAQAKgHALAEIAAAAQAHACAEADIAAAAQAJAHADAFIAAAAIAfAlQAGAIgBAIIAAAAIAAAKIAJAIIABAAIAAAAQAEgGALAAIAAAAIA3AAQAMgBAEAMIAAAAIAgBXIACADQADgIADgSIAAAAQADgSAAgHIAAAAIgMgCQgJgCAAgHIAAAAQAAgWACgFIAAAAQADgMALAAIAAAAQAfADAfgDIAAAAQAEAAAHADIAAAAQAEgDAKAAIAAAAQAWACAhgCIAAAAIAGAAQAKAAAAAJIAAAAQABATgCAKIAAAAQgCAKgJAAIAAAAQgIABgDAJIAAAAQgDAJgDATIAAAAIAEABIAAAAIA4AAIADgBQACgHACgMIAAAAQACgMAAgGIAAAAIgGgBQgHgDAAgFIAAAAQgBgVACgIIAAAAQADgLALAAIAAAAQAfADAfgDIAAAAQAHgBADAFIAAAAQADACAAAEIAAAAQAAAWgCAGIAAAAQgCAKgIAAIAAAAQgJABgCAJIAAAAQgEALgBAIIAAAAIgPBUIAAAFIAFABQAIADAAAGIAAAAIAAAYIgCAHIAAAAQgCAHgJABIAAAAIgFAAQgYgCghACIAAAAIgCAAQgNABAAgNIAAAAQAAgTACgHIAAAAQABgJAJgBIAAAAIACAAQAGAAADgHIAAAAQADgJABgKIAAAAQgPgDgrACIAAAAIgEABQgFAOABALIAAA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");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_1_graphics_71,x:231.3751,y:97.3197}).wait(134));

	// Layer_13 copy
	this.instance_5 = new lib.Symbol35("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-44.65,95.4,1,1,21.7251,0,0,33.5,114.5);
	this.instance_5.alpha = 0.8008;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({x:520.3},49,cjs.Ease.get(1)).wait(33).to({x:-44.65},0).to({x:520.3},49,cjs.Ease.get(1)).wait(3));

	// text
	this.instance_6 = new lib.Symbol27("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(264.5,74.3,1,1,0,0,0,130.5,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(205));

	// Layer_6
	this.instance_7 = new lib.Symbol38("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(144.5,29.7,0.42,0.42,0,0,0,319.9,179.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(195));

	// Layer_16
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(205));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-37.2,878.6,397.2);


// stage content:
(lib._640x320 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function getParamURL(name) {
			return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
		}
		var id = getParamURL('id');
		
		
		window.parent.postMessage(id + ':iframeLoaded', "*");
		
		var _root = this;
		
		_root.btnClose.addEventListener('click', closeBanner.bind(this));
		function closeBanner() {
			console.log("close");
			window.parent.postMessage(id + ':close', "*");
		}
		
		
		this.clickTAG_btn.addEventListener("click", cclickTAGFunc.bind(this));
		function cclickTAGFunc() {
			window.parent.postMessage(id + ':click', "*");
		
		}
		this.btnBlueseed.addEventListener("click", btnBlueseedFunc.bind(this));
		function btnBlueseedFunc() {
			window.open("https://blueseed.tv", "blank");
		
		}
		
		window.addEventListener('message', function (e) {
			var data = e.data || "";
		
			if (id + ':playAds' === data) {
		
			}
			if (id + ':viewed' === data) {
				window.parent.postMessage(id + ':impression', "*");
		
			}
		}, false);
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.btnBlueseed = new lib.Symbol13();
	this.btnBlueseed.name = "btnBlueseed";
	this.btnBlueseed.parent = this;
	this.btnBlueseed.setTransform(591.5,-23.65,1.8,1.8,0,0,0,10.1,10);
	new cjs.ButtonHelper(this.btnBlueseed, 0, 1, 2, false, new lib.Symbol13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnBlueseed).wait(30));

	// Layer 5
	this.btnClose = new lib.closebutton();
	this.btnClose.name = "btnClose";
	this.btnClose.parent = this;
	this.btnClose.setTransform(621.3,-19.8,0.6,0.597,0,0,0,18.8,20.4);
	new cjs.ButtonHelper(this.btnClose, 0, 1, 2, false, new lib.closebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnClose).wait(30));

	// Layer 2
	this.clickTAG_btn = new lib.Symbol8s();
	this.clickTAG_btn.name = "clickTAG_btn";
	this.clickTAG_btn.parent = this;
	this.clickTAG_btn.setTransform(320.2,160,2.1333,1.2799,0,0,0,150.1,125);
	new cjs.ButtonHelper(this.clickTAG_btn, 0, 1, 2, false, new lib.Symbol8s(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTAG_btn).wait(30));

	// Layer_1
	this.main = new lib.Symbol1();
	this.main.name = "main";
	this.main.parent = this;
	this.main.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,145.5,415.6,214.5);
// library properties:
lib.properties = {
	id: '522E558EC927E348AEB60A4504DC25D3',
	width: 640,
	height: 360,
	fps: 20,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1733816450153", id:"bg"},
		{src:"images/hoa.png?1733816450153", id:"hoa"},
		{src:"images/phao01.png?1733816450153", id:"phao01"},
		{src:"images/phao02.png?1733816450153", id:"phao02"},
		{src:"images/phao03.png?1733816450153", id:"phao03"},
		{src:"images/phao04.png?1733816450153", id:"phao04"},
		{src:"images/sp1.png?1733816450153", id:"sp1"},
		{src:"images/sp2.png?1733816450153", id:"sp2"},
		{src:"images/sp3.png?1733816450153", id:"sp3"},
		{src:"images/t1.png?1733816450153", id:"t1"},
		{src:"images/t2.png?1733816450153", id:"t2"},
		{src:"images/talent.png?1733816450153", id:"talent"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['522E558EC927E348AEB60A4504DC25D3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
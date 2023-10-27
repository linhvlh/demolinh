(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1924,800);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,865,810);


(lib.logomec = function() {
	this.initialize(img.logomec);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,886,102);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACiB1QgPgLAAgSQAAgQAMgKQAHgEALgFQgQgFAAgLQAAgJALgHIAPgHQgcgMgBgcQAAgYASgOQAOgLAVABQALAAALACIArgBIAAAQIgcAAQAMALgBAVQAAAVgNAKQgJAIgYAEQgQAEgFACQgJAEAAAGQAAAFAGACQAFABASABQAVACAHADQAkAIAAAeQAAAVgUANQgRAJgcABQgfAAgSgNgACzBEQgNAHAAAMQAAAMAMAHQAOAGATAAQAYAAAMgJQAHgGABgKQAAgYguAAQgTAAgLAFgAC8gxQgJAIAAAOQAAAOAIAIQAIAHAPAAQANAAAIgHQAJgIAAgOQAAgMgIgJQgIgJgOAAQgNgBgJAJgAhyA/QgOgJgDgSQgBgHAAgPIAAhXIAVAAIAABXQAAAUAEAIQAIALARAAQATABAJgRQAHgJgBgVIAAhQIAVAAIAABiIABAYQAAAKADAKIgVAAQgDgJAAgKQgFAJgFAFQgLAIgQAAQgSAAgMgJgAj/A5QgVgVABgmQgBgnAWgVQAPgOAYAAQAcgBAOAVQAHAMACARIgVAAQgDgNgDgHQgJgLgQAAQgQAAgKAMQgMARAAAbQAAAgARAQQAHAIAPAAQAcAAADgjIAVAAQgCAXgKANQgOARgbAAQgXAAgQgPgABkBFIAAhQQAAgZgEgIQgGgOgTAAQgUAAgKARQgIALAAAUIAABPIgUAAIAAhdIgBgjIgDgOIAVAAQACAJAAAMQAPgYAdAAQATAAALAKQAMAJACASIABAbIAABRgAhMhfIghghIAXAAIAYAhg");
	this.shape.setTransform(66.95,11.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.3,-1,55.3,25.9);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_111 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:125}).wait(111).to({graphics:mask_graphics_111,x:150,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(2903));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.logomec();
	this.instance.setTransform(-1,-33.4,0.126,0.126,-89.9861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:true},1).wait(978));

	// Layer_1
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(-11,36,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:true},1).wait(978));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-145,32,213);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AICBVIAAgLQANgBAHgGQAEgEADgJQADgEAAgEIgghcIAPAAIAZBMIAbhMIANAAIgeBWIgKAZQgKAUgXAAIgFAAgAFVBNQgLgHAAgMQABgKAIgGQAFgEAGgCQgKgEAAgHQAAgGAIgFIAJgDQgSgIAAgSQAAgRAKgHQALgJANAAQAGAAAIADIAbgBIAAALIgSgBQAIAIAAAOQAAANgKAGQgFAGgPACIgPAEQgFACAAAEQAAAEAEABIAPACQAOAAAFACQAVAGAAATQAAAOgLAIQgMAGgRAAQgWAAgKgIgAFfAsQgHAGAAAIQAAAGAHAGQAIAFAOAAQAQAAAFgHQAIgEAAgGQAAgQggAAQgKAAgJACgAFmgfQgHAGAAAKQAAAHAHAFQAEAFAJABQAJgBAFgEQAGgEAAgJQAAgJgEgGQgHgFgJgBQgIABgFAEgAhgBUIAAhnIgBgSIgBgJIAOAAIABAOQAJgRARAAQANAAAJAKQAOAOAAAZQAAAagNAOQgJAIgMAAQgSAAgKgPIAAAzgAhKgdQgJAMAAARQAAARAIALQAGAIAMAAQAJAAAFgGQAIgMAAgSQAAgTgJgLQgEgGgKgBQgMABgEAHgAG2AqQgKgIAAgMQAAgVAVgGIAjgIIAAgEQAAgKgDgEQgFgFgLgBQgRAAgDAPIgPAAQACgMAHgFQAKgKAQAAQAPgBAJAIQAGAFACAMIABANIAAAiQAAAQACAGIgOAAIgCgLQgIAPgTAAQgMAAgHgGgAHGAFQgNAFAAAKQABAIAGAEQAEAFAHAAQAOAAAHgMQAEgFAAgPIAAgKQgVAFgJAFgABpAqQgKgIAAgMQAAgVAVgGIAigIIAAgEQAAgKgCgEQgEgFgMgBQgSAAgDAPIgOAAQACgMAHgFQAJgKASAAQAOgBAHAIQAJAFAAAMIABANIAAAiQAAAQACAGIgNAAIgCgLQgHAPgUAAQgNAAgGgGgAB5AFQgNAFAAAKQAAAIAHAEQAEAFAHAAQAOAAAHgMQADgFAAgPIAAgKQgVAFgIAFgAl/AqQgJgIABgMQAAgVAVgGIAigIIAAgEQgBgKgBgEQgFgFgLgBQgTAAgCAPIgOAAQACgMAHgFQAJgKARAAQAPgBAHAIQAJAFgBAMIABANIAAAiQAAAQADAGIgOAAIgBgLQgIAPgTAAQgNAAgIgGgAltAFQgNAFAAAKQAAAIAFAEQAFAFAIAAQAOAAAGgMQAEgFAAgPIAAgKQgVAFgIAFgAEqAsIAAgxQAAgQgDgGQgDgIgNgBQgOAAgGALQgFAIABAMIAAAxIgOAAIAAg6QAAgTgBgEIgBgJIANAAQADAHAAAHQAIgRASAAQANgBAIAIQAGAGACAMIABASIAAAygAA6AsIAAgxQAAgQgCgGQgGgIgKgBQgNAAgIALQgFAIAAAMIAAAxIgNAAIAAiAIANAAIAAAxQALgOAQAAQALAAAHAFQAIAGADAKIABAWIAAAygAi7AsIAAg1IAAgNQgBgOgRAAQgMAAgGAKQgEAFAAANIAAA0IgNAAIAAg0QAAgPgDgFQgDgIgNAAQgFAAgFACQgFADgDAFQgDAHAAAMIAAAzIgNAAIAAg9IAAgUIgDgJIANAAQACAFAAAIQAIgRATABQASAAAGARQAKgRAUAAQAQgBAIANQACAGAAAJIABAMIAAA2gAmsAsIAAgxQgBgQgCgGQgFgIgMgBQgNAAgHALQgDAIAAAMIAAAxIgOAAIAAiAIAOAAIAAAxQAKgOARAAQAKAAAHAFQAIAGADAKIABAWIAAAygAoJAsIg4hCIA1g9IASAAIg1A9IA7BCgApQAsIAAh/IAPAAIAAA9IAABCgApBgWgAB5g8IARgXIAOAAIgVAXgAltg8IAQgXIAOAAIgUAXg");
	this.shape.setTransform(43,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("ArJCiIAAlEIWTAAIAAFEg");
	this.shape_1.setTransform(42.975,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-8.5,142.8,32.5);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgjAAIBHAA");
	this.shape.setTransform(208.3,11.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(105.575,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-4,214.6,23.1);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(139.35,22.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,9.5,269.59999999999997,26.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(90.425,11.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,0.7,174.9,21.7);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.514,1],-14.5,-4.6,14.7,4.7).s().p("AjwD8IC+pUIEjBeIi+JTg");
	this.shape.setTransform(24.125,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.3,69);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkwVfMAAAgq9IJhAAMAAAAq9g");
	this.shape.setTransform(296.65,127.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229).to({_off:true},1).wait(1637));

	// Layer_2
	this.instance = new lib.bg2();
	this.instance.setTransform(-1,-1,0.31,0.31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:true},1).wait(1637));

	// Layer_1
	this.instance_1 = new lib.bg1();
	this.instance_1.setTransform(327,-8,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:true},1).wait(1637));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-10.1,982.1,275.1);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArOCpIAAlRIWdAAIAAFRg");
	mask.setTransform(48.875,10.75);

	// Layer_3
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(-47.6,9.65,1,1,0,0,0,24.1,34.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:148.65},23,cjs.Ease.get(1)).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-6.1,143.8,33.7);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.setTransform(43.35,7.65,0.4,0.4,0,0,0,43.4,7.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.6,scaleX:1.1,scaleY:1.1,x:43.4,y:7.6,alpha:1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(58).to({startPosition:0},0).to({_off:true},1).wait(1885));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-10.1,157.1,35.7);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(27.3,11.8,1,1,0,0,0,62.3,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:63.8,alpha:1},11,cjs.Ease.get(1)).to({x:62.3},9,cjs.Ease.get(1)).wait(78).to({startPosition:0},0).to({_off:true},1).wait(1091));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-4,251.10000000000002,23.1);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(61.5,11.8,1,1,0,0,0,96.5,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:97.25,alpha:1},11,cjs.Ease.get(1)).to({x:96.5},9,cjs.Ease.get(1)).wait(205).to({startPosition:0},0).to({_off:true},1).wait(686));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,9.5,305.29999999999995,26.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol16("synched",0);
	this.instance.setTransform(134.65,13.65,1,1,0,0,0,21.7,10.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:170.65,alpha:1},11,cjs.Ease.get(1)).to({x:169.45},9,cjs.Ease.get(1)).wait(95).to({startPosition:0},0).to({x:181.45,alpha:0},16,cjs.Ease.get(1)).wait(98).to({startPosition:0},0).to({_off:true},1).wait(465));

	// Layer_1
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.setTransform(16.9,11.8,1,1,0,0,0,51.9,11.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:52.9,alpha:1},11,cjs.Ease.get(1)).to({x:51.9},9,cjs.Ease.get(1)).wait(209).to({startPosition:0},0).to({_off:true},1).wait(465));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,0.7,286.4,27.7);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_229 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(229).call(this.frame_229).wait(1));

	// logo
	this.instance = new lib.Symbol13("synched",0);
	this.instance.setTransform(308.5,181.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(230));

	// Layer_12
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(416.4,166.1,1,1,0,0,0,42.4,10.1);
	this.instance_1.alpha = 0.8008;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(195).to({_off:false},0).wait(35));

	// cta
	this.instance_2 = new lib.Symbol11("synched",0);
	this.instance_2.setTransform(424.5,166.8,1,1,0,0,0,43.5,7.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).wait(80));

	// Layer_6
	this.instance_3 = new lib.Symbol15("synched",0);
	this.instance_3.setTransform(125,125,1,1,0,0,0,125,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({_off:false},0).wait(112));

	// Layer_10
	this.instance_4 = new lib.Symbol9("synched",0);
	this.instance_4.setTransform(415.3,117.8,1,1,0,0,0,62.3,11.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131).to({_off:false},0).wait(99));

	// Layer_5
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(400.9,79.8,1,1,0,0,0,51.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(230));

	// Layer_7
	this.instance_6 = new lib.Symbol5("synched",0);
	this.instance_6.setTransform(444.5,106.8,1,1,0,0,0,96.5,11.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(111).to({startPosition:111},0).to({x:462,alpha:0,startPosition:127},16,cjs.Ease.get(1)).wait(99));

	// Layer_8
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(230));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-10.1,982.1,275.1);


// stage content:
(lib._970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.main();
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484,114.9,497.1,150.1);
// library properties:
lib.properties = {
	id: 'CC7D37763753984998DC0DE70763E649',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1698422522242", id:"bg1"},
		{src:"images/bg2.jpg?1698422522242", id:"bg2"},
		{src:"images/logomec.png?1698422522242", id:"logomec"},
		{src:"images/logo.png?1698422522242", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['CC7D37763753984998DC0DE70763E649'] = {
	getStage: function() { return exportRoot.stage; },
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
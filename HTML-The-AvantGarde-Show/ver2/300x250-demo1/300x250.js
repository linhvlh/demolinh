(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,104);


(lib.tagline = function() {
	this.initialize(img.tagline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,134);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tagline();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.light();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,679,175);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQACgCADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCADgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgAhaBEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAQgDAAgCgDgALYAoQgFgFAAgLIAGAAQABAIADAFQADADAEABQAEACAEAAQAIgBAFgEQAFgEAAgHQAAgGgFgEQgDgEgIgDIgRgJQgIgFAAgJQAAgJAHgFQAHgGAJAAQAKAAAGAGQAGAFABAKIgHAAQgBgGgDgEQgEgFgIABQgHAAgEACQgFAEAAAGQAAAHAFADIAEADIALADQANAGAEAFQAEAGAAAIQAAALgIAGQgHAFgKAAQgNAAgHgJgAHrAmQgJgLAAgTQAAgVALgMQAJgIAMAAQANAAAHAIQAFAGABAJIgHAAQgDgRgQABQgLAAgGAIQgIAKAAAQQAAARAJALQAGAGAKABQAMAAAFgKQADgFABgHIAHAAQgBAKgFAHQgHALgOAAQgPAAgJgLgABfAsQgFgEgBgFQgCgFAAgJIAAg1IAGAAIAAAvIABAMQAAAGADAEQADADAEABQAFACAFAAQAHAAAFgDQAEgCABgDQACgEABgEIAAgMIAAgvIAHAAIAAAvIAAANIgCAGQgCAHgHAEQgHAEgJAAQgMAAgHgFgAjpAoQgLgMAAgUQAAgUAKgMQAEgDAGgDQAGgDAHAAQAKAAAHAGQAHAGABALIgHAAQgBgIgEgEQgFgEgJAAQgKAAgGAHQgJAJAAASQAAATAKAKQAGAFALABQAJgBAKgEIAAgXIgRAAIAAgGIAXAAIAAAgQgLAIgOAAQgPAAgIgJgAmNArQgHgHAAgJQAAgHAEgFQADgFAKgIIgIgKQgCgEAAgDQAAgHAFgEQAFgFAHAAQAGAAAEAEQAFADAAAIQAAAFgDAFQgDAFgHAFIASAYQADgFAAgMIAGAAIgBAOQgBAEgDAFIAKANIgIAAIgGgIQgIAJgMAAQgLAAgGgFg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");
	this.shape.setTransform(103.775,7.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.6,14.1);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC0A5QgHgFAAgIQAAgHADgDQAEgEAHgDQgGgDAAgFQAAgDACgDQADgCAGgCQgOgFAAgNQABgMAHgGQAHgFAJAAQAEAAAFABIAUAAIAAAGIgOgBQAHAGgBALQABAJgGAEIgGAEIgKACQgHACgDADQgEABAAADQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAIAKACIAOACIAHACQAJAFAAALQAAAJgJAGQgIAEgMABQgNgBgJgFgAC7AiQgHADAAAHQAAAFAGAEQAGADAKAAQAMAAAGgFQAEgDgBgFQABgGgGgDQgFgDgLAAQgJAAgGADgAC/gWQgFAFAAAHQAAAHAEADQAEAEAHAAQAHAAAEgEQAEgDAAgHQAAgGgEgEQgEgGgGAAQgGAAgFAEgAiBA5QgGgFgBgIQAAgHAEgDQADgEAIgDQgHgDAAgFQAAgDACgDQADgCAGgCQgNgFAAgNQAAgMAIgGQAGgFAJAAQAFAAAFABIAUAAIAAAGIgPgBQAHAGAAALQAAAJgGAEIgFAEIgKACQgIACgDADQgDABgBADQABAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIAKACIAPACIAHACQAIAFABALQgBAJgIAGQgIAEgMABQgOgBgJgFgAh5AiQgIADAAAHQAAAFAHAEQAFADALAAQAMAAAGgFQADgDAAgFQAAgGgGgDQgFgDgKAAQgKAAgFADgAh2gWQgEAFAAAHQAAAHADADQAFAEAGAAQAHAAAFgEQADgDAAgHQAAgGgDgEQgEgGgHAAQgGAAgFAEgAEoA+IAAgHQAKAAAEgDIADgGIAFgMIgXhBIAIAAIATA4IAUg4IAHAAIgVA7IgHASIgDAHQgHAJgMAAIgDAAgAATA+IAAgHQAJAAAEgDIAEgGIAEgMIgWhBIAHAAIATA4IAVg4IAHAAIgWA7IgGASIgEAHQgGAJgMAAIgDAAgAD1AfQgHgFAAgJQAAgOAQgFQAJgEAPgCIAAgDQAAgIgDgDQgDgEgIAAQgOgBgDAMIgHAAQABgHAFgFQAGgGAMAAQAKAAAGAFQADADABADIABAOIAAAdQABAHABAGIgHAAIgCgJQgGAKgOABQgIgBgFgEgAEAACQgLAGABAJQAAAFADAEQAEADAGAAQALAAAFgJQADgEAAgMIAAgGQgOACgIACgAj+AfQgHgFAAgJQABgOAPgFQAJgEAQgCIAAgDQgBgIgCgDQgEgEgIAAQgOgBgCAMIgHAAQAAgHAFgFQAGgGAMAAQAKAAAGAFQAEADABADIABAOIAAAdQAAAHACAGIgIAAIgBgJQgHAKgNABQgIgBgGgEgAjyACQgLAGAAAJQAAAFAEAEQADADAHAAQAKAAAGgJQADgEAAgMIAAgGQgPACgHACgACbAiIAAgmIgBgLIgCgEQgDgIgJABQgKgBgGAJQgDAFAAAKIAAAlIgIAAIAAgrIAAgPIgBgHIAHAAQABADABAGQAGgLANAAQAIAAAFADQAFADACAFIABAGIAAANIAAAlgAACAiIgegjIAdgeIAJAAIgcAeIAeAjgAgjAiIAAhdIAHAAIAAA6IAAAjgAiaAiIAAgmIgBgLIgBgEQgDgIgJABQgKgBgGAJQgDAFAAAKIAAAlIgIAAIAAgrIAAgPIgBgHIAGAAQACADAAAGQAGgLAOAAQAIAAAEADQAFADADAFIABAGIAAANIAAAlgAlTAiIAAgsIgJAAIAAgHIAJAAIAAgqIALAAIATABQASADAKAOQAIAMAAASQABASgLAMQgKAMgRADIgSAAgAlLAbIAGAAIAPAAQAJgCAIgGQAMgLgBgTQABgTgKgLQgHgIgMgCIgRgBIgEAAIAAAjIAZAAIAAAHIgZAAgAAmgrIANgSIALAAIgSASgAj2gwQgEgFgCgJIAGAAQABAGADADQADADAEAAQAFAAACgDQADgDACgGIAFAAIgCAJQgEAKgLAAQgGAAgFgFg");
	this.shape.setTransform(40.05,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A7EBE").s().p("ApSB5IAAjxISlAAIAADxg");
	this.shape_1.setTransform(39.225,11.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-0.9,119.1,24.099999999999998);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApDBpIAAjRISHAAIAADRg");
	mask.setTransform(66.025,-35);

	// Layer_1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(11,-37,0.245,0.245);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,-37,100.7,12.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AotBkIAAjHIRbAAIAADHg");
	mask.setTransform(149.8,42.5);

	// Layer_1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(92,13,0.26,0.26);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.1,32.5,104.80000000000001,15.399999999999999);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E8DCA").ss(1,1,1).p("AAAgxIAABj");
	this.shape.setTransform(0,5.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,12.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(334.65,86.25,0.4,0.4,0,0,0,334.7,86.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:334.6,scaleX:1.1,scaleY:1.1,x:334.6,y:86.2,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(525));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-8.6,746.9,192.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(103.8,-18,1,1,0,0,0,103.8,7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9,alpha:1},8,cjs.Ease.get(1)).to({y:7},5,cjs.Ease.get(1)).wait(427));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25,207.6,41.1);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.4,7.6,1,1,0,0,0,43.4,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-0.9,119.1,24.099999999999998);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.4,7.6,1,1,0,0,0,43.4,7.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14,cjs.Ease.get(1)).wait(1951));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-0.9,119.1,24.099999999999998);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Symbol10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71.4,186.45,1,1,0,0,0,120.6,10.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:156.4,alpha:1},8,cjs.Ease.quadOut).wait(140).to({startPosition:0},0).to({_off:true},1).wait(4145));

	// Layer_2
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.5,144.15,1,1,0,0,0,0,5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(136).to({startPosition:0},0).to({_off:true},1).wait(4145));

	// Layer_4
	this.instance_2 = new lib.Symbol8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(211,116.9,1,1,0,0,0,66.5,13.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:128,alpha:1},8,cjs.Ease.quadOut).wait(140).to({startPosition:0},0).to({_off:true},1).wait(4145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,136.1,381.59999999999997,15.400000000000006);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_167 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(167).call(this.frame_167).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(123,210,0.41,0.41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

	// cta copy
	this.instance_1 = new lib.Symbol11copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.75,180.6,0.73,0.73,0,0,0,43.5,7.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).wait(100));

	// cta
	this.instance_2 = new lib.Symbol11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.75,180.6,0.73,0.73,0,0,0,43.5,7.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({_off:false},0).to({_off:true},27).wait(100));

	// Layer_6
	this.instance_3 = new lib.Symbol13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.15,54.05,1,1,0,0,0,103.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(168));

	// Layer_9
	this.instance_4 = new lib.Symbol14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(155.6,118.2,1,1,0,0,0,334.6,86.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(161));

	// Layer_5
	this.instance_5 = new lib.Symbol5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(62.6,63.6,1,1,0,0,0,62.6,63.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(149));

	// Layer_8
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.8,0,746.9000000000001,252.7);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,150,127.69999999999999);
// library properties:
lib.properties = {
	id: 'CC7D37763753984998DC0DE70763E649',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1693204851752", id:"bg"},
		{src:"images/light.png?1693204851752", id:"light"},
		{src:"images/logo.jpg?1693204851752", id:"logo"},
		{src:"images/tagline.png?1693204851752", id:"tagline"},
		{src:"images/text.png?1693204851752", id:"text"}
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
an.compositions['CC7D37763753984998DC0DE70763E649'] = {
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
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.EQE = function() {
	this.initialize(img.EQE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,77);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	var mask_graphics_95 = new cjs.Graphics().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:160,y:240}).wait(95).to({graphics:mask_graphics_95,x:160,y:240}).wait(1).to({graphics:null,x:0,y:0}).wait(2919));

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:true},1).wait(2919));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.EQE();
	this.instance.setTransform(-28,-3,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-3,148.5,20.8);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-7,-4,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:true},1).wait(978));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-4,44,44);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AEkAwIAAgHQAHAAAEgDQACgCACgFIACgFIgSgzIAIAAIAOAqIAPgqIAIAAIgRAvIgGAPQgGALgNAAIgCAAgADBAsQgFgEAAgHQAAgGAEgDIAHgEQgGgCAAgEQAAgDAEgDIAFgCQgKgEAAgKQAAgJAGgFQAGgEAHAAIAIABIAQAAIAAAGIgKgBQAEAEAAAIQAAAIgFADQgDADgJACIgIACQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAABIAJABIAKABQANADAAALQAAAIgHAFQgHADgKAAQgLAAgHgEgADIAaQgFACAAAFQAAAEAEADQAFACAHAAQAJAAAEgDQADgCAAgEQAAgJgRAAQgGAAgEACgADLgRQgEADAAAGQAAAEAEADQADACAFAAQAFAAADgBQADgDAAgFQAAgFgDgDQgDgEgFAAQgFAAgDADgAg2AwIAAg6IgBgLIAAgEIAIAAIAAAHQAFgJAKAAQAHAAAGAFQAIAIAAAOQAAAOgIAIQgFAFgHAAQgKAAgGgIIAAAdgAgqgQQgFAHAAAJQAAAKAFAGQADAEAHAAQAFAAADgDQAFgHAAgKQAAgKgFgGQgDgEgGAAQgGAAgDAEgAD4AYQgFgEAAgIQAAgLAMgDIAUgFIAAgCQAAgGgCgCQgDgDgGAAQgKAAgCAIIgIAAQABgHAEgDQAGgFAJAAQAIAAAFAEQAEADABAGIAAAHIAAATIABAOIgHAAIgBgHQgFAIgKAAQgIAAgEgDgAECACQgHAEAAAFQAAAFADACQACADAFAAQAIAAADgHQADgDAAgIIAAgFQgMACgFACgAA7AYQgFgEAAgIQAAgLAMgDIATgFIAAgCQAAgGgBgCQgDgDgGAAQgKAAgCAIIgIAAQABgHAEgDQAFgFAKAAQAIAAAFAEQAEADABAGIAAAHIAAATIABAOIgHAAIgBgHQgFAIgKAAQgIAAgEgDgABFACQgHAEAAAFQAAAFADACQACADAFAAQAHAAAEgHQACgDAAgIIAAgFQgLACgFACgAjZAYQgFgEAAgIQAAgLAMgDQAHgDANgCIAAgCQAAgGgCgCQgDgDgGAAQgKAAgBAIIgIAAQAAgHAFgDQAFgFAKAAQAIAAAEAEQAFADAAAGIAAAHIAAATQAAAKACAEIgIAAIgBgHQgFAIgKAAQgHAAgFgDgAjPACQgHAEAAAFQAAAFADACQACADAFAAQAIAAAEgHQACgDAAgIIAAgFQgMACgFACgACpAaIAAgdQAAgJgCgDQgCgFgHAAQgHAAgEAGQgDAEAAAIIAAAcIgHAAIAAgiIgBgNIAAgEIAHAAQABADAAAEQAFgJALAAQAHAAAEAEQAEADABAHIABAKIAAAdgAAhAaIAAgdQAAgJgCgDQgDgFgGAAQgHAAgEAGQgDAEAAAIIAAAcIgHAAIAAhJIAHAAIAAAcQAGgIAJAAQAGAAAFADQAEADACAGIAAAMIAAAdgAhpAaIAAgfIgBgHQgBgIgJAAQgHAAgDAGQgCADAAAHIAAAeIgIAAIAAgeQAAgJgBgCQgCgFgHAAIgGABIgFAFQgCAEAAAGIAAAeIgHAAIAAgjIAAgLIgCgFIAIAAIABAHQAFgJAKAAQALAAADAJQAGgJALAAQAJAAAEAHQACADAAAFIAAAHIAAAfgAjzAaIAAgdQAAgJgBgDQgDgFgHAAQgHAAgEAGQgCAEAAAIIAAAcIgIAAIAAhJIAIAAIAAAcQAGgIAJAAQAGAAAEADQAFADABAGIABAMIAAAdgAknAaIgggmIAegjIAKAAIgeAjIAhAmgAlPAaIAAhJIAIAAIAAAjIAAAmgAlHgMgABFgiIAJgMIAIAAIgMAMgAjPgiIAJgMIAJAAIgMAMg");
	this.shape.setTransform(41.725,8.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmnhjINPAAIAADHItPAAg");
	this.shape_1.setTransform(42.05,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-3.1,86.7,21.900000000000002);


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

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	var mask_graphics_168 = new cjs.Graphics().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:160,y:240}).wait(168).to({graphics:mask_graphics_168,x:160,y:240}).wait(1).to({graphics:null,x:0,y:0}).wait(4131));

	// Layer_1
	this.instance = new lib.bg1();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:true},1).wait(58).to({_off:false},0).wait(4073));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.Symbol17copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJCJQgEgEAAgHQAAgGAEgEQADgEAGAAQADAAAEAEQADAEAAAGQAAAGgDAFQgEAEgDAAQgGAAgDgEgADnBWIgWgnIhUiZIAACdQgBALACADQAEAGAQABIAAAIIgbgBIgZABIAAgIQALgBAEgCQAGgDABgGIAAgJIAAioQgEgFgGgCQgEgCgJAAIAAgIIAXABIAUgBIBaChIAAiEQgBgKgBgDQgDgHgRgBIAAgIIAbACIAZgCIAAAIQgKABgFACQgFADgBAGIgBAJIAAC/gAAzBOQgOAAgTACIAAgIQAHAAAEgCQAGgCAAgFIgBgLIgJgiIg9AAIgJAeQgEAKAAAFQAAAGAIACIAKABIAAAIQgPgCgKAAQgKAAgPACIAAgIQAMgBAEgDQAEgEAFgOIA7i+IA3DBQAEAOAHACQAEADAKAAIAAAIQgTgCgNAAgAghAIIA3AAIgZhhgAh9BOQgMAAgWACIAAgIQAMgBAEgCQAFgDABgGIAAgJIAAhNIhLAAIAABNQAAAKACADQADAGAIABIAKABIAAAIQgWgCgMAAQgMAAgVACIAAgIQALgBAFgCQAFgDABgGIABgJIAAicQgBgKgBgDQgCgFgJgCIgKgBIAAgIQAUACANAAQANAAAVgCIAAAIQgMABgEACQgFADgBAGIgBAJIAABFIBLAAIAAhFQAAgKgCgDQgBgFgKgCIgJgBIAAgIQAVACANAAQAMAAAVgCIAAAIQgLABgFACQgFADgBAGIgBAJIAACcQABAKABADQACAGAJABIAKABIAAAIQgVgCgMAAg");
	this.shape.setTransform(164.2,9.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138.6,-4.4,51.30000000000001,28.1);


(lib.Symbol17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxB1QgRgQgIggQgFgVAAgZQAAgtAQgdQATgkAlAAQAXAAASASQARAQAHAeQAFAWAAAYQAAAtgQAfQgJARgQAKQgNAIgQAAQgYAAgSgRgAA8g7QgRAZAAA4QAAAoAJAcQAFAPAKAKQAKAKAOAAQATAAALgTQAKgPAEgcQACgSAAgWQAAgogIgaQgMgjgbAAQgSAAgMATgAhSCGIg2i9QgEgPgGgDQgFgCgJgBIAAgHQARACAPAAQAPAAARgCIAAAHIgKACQgIACAAAGIACAKIApCRIApiOIADgNQAAgGgHgCIgLgCIAAgHIAYABIAZgBIAAAHQgIABgFADQgHADgCAKIg5DBgABzhfIgZgYIgZAYIgHAAIAbgmIAMAAIAbAmg");
	this.shape.setTransform(113.725,4.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.6,-8.7,32.30000000000001,26.8);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBeQgRgQgIggQgFgVAAgZQAAgtAQgdQATgkAlAAQAXAAASASQARAQAHAeQAFAWAAAYQAAAtgQAfQgJARgQAKQgNAIgQAAQgYAAgSgRgAA5hSQgRAZAAA5QAAAnAJAcQAFAPAKAKQAKAKAOAAQATAAALgTQAKgPAEgcQACgSAAgWQAAgogIgaQgMgjgbAAQgSAAgMATgAidBrIAAgIQALgBAEgCQAFgDABgGIABgJIAAiaQAAgKgCgEQgEgHgQgBIAAgIIBBAAQAYAAAOAIQAWAMAMAeQALAaAAAeQAAAkgOAcQgOAegbAJQgMAEgQAAgAhxBRIABALQACAEAHABIAIABQAdAAAOgSQAUgZAAg3QAAgygSgaQgNgUgdAAIgVAAg");
	this.shape.setTransform(73.325,7.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.5,-3.8,31.700000000000003,22.2);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCCaQgEgEAAgGQAAgHAEgDQAEgFAFAAQAFAAADAFQAEADAAAHQAAAFgEAFQgDAEgFAAQgFAAgEgEgAAZBOQgJgMgCgOIgBgKIAAgLIAAh3QAAgJgCgEQgDgFgIgCIgIgBIAAgHIARABIAPAAIAPAAIASgBIAAAHQgJAAgEACQgHADgCAHIAAAJIAAB6QAAASADAKQAJAYAeAAQAcAAALgVQAGgNAAgWIAAh2QAAgJgBgEQgDgFgIgCIgKgBIAAgHIAQABIALAAIAHAAQAEgIAAgHIAAgBIgCAAQgLgBADgNQACgMAJAAQANAAAAAQQgBASgUAZIAAB/QAAATgDALQgMApgsAAQgeAAgRgWgAhWBfQgNAAgUADIAAgIQALgBAEgDQAGgCAAgHIABgJIAAiuIgPAAQgQAAgHAMQgFAJgEASIgHAAIAHgxIB1AAIAHAxIgGAAQgFgTgEgIQgFgHgGgDQgEgCgIAAIgRAAIAACuQAAALACADQAEAGAQACIAAAIQgUgDgNAAg");
	this.shape.setTransform(34.0259,7.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.9,-7.8,30.300000000000004,31.6);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap4CWIAAkrITxAAIAAErg");
	mask.setTransform(41.05,13.825);

	// Layer_3
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(-49.6,9.65,1,1,0,0,0,24.1,34.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:127.8},23,cjs.Ease.get(1)).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-1.1,126.5,29.900000000000002);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol14("synched",0);
	this.instance.setTransform(14.85,-171.9,1.7999,1.7999,0,0,0,43.8,6.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.7,regY:6,scaleX:0.95,scaleY:0.95,x:14.75,y:-171.95,alpha:1},10,cjs.Ease.get(1)).to({regX:43.8,regY:6.1,scaleX:1,scaleY:1,x:14.8,y:-171.9},8,cjs.Ease.get(1)).wait(201).to({startPosition:0},0).to({_off:true},1).wait(961));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.3,-188.2,267.2,37.39999999999998);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.setTransform(43.35,7.65,0.4,0.4,0,0,0,43.4,7.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.6,scaleX:1.1,scaleY:1.1,x:43.4,y:7.6,alpha:1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(32).to({startPosition:0},0).to({_off:true},1).wait(1911));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-4.1,95.2,24);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.instance = new lib.Symbol17copy3("synched",0);
	this.instance.setTransform(316.4,7.8,1,1,0,0,0,103.1,7.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:100.25,alpha:1},9,cjs.Ease.get(1)).to({x:103.1},9,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({_off:true},1).wait(1393));

	// Layer_1 copy 2
	this.instance_1 = new lib.Symbol17copy2("synched",0);
	this.instance_1.setTransform(316.4,7.8,1,1,0,0,0,103.1,7.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:100.25,alpha:1},9,cjs.Ease.get(1)).to({x:103.1},9,cjs.Ease.get(1)).wait(56).to({startPosition:0},0).to({_off:true},1).wait(1388).to({_off:false},0).to({_off:true},1).wait(4));

	// Layer_1 copy
	this.instance_2 = new lib.Symbol17copy("synched",0);
	this.instance_2.setTransform(316.4,7.8,1,1,0,0,0,103.1,7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:100.25,alpha:1},9,cjs.Ease.get(1)).to({x:103.1},9,cjs.Ease.get(1)).wait(58).to({startPosition:0},0).to({_off:true},1).wait(1388).to({_off:false},0).to({_off:true},3).wait(2));

	// Layer_1
	this.instance_3 = new lib.Symbol17("synched",0);
	this.instance_3.setTransform(316.4,7.8,1,1,0,0,0,103.1,7.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:100.25,alpha:1},9,cjs.Ease.get(1)).to({x:103.1},9,cjs.Ease.get(1)).wait(60).to({startPosition:0},0).to({_off:true},1).wait(1388).to({_off:false},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-8.7,387.2,32.5);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_229 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(229).call(this.frame_229).wait(1));

	// logo copy 2
	this.instance = new lib.Symbol13copy("synched",0);
	this.instance.setTransform(154.5,263.5,1,1,0,0,0,15.5,15.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).wait(96));

	// logo copy
	this.instance_1 = new lib.Symbol13copy("synched",0);
	this.instance_1.setTransform(158.5,557.5,1,1,0,0,0,15.5,15.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(108).to({startPosition:108},0).to({x:-154,startPosition:124},16,cjs.Ease.get(1)).wait(96));

	// logo
	this.instance_2 = new lib.Symbol13("synched",0);
	this.instance_2.setTransform(160.5,430.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(230));

	// Layer_12
	this.instance_3 = new lib.Symbol18();
	this.instance_3.setTransform(157.45,176.85,1,1,0,0,0,42.4,10.1);
	this.instance_3.alpha = 0.8008;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(221).to({_off:false},0).wait(9));

	// cta
	this.instance_4 = new lib.Symbol11("synched",0);
	this.instance_4.setTransform(158.25,180.7,1.5,1.5,0,0,0,43.5,7.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(176).to({_off:false},0).wait(54));

	// Layer_9
	this.instance_5 = new lib.Symbol16("synched",0);
	this.instance_5.setTransform(155.45,123.8,1.28,1.3199,0,0,0,103.5,8.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(151).to({_off:false},0).wait(79));

	// Layer_6
	this.instance_6 = new lib.Symbol15("synched",0);
	this.instance_6.setTransform(445,125,1,1,0,0,0,125,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({_off:false},0).to({x:125},16,cjs.Ease.get(1)).wait(96));

	// Layer_8
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118).to({startPosition:65},0).to({x:-170,startPosition:73},16,cjs.Ease.get(1)).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,0,960,480);


// stage content:
(lib._320x480 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.main();
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,240,160,240);
// library properties:
lib.properties = {
	id: 'CC7D37763753984998DC0DE70763E649',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1695215911352", id:"bg1"},
		{src:"images/bg2.jpg?1695215911352", id:"bg2"},
		{src:"images/EQE.png?1695215911352", id:"EQE"},
		{src:"images/logo.png?1695215911352", id:"logo"}
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
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1020,390);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,715,273);


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
	var mask_graphics_0 = new cjs.Graphics().p("EgzeATiMAAAgnDMBm8AAAMAAAAnDg");
	var mask_graphics_58 = new cjs.Graphics().p("EgzeATiMAAAgnDMBm8AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:640.6,y:125}).wait(58).to({graphics:mask_graphics_58,x:640.6,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(2956));

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(308,-1,0.93,0.93);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:true},1).wait(168).to({_off:false},0).wait(2788));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308,-1,665,253.9);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.EQE();
	this.instance.parent = this;
	this.instance.setTransform(-18,-1,0.23,0.23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-1,126.5,17.7);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-5,-3,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-3,40,40);


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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-3.1,86.7,21.900000000000002);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.514,1],-14.5,-4.6,14.7,4.7).s().p("AjwD8IC+pUIEjBeIi+JTg");
	this.shape.setTransform(24.125,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.3,69);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgzeATiMAAAgnDMBm8AAAMAAAAnDg");
	var mask_graphics_131 = new cjs.Graphics().p("EgzeATiMAAAgnDMBm8AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:640.6,y:125}).wait(131).to({graphics:mask_graphics_131,x:640.6,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(4168));

	// Layer_1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(308,0,0.65,0.65);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:true},1).wait(95).to({_off:false},0).wait(4073));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308,0,663,253.5);


(lib.Symbol17copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgDgFAAgGQAAgGADgFQAFgDAFAAQAFAAAEADQADAFAAAGQAAAGgDAFQgEAEgFAAQgFAAgFgEg");
	this.shape.setTransform(192.7035,16.5594,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJCJQgEgEAAgHQAAgGAEgEQADgEAGAAQADAAAEAEQADAEAAAGQAAAGgDAFQgEAEgDAAQgGAAgDgEgADnBWIgWgnIhUiZIAACdQgBALACADQAEAGAQABIAAAIIgbgBIgZABIAAgIQALgBAEgCQAGgDABgGIAAgJIAAioQgEgFgGgCQgEgCgJAAIAAgIIAXABIAUgBIBaChIAAiEQgBgKgBgDQgDgHgRgBIAAgIIAbACIAZgCIAAAIQgKABgFACQgFADgBAGIgBAJIAAC/gAAzBOQgOAAgTACIAAgIQAHAAAEgCQAGgCAAgFIgBgLIgJgiIg9AAIgJAeQgEAKAAAFQAAAGAIACIAKABIAAAIQgPgCgKAAQgKAAgPACIAAgIQAMgBAEgDQAEgEAFgOIA7i+IA3DBQAEAOAHACQAEADAKAAIAAAIQgTgCgNAAgAghAIIA3AAIgZhhgAh9BOQgMAAgWACIAAgIQAMgBAEgCQAFgDABgGIAAgJIAAhNIhLAAIAABNQAAAKACADQADAGAIABIAKABIAAAIQgWgCgMAAQgMAAgVACIAAgIQALgBAFgCQAFgDABgGIABgJIAAicQgBgKgBgDQgCgFgJgCIgKgBIAAgIQAUACANAAQANAAAVgCIAAAIQgMABgEACQgFADgBAGIgBAJIAABFIBLAAIAAhFQAAgKgCgDQgBgFgKgCIgJgBIAAgIQAVACANAAQAMAAAVgCIAAAIQgLABgFACQgFADgBAGIgBAJIAACcQABAKABADQACAGAJABIAKABIAAAIQgVgCgMAAg");
	this.shape_1.setTransform(164.2,9.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138.6,-4.4,55.70000000000002,28.1);


(lib.Symbol17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxB1QgRgQgIggQgFgVAAgZQAAgtAQgdQATgkAlAAQAXAAASASQARAQAHAeQAFAWAAAYQAAAtgQAfQgJARgQAKQgNAIgQAAQgYAAgSgRgAA8g7QgRAZAAA4QAAAoAJAcQAFAPAKAKQAKAKAOAAQATAAALgTQAKgPAEgcQACgSAAgWQAAgogIgaQgMgjgbAAQgSAAgMATgAhSCGIg2i9QgEgPgGgDQgFgCgJgBIAAgHQARACAPAAQAPAAARgCIAAAHIgKACQgIACAAAGIACAKIApCRIApiOIADgNQAAgGgHgCIgLgCIAAgHIAYABIAZgBIAAAHQgIABgFADQgHADgCAKIg5DBgABzhfIgZgYIgZAYIgHAAIAbgmIAMAAIAbAmg");
	this.shape.setTransform(113.725,4.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.6,-8.7,32.30000000000001,26.8);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBeQgRgQgIggQgFgVAAgZQAAgtAQgdQATgkAlAAQAXAAASASQARAQAHAeQAFAWAAAYQAAAtgQAfQgJARgQAKQgNAIgQAAQgYAAgSgRgAA5hSQgRAZAAA5QAAAnAJAcQAFAPAKAKQAKAKAOAAQATAAALgTQAKgPAEgcQACgSAAgWQAAgogIgaQgMgjgbAAQgSAAgMATgAidBrIAAgIQALgBAEgCQAFgDABgGIABgJIAAiaQAAgKgCgEQgEgHgQgBIAAgIIBBAAQAYAAAOAIQAWAMAMAeQALAaAAAeQAAAkgOAcQgOAegbAJQgMAEgQAAgAhxBRIABALQACAEAHABIAIABQAdAAAOgSQAUgZAAg3QAAgygSgaQgNgUgdAAIgVAAg");
	this.shape.setTransform(73.325,7.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.5,-3.8,31.700000000000003,22.2);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCCaQgEgEAAgGQAAgHAEgDQAEgFAFAAQAFAAADAFQAEADAAAHQAAAFgEAFQgDAEgFAAQgFAAgEgEgAAZBOQgJgMgCgOIgBgKIAAgLIAAh3QAAgJgCgEQgDgFgIgCIgIgBIAAgHIARABIAPAAIAPAAIASgBIAAAHQgJAAgEACQgHADgCAHIAAAJIAAB6QAAASADAKQAJAYAeAAQAcAAALgVQAGgNAAgWIAAh2QAAgJgBgEQgDgFgIgCIgKgBIAAgHIAQABIALAAIAHAAQAEgIAAgHIAAgBIgCAAQgLgBADgNQACgMAJAAQANAAAAAQQgBASgUAZIAAB/QAAATgDALQgMApgsAAQgeAAgRgWgAhWBfQgNAAgUADIAAgIQALgBAEgDQAGgCAAgHIABgJIAAiuIgPAAQgQAAgHAMQgFAJgEASIgHAAIAHgxIB1AAIAHAxIgGAAQgFgTgEgIQgFgHgGgDQgEgCgIAAIgRAAIAACuQAAALACADQAEAGAQACIAAAIQgUgDgNAAg");
	this.shape.setTransform(34.0259,7.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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
	this.instance.parent = this;
	this.instance.setTransform(-49.6,9.65,1,1,0,0,0,24.1,34.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:127.8},23,cjs.Ease.get(1)).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-1.1,126.5,29.900000000000002);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(14.85,-171.9,1.7999,1.7999,0,0,0,43.8,6.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.7,regY:6,scaleX:0.95,scaleY:0.95,x:14.75,y:-171.95,alpha:1},10,cjs.Ease.get(1)).to({regX:43.8,regY:6.1,scaleX:1,scaleY:1,x:14.8,y:-171.9},8,cjs.Ease.get(1)).wait(1163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.3,-184.6,227.60000000000002,31.799999999999983);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.35,7.65,0.4,0.4,0,0,0,43.4,7.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.6,scaleX:1.1,scaleY:1.1,x:43.4,y:7.6,alpha:1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1944));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-4.1,95.2,24);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.instance = new lib.Symbol17copy3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(316.4,7.8,1,1,0,0,0,103.1,7.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:100.25,alpha:1},9,cjs.Ease.get(1)).to({x:103.1},9,cjs.Ease.get(1)).to({_off:true},1442).wait(6));

	// Layer_1 copy 2
	this.instance_1 = new lib.Symbol17copy2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(316.4,7.8,1,1,0,0,0,103.1,7.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:100.25,alpha:1},9,cjs.Ease.get(1)).to({x:103.1},9,cjs.Ease.get(1)).to({_off:true},1446).wait(4));

	// Layer_1 copy
	this.instance_2 = new lib.Symbol17copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(316.4,7.8,1,1,0,0,0,103.1,7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:100.25,alpha:1},9,cjs.Ease.get(1)).to({x:103.1},9,cjs.Ease.get(1)).to({_off:true},1450).wait(2));

	// Layer_1
	this.instance_3 = new lib.Symbol17("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(316.4,7.8,1,1,0,0,0,103.1,7.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:100.25,alpha:1},9,cjs.Ease.get(1)).to({x:103.1},9,cjs.Ease.get(1)).wait(1454));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-8.7,391.6,32.5);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_192 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(192).call(this.frame_192).wait(1));

	// logo copy
	this.instance = new lib.Symbol13copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(156.5,239.5,1,1,0,0,0,15.5,15.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(183));

	// logo
	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.5,208.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(193));

	// Layer_12
	this.instance_2 = new lib.Symbol18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157.45,136.85,1,1,0,0,0,42.4,10.1);
	this.instance_2.alpha = 0.8008;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).wait(97));

	// cta
	this.instance_3 = new lib.Symbol11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(158.25,140.7,1.5,1.5,0,0,0,43.5,7.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).wait(136));

	// Layer_6 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5HTiMAAAgnDMAyPAAAMAAAAnDg");
	mask.setTransform(149.3,125);

	// Layer_9
	this.instance_4 = new lib.Symbol16("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(155.8,93.15,1.08,1.1137,0,0,0,103.5,8.2);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).wait(169));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgzeATiMAAAgnDMBm8AAAMAAAAnDg");
	mask_1.setTransform(640.6,125);

	// Layer_6
	this.instance_5 = new lib.Symbol15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(783.5,125,1,1,0,0,0,125,125);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(118).to({_off:false},0).to({x:125},16,cjs.Ease.get(1)).wait(59));

	// Layer_8
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({startPosition:65},0).to({x:-508.5,startPosition:73},16,cjs.Ease.get(1)).wait(59));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970.1,270.3);


// stage content:
(lib._970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(473.5,125,497.5,128.5);
// library properties:
lib.properties = {
	id: 'CC7D37763753984998DC0DE70763E649',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1695286019783", id:"bg1"},
		{src:"images/bg2.jpg?1695286019783", id:"bg2"},
		{src:"images/EQE.png?1695286019783", id:"EQE"},
		{src:"images/logo.png?1695286019783", id:"logo"}
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
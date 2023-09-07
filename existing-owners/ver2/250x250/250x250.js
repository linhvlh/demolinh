(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.l1 = function() {
	this.initialize(img.l1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,35);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.514,1],-7.6,-4.8,7.6,4.7).s().p("AjICZID5mQICYBgIj5GOg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-24.7,40.2,49.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.514,1],-7.6,-4.8,7.6,4.7).s().p("AjICZID5mQICYBgIj5GOg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-24.7,40.2,49.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.Symbol14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlFCJIAAkRIKMAAIAAERg");
	mask.setTransform(43.45,6.85);

	// Layer_1
	this.instance = new lib.l1();
	this.instance.parent = this;
	this.instance.setTransform(16,-1,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-1,60.099999999999994,16.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlGB2IAAjrIKNAAIAADrg");
	mask.setTransform(46.35,28.625);

	// Layer_1
	this.instance = new lib.l1();
	this.instance.parent = this;
	this.instance.setTransform(-47,21,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.7,21,59.3,16.799999999999997);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(2,4,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,4,27,27);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AEkAwIAAgHQAHAAAEgDQACgCACgFIACgFIgSgzIAIAAIAOAqIAPgqIAIAAIgRAvIgGAPQgGALgNAAIgCAAgADBAsQgFgEAAgHQAAgGAEgDIAHgEQgGgCAAgEQAAgDAEgDIAFgCQgKgEAAgKQAAgJAGgFQAGgEAHAAIAIABIAQAAIAAAGIgKgBQAEAEAAAIQAAAIgFADQgDADgJACIgIACQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAABIAJABIAKABQANADAAALQAAAIgHAFQgHADgKAAQgLAAgHgEgADIAaQgFACAAAFQAAAEAEADQAFACAHAAQAJAAAEgDQADgCAAgEQAAgJgRAAQgGAAgEACgADLgRQgEADAAAGQAAAEAEADQADACAFAAQAFAAADgBQADgDAAgFQAAgFgDgDQgDgEgFAAQgFAAgDADgAg2AwIAAg6IgBgLIAAgEIAIAAIAAAHQAFgJAKAAQAHAAAGAFQAIAIAAAOQAAAOgIAIQgFAFgHAAQgKAAgGgIIAAAdgAgqgQQgFAHAAAJQAAAKAFAGQADAEAHAAQAFAAADgDQAFgHAAgKQAAgKgFgGQgDgEgGAAQgGAAgDAEgAD4AYQgFgEAAgIQAAgLAMgDIAUgFIAAgCQAAgGgCgCQgDgDgGAAQgKAAgCAIIgIAAQABgHAEgDQAGgFAJAAQAIAAAFAEQAEADABAGIAAAHIAAATIABAOIgHAAIgBgHQgFAIgKAAQgIAAgEgDgAECACQgHAEAAAFQAAAFADACQACADAFAAQAIAAADgHQADgDAAgIIAAgFQgMACgFACgAA7AYQgFgEAAgIQAAgLAMgDIATgFIAAgCQAAgGgBgCQgDgDgGAAQgKAAgCAIIgIAAQABgHAEgDQAFgFAKAAQAIAAAFAEQAEADABAGIAAAHIAAATIABAOIgHAAIgBgHQgFAIgKAAQgIAAgEgDgABFACQgHAEAAAFQAAAFADACQACADAFAAQAHAAAEgHQACgDAAgIIAAgFQgLACgFACgAjZAYQgFgEAAgIQAAgLAMgDQAHgDANgCIAAgCQAAgGgCgCQgDgDgGAAQgKAAgBAIIgIAAQAAgHAFgDQAFgFAKAAQAIAAAEAEQAFADAAAGIAAAHIAAATQAAAKACAEIgIAAIgBgHQgFAIgKAAQgHAAgFgDgAjPACQgHAEAAAFQAAAFADACQACADAFAAQAIAAAEgHQACgDAAgIIAAgFQgMACgFACgACpAaIAAgdQAAgJgCgDQgCgFgHAAQgHAAgEAGQgDAEAAAIIAAAcIgHAAIAAgiIgBgNIAAgEIAHAAQABADAAAEQAFgJALAAQAHAAAEAEQAEADABAHIABAKIAAAdgAAhAaIAAgdQAAgJgCgDQgDgFgGAAQgHAAgEAGQgDAEAAAIIAAAcIgHAAIAAhJIAHAAIAAAcQAGgIAJAAQAGAAAFADQAEADACAGIAAAMIAAAdgAhpAaIAAgfIgBgHQgBgIgJAAQgHAAgDAGQgCADAAAHIAAAeIgIAAIAAgeQAAgJgBgCQgCgFgHAAIgGABIgFAFQgCAEAAAGIAAAeIgHAAIAAgjIAAgLIgCgFIAIAAIABAHQAFgJAKAAQALAAADAJQAGgJALAAQAJAAAEAHQACADAAAFIAAAHIAAAfgAjzAaIAAgdQAAgJgBgDQgDgFgHAAQgHAAgEAGQgCAEAAAIIAAAcIgIAAIAAhJIAIAAIAAAcQAGgIAJAAQAGAAAEADQAFADABAGIABAMIAAAdgAknAaIgggmIAegjIAKAAIgeAjIAhAmgAlPAaIAAhJIAIAAIAAAjIAAAmgAlHgMgABFgiIAJgMIAIAAIgMAMgAjPgiIAJgMIAJAAIgMAMg");
	this.shape.setTransform(42.575,8.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmnhjINPAAIAADHItPAAg");
	this.shape_1.setTransform(42.05,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-3.1,86.7,21.900000000000002);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:true},1).wait(4080));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.Symbol17copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AB/BNQgDgDAAgGQAAgFADgEQADgFAFAAQAEAAADAFQADAEAAAFQAAAGgDADQgDAEgEAAQgFAAgDgEgABBBQIAAgGQAHAAAEgCQAEgCAAgFIAAh4IgBgKQgBgDgGgBIgHgBIAAgGIAXACIAYgCIAAAGQgJAAgCADQgDAAgBAGIAACBQABADAIACIAGABIAAAGgAARBQIAAgGIAHgCQAEgBAAgEIgBgIIgGgYIgrAAIgIAgQAAAEAFACIAIABIAAAGIgkAAIAAgGQADAAAJgDQAEgGACgHIApiKIAnCNQACAJAFACQAFACAEAAIAAAGgAgTAaIAmAAIgThFgAiQBQIAAgHQAIAAADgCQAEgBAAgGIAAiBQgEgDgEgBIgHgBIAAgGIAYACIAXgCIAAAGQgIAAgDADQgEABAAAFIAAB3IABAIQACAFAKAAIAMAAQAJAAADgDQAGgDACgGQAEgHABgKIAFAAIgFAmg");
	this.shape.setTransform(231.925,10.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(217.5,2.5,28.900000000000006,16.3);


(lib.Symbol17copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ACTBfIgOgdIgFgIIg3hnIABB8QADAEAMACIAAAGIglAAIAAgGQAHAAADgCQAFgCAAgFIAAiAQgDgEgDgBIgJgCIAAgGIAPACIAOgCIA/B1IAAhgIgBgKQgCgEgMgBIAAgGIAkAAIAAAGQgGAAgEADQgDAAgCAGIAACRgADCBSQgMgMgGgWQgEgSAAgSQAAgjANgWQAOgWAYAAQARAAAMANIAHgNIAEAAIAAAvIgEAAQgDgMgEgKQgFgJgHgEQgGgFgJAAQgOAAgJAMQgNASAAAqQAABKAkAAQAMAAANgJIAAgoIgCgGQgBgDgMgCIAAgFIAVABIAVgBIAAAFIgKACIgDAFIAAArQgXARgTAAQgOAAgOgLgAglBRQgLgNgGgWQgDgOAAgUQAAggALgVQANgaAbAAQALAAALAIQAFgIAAgHIgBAAQgIgCABgJQADgIAGAAQAKAAgCAMQAAAKgIAMIgBACIgBABQAMALAGAZQADAOAAASQAAAigLAWQgNAZgYAAQgRAAgNgMgAgdgvQgLASAAApQAAAeAGATQAIAaATAAQAXAAAHgtIACgeQAAgagGgWQgIgZgTAAQgMAAgJAOgAidBNQgFgIgCgMIgBgGIAAhfIgCgKQgCgEgFAAIgHgBIAAgGIAXACIAYgCIAAAGIgJACQgFABgCAGIAABfQAAANADAGQAFASAWAAQAUAAAIgPQADgIAAgRIAAhWIgBgKQgBgEgGAAIgHgBIAAgGIAXACQAEgFAAgGIgCAAQgIgDADgJQACgIAGAAQAJAAgBALQAAANgOATIAABbQAAAQgCAHQgIAeggAAQgVAAgMgQgAj+BbIAAgGIALgCQAEgEAAgDIAAgGIAAh/IgKAAQgMAAgEAKQgEAEgDAOIgEAAIAEgkIBSAAIAFAkIgEAAQgDgNgDgGQgDgGgFgCIgJgBIgLAAIABCIQACAEANACIAAAGg");
	this.shape.setTransform(184.975,9.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(157.3,0.1,55.39999999999998,19);


(lib.Symbol17copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AgoBbQgGgIgBgLIgBhlIgCgKQgCgDgFgCIgHgBIAAgGIAXADIAYgDIAAAGQgHAAgEADQgEACAAAEIgBAHIAABYQAAANACAHQAEAKAJAEQAGADAIABQAJgBAIgDQAGgEAFgIQAEgLAAgOIAAhVIgBgKQgDgDgFgCIgHgBIAAgGIAlAAIAAAGQgIAAgDADQgEACAAAEIAABaQAAARgDAGQgDAPgLAIQgNAHgLAAQgVAAgMgQgAiQBhQgMgNgGgWQgFgSAAgRQAAghAOgZQAIgMAJgEQAKgGAKAAQARAAALAPIAIgOIACAAIAAAuIgDAAQgIgngaAAQgTAAgHAVQgJAUAAAfQAAAcAHAUQALAVARABQANgBAIgIQALgMABgYIAGAAQABASgGAMQgGALgKAIQgJAGgLAAQgPAAgMgKgAB6BpIAAgGIAIgBQAEgCAAgEIgBgIIgHgYIgrAAIgJAgQABAFAFABQABACAGgBIAAAGIgkAAIAAgGQAHAAAFgCQAFgHABgHIAriKIAmCNQADAJAFADIAKABIAAAGgABVA0IAoAAIgShGgAgHhAIABgJIAGgIQADgGAAgDQAAgKgHABQgIAAgBALIgEAAQAAgLAJgEQACgDAFAAQAFAAACADQAEAEAAAIQACAGgEAEIgEAEQgEACAAADIgEAIg");
	this.shape.setTransform(136.3,8.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.6,-2.5,33.5,21.4);


(lib.Symbol17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ACCBFQgMgNgFgWQgEgOAAgUQAAghALgUQANgaAbAAQAPgBANAOQALALAGAWQAEATAAAOQAAAfgMAZQgFALgNAHQgJAHgLAAQgRgBgMgLgACJg8QgLATAAApQAAAeAGASQAFANAFAGQAIAHAJAAQANABAIgOQAFgKAFgWIACgdQAAgZgGgYQgIgYgUAAQgNAAgIANgAAJBPIAAgHQAIgBADgBQAEgCABgFIgBiAQgEgFgLgBIAAgGIBRAAIAEAjIgFAAQgDgNgEgIQgFgHgJAAIgbAAIAABBIAaAAQAGAAAAgDQAEgCABgPIAEAAIAAAtIgEAAIgCgOQgDgFgHAAIgZAAIAAA3IABAJQAAAGALAAIANAAQAKAAAGgGQAGgHADgSIAFAAIgFAngAgsBPIAAgGQAIAAADgCQADgCACgFIAAhAIg1AAIAAA5IABAKQACADAGACIAHABIAAAGIgvAAIAAgGQAIAAAEgCQACgCACgFIAAh4IgBgKQgCgDgGgCIgHAAIAAgGIAWACIAZgCIAAAGQgHAAgEACQgFACAAAFIAAAGIAAAyIA1AAIgBg8QgEgDgEgCIgHAAIAAgGIAYACIAVgCIAAAGQgFAAgFACQgDACAAAFIgBAGIAABxIACAKQAAADAHACIAFABIAAAGgAi6BPIAAgGQAHAAAEgCQACgCACgFIAAiGIgKAAQgMAAgFAKQgEAJgCAKIgEAAIAFgkIBSAAIAEAkIgEAAIgGgUQgEgGgDgBIgJgCIgLAAIAACJQADAEAMACIAAAGg");
	this.shape.setTransform(92.85,10.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72,2.7,41.8,16.1);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ABOBqIAAgGIAMgBQADgEAAgEIABgGIAAhwIgCgKQgCgGgMAAIAAgHIAxAAQALAAAFAEQAHABAFAEQAFAFAFAKQADAIAAAMQAAAVgNAMQgJAIgRAAIgUAAIABA7QACAEAGABIAGABIAAAGgABtAcIAPAAQAOAAAGgHQAJgKAAgTQAAgPgHgKQgGgJgOAAIgRAAgAgRBqIAAgHIALgBQADgEAAgEIABgGIAAhvIgBgKQgDgGgLAAIAAgHIBQAAIADAkIgEAAQgDgNgFgJQgGgGgJAAIgbAAIAAA/IAbAAQAGAAACgDQADgDAAgOIAGAAIAAAuIgGAAQAAgIgCgGQgBgEgJgBIgaAAIAAA4IACAIQACAHAJAAIANAAQAMgBAEgFQAHgIACgRIAFAAIgFAmgAhHBqIAAgGIALgBQADgEAAgEIACgGIAAhxIgCgKQgDgEgEgBIgHgBIAAgGIAXADIAYgDIAAAGQgHAAgFADQgDACAAAEIgBAHIAABxIABAJQABAEAHABIAHABIAAAGgAiRBqIAAgGIALgBQADgDAAgFIABgGIAAh/IgKAAQgLAAgGAKQgEAIgCAKIgEAAIAEgkIBRAAIAGAkIgFAAQgCgNgEgGQgDgGgEgCIgIgBIgNAAIAAB/QAAAGACADQADAFALABIAAAGgAAsg7IgRgQIgSAQIgEAAIASgaIAIAAIATAagAAvhLIAPgeIAPAAIgaAeg");
	this.shape.setTransform(50.575,8.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.8,-2.5,33.60000000000001,21.2);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ADUBfIhLiMIAABzIABAJQADAFAMABIAAAGIgkAAIAAgGIAKgCQAEgCgBgFIABgGIAAh6QgDgEgEgBIgJgCIAAgGIAQACIAOgCIA/B1IAAhqQgDgDgMgCIAAgGIAlAAIAAAGQgJAAgCADQgEABAAAFIAACRgAEDBSQgNgMgFgWQgFgNAAgXQAAgjAOgWQAOgWAXAAQARAAAMANIAIgNIADAAIAAAvIgEAAIgHgWQgFgJgGgEQgHgFgJAAQgNAAgKAMQgNASAAAqQAABKAjAAQANAAANgJIAAgoIgBgGQgCgDgMgCIAAgFIAVABIAWgBIAAAFIgKACQgEACAAADIAAArQgWARgTAAQgPAAgNgLgAAaBRQgNgQgDgTQgEgOAAgUQAAggALgVQANgaAaAAQAPAAAJAIQAFgIAAgHIgDAAQgFgCAAgJQADgIAFAAQAJAAAAAMQAAAJgJANIgBADQAMANAGAXQADAOAAASQAAAigLAWQgMAZgaAAQgQAAgOgMgAAjgvQgNASAAApQAAAbAHAWQAIAaATAAQAZAAAFgtQADgJAAgVQAAgegHgSQgIgZgTAAQgMAAgIAOgAhdBNQgHgKAAgKIgCgGIAAhpQgDgEgGAAIgGgBIAAgGIAYACIAXgCIAAAGIgJACQgFABgCAGIAABfIACATQAIASAVAAQASAAAIgPQAEgLAAgOIAAhWIAAgKQgEgEgFAAIgGgBIAAgGIAYACQADgIAAgDIgDAAQgFgDAAgJQACgIAGAAQAJAAAAALQAAAOgOASIgCByQgKAegeAAQgUAAgNgQgAk/BSQgMgMgGgWQgEgSAAgSQAAggANgZQAJgMAIgFQALgFAJAAQATAAALAOIAGgNIAEAAIAAAuIgFAAQgHgngZAAQgTAAgIAVQgJAUAAAeQAAAdAIAUQAJAVATAAQAMAAAIgJQALgLAAgZIAHAAQAAATgGAMQgFALgKAIQgJAGgMAAQgOAAgNgLgAipBbIAAgGQAGAAAEgCQADgBACgGIAAhAIg0AAIAAA6IABAJQAAADAIACIAGABIAAAGIgvAAIAAgGQAIAAADgCQAEgCAAgFIAAiCQgDgDgGgBIgGgBIAAgGIAYACIAXgCIAAAGQgIAAgDADQgCAAgCAGIAAA4IA0AAIAAgyIgCgKQgBgDgGgBIgGgBIAAgGIAWACIAYgCIAAAGQgJAAgBADQgFABAAAFIAACBQACADAGACIAHABIAAAGg");
	this.shape.setTransform(-5.1,9.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,0.2,68.4,19);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmnBkIAAjIINPAAIAADIg");
	mask.setTransform(42.425,10.05);

	// Layer_2
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-23.7,11.55,0.7562,1);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(104.2,11.55);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},23).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,x:104.2},23,cjs.Ease.get(1)).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.9,20.1);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.instance = new lib.Symbol14copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(14.7,-179.35,1.8,1.8,0,0,0,43.7,6.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:6,scaleX:0.95,scaleY:0.95,x:14.8,y:-171.35,alpha:1},10,cjs.Ease.get(1)).to({regX:43.8,regY:6.1,scaleX:1,scaleY:1,y:-171.9},8,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({regX:43.6,regY:5.9,scaleX:0.72,scaleY:0.72,x:-8.6,y:-182.75},14,cjs.Ease.get(1)).wait(1112));

	// Layer_2
	this.instance_1 = new lib.Symbol14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.85,-179.4,1.7999,1.7999,0,0,0,43.8,6.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:43.7,regY:6,scaleX:0.95,scaleY:0.95,x:14.8,y:-171.35,alpha:1},10,cjs.Ease.get(1)).to({regX:43.8,regY:6.1,scaleX:1,scaleY:1,y:-171.9},8,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({regX:43.7,scaleX:0.72,scaleY:0.72,x:36.45,y:-198.6},14,cjs.Ease.get(1)).wait(1112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-192.1,112.39999999999999,69.8);


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

	// Layer_1 copy 5
	this.instance = new lib.Symbol17copy5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(103.1,-1.2,1,1,0,0,0,103.1,7.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:9,alpha:1},7,cjs.Ease.get(1)).to({y:7.8},7,cjs.Ease.get(1)).wait(117).to({startPosition:0},0).to({_off:true},1).wait(1326));

	// Layer_1 copy 4
	this.instance_1 = new lib.Symbol17copy4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.1,-1.2,1,1,0,0,0,103.1,7.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:9,alpha:1},7,cjs.Ease.get(1)).to({y:7.8},7,cjs.Ease.get(1)).wait(119).to({startPosition:0},0).to({_off:true},1).wait(1317).to({_off:false},0).to({_off:true},1).wait(8));

	// Layer_1 copy 3
	this.instance_2 = new lib.Symbol17copy3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.1,-1.2,1,1,0,0,0,103.1,7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:9,alpha:1},7,cjs.Ease.get(1)).to({y:7.8},7,cjs.Ease.get(1)).wait(121).to({startPosition:0},0).to({_off:true},1).wait(1317).to({_off:false},0).to({_off:true},3).wait(6));

	// Layer_1 copy 2
	this.instance_3 = new lib.Symbol17copy2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(103.1,-1.2,1,1,0,0,0,103.1,7.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({y:9,alpha:1},7,cjs.Ease.get(1)).to({y:7.8},7,cjs.Ease.get(1)).wait(123).to({startPosition:0},0).to({_off:true},1).wait(1317).to({_off:false},0).to({_off:true},5).wait(4));

	// Layer_1 copy
	this.instance_4 = new lib.Symbol17copy("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(103.1,-1.2,1,1,0,0,0,103.1,7.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({y:9,alpha:1},7,cjs.Ease.get(1)).to({y:7.8},7,cjs.Ease.get(1)).wait(125).to({startPosition:0},0).to({_off:true},1).wait(1317).to({_off:false},0).to({_off:true},7).wait(2));

	// Layer_1
	this.instance_5 = new lib.Symbol17("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(103.1,-1.2,1,1,0,0,0,103.1,7.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:9,alpha:1},7,cjs.Ease.get(1)).to({y:7.8},7,cjs.Ease.get(1)).wait(127).to({startPosition:0},0).to({_off:true},1).wait(1317).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-11.5,285.7,31.9);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_230 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(230).call(this.frame_230).wait(1));

	// logo copy
	this.instance = new lib.Symbol13copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(125.5,230.5,1,1,0,0,0,15.5,15.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(221));

	// logo
	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.5,220.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(231));

	// Layer_12
	this.instance_2 = new lib.Symbol18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.95,85.85,1,1,0,0,0,42.4,10.1);
	this.instance_2.alpha = 0.7695;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145).to({_off:false},0).wait(86));

	// cta
	this.instance_3 = new lib.Symbol11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(125.4,85.6,1,1,0,0,0,43.4,7.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({_off:false},0).wait(121));

	// Layer_9
	this.instance_4 = new lib.Symbol16("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.45,53.85,0.72,0.72,0,0,0,103.4,8.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).wait(142));

	// Layer_6
	this.instance_5 = new lib.Symbol15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(375,125,1,1,0,0,0,125,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70).to({_off:false},0).to({x:125},14,cjs.Ease.get(1)).wait(147));

	// Layer_8
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70).to({startPosition:65},0).to({x:-100,startPosition:73},14,cjs.Ease.get(1)).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,0,750,250);


// stage content:
(lib._250x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,125,125,125);
// library properties:
lib.properties = {
	id: 'CC7D37763753984998DC0DE70763E649',
	width: 250,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1693642009270", id:"bg1"},
		{src:"images/bg2.jpg?1693642009270", id:"bg2"},
		{src:"images/l1.png?1693642009270", id:"l1"},
		{src:"images/logo.png?1693642009270", id:"logo"}
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
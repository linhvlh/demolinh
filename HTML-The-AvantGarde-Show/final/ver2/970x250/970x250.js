(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.tagline = function() {
	this.initialize(img.tagline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,185);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,141);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(848,207,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlyFTQgiAAAAgkIAApdQAAgkAiAAILlAAQAiAAAAAkIAAJdQAAAkgiAAg");
	this.shape.setTransform(863.425,226.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,260.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tagline();
	this.instance.parent = this;
	this.instance.setTransform(174,28,0.46,0.46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.light();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-140,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-32,970,250);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQACgCADAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCADgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgAhaBEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAQgDAAgCgDgALYAoQgFgFAAgLIAGAAQABAIADAFQADADAEABQAEACAEAAQAIgBAFgEQAFgEAAgHQAAgGgFgEQgDgEgIgDIgRgJQgIgFAAgJQAAgJAHgFQAHgGAJAAQAKAAAGAGQAGAFABAKIgHAAQgBgGgDgEQgEgFgIABQgHAAgEACQgFAEAAAGQAAAHAFADIAEADIALADQANAGAEAFQAEAGAAAIQAAALgIAGQgHAFgKAAQgNAAgHgJgAHrAmQgJgLAAgTQAAgVALgMQAJgIAMAAQANAAAHAIQAFAGABAJIgHAAQgDgRgQABQgLAAgGAIQgIAKAAAQQAAARAJALQAGAGAKABQAMAAAFgKQADgFABgHIAHAAQgBAKgFAHQgHALgOAAQgPAAgJgLgABfAsQgFgEgBgFQgCgFAAgJIAAg1IAGAAIAAAvIABAMQAAAGADAEQADADAEABQAFACAFAAQAHAAAFgDQAEgCABgDQACgEABgEIAAgMIAAgvIAHAAIAAAvIAAANIgCAGQgCAHgHAEQgHAEgJAAQgMAAgHgFgAjpAoQgLgMAAgUQAAgUAKgMQAEgDAGgDQAGgDAHAAQAKAAAHAGQAHAGABALIgHAAQgBgIgEgEQgFgEgJAAQgKAAgGAHQgJAJAAASQAAATAKAKQAGAFALABQAJgBAKgEIAAgXIgRAAIAAgGIAXAAIAAAgQgLAIgOAAQgPAAgIgJgAmNArQgHgHAAgJQAAgHAEgFQADgFAKgIIgIgKQgCgEAAgDQAAgHAFgEQAFgFAHAAQAGAAAEAEQAFADAAAIQAAAFgDAFQgDAFgHAFIASAYQADgFAAgMIAGAAIgBAOQgBAEgDAFIAKANIgIAAIgGgIQgIAJgMAAQgLAAgGgFgAmIAPQgFAFAAAHQAAAHAEAEQAFAEAIABQAKAAAGgJIgTgaIgJAHgAmDgXQgDADAAAEQAAAEADAFIAFAHIAIgIQADgFAAgDQAAgEgDgDQgCgCgEAAQgFAAgCACgAPbAvIAAgFIAqhDIgoAAIAAgHIAxAAIAAAFIgrBEIAqAAIAAAGgAPLAvIgohFIAABFIgHAAIAAhPIAIAAIAoBGIAAhGIAGAAIAABPgANnAvIAAhPIAqAAIAAAHIgjAAIAAAcIAhAAIAAAGIghAAIAAAgIAkAAIAAAGgAMtAvIAAhPIAMAAIANABIAHABQAGADAEAFQACAEAAAGQAAANgNAEQAGABAEADQAHAGAAALQAAAKgGAGQgEADgGABIgUABgAM0ApIAIAAIAMAAIAGgCQAEgBACgEQACgEAAgFQAAgHgEgFQgDgDgFAAIgOgBIgIAAgAM0ACIAHAAIALAAIAGgCQAGgDAAgJQAAgEgCgDQgCgEgEgBQgEgCgLABIgHAAgAKhAvIAAhPIAqAAIAAAHIgjAAIAAAcIAhAAIAAAGIghAAIAAAgIAkAAIAAAGgAJdAvIAAhPIAKAAIAQABQAQACAIANQAHAKAAAOQAAAQgJALQgIAKgOACIgRAAgAJkApIAFAAIANAAQAIgBAGgFQAKgJAAgSQAAgQgIgIQgGgHgJgCIgQAAIgDAAgAIoAvIAAhPIAqAAIAAAHIgjAAIAAAcIAgAAIAAAGIggAAIAAAgIAjAAIAAAGgAHVAvIgWgjIgOAAIAAAjIgHAAIAAhPIAMAAIANABIAIABQAHADAEAFQADAGAAAHQAAAOgSAGIAWAkgAGxAGIAFAAIALgBIAGgBQAFgBADgDQACgEAAgFQAAgGgCgDQgCgEgEgCQgDgBgEAAIgMAAIgFAAgAF1AvIAAhPIAqAAIAAAHIgjAAIAAAcIAgAAIAAAGIggAAIAAAgIAjAAIAAAGgAFfAvIAAhIIgZBIIgHAAIgZhIIAABIIgHAAIAAhPIALAAIAYBIIAZhIIALAAIAABPgADkAvIAAhIIgUAAIAAgHIAwAAIAAAHIgVAAIAABIgADJAvIgIgWIgfAAIgIAWIgHAAIAchPIAFAAIAcBPgACkATIAbAAIgOgqgABCAvIAAgmIgnAAIAAAmIgHAAIAAhPIAHAAIAAAjIAnAAIAAgjIAHAAIAABPgAgOAvIAAhIIgVAAIAAgHIAvAAIAAAHIgTAAIAABIgAhoAvIAAhPIAqAAIAAAHIgjAAIAAAcIAgAAIAAAGIggAAIAAAgIAjAAIAAAGgAh+AvIAAgmIgnAAIAAAmIgHAAIAAhPIAHAAIAAAjIAnAAIAAgjIAHAAIAABPgAkHAvIgohFIAABFIgHAAIAAhPIAIAAIAoBGIAAhGIAGAAIAABPgAncAvIAAhPIAqAAIAAAHIgjAAIAAAcIAgAAIAAAGIggAAIAAAgIAjAAIAAAGgAnrAvIgVgjIgVAjIgIAAIAZgqIgYglIAIAAIAUAgIAUggIAIAAIgYAlIAZAqgApDAvIAAhIIgZBIIgHAAIgZhIIAABIIgHAAIAAhPIALAAIAYBIIAZhIIALAAIAABPgAqRAvIgIgWIgfAAIgIAWIgHAAIAchPIAFAAIAcBPgAq2ATIAbAAIgOgqgArxAvIAAhPIAHAAIAABJIAiAAIAAAGgAsgAvIgohFIAABFIgGAAIAAhPIAHAAIApBGIAAhGIAGAAIAABPgAuDAvIAAhPIAqAAIAAAHIgjAAIAAAcIAgAAIAAAGIggAAIAAAgIAjAAIAAAGgAuZAvIAAhPIAHAAIAABPgAuqAvIgWgjIgOAAIAAAjIgHAAIAAhPIAMAAIANABIAIABQAHADAEAFQADAGAAAHQAAAOgSAGIAWAkgAvOAGIAFAAIALgBIAGgBQAFgBADgDQACgEAAgFQAAgGgCgDQgCgEgEgCQgDgBgEAAIgMAAIgFAAgAv4AvIAAhIIgVAAIAAgHIAwAAIAAAHIgUAAIAABIgAMHAUIAAgGIAhAAIAAAGgAC/gnIgOgLIgNALIgGAAIAPgPIAJAAIAPAPgAhGgnIgNgLIgNALIgHAAIAQgPIAIAAIAQAPgAthgnIgNgLIgNALIgHAAIAQgPIAIAAIAIAGIAAgFIAGgBQADgCAAgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgBgEAAIgGABIAAgFIAJgCQAFABADACQAEADAAAEQAAAGgEACQgDACgGAAIAAAGIgCAAIAGAFgAqkgpIgGgDQgEgDgDgBQgEAAgCAIIgEgCIACgGQADgGAFABQAEgBAFAEIAGADIADABQAFAAAAgIIAFACIgCAHQgBACgCABQgDACgDAAIgEgBg");
	this.shape.setTransform(103.775,7.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.6,14.1);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjUAwQgGgDAAgIQAAgFADgDQADgDAGgDQgGgCAAgEQAAgEADgCQACgBAGgCQgMgFAAgLQAAgKAHgFQAFgEAIAAIAIABIARgBIAAAFIgMAAQAGAFAAAJQAAAIgGADIgEADIgJADIgJADQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABIAJABIAMABIAGACQAIAFAAAJQAAAIgIAEQgGAFgLAAQgMgBgHgFgAjOAdQgGADAAAFQAAAFAFADQAFADAJAAQALAAAEgEQAEgDAAgEQAAgFgFgDQgFgCgJAAQgIAAgFACgAjLgSQgEADAAAHQAAAFAEADQAEADAFAAQAGAAAEgDQADgDAAgFQAAgGgDgDQgEgFgFAAQgGAAgEAEgAhHA1IAAgGQAIAAADgDIADgFIAEgKIgTg4IAGAAIARAwIARgwIAGAAIgSAzIgGAPIgDAHQgGAHgKAAIgCAAgAF1AyQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgDACgDQACgBADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQACADAAADQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgCACgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAFsAbQgFgEgBgHIgBgIIAAgjIAHAAIAAAjQAAAIACAEQADAEAHAAQAIABAEgHQADgEAAgJIAAggIAGAAIAAAnIAAAMIABAFIgGAAQgBgEAAgEQgDAFgDACQgDADgGgBQgHAAgFgDgAEsAYQgHgJAAgOQAAgOAHgIQAFgIAKAAQALAAAFALIAAghIAHAAIAAA/QAAANABAEIgHAAIgBgHIAAgBQgDAFgDACQgEADgGgBQgJAAgGgGgAExgRQgFAGAAAMQAAALAFAIQAEAEAGAAQAHAAAEgEQAFgIAAgLQAAgMgFgGQgEgGgGAAQgHAAgEAGgAB2AbQgFgFAAgIQAAgMANgEQAIgDANgCIAAgDQAAgGgCgDQgDgDgHgBQgMAAgCAKIgGAAQAAgGAEgEQAGgFAKgBQAIABAFAEQAEACAAAEIABAMIAAAYQAAAHACAEIgGAAIgCgIQgFAJgMAAQgHAAgFgDgACBACQgKAEAAAIQAAAEADADQAEADAFAAQAJAAAEgGQADgFAAgKIAAgFQgMACgGACgAlJAbQgFgFAAgIQAAgMANgEQAIgDANgCIAAgDQAAgGgCgDQgDgDgHgBQgMAAgCAKIgGAAQAAgGAEgEQAGgFAKgBQAIABAFAEQAEACAAAEIABAMIAAAYQAAAHACAEIgGAAIgCgIQgFAJgMAAQgHAAgFgDgAk+ACQgKAEAAAIQAAAEADADQAEADAFAAQAJAAAEgGQADgFAAgKIAAgFQgMACgGACgAAWAcQgCgDAAgGIABgpIgJAAIAAgFIAJAAIAAgQIAGAAIAAAQIAOAAIAAAFIgOAAIgBAfIAAAGQAAAGABABQACACAEAAQAEAAAEgCIAAAHIgJABQgHAAgDgCgADuAdIAAgiIAAgJIgBgEQgDgEgHgBQgJABgEAGQgCAEAAAIIAAAhIgGAAIAAghQAAgKgBgDQgDgFgIgBQgIAAgEAHQgDAEAAAIIAAAhIgGAAIAAgoIAAgKIgBgGIAGAAIABAIQAFgKALAAQAGAAAEADQAEACACAGQAFgLAMAAQAKABAEAGIACAGIABALIAAAigABaAdIAAggIAAgJIgCgFQgDgFgHgBQgJAAgEAIQgDAEAAAJIAAAfIgGAAIAAhQIAGAAIAAAfQADgEAEgCQAEgCAFgBQALAAAFAIIACAGIAAAMIAAAggAhbAdIgZgeIAZgaIAHAAIgYAZIAaAfgAh7AdIAAhQIAGAAIAABQgAjvAdIAAggIAAgJIgBgFQgDgFgIgBQgJABgEAGQgEAFAAAIIAAAgIgGAAIAAglIAAgNIgBgGIAGAAQABADAAAGQAGgLAMAAQAGAAAEADQAEACACAGIABAEIAAALIAAAggAmWAdIAAgmIgIAAIAAgGIAIAAIAAgjIAKAAIAQAAQAQACAIANQAHALAAAOQAAAPgJALQgIALgPACIgQAAgAmPAXIAFAAIANgBQAIgBAGgFQAKgJAAgRQAAgQgIgJQgGgHgKgBIgPgBIgDAAIAAAdIAVAAIAAAGIgVAAgAGSgOQAHgGABgFIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQABABAAADQAAAHgIAIgAlCgpQgEgFAAgGIAEAAQABAEADADQACACAEAAQAEAAACgCQADgDABgEIAEAAIgCAHQgDAIgJABQgGAAgEgFgAg3glIALgPIAKAAIgQAPg");
	this.shape.setTransform(41.325,11.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjUAwQgGgDAAgIQAAgFADgDQADgDAGgDQgGgCAAgEQAAgEADgCQACgBAGgCQgMgFAAgLQAAgKAHgFQAFgEAIAAIAIABIARgBIAAAFIgMAAQAGAFAAAJQAAAIgGADIgEADIgJADIgJADQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABIAJABIAMABIAGACQAIAFAAAJQAAAIgIAEQgGAFgLAAQgMgBgHgFgAjOAdQgGADAAAFQAAAFAFADQAFADAJAAQALAAAEgEQAEgDAAgEQAAgFgFgDQgFgCgJAAQgIAAgFACgAjLgSQgEADAAAHQAAAFAEADQAEADAFAAQAGAAAEgDQADgDAAgFQAAgGgDgDQgEgFgFAAQgGAAgEAEgAhHA1IAAgGQAIAAADgDIADgFIAEgKIgTg4IAGAAIARAwIARgwIAGAAIgSAzIgGAPIgDAHQgGAHgKAAIgCAAgAF1AyQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgDACgDQACgBADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQACADAAADQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgCACgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAFsAbQgFgEgBgHIgBgIIAAgjIAHAAIAAAjQAAAIACAEQADAEAHAAQAIABAEgHQADgEAAgJIAAggIAGAAIAAAnIAAAMIABAFIgGAAQgBgEAAgEQgDAFgDACQgDADgGgBQgHAAgFgDgAEsAYQgHgJAAgOQAAgOAHgIQAFgIAKAAQALAAAFALIAAghIAHAAIAAA/QAAANABAEIgHAAIgBgHIAAgBQgDAFgDACQgEADgGgBQgJAAgGgGgAExgRQgFAGAAAMQAAALAFAIQAEAEAGAAQAHAAAEgEQAFgIAAgLQAAgMgFgGQgEgGgGAAQgHAAgEAGgAB2AbQgFgFAAgIQAAgMANgEQAIgDANgCIAAgDQAAgGgCgDQgDgDgHgBQgMAAgCAKIgGAAQAAgGAEgEQAGgFAKgBQAIABAFAEQAEACAAAEIABAMIAAAYQAAAHACAEIgGAAIgCgIQgFAJgMAAQgHAAgFgDgACBACQgKAEAAAIQAAAEADADQAEADAFAAQAJAAAEgGQADgFAAgKIAAgFQgMACgGACgAlJAbQgFgFAAgIQAAgMANgEQAIgDANgCIAAgDQAAgGgCgDQgDgDgHgBQgMAAgCAKIgGAAQAAgGAEgEQAGgFAKgBQAIABAFAEQAEACAAAEIABAMIAAAYQAAAHACAEIgGAAIgCgIQgFAJgMAAQgHAAgFgDgAk+ACQgKAEAAAIQAAAEADADQAEADAFAAQAJAAAEgGQADgFAAgKIAAgFQgMACgGACgAAWAcQgCgDAAgGIABgpIgJAAIAAgFIAJAAIAAgQIAGAAIAAAQIAOAAIAAAFIgOAAIgBAfIAAAGQAAAGABABQACACAEAAQAEAAAEgCIAAAHIgJABQgHAAgDgCgADuAdIAAgiIAAgJIgBgEQgDgEgHgBQgJABgEAGQgCAEAAAIIAAAhIgGAAIAAghQAAgKgBgDQgDgFgIgBQgIAAgEAHQgDAEAAAIIAAAhIgGAAIAAgoIAAgKIgBgGIAGAAIABAIQAFgKALAAQAGAAAEADQAEACACAGQAFgLAMAAQAKABAEAGIACAGIABALIAAAigABaAdIAAggIAAgJIgCgFQgDgFgHgBQgJAAgEAIQgDAEAAAJIAAAfIgGAAIAAhQIAGAAIAAAfQADgEAEgCQAEgCAFgBQALAAAFAIIACAGIAAAMIAAAggAhbAdIgZgeIAZgaIAHAAIgYAZIAaAfgAh7AdIAAhQIAGAAIAABQgAjvAdIAAggIAAgJIgBgFQgDgFgIgBQgJABgEAGQgEAFAAAIIAAAgIgGAAIAAglIAAgNIgBgGIAGAAQABADAAAGQAGgLAMAAQAGAAAEADQAEACACAGIABAEIAAALIAAAggAmWAdIAAgmIgIAAIAAgGIAIAAIAAgjIAKAAIAQAAQAQACAIANQAHALAAAOQAAAPgJALQgIALgPACIgQAAgAmPAXIAFAAIANgBQAIgBAGgFQAKgJAAgRQAAgQgIgJQgGgHgKgBIgPgBIgDAAIAAAdIAVAAIAAAGIgVAAgAGSgOQAHgGABgFIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQABABAAADQAAAHgIAIgAlCgpQgEgFAAgGIAEAAQABAEADADQACACAEAAQAEAAACgCQADgDABgEIAEAAIgCAHQgDAIgJABQgGAAgEgFgAg3glIALgPIAKAAIgQAPg");
	this.shape_1.setTransform(41.325,11.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A7EBE").s().p("ApSB5IAAjxISlAAIAADxg");
	this.shape_2.setTransform(39.625,11.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-0.9,119.1,24.099999999999998);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqBBpIAAjRIUDAAIAADRg");
	mask.setTransform(62.1869,-7);

	// Layer_1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(1,-15,0.295,0.295);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-15,121.3,18.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsqB7IAAj1IZVAAIAAD1g");
	mask.setTransform(183.15,64.75);

	// Layer_1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(104,21,0.38,0.38);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104,52.5,156.2,22.099999999999994);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(334.65,86.25,0.4,0.4,0,0,0,334.7,86.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:334.6,scaleX:1.1,scaleY:1.1,x:334.6,y:86.2,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(525));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.4,-43.7,1067,275);


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
p.nominalBounds = new cjs.Rectangle(-19.9,-0.9,119.1,24.099999999999998);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.4,7.6,1,1,0,0,0,43.4,7.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14,cjs.Ease.get(1)).wait(1951));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-0.9,119.1,24.099999999999998);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Symbol10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71.4,186.45,1,1,0,0,0,120.6,10.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:156.4,alpha:1},8,cjs.Ease.quadOut).wait(107).to({startPosition:0},0).to({_off:true},1).wait(4178));

	// Layer_4
	this.instance_1 = new lib.Symbol8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(211,116.9,1,1,0,0,0,66.5,13.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:128,alpha:1},8,cjs.Ease.quadOut).wait(107).to({startPosition:0},0).to({_off:true},1).wait(4178));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,138.2,452.9,41.10000000000002);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_134 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(134).call(this.frame_134).wait(1));

	// cta copy
	this.instance = new lib.Symbol11copy();
	this.instance.parent = this;
	this.instance.setTransform(488,202.25,0.94,0.94,0,0,0,43.6,7.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).wait(67));

	// cta
	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(488,202.35,0.94,0.94,0,0,0,43.6,7.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({_off:true},27).wait(67));

	// Layer_6
	this.instance_2 = new lib.Symbol13("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(487.05,38.25,1.3,1.3,0,0,0,103.9,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135));

	// Layer_9
	this.instance_3 = new lib.Symbol14("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(475.6,118.2,1,1,0,0,0,334.6,86.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(128));

	// Layer_5
	this.instance_4 = new lib.Symbol5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(371.8,55.6,1,1,0,0,0,62.8,63.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(116));

	// Layer_8
	this.instance_5 = new lib.Symbol17("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-11.7,1067,275);


// stage content:
(lib._970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,121.5,485,138.89999999999998);
// library properties:
lib.properties = {
	id: 'CC7D37763753984998DC0DE70763E649',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1693378142357", id:"bg"},
		{src:"images/light.png?1693378142357", id:"light"},
		{src:"images/logo.png?1693378142357", id:"logo"},
		{src:"images/tagline.png?1693378142357", id:"tagline"},
		{src:"images/text.png?1693378142358", id:"text"}
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
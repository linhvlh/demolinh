(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1071,520);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1100,500);


(lib.logomec = function() {
	this.initialize(img.logomec);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,886,102);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


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
	this.instance.setTransform(-230,22,0.087,0.087);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:true},1).wait(978));

	// Layer_1
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(0,-1,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:true},1).wait(978));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-1,262,32);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AEwAyIAAgHQAHAAAEgDQADgCACgGIABgFIgSg2IAIAAIAPAsIAQgsIAIAAIgSAyQgEAMgDADQgFAMgOAAIgCAAgADJAtQgGgDAAgIQAAgGAFgEIAHgDQgGgCAAgEQAAgEAEgDIAGgCQgLgEAAgLQAAgJAGgEQAGgGAIAAQAEABAEABIARgBIAAAHIgLgBQAFAEAAAJQAAAIgGADQgDADgJACIgJACQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQABAAABAAIAIABIALACQANADAAALQAAAJgHAFQgHADgKAAQgMAAgHgFgADQAaQgFAEAAAEQAAAEAEADQAFADAIAAQAJAAAEgDQAEgDAAgEQAAgKgSAAQgHAAgEACgADUgSQgFAEAAAFQAAAFAEADQADADAFAAQAGgBADgCQADgCAAgGQAAgFgDgDQgDgDgGgBQgEAAgDADgAg4AyIAAg9IgBgKIAAgGIAIAAIABAIQAFgKAKAAQAHAAAGAHQAIAHAAAPQAAAPgHAIQgGAGgHAAQgLgBgFgIIAAAegAgrgRQgFAIAAAJQAAAKAEAGQAEAFAHAAQAFAAADgEQAFgGAAgLQAAgLgFgGQgDgEgGAAQgGAAgDAEgAECAYQgFgEAAgHQAAgNAMgCQAHgDAOgDIAAgCQAAgGgCgCQgDgDgHAAQgKAAgBAJIgJAAQABgIAEgCQAGgHAKAAQAIAAAGAFQAEADAAAHIABAHIAAAUIABANIgIAAIgBgGQgFAIgLABQgHgBgFgEgAEMADQgHADAAAGQAAAFADACQADACAEABQAJgBADgGQADgEAAgIIAAgFQgMACgGADgAA+AYQgGgEAAgHQAAgNANgCIAUgGIAAgCQAAgGgCgCQgCgDgHAAQgKAAgCAJIgIAAQABgIAEgCQAFgHAKAAQAJAAAEAFQAFADABAHIAAAHIAAAUIABANIgHAAIgCgGQgEAIgLABQgIgBgEgEgABIADQgIADAAAGQAAAFAEACQACACAFABQAIgBAEgGQACgEAAgIIAAgFQgMACgFADgAjhAYQgGgEAAgHQAAgNANgCQAHgDANgDIAAgCQAAgGgBgCQgDgDgHAAQgLAAgBAJIgIAAQABgIAEgCQAFgHALAAQAIAAAFAFQAFADAAAHIAAAHIAAAUQAAAKACADIgIAAIgBgGQgFAIgLABQgIgBgEgEgAjXADQgIADAAAGQAAAFADACQADACAFABQAIgBAEgGQACgEAAgIIAAgFQgMACgFADgACwAaIAAgdQAAgJgCgDQgCgGgHAAQgIAAgEAHQgDAEAAAIIAAAcIgIAAIAAgiIAAgNIgBgGIAIAAQABAEAAAEQAFgKALAAQAIAAAEAFQAEAEABAGIABALIAAAdgAAiAaIAAgdQAAgJgBgDQgDgGgHAAQgHAAgEAHQgDAEAAAIIAAAcIgIAAIAAhLIAIAAIAAAdQAGgJAJAAQAHAAAEADQAFAEACAGIAAANIAAAdgAhtAaIAAgfIgBgHQgBgJgJAAQgIABgDAFQgCADAAAIIAAAeIgIAAIAAgeQAAgKgCgCQgCgEgHgBIgGABIgFAFQgCAEAAAHIAAAeIgIAAIAAgkIAAgLIgBgGIAHAAQACAEAAAEQAFgKALAAQALAAADAKQAGgKALAAQAKABAEAHQACADAAAFIAAAIIAAAfgAj8AaIAAgdQAAgJgCgDQgDgGgHAAQgHAAgEAHQgDAEAAAIIAAAcIgIAAIAAhLIAIAAIAAAdQAGgJAKAAQAGAAAEADQAFAEACAGIAAANIAAAdgAkzAaIghgmIAggkIAKAAIgfAkIAiAmgAldAaIAAhKIAJAAIAAAkIAAAmgAlUgMgABIgjIAKgNIAIAAIgNANgAjXgjIAJgNIAJAAIgMANg");
	this.shape.setTransform(41.925,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AmpBoIAAjPINTAAIAADPg");
	this.shape_1.setTransform(41.9,7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-2.7,85.3,20.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(118.85,13.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(61.9,11.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,5.3,119.7,12.599999999999998);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.setTransform(0,0,0.275,0.275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.5,137.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg1();
	this.instance.setTransform(0,0,0.315,0.315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,337.4,163.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQ7BSIAAhZIgBgRIgBgHIAMAAQABAEAAAIQAIgPAPAAQALAAAIAIQAMAMAAAWQAAAWgLAMQgHAIgMAAQgPAAgJgNIAAAtgAROgQQgIAJAAAPQAAAPAHAJQAGAIAJAAQAJAAAFgGQAHgKAAgPQgBgRgHgJQgFgGgJAAQgIAAgFAHgAlNBSIAAhZIAAgRIgBgHIAMAAQABAEAAAIQAJgPANAAQAMAAAIAIQANAMAAAWQAAAWgMAMQgIAIgMAAQgOAAgIgNIAAAtgAk5gQQgIAJAAAPQAAAPAHAJQAGAIAJAAQAIAAAGgGQAGgKAAgPQAAgRgHgJQgFgGgJAAQgJAAgEAHgAGIBMQgDgDABgDQgBgDADgCQACgDAEAAQADAAACADQACACAAADQAAADgCADQgCACgDAAQgEAAgCgCgArkBMQgCgDAAgDQAAgDACgCQADgDAEAAQADAAACADQACACAAADQAAADgDADQgCACgCAAQgEAAgDgCgATqAuQgHgGgCgKIgBgNIAAgwIAMAAIAAAwQAAAMADAEQAEAHAJAAQALAAAGgJQAEgGAAgMIAAgsIALAAIAAA3IAAANIACALIgLAAIgCgLQgDAGgDADQgHAEgJAAQgKAAgHgEgAKgAkQgOgQAAgbQAAgfAQgQQAMgMATAAQAIAAAJADQAHAEAFAGQAGAIACAMIgMAAQgFgWgVAAQgPAAgIAMQgKANAAAXQAAAWALAOQAIAKAPAAQAQAAAGgNQAEgHABgJIAMAAQgBAOgHAKQgJAQgWAAQgUAAgNgOgAInAuQgJgGgBgKIgBgNIAAgwIAMAAIAAAwQAAAMACAEQAFAHAKAAQAKAAAGgJQADgGABgMIAAgsIALAAIAAAGIABgBIAEgEIACgFIgBAAIgEgCQgCgDABgEQAAgDAEgCQACgBADABQAEAAACAEQABADgBAFQgDAJgNAKIAAAqIAAAIIAAAFIACALIgMAAIgBgFIAAgGQgDAGgEADQgFAEgKAAQgKAAgGgEgAF4AtQgIgGAAgMQAAgRASgHQALgDAUgDIAAgEQAAgIgDgDQgEgFgKAAQgPAAgDANIgLAAQABgKAGgGQAIgIAPAAQAMAAAIAGQAGAFABAKIAAALIAAAdQAAAPACAGIgLAAIgBgLQgIANgQAAQgLAAgHgFgAGHALQgLAGABAJQAAAHADAEQAFADAHAAQAMAAAFgJQAEgGAAgMIAAgIQgRADgJADgAEzAtQgDgDgDgFIAAACQgBAFgBAEIgMAAQACgFAAgRIAAhbIAMAAIAAAtQAJgOAOAAQAMAAAIAJQALAMAAAVQAAAXgMAMQgJAHgMAAQgIAAgHgFgAE0gPQgIAJABAOQgBAPAIAKQAFAHAJAAQAIAAAFgGQAIgJAAgRQAAgPgHgJQgFgHgJAAQgJAAgFAIgAC1ApQgMgLgBgWQAAgVANgMQAJgJANAAQAQAAAIAMQAEAHAAAKIgLAAQgCgIgCgEQgEgGgKAAQgJAAgGAHQgGAJAAAPQAAATAJAJQAFAEAIAAQAQAAABgTIAMAAQgBAMgFAIQgIAJgPAAQgOAAgIgJgABhAoQgLgMAAgUQAAgTALgNQAKgKAOAAQANAAAIAIIAEgEIACgFIgBAAIgDgCQgDgDABgEQABgDADgCQADgBACABQAEAAACAEQACADgCAFIgDAHQgDAEgEAEQAKAMAAASQAAAUgMAMQgKAKgOAAQgOAAgKgKgABpgPQgGAJgBAOQABAPAGAJQAHAIAJAAQAKAAAGgIQAHgJAAgPQAAgOgHgJQgGgIgKAAQgJAAgHAIgAAUAuQgJgGgBgKIgBgNIAAgwIAMAAIAAAwQAAAMACAEQAFAHAKAAQAKAAAGgJQADgGABgMIAAgsIALAAIAAAGIABgBIAEgEIACgFIgBAAIgEgCQgCgDABgEQAAgDAEgCQACgBADABQAEAAACAEQABADgBAFQgDAJgNAKIAAAqIAAAIIAAAFIACALIgMAAIgBgFIAAgGQgDAGgEADQgFAEgKAAQgKAAgGgEgAr1AoQgMgMAAgUQAAgTAMgNQAJgKAPAAQAMAAAJAIIAEgEIACgFIgBAAIgEgCQgDgDABgEQABgDAEgCQADgBACABQAEAAACAEQABADgBAFIgEAHQgCAEgFAEQAKAMAAASQAAAUgLAMQgKAKgOAAQgPAAgJgKgArtgPQgHAJAAAOQAAAPAHAJQAGAIAKAAQAJAAAHgIQAGgJAAgPQAAgOgGgJQgGgIgKAAQgKAAgGAIgAvWAoQgMgMAAgUQAAgUAMgMQAJgKAPAAQAOAAAKAKQALAMAAAUQAAAUgLAMQgKAKgOAAQgPAAgJgKgAvOgPQgHAJAAAOQAAAPAHAJQAGAIAKAAQAJAAAHgIQAGgJ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");
	this.shape.setTransform(134.1,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,4.1,262,16.4);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG4A3QgJgHABgOIALAAQACARARABQAHgBAEgDQAGgDAAgIQAAgFgFgEQgDgCgPgEQgNgEgEgFQgEgFgBgIQABgKAIgHQAIgFALAAQAQgBAIALQAEAFAAAIIgLAAQgBgGgEgDQgEgFgIABQgHAAgEADQgFAEAAAEQAAAEAEAEQADACAMAEQAMADAEACQAKAGAAAMQAAALgHAHQgIAHgOAAQgOAAgIgGgAFxA3QgJgHAAgOIAMAAQABARARABQAIgBAEgDQAFgDABgIQAAgFgGgEQgCgCgQgEQgMgEgEgFQgFgFAAgIQAAgKAJgHQAHgFALAAQARgBAHALQAEAFAAAIIgLAAQgBgGgDgDQgEgFgJABQgGAAgFADQgEAEAAAEQAAAEAEAEQADACALAEQAMADAFACQAJAGAAAMQAAALgGAHQgJAHgOAAQgOAAgHgGgAEjA4QgJgGAAgMQAAgRATgHQAKgDAVgEIAAgDQgBgIgDgDQgDgFgKAAQgQAAgCAMIgMAAQACgJAFgGQAJgIAPABQAMAAAHAFQAGAFACAKIAAAKIAAAeQAAAPACAHIgLAAIgCgLQgHANgRgBQgLABgGgGgAEyAXQgLAFAAAJQAAAHAEAEQAFADAGABQAMAAAGgKQAEgFAAgNIAAgIQgSADgIAEgACkAvQgPgQAAgcQAAgeAQgQQANgMASAAQAJAAAIADQAIAEAFAGQAGAIACANIgNAAQgEgXgWAAQgOABgIAMQgKAMAAAWQAAAYAKANQAJALAOAAQAQAAAHgOQADgHACgJIAMAAQgCAOgGAKQgKAQgVAAQgVABgMgPgAAUAvQgOgQAAgcQAAgeAQgQQANgMASAAQAJAAAIADQAIAEAFAGQAGAIACANIgNAAQgFgXgUAAQgPABgIAMQgKAMAAAWQAAAYAKANQAJALAOAAQAQAAAHgOQAEgHABgJIAMAAQgCAOgGAKQgKAQgVAAQgVABgNgPgAhkA5QgIgGgCgKIgBgNIAAgwIANAAIAAAwQAAAMACAEQAFAHAJAAQALAAAFgJQAEgFAAgMIAAgtIALAAIAAA3IAAAOIACALIgLAAIgCgLQgCAFgEADQgGAEgKAAQgJAAgHgEgAi2A5QgHgGgCgKIgBgNIAAgwIAMAAIAAAwQAAANADADQAEAHAJAAQALAAAGgJQAEgFAAgMIAAgtIALAAIAAAGIABgBIADgEIADgFIgBAAIgEgCQgDgDACgEQABgDACgBQAEgCACABQAEABACADQABADgBAFQgDAKgNAJIAAAqIAAAIIAAAGIACALIgLAAIgCgGIAAgFQgDAFgDADQgHAEgJAAQgKAAgHgEgAmGA0QgLgNAAgUQAAgTALgMQAKgKAOAAQANgBAIAIIAEgEIACgFIgBAAIgDgCQgDgDABgEQABgDADgBQADgCACABQAEABACADQACADgCAFIgDAIQgDAEgEAEQAKAKAAATQAAAUgMANQgKAKgOgBQgOABgKgKgAl+gEQgGAIgBAPQABAPAGAJQAHAJAJAAQAKAAAGgJQAHgJAAgPQAAgPgHgIQgGgIgKAAQgJAAgHAIgAnjAxQgGgJgBgPIANAAQABALAEAGQAHAIANAAQALAAAGgGQAHgFAAgIQAAgJgHgGQgEgDgOgGQgRgHgFgEQgLgJAAgNQAAgOALgHQAKgIANAAQATAAAJANQAFAHABALIgMAAQgBgIgFgFQgFgGgMgBQgIAAgFAFQgIAFAAAHQAAAIAIAEIATALQANAEAFAEQAOAIAAARQAAAQgNAJQgJAIgPgBQgVABgKgNgAD9A8IAAhyIAMAAIAABygAjhA8IAAguQAAgOgDgDQgDgJgKABQgMAAgFAJQgEAFgBAMIAAAtIgLAAIAAhyIALAAIAAAsQAJgMAPAAQAJAAAHAEQAGAEADAKIABARIAAAvgABhAWIAAgKIAvAAIAAAKgAihglQgGgDgCAAQgFAAgBAGIgFgBQACgNAJAAQADgBAGAEQAFADADAAQAEAAABgGIAGABQgBAFgCAEQgDAEgFAAQgEABgFgEgAlxgiIABgEIACgEIACgCIACgCIACgBIABgDIAAgCIgCgCIgFgBQgEAAgBABQgCACgBAEIgEAAIABgFIACgDQADgFAHAAQAFAAAEADIACADIABAFIAAAEIgCACIgCACIgDADIgDACIgBADg");
	this.shape.setTransform(51.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,4.4,98.19999999999999,12.299999999999999);


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


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBBrIAAjVIODAAIAADVg");
	mask.setTransform(41.175,12);

	// Layer_3
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(-25.6,9.65,1,1,0,0,0,24.1,34.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:111.8},23,cjs.Ease.get(1)).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,0,90,22.7);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.setTransform(43.35,7.65,0.4,0.4,0,0,0,43.4,7.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.6,scaleX:1.1,scaleY:1.1,x:43.4,y:7.6,alpha:1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(58).to({startPosition:0},0).to({_off:true},1).wait(1885));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-3.7,93.8,22.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(27.3,11.8,1,1,0,0,0,62.3,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:63.8,alpha:1},11,cjs.Ease.get(1)).to({x:62.3},9,cjs.Ease.get(1)).wait(205).to({startPosition:0},0).to({_off:true},1).wait(964));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,5.3,156.2,12.599999999999998);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(61.5,11.8,1,1,0,0,0,96.5,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:97.25,alpha:1},11,cjs.Ease.get(1)).to({x:96.5},9,cjs.Ease.get(1)).wait(78).to({startPosition:0},0).to({_off:true},1).wait(813));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,4.1,297.79999999999995,36.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(16.9,11.8,1,1,0,0,0,51.9,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:52.9,alpha:1},11,cjs.Ease.get(1)).to({x:51.9},9,cjs.Ease.get(1)).wait(209).to({startPosition:0},0).to({_off:true},1).wait(465));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,4.4,172,12.299999999999999);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4bJhIAAzBMAw2AAAIAATBg");
	this.shape.setTransform(150.05,192.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},226).wait(4074));

	// Layer_2
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(151.2,67.8,1,1,0,0,0,151.2,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({startPosition:0},0).to({_off:true},1).wait(4070));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-1,312.7,254.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4AJnIAAzNMAwCAAAIAATNg");
	this.shape.setTransform(150.05,193.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(111).to({_off:true},1).wait(4188));

	// Layer_1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.setTransform(146.65,59.95,1.3,1.3,0,0,0,168.6,81.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:168.7,scaleX:1,scaleY:1,x:146.7,y:59.9,alpha:1},17,cjs.Ease.get(1)).wait(94).to({startPosition:0},0).to({_off:true},1).wait(115).to({_off:false},0).wait(4073));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-46.5,438.5,301.3);


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
	this.instance.setTransform(261.5,218.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(230));

	// Layer_12
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(62.4,197.1,1,1,0,0,0,42.4,10.1);
	this.instance_1.alpha = 0.8008;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(195).to({_off:false},0).wait(35));

	// cta
	this.instance_2 = new lib.Symbol11("synched",0);
	this.instance_2.setTransform(62.55,199.1,1.05,1.05,0,0,0,43.4,7.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).wait(80));

	// Layer_6
	this.instance_3 = new lib.Symbol15("synched",0);
	this.instance_3.setTransform(125,125,1,1,0,0,0,125,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({_off:false},0).wait(112));

	// Layer_10
	this.instance_4 = new lib.Symbol9("synched",0);
	this.instance_4.setTransform(76.3,170.8,1,1,0,0,0,62.3,11.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(111).to({startPosition:111},0).to({x:95.8,alpha:0,startPosition:127},16,cjs.Ease.get(1)).wait(99));

	// Layer_5
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(65.9,151.8,1,1,0,0,0,51.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(230));

	// Layer_7
	this.instance_6 = new lib.Symbol5("synched",0);
	this.instance_6.setTransform(109.5,170.8,1,1,0,0,0,96.5,11.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(131).to({_off:false},0).wait(99));

	// Layer_8
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118).to({_off:false},0).wait(112));

	// Layer_8 copy
	this.instance_8 = new lib.Symbol1copy("synched",0);
	this.instance_8.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(230));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-46.5,438.5,301.3);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.main();
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.4,124.1,174.99999999999997,129.6);
// library properties:
lib.properties = {
	id: 'CC7D37763753984998DC0DE70763E649',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1699542364249", id:"bg1"},
		{src:"images/bg2.jpg?1699542364249", id:"bg2"},
		{src:"images/logomec.png?1699542364249", id:"logomec"},
		{src:"images/logo.png?1699542364249", id:"logo"}
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
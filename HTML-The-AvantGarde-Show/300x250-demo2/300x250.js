(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,292);


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
p.nominalBounds = new cjs.Rectangle(0,0,411,134);// helper functions:

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


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tagline();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,669.3,172.5), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tagline();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,669.3,172.5);


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


(lib.shape74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAGIgKgTIAEgIIAegDQAYAAAGAIIALAQIAEAMQgMANgyAAQAAgIgHgLg");
	this.shape.setTransform(229.975,56.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(226,53.8,8,4.900000000000006);


(lib.shape73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgdUAgwQAAgWARgMQATgMATAUQgMAlgJAOIgeAAQgBAFgBAAQgCAAAAgegASjV/QgtgcAPgnIBIBMIgIABQgSAAgQgKgAb5oAIgIgiIBHgCIAZAbIAEAVgEAY7ggNQgLgDAAgbQAAgbATgFIAggCQAbAKAHAYQgIAXgaALg");
	this.shape.setTransform(-32.325,83.4679);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-129.1,375.4,425.20000000000005);


(lib.shape72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgYyAmbIAAhFIBEAAIAABFgAOlaeIgNglIAHgSQAFgIAbAAQAWAAAfBIQgDAAgIAIQgHAIgCAGQgsgHgPgYgAMoXqQAIgIASAAIAOAVIgHAGQgIAGABAFQgSgEgIgagAUDC1IAAgtIB3AAIAAAtgAXyCIQAAgNAXgVQAjAFAHAYQgIANgRAJQgegFgKgMgARmwoQALgcAvgbQARgYAAArQAAAZglASQgPAHgJAAQgNAAgBgOgAUoyfIAngjIAnAQIgIAXgEABYgi8IAygKIggA+IgfAEgEAEEglnIAAgzIAzAAIAAAzg");
	this.shape.setTransform(-50.35,17.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.1,-228.2,317.5,491.9);


(lib.shape71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgVbAn5IAAguIAuAAIAAAugAK/XrQBNALA9A1QBAA3AyBDgAQmF7QAHgDAGgCQCWgnCUA/gAOHp2QCNh5CHAWIkcBtgADZ7sIiaEKQgKiUCkh2gEAEVgn4IAmALIiPBfg");
	this.shape.setTransform(-69.5,-7.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.7,-263,274.5,510.6);


(lib.shape70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgQgAmMQA9BegGB1QgCA1gIAtgEAOwAmgQgpgWgZgoIABglICHBsQgLADgLAAQgYAAgYgMgEgb2AgtQAAgcAQgPQALgKAOAAQAGAGAHgCQADACAAAZIgEAgQgIAAgNANIgbADQgFAAAAgagAAYcoQAGACAGADQCfBhAWCHgABdWvQBygKBaB3QATAYAVAWgAI6OUQAIgKAHAAQCeADB3BogAJRFPICJAfIkiAFQA0g/BlAbgAbFAKQiihqjDAGQDYhrC/DaIgJABQgXAAgSgMgAI7l+QCCg4CLASIkxA/QAPgRAVgIgAEbpPQBXhxCqgRIkACEgAoS2pQAViPB+hoIiSD6gEgGighqQgRAKggADgEgGUgiOIgEgdQAQAggLATgEgEzglVIAZATQgCglgfgUQhag2gwhVIAdg2IAVAVIgiAcQCfBRASCbQgYgfgXgXgEgJMglWIgDgCQA1hSBjgOIBGA1Qhmg4hhBiIAPAQgEgFQgoMIA8AsIgShDQBBAqggAsgEgGSgqXIA4gpIBlBbQggAjAFgsIgjgaIhIANIBOBSQhagbgLhTg");
	this.shape.setTransform(-16.5,-6.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.8,-281.6,356.6,550.6);


(lib.shape69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgNaAguQCJEXggFNIgEAoQhwk7ALlRgEgFgAksQAGADAFAGQBnB0AMCegEAPfAgJIhxBoIglgQIgIgTQA6gqBzg/QALgGANgCIhlC6IAygIICpixIg6B5QhGgHAPAvIiDAxIgbAcgAgtZBQEfCzCZE2IgCABQkGjQiwkagALVfgQAGgHgEAJgA2ceVIAAgOQggjHCxhqQAJAcgSAYQhfB9gKCagAitSmIJHGSIgHAAQlDiej9j0gAFyNVIADgBQFnAyDwDIQlShIkIixgAMaITIAMgEQCYghCQBEgAAeHOILBAJQAHAbgrAAQhvAKhrAAQjpAAjagugAKoDUQDSkJEYChIAbAVQklAGjsBcgAV8CIQDzh2EMAhIlNA7IgvAlgAErhvQFCijE+AlQgGAJgKADQk2Buk8AJgAIundQk1DVlGBLIJ7kggAm4w8QhtgRhHBQIARC9QhzkYEngHIBlitQlLmBFyinIAMAUQklDmD0EsIAngtIggBfIARCMIhrAUQhmDXiSCCgAl/xfIA/AFIAEh9QgZAwgqBIgANQ1mQBtijDAhaIktEBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAgEgAcgn6IgKAiQg0DYhhBoQAki+B7ikgEgcxgk2QhYivASjTIBJGEg");
	this.shape.setTransform(-42.8701,-21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.4,-296.4,383.1,549.0999999999999);


(lib.shape68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgWfAmbQAeBsgoBtQgUA0gVAmgEgEKAjSQBNBBAbBlQAQA8AIA7gEgKnAmMQiOljAalRIB3K2gAI4ZqIg1hFIA7ATQgXiuiqgmQDvgIAED+ICECQIiRhdIgkB0QBbBxCdAfIgMAbIgGABQlngJB6k6gAFhclQk3joifkeIHdIGgA0MXoQgWi2BXilQAdCmhbC2gAk2OkIgXASQmaigjwkOQB9EciGEhQjEjyA7j+QAbgIAPgfQAYg0A8gGQghgbgYgjQgLgPAcADQMEGHKSJcQl+jPk7kagADZKdIKOD2IAAACQlxhIkdiwgANvG5IANgEQC5gnBoBXgAtTFlIARgtQIPg4IQA/QDpAZDkAxIjWASQkjhEkkAUQmcAlmeASgAndFPIBfAAIhugQgAkiiWIAdAIIgmBMIqhEXgAjiBiICJhxQAUgBAOAKQHrFWGVkaIgfgEQHbh6IWAWIAAAtQmVBQl1gkQlLCqlhAAQkdAAkqhvgAx2DCQhdifgcjAQC1A3g0ErgAwNg9ICLjzQgOgjgDgkQgUjnDggzICjkNQgXgygFg0QgbkjD4BcIBMhLIAIAeQgXArAYgBIADgbIAaBRIhPABIi0EjQAKAWAEAXQAOBHhEAlIATiGIjrEYIAshGQkJBdBYEEQAmg2AXg/QBGi/CahrImHKygAnWyzQiTBWBVCnICSj4QgZgQgXAAQgSAAgSALgAMvkxQgGAKgNAEQlWCClCAKgAkZi4QGfjiGChlQl6DpmzBkgAHcxrQE7lxGHiyQlBFImBDfgEAAfgoSIjGIBQANAUgMAWQiqEtAmE5QiyqAH7oRgA6X9cQiknDAomvQB9G5ACG8g");
	this.shape.setTransform(-51.4422,-12.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.4,-289.5,363.9,553.3);


(lib.shape67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aypc4IAPglQApFMibE4QgUk6B3klgAk1ZkQDQDvA7FAIAGApQjCkShPlGgAt1LaIAeAdIgFAtIAnAGQE8I5hFKZgArUUpIgEgMQgGALAKABgAIVUxIk4gRIA5BBIA2A2QAuAsgoAVQpGn0o2n+IgqCpIgpAHQgYgbgUgeIhiiaQgohAAQg4IgOgeIBLhqIhEhDIgUABQglifgbigQgZiTBFhpIB8FMQEJnNEOmEQhrIEk1HVQH9kCHXjMQgQBRhPAzQiOBgiYBVIDHg7IgNgrIACgCQGTiSGcgvIptD+QDOg0CyCLIRohiQmrCknfgqQhggHhfAFIAjAWIljgTQkJgYjSDIQBUiQCRhSIoRDVIFpAnIG7ArQglA4hQAMQj/AkkCAIIGRBzIAMgrIAEgBQG1BhFXDJQrpilrni/IGXExIBEADQH3AhjZHwIAiAlIEaAWIhkh8IDTB8QB0gPBcA9QBVA3gdBhIgKAQIgHAJIAwBFgAAFQuIAEgLQDCk8kthGIiEgLIEfDtQgWASgegLQkZhej7ikIEZD6IAbgbgAi5POIgJgIQABAOAIgGgABfHBIgLgEQAFALAGgHgAuNAnIAXgHIAqhugAgDjHIADAAIAUgGIgXAGgAwqJQIAmAMQAQAUgEAZIgSBnQgXCFg/BCQg+jjB0iEgAIWDbQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAABQFpgyEcCBQhFAFhCAAQkQAAjxhTgAO34jQAHAHgGAGQmsGtoKE0gEgAngkWQAKAEgCAHQi9JClFH5gEgZVgmWQAJgBAAADQCnJHADJhg");
	this.shape.setTransform(-67.15,2.4639);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.3,-243,324.3,491);


(lib.shape66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgSGAihQgCm9CdmoQguHHhrGggAhqfTQjul8hpmwIAUAqQDYGGBvF9gAprY+QiZmgi+mTIgPAzQgSBSgygIQAmjmhbjXIgHgCQgbgMgKgfIgNgrQgGgXAEgaQAJgyAvgTIgggiQAQiQAFiPQAGi/gxisQgIgaARATQhRl0hykMQgXgzgNg3QiBoSgRnwQD4NvC0NlQANABAHALQB7DWAtDCIC2jzIAoAeIhZE3QH/itHohoQA8grATAoIAAAAQgNAwgvAVQi5BWifB9QFGiPEgBzIAbgEQIOhkHJAaQueDGtzBDQAZgag1APIgzAiIAyATQC6BDCwBZQDBBhCjA+IgDACQgzAig+gLQmZhFmShjQE0GpEpFhQgwAPgsghQmFkXlTlVQBqI6A/H7QglgKgNgmgAw4DlQgBALgDAHIASgFIAIgZIgCgEIAAgEQgSACgCASgA0nyzQAJgNgMgDgAhMMdIALAIQGHEJEKEpQl9jnkflTgAAaDiQHdgCGPBpIgDAFQg4ACg3AAQmEABl2hvgAnHitQIipOKuoVQA4gsA7gpQprK5rpIvgABuqnIAGgDIAVgTIgbAWgAq2l+IgBgfQALAaAOgmQCGlWAmkRIgCgEQC7pHEenFIqHazgAmWx8QgRA2AUg7g");
	this.shape.setTransform(-73.05,-6.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.4,-227.9,304.8,442.3);


(lib.shape63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.475)","rgba(255,255,255,0)"],[0,0.525,1],129.2,0,0,-0.8,0,130).s().p("AuQOQQl5l5AAoXQAAoVF5l7QF7l5IVAAQIXAAF5F5QF6F7AAIVQAAIXl6F5Ql5F6oXAAQoVAAl7l6g");
	this.shape.setTransform(129,129);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258,258);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(334.7,86.2,1,1,0,0,0,334.7,86.2);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19,cjs.Ease.get(1)).to({alpha:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,669.3,172.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(103.8,2,1,1,0,0,0,103.8,7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9,alpha:1},8,cjs.Ease.get(1)).to({y:7},5,cjs.Ease.get(1)).wait(427));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,207.6,21.1);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.4,7.6,1,1,0,0,0,43.4,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},4,cjs.Ease.get(1)).to({regX:43.3,scaleX:1.0999,scaleY:1.0999,x:43.35},4,cjs.Ease.get(1)).to({regX:43.4,scaleX:1,scaleY:1,x:43.4},4,cjs.Ease.get(1)).to({scaleX:1.1,scaleY:1.1},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-9,190.5,38.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.4,7.55,0.7,0.7,0,0,0,43.4,7.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.6,scaleX:1.1,scaleY:1.1,y:7.6,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(1951));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-1.8,131,26.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AojB7IAAj1IRHAAIAAD1g");
	mask.setTransform(89.775,143.9);

	// Layer_6
	this.instance = new lib.Symbol10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(241.4,186.45,1,1,0,0,0,120.6,10.7);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:156.4,alpha:1},10,cjs.Ease.quadOut).wait(4286));

	// Layer_2
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.5,144.15,1,0.1,0,0,0,0,5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,alpha:1},8,cjs.Ease.get(1)).wait(4288));

	// Layer_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ao3CPIAAkdIRvAAIAAEdg");
	mask_1.setTransform(212.975,144.925);

	// Layer_4
	this.instance_2 = new lib.Symbol8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(61,116.9,1,1,0,0,0,66.5,13.3);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:128,alpha:1},10,cjs.Ease.quadOut).wait(4286));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.8,136.1,213.59999999999997,15.400000000000006);


(lib.Warcraft_300x500px_flasprite45_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape66("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.shape67("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.shape68("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.shape69("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.shape70("synched",0);
	this.instance_4.parent = this;

	this.instance_5 = new lib.shape71("synched",0);
	this.instance_5.parent = this;

	this.instance_6 = new lib.shape72("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.shape73("synched",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.shape74("synched",0);
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.4,-296.4,468.4,592.5);


(lib.sprite64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape63("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite64, new cjs.Rectangle(0,0,258,258), null);


(lib.sprite76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Warcraft_300x500px_flasprite45_35();
	this.instance.parent = this;
	this.instance.setTransform(136.95,48.4,0.1057,0.4821,87.9701);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Warcraft_300x500px_flasprite45_35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.2,12.1,0.1057,0.4821,-92.0299);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite76, new cjs.Rectangle(0.1,0.1,247,60.4), null);


(lib.sprite65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite64();
	this.instance.parent = this;
	this.instance.setTransform(0,4.85,1.2899,0.0223);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,262,262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.sprite64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.2899,0.0602);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite65, new cjs.Rectangle(0,0,332.8,15.6), null);


(lib.Warcraft_300x500px_flasprite47_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.sprite76();
	this.instance.parent = this;
	this.instance.setTransform(153.95,-23.35);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,5);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(4).to({alpha:0},1).wait(73));

	// Layer 1
	this.instance_1 = new lib.sprite65();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-348.65,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:684},5).to({_off:true},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.6,-29.3,1365.4,79);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Warcraft_300x500px_flasprite47_31();
	this.instance.parent = this;
	this.instance.setTransform(623.05,635.9,0.9002,0.7614,0,-7.8095,172.1888);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(106));

	// Layer 1
	this.instance_1 = new lib.Warcraft_300x500px_flasprite47_31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.95,456.25,0.9022,0.7631,63.0128);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.3,176,1052.9,469.6);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(223.8,-251.35,0.5,0.5,0,0,0,52.6,37.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(521));

	// Layer_1
	this.instance_1 = new lib.Symbol16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(334.75,86.3,2,2,0,0,0,334.7,86.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:334.6,regY:86.2,scaleX:0.95,scaleY:0.95,x:334.65,y:86.25,alpha:1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:334.6,y:86.2},7,cjs.Ease.get(1)).wait(525));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.6,-180.7,1338.5,439.4);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_198 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(198).call(this.frame_198).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(123,210,0.41,0.41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199));

	// cta copy
	this.instance_1 = new lib.Symbol11copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.75,180.6,0.73,0.73,0,0,0,43.5,7.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(140));

	// cta
	this.instance_2 = new lib.Symbol11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.75,180.6,0.73,0.73,0,0,0,43.5,7.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},16).wait(140));

	// Layer_6
	this.instance_3 = new lib.Symbol13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.15,54.05,1,1,0,0,0,103.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199));

	// Layer_3
	this.instance_4 = new lib.Symbol18("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(155.7,118.2,1,1,0,0,0,334.7,86.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).wait(156));

	// Layer_9
	this.instance_5 = new lib.Symbol14("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(155.6,118.2,1,1,0,0,0,334.6,86.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(190));

	// Layer_5
	this.instance_6 = new lib.Symbol5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(62.6,63.6,1,1,0,0,0,62.6,63.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).wait(178));

	// Layer_8
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.8571,0.8572);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513.6,-148.7,1338.5,439.4);


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
		{src:"images/bg.jpg?1693130221431", id:"bg"},
		{src:"images/logo.jpg?1693130221431", id:"logo"},
		{src:"images/tagline.png?1693130221431", id:"tagline"},
		{src:"images/text.png?1693130221431", id:"text"}
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
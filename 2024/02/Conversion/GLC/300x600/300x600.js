(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,800);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.xe = function() {
	this.initialize(img.xe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,582);


(lib.Symbol24copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C73A2B","#711D18"],[0,1],-0.3,-40.2,-0.3,39.7).s().p("AgWGQIAAsfIAtAAIAAMfg");
	this.shape.setTransform(234.325,46.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhxGiIgbg0IgRgiIgOgcIgUgmIjfmfIAAHQQAAAZAEAMQAFANAMAFQAOAGAbADIAAAWIgwgDIgegBIgdABIgsADIAAgWQAbgDANgGQAOgEAEgOQADgMAAgZIAAn0QgJgPgOgGQgOgGgZgCIAAgXIAhACIAfABIAcgBIAcgCID/HaIAAmEQABgYgFgNQgEgNgNgFQgOgGgagCIAAgXIAuAEIAeABIAggBIAqgEIAAAXQgbADgOAFQgMAFgEANQgEANAAAYIAAI5gAP4GLQgWgCgXABQgWgBgVACIg0AGIAAgWQAagCAOgGQAOgFAEgOQAFgMgBgZIgHnfIieIhIgPAAIidoiIgQHgQgBAYAFANQAEANAOAFQAOAGAbADIAAAWIgsgDIgggBIghABIgtADIAAgWIAJgBQAWgDALgFQALgFAEgNQAEgMACgZIAQnaQAAgegNgLQgNgLglgCIAAgYIAhADIAdABIAkgBIAqgEICKHYICInYIAvAEIAfABIAagBIAigDIAAAXQgbACgNAGQgOAFgEAMQgEANgBAZIAIHSQABAZADANQAFANANAEQAOAGAbADIAAAWIg2gGgAGOGLQgUgCgWABQgXgBgVACIgxAGIAAgWQAYgDAKgHQAMgGgBgMIgBgPIgDgSIgahoIisAAIgaBaQgGAQgCAMIgCATQAAANALAGQAMAHAaACIAAAWIgngDIghgBIggABIgnADIAAgWQAWgCAMgFQAMgFAIgOQAHgNAJgcICvo3ICeJCQAHAVAGALQAHAMANAEQANAFAXADIAAAWIgygGgAEOC5IhHkXIhTEXICaAAgAwtGPIAAg1QBChjAqhEQAqhDAYgvQAYguAJghQAJghgBgeQABgtgWgaQgWgbgkAAQgaAAgWAPQgWAQgNAcQgGAPgEAQQgEAQgCAaIgbAAQACglAGgaQAFgaALgVQAQgkAfgTQAggUApAAQA8ABAkAnQAlAnABBBQAAAggMAjQgLAigXAoIgbAsIgiA0IgwBJIhJBqIDpAAIgIBDgACWlCQgaghgFg+IAaAAQAKAkATASQATARAcAAQAcAAATgRQASgSALgkIAaAAQgFA/gbAgQgZAhgtABQgsgBgbghg");
	mask.setTransform(101.75,40.425);

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C73A2B","#711D18"],[0,1],-92.5,-99.8,92.4,99.6).s().p("A7Hj0IZX3hIc5fKI5YXhg");
	this.shape_1.setTransform(110,57.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("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");
	mask_1.setTransform(304.3,43.075);

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C73A2B","#711D18","#C73A2B"],[0.094,0.463,1],-49.2,-27.5,49,27.4).s().p("AshBNIJtq+IPWIlIptK+g");
	this.shape_2.setTransform(298.3,50.625);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F9DFB6","#FFFED7"],[0,1],-203.6,0,203.6,0).s().p("A/zJeIAAy7MA/nAAAIAAS7g");
	this.shape_3.setTransform(165.025,45.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiSHMQgGgFAAgJQAAgJAGgGQAGgGAKAAQAIAAAGAGQAGAGAAAJQAAAJgGAFQgGAGgIABQgKgBgGgGgACmGRIgNgYIgIgPIgGgNIgJgRIhli9IAADTQgBALADAGQABAGAGACQAGADAMABIAAAKIgVgBIgNgBIgOABIgTABIAAgKQALgBAGgDQAGgCACgGQACgGAAgLIAAjkQgEgHgHgCQgFgDgMgBIAAgKIAPABIAOAAIAMAAIANgBIB0DYIAAixQAAgLgBgGQgDgGgGgCQgGgDgMgBIAAgKIAVABIAOABIAOgBIATgBIAAAKQgMABgGADQgGACgBAGQgDAGABALIAAEDgAENF7QgWgSgMgiQgLghgBgvQABgtALghQAMghAVgTQAVgSAdAAQAQAAANAGQANAGALAMIANgYIAHAAIAABVIgKAAQgIglgOgRQgOgSgXABQggAAgQAiQgRAjAABEQAABCARAiQAQAiAfAAQAKAAAKgDQALgDAMgIIAAhLQAAgLgFgFQgFgEgQgCIAAgKIAWACIASABIASgBIAWgCIAAAKIgPADQgFACgCAFIgBANIAABHQgXAQgRAHQgSAHgSAAQgdAAgVgSgAguGHIgUgBIgUABIgWACIAAgKQALgBAEgDQAGgDgBgGIAAgHIgCgIIgLgvIhPAAIgMApIgDANIgBAIQAAAGAFADQAGADALABIAAAKIgRgBIgQgBIgOABIgSABIAAgKQAKgBAGgCQAFgCAEgHQADgGAEgNIBQkBIBIEGQACAKAEAFQADAGAGABQAFADALABIAAAKIgWgCgAhpEnIggiAIgmCAIBGAAgAk5GHIgTgBIgTABIgYACIAAgKQAMgBAGgDQAGgCABgGQACgGAAgLIAAjtIgSAAQgMAAgHAFQgHAEgFALQgFAMgFAVIgKAAIAKhCICXAAIAJBCIgJAAQgFgVgFgMQgFgLgHgEQgHgFgLAAIgTAAIAADtQgBALACAGQACAGAGACQAFADAMABIAAAKIgYgCgAigBAQgMgPgDgcIAMAAQAFAQAIAIQAJAIANAAQAMAAAJgIQAIgIAFgQIAMAAQgCAcgMAPQgMAPgUAAQgUAAgMgPgAj/hgQgPgHgMgNQgKgMgIgTQgHgTgFgYQgEgXAAgZQAAguALgiQALghAVgTQAVgSAcAAQAdAAAUASQAWATALAhQALAiAAAuQAAAbgEAYQgFAXgJAVQAKAWAKAKQAJAKAKAAIAAAMIgKAAQgJAAgHgCQgHgCgHgGQgHgFgJgLQgMANgOAGQgPAHgPAAQgRAAgQgHgAkKlUQgQAjAABAQAABDAPAkQAPAkAdABQAcgBAPgjQAPgjAAhBQAAhDgPgkQgPgkgcAAQgcAAgPAkgAgrhjQgRgKgLgSQgFgKgDgMQgCgNAAgTIAAikQAAgLgCgGQgCgFgGgDQgGgCgLgBIAAgLIAYADIATAAIATAAIAYgDIAAALQgMABgGACQgFADgCAFQgCAGAAALIAACoQAAARACAKQABALAEAGQAHAMAMAGQALAHAQAAQAMAAALgFQALgFAIgIQAHgHAEgOQAEgPAAgSIAAilQAAgLgCgGQgCgFgGgDQgGgCgMgBIAAgLIAVACIAOABIAOgBIAUgCIAAALQgNABgFACQgGADgCAFQgCAGAAALIAACjQAAATgDANQgDAOgGALQgKARgRAKQgQAJgVAAQgXgBgSgJgAExhgIgTgBIgUABIgXADIAAgKQAMgCAEgDQAGgDgBgFIAAgHIgCgIIgLgvIhPAAIgMApIgDANIgBAIQAAAGAFADQAFADAMABIAAAKIgRgCIgQAAIgOAAIgSACIAAgKQAKgBAGgCQAFgDAEgGQADgGAEgNIBPkCIBIEHIAGAPQADAFAGADQAGACALABIAAAKIgXgDgAD3jAIggh/IgmB/IBGAAgADkmXIhEg7IApAAIArA7g");
	mask_2.setTransform(-100.575,46.825);

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EFCD95","#FEFDCE"],[0,0.722],-47.8,0,47.8,0).s().p("AndI4IAAxvIO7AAIAARvg");
	this.shape_4.setTransform(-100.95,43.675);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("ApjJeIAAy7ITHAAIAAS7g");
	mask_3.setTransform(-98.525,45.875);

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#C73A2B","#711D18"],[0,1],-76.5,-74.3,54.1,66.6).s().p("A06jSIWlvcITQQKI1bVTg");
	this.shape_5.setTransform(-96.925,55.35);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.7,-14.7,528.4,121.2);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(85.775,101.2);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EEBA64","#FEFDCE"],[0,0.667],-87.3,0.2,87.3,0.2).s().p("AtoGXIAAstIbRAAIAAMtg");
	this.shape.setTransform(85.475,79.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,38.1,165.4,74);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(1,16,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1208));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkjD1IAAnpIJHAAIAAHpg");
	this.shape.setTransform(13.1954,30.4097,1.0445,1.1144);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,3.2,61,54.5);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgsA/IgGAAIgFAAIgHACIAAgEQAEABACgCQABgCAAgEIAAhJIAAgFQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgFgBIAAgCIAIgBIAHgBIABAEIAAAHQADgGADgDQAEgCAFAAQAGgBAFAFQAFAEACAJQADAHAAAKQAAALgDAHQgCAIgFAEQgFAFgGAAQgFAAgDgCQgDgCgDgGIAAAbQAAAEACACQABACAFgBIAAAEIgHgCgAgqgVQgDAIAAAOQAAAQADAIQAEAIAGAAQAGAAADgIQACgIAAgOQAAgQgCgIQgDgIgHAAQgFAAgEAIgAFKBAIgBgBIAAgGIABAAQAFAAADgEQAEgDACgGIAEgLIgRg3IgDgFQgCgBgEgBIAAgCIAGAAIAGAAIAGAAIAGAAIAAACIgFABIgBACIAAACIABACIAMAnIAMgmIAAgCIAAgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAgBIgFgBIAAgCIAEAAIAFAAIAEAAIAGAAIAAACQgEABgCABQgCACgBAEIgWBFQgCAIgEAEQgEAEgHAAgADaA7QgHgFAAgKQAAgFADgEQADgDAFgDIgEgEIgBgEQAAgFADgCQADgDAGgCQgGgCgEgFQgEgFAAgIQABgKAFgGQAFgFAKAAIAGABIAGACIAPAAIAAAGIgMgBIADAGIABAGQAAAKgEAEQgFAGgJACIgIADIgEACIgBADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAIABIAGAAIAFABIAFABQAFACADAFQACAFAAAFQAAAKgHAGQgGAGgMAAQgLAAgGgFgADdAkQgFAEAAAFQABAGAFAFQAFADAIABQAIgBAFgDQAFgEAAgGQAAgGgFgEQgFgDgJAAQgIAAgFADgADkgYQgDAEAAAIQAAAKADADQACAFAFAAQAFAAACgFQADgDAAgKQAAgIgCgEQgDgFgFAAQgEAAgDAFgAEwAiQgCgDgBgGQgCAGgEADQgDADgGAAQgHAAgEgFQgEgFgBgJQAAgFADgEQACgEAEgDQAEgDAGgBIALgDIAAgKQAAgHgCgEQgCgDgFAAQgEAAgCACQgDACAAAEIAAACIAAABIAAABIgBAFQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgBIgBgDQAAgFADgEIAHgGQAEgCAFAAQAFAAAEACQAEACACAEIACAGIABAIIAAAeIABAKQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAIABAAIACAAIAAADIgEABIgDABQgEAAgCgDgAEdAFQgEAFAAAHQAAAHACADQACAEAFAAQAFAAACgGQADgEAAgMIAAgLQgKACgFAFgABhAiQgDgDAAgGQgCAGgEADQgEADgFAAQgHAAgEgFQgFgFAAgJQAAgFACgEQADgEAEgDIAJgEIAMgDIAAgKQAAgHgDgEQgCgDgEAAQgEAAgCACQgDACAAAEIAAACIAAABIAAABQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBIgBgDQAAgFADgEQACgDAEgDQAFgCAFAAQAFAAAEACQAEACACAEIACAGIAAAIIAAAeIABAKQABAAAAABQAAAAABABQAAAAABAAQAAAAABAAIABAAIACAAIAAADIgEABIgDABQgEAAgCgDgABOAFQgFAFAAAHQAAAHADADQACAEAEAAQAGAAACgGQADgEAAgMIAAgLQgKACgFAFgAjNAiQgCgDAAgGQgDAGgDADQgEADgFAAQgHAAgFgFQgEgFAAgJQAAgFACgEQACgEAEgDIAKgEIALgDIAAgKQAAgHgCgEQgCgDgEAAQgEAAgDACQgCACAAAEIAAACIAAABIAAABIgBAFQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDgBIgBgDQAAgFACgEQADgDAEgDQAEgCAGAAQAFAAADACQAEACADAEIACAGIAAAIIAAAeIABAKQAAAAABABQAAAAABABQAAAAABAAQAAAAABAAIABAAIABAAIAAADIgDABIgEABQgEAAgCgDgAjfAFQgFAFAAAHQAAAHADADQACAEAEAAQAFAAADgGQACgEAAgMIAAgLQgKACgEAFgADFAjIgFAAIgGAAIgHABIAAgDQAEAAACgBQABgCAAgFIAAgjQAAgIgCgEQgCgEgGAAQgDAAgCACQgDABgBACIgCAGIAAAGIAAAiQAAAFABACQACABAEAAIAAADIgHgBIgGAAIgFAAIgHABIAAgDQAFAAABgBQACgCAAgFIAAgrIgBgGQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBIgFAAIAAgDIAJgBIAHgCIAAAEIABAIQADgGAEgDQAEgCAFAAQAEAAAEACQADACACAEIACAGIABAJIAAAiQAAAFACACQABABAFAAIAAADIgHgBgAAwAjIgGAAIgFAAIgHABIAAgDQAEAAABgBQACgCAAgFIAAgjQAAgIgDgEQgCgEgFAAQgDAAgDACIgEADIgBAGIgBAGIAAAiQAAAFACACQABABAEAAIAAADIgHgBIgFAAIgFAAIgGABIAAgDQADAAACgBQABgCAAgFIAAhHIgBgHQgCgBgDgBIAAgCIAIgBIAIgCIAAAlQADgEAEgDQADgCAFAAQAEAAAEACQAEACACAEIACAGIABAJIAAAiQAAAFABACQACABAEAAIAAADIgGgBgAhqAjIgFAAIgGAAIgHABIAAgDQAEAAACgBQABgCAAgFIAAgkQAAgIgCgDQgCgEgFAAQgFAAgDAFQgDAEAAAHIAAAjQAAAFACACQABABAEAAIAAADIgGgBIgGAAIgFAAIgHABIAAgDQAEAAACgBQABgCAAgFIAAgkIAAgHIgBgEIgDgDIgEgBQgDAAgDACQgCABgBACIgCAGIgBAHIAAAhQAAAFACACQABABAEAAIAAADIgGgBIgGAAIgGAAIgGABIAAgDQAEAAACgBQABgCAAgFIAAgrIAAgFIgBgDIgCgBIgEAAIAAgDIAIgBIAHgCIABAFIAAAHQADgGAEgDQAEgCAFAAQAFAAADACQAEADACAGQADgGADgDQAEgCAFAAQAJgBADAGQAEAFAAALIAAAkQAAAFACACQABABAFAAIAAADIgHgBgAj+AjIgFAAIgGAAIgHABIAAgDQAEAAACgBQACgCgBgFIAAgjQABgIgDgEQgCgEgFAAQgDAAgDACIgEADIgCAGIAAAGIAAAiQAAAFABACQACABAEAAIAAADIgHgBIgFAAIgGAAIgHABIAAgDQAFAAACgBQABgCAAgFIAAhHQAAgFgBgCQgCgBgEgBIAAgCIAIgBIAJgCIAAAlQADgEAEgDQADgCAFAAQAEAAAEACQADACADAEIACAGIAAAJIAAAiQAAAFACACQABABAFAAIAAADIgHgBgAk9AjIgHAAIgHAAIgIABIAAgEIACAAIAEAAIACgCIgBgDIgBgDIgUglIgFAHIAAAdIABAGIACADIAGAAIAAAEIgHgBIgGAAIgHAAIgIABIAAgEIAGAAIACgDIABgGIAAhGIgBgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgGgBIAAgDIAIABIAHAAIAGAAIAHgBIAAADIgGABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIgBAFIAAAiIAagkIABgCIABgCQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIgGgBIAAgDIAHAAIAFAAIAGAAIAGAAIAAADIgGABIgEACIgEAFIgTAbIAZAsIAEAGIAEADIAFAAIAAAEIgIgBgABTgqIALgWIAMAAIgTAWgAjbgqIALgWIANAAIgTAWg");
	mask.setTransform(41.225,9.35);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EEBA64","#FEFDCE"],[0,0.667],-41.4,0,41.3,0).s().p("AmdCVIAAkpIM7AAIAAEpg");
	this.shape.setTransform(40.625,8.675);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FAE2B9").ss(0.8,1,1).p("AnFhvIOLAAIAADfIuLAAg");
	this.shape_1.setTransform(39.85,8.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(59,4,0,0.529)").s().p("AnEBwIAAjfIOKAAIAADfg");
	this.shape_2.setTransform(39.85,8.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-3.5,92.7,24.5);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEpBwQgKgJgGgRQgGgQAAgWQAAgWAGgQQAGgQALgJQAKgJAOgBQAQABAKALQALALAFAUQAFgGACgHQADgFAAgGIgBAAIgBAAIgBAAQgFAAgDgDQgDgEAAgGQAAgGADgEQAEgEAGAAQAGAAADAEQAEAFAAAJQAAAIgDAIQgDAIgGAJIgBACIgBABIgGAIIACAKIAAAIQAAAWgGARQgGARgKAJQgLAJgNABQgOgBgLgJgAEwAAQgHAQAAAhQAAAgAGARQAGAQANAAQALAAAHgRQAGgQAAggQAAgigGgPQgGgRgMAAQgMAAgGARgAC2B6IAAgyIAGAAQADAUAHAKQAIAKAMAAQAKAAAHgHQAGgHAAgMQABgJgFgGQgFgGgMgHIgSgLQgHgEgDgEQgEgEgCgHQgCgGAAgIQAAgQAKgLQAKgKAQgBQAHAAAFACQAGADAFAFIAEgMIAFAAIAAAtIgGAAQgCgSgGgIQgGgIgKAAQgKAAgFAGQgGAHAAAJQgBAJAFAGQAEAFANAHIAPAJIAJAHQAGAFAEAHQADAIAAAJQAAATgLALQgKAMgSAAQgIAAgHgDQgHgDgGgGIgFANgAAxBwQgKgJgGgQQgGgQAAgWQAAgWAGgRQAGgQAKgJQALgJAOgBQAIAAAGADQAFADAFAHIAGgPIAFAAIAAAwIgHAAQgCgTgHgJQgGgKgKAAQgNABgHAQQgHASAAAhQAAAeAGAPQAHAQANAAQALAAAGgKQAHgKACgUIAJAAQgCAYgKANQgJAMgQABQgOgBgLgJgAoLBwQgKgJgGgRQgGgQAAgWQAAgWAGgQQAGgQALgJQAKgJAPgBQAPABAKALQALALAFAUQAFgGACgHQADgFAAgGIgBAAIgBAAIgBAAQgFAAgDgDQgDgEAAgGQAAgGADgFQAEgDAGAAQAGAAADAEQADAEAAAGIAOgCIARgFIAAB7QAAAKADADQADADAKAAIAAAGIgPgBIgLgBIgLABIgQABIAAgGQAKAAAEgDQADgDgBgKIAAheQABgJgDgEQgCgCgFgBQgBAHgCAHQgDAIgGAJIgBACIgBABIgGAIIACAKIAAAIQAAAWgGARQgGARgKAJQgLAJgNABQgOgBgLgJgAoEAAQgHAQAAAhQAAAgAGARQAHAQAMAAQALAAAHgRQAGgQAAggQAAgigGgPQgGgRgMAAQgMAAgGARgAL4BtIgBgKIAAgDQgFANgIAGQgIAGgLAAQgKAAgHgEQgIgFgEgIQgDgFgBgIQgCgIAAgKIAAhGQAAgJgDgEIgBgBIgCAKQgDAIgGAJIgBABIgBABIAAABIgBABIgLAAQAGgHAEgIQAEgGAAgIIgBAAIgBABIgBAAQgFgBgDgDQgDgEAAgGQAAgGADgEQAEgEAGAAQAGAAADAEQADAFABAHIAGgBIASgFIAABjQAAASAEAJQAFAIALgBQAMAAAGgJQAGgJAAgTIAAhDQAAgJgDgEQgDgEgIABIgCAAIAAgFIATgDIASgFIAAB2IABALQABADADABIALABIAAAGIgSADQgIABgHADIgBgMgAJ9BtIAAgIIAAgFQgFANgIAGQgIAGgLAAQgKAAgIgEQgHgFgFgIQgDgFgBgIQgCgIAAgKIAAhGQABgJgDgEQgDgEgIABIgCAAIAAgFIASgDIASgFIAABjQAAASAFAJQAFAIALgBQAMAAAGgJQAGgJAAgTIAAhDQAAgJgDgEQgDgEgJABIgBAAIAAgFIASgDIASgFIAAB2IABALQABADAEABIALABIAAAGIgSADQgIABgHADIgCgMgAhFBuQgIgKgBgRQAAgLAFgJQAEgJAJgGQAJgHALgEQAKgEANgCIAAgVQAAgNgEgGQgFgHgJAAQgIAAgFAFQgFAEAAAHIAAADIAAADIAAACQAAAGgDADQgCAEgFAAQgEAAgDgDQgCgCAAgFQAAgKAGgHQAFgIAJgFQAIgFALAAQALAAAIAFQAIAFAFAIQABAFABAGQACAHAAALIAAA+QAAAPACAGQACAGAEAAIADgBIADAAIAAAHIgHACIgHAAQgHAAgFgFQgEgGgBgNQgFANgIAGQgHAGgLAAQgPAAgJgLgAgvA1QgKALABARQAAANAEAHQAFAHAJAAQAKAAAGgLQAFgLAAgWIAAgZQgVAEgJAKgAIXB2IgMgBIgLABIgOABIAAgGQAIAAADgDQADgEAAgIIAAhLQAAgSgEgHQgFgJgLABQgGAAgFADQgFADgDAFQgDAEgBAFIgBAOIAABKQAAAIADADQADAEAJAAIAAAGIgPgBIgLgBIgLABIgPABIAAgGQAKAAADgDQAEgDgBgKIAAiVQABgKgDgEQgDgDgKAAIAAgFIASgDIASgFIAABOQAGgKAHgFQAIgFAKAAQAJAAAHAFQAIAEAEAIQADAGABAHQACAIAAAKIAABJQAAAKADADQADADAKAAIAAAGIgOgBgAhmB2IgMgBIgLABIgOABIAAgGQAIAAADgDQADgEAAgIIAAhLQAAgSgEgHQgFgJgLABQgGAAgFADQgFADgDAFQgDAEgBAFIgBAOIAABKQAAAIADADQADAEAJAAIAAAGIgPgBIgLgBIgLABIgPABIAAgGQAKAAADgDQAEgDgBgKIAAiVQABgKgDgEQgDgDgKAAIAAgFIASgDIASgFIAABOQAGgKAHgFQAIgFAKAAQAJAAAHAFQAIAEAEAIQADAGABAHQACAIAAAKIAABJQAAAKADADQADADAKAAIAAAGIgOgBgAjZB2IgIAAIgHAAIgJABIgjhLIgOAUIAAAhQgBAKAEADQADADAKAAIAAAGIgQgBIgLgBIgLABIgPABIAAgGQAKAAADgDQADgDAAgKIAAiVQAAgKgDgEQgDgDgKAAIAAgFIATgDIASgFIAACFIAlgzIADgEIACgFQAAgDgEgCQgDgBgHgBIAAgGIAMABIAKABIALgBIANgBIAAAGIgKACIgHAEIgHAIIgXAeIAiBFIAGAKQACADAEACQADABAGAAIAAAGIgJgBgAo5B2IgLgBIgMABIgOABIAAgGQAJAAADgDQADgEAAgIIAAhLQAAgSgFgHQgFgJgKABQgHAAgFADQgFADgDAFQgCAEgBAFIgBAOIAABKQgBAIADADQADAEAJAAIAAAGIgOgBIgLgBIgMABIgOABIAAgGQAKAAADgDQADgDAAgKIAAiVQAAgKgDgEQgDgDgKAAIAAgFIATgDIASgFIAABOQAFgKAIgFQAHgFAKAAQAJAAAIAFQAHAEAFAIQADAGABAHQACAIAAAKIAABJQgBAKADADQAEADAKAAIAAAGIgPgBgArSB1IgNAAIgNAAIgRACIAAgHQAIgBAEgCQAEgBACgEIABgMIAAiiIgMAAQgIAAgFADQgFADgEAIQgEAIgDAPIgGAAIAGguIBoAAIAGAuIgGAAQgDgPgEgIQgDgIgFgDQgFgDgIAAIgNAAIAACiIABAMQABAEAEABQAEACAJABIAAAHIgRgCgAE8gqIAAgSIAKgCIAFgBIADgCQADgDAAgFQAAgGgDgCQgEgDgGAAIgFAAIgIAEIgDgKIAMgEIAKgCQALABAHAGQAGAGABAKQgBAJgFAFQgFAFgKAAIgDAAIgEAAIAAAMgAJrgvQgEgCgGgGIgGgFIgGgCQgFAAgDAEQgDADgDAIIgGgCQADgQAFgHQAFgHAJAAIAHACIAJAGIAFAFIAFAEIAFABQAFAAADgEQAEgDACgJIAHACQgCAPgGAIQgGAIgJAAQgEAAgFgDgAnvgsIgngsIAbAAIAXAsgAg2g4QgIgMgBgUIAIAAQADANAGAGQAGAGAJAAQAIAAAGgGQAGgGADgNIAIAAQgBAUgIAMQgIALgOAAQgOAAgJgLgAmpg0QgEgEAAgHQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgGAAQgGAAgEgEgAglhNIAXgsIAZAAIglAsg");
	mask.setTransform(84.925,71.575);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EEBA64","#FEFDCE"],[0,0.667],-82.9,0.2,82.8,0.2).s().p("As8GXIAAstIZ5AAIAAMtg");
	this.shape.setTransform(85.225,83.725);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,83.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.xe();
	this.instance.parent = this;
	this.instance.setTransform(1048,86,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1048,86,668.9000000000001,535.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.514,1],-14.5,-4.6,14.7,4.7).s().p("AjwD8IC+pUIEjBeIi+JTg");
	this.shape.setTransform(24.125,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.3,69);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Symbol23copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol24copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(140,44.95,0.5,0.5,0,0,0,167.2,45);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,x:172.6,y:45,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:167.2},10,cjs.Ease.get(1)).wait(2002));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.9,-20.7,581.1,133.4);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al6BfIAAi9IL1AAIAAC9g");
	mask.setTransform(49.125,0.775);

	// Layer_3
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.7,1.5,0.6,0.7756,0,0,0,24.1,34.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:24.2,regY:34.4,scaleY:0.7078,x:102,y:1.7},23,cjs.Ease.get(1)).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.7,87,19);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.35,7.65,0.4,0.4,0,0,0,43.4,7.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.6,scaleX:1.1,scaleY:1.1,x:43.4,y:7.6,alpha:1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1944));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-4.5,101.80000000000001,26.7);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(83.95,118.1,0.3,0.3,0,0,0,84,37.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,x:84,y:33,alpha:1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:37.6},8,cjs.Ease.get(1)).wait(1282));

	// Layer_3
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.45,98.85,0.3,0.3,0,0,0,84,37.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:37.6,scaleX:1.05,scaleY:1.05,x:84.5,y:35.2,alpha:1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:37.85},8,cjs.Ease.get(1)).wait(1286));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,58.1,166.8,82.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol23copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(169.75,84,0.35,0.35,0,0,0,167.8,45.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({startPosition:116},0).to({_off:true},1).wait(574));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-23.8,382.79999999999995,131.20000000000002);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1316.45,150.95,0.5,0.5,0,0,0,1753.3,290.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1753.2,scaleX:1,scaleY:1,x:1756.65,y:292.55,alpha:1},12,cjs.Ease.get(1)).to({x:1753.2,y:290.7},9,cjs.Ease.get(1)).wait(4276));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(963.8,48.6,756.5,574.6999999999999);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_186 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(186).call(this.frame_186).wait(1));

	// logo
	this.instance = new lib.Symbol13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(152.5,563.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187));

	// effect cta
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(136,444.2,2,2,0,0,0,42.5,10.1);
	this.instance_1.alpha = 0.8008;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155).to({_off:false},0).wait(32));

	// cta
	this.instance_2 = new lib.Symbol11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(156.35,425.6,1.66,1.66,0,0,0,44.2,8.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(123).to({_off:false},0).wait(64));

	// t2
	this.instance_3 = new lib.Symbol5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(98.5,133.8,1,1,0,0,0,96.5,11.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).wait(117));

	// t1
	this.instance_4 = new lib.Symbol9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(149,136.6,1,1,0,0,0,84,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({startPosition:68},0).to({y:91.6,startPosition:79},11,cjs.Ease.get(1)).wait(118));

	// Layer_8
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-280.45,326.05,0.35,0.35,0,0,0,150.2,300.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(187));

	// Layer_8 copy
	this.instance_6 = new lib.Symbol1copy("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.4,0,511.59999999999997,605.7);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,150,305.70000000000005);
// library properties:
lib.properties = {
	id: 'CC7D37763753984998DC0DE70763E649',
	width: 300,
	height: 600,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1707275227107", id:"bg"},
		{src:"images/logo.png?1707275227107", id:"logo"},
		{src:"images/xe.png?1707275227107", id:"xe"}
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
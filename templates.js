define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_component") || (depth0 != null ? lookupProperty(depth0,"_component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":34}}}) : helper)))
    + "-title component-title\">\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_component") || (depth0 != null ? lookupProperty(depth0,"_component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":11,"column":24},"end":{"line":11,"column":38}}}) : helper)))
    + "-title-inner component-title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":74},"end":{"line":11,"column":141}}})) != null ? stack1 : "")
    + ">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":42}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_component") || (depth0 != null ? lookupProperty(depth0,"_component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":34}}}) : helper)))
    + "-body component-body\">\r\n            <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_component") || (depth0 != null ? lookupProperty(depth0,"_component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":21,"column":24},"end":{"line":21,"column":38}}}) : helper)))
    + "-body-inner component-body-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":34}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_component") || (depth0 != null ? lookupProperty(depth0,"_component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":28,"column":20},"end":{"line":28,"column":34}}}) : helper)))
    + "-instruction component-instruction\">\r\n            <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_component") || (depth0 != null ? lookupProperty(depth0,"_component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":29,"column":38}}}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":41}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n<div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_component") || (depth0 != null ? lookupProperty(depth0,"_component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":26}}}) : helper)))
    + "-header component-header\">\r\n    <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_component") || (depth0 != null ? lookupProperty(depth0,"_component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":30}}}) : helper)))
    + "-header-inner component-header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":33}}}) : helper)))
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":25,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),(depth0 != null ? lookupProperty(depth0,"mobileInstruction") : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":33,"column":16}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>\r\n";
},"useData":true}));

Handlebars.registerPartial("quicknav-item", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button\n    role=\"link\"\n    data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":5,"column":15},"end":{"line":5,"column":23}}}) : helper)))
    + "\"\n    data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":20}}}) : helper)))
    + "\"\n    data-item-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":7,"column":21},"end":{"line":7,"column":31}}}) : helper)))
    + "\"\n    class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isHidden") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":11},"end":{"line":8,"column":51}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":51},"end":{"line":8,"column":88}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":88},"end":{"line":8,"column":123}}})) != null ? stack1 : "")
    + "\"\n    "
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isHidden") : depth0),(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":57}}})) != null ? stack1 : "")
    + "\n    aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":44}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":10,"column":45},"end":{"line":10,"column":259}}})) != null ? stack1 : "")
    + "\"\n    tooltip=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showTooltip") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":66}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_alignIconRight") : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":19,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_alignIconRight") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "</button>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "hidden disabled ";
},"4":function(container,depth0,helpers,partials,data) {
    return "locked disabled ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":8,"column":104},"end":{"line":8,"column":116}}}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\" ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"locked")), depth0));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":10,"column":111},"end":{"line":10,"column":252}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"complete")), depth0));
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"incomplete")), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tooltip") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":33},"end":{"line":11,"column":59}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":81}}})) != null ? stack1 : "")
    + "\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"icon-left icon "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_iconClass") || (depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_iconClass","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":64}}}) : helper)))
    + "\"></span> ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div class=\"text\">\n	"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"text") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":1},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\n	</div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":21,"column":81}}})) != null ? stack1 : "")
    + "\n";
},"25":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"icon-right icon "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_iconClass") || (depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_iconClass","hash":{},"data":data,"loc":{"start":{"line":21,"column":51},"end":{"line":21,"column":65}}}) : helper)))
    + "\"></span>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"article-title\">\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\"article-title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":45},"end":{"line":11,"column":112}}})) != null ? stack1 : "")
    + ">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":42}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"article-body\">\r\n            <div class=\"article-body-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":34}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"article-instruction\">\r\n            <div class=\"article-instruction-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":28,"column":41}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n<div class=\"article-inner block-container\">\r\n\r\n    <div class=\"article-header\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":31,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"block-title\">\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\"block-title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":110}}})) != null ? stack1 : "")
    + ">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":42}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"block-body\">\r\n            <div class=\"block-body-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":34}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"block-instruction\">\r\n            <div class=\"block-instruction-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":41}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n<div class=\"block-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\r\n    <div class=\"component-container\">\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"buttons-marking-icon icon display-none\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":4,"column":72},"end":{"line":4,"column":233}}})) != null ? stack1 : "")
    + "\">\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredCorrectly")), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredIncorrectly")), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"buttons-display\">\r\n        <div class=\"buttons-marking-icon icon display-none\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":12,"column":72},"end":{"line":12,"column":233}}})) != null ? stack1 : "")
    + "\">\r\n        </div>\r\n        <div class=\"buttons-display-inner\" aria-live=\"assertive\">\r\n        </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"buttons-inner\">\r\n    <div class=\"buttons-cluster clearfix\">\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldDisplayAttempts") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":6,"column":19}}})) != null ? stack1 : "")
    + "        <button class=\"buttons-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n        <button class=\"buttons-feedback\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\" disabled=\"true\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldDisplayAttempts") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer-inner\">\r\n	"
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"drawer") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":65}}})) != null ? stack1 : "")
    + "\r\n	<div class=\"drawer-holder\" role=\"list\">\r\n	</div>\r\n	<div class=\"drawer-toolbar clearfix\">\r\n		<div class=\"drawer-back-button\">\r\n		<button class=\"base drawer-back icon icon-controls-small-left\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\r\n		</button>\r\n		</div>\r\n		<div class=\"drawer-close-button\">\r\n		<button class=\"base drawer-close icon icon-cross\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closeDrawer") : stack1), depth0))
    + "\">\r\n		</button>\r\n		</div>\r\n	</div>\r\n	"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":15,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"base drawer-item-open "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n	<div class=\"drawer-item-title\">\r\n		<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":42},"end":{"line":3,"column":53}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n	</div>\r\n	<div class=\"drawer-item-description\">\r\n		<div class=\"drawer-item-description-inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":45},"end":{"line":6,"column":62}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n	</div>\r\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":38}}})) != null ? stack1 : "")
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":11,"column":8}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":61},"end":{"line":8,"column":87}}})) != null ? stack1 : "")
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":63},"end":{"line":10,"column":89}}})) != null ? stack1 : "")
    + "\r\n        ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":34}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\r\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":81}}})) != null ? stack1 : "")
    + " >\r\n    <span class=\"aria-label\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isA11yCompletionDescriptionEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "    </span>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\r\n    <div class=\"loader-gif\"><div role=\"heading\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button class=\"skip-nav-link a11y-ignore-focus\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"skipNavigation") : stack1), depth0))
    + "\">"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"skipNavigationText") : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n<div class=\"navigation-inner clearfix\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_accessibility") : depth0)) != null ? lookupProperty(stack1,"_isSkipNavigationEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" role=\"link\"></button>\r\n    <button class=\"base navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"navigationDrawer") : stack1), depth0))
    + "\"></button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":34}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"notify-popup-icon\">\r\n                        <div class=\"icon"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":40},"end":{"line":9,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":91},"end":{"line":9,"column":140}}})) != null ? stack1 : "")
    + "\">\r\n                        </div>\r\n                    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " icon-question";
},"6":function(container,depth0,helpers,partials,data) {
    return " icon-warning";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div id=\"notify-heading\" class=\"notify-popup-title\">\r\n                        <div class=\"notify-popup-title-inner h5\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":15,"column":65},"end":{"line":15,"column":98}}})) != null ? stack1 : "")
    + ">\r\n                        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":43}}})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"notify-popup-body\">\r\n                        <div class=\"notify-popup-body-inner\">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":22,"column":61},"end":{"line":22,"column":79}}})) != null ? stack1 : "")
    + "</div>\r\n                    </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"notify-popup-buttons\">\r\n                        <button class=\"notify-popup-button notify-popup-alert-button\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":28,"column":98},"end":{"line":28,"column":115}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":28,"column":117},"end":{"line":28,"column":134}}}) : helper))) != null ? stack1 : "")
    + "</button>\r\n                    </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"notify-popup-buttons\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_prompts") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":24},"end":{"line":36,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_callbackEvent") || (depth0 != null ? lookupProperty(depth0,"_callbackEvent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":35,"column":103},"end":{"line":35,"column":121}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":35,"column":135},"end":{"line":35,"column":151}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":35,"column":153},"end":{"line":35,"column":169}}}) : helper))) != null ? stack1 : "")
    + "</button>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":48,"column":23}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button class=\"base notify-popup-done\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\r\n                    <div class=\"notify-popup-icon-close icon icon-cross\"></div>\r\n                </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n<div "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_attributes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":5},"end":{"line":3,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify-popup notify-type-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":3,"column":88},"end":{"line":3,"column":97}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":3,"column":98},"end":{"line":3,"column":110}}}) : helper)))
    + "\">\r\n    <div class=\"notify-popup-inner\">\r\n        <div class=\"notify-popup-content\">\r\n            <div class=\"notify-popup-content-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showIcon") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":12,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":19,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":24,"column":23}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":30,"column":27}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":38,"column":27}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCancellable") : depth0),(depth0 != null ? lookupProperty(depth0,"_showCloseButton") : depth0),{"name":"all","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":49,"column":16}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":52,"column":4},"end":{"line":52,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n\r\n<div class=\"notify-shadow\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias3(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n<div id=\"notify-push-heading\" class=\"notify-push-inner\">\r\n	<div class=\"notify-push-title\">\r\n		<div class=\"notify-push-title-inner h5\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":75}}})) != null ? stack1 : "")
    + ">\r\n			"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":6,"column":22}}})) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"notify-push-body\">\r\n		<div class=\"notify-push-body-inner\">\r\n			"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":12,"column":21}}})) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n<button class=\"base notify-push-close\" aria-label=\""
    + alias3(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\r\n	<span class=\"icon icon-cross\"></span>\r\n</button>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"page-title\">\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + "						<div class=\"page-title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":36},"end":{"line":15,"column":103}}})) != null ? stack1 : "")
    + ">\r\n							"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":7},"end":{"line":16,"column":33}}})) != null ? stack1 : "")
    + "\r\n						</div>\r\n					</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "							<div class=\"js-heading\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"page-body\">\r\n						<div class=\"page-body-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":24,"column":7},"end":{"line":28,"column":14}}})) != null ? stack1 : "")
    + "						</div>\r\n					</div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":25,"column":30}}})) != null ? stack1 : "")
    + "\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":26}}})) != null ? stack1 : "")
    + "\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"page-instruction\">\r\n						<div class=\"page-instruction-inner\">\r\n							"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":7},"end":{"line":36,"column":32}}})) != null ? stack1 : "")
    + "\r\n						</div>\r\n					</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n<div class=\"page-inner article-container\">\r\n	<div class=\"page-header\">\r\n		<div class=\"page-header-inner clearfix\">\r\n\r\n			<div class=\"page-header-content\">\r\n				<div class=\"page-header-content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":19,"column":12}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"any","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":5},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":39,"column":12}}})) != null ? stack1 : "")
    + "\r\n				</div>\r\n			</div>\r\n\r\n		</div>\r\n	</div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"accordion-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":70}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":5,"column":84},"end":{"line":5,"column":94}}}) : helper)))
    + "\">\n            <button id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":35},"end":{"line":6,"column":45}}}) : helper)))
    + "-accordion-button\" class=\"base accordion-item-title "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":97},"end":{"line":6,"column":129}}})) != null ? stack1 : "")
    + "\" aria-expanded=\"false\">\n                <div class=\"accordion-item-title-inner\">\n                    <div class=\"accordion-item-title-icon icon icon-plus h5\" aria-hidden=\"true\"></div>\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":9,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n            </button>\n            <div role=\"region\" class=\"accordion-item-body\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":87},"end":{"line":12,"column":97}}}) : helper)))
    + "-accordion-button\">\n                <div class=\"accordion-item-body-inner\">\n                    <div class=\"accordion-item-text\">\n                        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":24},"end":{"line":15,"column":42}}})) != null ? stack1 : "")
    + "\n                    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_graphic") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":26,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":5,"column":51},"end":{"line":5,"column":63}}}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    return "visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":25,"column":27}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"accordion-item-graphic\">\n                        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\">\n                    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":24,"column":27}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"accordion-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"accordion-widget component-widget\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["flipcard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"flipcard__item component__item item-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":56},"end":{"line":6,"column":66}}}) : helper)))
    + "\">\n            <div class=\"flipcard__item-face flipcard__item-front\">\n                <img src=\""
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"frontImage") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" class=\"flipcard__item-frontImage\" aria-label=\""
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"frontImage") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\" tabindex=\"0\">\n            </div>\n\n            <div class=\"flipcard__item-face flipcard__item-back\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"backTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":16,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"backBody") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":21,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"flipcard__item-back-title\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"backTitle") || (depth0 != null ? lookupProperty(depth0,"backTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backTitle","hash":{},"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"flipcard__item-back-body\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"backBody") || (depth0 != null ? lookupProperty(depth0,"backBody") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backBody","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":30}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"flipcard__inner component__inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_flipcard") : stack1)) != null ? lookupProperty(stack1,"ariaRegion") : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"flipcard__widget component__widget clearfix\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":24,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "pin";
},"3":function(container,depth0,helpers,partials,data) {
    return "tile";
},"5":function(container,depth0,helpers,partials,data) {
    return " role=\"list\"";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\" />\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":9,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":23,"column":17}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"hotgraphic-graphic-pin-list-item\" role=\"listitem\">\n            <button class=\"base hotgraphic-graphic-pin component-item-text-color "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":81},"end":{"line":12,"column":113}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":113},"end":{"line":12,"column":150}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":164},"end":{"line":12,"column":174}}}) : helper)))
    + "\" style=\"top:"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_top") || (depth0 != null ? lookupProperty(depth0,"_top") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_top","hash":{},"data":data,"loc":{"start":{"line":12,"column":187},"end":{"line":12,"column":197}}}) : helper))) != null ? stack1 : "")
    + "%; left:"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_left") || (depth0 != null ? lookupProperty(depth0,"_left") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_left","hash":{},"data":data,"loc":{"start":{"line":12,"column":205},"end":{"line":12,"column":216}}}) : helper))) != null ? stack1 : "")
    + "%;\">\n              <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":13,"column":39},"end":{"line":13,"column":48}}}) : helper)))
    + "."
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":49},"end":{"line":13,"column":126}}})) != null ? stack1 : "")
    + "</span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":20,"column":21}}})) != null ? stack1 : "")
    + "            </button>\n          </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "visited";
},"13":function(container,depth0,helpers,partials,data) {
    return " has-pin-image";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_globals") : depths[1])) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"visited") : stack1), depth0))
    + ".";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"hotgraphic-graphic-pin-image item-"
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":15,"column":62},"end":{"line":15,"column":72}}}) : helper)))
    + "\">\n                  <img src=\""
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-label=\""
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\">\n                </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"hotgraphic-graphic-pin-icon component-item-color icon icon-pin item-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":19,"column":96},"end":{"line":19,"column":106}}}) : helper)))
    + "\"></div>\n";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"hotgraphic-narrative\" role=\"list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":33,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"hotgraphic-graphic-pin-list-item\" role=\"listitem\">\n              <button class=\"base hotgraphic-graphic-pin component-item-text-color "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":83},"end":{"line":28,"column":115}}})) != null ? stack1 : "")
    + " hotgraphic-graphic-pin-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":139},"end":{"line":28,"column":149}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":150},"end":{"line":28,"column":203}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":217},"end":{"line":28,"column":227}}}) : helper)))
    + "\" style=\"top:"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_top") || (depth0 != null ? lookupProperty(depth0,"_top") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_top","hash":{},"data":data,"loc":{"start":{"line":28,"column":240},"end":{"line":28,"column":250}}}) : helper))) != null ? stack1 : "")
    + "%; left:"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_left") || (depth0 != null ? lookupProperty(depth0,"_left") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_left","hash":{},"data":data,"loc":{"start":{"line":28,"column":258},"end":{"line":28,"column":269}}}) : helper))) != null ? stack1 : "")
    + "%;\">\n                <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":29,"column":41},"end":{"line":29,"column":50}}}) : helper)))
    + "."
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":51},"end":{"line":29,"column":128}}})) != null ? stack1 : "")
    + "</span>\n                <div class=\"hotgraphic-graphic-pin-image component-item-color item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":83},"end":{"line":30,"column":93}}}) : helper)))
    + "\" style=\"background-image: url("
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + ")\"></div>\n              </button>\n            </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"hotgraphic-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"hotgraphic-widget component-widget "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useGraphicsAsPins") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":49},"end":{"line":3,"column":105}}})) != null ? stack1 : "")
    + "\">\n    <div class=\"hotgraphic-graphic\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useGraphicsAsPins") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":88}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useGraphicsAsPins") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(21, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotgraphicPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"hotgraphic-item component-item clearfix "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":56},"end":{"line":3,"column":88}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":89},"end":{"line":3,"column":119}}})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":3,"column":120},"end":{"line":3,"column":132}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":134},"end":{"line":3,"column":185}}})) != null ? stack1 : "")
    + " data-index="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":3,"column":197},"end":{"line":3,"column":207}}}) : helper)))
    + ">\n        <div class=\"hotgraphic-item-content\">\n            <div class=\"hotgraphic-item-content-inner\">\n            <div"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":60}}})) != null ? stack1 : "")
    + " class=\"hotgraphic-content-title\" "
    + alias4((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":6,"column":94},"end":{"line":6,"column":125}}}))
    + ">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n            <div class=\"hotgraphic-content-body\">\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n            </div>\n        </div>\n        <div class=\"hotgraphic-item-graphic\">\n            <div class=\"hotgraphic-item-graphic-inner\">\n            <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-label=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"/>\n            </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "visited";
},"4":function(container,depth0,helpers,partials,data) {
    return "active";
},"6":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"8":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"hotgraphic-popup-nav component-item-color\">\n        <button class=\"base hotgraphic-popup-controls back\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n            <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></div>\n        </button>\n        <div class=\"hotgraphic-popup-count component-item-text-color\">\n        </div>\n        <button class=\"base hotgraphic-popup-controls next\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\n            <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\n        </button>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"hotgraphic-popup-inner clearfix\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":23,"column":13}}})) != null ? stack1 : "")
    + "</div>\n<div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hidePagination") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":4},"end":{"line":37,"column":15}}})) != null ? stack1 : "")
    + "    <button class=\"base hotgraphic-popup-done\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n        <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\n    </button>\n</div>\n"
    + alias2(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":42,"column":19}}}) : helper)))
    + "\n";
},"useData":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " disabled "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":76},"end":{"line":3,"column":183}}})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " complete submitted show-user-answer "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":143},"end":{"line":3,"column":175}}})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return "correct";
},"5":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"7":function(container,depth0,helpers,partials,data) {
    return "group";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"mcq-item component-item component-item-color "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":65},"end":{"line":5,"column":183}}})) != null ? stack1 : "")
    + " item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":189},"end":{"line":5,"column":199}}}) : helper)))
    + "\">\n            <input "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":19},"end":{"line":6,"column":68}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":6,"column":75},"end":{"line":6,"column":122}}})) != null ? stack1 : "")
    + "\" id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":139},"end":{"line":6,"column":149}}}) : helper)))
    + "-input\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":157},"end":{"line":6,"column":202}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"a11y_normalize")||(depth0 && lookupProperty(depth0,"a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":6,"column":215},"end":{"line":6,"column":240}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":6,"column":260},"end":{"line":6,"column":270}}}) : helper)))
    + "\" />\n            <label aria-hidden=\"true\" for=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":7,"column":54},"end":{"line":7,"column":64}}}) : helper)))
    + "-input\" class=\"component-item-text-color component-item-border"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":126},"end":{"line":7,"column":172}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":172},"end":{"line":7,"column":207}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":7,"column":227},"end":{"line":7,"column":237}}}) : helper)))
    + "\" >\n                <div class=\"mcq-item-state\">\n                    <div class=\"mcq-item-icon mcq-answer-icon "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":9,"column":62},"end":{"line":9,"column":109}}})) != null ? stack1 : "")
    + " component-item-text-color icon\"></div>\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\n                </div>\n                <div class=\"mcq-item-inner\">\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":14,"column":20},"end":{"line":14,"column":30}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n            </label>\n        </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":90},"end":{"line":5,"column":172}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":5,"column":116},"end":{"line":5,"column":165}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-item\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "radio";
},"18":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"22":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"24":function(container,depth0,helpers,partials,data) {
    return " selected";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"mcq-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"mcq-widget component-widget "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":44},"end":{"line":3,"column":195}}})) != null ? stack1 : "")
    + "\" role=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isRadio") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":203},"end":{"line":3,"column":249}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":18,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_media") : stack1)) != null ? lookupProperty(stack1,"skipToTranscript") : stack1), depth0))
    + "\"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "")
    + "        <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp3") : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1), depth0))
    + "\" class=\"audio-poster\"/>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogg") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":37,"column":15}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogg") : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <video aria-hidden=\"true\" preload=\"none\" width=\"640\" height=\"360\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_playsinline") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":78},"end":{"line":17,"column":116}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (lookupProperty(helpers,"if_value_equals")||(depth0 && lookupProperty(depth0,"if_value_equals"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),"video/vimeo",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":17,"column":117},"end":{"line":17,"column":217}}})) != null ? stack1 : "")
    + " style=\"width:100%; height:100%;\" controls=\"controls\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"source") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":30,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useClosedCaptions") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":35,"column":19}}})) != null ? stack1 : "")
    + "            </video>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "playsinline";
},"12":function(container,depth0,helpers,partials,data) {
    return "";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "poster=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1), depth0))
    + "\"";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"source") : stack1), depth0))
    + "\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\"/>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp4") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":23,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogv") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":26,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"webm") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":29,"column":23}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp4") : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogv") : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"webm") : stack1), depth0))
    + "\" type=\"video/webm\"/>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"cc") : stack1),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":34,"column":25}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <track kind=\"subtitles\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":33,"column":49},"end":{"line":33,"column":56}}}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"srclang") || (depth0 != null ? lookupProperty(depth0,"srclang") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"srclang","hash":{},"data":data,"loc":{"start":{"line":33,"column":83},"end":{"line":33,"column":94}}}) : helper)))
    + "\" />\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"media-transcript-container\">\n            <div class=\"media-transcript-button-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":53,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":12},"end":{"line":64,"column":19}}})) != null ? stack1 : "")
    + "            </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":70,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button class=\"media-inline-transcript-button button\" aria-expanded=\"false\">\n                    <div class=\"transcript-text-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":46,"column":20},"end":{"line":50,"column":27}}})) != null ? stack1 : "")
    + "                    </div>\n                </button>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0))
    + "\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button onclick=\"window.open('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "')\" class=\"media-external-transcript-button button\">\n                    <div class=\"transcript-text-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":57,"column":20},"end":{"line":61,"column":27}}})) != null ? stack1 : "")
    + "                    </div>\n                </button>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1), depth0))
    + "\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"media-inline-transcript-body-container\" role=\"region\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data,"loc":{"start":{"line":67,"column":94},"end":{"line":67,"column":219}}})) != null ? stack1 : "")
    + "\">\n                    <div class=\"media-inline-transcript-body\">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptBody") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":68,"column":62},"end":{"line":68,"column":108}}})) != null ? stack1 : "")
    + "</div>\n                </div>\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0));
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"media-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":12}}})) != null ? stack1 : "")
    + "    <div class=\"media-widget component-widget a11y-ignore-aria\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp3") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":38,"column":11}}})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_transcript") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":72,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "narrative-text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"narrative-content-item "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":51},"end":{"line":8,"column":83}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":97},"end":{"line":8,"column":107}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":15,"column":27}}})) != null ? stack1 : "")
    + "                    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":16,"column":81}}})) != null ? stack1 : "")
    + "\n                    <div class=\"narrative-content-body\">\n                        <div class=\"narrative-content-body-inner\">\n                            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":28},"end":{"line":19,"column":46}}})) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"narrative-content-title\">\n                        <div class=\"narrative-content-title-inner\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"componentItem",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":11,"column":67},"end":{"line":11,"column":105}}}))
    + ">\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":28},"end":{"line":12,"column":39}}}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"a11y_aria_image")||(depth0 && lookupProperty(depth0,"a11y_aria_image"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":16,"column":40},"end":{"line":16,"column":74}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"narrative-progress component-item-color component-item-border "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":98},"end":{"line":27,"column":130}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":144},"end":{"line":27,"column":154}}}) : helper)))
    + "\"></div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <button class=\"base narrative-strapline-title "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":66},"end":{"line":45,"column":98}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"strapline") || (depth0 != null ? lookupProperty(depth0,"strapline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":45,"column":112},"end":{"line":45,"column":127}}}) : helper))) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":45,"column":175},"end":{"line":45,"column":185}}}) : helper)))
    + "\">\n                        <div class=\"narrative-strapline-title-inner h5\">\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"strapline") || (depth0 != null ? lookupProperty(depth0,"strapline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":47,"column":28},"end":{"line":47,"column":43}}}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                        <div class=\"icon icon-plus\"></div>\n                        <div class=\"focus-rect\"></div>\n                    </button>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"narrative-slider-graphic "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":53},"end":{"line":68,"column":85}}})) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\" data-index=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":68,"column":133},"end":{"line":68,"column":143}}}) : helper)))
    + "\">\n                    <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-hidden=\"true\" />\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":20},"end":{"line":72,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"narrative-progress component-item-color component-item-border "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":90},"end":{"line":78,"column":122}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":78,"column":136},"end":{"line":78,"column":146}}}) : helper)))
    + "\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"narrative-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"narrative-widget component-widget "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hasNavigationInTextArea") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":112}}})) != null ? stack1 : "")
    + "\">\n\n        <div class=\"narrative-content\">\n            <div class=\"narrative-content-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":23,"column":25}}})) != null ? stack1 : "")
    + "                <div class=\"narrative-controls-container clearfix\">\n                    <div class=\"narrative-indicators\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":28,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\n                    <button class=\"base narrative-controls narrative-control-left\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-left\"></div>\n                    </button>\n                    <button class=\"base narrative-controls narrative-control-right\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-right\"></div>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\" style=\"width: "
    + alias3(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":42,"column":85},"end":{"line":42,"column":100}}}) : helper)))
    + "%\">\n                    <div></div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":20},"end":{"line":52,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-slide-container\">\n\n            <button class=\"base narrative-controls narrative-control-left\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </button>\n            <button class=\"base narrative-controls narrative-control-right\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </button>\n\n            <div class=\"narrative-slider clearfix\" style=\"width: "
    + alias3(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":66,"column":65},"end":{"line":66,"column":80}}}) : helper)))
    + "%\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":16},"end":{"line":74,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"narrative-indicators\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":16},"end":{"line":79,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["quicknav-tooltip"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"text\">\n"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"tooltip") || (depth0 != null ? lookupProperty(depth0,"tooltip") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tooltip","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":13}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n<div class=\"triangle\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["quicknav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"quicknav-item"),depth0,{"name":"quicknav-item","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"quicknav-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"quicknav-widget\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "</div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["aboutUs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"aboutus-header-container\">\n            <div class=\"aboutus-headline-container\">\n                <h5 class=\"aboutus-headline\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":45},"end":{"line":9,"column":92}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"headline") || (depth0 != null ? lookupProperty(depth0,"headline") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"headline","hash":{},"data":data,"loc":{"start":{"line":9,"column":93},"end":{"line":9,"column":107}}}) : helper))) != null ? stack1 : "")
    + "</h5>\n            </div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "width=\"100%\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"aboutus-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"aboutus-items-container\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["aboutUsItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"aboutus-item-open\" href=\"#\">\n    <div class=\"aboutus-item-title\">\n        <h5>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":23}}}) : helper))) != null ? stack1 : "")
    + "</h5>\n    </div>\n</a>\n<div class=\"aboutus-item-description\">\n    <div class=\"aboutus-item-description-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["aboutUsSocialLinks"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_link") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_link") || (depth0 != null ? lookupProperty(depth0,"_link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_link","hash":{},"data":data,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"icon icon-"
    + container.escapeExpression((lookupProperty(helpers,"lowerCase")||(depth0 && lookupProperty(depth0,"lowerCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_service") : depth0),{"name":"lowerCase","hash":{},"data":data,"loc":{"start":{"line":5,"column":47},"end":{"line":5,"column":69}}}))
    + "\"\n        target=\"_blank\" title=\"Follow us on "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_service") || (depth0 != null ? lookupProperty(depth0,"_service") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_service","hash":{},"data":data,"loc":{"start":{"line":6,"column":44},"end":{"line":6,"column":58}}}) : helper))) != null ? stack1 : "")
    + "\"></a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"aboutus-sociallinks\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"pagelevelprogress-inner\">\n    "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"pageLevelProgress") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":83}}})) != null ? stack1 : "")
    + "\n    <div role=\"list\" class=\"js-children\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"aria-label\">\n        "
    + container.escapeExpression((lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":29}}}))
    + "\n    </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"pagelevelprogress-indicator-inner "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":46},"end":{"line":2,"column":54}}}) : helper)))
    + "-indicator-inner\">\n    <div class=\"pagelevelprogress-indicator-bar\" style=\"width: "
    + alias4(((helper = (helper = lookupProperty(helpers,"percentageComplete") || (depth0 != null ? lookupProperty(depth0,"percentageComplete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"percentageComplete","hash":{},"data":data,"loc":{"start":{"line":3,"column":63},"end":{"line":3,"column":85}}}) : helper)))
    + "%;\">\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"locked") : stack1), depth0))
    + ". ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"optionalContent") : stack1), depth0))
    + ". ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":4,"column":185},"end":{"line":4,"column":321}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + ". ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + ". ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"page-level-progress-item-optional-text\">\n        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"optionalContent") : stack1), depth0))
    + "\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button\n    class=\"base pagelevelprogress-item-title clearfix drawer-item-open"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisible") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":70},"end":{"line":2,"column":112}}})) != null ? stack1 : "")
    + " js-indicator\"\n    data-pagelevelprogress-id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":38}}}) : helper)))
    + "\"\n    aria-label=\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisible") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":97}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":4,"column":97},"end":{"line":4,"column":328}}})) != null ? stack1 : "")
    + alias3((lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":4,"column":328},"end":{"line":4,"column":345}}}))
    + "\">\n    <div class=\"pagelevelprogress-item-title-inner\">\n    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":23}}})) != null ? stack1 : "")
    + "\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<span class=\"tooltip\">"
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"progress") : stack1), depth0))
    + "</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["tilesmenu-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " background: url("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "); background-size: cover; background-repeat: no-repeat; background-position: center;";
},"3":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"visited") : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return "visited";
},"9":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"11":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\" ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <span class=\"menu-item-duration\" role=\"region\" tabindex=\"0\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_tilesmenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":68},"end":{"line":10,"column":167}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":10,"column":168},"end":{"line":10,"column":182}}}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_tilesmenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1), depth0)) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"menu-item-inner\" style=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":181}}})) != null ? stack1 : "")
    + " height: 50vh;\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_tilesmenu") : stack1)) != null ? lookupProperty(stack1,"menuItem") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_tilesmenu") : stack1)) != null ? lookupProperty(stack1,"menuItem") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":249},"end":{"line":1,"column":311}}})) != null ? stack1 : "")
    + ">\n    <div class=\"menu-item-title\">\n        <div class=\"menu-item-title-inner h3\" role=\"heading\" aria-level=\"2\" tabindex=\"0\">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias3).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":3,"column":89},"end":{"line":3,"column":115}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"menu-item-button\">\n        <div aria-label=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":6,"column":25},"end":{"line":6,"column":37}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":110}}})) != null ? stack1 : "")
    + "\" class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":119},"end":{"line":6,"column":151}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":152},"end":{"line":6,"column":184}}})) != null ? stack1 : "")
    + " origbutton\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":197},"end":{"line":6,"column":241}}})) != null ? stack1 : "")
    + ">\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["tilesmenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"menu-title\">\n					<div class=\"menu-title-inner h1\" role=\"heading\" aria-level=\"1\" tabindex=\"0\">\n						"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":32}}})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"menu-body\">\n					<div class=\"menu-body-inner\">\n						"
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_text")||(depth0 && lookupProperty(depth0,"compile_a11y_text"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile_a11y_text","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":34}}})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"menu-container\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_tilesmenu") : stack1)) != null ? lookupProperty(stack1,"ariaRegion") : stack1), depth0))
    + "\">\n	<div class='menu-container-inner tiles-menu-inner clearfix'>\n		<div class=\"menu-header\">\n			<div class=\"menu-header-inner\">\n\n				<div class=\"menu-image\"><img src=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_tilesMenu") : depth0)) != null ? lookupProperty(stack1,"_backgroundSrc") : stack1), depth0)) != null ? stack1 : "")
    + "\" alt=\"\"></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n		<div class=\"menu-tile-items\">\n		</div>\n	</div>\n	<div class=\"aria-label relative a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">\n		"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_tilesmenu") : stack1)) != null ? lookupProperty(stack1,"menuEnd") : stack1), depth0))
    + "</div>\n</div>";
},"useData":true});

return this["Handlebars"];

});
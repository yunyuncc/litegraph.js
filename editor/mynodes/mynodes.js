
function FilterTreeRoot() {
    this.addOutput("", "string");
    this.addProperty("value", "");
    this.widget = this.addWidget("text","name","","value");
    this.widgets_up = true;
    this.size = [140, 30];
  }
  
  function FilterTag() {
    this.addInput("", "string");
    this.addProperty("value", "");
    this.widget = this.addWidget("text","name","","value");
    this.widgets_up = true;
    this.size = [140, 30];
  }
  function FilterNode() {
    this.addOutput("", "string");
    this.addInput("", "string");
    this.addProperty("value", "");
    this.addProperty("logic_value", "");
    this.widget = this.addWidget("text","name","","value");
    this.logic_widget = this.addWidget("combo","logic","$and","logic_value", {
      "values":["$and", "$or"]
    });
    this.widgets_up = true;
    this.size = this.computeSize();
  }
  
  LiteGraph.registerNodeType("wyy/FilterNode", FilterNode);
  LiteGraph.registerNodeType("wyy/FilterTag", FilterTag);
  LiteGraph.registerNodeType("wyy/FilterTreeRoot", FilterTreeRoot);
  
  
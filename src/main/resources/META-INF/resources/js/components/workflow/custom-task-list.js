/**
 * YUI Library aliases
 */
var Dom = YAHOO.util.Dom,
	Event = YAHOO.util.Event;

/**
 * Alfresco Slingshot aliases
 */
var $html = Alfresco.util.encodeHTML,
  	$siteURL = Alfresco.util.siteURL;

/**
   * Fired when the currently active filter has changed
   *
   * @method onFilterChanged
   * @param layer {string} the event source
   * @param args {object} arguments object
   */
var custom_onFilterChanged = function BaseFilter_onFilterChanged(layer, args) {
	
	var filter = Alfresco.util.cleanBubblingObject(args[1]);
	if (filter.filterId == "workflowType")
	{
		var workflowTitle;
		for (var i = 0, il = this.options.workflowDefinitions.length; i < il; i++)
		{
			if (this.options.workflowDefinitions[i].name == filter.filterData)
			{
				Dom.get(this.id + "-filterTitle").innerHTML = $html(this.msg("filter." + filter.filterId, this.options.workflowDefinitions[i].title));
			}
		}
	}
	else
	{
		Dom.get(this.id + "-filterTitle").innerHTML = $html(this.msg("filter." + filter.filterId + (filter.filterData ? "." + filter.filterData : ""), filter.filterData));
	}
};


(function() {
	   
	Alfresco.component.TaskList.prototype.onFilterChanged = custom_onFilterChanged;

})();
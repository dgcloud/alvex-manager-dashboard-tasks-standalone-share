<#assign el=args.htmlid?js_string>

<div id="${el}-body" class="task-list">
</div>

<script type="text/javascript">//<![CDATA[
	new Alvex.ManageesTasksViewer("${el}").setOptions({
	    filterParameters: [<#list filterParameters as filterParameter>
           {
              id: "${filterParameter.id?js_string}",
              "data": "${filterParameter.data?js_string}",
              "parameters": "${filterParameter.parameters?js_string}"
           }<#if filterParameter_has_next>,</#if>
        </#list>],
		hiddenTaskTypes: [<#list hiddenTaskTypes as type>"${type}"<#if type_has_next>, </#if></#list>],
		maxItems: ${maxItems!"50"}
	}).setMessages(
		${messages}
	);
//]]></script>

<#include "/org/alfresco/include/alfresco-template.ftl" />

<@templateHeader />

<@templateBody>
    <@markup id="alf-hd">
	<div id="alf-hd">
		<@region id="share-header" scope="global" chromeless="true"/>
	</div>
	</@>
	<@markup id="bd">
	<div id="bd">
        <div class="yui-t1" id="alfresco-myworkflows">
            <div id="yui-main">
                <div class="yui-b" id="alf-content">
                    <@region id="tasks-view" scope="template"/>
                </div>
            </div>
            <div class="yui-b" id="alf-filters">
                <@region id="all-filter" scope="template" />
                <@region id="due-filter" scope="template" />
                <@region id="priority-filter" scope="template" />
            </div>
        </div>
	</div>
	</@>
</@>

<@templateFooter>
	<div id="alf-ft">
		<@region id="footer" scope="global"/>
	</div>
</@>
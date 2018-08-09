<@markup id="bd-new" target="bd" action="replace" scope="global">
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
                <p>Douglas</p>
                <@region id="workflow-type-filter" scope="template" />
            </div>
        </div>
	</div>
</@markup>




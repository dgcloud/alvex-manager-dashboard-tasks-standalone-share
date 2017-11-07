var tasksMenu = widgetUtils.findObject(model.jsonModel, "id", "HEADER_TASKS_GROUP");
if (tasksMenu != null) {
  tasksMenu.config.widgets.push({
    name: "alfresco/header/AlfMenuItem",
    id: "HEADER_TASKS_OF_MY_TEAM",
    config: {
      id: "HEADER_TASKS_OF_MY_TEAM",
      label: "header.menu.tasks_of_my_team.label",
      iconClass: "alf-mytasks-icon",       
      targetUrl: "alvex-manager-dashboard-tasks"
    }
  });
  tasksMenu.config.widgets.push({
    name: "alfresco/header/AlfMenuItem",
    id: "HEADER_WORKFLOWS_OF_MY_TEAM",
    config: {
      id: "HEADER_WORKFLOWS_OF_MY_TEAM",
      label: "header.menu.workflows_of_my_team.label",
      iconClass: "alf-myworkflows-icon",       
      targetUrl: "alvex-managees-workflows"
    }     
  });

}

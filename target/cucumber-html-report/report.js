$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FlipboardLogin.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "  In order to perform successul login\n  As a User\n  I want to launch the Flipboard app and perform login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "In order to verify login to flipboard app",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on getStartedButton",
  "keyword": "Given "
});
formatter.step({
  "name": "user selects \u003ctopicCount\u003e topics",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on continue button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "topicCount"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "In order to verify login to flipboard app",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on getStartedButton",
  "keyword": "Given "
});
formatter.match({
  "location": "FlipboardSteps.user_clicks_on_getStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects 3 topics",
  "keyword": "When "
});
formatter.match({
  "location": "FlipboardSteps.user_selects_topics(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipboardSteps.user_clicks_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to verify login to flipboard app",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on getStartedButton",
  "keyword": "Given "
});
formatter.match({
  "location": "FlipboardSteps.user_clicks_on_getStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects 4 topics",
  "keyword": "When "
});
formatter.match({
  "location": "FlipboardSteps.user_selects_topics(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipboardSteps.user_clicks_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SearchItem.feature");
formatter.feature({
  "name": "Search Item Feature",
  "description": "  In order to perform successul Search\n  As a User\n  I want to launch the Flipboard app and perform login and search Items",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "In order to Search Items flipboard app",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on getStartedButton",
  "keyword": "Given "
});
formatter.step({
  "name": "user selects \u003ctopicCount\u003e topics",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on continue button",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on skip for now button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on search panel",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the \u003csearchText\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "topicCount",
        "searchText"
      ]
    },
    {
      "cells": [
        "3",
        "airpods"
      ]
    }
  ]
});
formatter.scenario({
  "name": "In order to Search Items flipboard app",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on getStartedButton",
  "keyword": "Given "
});
formatter.match({
  "location": "FlipboardSteps.user_clicks_on_getStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects 3 topics",
  "keyword": "When "
});
formatter.match({
  "location": "FlipboardSteps.user_selects_topics(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipboardSteps.user_clicks_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on skip for now button",
  "keyword": "And "
});
formatter.match({
  "location": "FlipboardSteps.user_clicks_on_skip_for_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search panel",
  "keyword": "And "
});
formatter.match({
  "location": "FlipboardSteps.user_clicks_on_search_panel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the airpods",
  "keyword": "And "
});
formatter.match({
  "location": "FlipboardSteps.user_enters_the_(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.fail(Assert.java:103)\r\n\tat steps.FlipboardSteps.user_enters_the_(FlipboardSteps.java:97)\r\n\tat ✽.user enters the airpods(file:src/test/resources/features/SearchItem.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calc1.feature");
formatter.feature({
  "line": 2,
  "name": "Calculator",
  "description": "As an user\nI want to add two numbers\nSo that to view the result",
  "id": "calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@calc1"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@add2num"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am at calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I pass these values",
  "rows": [
    {
      "cells": [
        "a",
        "b"
      ],
      "line": 11
    },
    {
      "cells": [
        "3",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "8",
        "5"
      ],
      "line": 13
    },
    {
      "cells": [
        "9",
        "5"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Calc1StepDefinitions.i_am_at_calculator_page()"
});
formatter.result({
  "duration": 355442520,
  "status": "passed"
});
formatter.match({
  "location": "Calc1StepDefinitions.sumTest(DataTable)"
});
formatter.result({
  "duration": 6951200,
  "status": "passed"
});
});
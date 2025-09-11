---
sidebar_label: Operations Working Group
---

# Operations Working Group

**Mission**: To provide a secure, production ready, scalable and reliable environment for developing and deploying
agentic AI.

**Problem Statement**: Building agents is hard. After the code is written, what needs to be done to deploy them? After
they're deployed, how are they productionalized? How does one know that the agents are performing well and producing
value?

**Solution**: The operations working group aims to tackle the problems of productionalizing and operationalizing agents.
We aim to provide a reference architecture in which agents are able to deployed, tools to take agents from development
to production, and an environment where they are continuously monitored and their performance evaluated. We also aim to
understand how to best support enabling tool/agent discovery and operationalization.

## Working Group Information

[Slack: #agentic-community-wg-operations](https://cloud-native.slack.com/archives/C08TJB9K75Y)

[📄 Meeting Notes](https://docs.google.com/document/d/1dgHHL2cW5sy84ofyW4jPPIh9fPO_LAWQiCtG5mvTgTo)

[📅 Meeting Invite](https://groups.google.com/a/agentic-community.com/g/wg-operations) - Sign up for the Google Group

## Projects

### [MCP Gateway & Registry](https://github.com/agentic-community/mcp-gateway-registry)

The [MCP Gateway & Registry](https://github.com/agentic-community/mcp-gateway-registry) is an enterprise-ready platform
that centralizes access to AI development tools using the Model Context Protocol (MCP). Instead of managing hundreds of
individual tool configurations across your development teams, provide secure, governed access to curated AI tools
through a single platform.

### [Agentic Reference Architecture](https://github.com/agentic-community/wg-operations/tree/main/proposals/0001-reference-architecture)

The [Agentic Reference Architecture](https://github.com/agentic-community/wg-operations/tree/main/proposals/0001-reference-architecture)
aims to highlight the components needed for an Agentic AI platform. The reference architecture does not suggest tools as
much as guide what kind of tools should be evaluated. Others may build implementations based on this architecture.

### [Agentic Templates](https://github.com/agentic-community/wg-operations/tree/main/projects/agent-building-template)

The [Agentic Templates](https://github.com/agentic-community/wg-operations/tree/main/projects/agent-building-template)
offer a way to build agents on CI/CD platforms in a way that facilitates local experimentation with production
deployments.

### [Agentic Productionalization](https://docs.google.com/document/d/11OXbydTjsNv0d-i4UzGMHbyGmNijyfyU/edit)

The [Agentic Productionalization](https://docs.google.com/document/d/11OXbydTjsNv0d-i4UzGMHbyGmNijyfyU/edit) guide steps
through taking a code sample and iteratively applying best practices and patterns to building agents using
the [Agentic Templates](https://github.com/agentic-community/wg-operations/tree/main/projects/agent-building-template)
and [Agentic Reference Architecture](https://github.com/agentic-community/wg-operations/tree/main/proposals/0001-reference-architecture)

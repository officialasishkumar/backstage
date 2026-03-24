---
id: preparing-for-ga
sidebar_label: 006 - Preparing for GA
title: Preparing for GA
description: How to prepare your Backstage instance for a company-wide general availability launch
---

We hope at this point that the developers you're working with have read the
[golden path on deploying Backstage](../deployment/index.md). Your Backstage
instance should be ready for the scale that comes with a full company launch.

## Launch announcements

A good launch announcement sets the tone for how your organization perceives
Backstage. You want developers to feel excited, not burdened.

### Where to announce

Meet your developers where they are. That usually means a combination of:

- A company-wide Slack or Teams channel.
- An engineering all-hands or town hall.
- An internal blog post or wiki page with more detail for those who want it.

### What to include

Your announcement should cover:

1. **What Backstage is and why it matters.** Keep this short. Link to
   the demo or your internal instance so people can explore on their own.
1. **What's in it for them.** Lead with the pain points you're solving. If
   your stakeholder feedback surfaced specific frustrations, reference those
   directly.
1. **How to get started.** Provide a clear first step. This might be
   "add a `catalog-info.yaml` to your repo" or "visit this URL and find your
   team's services." The lower the barrier, the better.
1. **Where to get help.** A dedicated Slack channel, office hours, or a
   contact person. People will have questions and you want them to feel
   supported.

:::tip

Consider recording a short demo video (under 5 minutes) walking through the
most relevant use case for your organization. A visual walkthrough can be more
compelling than a wall of text and is easy to share.

:::

### Timing

Avoid launching during crunch periods, holidays, or right after a major
incident. You want your developers to have bandwidth to explore. If your
company has a regular engineering newsletter or digest, coordinate with that
cycle.

## What to expect in the coming months

The first few weeks after launch tend to follow a predictable pattern.

### The initial wave

You'll see a spike in traffic and catalog registrations in the first week or
two. Developers who were already curious will jump in. Enjoy this momentum,
but don't mistake it for sustained adoption.

### The plateau

After the initial excitement fades, growth slows down. This is normal. Some
teams will adopt Backstage as part of their daily workflow. Others will visit
once, think "that's neat", and go back to what they were doing. Don't panic.
Focus your energy on the teams that are engaged and make their experience
great.

### The feedback loop

You'll start receiving feature requests, bug reports, and sometimes
complaints. This is a good sign. Developers who take the time to give
feedback are invested in the tool. Prioritize quick wins that show you're
listening. Fixing a broken link or adding a missing filter can build more
goodwill than a big feature that takes months.

### Metrics to watch

Go back to the metrics you defined during
[leadership buy-in](./002-leadership-buy-in.md). Track them consistently and
share progress with your stakeholders. Common metrics include:

- Daily and weekly active users.
- Number of catalog entities registered.
- Number of Scaffolder template runs.
- Time saved on onboarding or provisioning workflows.

## How to keep iterating

Launching is a milestone, not a finish line. Your Backstage instance needs
ongoing investment to stay relevant.

### Stay close to your users

Set up a regular cadence for gathering feedback. This could be a monthly
survey, a Slack channel where developers can request features, or periodic
user interviews. The goal is to keep a pulse on what's working and what
isn't.

### Ship small, ship often

Resist the urge to batch changes into large releases. Frequent, small
updates keep developers engaged and make it easier to course-correct.
A new plugin this week, a theme tweak next week, a bug fix the week
after. Steady progress builds confidence.

### Celebrate wins

When a team automates a painful workflow with a Scaffolder template, or when
catalog coverage hits a new milestone, share it. Internal case studies and
shout-outs reinforce the value of Backstage and encourage other teams to
invest.

### Plan for the long term

As adoption grows, you'll need to think about:

- **Governance.** Who approves new plugins? What standards do they need to
  meet?
- **Ownership.** Who maintains plugins after the original author moves on?
  The next section on [plugin ownership](./007-plugin-ownership.md) covers
  this in detail.
- **Scaling.** Are there performance bottlenecks? Do you need to separate
  frontend and backend deployments?

These aren't day-one concerns, but they're worth keeping on your radar as
you move from launch to long-term operation.
